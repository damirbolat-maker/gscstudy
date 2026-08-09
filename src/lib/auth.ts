// Простая сессия для админки: подписанный HMAC-токен в httpOnly cookie.
// Использует Web Crypto — работает и в Node (server actions/route), и в Edge (middleware).

export const SESSION_COOKIE = "gsc_admin";
const MAX_AGE = 60 * 60 * 24 * 7; // 7 дней

function getSecret() {
  return process.env.AUTH_SECRET || "dev-secret-change-me";
}

function b64urlEncode(bytes: ArrayBuffer | Uint8Array) {
  const arr = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  let str = "";
  for (const b of arr) str += String.fromCharCode(b);
  return btoa(str).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

async function hmac(data: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(getSecret()),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(data));
  return b64urlEncode(sig);
}

export async function createSessionToken(username: string): Promise<string> {
  const payload = b64urlEncode(
    new TextEncoder().encode(
      JSON.stringify({ u: username, exp: Date.now() + MAX_AGE * 1000 })
    )
  );
  const sig = await hmac(payload);
  return `${payload}.${sig}`;
}

export async function verifySessionToken(
  token: string | undefined
): Promise<boolean> {
  if (!token || !token.includes(".")) return false;
  const [payload, sig] = token.split(".");
  const expected = await hmac(payload);
  if (sig !== expected) return false;
  try {
    const json = JSON.parse(
      new TextDecoder().decode(
        Uint8Array.from(
          atob(payload.replace(/-/g, "+").replace(/_/g, "/")),
          (c) => c.charCodeAt(0)
        )
      )
    );
    return typeof json.exp === "number" && json.exp > Date.now();
  } catch {
    return false;
  }
}

export function checkCredentials(username: string, password: string): boolean {
  const u = process.env.ADMIN_USERNAME || "admin";
  const p = process.env.ADMIN_PASSWORD || "admin";
  return username === u && password === p;
}

export const SESSION_MAX_AGE = MAX_AGE;
