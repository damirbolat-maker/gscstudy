const { put } = require("@vercel/blob");
const { requireAdminAuth } = require("./_auth");

function send(res, status, json) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(json));
}

function readRaw(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (c) => chunks.push(c));
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

function safeName(name) {
  return String(name || "file")
    .replace(/[^\w.\-]+/g, "_")
    .slice(0, 120);
}

module.exports = async (req, res) => {
  if (req.method !== "POST") return send(res, 405, { ok: false, error: "method_not_allowed" });
  if (!requireAdminAuth(req, res)) return;

  const url = new URL(req.url, "http://localhost");
  const filename = safeName(url.searchParams.get("filename"));
  const folder = safeName(url.searchParams.get("folder") || "uploads");
  const contentType = req.headers["content-type"] || "application/octet-stream";

  const buf = await readRaw(req);
  if (!buf || !buf.length) return send(res, 400, { ok: false, error: "empty_body" });

  const key = `gsc/${folder}/${Date.now()}_${filename}`;
  const out = await put(key, buf, {
    access: "public",
    contentType
  });

  return send(res, 200, { ok: true, url: out.url, pathname: out.pathname, contentType });
};

