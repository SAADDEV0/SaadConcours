"use client";

import Link from "next/link";
import Icon from "../ui/Icon";

// Sits above the grid and answers "what should I look at today?" before the
// admin has to read thirty blocks to work it out. Renders nothing at all when
// there's nothing notable — an empty insight bar that says "tout va bien"
// every day trains people to stop reading it.
export default function InsightsBar({ insights, onDismiss }) {
  if (!insights?.length) return null;

  return (
    <section className="insights-bar" aria-label="Points d'attention">
      {insights.map((i) => (
        <article key={i.id} className={"insight insight-" + i.tone}>
          <span className="insight-icon" aria-hidden="true">
            <Icon name={i.icon} size={16} />
          </span>
          <div className="insight-body">
            <h3 className="insight-title">{i.title}</h3>
            {i.text && <p className="insight-text">{i.text}</p>}
          </div>
          {i.href && (
            <Link className="insight-action" href={i.href}>
              {i.actionLabel || "Voir"}
              <Icon name="arrowRight" size={13} />
            </Link>
          )}
          {onDismiss && (
            <button
              type="button"
              className="insight-dismiss"
              onClick={() => onDismiss(i.id)}
              aria-label="Masquer ce point d'attention"
              title="Masquer"
            >
              <Icon name="x" size={13} />
            </button>
          )}
        </article>
      ))}
    </section>
  );
}
