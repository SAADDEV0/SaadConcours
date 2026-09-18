import { formatNumber } from "../../_lib/format";

// Horizontal ranked bars — proportions relative to the top value, not a
// pie/donut, so it stays readable when items differ a lot in size (e.g.
// concours count per filière, ad views vs clicks). Each row is a real
// meter for assistive tech rather than a decorative div of a given width.
export default function BarList({ items, formatValue, color = "var(--accent)", max: maxProp }) {
  const max = maxProp || Math.max(1, ...items.map((it) => it.value));
  return (
    <ul className="bar-list">
      {items.map((it) => {
        const text = formatValue ? formatValue(it.value, it) : formatNumber(it.value);
        return (
          <li key={it.label} className="bar-list-row">
            <div className="bar-list-head">
              <span className="bar-list-label" title={it.label}>
                {it.label}
              </span>
              <span className="bar-list-value">{text}</span>
            </div>
            <div
              className="bar-list-track"
              role="meter"
              aria-valuenow={it.value}
              aria-valuemin={0}
              aria-valuemax={max}
              aria-label={`${it.label} : ${text}`}
            >
              <div
                className="bar-list-fill"
                style={{ width: `${Math.max(2, (it.value / max) * 100)}%`, background: it.color || color }}
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
}
