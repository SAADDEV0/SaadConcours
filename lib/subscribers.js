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

// Growth history — a daily snapshot of the total subscriber count, written
// only when the count actually changes (subscribe/unsubscribe), never
// fabricated. Days with no snapshot are forward-filled from the last known
// value when read (see getSubscriberHistory), same "real numbers only"
// principle as lib/analytics.js.
const HISTORY_PREFIX = "alerts:subscribers:day:";

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

let memoryHistory = null;
function memHistory() {
  if (!memoryHistory) memoryHistory = new Map();
  return memoryHistory;
}

async function snapshotToday(count) {
  const day = todayKey();
  if (kvConfigured()) {
    const kv = await getKv();
    await kv.set(HISTORY_PREFIX + day, count);
    return;
  }
  memHistory().set(day, count);
}

export async function getSubscriberHistory(days = 14) {
  const out = [];
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(Date.now() - i * 86400000).toISOString().slice(0, 10);
    let count = null;
    if (kvConfigured()) {
      const kv = await getKv();
      count = await kv.get(HISTORY_PREFIX + d);
    } else {
      count = memHistory().has(d) ? memHistory().get(d) : null;
    }
    out.push({ date: d, count });
  }
  let last = 0;
  return out.map((p) => {
    if (p.count === null || p.count === undefined) return { date: p.date, count: last };
    last = p.count;
    return { date: p.date, count: last };
  });
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
    if (added === 1) {
      await snapshotToday(await kv.scard(SET_KEY));
      await recordSubscribedAt(email);
    }
    return added === 1;
  }
  const had = mem().has(email);
  mem().add(email);
  if (!had) {
    await snapshotToday(mem().size);
    await recordSubscribedAt(email);
  }
  return !had;
}

export async function removeSubscriber(rawEmail) {
  const email = normalizeEmail(rawEmail);
  if (kvConfigured()) {
    const kv = await getKv();
    const removed = await kv.srem(SET_KEY, email);
    if (removed === 1) {
      await snapshotToday(await kv.scard(SET_KEY));
      await forgetSubscribedAt(email);
    }
    return removed === 1;
  }
  const had = mem().delete(email);
  if (had) {
    await snapshotToday(mem().size);
    await forgetSubscribedAt(email);
  }
  return had;
}

export async function getSubscribers() {
  if (kvConfigured()) {
    const kv = await getKv();
    const members = await kv.smembers(SET_KEY);
    return (members || []).sort();
  }
  return [...mem()].sort();
}

// When each subscriber joined — a sorted set (score = subscribe timestamp)
// kept alongside SET_KEY purely so the admin dashboard can show "who just
// subscribed" with a real date instead of an unordered list. Deliberately
// best-effort and non-blocking: a failure here must never break the actual
// subscribe/unsubscribe flow above, so every call is wrapped and swallowed.
const TIMESTAMPS_KEY = "alerts:subscribers:timestamps";

let memoryTimestamps = null;
function memTimestamps() {
  if (!memoryTimestamps) memoryTimestamps = new Map();
  return memoryTimestamps;
}

async function recordSubscribedAt(email) {
  try {
    if (kvConfigured()) {
      const kv = await getKv();
      await kv.zadd(TIMESTAMPS_KEY, { score: Date.now(), member: email });
    } else {
      memTimestamps().set(email, Date.now());
    }
  } catch (err) {
    console.error("recordSubscribedAt failed (non-fatal)", err);
  }
}

async function forgetSubscribedAt(email) {
  try {
    if (kvConfigured()) {
      const kv = await getKv();
      await kv.zrem(TIMESTAMPS_KEY, email);
    } else {
      memTimestamps().delete(email);
    }
  } catch (err) {
    console.error("forgetSubscribedAt failed (non-fatal)", err);
  }
}

// Normalizes whatever shape the KV client returns for a ZRANGE ...
// WITHSCORES call — different @vercel/kv / @upstash/redis versions have
// returned either a flat [member, score, member, score, ...] array or an
// array of {member, score} objects, so both are handled defensively rather
// than trusting one exact shape from a store we can't test against locally.
function normalizeZRangeWithScores(raw) {
  if (!Array.isArray(raw)) return [];
  if (raw.length && typeof raw[0] === "object" && raw[0] !== null && "member" in raw[0]) {
    return raw.map((r) => ({ email: r.member, subscribedAt: Number(r.score) }));
  }
  const out = [];
  for (let i = 0; i < raw.length - 1; i += 2) {
    out.push({ email: raw[i], subscribedAt: Number(raw[i + 1]) });
  }
  return out;
}

// Most recently subscribed emails with a real timestamp, newest first.
// Subscribers who joined before this feature shipped simply have no entry
// here (never fabricated) — they just won't appear in this specific list.
export async function getRecentSubscribers(limit = 8) {
  try {
    if (kvConfigured()) {
      const kv = await getKv();
      const raw = await kv.zrange(TIMESTAMPS_KEY, 0, limit - 1, { rev: true, withScores: true });
      return normalizeZRangeWithScores(raw).slice(0, limit);
    }
    return [...memTimestamps().entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, limit)
      .map(([email, subscribedAt]) => ({ email, subscribedAt }));
  } catch (err) {
    console.error("getRecentSubscribers failed (non-fatal)", err);
    return [];
  }
}
