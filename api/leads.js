const { kv } = require("@vercel/kv");
const { requireAdminAuth } = require("./_auth");

function send(res, status, json) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(json));
}

function readJson(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (c) => (body += c));
    req.on("end", () => {
      if (!body) return resolve(null);
      try {
        resolve(JSON.parse(body));
      } catch (e) {
        reject(e);
      }
    });
    req.on("error", reject);
  });
}

function nowIso() {
  return new Date().toISOString();
}

function uid() {
  return (
    Date.now().toString(36) +
    "-" +
    Math.random().toString(36).slice(2, 10) +
    "-" +
    Math.random().toString(36).slice(2, 10)
  );
}

function cleanStr(v, max = 200) {
  if (v == null) return "";
  const s = String(v).trim();
  return s.length > max ? s.slice(0, max) : s;
}

function cleanPhone(v) {
  return cleanStr(v, 40).replace(/[^\d+]/g, "");
}

function isEmail(v) {
  const s = cleanStr(v, 140);
  if (!s) return true;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

async function getBitrixWebhook() {
  const fromKv = await kv.get("gsc:bitrix_webhook");
  if (fromKv && typeof fromKv === "string") return fromKv.trim();
  const fromEnv = process.env.BITRIX24_WEBHOOK;
  return fromEnv ? String(fromEnv).trim() : "";
}

async function sendToBitrix24(lead) {
  const url = await getBitrixWebhook();
  if (!url) return { skipped: true };

  const payload = /crm\.lead\.add/i.test(url)
    ? {
        fields: {
          TITLE: `${lead.product || lead.source || "Сайт"} — заявка`,
          NAME: lead.name || "",
          PHONE: lead.phone ? [{ VALUE: lead.phone, VALUE_TYPE: "WORK" }] : [],
          EMAIL: lead.email ? [{ VALUE: lead.email, VALUE_TYPE: "WORK" }] : [],
          COMMENTS: `Город: ${lead.city || ""}\nСтраница: ${lead.page || ""}\nИсточник: ${
            lead.source || ""
          }\nПродукт: ${lead.product || ""}\nUTM: ${lead.utm || ""}`,
        },
      }
    : lead;

  const r = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const txt = await r.text().catch(() => "");
  if (!r.ok) throw new Error(`bitrix24_${r.status}: ${txt.slice(0, 200)}`);
  return { ok: true, response: txt };
}

module.exports = async (req, res) => {
  const url = new URL(req.url, "http://localhost");

  // Public: create lead
  if (req.method === "POST") {
    let payload;
    try {
      payload = await readJson(req);
    } catch {
      return send(res, 400, { ok: false, error: "bad_json" });
    }
    payload = payload || {};

    const lead = {
      id: uid(),
      created_at: nowIso(),
      status: "new",
      name: cleanStr(payload.name, 80),
      phone: cleanPhone(payload.phone),
      city: cleanStr(payload.city, 80),
      email: cleanStr(payload.email, 140),
      source: cleanStr(payload.source, 120) || "Сайт",
      product: cleanStr(payload.product || payload.course, 160),
      page: cleanStr(payload.page, 220),
      utm: cleanStr(payload.utm, 400),
      note: cleanStr(payload.note, 400),
    };

    if (!lead.name || !lead.phone) {
      return send(res, 400, { ok: false, error: "missing_fields" });
    }
    if (!isEmail(lead.email)) {
      return send(res, 400, { ok: false, error: "bad_email" });
    }

    await kv.set(`gsc:lead:${lead.id}`, lead);
    await kv.lpush("gsc:leads", lead.id);
    await kv.ltrim("gsc:leads", 0, 1999);

    // Fire-and-forget is risky in serverless; do sync but tolerate failures.
    let bitrix = null;
    try {
      bitrix = await sendToBitrix24(lead);
    } catch (e) {
      bitrix = { ok: false, error: String(e && e.message ? e.message : e) };
    }

    return send(res, 200, { ok: true, lead, bitrix });
  }

  // Admin-only below
  if (!requireAdminAuth(req, res)) return;

  if (req.method === "GET") {
    const limit = Math.min(2000, Math.max(1, parseInt(url.searchParams.get("limit") || "500", 10)));
    const ids = await kv.lrange("gsc:leads", 0, limit - 1);
    const leads = [];
    for (const id of ids || []) {
      const l = await kv.get(`gsc:lead:${id}`);
      if (l) leads.push(l);
    }
    // newest first (lpush) already, but keep deterministic
    return send(res, 200, { ok: true, leads });
  }

  if (req.method === "PATCH") {
    const id = url.searchParams.get("id");
    if (!id) return send(res, 400, { ok: false, error: "missing_id" });
    let payload;
    try {
      payload = await readJson(req);
    } catch {
      return send(res, 400, { ok: false, error: "bad_json" });
    }
    payload = payload || {};
    const lead = await kv.get(`gsc:lead:${id}`);
    if (!lead) return send(res, 404, { ok: false, error: "not_found" });
    const next = {
      ...lead,
      status: cleanStr(payload.status, 32) || lead.status,
      manager: cleanStr(payload.manager, 80) || lead.manager,
      note: cleanStr(payload.note, 400) || lead.note,
      updated_at: nowIso(),
    };
    await kv.set(`gsc:lead:${id}`, next);
    return send(res, 200, { ok: true, lead: next });
  }

  if (req.method === "DELETE") {
    const id = url.searchParams.get("id");
    if (!id) return send(res, 400, { ok: false, error: "missing_id" });
    await kv.del(`gsc:lead:${id}`);
    // keep id in list (soft delete) to avoid O(n) list cleanup
    return send(res, 200, { ok: true });
  }

  return send(res, 405, { ok: false, error: "method_not_allowed" });
};

