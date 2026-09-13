"use client";

import { useId, useState } from "react";
import Link from "next/link";

// A dashboard widget slab. With `collapsible`, the header becomes the
// disclosure control and the body is hidden until opened — used by the raw
// 30-row log widgets (visiteurs, téléchargements PDF), which are worth
// having on the dashboard but not worth the vertical space when idle.
export default function WidgetCard({
  title,
  sub,
  href,
  hrefLabel = "Voir tout →",
  onDismiss,
  collapsible = false,
  defaultOpen = false,
  count,
  children,
}) {
  const [open, setOpen] = useState(defaultOpen);
  const bodyId = useId();
  const expanded = !collapsible || open;

  const heading = (
    <div>
      <h2>
        {title}
        {typeof count === "number" && <span className="dash-card-count">{count}</span>}
      </h2>
      {sub && <div className="dash-card-sub">{sub}</div>}
    </div>
  );

  return (
    <div className={"admin-card dash-card" + (collapsible ? " dash-card-collapsible" : "") + (expanded ? " open" : "")}>
      {onDismiss && (
        <button type="button" className="widget-dismiss" aria-label="Masquer ce bloc" onClick={onDismiss} title="Masquer ce bloc">
          ✕
        </button>
      )}

      {collapsible ? (
        <button
          type="button"
          className="dash-card-head dash-card-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={bodyId}
        >
          {heading}
          <span className="dash-card-chevron" aria-hidden="true">
            ▾
          </span>
        </button>
      ) : (
        <div className="dash-card-head">
          {heading}
          {href && (
            <Link className="admin-link-btn" href={href}>
              {hrefLabel}
            </Link>
          )}
        </div>
      )}

      {/* Kept mounted only while open: these bodies are 30-row tables, and
          rendering them hidden would cost the same as showing them. */}
      {expanded && (
        <div id={bodyId} className="dash-card-body">
          {children}
          {collapsible && href && (
            <div className="dash-card-body-foot">
              <Link className="admin-link-btn" href={href}>
                {hrefLabel}
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
