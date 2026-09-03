// CSS conic-gradient donut - segments are real proportions of `total`, no
// synthetic data. Renders a neutral empty ring when total is 0.
export default function DonutChart({ segments, centerLabel }) {
  const total = segments.reduce((s, seg) => s + seg.value, 0);
  let cumulative = 0;
  const stops = total
    ? segments
        .map((seg) => {
          const from = (cumulative / total) * 100;
          cumulative += seg.value;
          const to = (cumulative / total) * 100;
          return `${seg.color} ${from}% ${to}%`;
        })
        .join(", ")
    : "var(--border) 0% 100%";

  return (
    <div className="donut-wrap">
      <div className="donut-chart" style={{ background: `conic-gradient(${stops})` }}>
        <div className="donut-hole">
          <strong>{total}</strong>
          <span>{centerLabel}</span>
        </div>
      </div>
      <ul className="donut-legend">
        {segments.map((seg) => (
          <li key={seg.label}>
            <span className="donut-dot" style={{ background: seg.color }} />
            {seg.label}
            <b>{total ? Math.round((seg.value / total) * 100) : 0}%</b>
          </li>
        ))}
      </ul>
    </div>
  );
}
