"use client";

import { widgetById } from "../../_lib/widgets";
import { renderWidget } from "./widgetRenderers";
import WidgetBoundary, { WidgetFetchError } from "./WidgetBoundary";

// Renders the widgets of ONE section — the dashboard is tabbed now, so only
// the active section is ever mounted. That is what makes the per-group data
// fetching pay off: the audience tab's raw visitor logs are never requested,
// let alone rendered, while the admin is looking at "Vue d'ensemble".
//
// Layout inside a section is by widget size, not by declaration order:
// hero first, then the KPI strip, then the two-column grid of cards.
export default function WidgetGrid({ section, ids, hide, ctx }) {
  if (!ids.length) {
    return (
      <div className="admin-card dash-empty-section">
        <p>Tous les blocs de cette section sont masqués.</p>
        <p className="dash-empty-section-hint">Ouvre « Personnaliser » pour en réafficher.</p>
      </div>
    );
  }

  const heroIds = ids.filter((id) => widgetById(id)?.size === "hero");
  const kpiIds = ids.filter((id) => widgetById(id)?.size === "kpi");
  const restIds = ids.filter((id) => !["hero", "kpi"].includes(widgetById(id)?.size));

  // Every widget is wrapped: a single bad field used to throw during render
  // and take the whole page down with it.
  const wrap = (id) => {
    const meta = widgetById(id);
    const group = meta?.group;
    const error = group ? ctx.errors?.[group] : null;

    if (error) {
      return (
        <WidgetFetchError
          key={id}
          title={meta.label}
          message={error}
          onRetry={group ? () => ctx.retry(group) : undefined}
        />
      );
    }

    const el = renderWidget(id, ctx, () => hide(id));
    if (!el) return null;
    return (
      <WidgetBoundary
        key={id}
        widgetId={id}
        title={meta?.label}
        onDismiss={() => hide(id)}
        onRetry={group ? () => ctx.retry(group) : undefined}
      >
        {el}
      </WidgetBoundary>
    );
  };

  return (
    <section className="dash-section" id={`dash-${section.id}`} aria-label={section.label}>
      {heroIds.map(wrap)}

      {kpiIds.length > 0 && <div className="stat-grid">{kpiIds.map(wrap)}</div>}

      {restIds.length > 0 && (
        <div className="dash-grid-2">
          {restIds.map((id) => {
            const el = wrap(id);
            if (!el) return null;
            return widgetById(id)?.size === "full" ? (
              <div key={id} className="dash-grid-full">
                {el}
              </div>
            ) : (
              el
            );
          })}
        </div>
      )}
    </section>
  );
}
