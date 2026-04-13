/**
 * GSC local API server — для VPS без Vercel.
 * Хранение: data/gsc-store.json (совместимо по ключам с KV).
 *
 * Запуск: ADMIN_USER=admin ADMIN_PASS=ваш_пароль node server/index.js
 * Порт: PORT (по умолчанию 3000)
 * Статика: каталог public/
 * Публичный URL для загрузок: SITE_URL (например https://gsc.kz)
 */

const fs = require("fs");
const path = require("path");
const express = require("express");
const { kv } = require("./local-kv");
const { requireAdminAuth } = require("../api/_auth");

const PUBLIC_DIR = path.join(__dirname, "..", "public");
const UPLOAD_ROOT = path.join(PUBLIC_DIR, "uploads");

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

function readRaw(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (c) => chunks.push(c));
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

function vercelUrl(req) {
  return req.originalUrl || req.url;
}

function normalizeKey(k) {
  if (!k || typeof k !== "string") return null;
  if (!/^[a-z0-9_]+$/i.test(k)) return null;
  return `gsc:${k}`;
}

/* ── data ── */
async function handleData(req, res) {
  const url = new URL(vercelUrl(req), "http://localhost");
  const key = normalizeKey(url.searchParams.get("key"));
  if (!key) return send(res, 400, { ok: false, error: "bad_key" });

  if (req.method === "GET") {
    const value = await kv.get(key);
    return send(res, 200, {
      ok: true,
      key: url.searchParams.get("key"),
      value
    });
  }

  if (req.method === "PUT") {
    if (!requireAdminAuth(req, res)) return;
    let payload;
    try {
      payload = await readJson(req);
    } catch {
      return send(res, 400, { ok: false, error: "bad_json" });
    }
    if (!payload || !("value" in payload)) {
      return send(res, 400, { ok: false, error: "missing_value" });
    }
    await kv.set(key, payload.value);
    return send(res, 200, { ok: true });
  }

  if (req.method === "DELETE") {
    if (!requireAdminAuth(req, res)) return;
    await kv.del(key);
    return send(res, 200, { ok: true });
  }

  return send(res, 405, { ok: false, error: "method_not_allowed" });
}

/* ── leads (same logic as api/leads.js) ── */
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
          }\nПродукт: ${lead.product || ""}\nUTM: ${lead.utm || ""}`
        }
      }
    : lead;

  const r = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  const txt = await r.text().catch(() => "");
  if (!r.ok) throw new Error(`bitrix24_${r.status}: ${txt.slice(0, 200)}`);
  return { ok: true, response: txt };
}

async function handleLeads(req, res) {
  const url = new URL(vercelUrl(req), "http://localhost");

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
      note: cleanStr(payload.note, 400)
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

    let bitrix = null;
    try {
      bitrix = await sendToBitrix24(lead);
    } catch (e) {
      bitrix = { ok: false, error: String(e && e.message ? e.message : e) };
    }

    return send(res, 200, { ok: true, lead, bitrix });
  }

  if (!requireAdminAuth(req, res)) return;

  if (req.method === "GET") {
    const limit = Math.min(
      2000,
      Math.max(1, parseInt(url.searchParams.get("limit") || "500", 10))
    );
    const ids = await kv.lrange("gsc:leads", 0, limit - 1);
    const leads = [];
    for (const id of ids || []) {
      const l = await kv.get(`gsc:lead:${id}`);
      if (l) leads.push(l);
    }
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
      updated_at: nowIso()
    };
    await kv.set(`gsc:lead:${id}`, next);
    return send(res, 200, { ok: true, lead: next });
  }

  if (req.method === "DELETE") {
    const id = url.searchParams.get("id");
    if (!id) return send(res, 400, { ok: false, error: "missing_id" });
    await kv.del(`gsc:lead:${id}`);
    return send(res, 200, { ok: true });
  }

  return send(res, 405, { ok: false, error: "method_not_allowed" });
}

/* ── test-results ── */
async function handleTestResults(req, res) {
  const url = new URL(vercelUrl(req), "http://localhost");

  if (req.method === "POST") {
    let payload;
    try {
      payload = await readJson(req);
    } catch {
      return send(res, 400, { ok: false, error: "bad_json" });
    }
    payload = payload || {};

    const r = {
      id: uid(),
      created_at: new Date().toISOString(),
      name: cleanStr(payload.name, 80),
      phone: cleanStr(payload.phone, 40),
      test_type: cleanStr(payload.test_type || payload.type, 40),
      test_name: cleanStr(payload.test_name || payload.typeName, 80),
      score: Number(payload.score || 0),
      total: Number(payload.total || 0),
      level: cleanStr(payload.level, 30)
    };

    await kv.set(`gsc:test_result:${r.id}`, r);
    await kv.lpush("gsc:test_results", r.id);
    await kv.ltrim("gsc:test_results", 0, 1999);
    return send(res, 200, { ok: true, result: r });
  }

  if (!requireAdminAuth(req, res)) return;

  if (req.method === "GET") {
    const limit = Math.min(
      2000,
      Math.max(1, parseInt(url.searchParams.get("limit") || "500", 10))
    );
    const ids = await kv.lrange("gsc:test_results", 0, limit - 1);
    const results = [];
    for (const id of ids || []) {
      const row = await kv.get(`gsc:test_result:${id}`);
      if (row) results.push(row);
    }
    return send(res, 200, { ok: true, results });
  }

  return send(res, 405, { ok: false, error: "method_not_allowed" });
}

function safeName(name) {
  return String(name || "file")
    .replace(/[^\w.\-]+/g, "_")
    .slice(0, 120);
}

/* ── blob-upload (локальные файлы в public/uploads) ── */
async function handleBlobUpload(req, res) {
  if (req.method !== "POST")
    return send(res, 405, { ok: false, error: "method_not_allowed" });
  if (!requireAdminAuth(req, res)) return;

  const url = new URL(vercelUrl(req), "http://localhost");
  const filename = safeName(url.searchParams.get("filename"));
  const folder = safeName(url.searchParams.get("folder") || "uploads");
  const contentType = req.headers["content-type"] || "application/octet-stream";

  const buf = await readRaw(req);
  if (!buf || !buf.length)
    return send(res, 400, { ok: false, error: "empty_body" });

  const relDir = path.join("gsc", folder);
  const diskDir = path.join(UPLOAD_ROOT, relDir);
  fs.mkdirSync(diskDir, { recursive: true });
  const diskName = `${Date.now()}_${filename}`;
  const diskPath = path.join(diskDir, diskName);
  fs.writeFileSync(diskPath, buf);

  const siteUrl = (process.env.SITE_URL || "").replace(/\/$/, "");
  const webPath = `/uploads/${relDir.replace(/\\/g, "/")}/${diskName}`;
  const outUrl = siteUrl ? `${siteUrl}${webPath}` : webPath;

  return send(res, 200, {
    ok: true,
    url: outUrl,
    pathname: webPath,
    contentType
  });
}

const app = express();
app.use(express.json({ limit: "2mb" }));

app.use("/uploads", express.static(UPLOAD_ROOT));
app.use(express.static(PUBLIC_DIR));

app.all("/api/data", handleData);
app.all("/api/leads", handleLeads);
app.all("/api/test-results", handleTestResults);
app.all("/api/blob-upload", handleBlobUpload);

app.get("/health", (_req, res) => {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify({ ok: true, mode: "local-kv" }));
});

const PORT = Number(process.env.PORT || 3000);
app.listen(PORT, () => {
  console.error(
    `GSC API + static listening on http://127.0.0.1:${PORT} (public → ${PUBLIC_DIR})`
  );
  if (!process.env.ADMIN_USER || !process.env.ADMIN_PASS) {
    console.error(
      "Warning: set ADMIN_USER and ADMIN_PASS or admin login will return 500."
    );
  }
});
