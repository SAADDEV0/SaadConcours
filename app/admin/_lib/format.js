// French grouping (narrow no-break space) for every number the panel shows.
// Raw `12483` in a metric slab reads as a reference number, not a quantity,
// and at 5–6 digits it overflows the hero's grid column. Non-finite values
// (a count that failed to load) render as an em dash rather than "NaN".
const NUMBER_FR = new Intl.NumberFormat("fr-FR");

export function formatNumber(n) {
  if (n === null || n === undefined || n === "") return "—";
  const num = typeof n === "number" ? n : Number(n);
  if (!Number.isFinite(num)) return typeof n === "string" ? n : "—";
  return NUMBER_FR.format(num);
}

// Compact form for the places where the full number can't fit — the hero
// value at 4+ digits, axis ticks. 12483 → "12,5 k", 1200000 → "1,2 M".
export function formatCompact(n) {
  const num = Number(n);
  if (!Number.isFinite(num)) return formatNumber(n);
  if (Math.abs(num) < 10000) return NUMBER_FR.format(num);
  if (Math.abs(num) < 1000000) return NUMBER_FR.format(Math.round(num / 100) / 10) + " k";
  return NUMBER_FR.format(Math.round(num / 100000) / 10) + " M";
}

// Signed percentage for a delta badge — "+12,4 %" / "−8 %". The minus is a
// real U+2212, which aligns with digits where the hyphen doesn't.
export function formatDeltaPct(pct) {
  if (typeof pct !== "number" || !Number.isFinite(pct)) return null;
  const rounded = Math.round(Math.abs(pct) * 10) / 10;
  return `${pct >= 0 ? "+" : "−"}${NUMBER_FR.format(rounded)} %`;
}

// Pluralises AND formats in one call, for the "12 483 téléchargements" that
// appear in half the widget value slots.
export function countLabel(n, singular, plural = singular + "s") {
  const num = Number(n) || 0;
  return `${formatNumber(num)} ${num > 1 ? plural : singular}`;
}

// trend is computed from the real 7-day series (today vs the average of the
// previous 6 days) - never fabricated. null when there isn't enough signal
// (e.g. the previous days are all zero) so we don't show a misleading "+inf%".
export function trendFromSeries(values) {
  if (!values || values.length < 2) return null;
  const today = values[values.length - 1];
  const prev = values.slice(0, -1);
  const avgPrev = prev.reduce((s, n) => s + n, 0) / prev.length;
  if (avgPrev <= 0) return null;
  const pct = ((today - avgPrev) / avgPrev) * 100;
  return Math.round(pct);
}

export function dayLabelShort(d) {
  return new Date(d + "T00:00:00").toLocaleDateString("fr-FR", { weekday: "short" }).replace(".", "");
}

export function dayLabelMed(d) {
  return new Date(d + "T00:00:00").toLocaleDateString("fr-FR", { day: "numeric", month: "short" });
}

// Coarse French relative time ("à l'instant", "il y a 5 min", "il y a 3 h",
// "il y a 2 j") — good enough for a "derniers abonnés" list, no need for a
// full i18n relative-time library for four buckets.
export function timeAgoFr(timestampMs) {
  const diffSec = Math.max(0, Math.round((Date.now() - timestampMs) / 1000));
  if (diffSec < 60) return "à l'instant";
  const diffMin = Math.round(diffSec / 60);
  if (diffMin < 60) return `il y a ${diffMin} min`;
  const diffH = Math.round(diffMin / 60);
  if (diffH < 24) return `il y a ${diffH} h`;
  const diffD = Math.round(diffH / 24);
  if (diffD < 30) return `il y a ${diffD} j`;
  return new Date(timestampMs).toLocaleDateString("fr-FR", { day: "numeric", month: "short" });
}

// Exact date + hour, for the places where timeAgoFr's four coarse buckets
// aren't enough — typically a tooltip listing every occurrence of an event.
export function dateTimeFr(timestampMs) {
  return new Date(timestampMs).toLocaleString("fr-FR", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}
