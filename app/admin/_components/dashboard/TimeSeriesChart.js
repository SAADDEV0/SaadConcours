"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { formatCompact, formatNumber } from "../../_lib/format";

/* --------------------------------------------------------------------------
 * The chart the dashboard's line/area widgets all render through.
 *
 * What the previous one got wrong, and why each is fixed here:
 *   - `preserveAspectRatio="none"` stretched a fixed 600×190 viewBox to
 *     whatever width the card happened to be. That distorts the curve AND the
 *     stroke (a 2.5px line drawn in a squashed box renders at two different
 *     weights on its horizontal and vertical runs). Fixed by measuring the
 *     container and drawing in real pixels — no scaling transform at all.
 *   - No y axis and no gridlines, so a reader could see the shape but never
 *     read a value off it.
 *   - Labels lived in a separate flex row underneath, evenly spaced, while
 *     the points were positioned by value index — the two only lined up by
 *     coincidence. Labels are now drawn in the same coordinate space as the
 *     points they belong to, and thinned to whatever actually fits.
 *   - The only tooltip was a native SVG <title>: ~1s delay, unstyled,
 *     invisible to keyboard users. Replaced with a real crosshair + hover
 *     card, and the whole chart is focusable with arrow-key navigation.
 * ------------------------------------------------------------------------ */

const PAD = { top: 16, right: 14, bottom: 26, left: 40 };
const HEIGHT = 208;

// Axis ticks land on human numbers (1, 2, 5, 10, 20, 50…) rather than
// max/4 — nobody reads "37,5" off a gridline.
function niceTicks(max, count = 4) {
  if (max <= 0) return [0, 1];
  const raw = max / count;
  const mag = Math.pow(10, Math.floor(Math.log10(raw)));
  const norm = raw / mag;
  const step = (norm <= 1 ? 1 : norm <= 2 ? 2 : norm <= 5 ? 5 : 10) * mag;
  const ticks = [];
  for (let v = 0; v <= max + step * 0.001; v += step) ticks.push(Math.round(v * 1000) / 1000);
  if (ticks[ticks.length - 1] < max) ticks.push(ticks[ticks.length - 1] + step);
  return ticks;
}

export default function TimeSeriesChart({
  series,
  height = HEIGHT,
  formatValue = (v) => formatNumber(v),
  ariaLabel,
  emptyMessage = "Pas encore assez de données pour tracer une courbe.",
}) {
  const wrapRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [hover, setHover] = useState(null); // index
  const [focused, setFocused] = useState(false);

  // Real width instead of a viewBox stretch — this is what keeps the curve
  // and the stroke undistorted at any card size.
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      setWidth(Math.round(entry.contentRect.width));
    });
    ro.observe(el);
    setWidth(Math.round(el.getBoundingClientRect().width));
    return () => ro.disconnect();
  }, []);

  const lines = useMemo(() => series.filter((s) => s.points?.length), [series]);
  const count = lines[0]?.points.length || 0;
  const hasData = lines.some((s) => s.points.some((p) => p.value > 0));

  const geom = useMemo(() => {
    if (!width || !count) return null;
    const innerW = Math.max(10, width - PAD.left - PAD.right);
    const innerH = Math.max(10, height - PAD.top - PAD.bottom);
    const rawMax = Math.max(1, ...lines.flatMap((s) => s.points.map((p) => p.value)));
    const ticks = niceTicks(rawMax);
    const max = ticks[ticks.length - 1];
    const stepX = count > 1 ? innerW / (count - 1) : 0;
    const x = (i) => PAD.left + (count > 1 ? i * stepX : innerW / 2);
    const y = (v) => PAD.top + innerH - (v / max) * innerH;
    return { innerW, innerH, max, ticks, stepX, x, y, baseline: PAD.top + innerH };
  }, [width, count, height, lines]);

  const pointerIndex = useCallback(
    (clientX) => {
      if (!geom || !wrapRef.current) return null;
      const rect = wrapRef.current.getBoundingClientRect();
      const rel = clientX - rect.left;
      if (count === 1) return 0;
      const i = Math.round((rel - PAD.left) / geom.stepX);
      return Math.min(count - 1, Math.max(0, i));
    },
    [geom, count]
  );

  function onKeyDown(e) {
    if (!count) return;
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();
      setHover((h) => {
        const cur = h ?? (e.key === "ArrowRight" ? -1 : count);
        return Math.min(count - 1, Math.max(0, cur + (e.key === "ArrowRight" ? 1 : -1)));
      });
    } else if (e.key === "Home") {
      e.preventDefault();
      setHover(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setHover(count - 1);
    } else if (e.key === "Escape") {
      setHover(null);
    }
  }

  if (!lines.length || !hasData) {
    return <div className="chart-empty">{emptyMessage}</div>;
  }

  // Which x labels fit: at ~54px per label, a 365-point series gets every
  // nth one rather than an unreadable smear.
  const labelEvery = geom ? Math.max(1, Math.ceil(count / Math.max(2, Math.floor(geom.innerW / 58)))) : 1;

  const active = hover != null && hover >= 0 && hover < count ? hover : null;
  const activePoint = active != null ? lines[0].points[active] : null;

  // Screen readers get the summary, not the path data.
  const summary =
    ariaLabel ||
    lines
      .map((s) => {
        const total = s.points.reduce((a, p) => a + p.value, 0);
        return `${s.label} : ${formatNumber(total)} au total sur ${count} points`;
      })
      .join(". ");

  return (
    <div className="ts-chart">
      {lines.length > 1 && (
        <div className="ts-legend">
          {lines.map((s) => (
            <span key={s.key} className="ts-legend-item">
              <span className="ts-legend-dot" style={{ background: s.color }} />
              {s.label}
            </span>
          ))}
        </div>
      )}

      <div
        className="ts-chart-wrap"
        ref={wrapRef}
        style={{ height }}
        onPointerMove={(e) => setHover(pointerIndex(e.clientX))}
        onPointerLeave={() => !focused && setHover(null)}
      >
        {geom && (
          <svg
            width={width}
            height={height}
            className="ts-svg"
            role="img"
            aria-label={summary}
            tabIndex={0}
            onFocus={() => {
              setFocused(true);
              setHover((h) => h ?? count - 1);
            }}
            onBlur={() => {
              setFocused(false);
              setHover(null);
            }}
            onKeyDown={onKeyDown}
          >
            <defs>
              {lines.map((s) => (
                <linearGradient key={s.key} id={`tsGrad-${s.key}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={s.color} stopOpacity={s.fill === false ? 0 : 0.26} />
                  <stop offset="100%" stopColor={s.color} stopOpacity="0" />
                </linearGradient>
              ))}
            </defs>

            {/* Gridlines + y axis — the part that turns a shape into a value */}
            {geom.ticks.map((t) => (
              <g key={t}>
                <line
                  x1={PAD.left}
                  x2={width - PAD.right}
                  y1={geom.y(t)}
                  y2={geom.y(t)}
                  className={t === 0 ? "ts-axis-line" : "ts-grid-line"}
                />
                <text x={PAD.left - 8} y={geom.y(t)} className="ts-tick" textAnchor="end" dominantBaseline="middle">
                  {formatCompact(t)}
                </text>
              </g>
            ))}

            {lines.map((s) => {
              const coords = s.points.map((p, i) => [geom.x(i), geom.y(p.value)]);
              const line = coords.map(([x, y], i) => (i === 0 ? `M${x},${y}` : `L${x},${y}`)).join(" ");
              const area = `${line} L${coords[coords.length - 1][0]},${geom.baseline} L${coords[0][0]},${geom.baseline} Z`;
              return (
                <g key={s.key}>
                  {s.fill !== false && <path d={area} fill={`url(#tsGrad-${s.key})`} />}
                  <path
                    d={line}
                    fill="none"
                    stroke={s.color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Individual dots only when they can't merge into a blob */}
                  {count <= 32 &&
                    coords.map(([x, y], i) => (
                      <circle key={i} cx={x} cy={y} r={active === i ? 4 : 2.6} fill={s.color} className="ts-dot" />
                    ))}
                </g>
              );
            })}

            {active != null && (
              <line
                x1={geom.x(active)}
                x2={geom.x(active)}
                y1={PAD.top}
                y2={geom.baseline}
                className="ts-crosshair"
              />
            )}

            {lines[0].points.map((p, i) =>
              i % labelEvery === 0 || i === count - 1 ? (
                <text
                  key={i}
                  x={geom.x(i)}
                  y={height - 8}
                  className={"ts-xlabel" + (active === i ? " active" : "")}
                  textAnchor={i === 0 ? "start" : i === count - 1 ? "end" : "middle"}
                >
                  {p.label}
                </text>
              ) : null
            )}
          </svg>
        )}

        {active != null && geom && activePoint && (
          <div
            className="ts-tooltip"
            style={{
              left: Math.min(Math.max(geom.x(active), 70), Math.max(70, width - 70)),
              top: PAD.top,
            }}
            role="status"
          >
            <div className="ts-tooltip-label">{activePoint.full || activePoint.label}</div>
            {lines.map((s) => (
              <div key={s.key} className="ts-tooltip-row">
                <span className="ts-legend-dot" style={{ background: s.color }} />
                <span className="ts-tooltip-name">{s.label}</span>
                <strong>{formatValue(s.points[active]?.value ?? 0, s)}</strong>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Non-visual fallback: a chart with no table behind it is unreadable
          to anyone not looking at it. */}
      <table className="sr-only">
        <caption>{summary}</caption>
        <thead>
          <tr>
            <th scope="col">Période</th>
            {lines.map((s) => (
              <th key={s.key} scope="col">
                {s.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {lines[0].points.map((p, i) => (
            <tr key={i}>
              <th scope="row">{p.full || p.label}</th>
              {lines.map((s) => (
                <td key={s.key}>{formatNumber(s.points[i]?.value ?? 0)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
