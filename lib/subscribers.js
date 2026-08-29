// Email addresses for the "concours ferme bientôt" alert, backed by Vercel
// KV (same store as lib/analytics.js). These must never land in
// public/data/*.json - that folder is committed to the public GitHub repo,
// and a subscriber's email would stay visible in git history forever even
// after being "deleted" from the current file. KV is the only place PII
// belongs in this project. Falls back to an in-memory Set for local dev
// without KV_REST_API_URL/KV_REST_API_TOKEN configured.

const SET_KEY = "alerts:subscribers";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function kvConfigured() {
  return Boolean(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
}

let memorySet = null;
function mem() {
  if (!memorySet) memorySet = new Set();
  return memorySet;
}

async function getKv() {
  const { kv } = await import("@vercel/kv");
  return kv;
}

export function normalizeEmail(raw) {
  return String(raw || "").trim().toLowerCase();
}

export function isValidEmail(email) {
  return EMAIL_RE.test(email) && email.length <= 254;
}

// Returns true if actually added (false if invalid or already subscribed).
export async function addSubscriber(rawEmail) {
  const email = normalizeEmail(rawEmail);
  if (!isValidEmail(email)) return false;
  if (kvConfigured()) {
    const kv = await getKv();
    const added = await kv.sadd(SET_KEY, email);
    return added === 1;
  }
  const had = mem().has(email);
  mem().add(email);
  return !had;
}

export async function removeSubscriber(rawEmail) {
  const email = normalizeEmail(rawEmail);
  if (kvConfigured()) {
    const kv = await getKv();
    const removed = await kv.srem(SET_KEY, email);
    return removed === 1;
  }
  return mem().delete(email);
}

export async function getSubscribers() {
  if (kvConfigured()) {
    const kv = await getKv();
    const members = await kv.smembers(SET_KEY);
    return (members || []).sort();
  }
  return [...mem()].sort();
}
