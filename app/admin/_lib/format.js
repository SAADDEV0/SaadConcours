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
