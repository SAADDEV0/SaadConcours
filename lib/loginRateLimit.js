// Blocks brute-forcing /api/admin/login — Node-only (uses @vercel/kv), so
// this must stay out of middleware.js (Edge runtime). Same
// KV-with-in-memory-fallback pattern as lib/subscribers.js: real limiting
// in production, best-effort per-instance limiting in local dev without
// KV_REST_API_URL/KV_REST_API_TOKEN configured.

const MAX_ATTEMPTS = 5;
const WINDOW_SECONDS = 15 * 60;

function kvConfigured() {
  return Boolean(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
}

async function getKv() {
  const { kv } = await import("@vercel/kv");
  return kv;
}

const memoryAttempts = new Map(); // ip -> { count, resetAt }

export function clientIp(req) {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "unknown";
}

// Returns { blocked, retryAfter } — retryAfter in seconds when blocked.
export async function checkLoginRateLimit(ip) {
  if (kvConfigured()) {
    const kv = await getKv();
    const key = `login:fail:${ip}`;
    const count = Number((await kv.get(key)) || 0);
    if (count >= MAX_ATTEMPTS) {
      const ttl = await kv.ttl(key);
      return { blocked: true, retryAfter: ttl > 0 ? ttl : WINDOW_SECONDS };
    }
    return { blocked: false };
  }
  const entry = memoryAttempts.get(ip);
  if (entry && entry.resetAt > Date.now() && entry.count >= MAX_ATTEMPTS) {
    return { blocked: true, retryAfter: Math.ceil((entry.resetAt - Date.now()) / 1000) };
  }
  return { blocked: false };
}

export async function recordFailedLogin(ip) {
  if (kvConfigured()) {
    const kv = await getKv();
    const key = `login:fail:${ip}`;
    const count = await kv.incr(key);
    if (count === 1) await kv.expire(key, WINDOW_SECONDS);
    return;
  }
  const now = Date.now();
  const entry = memoryAttempts.get(ip);
  if (!entry || entry.resetAt <= now) {
    memoryAttempts.set(ip, { count: 1, resetAt: now + WINDOW_SECONDS * 1000 });
  } else {
    entry.count += 1;
  }
}

export async function clearLoginAttempts(ip) {
  if (kvConfigured()) {
    const kv = await getKv();
    await kv.del(`login:fail:${ip}`);
    return;
  }
  memoryAttempts.delete(ip);
}
