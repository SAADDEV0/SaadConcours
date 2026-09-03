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
