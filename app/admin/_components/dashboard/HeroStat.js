"use client";

import Icon from "../ui/Icon";
import TimeSeriesChart from "./TimeSeriesChart";
import { formatNumber, formatCompact, formatDeltaPct } from "../../_lib/format";

// The dashboard's headline metric. Unlike StatCard (one tile in a strip of
// twelve), this owns a full-width slab: oversized number on the left, the
// period's curve filling the right, and the supporting figures on a rule
// underneath. Only one widget should ever use it — the moment there are two
// heroes, neither is one.
//
// The chart used to be `aria-hidden` with no alternative, which made the most
// important thing on the page invisible to anyone not looking at it; it now
// goes through TimeSeriesChart, which carries its own label and data table.
export default function HeroStat({
  kicker,
  label,
  value,
  trend,
  trendLabel,
  points = [],
  color = "var(--accent)",
  footer = [],
  formatValue,
  onDismiss,
  emptyMessage,
}) {
  const delta = formatDeltaPct(trend);
  const hasSeries = points.some((p) => p.value > 0);

  return (
    <div className="hero-stat">
      {onDismiss && (
        <button
          type="button"
          className="widget-dismiss"
          aria-label="Masquer ce bloc"
          onClick={onDismiss}
          title="Masquer ce bloc"
        >
          <Icon name="x" size={12} />
        </button>
      )}

      <div className="hero-stat-main">
        <div className="hero-stat-head">
          <span className="ad-kicker">{kicker}</span>
          {delta && (
            <span className={"stat-card-trend " + (trend >= 0 ? "up" : "down")} title={trendLabel}>
              <Icon name={trend >= 0 ? "arrowUp" : "arrowDown"} size={11} />
              {delta}
            </span>
          )}
        </div>
        {/* Past four digits the grouped form starts to fight the chart for
            width, so the hero switches to the compact one and keeps the exact
            figure in the tooltip. */}
        <div className="hero-stat-value" title={formatNumber(value)}>
          {typeof value === "number" ? (value >= 100000 ? formatCompact(value) : formatNumber(value)) : value}
        </div>
        <div className="hero-stat-label">{label}</div>
        {trendLabel && <div className="hero-stat-compare">{trendLabel}</div>}
      </div>

      <div className="hero-stat-chart">
        {hasSeries ? (
          <TimeSeriesChart
            series={[{ key: "hero", label, color, points }]}
            height={150}
            formatValue={formatValue}
          />
        ) : (
          <div className="hero-stat-chart-empty">{emptyMessage || "Aucune activité sur la période."}</div>
        )}
      </div>

      {footer.length > 0 && (
        <dl className="hero-stat-footer">
          {footer.map((f) => (
            <div key={f.label}>
              <dt className="ad-kicker">{f.label}</dt>
              <dd>{typeof f.value === "number" ? formatNumber(f.value) : f.value}</dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  );
}
