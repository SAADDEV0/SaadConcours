// Horizontal ranked bars — proportions relative to the top value, not a
// pie/donut, so it stays readable when segments differ a lot in size (e.g.
// concours count per filière, ad views vs clicks).
export default function BarList({ items, formatValue, color = "var(--accent)" }) {
  const max = Math.max(1, ...items.map((it) => it.value));
  return (
    <ul className="bar-list">
      {items.map((it) => (
        <li key={it.label} className="bar-list-row">
          <div className="bar-list-head">
            <span className="bar-list-label">{it.label}</span>
            <span className="bar-list-value">{formatValue ? formatValue(it.value) : it.value}</span>
          </div>
          <div className="bar-list-track">
            <div
              className="bar-list-fill"
              style={{ width: `${Math.max(2, (it.value / max) * 100)}%`, background: it.color || color }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
