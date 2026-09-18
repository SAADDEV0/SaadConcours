"use client";

import { useId, useState } from "react";
import Link from "next/link";
import Icon from "../ui/Icon";

// A dashboard widget slab. With `collapsible`, the header becomes the
// disclosure control and the body is hidden until opened — used by the raw
// 30-row log widgets (visiteurs, téléchargements PDF, audit), which are worth
// having on the dashboard but not worth the vertical space when idle.
//
// `icon` is an Icon name; `stale` dims the slab while a refetch for a new
// period is in flight, so the admin can tell at a glance that the numbers on
// screen are the previous period's and not yet the one they just picked.
export default function WidgetCard({
  title,
  icon,
  sub,
  href,
  hrefLabel = "Voir tout",
  onDismiss,
  collapsible = false,
  defaultOpen = false,
  count,
  stale = false,
  children,
}) {
  const [open, setOpen] = useState(defaultOpen);
  const bodyId = useId();
  const expanded = !collapsible || open;

  const heading = (
    <div className="dash-card-heading">
      <h3>
        {icon && (
          <span className="dash-card-icon" aria-hidden="true">
            <Icon name={icon} size={15} />
          </span>
        )}
        {title}
        {typeof count === "number" && <span className="dash-card-count">{count}</span>}
      </h3>
      {sub && <div className="dash-card-sub">{sub}</div>}
    </div>
  );

  return (
    <div
      className={
        "admin-card dash-card" +
        (collapsible ? " dash-card-collapsible" : "") +
        (expanded ? " open" : "") +
        (stale ? " is-stale" : "")
      }
      aria-busy={stale || undefined}
    >
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
            <Icon name="chevronDown" size={16} />
          </span>
        </button>
      ) : (
        <div className="dash-card-head">
          {heading}
          {href && (
            <Link className="admin-link-btn" href={href}>
              {hrefLabel}
              <Icon name="arrowRight" size={13} />
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
                <Icon name="arrowRight" size={13} />
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
