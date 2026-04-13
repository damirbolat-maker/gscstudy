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
  });
}

function normalizeKey(k) {
  if (!k || typeof k !== "string") return null;
  // allow only gsc_* style keys without prefix from the client
  if (!/^[a-z0-9_]+$/i.test(k)) return null;
  return `gsc:${k}`;
}

module.exports = async (req, res) => {
  const url = new URL(req.url, "http://localhost");
  const key = normalizeKey(url.searchParams.get("key"));
  if (!key) return send(res, 400, { ok: false, error: "bad_key" });

  if (req.method === "GET") {
    const value = await kv.get(key);
    return send(res, 200, { ok: true, key: url.searchParams.get("key"), value });
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
};

