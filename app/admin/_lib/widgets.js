// Dashboard widget registry — drives both the rendered grid (WidgetGrid) and
// the "Personnaliser" panel (CustomizePanel). Kept serializable (no render
// functions here); actual rendering lives in dashboard/widgetRenderers.js.

export const WIDGET_GROUPS = [
  { id: "kpi", label: "Indicateurs" },
  { id: "charts", label: "Graphiques" },
  { id: "lists", label: "Listes" },
];

export const DASHBOARD_WIDGETS = [
  { id: "kpi.pdfToday", group: "kpi", label: "PDF téléchargés aujourd'hui", size: "kpi", default: true },
  { id: "kpi.pdfWeek", group: "kpi", label: "PDF cette semaine", size: "kpi", default: true },
  { id: "kpi.pdfTotal", group: "kpi", label: "PDF au total", size: "kpi", default: true },
  { id: "kpi.visitsToday", group: "kpi", label: "Visiteurs aujourd'hui", size: "kpi", default: true },
  { id: "kpi.visitsTotal", group: "kpi", label: "Visiteurs (total)", size: "kpi", default: false },
  { id: "kpi.concours", group: "kpi", label: "Concours", size: "kpi", default: true },
  { id: "kpi.cours", group: "kpi", label: "Fiches de cours", size: "kpi", default: true },
  { id: "kpi.quiz", group: "kpi", label: "Évaluations", size: "kpi", default: true },
  { id: "kpi.newsOpen", group: "kpi", label: "Concours ouverts (news)", size: "kpi", default: true },
  { id: "chart.pdf7d", group: "charts", label: "Téléchargements (7 jours)", size: "half", default: true },
  { id: "chart.pdfKind", group: "charts", label: "Répartition par type", size: "half", default: true },
  { id: "list.topConcours", group: "lists", label: "Concours les plus consultés", size: "half", default: true },
  { id: "list.sansCorrige", group: "lists", label: "Concours sans corrigé", size: "half", default: true },
  { id: "list.expiring", group: "lists", label: "Concours qui ferment bientôt", size: "half", default: true },
  { id: "list.recent", group: "lists", label: "Derniers concours ajoutés", size: "half", default: true },
  { id: "list.todo", group: "lists", label: "À faire", size: "full", default: true },
];

export const DEFAULT_HIDDEN = DASHBOARD_WIDGETS.filter((w) => !w.default).map((w) => w.id);
export const WIDGET_IDS = DASHBOARD_WIDGETS.map((w) => w.id);

export function widgetById(id) {
  return DASHBOARD_WIDGETS.find((w) => w.id === id);
}
