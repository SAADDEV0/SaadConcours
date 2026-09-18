"use client";

import { useId, useState } from "react";
import { formatNumber } from "../../_lib/format";

// Proportions of `total`, never synthetic data. Rewritten from a CSS
// conic-gradient to real SVG arcs for three reasons a conic-gradient can't
// give you: a segment you can hover (and focus) to read its own value, a
// hairline between adjacent segments so two similar colours stay
// distinguishable, and an actual accessible name per slice instead of a ring
// that screen readers see as an empty div.
export default function DonutChart({ segments, centerLabel, formatValue }) {
  const [active, setActive] = useState(null);
  const titleId = useId();
  const total = segments.reduce((s, seg) => s + seg.value, 0);

  const size = 132;
  const r = 52;
  const stroke = 20;
  const c = size / 2;
  const circumference = 2 * Math.PI * r;

  let offset = 0;
  const arcs = segments.map((seg) => {
    const fraction = total ? seg.value / total : 0;
    const arc = { ...seg, fraction, dash: fraction * circumference, offset };
    offset += arc.dash;
    return arc;
  });

  const shown = active != null ? arcs[active] : null;
  const fmt = formatValue || ((v) => formatNumber(v));

  return (
    <div className="donut-wrap">
      <div className="donut-figure">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} role="img" aria-labelledby={titleId}>
          <title id={titleId}>
            {total
              ? `Répartition sur ${formatNumber(total)} ${centerLabel} : ` +
                segments
                  .filter((s) => s.value > 0)
                  .map((s) => `${s.label} ${Math.round((s.value / total) * 100)} %`)
                  .join(", ")
              : `Aucune donnée pour la répartition ${centerLabel}`}
          </title>
          <g transform={`rotate(-90 ${c} ${c})`}>
            <circle cx={c} cy={c} r={r} fill="none" stroke="var(--border)" strokeWidth={stroke} opacity={total ? 0.35 : 1} />
            {total > 0 &&
              arcs.map((a, i) =>
                a.value > 0 ? (
                  <circle
                    key={a.label}
                    cx={c}
                    cy={c}
                    r={r}
                    fill="none"
                    stroke={a.color}
                    strokeWidth={active === i ? stroke + 4 : stroke}
                    strokeDasharray={`${Math.max(0, a.dash - 1.5)} ${circumference}`}
                    strokeDashoffset={-a.offset}
                    className="donut-arc"
                    onPointerEnter={() => setActive(i)}
                    onPointerLeave={() => setActive(null)}
                  />
                ) : null
              )}
          </g>
        </svg>
        <div className="donut-hole" aria-hidden="true">
          <strong>{shown ? fmt(shown.value) : formatNumber(total)}</strong>
          <span>{shown ? shown.label : centerLabel}</span>
        </div>
      </div>

      <ul className="donut-legend">
        {segments.map((seg, i) => {
          const pct = total ? Math.round((seg.value / total) * 100) : 0;
          return (
            <li key={seg.label}>
              <button
                type="button"
                className={"donut-legend-btn" + (active === i ? " active" : "")}
                onPointerEnter={() => setActive(i)}
                onPointerLeave={() => setActive(null)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
              >
                <span className="donut-dot" style={{ background: seg.color }} />
                <span className="donut-legend-label">{seg.label}</span>
                <span className="donut-legend-value">{formatNumber(seg.value)}</span>
                <b>{pct} %</b>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
