export default function StatCard({ icon, tone, label, value, sub, spark, trend, onDismiss }) {
  return (
    <div className={"stat-card tone-" + (tone || "default")}>
      {onDismiss && (
        <button type="button" className="widget-dismiss" aria-label="Masquer ce bloc" onClick={onDismiss} title="Masquer ce bloc">
          ✕
        </button>
      )}
      <div className="stat-card-top">
        <div className="stat-card-icon">{icon}</div>
        {typeof trend === "number" && (
          <span className={"stat-card-trend " + (trend >= 0 ? "up" : "down")}>
            {trend >= 0 ? "↗" : "↘"} {Math.abs(trend)}%
          </span>
        )}
      </div>
      <div className="stat-card-value">{value}</div>
      <div className="stat-card-label">{label}</div>
      {sub && <div className="stat-card-sub">{sub}</div>}
      {spark && (
        <svg className="stat-card-spark" viewBox="0 0 100 28" preserveAspectRatio="none">
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
    </div>
  );
}
