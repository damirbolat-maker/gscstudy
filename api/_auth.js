function unauthorized(res) {
  res.statusCode = 401;
  res.setHeader("WWW-Authenticate", 'Basic realm="GSC Admin API"');
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify({ ok: false, error: "unauthorized" }));
}

function parseBasicAuth(req) {
  const h = req.headers.authorization || req.headers.Authorization;
  if (!h || typeof h !== "string") return null;
  const m = h.match(/^Basic\s+(.+)$/i);
  if (!m) return null;
  try {
    const decoded = Buffer.from(m[1], "base64").toString("utf8");
    const idx = decoded.indexOf(":");
    if (idx < 0) return null;
    return { user: decoded.slice(0, idx), pass: decoded.slice(idx + 1) };
  } catch {
    return null;
  }
}

function requireAdminAuth(req, res) {
  const expectedUser = process.env.ADMIN_USER;
  const expectedPass = process.env.ADMIN_PASS;
  if (!expectedUser || !expectedPass) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.end(
      JSON.stringify({
        ok: false,
        error:
          "Missing ADMIN_USER/ADMIN_PASS env vars. Set them in Vercel (or export before: node server/index.js on VPS)."
      })
    );
    return false;
  }

  const creds = parseBasicAuth(req);
  if (!creds) {
    unauthorized(res);
    return false;
  }
  if (creds.user !== expectedUser || creds.pass !== expectedPass) {
    unauthorized(res);
    return false;
  }
  return true;
}

module.exports = { requireAdminAuth };

