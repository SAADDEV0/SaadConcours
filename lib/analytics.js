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

// Sur globalThis : en dev, chaque route est empaquetée à part et aurait sa
// propre copie du module — les visites écrites par /api/track/batch restaient
// alors invisibles pour /api/admin/metrics.
function mem() {
  globalThis.__scAnalyticsMemory ||= { counters: new Map(), sortedSets: new Map(), lists: new Map() };
  return globalThis.__scAnalyticsMemory;
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

async function zincr(key, member, by = 1) {
  if (kvConfigured()) {
    const kv = await getKv();
    await kv.zincrby(key, by, member);
    return;
  }
  const m = mem();
  if (!m.sortedSets.has(key)) m.sortedSets.set(key, new Map());
  const set = m.sortedSets.get(key);
  set.set(member, (set.get(member) || 0) + by);
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
    // v2 : classement des PDF du jour, pour un classement sur la période.
    id ? zincr(`analytics:pdf:items:day:${day}`, `${kind}:${id}`) : Promise.resolve(),
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

// « Traité » dans la console : le terme quitte le classement (le contenu
// manquant a été ajouté, ou c'était une faute de frappe). S'il est de nouveau
// cherché sans résultat, il y revient à partir de 1.
export async function dismissSearchMiss(query) {
  const q = String(query ?? "").trim().toLowerCase().slice(0, 80);
  if (!q) return false;
  if (kvConfigured()) {
    const kv = await getKv();
    return Boolean(await kv.zrem(`analytics:search:miss`, q));
  }
  return mem().sortedSets.get(`analytics:search:miss`)?.delete(q) || false;
}

// Per-URL view counter — unlike trackPageview (fires once per browser ever,
// for the unique-visitor total) this fires on every single page load, so
// the admin can see how many times each individual page was viewed, not
// just concours detail pages (which trackConcoursView already covers).
// Also the natural place to log where visitors are actually coming from
// (city, IP) since it's the one tracker that fires on every real page load
// rather than once per browser — `geo` is optional, same contract as
// trackPdfDownload above.
//
// Fiche de chaque page : un sorted set par chemin (`analytics:page:<path>`)
// dont les membres portent un préfixe — `d:<jour>` (vues du jour), `c:<ville>`,
// `s:<source>` — sur le modèle de `analytics:ads:day:*`. Toute la fiche se lit
// alors en une commande. `first` : première page de la session ; ville globale,
// journal et source d'arrivée ne sont comptés qu'à ce moment-là (les pages
// suivantes viennent de la navigation interne).
export async function trackPathView(path, geo, { first = true, source = null, device = null } = {}) {
  if (!path) return;
  const day = todayKey();
  const page = `analytics:page:${path}`;
  const tasks = [
    zincr(`analytics:views:path`, path),
    zincr(page, `d:${day}`),
    // v2 : pages vues du jour (total + classement du jour) — c'est ce qui
    // permet un classement des pages *sur la période*, pas seulement depuis
    // toujours.
    incr(`analytics:pv:day:${day}`),
    zincr(`analytics:pages:day:${day}`, path),
  ];
  if (geo?.city) tasks.push(zincr(page, `c:${geo.city}`));
  if (first && source) tasks.push(zincr(page, `s:${source}`));
  if (first) {
    // v2 : une visite = la première page d'une session (onglet). Avant, le
    // seul compteur journalier était analytics:visits:day, qui ne compte
    // qu'une fois par navigateur *pour toujours* (nouveaux visiteurs) — et
    // l'écran l'affichait pourtant sous le nom « Visites ».
    // `analytics:daily:<jour>` regroupe tout le détail des visites du jour
    // (source, ville, pays, appareil, page d'entrée, jour × heure) : une
    // période entière se relit en un seul ZUNION.
    const daily = `analytics:daily:${day}`;
    const { dow, hour } = casablancaParts();
    tasks.push(incr(`analytics:sessions:day:${day}`), zincr(daily, `w:${dow}:${hour}`), zincr(daily, `e:${path}`));
    if (source) tasks.push(zincr(daily, `s:${source}`));
    if (device) tasks.push(zincr(daily, `dv:${device}`));
    if (geo?.city) tasks.push(zincr(daily, `c:${geo.city}`));
    if (geo?.country) tasks.push(zincr(daily, `ct:${geo.country}`));
  }
  if (first && geo?.city) {
    tasks.push(zincr(`analytics:visits:city`, geo.city));
    tasks.push(
      pushLog(`analytics:log:visits`, {
        ip: anonymizeIp(geo.ip),
        city: geo.city,
        country: geo.country,
        path,
        ...(source ? { src: source } : {}),
        ...(device ? { dv: device } : {}),
        at: new Date().toISOString(),
      })
    );
  }
  await Promise.all(tasks);
}

// Jour de la semaine (0 = lundi) et heure au Maroc, pour la carte « jour ×
// heure ». Les clés de jour restent en UTC (voir lib/dateRange.js) ; l'heure,
// elle, doit être celle que vivent les visiteurs, sinon les pics du soir
// tombent une case trop tôt. Repli sur UTC+1 si Intl n'a pas le fuseau.
const WEEKDAYS_EN = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
let casablancaFmt = null;
export function casablancaParts(date = new Date()) {
  try {
    casablancaFmt ||= new Intl.DateTimeFormat("en-GB", { timeZone: "Africa/Casablanca", weekday: "short", hour: "2-digit", hourCycle: "h23" });
    const parts = casablancaFmt.formatToParts(date);
    const dow = WEEKDAYS_EN.indexOf(parts.find((p) => p.type === "weekday")?.value);
    const hour = Number(parts.find((p) => p.type === "hour")?.value) % 24;
    if (dow >= 0 && Number.isInteger(hour)) return { dow, hour };
  } catch {}
  const d = new Date(date.getTime() + 3600e3);
  return { dow: (d.getUTCDay() + 6) % 7, hour: d.getUTCHours() };
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

async function zScore(key, member) {
  if (kvConfigured()) {
    const kv = await getKv();
    return Number(await kv.zscore(key, member)) || 0;
  }
  return mem().sortedSets.get(key)?.get(member) || 0;
}

// Rang dans le classement (1 = la plus vue) et nombre de membres du classement.
async function zRankOf(key, member) {
  if (kvConfigured()) {
    const kv = await getKv();
    const [rank, count] = await Promise.all([kv.zrevrank(key, member), kv.zcard(key)]);
    return { rank: rank === null || rank === undefined ? null : Number(rank) + 1, count: Number(count) || 0 };
  }
  const set = mem().sortedSets.get(key);
  if (!set) return { rank: null, count: 0 };
  const sorted = [...set.entries()].sort((a, b) => b[1] - a[1]).map(([m]) => m);
  const i = sorted.indexOf(member);
  return { rank: i < 0 ? null : i + 1, count: sorted.length };
}

// Fiche complète d'une page pour la console : total historique et rang (depuis
// toujours), puis courbe, villes et sources tirées de `analytics:page:<path>`
// (écrit par trackPathView, donc seulement depuis la mise en place de la fiche
// — `since` donne ce premier jour). Les arrivées « navigation interne » ne sont
// pas stockées : ce sont les vues qui n'ont pas de source d'arrivée.
export async function getPageStats(path, range) {
  const [, section, id, sub] = path.split("/");
  const pdfKind = { concours: "concours", cours: "cours", evaluation: "evaluation" }[section];
  const [total, { rank, count }, members, recent, pdf, shopViews, shopClicks] = await Promise.all([
    zScore(`analytics:views:path`, path),
    zRankOf(`analytics:views:path`, path),
    zTop(`analytics:page:${path}`, 5000),
    getLog(`analytics:log:visits`, MAX_LOG),
    pdfKind && id && !sub ? zScore(`analytics:pdf:byitem`, `${pdfKind}:${id}`) : null,
    section === "boutique" && id ? zScore(`analytics:shop:views`, id) : null,
    section === "boutique" && id ? zScore(`analytics:shop:clicks`, id) : null,
  ]);

  const days = new Map();
  const cities = [];
  const sources = [];
  for (const { member, score } of members) {
    const sep = member.indexOf(":");
    const kind = member.slice(0, sep);
    const value = member.slice(sep + 1);
    if (kind === "d") days.set(value, score);
    else if (kind === "c") cities.push({ member: value, score });
    else if (kind === "s") sources.push({ member: value, score });
  }
  const tracked = [...days.values()].reduce((a, b) => a + b, 0);
  const external = sources.reduce((a, s) => a + s.score, 0);
  if (tracked > external) sources.push({ member: "interne", score: tracked - external });
  sources.sort((a, b) => b.score - a.score);

  const series = dayKeysInRange(range.from, range.to).map((k) => [k, days.get(k) || 0]);
  const views = series.reduce((s, [, n]) => s + n, 0);
  const prev = dayKeysInRange(range.prevFrom, range.prevTo).reduce((s, k) => s + (days.get(k) || 0), 0);

  return {
    path,
    total,
    rank,
    pageCount: count,
    since: days.size ? [...days.keys()].sort()[0] : null,
    views: {
      total: views,
      prev,
      deltaPct: pctChange(views, prev),
      perDay: Math.round((views / Math.max(1, series.length)) * 10) / 10,
      points: bucketSeries(series, bucketGranularity(range.days)),
    },
    cities,
    sources,
    pdf,
    shop: shopViews === null ? null : { views: shopViews, clicks: shopClicks },
    recent: recent.filter((v) => v.path === path).slice(0, 30),
  };
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

// Premier jour des compteurs v2 (visites = sessions, pages vues, détail par
// jour : sources, villes, appareils, heures, pages d'entrée, classements du
// jour). Avant cette date ils valent 0 : la console le dit au lieu de montrer
// un creux qui n'en est pas un, et ne calcule pas d'évolution sur une période
// précédente qui n'a pas été mesurée.
export const V2_SINCE = "2026-11-05";

// Évolution en %, arrondie au dixième. Période précédente à 0 : il n'y a pas
// de rapport à calculer — null (affiché « nouveau ») plutôt qu'un +100 %
// inventé, 0 si les deux périodes sont vides.
function pctChange(curr, prev) {
  if (prev > 0) return Math.round(((curr - prev) / prev) * 1000) / 10;
  return curr > 0 ? null : 0;
}

const round1 = (n) => Math.round(n * 10) / 10;
const sumSeries = (series) => series.reduce((s, [, n]) => s + n, 0);

// Une métrique sur la période : total, moyenne, meilleur jour, courbe, et la
// même chose sur la période précédente (courbe en pointillés « comparer »).
// `comparable: false` quand la période précédente n'était pas encore mesurée.
function buildMetric(series, prevSeries, granularity, comparable = true) {
  const total = sumSeries(series);
  const prev = sumSeries(prevSeries);
  let best = null;
  for (const [day, n] of series) if (n > 0 && (!best || n > best.value)) best = { day, value: n };
  return {
    total,
    prev,
    deltaPct: comparable ? pctChange(total, prev) : null,
    comparable,
    perDay: round1(total / Math.max(1, series.length)),
    best,
    points: bucketSeries(series, granularity),
    prevPoints: bucketSeries(prevSeries, granularity),
  };
}

// Visites → PDF, seulement sur les jours où les visites (sessions) sont
// mesurées : un PDF d'avant le V2_SINCE n'a pas de visite en face, il
// gonflerait le taux.
function conversionOn(sessionsSeries, pdfSeries) {
  let s = 0;
  let p = 0;
  sessionsSeries.forEach(([day, n], i) => {
    if (day < V2_SINCE) return;
    s += n;
    p += pdfSeries[i]?.[1] || 0;
  });
  return s > 0 ? round1((p / s) * 100) : null;
}

// Cœur du tableau de bord sur une période : quatre séries (visites, pages
// vues, nouveaux visiteurs, PDF) et leurs équivalents sur la période d'avant,
// en huit mget — le coût ne dépend pas de la longueur de la période.
//
// « Nouveaux visiteurs » est l'ancien compteur analytics:visits:day (un
// navigateur n'est compté qu'une fois, à sa toute première venue) : il a tout
// l'historique, mais ce n'est pas un nombre de visites.
export async function getRangeMetrics(range) {
  const granularity = bucketGranularity(range.days);
  const [sessions, pageviews, newVisitors, pdf, prevSessions, prevPageviews, prevNew, prevPdf] = await Promise.all([
    getDailySeries("analytics:sessions", range.from, range.to),
    getDailySeries("analytics:pv", range.from, range.to),
    getDailySeries("analytics:visits", range.from, range.to),
    getDailySeries("analytics:pdf", range.from, range.to),
    getDailySeries("analytics:sessions", range.prevFrom, range.prevTo),
    getDailySeries("analytics:pv", range.prevFrom, range.prevTo),
    getDailySeries("analytics:visits", range.prevFrom, range.prevTo),
    getDailySeries("analytics:pdf", range.prevFrom, range.prevTo),
  ]);

  const full = range.from >= V2_SINCE;
  const prevFull = range.prevFrom >= V2_SINCE;
  const m = {
    sessions: buildMetric(sessions, prevSessions, granularity, prevFull),
    pageviews: buildMetric(pageviews, prevPageviews, granularity, prevFull),
    newVisitors: buildMetric(newVisitors, prevNew, granularity),
    pdf: buildMetric(pdf, prevPdf, granularity),
  };
  const ratio = (a, b) => (b > 0 ? round1(a / b) : null);

  return {
    granularity,
    coverage: { since: V2_SINCE, full, prevFull, started: range.to >= V2_SINCE },
    ...m,
    pagesPerVisit: ratio(m.pageviews.total, m.sessions.total),
    prevPagesPerVisit: prevFull ? ratio(m.pageviews.prev, m.sessions.prev) : null,
    // Part des visites faites par un navigateur venu pour la première fois.
    newPct: full && m.sessions.total > 0 ? Math.min(100, round1((m.newVisitors.total / m.sessions.total) * 100)) : null,
    conversionPct: conversionOn(sessions, pdf),
    prevConversionPct: prevFull ? conversionOn(prevSessions, prevPdf) : null,
    // Tableau jour par jour (export CSV, tableau détaillé).
    days: sessions.map(([day, s], i) => ({ day, sessions: s, pageviews: pageviews[i][1], newVisitors: newVisitors[i][1], pdf: pdf[i][1] })),
  };
}

/* ---------------------------- Détail par période ---------------------------
 * Un ZUNION sur les ensembles du jour (analytics:daily:*, analytics:pages:day:*,
 * analytics:pdf:items:day:*) additionne toute une période en UNE commande,
 * quelle que soit sa longueur. Les jours d'avant V2_SINCE n'ont pas ces
 * ensembles : on ne les demande pas.
 * ------------------------------------------------------------------------ */

async function zUnionAll(keys) {
  if (!keys.length) return [];
  let out;
  if (kvConfigured()) {
    const kv = await getKv();
    const flat = keys.length === 1 ? await kv.zrange(keys[0], 0, -1, { withScores: true }) : await kv.zunion(keys.length, keys, { withScores: true });
    out = [];
    for (let i = 0; i < flat.length; i += 2) out.push({ member: String(flat[i]), score: Number(flat[i + 1]) || 0 });
  } else {
    const acc = new Map();
    for (const k of keys) for (const [member, score] of mem().sortedSets.get(k) || []) acc.set(member, (acc.get(member) || 0) + score);
    out = [...acc.entries()].map(([member, score]) => ({ member, score }));
  }
  return out.sort((a, b) => b.score - a.score);
}

function v2Keys(prefix, from, to) {
  return dayKeysInRange(from < V2_SINCE ? V2_SINCE : from, to).map((k) => `${prefix}:${k}`);
}

// Sépare les membres préfixés d'analytics:daily:* (s: source, c: ville,
// ct: pays, dv: appareil, e: page d'entrée, w:<jour>:<heure>).
function splitDaily(members) {
  const out = { sources: [], cities: [], countries: [], devices: [], entries: [], heat: Array.from({ length: 7 }, () => Array(24).fill(0)) };
  const lists = { s: out.sources, c: out.cities, ct: out.countries, dv: out.devices, e: out.entries };
  for (const { member, score } of members) {
    const sep = member.indexOf(":");
    const kind = member.slice(0, sep);
    const value = member.slice(sep + 1);
    if (kind === "w") {
      const [dow, hour] = value.split(":").map(Number);
      if (dow >= 0 && dow < 7 && hour >= 0 && hour < 24) out.heat[dow][hour] += score;
    } else if (lists[kind]) lists[kind].push({ member: value, score });
  }
  return out;
}

// Tout le détail d'une période : d'où viennent les visites, d'où elles se
// connectent, sur quel appareil, à quelle heure, par quelle page elles
// entrent ; quelles pages et quels PDF ont marché — avec la période
// précédente pour les pages (« en hausse », « en baisse »).
export async function getRangeBreakdown(range, { pages = 400, pdf = 200 } = {}) {
  const [daily, pagesNow, pagesPrev, pdfNow, prevDaily] = await Promise.all([
    zUnionAll(v2Keys("analytics:daily", range.from, range.to)),
    zUnionAll(v2Keys("analytics:pages:day", range.from, range.to)),
    range.prevTo >= V2_SINCE ? zUnionAll(v2Keys("analytics:pages:day", range.prevFrom, range.prevTo)) : [],
    zUnionAll(v2Keys("analytics:pdf:items:day", range.from, range.to)),
    range.prevTo >= V2_SINCE ? zUnionAll(v2Keys("analytics:daily", range.prevFrom, range.prevTo)) : [],
  ]);
  const prevMap = new Map(pagesPrev.map((p) => [p.member, p.score]));
  const nowSet = new Set(pagesNow.map((p) => p.member));
  const prevSources = splitDaily(prevDaily).sources;
  return {
    ...splitDaily(daily),
    prevSources,
    pages: pagesNow.slice(0, pages).map((p) => ({ ...p, prev: prevMap.get(p.member) || 0 })),
    // Pages vues la période d'avant et plus du tout depuis : les plus fortes baisses.
    gone: pagesPrev.filter((p) => !nowSet.has(p.member)).slice(0, 30),
    pageCount: pagesNow.length,
    prevComparable: range.prevFrom >= V2_SINCE,
    pdfItems: pdfNow.slice(0, pdf),
  };
}

// « En direct » : visites commencées dans les 5 / 30 dernières minutes (tirées
// du journal), totaux du jour, et la courbe heure par heure d'aujourd'hui et
// d'hier pour comparer « à la même heure ».
export async function getLive() {
  const today = todayKey();
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  const [counts, todaySet, ySet, log] = await Promise.all([
    getCounts([`analytics:sessions:day:${today}`, `analytics:pv:day:${today}`, `analytics:pdf:day:${today}`, `analytics:visits:day:${today}`, `analytics:sessions:day:${yesterday}`]),
    zUnionAll([`analytics:daily:${today}`]),
    zUnionAll([`analytics:daily:${yesterday}`]),
    getLog(`analytics:log:visits`, MAX_LOG),
  ]);
  const hours = (members) => {
    const h = Array(24).fill(0);
    for (const { member, score } of members) {
      if (!member.startsWith("w:")) continue;
      const hour = Number(member.split(":")[2]);
      if (hour >= 0 && hour < 24) h[hour] += score;
    }
    return h;
  };
  const now = Date.now();
  const since = (ms) => log.filter((v) => now - new Date(v.at).getTime() <= ms);
  const last30 = since(30 * 60e3);
  const { hour } = casablancaParts();
  const yHours = hours(ySet);
  return {
    at: new Date().toISOString(),
    hour,
    active5: since(5 * 60e3).length,
    active30: last30.length,
    // Le journal ne garde que les 200 dernières visites : au-delà, « 30 min »
    // est un minimum.
    active30Capped: last30.length >= log.length && log.length >= MAX_LOG,
    activePages: Object.entries(last30.reduce((acc, v) => ((acc[v.path] = (acc[v.path] || 0) + 1), acc), {}))
      .map(([member, score]) => ({ member, score }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 6),
    today: { sessions: counts[0], pageviews: counts[1], pdf: counts[2], newVisitors: counts[3] },
    yesterday: { sessions: counts[4], sameHour: yHours.slice(0, hour + 1).reduce((a, b) => a + b, 0) },
    hoursToday: hours(todaySet),
    hoursYesterday: yHours,
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
  const [visitsTotal, visitsToday, pdfTotal, pdfToday, pdfByKind, [sessionsToday, pageviewsToday]] = await Promise.all([
    getCount(`analytics:visits:total`),
    getCount(`analytics:visits:day:${day}`),
    getCount(`analytics:pdf:total`),
    getCount(`analytics:pdf:day:${day}`),
    getCounts(["concours", "cours", "evaluation"].map((k) => `analytics:pdf:kind:${k}`)),
    getCounts([`analytics:sessions:day:${day}`, `analytics:pv:day:${day}`]),
  ]);
  return {
    // visitsTotal / visitsToday : nouveaux visiteurs (un navigateur compté une
    // seule fois). Les visites du jour sont sessionsToday.
    visitsTotal: Number(visitsTotal) || 0,
    visitsToday: Number(visitsToday) || 0,
    sessionsToday,
    pageviewsToday,
    pdfTotal: Number(pdfTotal) || 0,
    pdfToday: Number(pdfToday) || 0,
    pdfByKind: { concours: pdfByKind[0], cours: pdfByKind[1], evaluation: pdfByKind[2] },
  };
}

// Boutique : vues des fiches et clics sur « Commander » (départs vers WhatsApp).
// Les ventes se comptent sur WhatsApp ; ces deux compteurs disent combien de visiteurs
// se sont intéressés à un cahier et combien ont ouvert la commande WhatsApp.
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

/* ------------------------------ Temps passé ------------------------------
 * Écrit par l'évènement « engage » (initEngagement dans _shared/chrome.js),
 * envoyé chaque fois qu'un visiteur quitte ou masque une page, avec le temps
 * actif gagné depuis l'envoi précédent.
 *
 * `analytics:dur:<jour>` (jour de début de la visite, UTC comme les autres
 * clés) : `t:<chemin>` secondes cumulées sur la page, `n:<chemin>` pages vues
 * mesurées, `_t` secondes de toutes les pages, `_v` visites mesurées. Durée
 * moyenne d'une visite = _t / _v ; temps moyen sur une page = t / n.
 *
 * `analytics:vlog:<jour>` : un hash, un champ par visite (identifiant tiré au
 * hasard par le navigateur, rien qui identifie la personne), réécrit à chaque
 * envoi avec le parcours complet. C'est la liste « Visiteurs » de la console.
 * Gardé ENGAGE_LOG_DAYS jours.
 * ------------------------------------------------------------------------ */

export const DUR_SINCE = "2026-11-11";
const ENGAGE_LOG_DAYS = 35;

async function hset(key, field, value) {
  if (kvConfigured()) {
    const kv = await getKv();
    const added = await kv.hset(key, { [field]: value });
    return Number(added) || 0;
  }
  const m = mem();
  m.hashes ||= new Map();
  if (!m.hashes.has(key)) m.hashes.set(key, new Map());
  const h = m.hashes.get(key);
  const added = h.has(field) ? 0 : 1;
  h.set(field, value);
  return added;
}

async function hgetall(key) {
  if (kvConfigured()) {
    const kv = await getKv();
    return (await kv.hgetall(key)) || {};
  }
  return Object.fromEntries(mem().hashes?.get(key) || []);
}

async function expire(key, seconds) {
  if (kvConfigured()) {
    const kv = await getKv();
    await kv.expire(key, seconds);
  }
}

// `e` est déjà validé par /api/track/batch : { sid, start, path, s, n, src, dv, pages }.
export async function trackEngagement(e, geo) {
  const startMs = Number(e.start);
  const now = Date.now();
  const start = startMs > now - 2 * 86400e3 && startMs <= now + 5 * 60e3 ? startMs : now;
  const day = new Date(start).toISOString().slice(0, 10);
  const dur = `analytics:dur:${day}`;
  const vlog = `analytics:vlog:${day}`;
  const tasks = [];
  if (e.s > 0) tasks.push(zincr(dur, `t:${e.path}`, e.s), zincr(dur, "_t", e.s));
  if (e.n) tasks.push(zincr(dur, `n:${e.path}`));
  const entry = {
    at: new Date(start).toISOString(),
    last: new Date(now).toISOString(),
    city: geo?.city || null,
    country: geo?.country || null,
    ...(e.src ? { src: e.src } : {}),
    ...(e.dv ? { dv: e.dv } : {}),
    pages: e.pages,
  };
  const [added] = await Promise.all([hset(vlog, e.sid, JSON.stringify(entry)), ...tasks]);
  if (added) await Promise.all([zincr(dur, "_v"), expire(vlog, ENGAGE_LOG_DAYS * 86400)]);
}

function durKeys(from, to) {
  const start = from < DUR_SINCE ? DUR_SINCE : from;
  return start > to ? [] : dayKeysInRange(start, to).map((k) => `analytics:dur:${k}`);
}

function splitDur(members) {
  const pages = new Map();
  let totalS = 0;
  let visits = 0;
  for (const { member, score } of members) {
    if (member === "_t") totalS = score;
    else if (member === "_v") visits = score;
    else {
      const kind = member.slice(0, 2);
      const path = member.slice(2);
      if (kind !== "t:" && kind !== "n:") continue;
      const p = pages.get(path) || { s: 0, n: 0 };
      if (kind === "t:") p.s += score;
      else p.n += score;
      pages.set(path, p);
    }
  }
  const views = [...pages.values()].reduce((a, p) => a + p.n, 0);
  return {
    totalS,
    visits,
    views,
    avgVisitS: visits > 0 ? Math.round(totalS / visits) : null,
    avgPageS: views > 0 ? Math.round(totalS / views) : null,
    pages,
  };
}

// Temps passé sur la période (et la période précédente quand elle a été mesurée).
// `pages` : { chemin: { s: secondes cumulées, n: vues mesurées, avg } } pour les
// `limit` pages où l'on a passé le plus de temps.
export async function getRangeTime(range, { limit = 600 } = {}) {
  const prevMeasured = range.prevFrom >= DUR_SINCE;
  const [now, prev] = await Promise.all([zUnionAll(durKeys(range.from, range.to)), prevMeasured ? zUnionAll(durKeys(range.prevFrom, range.prevTo)) : []]);
  const cur = splitDur(now);
  const before = prevMeasured ? splitDur(prev) : null;
  const pages = [...cur.pages.entries()]
    .filter(([, p]) => p.n > 0)
    .sort((a, b) => b[1].s - a[1].s)
    .slice(0, limit)
    .map(([path, p]) => [path, { s: p.s, n: p.n, avg: Math.round(p.s / p.n) }]);
  return {
    since: DUR_SINCE,
    started: range.to >= DUR_SINCE,
    full: range.from >= DUR_SINCE,
    totalS: cur.totalS,
    visits: cur.visits,
    views: cur.views,
    avgVisitS: cur.avgVisitS,
    avgPageS: cur.avgPageS,
    prevAvgVisitS: before?.avgVisitS ?? null,
    prevAvgPageS: before?.avgPageS ?? null,
    pages: Object.fromEntries(pages),
  };
}

// Toutes les visites mesurées d'un jour (jour de début, UTC), les plus récentes d'abord.
export async function getVisitorLog(day) {
  const raw = await hgetall(`analytics:vlog:${day}`);
  const out = [];
  for (const [sid, v] of Object.entries(raw)) {
    let e = v;
    if (typeof v === "string") {
      try {
        e = JSON.parse(v);
      } catch {
        continue;
      }
    }
    if (!e || !Array.isArray(e.pages)) continue;
    const dur = e.pages.reduce((a, p) => a + (Number(p[1]) || 0), 0);
    out.push({ sid, ...e, dur });
  }
  return out.sort((a, b) => String(b.at).localeCompare(String(a.at)));
}
