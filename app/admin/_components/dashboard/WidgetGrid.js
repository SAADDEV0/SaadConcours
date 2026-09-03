"use client";

import { DASHBOARD_SECTIONS, widgetById } from "../../_lib/widgets";
import { renderWidget } from "./widgetRenderers";

export default function WidgetGrid({ visibleOrder, hide, ctx }) {
  return (
    <>
      {DASHBOARD_SECTIONS.map((section) => {
        const ids = visibleOrder.filter((id) => widgetById(id)?.section === section.id);
        if (!ids.length) return null;
        const kpiIds = ids.filter((id) => widgetById(id)?.size === "kpi");
        const restIds = ids.filter((id) => widgetById(id)?.size !== "kpi");

        return (
          <section className="dash-section" id={`dash-${section.id}`} key={section.id}>
            <h2 className="dash-section-title">
              <span className="dash-section-icon">{section.icon}</span>
              {section.label}
            </h2>
            {kpiIds.length > 0 && <div className="stat-grid">{kpiIds.map((id) => renderWidget(id, ctx, () => hide(id)))}</div>}
            {restIds.length > 0 && (
              <div className="dash-grid-2">
                {restIds.map((id) => {
                  const meta = widgetById(id);
                  const el = renderWidget(id, ctx, () => hide(id));
                  if (!el) return null;
                  return meta?.size === "full" ? (
                    <div key={id} style={{ gridColumn: "1 / -1" }}>
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
      })}
    </>
  );
}
