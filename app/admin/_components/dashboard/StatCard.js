"use client";

import Link from "next/link";
import Icon from "../ui/Icon";
import { formatNumber, formatDeltaPct } from "../../_lib/format";

// One tile in the KPI strip. Three things changed from the version this
// replaces:
//   - the icon is a stroke glyph, not an emoji (see ui/Icon.js);
//   - the value is formatted for French reading — `12 483`, not `12483`,
//     which at five digits also stops overflowing the tile;
//   - the tile is a *link* when there's a list behind the number. A KPI you
//     can't click is a dead end: the whole point of "47 concours sans
//     corrigé" is to go fix them.
// `trend` finally does something too — it was a supported prop that no
// caller ever passed, so no tile ever showed a comparison.
export default function StatCard({
  icon,
  tone,
  label,
  value,
  sub,
  spark,
  trend,
  trendLabel,
  href,
  onDismiss,
  invertTrend = false,
}) {
  const delta = formatDeltaPct(trend);
  // For most metrics up is good. For "concours sans corrigé" or "recherches
  // sans résultat", up is bad — the arrow direction still follows the number,
  // but the colour follows the meaning.
  const good = typeof trend === "number" ? (invertTrend ? trend <= 0 : trend >= 0) : null;

  const inner = (
    <>
      <div className="stat-card-top">
        <div className="stat-card-icon">
          <Icon name={icon} size={17} />
        </div>
        {delta && (
          <span className={"stat-card-trend " + (good ? "up" : "down")} title={trendLabel || "vs période précédente"}>
            <Icon name={trend >= 0 ? "arrowUp" : "arrowDown"} size={11} />
            {delta}
          </span>
        )}
      </div>
      <div className="stat-card-value">{typeof value === "number" ? formatNumber(value) : value ?? "—"}</div>
      <div className="stat-card-label">{label}</div>
      {sub && <div className="stat-card-sub">{sub}</div>}
      {spark && spark.length > 1 && (
        <svg className="stat-card-spark" viewBox="0 0 100 28" preserveAspectRatio="none" aria-hidden="true">
          <polyline
            points={spark
              .map((n, i, arr) => {
                const max = Math.max(1, ...arr);
                const x = (i / (arr.length - 1 || 1)) * 100;
                const y = 26 - (n / max) * 24;
                return `${x},${y}`;
              })
              .join(" ")}
          />
        </svg>
      )}
      {href && (
        <span className="stat-card-go" aria-hidden="true">
          <Icon name="arrowRight" size={14} />
        </span>
      )}
    </>
  );

  const className = "stat-card tone-" + (tone || "default") + (href ? " stat-card-link" : "");

  return (
    <div className={className}>
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
      {href ? (
        <Link href={href} className="stat-card-inner">
          {inner}
        </Link>
      ) : (
        <div className="stat-card-inner">{inner}</div>
      )}
    </div>
  );
}
