"use client";

import { useCallback, useMemo } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { DASHBOARD_WIDGETS, DEFAULT_HIDDEN, WIDGET_IDS, widgetById } from "./widgets";

const STORAGE_KEY = "sc_admin_dashboard";
// v2: the widget ids changed with the period-aware rewrite (kpi.pdfToday →
// kpi.pdf, chart.timeline → chart.traffic, …). Bumping the version discards
// a v1 layout instead of leaving an admin staring at a dashboard where half
// the blocks silently no longer exist.
const STATE_VERSION = 2;
const DEFAULT_STATE = { v: STATE_VERSION, hidden: DEFAULT_HIDDEN, order: WIDGET_IDS, density: "comfortable" };

export const DENSITIES = [
  { id: "comfortable", label: "Confortable" },
  { id: "compact", label: "Compact" },
];

// Widgets to show/hide/reorder on the dashboard, persisted in localStorage.
// We store `hidden` (not `visible`) so a widget shipped in a future release
// appears automatically instead of staying hidden for existing users; `order`
// only needs to record what the user actually touched — anything missing is
// filled in at its default registry position, so adding a widget later can't
// leave it stranded off the end of a stale saved order.
export function useDashboardLayout() {
  const [stored, setStored, ready] = useLocalStorage(STORAGE_KEY, DEFAULT_STATE);

  const raw = stored?.v === STATE_VERSION ? stored : DEFAULT_STATE;

  const order = useMemo(() => {
    const kept = Array.isArray(raw.order) ? raw.order.filter((id) => WIDGET_IDS.includes(id)) : [];
    const missing = WIDGET_IDS.filter((id) => !kept.includes(id));
    return [...kept, ...missing];
  }, [raw.order]);

  const hidden = useMemo(() => new Set(Array.isArray(raw.hidden) ? raw.hidden : DEFAULT_HIDDEN), [raw.hidden]);
  const density = raw.density === "compact" ? "compact" : "comfortable";

  const setRaw = useCallback(
    (updater) =>
      setStored((prev) => {
        const base = prev?.v === STATE_VERSION ? prev : DEFAULT_STATE;
        return { ...base, v: STATE_VERSION, ...(typeof updater === "function" ? updater(base) : updater) };
      }),
    [setStored]
  );

  const isVisible = useCallback((id) => !hidden.has(id), [hidden]);

  const hide = useCallback(
    (id) => setRaw((prev) => ({ hidden: [...new Set([...(prev.hidden || []), id])] })),
    [setRaw]
  );
  const show = useCallback(
    (id) => setRaw((prev) => ({ hidden: (prev.hidden || []).filter((h) => h !== id) })),
    [setRaw]
  );
  const toggle = useCallback((id) => (isVisible(id) ? hide(id) : show(id)), [isVisible, hide, show]);

  const setDensity = useCallback((next) => setRaw(() => ({ density: next })), [setRaw]);

  // Normalises whatever is stored into a full, valid order before any
  // reorder operation — both `move` and `reorder` need the same guarantee.
  const fullOrder = useCallback(
    (prev) => {
      const current = (prev.order && prev.order.length ? prev.order : order).filter((x) => WIDGET_IDS.includes(x));
      return [...current, ...WIDGET_IDS.filter((x) => !current.includes(x))];
    },
    [order]
  );

  // Swaps `id` with its neighbour within the same dashboard section, so the
  // arrow buttons in the "Personnaliser" panel never reorder a widget across
  // a section boundary. Kept as the keyboard path now that dragging exists —
  // drag-and-drop alone would make reordering impossible without a mouse.
  const move = useCallback(
    (id, direction) => {
      setRaw((prev) => {
        const full = fullOrder(prev);
        const section = widgetById(id)?.section;
        const groupIndices = full
          .map((wid, idx) => (widgetById(wid)?.section === section ? idx : -1))
          .filter((idx) => idx !== -1);
        const posInGroup = groupIndices.indexOf(full.indexOf(id));
        const targetPos = posInGroup + direction;
        if (targetPos < 0 || targetPos >= groupIndices.length) return prev;
        const a = groupIndices[posInGroup];
        const b = groupIndices[targetPos];
        const next = [...full];
        [next[a], next[b]] = [next[b], next[a]];
        return { order: next };
      });
    },
    [fullOrder, setRaw]
  );

  // Drop `id` at the position currently held by `targetId`. Both must be in
  // the same section — the drag UI only exposes drop targets inside one
  // group, and a cross-section drop would silently move a widget to a tab the
  // user isn't looking at.
  const reorder = useCallback(
    (id, targetId) => {
      if (id === targetId) return;
      setRaw((prev) => {
        const full = fullOrder(prev);
        if (widgetById(id)?.section !== widgetById(targetId)?.section) return prev;
        const from = full.indexOf(id);
        const to = full.indexOf(targetId);
        if (from === -1 || to === -1) return prev;
        const next = [...full];
        next.splice(from, 1);
        next.splice(to, 0, id);
        return { order: next };
      });
    },
    [fullOrder, setRaw]
  );

  const reset = useCallback(() => setStored(DEFAULT_STATE), [setStored]);

  const visibleOrder = useMemo(() => order.filter(isVisible), [order, isVisible]);

  return {
    ready,
    order,
    visibleOrder,
    isVisible,
    hide,
    show,
    toggle,
    move,
    reorder,
    reset,
    density,
    setDensity,
    widgets: DASHBOARD_WIDGETS,
  };
}
