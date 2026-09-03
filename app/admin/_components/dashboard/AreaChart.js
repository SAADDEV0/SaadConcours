// Smooth-ish area/line chart over a real daily series - no chart library,
// just an SVG path built from the points so it has zero extra dependencies.
export default function AreaChart({ points, formatValue }) {
  const width = 600;
  const height = 190;
  const padX = 6;
  const padTop = 14;
  const padBottom = 28;
  const max = Math.max(1, ...points.map((p) => p.value));
  const stepX = points.length > 1 ? (width - padX * 2) / (points.length - 1) : 0;
  const coords = points.map((p, i) => {
    const x = padX + i * stepX;
    const y = height - padBottom - (p.value / max) * (height - padTop - padBottom);
    return [x, y];
  });
  const linePath = coords.map(([x, y], i) => (i === 0 ? `M${x},${y}` : `L${x},${y}`)).join(" ");
  const areaPath =
    coords.length > 0
      ? `${linePath} L${coords[coords.length - 1][0]},${height - padBottom} L${coords[0][0]},${height - padBottom} Z`
      : "";

  return (
    <div className="area-chart-wrap">
      <svg viewBox={`0 0 ${width} ${height}`} className="area-chart" preserveAspectRatio="none">
        <defs>
          <linearGradient id="adminAreaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.32" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {areaPath && <path d={areaPath} fill="url(#adminAreaGrad)" />}
        {linePath && <path d={linePath} fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />}
        {coords.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="3.2" className="area-chart-dot">
            <title>{`${points[i].label} — ${formatValue ? formatValue(points[i].value) : points[i].value}`}</title>
          </circle>
        ))}
      </svg>
      <div className="area-chart-labels">
        {points.map((p, i) => (
          <span key={p.label + i}>{p.label}</span>
        ))}
      </div>
    </div>
  );
}
