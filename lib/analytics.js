// Lightweight event counters backed by Upstash Redis (see lib/redis.js and
// the KV_REST_API_URL/KV_REST_API_TOKEN Worker secrets). Unlike GitHub-as-DB
// for content, these are high-frequency writes (every PDF download, every
// concours open) — committing each one to the repo would spam the commit
// history, so they live in KV instead. Falls back to an in-memory store
// when KV isn't configured (local dev without the env vars), same pattern
// as lib/store.js's GITHUB_TOKEN fallback — the admin stats panel still
// works locally, just without persistence across restarts.

import { dayKeysInRange, bucketGranularity, formatDayFr } from "./dateRange";
import { kvConfigured, getKv } from "./redis";

let memory = null;
function mem() {
  if (!memory) {
    memory = { counters: new Map(), sortedSets: new Map(), lists: new Map() };
  }
  return memory;
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

// Batch read for the timeline below — one round-trip via mget instead of N
// sequential kv.get calls, since a "last 30 days vs previous 30 days"
// comparison needs up to ~120 day-keys at once.
async function getCounts(keys) {
  if (!keys.length) return [];
  if (kvConfigured()) {
    const kv = await getKv();
    const vals = await kv.mget(...keys);
    return vals.map((v) => Number(v) || 0);
  }
  const m = mem();
  return keys.map((k) => m.counters.get(k) || 0);
}

// Fixed-window rate limit for the public, unauthenticated /api/track/*
// endpoints — they only increment a counter, but with no limit at all
// anyone could spam them to inflate the admin's stats. `id` should already
// include the caller's IP; this just adds the time bucket. Fails open (lets
// the request through) if KV/memory itself errors, since a broken limiter
// blocking real traffic is worse than a limiter that occasionally doesn't
// limit.
// Cloudflare sits in front, so the real client address is cf-connecting-ip
// (or the first x-forwarded-for entry), not req.ip.
export function getClientIp(req) {
  const fwd = req.headers.get("x-forwarded-for");
  return (
    req.headers.get("cf-connecting-ip") ||
    (fwd ? fwd.split(",")[0].trim() : null) ||
    "unknown"
  );
}

// A full IP is personal data; a city-level "who visited" view doesn't need
// one. Stored log entries keep only the network part — the last octet of an
// IPv4 and everything past the /48 of an IPv6 are zeroed — which is enough
// to tell two visitors apart in a 200-entry rolling window without keeping
// something that identifies a person. The *unmasked* address is still used
// for rate-limit keys, which never leave memory/KV as a value.
export function anonymizeIp(ip) {
  if (!ip || ip === "unknown") return "unknown";
  if (ip.includes(".")) {
    const parts = ip.split(".");
    if (parts.length !== 4) return "unknown";
    return `${parts[0]}.${parts[1]}.${parts[2]}.0`;
  }
  if (ip.includes(":")) {
    const parts = ip.split(":");
    return parts.slice(0, 3).join(":") + "::";
  }
  return "unknown";
}

// City-level geolocation with zero extra cost/setup: Cloudflare's edge
// stamps every request with cf-ipcountry, and with cf-ipcity once the free
// "Add visitor location headers" managed transform is on. Absent in local
// dev, which therefore always reports "Inconnue".
export function getClientGeo(req) {
  const decode = (v) => {
    if (!v) return null;
    try {
      return decodeURIComponent(v);
    } catch {
      return v;
    }
  };
  const city = decode(req.headers.get("cf-ipcity")) || "Inconnue";
  const country = req.headers.get("cf-ipcountry") || null;
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

// Same fixed window as checkRateLimit, for a caller holding `n` events of one
// kind at once (/api/track/batch). Charging them one at a time cost one KV
// command per event — on a batch that is most of what the request spends, and
// the free tier meters commands, not requests. A single incrby lands the same
// number in the same key, so an IP's budget is unchanged; only the number of
// round-trips to reach it drops.
// Returns how many of the `n` fit under `max` — a batch that straddles the
// limit gets its first few events recorded and the rest dropped, exactly as
// it would have one by one. Fails open like checkRateLimit.
export async function checkRateLimitBulk(id, n, max, windowSeconds) {
  if (n <= 0) return 0;
  try {
    const bucket = Math.floor(Date.now() / (windowSeconds * 1000));
    const key = `ratelimit:${id}:${bucket}`;
    let count;
    if (kvConfigured()) {
      const kv = await getKv();
      count = await kv.incrby(key, n);
      if (count === n) await kv.expire(key, windowSeconds);
    } else {
      const m = mem();
      count = (m.counters.get(key) || 0) + n;
      m.counters.set(key, count);
    }
    // `count - n` is what the window held before this batch.
    return Math.max(0, Math.min(n, max - (count - n)));
  } catch {
    return n;
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

// Trimming on *every* push doubled the KV command cost of the busiest writer
// on the site (trackPathView logs one entry per page load), and the free
// Upstash tier is metered per command. Trimming one push in TRIM_ODDS instead
// lets the list drift a few entries past MAX_LOG between trims, which costs
// nothing: every reader goes through getLog, which asks for an explicit `n`,
// so entries past the window are never read — they just wait to be cut.
const TRIM_ODDS = 20;

async function pushLog(key, entry) {
  const json = JSON.stringify(entry);
  if (kvConfigured()) {
    const kv = await getKv();
    await kv.lpush(key, json);
    if (Math.random() < 1 / TRIM_ODDS) await kv.ltrim(key, 0, MAX_LOG - 1);
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
    tasks.push(pushLog(`analytics:log:pdf`, { ip: anonymizeIp(geo.ip), city: geo.city, country: geo.country, kind, id, at: new Date().toISOString() }));
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

// A visitor typed something in the /concours search box and got zero
// results — the clearest "we don't have this" signal there is, cheaper to
// track than inferring content gaps from page views. Normalized
// (trim/lowercase) so "FSJES Agdal" and "fsjes agdal " count as the same
// term instead of splitting the tally. See app/concours/ConcoursExplorer.js
// for the debounced caller (only fires ~1s after typing stops, so a term
// isn't counted once per keystroke).
// The sorted set answers "which terms, how often" but carries no notion of
// time — a term searched 20 times last month looked identical to one
// searched 20 times this morning. The log adds the "when" (one entry per
// miss, newest first) so the dashboard can date each term; it's the same
// capped rolling window as the PDF log, so terms whose last occurrence has
// scrolled out of it simply show no date rather than a wrong one.
export async function trackSearchMiss(query) {
  const q = String(query || "").trim().toLowerCase().slice(0, 80);
  if (!q) return;
  await Promise.all([
    zincr(`analytics:search:miss`, q),
    pushLog(`analytics:log:search`, { query: q, at: new Date().toISOString() }),
  ]);
}

export async function getTopSearchMisses(n = 15) {
  return zTop(`analytics:search:miss`, n);
}

export async function getSearchMissLog(n = MAX_LOG) {
  return getLog(`analytics:log:search`, n);
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
    tasks.push(pushLog(`analytics:log:visits`, { ip: anonymizeIp(geo.ip), city: geo.city, country: geo.country, path, at: new Date().toISOString() }));
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
//
// Plus one sorted set per day (`v:<id>` / `c:<id>`), so the console can show
// the last 7 / 30 days and a day-by-day report to hand the advertiser, not
// only an all-time total. Views are counted only when the banner was
// actually on screen (see mountAdZone in chrome.js), which keeps this second
// write well under what the old per-rotation counting cost.
export async function trackAdEvent(id, type) {
  if (!id) return;
  const click = type === "click";
  await Promise.all([
    zincr(`analytics:ads:${click ? "clicks" : "views"}`, id),
    zincr(`analytics:ads:day:${todayKey()}`, `${click ? "c" : "v"}:${id}`),
  ]);
}

/* --------------------------- Range-scoped reads ---------------------------
 * Everything above answers a fixed question ("today", "last 7 days"). The
 * dashboard now has a period picker, so it needs the same numbers over an
 * arbitrary [from, to] — plus the equal-length window before it, which is
 * what every "vs période précédente" badge compares against.
 *
 * Cost stays flat in the number of days: each series is a single mget over
 * its day keys, so a 365-day range is the same number of round-trips as a
 * 7-day one. That is the whole reason the daily counters exist.
 * ------------------------------------------------------------------------ */

// [[dayKey, count], ...] oldest first, zero-filled for days with no events.
export async function getDailySeries(prefix, from, to) {
  const keys = dayKeysInRange(from, to);
  const counts = await getCounts(keys.map((k) => `${prefix}:day:${k}`));
  return keys.map((k, i) => [k, counts[i]]);
}

async function sumRange(prefix, from, to) {
  const keys = dayKeysInRange(from, to);
  if (!keys.length) return 0;
  const counts = await getCounts(keys.map((k) => `${prefix}:day:${k}`));
  return counts.reduce((a, b) => a + b, 0);
}

// 365 daily points are noise on a 600px-wide chart and unreadable on an
// axis, so long ranges collapse to weeks or months. Done here rather than on
// the client so the payload shrinks with the aggregation instead of shipping
// a year of dailies for the browser to throw away.
function bucketSeries(series, granularity) {
  if (granularity === "day") {
    // fr-FR abbreviates weekdays with a trailing period ("jeu."), which on a
    // chart axis reads as punctuation noise rather than a label.
    return series.map(([day, value]) => ({
      key: day,
      label: formatDayFr(day, { weekday: "short" }).replace(".", ""),
      full: formatDayFr(day, { weekday: "long", day: "numeric", month: "long" }),
      value,
    }));
  }
  const buckets = new Map();
  for (const [day, value] of series) {
    let key;
    if (granularity === "month") {
      key = day.slice(0, 7);
    } else {
      // ISO-ish week bucket: snap to the Monday of that day's week.
      const [y, m, d] = day.split("-").map(Number);
      const date = new Date(Date.UTC(y, m - 1, d));
      const dow = (date.getUTCDay() + 6) % 7; // Mon = 0
      date.setUTCDate(date.getUTCDate() - dow);
      key = date.toISOString().slice(0, 10);
    }
    const prev = buckets.get(key);
    if (prev) prev.value += value;
    else buckets.set(key, { key, value, first: day, last: day });
    const b = buckets.get(key);
    if (day < b.first) b.first = day;
    if (day > b.last) b.last = day;
  }
  return [...buckets.values()].map((b) => ({
    key: b.key,
    label:
      granularity === "month"
        ? formatDayFr(b.key + "-01", { month: "short" })
        : formatDayFr(b.first, { day: "numeric", month: "short" }),
    full: granularity === "month" ? b.key : `${b.first} → ${b.last}`,
    value: b.value,
  }));
}

function pctChange(curr, prev) {
  if (prev > 0) return Math.round(((curr - prev) / prev) * 1000) / 10;
  return curr > 0 ? 100 : 0;
}

// The period-scoped core of the dashboard: totals, the plotted series, and
// the delta against the previous window of the same length — for both
// tracked metrics, in four mgets.
export async function getRangeMetrics(range) {
  const granularity = bucketGranularity(range.days);
  const [visitsSeries, pdfSeries, prevVisits, prevPdf] = await Promise.all([
    getDailySeries("analytics:visits", range.from, range.to),
    getDailySeries("analytics:pdf", range.from, range.to),
    sumRange("analytics:visits", range.prevFrom, range.prevTo),
    sumRange("analytics:pdf", range.prevFrom, range.prevTo),
  ]);

  const visits = visitsSeries.reduce((s, [, n]) => s + n, 0);
  const pdf = pdfSeries.reduce((s, [, n]) => s + n, 0);
  const dayCount = Math.max(1, visitsSeries.length);

  return {
    granularity,
    visits: {
      total: visits,
      prev: prevVisits,
      deltaPct: pctChange(visits, prevVisits),
      perDay: Math.round((visits / dayCount) * 10) / 10,
      best: pdfSeries.length ? Math.max(...visitsSeries.map(([, n]) => n)) : 0,
      points: bucketSeries(visitsSeries, granularity),
      daily: visitsSeries,
    },
    pdf: {
      total: pdf,
      prev: prevPdf,
      deltaPct: pctChange(pdf, prevPdf),
      perDay: Math.round((pdf / dayCount) * 10) / 10,
      best: pdfSeries.length ? Math.max(...pdfSeries.map(([, n]) => n)) : 0,
      points: bucketSeries(pdfSeries, granularity),
      daily: pdfSeries,
    },
    // Not a per-visitor funnel (visits and downloads are separate anonymous
    // counters, never joined by session) — just the aggregate ratio, same
    // caveat as the old timeline widget carried.
    conversionPct: visits > 0 ? Math.round((pdf / visits) * 1000) / 10 : 0,
    prevConversionPct: prevVisits > 0 ? Math.round((prevPdf / prevVisits) * 1000) / 10 : 0,
  };
}

// `days` : the last N days, oldest first, each { date, views: {id: n},
// clicks: {id: n} } — one small sorted set per day, read in a single
// pipelined round-trip.
export async function getAdStats({ days = 30 } = {}) {
  const dates = [];
  for (let i = days - 1; i >= 0; i--) dates.push(new Date(Date.now() - i * 86400000).toISOString().slice(0, 10));
  const [views, clicks, perDay] = await Promise.all([
    zTop(`analytics:ads:views`, 100),
    zTop(`analytics:ads:clicks`, 100),
    Promise.all(dates.map((d) => zTop(`analytics:ads:day:${d}`, 400).catch(() => []))),
  ]);
  return {
    views: Object.fromEntries(views.map((v) => [v.member, v.score])),
    clicks: Object.fromEntries(clicks.map((c) => [c.member, c.score])),
    days: dates.map((date, i) => {
      const day = { date, views: {}, clicks: {} };
      for (const { member, score } of perDay[i]) {
        const sep = member.indexOf(":");
        const bucket = member.slice(0, sep) === "c" ? day.clicks : day.views;
        bucket[member.slice(sep + 1)] = score;
      }
      return day;
    }),
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

function dayKeyAgo(n) {
  return new Date(Date.now() - n * 86400000).toISOString().slice(0, 10);
}

// Sums the daily `${prefix}:day:YYYY-MM-DD` counters for the inclusive range
// [endDaysAgo, startDaysAgo] (e.g. sumDayRange(p, 7, 1) = the 7 days before
// today, excluding today itself) in a single mget round-trip.
async function sumDayRange(prefix, startDaysAgo, endDaysAgo) {
  const keys = [];
  for (let i = startDaysAgo; i >= endDaysAgo; i--) keys.push(`${prefix}:day:${dayKeyAgo(i)}`);
  const counts = await getCounts(keys);
  return counts.reduce((a, b) => a + b, 0);
}

// Percent change vs the prior period, rounded to one decimal. Previous
// period at 0 has no meaningful ratio — treated as +100% if there's any
// activity now, 0% if both periods are empty, same convention as
// trendFromSeries on the client (never fabricate a number from 0/0).
function deltaPct(curr, prev) {
  if (prev > 0) return Math.round(((curr - prev) / prev) * 1000) / 10;
  return curr > 0 ? 100 : 0;
}

// visits→PDF conversion for the period — "of the people who came, how many
// left with a PDF". Not a strict per-visitor funnel (visits and downloads
// are separate anonymous counters, not joined by session), just the
// aggregate ratio, which is still the cheapest real engagement signal
// available without adding session tracking.
function conversionPct(pdf, visits) {
  return visits > 0 ? Math.round((pdf / visits) * 1000) / 10 : 0;
}

// Rolling-window comparisons for the dashboard's "Timeline" widget: hier,
// 7 derniers jours, 30 derniers jours, 365 derniers jours — each against the
// equal-length period right before it. Built entirely from the daily
// counters trackPageview/trackPdfDownload already write (analytics:*:day:*),
// so it works retroactively on data collected before this existed, no
// backfill needed. KV round-trips stay flat (4 mget calls) regardless of
// window size since sumDayRange batches every key in one request.
export async function getTimeline() {
  const [
    visitsYesterday,
    pdfYesterday,
    visitsWeek,
    pdfWeek,
    visitsPrevWeek,
    pdfPrevWeek,
    visitsMonth,
    pdfMonth,
    visitsPrevMonth,
    pdfPrevMonth,
    visitsYear,
    pdfYear,
    visitsPrevYear,
    pdfPrevYear,
  ] = await Promise.all([
    sumDayRange("analytics:visits", 1, 1),
    sumDayRange("analytics:pdf", 1, 1),
    sumDayRange("analytics:visits", 7, 1),
    sumDayRange("analytics:pdf", 7, 1),
    sumDayRange("analytics:visits", 14, 8),
    sumDayRange("analytics:pdf", 14, 8),
    sumDayRange("analytics:visits", 30, 1),
    sumDayRange("analytics:pdf", 30, 1),
    sumDayRange("analytics:visits", 60, 31),
    sumDayRange("analytics:pdf", 60, 31),
    sumDayRange("analytics:visits", 365, 1),
    sumDayRange("analytics:pdf", 365, 1),
    sumDayRange("analytics:visits", 730, 366),
    sumDayRange("analytics:pdf", 730, 366),
  ]);

  return {
    yesterday: { visits: visitsYesterday, pdf: pdfYesterday },
    week: {
      visits: visitsWeek,
      pdf: pdfWeek,
      visitsDeltaPct: deltaPct(visitsWeek, visitsPrevWeek),
      pdfDeltaPct: deltaPct(pdfWeek, pdfPrevWeek),
      conversionPct: conversionPct(pdfWeek, visitsWeek),
    },
    month: {
      visits: visitsMonth,
      pdf: pdfMonth,
      visitsDeltaPct: deltaPct(visitsMonth, visitsPrevMonth),
      pdfDeltaPct: deltaPct(pdfMonth, pdfPrevMonth),
      conversionPct: conversionPct(pdfMonth, visitsMonth),
    },
    year: {
      visits: visitsYear,
      pdf: pdfYear,
      visitsDeltaPct: deltaPct(visitsYear, visitsPrevYear),
      pdfDeltaPct: deltaPct(pdfYear, pdfPrevYear),
      conversionPct: conversionPct(pdfYear, visitsYear),
    },
  };
}



/* ------------------------- Lectures de la console v6 -------------------------
 * Classements bruts (identifiants, pas de libellés) : c'est le navigateur de
 * l'admin, qui a déjà tout le contenu en mémoire, qui transforme un id en
 * titre. Le Worker n'a ainsi plus à charger concours.json (3 Mo) juste pour
 * afficher des libellés — ce que faisait /api/admin/stats à chaque appel.
 * ------------------------------------------------------------------------ */

export async function getTopPdfItems(n = 30) {
  return zTop(`analytics:pdf:byitem`, n);
}

export async function getTopConcoursViews(n = 30) {
  return zTop(`analytics:view:concours`, n);
}

export async function getVisitSources(n = 12) {
  return zTop(`analytics:visits:source`, n);
}

export async function getTotals() {
  const day = todayKey();
  const [visitsTotal, visitsToday, pdfTotal, pdfToday, pdfByKind] = await Promise.all([
    getCount(`analytics:visits:total`),
    getCount(`analytics:visits:day:${day}`),
    getCount(`analytics:pdf:total`),
    getCount(`analytics:pdf:day:${day}`),
    getCounts(["concours", "cours", "evaluation"].map((k) => `analytics:pdf:kind:${k}`)),
  ]);
  return {
    visitsTotal: Number(visitsTotal) || 0,
    visitsToday: Number(visitsToday) || 0,
    pdfTotal: Number(pdfTotal) || 0,
    pdfToday: Number(pdfToday) || 0,
    pdfByKind: { concours: pdfByKind[0], cours: pdfByKind[1], evaluation: pdfByKind[2] },
  };
}

// Boutique : vues des fiches et clics sur « Acheter » (départs vers Gumroad).
// Gumroad compte les ventes ; ces deux compteurs disent combien de visiteurs
// se sont intéressés à un cahier et combien sont allés jusqu'au paiement.
export async function trackShopEvent(id, type) {
  if (!id) return;
  await zincr(`analytics:shop:${type === "click" ? "clicks" : "views"}`, id);
}

export async function getShopStats() {
  const [views, clicks] = await Promise.all([zTop(`analytics:shop:views`, 200), zTop(`analytics:shop:clicks`, 200)]);
  return {
    views: Object.fromEntries(views.map((v) => [v.member, v.score])),
    clicks: Object.fromEntries(clicks.map((c) => [c.member, c.score])),
  };
}
