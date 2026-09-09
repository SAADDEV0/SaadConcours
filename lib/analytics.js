// Lightweight event counters backed by Vercel KV (Upstash Redis under the
// hood — the project already has a free store connected, see
// KV_REST_API_URL/KV_REST_API_TOKEN in Vercel env vars). Unlike GitHub-as-DB
// for content, these are high-frequency writes (every PDF download, every
// concours open) — committing each one to the repo would spam the commit
// history, so they live in KV instead. Falls back to an in-memory store
// when KV isn't configured (local dev without the env vars), same pattern
// as lib/store.js's GITHUB_TOKEN fallback — the admin stats panel still
// works locally, just without persistence across restarts.

function kvConfigured() {
  return Boolean(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
}

let memory = null;
function mem() {
  if (!memory) {
    memory = { counters: new Map(), sortedSets: new Map(), lists: new Map() };
  }
  return memory;
}

async function getKv() {
  const { kv } = await import("@vercel/kv");
  return kv;
}

function todayKey() {
  return new Date().toISOString().slice(0, 10); // YYYY-MM-DD
}

async function incr(key) {
  if (kvConfigured()) {
    const kv = await getKv();
    await kv.incr(key);
    return;
  }
  const m = mem();
  m.counters.set(key, (m.counters.get(key) || 0) + 1);
}

async function getCount(key) {
  if (kvConfigured()) {
    const kv = await getKv();
    return (await kv.get(key)) || 0;
  }
  return mem().counters.get(key) || 0;
}

// Fixed-window rate limit for the public, unauthenticated /api/track/*
// endpoints — they only increment a counter, but with no limit at all
// anyone could spam them to inflate the admin's stats. `id` should already
// include the caller's IP; this just adds the time bucket. Fails open (lets
// the request through) if KV/memory itself errors, since a broken limiter
// blocking real traffic is worse than a limiter that occasionally doesn't
// limit.
// Vercel sits in front as a proxy, so the real client address is in
// x-forwarded-for (first entry), not req.ip.
export function getClientIp(req) {
  const fwd = req.headers.get("x-forwarded-for");
  return (fwd ? fwd.split(",")[0].trim() : null) || "unknown";
}

// City-level geolocation with zero extra cost/setup: Vercel's edge network
// stamps every request with these headers itself (no external geo-IP API,
// no key to configure) — see
// https://vercel.com/docs/edge-network/headers#x-vercel-ip-city. They're
// only present once actually deployed on Vercel, so local dev always falls
// back to "Inconnue".
export function getClientGeo(req) {
  const decode = (v) => {
    if (!v) return null;
    try {
      return decodeURIComponent(v);
    } catch {
      return v;
    }
  };
  const city = decode(req.headers.get("x-vercel-ip-city")) || "Inconnue";
  const country = req.headers.get("x-vercel-ip-country") || null;
  return { city, country };
}

export async function checkRateLimit(id, max, windowSeconds) {
  try {
    const bucket = Math.floor(Date.now() / (windowSeconds * 1000));
    const key = `ratelimit:${id}:${bucket}`;
    if (kvConfigured()) {
      const kv = await getKv();
      const count = await kv.incr(key);
      if (count === 1) await kv.expire(key, windowSeconds);
      return count <= max;
    }
    const m = mem();
    const count = (m.counters.get(key) || 0) + 1;
    m.counters.set(key, count);
    return count <= max;
  } catch {
    return true;
  }
}

async function zincr(key, member) {
  if (kvConfigured()) {
    const kv = await getKv();
    await kv.zincrby(key, 1, member);
    return;
  }
  const m = mem();
  if (!m.sortedSets.has(key)) m.sortedSets.set(key, new Map());
  const set = m.sortedSets.get(key);
  set.set(member, (set.get(member) || 0) + 1);
}

// Returns [{ member, score }] sorted by score desc, top `n`.
async function zTop(key, n) {
  if (kvConfigured()) {
    const kv = await getKv();
    // withScores flattens to [member, score, member, score, ...]
    const flat = await kv.zrange(key, 0, n - 1, { rev: true, withScores: true });
    const out = [];
    for (let i = 0; i < flat.length; i += 2) {
      out.push({ member: flat[i], score: Number(flat[i + 1]) });
    }
    return out;
  }
  const set = mem().sortedSets.get(key);
  if (!set) return [];
  return [...set.entries()]
    .map(([member, score]) => ({ member, score }))
    .sort((a, b) => b.score - a.score)
    .slice(0, n);
}

// Capped, newest-first event log (IP + city per visit/download — see
// trackVisitCity/trackPdfDownload below) — a sorted-set counter alone can
// answer "how many from Rabat" but not "who, exactly, and when", which is
// what the admin asked to see. Trimmed to MAX_LOG entries on every push so
// this never grows unbounded; that's a live rolling window, not an archive.
const MAX_LOG = 200;

async function pushLog(key, entry) {
  const json = JSON.stringify(entry);
  if (kvConfigured()) {
    const kv = await getKv();
    await kv.lpush(key, json);
    await kv.ltrim(key, 0, MAX_LOG - 1);
    return;
  }
  const m = mem();
  const list = m.lists.get(key) || [];
  list.unshift(json);
  m.lists.set(key, list.slice(0, MAX_LOG));
}

async function getLog(key, n) {
  if (kvConfigured()) {
    const kv = await getKv();
    const rows = await kv.lrange(key, 0, n - 1);
    return rows.map((r) => (typeof r === "string" ? JSON.parse(r) : r));
  }
  return (mem().lists.get(key) || []).slice(0, n).map((r) => JSON.parse(r));
}

/* ------------------------------- Public API ------------------------------- */

// `geo` (optional) is { ip, city, country } from the request — see
// getClientIp/getClientGeo above. Kept optional so any other caller of this
// function doesn't have to thread a request object through just to bump a
// counter.
export async function trackPdfDownload(kind, id, geo) {
  const day = todayKey();
  const tasks = [
    incr(`analytics:pdf:total`),
    incr(`analytics:pdf:day:${day}`),
    incr(`analytics:pdf:kind:${kind}`),
    id ? zincr(`analytics:pdf:byitem`, `${kind}:${id}`) : Promise.resolve(),
  ];
  if (geo?.city) {
    tasks.push(zincr(`analytics:pdf:city`, geo.city));
    tasks.push(pushLog(`analytics:log:pdf`, { ip: geo.ip, city: geo.city, country: geo.country, kind, id, at: new Date().toISOString() }));
  }
  await Promise.all(tasks);
}

export async function getPdfCities(n = 12) {
  return zTop(`analytics:pdf:city`, n);
}

export async function getRecentPdfDownloads(n = 30) {
  return getLog(`analytics:log:pdf`, n);
}

export async function trackConcoursView(id) {
  if (!id) return;
  await zincr(`analytics:view:concours`, id);
}

// Per-URL view counter — unlike trackPageview (fires once per browser ever,
// for the unique-visitor total) this fires on every single page load, so
// the admin can see how many times each individual page was viewed, not
// just concours detail pages (which trackConcoursView already covers).
// Also the natural place to log where visitors are actually coming from
// (city, IP) since it's the one tracker that fires on every real page load
// rather than once per browser — `geo` is optional, same contract as
// trackPdfDownload above.
export async function trackPathView(path, geo) {
  if (!path) return;
  const tasks = [zincr(`analytics:views:path`, path)];
  if (geo?.city) {
    tasks.push(zincr(`analytics:visits:city`, geo.city));
    tasks.push(pushLog(`analytics:log:visits`, { ip: geo.ip, city: geo.city, country: geo.country, path, at: new Date().toISOString() }));
  }
  await Promise.all(tasks);
}

export async function getTopPaths(n = 20) {
  return zTop(`analytics:views:path`, n);
}

export async function getVisitCities(n = 12) {
  return zTop(`analytics:visits:city`, n);
}

export async function getRecentVisits(n = 30) {
  return getLog(`analytics:log:visits`, n);
}

// First-party visit counter — every page load pings this once (see
// trackPageview in _shared/chrome.js), recorded straight into our own KV
// store instead of a third-party counter service, so it's readable back
// here for the admin dashboard. `source` is a short, pre-normalized label
// (e.g. "google", "facebook", "direct") computed client-side from
// document.referrer / utm_source — see initVisitorTracking in chrome.js.
export async function trackPageview(source) {
  const day = todayKey();
  const tasks = [incr(`analytics:visits:total`), incr(`analytics:visits:day:${day}`)];
  if (source) tasks.push(zincr(`analytics:visits:source`, source));
  await Promise.all(tasks);
}

// Own-inventory banner performance (app/_shared/partnerAds.js) — the numbers
// Saad shows an advertiser who asks "what did I get for my money". Kept in
// two sorted sets keyed by ad id rather than plain counters so the admin page
// can pull every ad's totals in two round-trips.
export async function trackAdEvent(id, type) {
  if (!id) return;
  await zincr(`analytics:ads:${type === "click" ? "clicks" : "views"}`, id);
}

export async function getAdStats() {
  const [views, clicks] = await Promise.all([
    zTop(`analytics:ads:views`, 100),
    zTop(`analytics:ads:clicks`, 100),
  ]);
  return {
    views: Object.fromEntries(views.map((v) => [v.member, v.score])),
    clicks: Object.fromEntries(clicks.map((c) => [c.member, c.score])),
  };
}

export async function getStats() {
  const day = todayKey();
  const last7 = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(Date.now() - i * 86400000).toISOString().slice(0, 10);
    last7.push(d);
  }

  const [pdfTotal, pdfToday, pdfByKind, pdfByItem, topConcours, week, visitsTotal, visitsToday, visitSources, visitsWeek] = await Promise.all([
    getCount(`analytics:pdf:total`),
    getCount(`analytics:pdf:day:${day}`),
    Promise.all(["concours", "cours", "evaluation"].map(async (k) => [k, await getCount(`analytics:pdf:kind:${k}`)])),
    zTop(`analytics:pdf:byitem`, 10),
    zTop(`analytics:view:concours`, 10),
    Promise.all(last7.map(async (d) => [d, await getCount(`analytics:pdf:day:${d}`)])),
    getCount(`analytics:visits:total`),
    getCount(`analytics:visits:day:${day}`),
    zTop(`analytics:visits:source`, 8),
    Promise.all(last7.map(async (d) => [d, await getCount(`analytics:visits:day:${d}`)])),
  ]);

  return {
    pdfTotal,
    pdfToday,
    pdfByKind: Object.fromEntries(pdfByKind),
    pdfByItem,
    topConcours,
    pdfLast7Days: week,
    visitsTotal,
    visitsToday,
    visitSources,
    visitsLast7Days: visitsWeek,
  };
}
