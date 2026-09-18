// The dashboard's period model, shared by the client (picker + labels) and
// the server (/api/admin/stats). Before this, every widget had its window
// hard-coded — "aujourd'hui", "7 derniers jours", "6 derniers mois" — so the
// page couldn't answer "et le mois dernier ?" at all. One resolved range now
// scopes the whole dashboard, and every series/total/delta derives from it.
//
// A range is always a pair of inclusive YYYY-MM-DD day keys, because that is
// exactly how lib/analytics.js stores its counters (analytics:*:day:<key>).
// No timezone maths beyond the local day boundary: the site is single-region
// and the admin reads these as "days", not instants.

export const RANGE_PRESETS = [
  { id: "today", label: "Aujourd'hui", short: "Auj.", days: 1 },
  { id: "7d", label: "7 derniers jours", short: "7 j", days: 7 },
  { id: "30d", label: "30 derniers jours", short: "30 j", days: 30 },
  { id: "90d", label: "90 derniers jours", short: "90 j", days: 90 },
  { id: "12m", label: "12 derniers mois", short: "12 m", days: 365 },
];

export const DEFAULT_PRESET = "30d";

export function presetById(id) {
  return RANGE_PRESETS.find((p) => p.id === id) || null;
}

// UTC, deliberately: every counter in lib/analytics.js is written under
// `new Date().toISOString().slice(0,10)`. If the reader computed local days
// and the writer UTC days, the two would disagree for one hour every night
// and the dashboard would read the wrong bucket. The convention has to match
// the data that already exists, not the one that's nicer in the abstract.
export function dayKey(date) {
  const d = date instanceof Date ? date : new Date(date);
  return d.toISOString().slice(0, 10);
}

export function addDays(key, n) {
  const [y, m, d] = key.split("-").map(Number);
  return dayKey(new Date(Date.UTC(y, m - 1, d + n)));
}

export function daysBetween(from, to) {
  const [fy, fm, fd] = from.split("-").map(Number);
  const [ty, tm, td] = to.split("-").map(Number);
  const diff = Date.UTC(ty, tm - 1, td) - Date.UTC(fy, fm - 1, fd);
  return Math.round(diff / 86400000) + 1; // inclusive
}

const DAY_RE = /^\d{4}-\d{2}-\d{2}$/;

export function isDayKey(s) {
  if (typeof s !== "string" || !DAY_RE.test(s)) return false;
  const [y, m, d] = s.split("-").map(Number);
  const date = new Date(Date.UTC(y, m - 1, d));
  return date.getUTCFullYear() === y && date.getUTCMonth() === m - 1 && date.getUTCDate() === d;
}

// Hard ceiling on how many day keys a single request can fan out to. Each
// key is one entry in a KV mget, and an admin typing ?from=1970-01-01 should
// get a clamped answer, not a 20 000-key round-trip.
const MAX_DAYS = 400;

// Resolves whatever the caller has (a preset id, or an explicit from/to) into
// the canonical shape every consumer uses. Always returns something valid —
// garbage input falls back to the default preset rather than throwing, since
// this runs on a query string an admin can edit by hand.
export function resolveRange({ preset, from, to } = {}) {
  const today = dayKey(new Date());

  if (isDayKey(from) && isDayKey(to)) {
    let start = from;
    let end = to;
    if (start > end) [start, end] = [end, start];
    // Counters only exist for days that have happened.
    if (end > today) end = today;
    let days = daysBetween(start, end);
    if (days > MAX_DAYS) {
      start = addDays(end, -(MAX_DAYS - 1));
      days = MAX_DAYS;
    }
    return withPrevious({ preset: "custom", from: start, to: end, days, label: customLabel(start, end) });
  }

  const p = presetById(preset) || presetById(DEFAULT_PRESET);
  const end = today;
  const start = addDays(end, -(p.days - 1));
  return withPrevious({ preset: p.id, from: start, to: end, days: p.days, label: p.label, short: p.short });
}

// The equal-length window immediately before the range — what every "vs
// période précédente" badge on the dashboard compares against.
function withPrevious(range) {
  return {
    ...range,
    prevTo: addDays(range.from, -1),
    prevFrom: addDays(range.from, -range.days),
  };
}

function customLabel(from, to) {
  return from === to ? formatDayFr(from) : `${formatDayFr(from)} → ${formatDayFr(to)}`;
}

// Day keys are UTC (see dayKey), so they must be rendered as UTC too —
// formatting them in local time would print "31 août" for the key
// "2026-09-01" anywhere west of Greenwich.
export function formatDayFr(key, opts = { day: "numeric", month: "short" }) {
  const [y, m, d] = key.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("fr-FR", { ...opts, timeZone: "UTC" });
}

// Every day key in the range, oldest first — the x axis of every series.
export function dayKeysInRange(from, to) {
  const keys = [];
  let cur = from;
  let guard = 0;
  while (cur <= to && guard++ <= MAX_DAYS) {
    keys.push(cur);
    cur = addDays(cur, 1);
  }
  return keys;
}

// Long ranges have more days than a chart has pixels (or an axis has room for
// labels): 365 daily points render as noise. Buckets the series by week or
// month once it gets long, keeping daily resolution where it's meaningful.
export function bucketGranularity(days) {
  if (days <= 31) return "day";
  if (days <= 120) return "week";
  return "month";
}

export function rangeToQuery(range) {
  if (!range) return "";
  return range.preset === "custom"
    ? `from=${range.from}&to=${range.to}`
    : `preset=${range.preset}`;
}
