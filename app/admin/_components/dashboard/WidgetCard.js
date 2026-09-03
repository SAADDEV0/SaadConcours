import Link from "next/link";

export default function WidgetCard({ title, sub, href, hrefLabel = "Voir tout →", onDismiss, children }) {
  return (
    <div className="admin-card dash-card">
      {onDismiss && (
        <button type="button" className="widget-dismiss" aria-label="Masquer ce bloc" onClick={onDismiss} title="Masquer ce bloc">
          ✕
        </button>
      )}
      <div className="dash-card-head">
        <div>
          <h2>{title}</h2>
          {sub && <div className="dash-card-sub">{sub}</div>}
        </div>
        {href && (
          <Link className="admin-link-btn" href={href}>
            {hrefLabel}
          </Link>
        )}
      </div>
      {children}
    </div>
  );
}
