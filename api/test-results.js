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

module.exports = async (req, res) => {
  const url = new URL(req.url, "http://localhost");

  // Public: save test result
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
      level: cleanStr(payload.level, 30),
    };

    await kv.set(`gsc:test_result:${r.id}`, r);
    await kv.lpush("gsc:test_results", r.id);
    await kv.ltrim("gsc:test_results", 0, 1999);
    return send(res, 200, { ok: true, result: r });
  }

  // Admin-only: list
  if (!requireAdminAuth(req, res)) return;

  if (req.method === "GET") {
    const limit = Math.min(2000, Math.max(1, parseInt(url.searchParams.get("limit") || "500", 10)));
    const ids = await kv.lrange("gsc:test_results", 0, limit - 1);
    const results = [];
    for (const id of ids || []) {
      const r = await kv.get(`gsc:test_result:${id}`);
      if (r) results.push(r);
    }
    return send(res, 200, { ok: true, results });
  }

  return send(res, 405, { ok: false, error: "method_not_allowed" });
};

