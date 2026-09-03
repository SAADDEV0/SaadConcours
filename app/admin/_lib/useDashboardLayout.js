"use client";

import { useCallback, useMemo } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { DASHBOARD_WIDGETS, DEFAULT_HIDDEN, WIDGET_IDS, widgetById } from "./widgets";

const STORAGE_KEY = "sc_admin_dashboard";
const DEFAULT_STATE = { v: 1, hidden: DEFAULT_HIDDEN, order: WIDGET_IDS };

// Widgets to show/hide/reorder on the dashboard, persisted in localStorage.
// We store `hidden` (not `visible`) so a widget shipped in a future release
// appears automatically instead of staying hidden for existing users; `order`
// only needs to record what the user actually touched — anything missing is
// filled in at its default registry position, so adding a widget later can't
// leave it stranded off the end of a stale saved order.
export function useDashboardLayout() {
  const [raw, setRaw, ready] = useLocalStorage(STORAGE_KEY, DEFAULT_STATE);

  const order = useMemo(() => {
    const stored = Array.isArray(raw.order) ? raw.order.filter((id) => WIDGET_IDS.includes(id)) : [];
    const missing = WIDGET_IDS.filter((id) => !stored.includes(id));
    return [...stored, ...missing];
  }, [raw.order]);

  const hidden = useMemo(() => new Set(Array.isArray(raw.hidden) ? raw.hidden : DEFAULT_HIDDEN), [raw.hidden]);

  const isVisible = useCallback((id) => !hidden.has(id), [hidden]);

  const hide = useCallback(
    (id) => setRaw((prev) => ({ ...prev, hidden: [...new Set([...(prev.hidden || []), id])] })),
    [setRaw]
  );
  const show = useCallback(
    (id) => setRaw((prev) => ({ ...prev, hidden: (prev.hidden || []).filter((h) => h !== id) })),
    [setRaw]
  );
  const toggle = useCallback((id) => (isVisible(id) ? hide(id) : show(id)), [isVisible, hide, show]);

  // Swaps `id` with its neighbor within the same registry group, so arrow
  // buttons in the "Personnaliser" panel (grouped by KPI/Graphiques/Listes)
  // never reorder a widget across a group boundary.
  const move = useCallback(
    (id, direction) => {
      setRaw((prev) => {
        const current = (prev.order && prev.order.length ? prev.order : order).filter((x) => WIDGET_IDS.includes(x));
        const full = [...current, ...WIDGET_IDS.filter((x) => !current.includes(x))];
        const group = widgetById(id)?.group;
        const groupIndices = full.map((wid, idx) => (widgetById(wid)?.group === group ? idx : -1)).filter((idx) => idx !== -1);
        const posInGroup = groupIndices.indexOf(full.indexOf(id));
        const targetPos = posInGroup + direction;
        if (targetPos < 0 || targetPos >= groupIndices.length) return prev;
        const a = groupIndices[posInGroup];
        const b = groupIndices[targetPos];
        const next = [...full];
        [next[a], next[b]] = [next[b], next[a]];
        return { ...prev, order: next };
      });
    },
    [order, setRaw]
  );

  const reset = useCallback(() => setRaw(DEFAULT_STATE), [setRaw]);

  const visibleOrder = useMemo(() => order.filter(isVisible), [order, isVisible]);

  return { ready, order, visibleOrder, isVisible, hide, show, toggle, move, reset, widgets: DASHBOARD_WIDGETS };
}
