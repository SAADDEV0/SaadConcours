// Admin session tokens.
//
// What this replaces: the session cookie used to be literally
// `sha256(ADMIN_PASSWORD)` — a constant. That has three problems, all of
// which matter more than the fact that it "worked":
//   1. It never expires. A cookie copied off a machine once stays valid
//      until the password itself is changed.
//   2. It can't be revoked. There is no way to end a session, because there
//      is no session — just a value that either matches the password hash or
//      doesn't.
//   3. It's the same value for every device, and it was also handed to the
//      mobile app in a JSON response body, so the same secret existed in an
//      httpOnly cookie *and* in a phone's storage.
//
// A token is now `base64url(payload).base64url(HMAC-SHA256(payload))` with
// the payload carrying `jti` (unique per session), `iat` and `exp`. Signed
// and verified with Web Crypto only, so this file is safe to import from
// middleware.js on the Edge runtime as well as from Node route handlers.

const TOKEN_TTL_SECONDS = 60 * 60 * 24 * 7; // 7 days

function b64urlEncode(bytes) {
  let bin = "";
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function b64urlDecodeToBytes(str) {
  const padded = str.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((str.length + 3) % 4);
  const bin = atob(padded);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

// Prefer a dedicated secret so that rotating sessions doesn't force the admin
// password to change (and vice versa). Falls back to the password so the app
// keeps working with the env vars it already has configured.
function signingSecret() {
  return process.env.ADMIN_SESSION_SECRET || process.env.ADMIN_PASSWORD || "";
}

async function hmacKey(secret) {
  return crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

export async function createSessionToken({ ttlSeconds = TOKEN_TTL_SECONDS } = {}) {
  const secret = signingSecret();
  if (!secret) return null;
  const now = Math.floor(Date.now() / 1000);
  const payload = {
    // Per-session id: what makes "this device" a thing that exists and can be
    // named in the audit log.
    jti: b64urlEncode(crypto.getRandomValues(new Uint8Array(12))),
    iat: now,
    exp: now + ttlSeconds,
  };
  const body = b64urlEncode(new TextEncoder().encode(JSON.stringify(payload)));
  const key = await hmacKey(secret);
  const sig = new Uint8Array(await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(body)));
  return { token: `${body}.${b64urlEncode(sig)}`, payload, maxAge: ttlSeconds };
}

// Returns the payload when the token is authentic and unexpired, null
// otherwise. Never throws: this runs on every gated request and a malformed
// cookie must read as "not logged in", not as a 500.
export async function verifySessionToken(token) {
  try {
    const secret = signingSecret();
    if (!secret || typeof token !== "string") return null;
    const dot = token.indexOf(".");
    if (dot <= 0) return null;
    const body = token.slice(0, dot);
    const sig = token.slice(dot + 1);

    const key = await hmacKey(secret);
    const ok = await crypto.subtle.verify(
      "HMAC",
      key,
      b64urlDecodeToBytes(sig),
      new TextEncoder().encode(body)
    );
    if (!ok) return null;

    const payload = JSON.parse(new TextDecoder().decode(b64urlDecodeToBytes(body)));
    if (typeof payload?.exp !== "number" || payload.exp <= Math.floor(Date.now() / 1000)) return null;
    return payload;
  } catch {
    return null;
  }
}

/* ------------------------------ Revocation --------------------------------
 * "Log out on every device" needs a server-side fact, but the check runs in
 * middleware on every gated request — a KV read per request would put
 * ~20ms of network on every admin page load and every API call.
 *
 * So revocation is a single epoch: one key holding a timestamp, and any token
 * issued before it is refused. Middleware reads that key at most once a
 * minute per runtime instance (the module-scope cache below; Edge instances
 * are reused across requests), which makes the check effectively free while
 * still taking effect within a minute.
 * ------------------------------------------------------------------------ */

const REVOKE_KEY = "session:revokedBefore";
const CACHE_MS = 60000;

let cached = { value: 0, at: 0 };
// Same globalThis trick as lib/auditLog.js, for the same reason: without KV,
// a module-scope variable isn't shared between the route that revokes and the
// code that checks. Note this still can't cross the Node/Edge boundary — in
// local dev without KV, "déconnecter tous les appareils" clears the cookie but
// the middleware check is a no-op. With KV configured (production) it works.
const MEM = (globalThis.__scSessionRevoke ||= { before: 0 });

function kvConfigured() {
  return Boolean(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
}

// Read via the REST endpoint directly rather than @vercel/kv: the SDK pulls
// in a client that isn't guaranteed to tree-shake cleanly into the Edge
// middleware bundle, and this is a single GET.
async function readRevokedBefore() {
  if (!kvConfigured()) return MEM.before;
  const res = await fetch(`${process.env.KV_REST_API_URL}/get/${REVOKE_KEY}`, {
    headers: { Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}` },
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`KV ${res.status}`);
  const json = await res.json();
  return Number(json?.result) || 0;
}

export async function isSessionRevoked(payload) {
  if (!payload?.iat) return true;
  try {
    const now = Date.now();
    if (now - cached.at > CACHE_MS) {
      cached = { value: await readRevokedBefore(), at: now };
    }
    return payload.iat < cached.value;
  } catch {
    // A KV outage must not lock the admin out of their own panel: the
    // signature and expiry checks have already passed, and those are the
    // guarantees that actually matter. Revocation degrades, auth does not.
    return false;
  }
}

// Called by the logout route with `all: true`. Sets the epoch to now, so
// every token issued so far stops verifying within the cache window.
export async function revokeAllSessions() {
  const now = Math.floor(Date.now() / 1000);
  MEM.before = now;
  cached = { value: now, at: Date.now() };
  if (!kvConfigured()) return;
  await fetch(`${process.env.KV_REST_API_URL}/set/${REVOKE_KEY}/${now}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}` },
  });
}

export const SESSION_COOKIE = "sc_admin";
