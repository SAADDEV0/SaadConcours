// Dashboard widget registry — drives the rendered grid (WidgetGrid), the
// section headers on the live dashboard, and the "Personnaliser" panel.
// Kept serializable (no render functions here); actual rendering lives in
// dashboard/widgetRenderers.js. `section` is the single grouping key used
// both for the visual dashboard layout and for how CustomizePanel buckets
// widgets, so there's one mental model instead of two.

export const DASHBOARD_SECTIONS = [
  { id: "overview", label: "Vue d'ensemble", icon: "📊" },
  { id: "audience", label: "Audience & croissance", icon: "📈" },
  { id: "content", label: "Contenu & catalogue", icon: "🗂️" },
  { id: "todo", label: "Concours à traiter", icon: "✅" },
  { id: "performance", label: "Performance", icon: "🏆" },
];

export const DASHBOARD_WIDGETS = [
  { id: "kpi.pdfToday", section: "overview", label: "PDF téléchargés aujourd'hui", size: "kpi", default: true },
  { id: "kpi.pdfWeek", section: "overview", label: "PDF cette semaine", size: "kpi", default: true },
  { id: "kpi.pdfTotal", section: "overview", label: "PDF au total", size: "kpi", default: true },
  { id: "kpi.visitsToday", section: "overview", label: "Visiteurs aujourd'hui", size: "kpi", default: true },
  { id: "kpi.visitsTotal", section: "overview", label: "Visiteurs (total)", size: "kpi", default: false },
  { id: "kpi.concours", section: "overview", label: "Concours", size: "kpi", default: true },
  { id: "kpi.cours", section: "overview", label: "Fiches de cours", size: "kpi", default: true },
  { id: "kpi.quiz", section: "overview", label: "Évaluations", size: "kpi", default: true },
  { id: "kpi.blog", section: "overview", label: "Articles de blog", size: "kpi", default: false },
  { id: "kpi.newsOpen", section: "overview", label: "Concours ouverts (news)", size: "kpi", default: true },
  { id: "kpi.filieres", section: "overview", label: "Filières couvertes", size: "kpi", default: true },

  { id: "chart.subscriberGrowth", section: "audience", label: "Croissance des abonnés", size: "half", default: true },
  { id: "list.newSubscribers", section: "audience", label: "Derniers abonnés", size: "half", default: true },
  { id: "chart.visits7d", section: "audience", label: "Visiteurs (7 jours)", size: "half", default: true },
  { id: "chart.pdf7d", section: "audience", label: "Téléchargements (7 jours)", size: "half", default: true },
  { id: "chart.pdfKind", section: "audience", label: "Répartition par type", size: "half", default: true },
  { id: "chart.visitSources", section: "audience", label: "Sources de visiteurs", size: "half", default: true },
  { id: "chart.visitCities", section: "audience", label: "Villes des visiteurs", size: "half", default: true },
  { id: "list.topPages", section: "audience", label: "Vues par page", size: "half", default: true },
  { id: "list.recentVisits", section: "audience", label: "Derniers visiteurs (IP)", size: "full", default: true },

  { id: "chart.concoursByCategorie", section: "content", label: "Concours par filière", size: "half", default: true },
  { id: "chart.concoursGrowth", section: "content", label: "Croissance du catalogue (6 mois)", size: "half", default: true },

  { id: "list.todo", section: "todo", label: "À faire", size: "full", default: true },
  { id: "list.sansCorrige", section: "todo", label: "Concours sans corrigé", size: "half", default: true },
  { id: "list.expiring", section: "todo", label: "Concours qui ferment bientôt", size: "half", default: true },

  { id: "list.topConcours", section: "performance", label: "Concours les plus consultés", size: "half", default: true },
  { id: "list.topPdf", section: "performance", label: "PDF les plus téléchargés", size: "half", default: true },
  { id: "chart.pdfCities", section: "performance", label: "Villes des téléchargements PDF", size: "half", default: true },
  { id: "list.recentPdfDownloads", section: "performance", label: "Derniers téléchargements PDF (IP)", size: "full", default: true },
  { id: "list.recent", section: "performance", label: "Derniers concours ajoutés", size: "half", default: true },
  { id: "list.topAds", section: "performance", label: "Performance des bannières partenaires", size: "half", default: true },
];

export const DEFAULT_HIDDEN = DASHBOARD_WIDGETS.filter((w) => !w.default).map((w) => w.id);
export const WIDGET_IDS = DASHBOARD_WIDGETS.map((w) => w.id);

export function widgetById(id) {
  return DASHBOARD_WIDGETS.find((w) => w.id === id);
}

export function sectionById(id) {
  return DASHBOARD_SECTIONS.find((s) => s.id === id);
}
