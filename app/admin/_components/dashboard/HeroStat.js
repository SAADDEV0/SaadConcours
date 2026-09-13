// The dashboard's headline metric. Unlike StatCard (one tile in a strip of
// twelve), this owns a full-width slab: oversized number on the left, a
// seven-day curve filling the right, and the supporting figures on a rule
// underneath. Only one widget should ever use it — the moment there are two
// heroes, neither is one.
export default function HeroStat({ kicker, label, value, trend, series = [], seriesLabels = [], footer = [], onDismiss }) {
  const max = Math.max(1, ...series);
  const stepX = series.length > 1 ? 100 / (series.length - 1) : 0;
  const coords = series.map((n, i) => [i * stepX, 46 - (n / max) * 40]);
  const line = coords.map(([x, y], i) => (i === 0 ? `M${x},${y}` : `L${x},${y}`)).join(" ");
  const area = coords.length ? `${line} L100,48 L0,48 Z` : "";
  const peak = series.length ? Math.max(...series) : 0;
  const peakIndex = series.indexOf(peak);

  return (
    <div className="hero-stat">
      {onDismiss && (
        <button type="button" className="widget-dismiss" aria-label="Masquer ce bloc" onClick={onDismiss} title="Masquer ce bloc">
          ✕
        </button>
      )}

      <div className="hero-stat-main">
        <div className="hero-stat-head">
          <span className="ad-kicker">{kicker}</span>
          {typeof trend === "number" && (
            <span className={"stat-card-trend " + (trend >= 0 ? "up" : "down")}>
              {trend >= 0 ? "↗" : "↘"} {Math.abs(trend)}%
            </span>
          )}
        </div>
        <div className="hero-stat-value">{value}</div>
        <div className="hero-stat-label">{label}</div>
      </div>

      {/* A series of pure zeros would draw a flat jade line pinned to the
          baseline, which reads as a stray rule rather than as "no data". */}
      {series.length > 0 && !series.some((n) => n > 0) && (
        <div className="hero-stat-chart hero-stat-chart-empty">Aucun téléchargement sur les 7 derniers jours.</div>
      )}

      {series.some((n) => n > 0) && (
        <div className="hero-stat-chart" aria-hidden="true">
          <svg viewBox="0 0 100 48" preserveAspectRatio="none">
            <defs>
              <linearGradient id="heroStatGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.28" />
                <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
              </linearGradient>
            </defs>
            {area && <path d={area} fill="url(#heroStatGrad)" />}
            {line && (
              <path
                d={line}
                fill="none"
                stroke="var(--accent)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
            )}
            {coords.length > 0 && (
              <circle cx={coords[coords.length - 1][0]} cy={coords[coords.length - 1][1]} r="2" fill="var(--accent)" />
            )}
          </svg>
          <div className="hero-stat-chart-labels">
            {seriesLabels.map((l, i) => (
              <span key={l + i} className={i === peakIndex ? "peak" : undefined}>
                {l}
              </span>
            ))}
          </div>
        </div>
      )}

      {footer.length > 0 && (
        <dl className="hero-stat-footer">
          {footer.map((f) => (
            <div key={f.label}>
              <dt className="ad-kicker">{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  );
}
