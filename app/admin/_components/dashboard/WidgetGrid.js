"use client";

import { widgetById } from "../../_lib/widgets";
import { renderWidget } from "./widgetRenderers";

export default function WidgetGrid({ visibleOrder, hide, ctx }) {
  const kpiIds = visibleOrder.filter((id) => widgetById(id)?.size === "kpi");
  const restIds = visibleOrder.filter((id) => widgetById(id)?.size !== "kpi");

  return (
    <>
      {kpiIds.length > 0 && (
        <div className="stat-grid">{kpiIds.map((id) => renderWidget(id, ctx, () => hide(id)))}</div>
      )}
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
    </>
  );
}
