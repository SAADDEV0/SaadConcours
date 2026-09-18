// Dashboard widget registry — drives the rendered grid (WidgetGrid), the
// section tabs on the live dashboard, and the "Personnaliser" panel.
// Kept serializable (no render functions here); actual rendering lives in
// dashboard/widgetRenderers.js.
//
// Three keys do the structural work:
//   `section` — which tab the widget lives under. One grouping key for both
//     the visual layout and how CustomizePanel buckets widgets, so there's
//     one mental model instead of two.
//   `group`   — which /api/admin/stats group supplies its data. This is what
//     lets the page request only what the open tab renders instead of
//     pulling every dataset on every poll.
//   `href`    — where the number goes when clicked. A dashboard figure that
//     can't be opened is a dead end; every tile that has a list behind it
//     links to that list, filtered where the list supports it.

export const DASHBOARD_SECTIONS = [
  { id: "overview", label: "Vue d'ensemble", icon: "dashboard" },
  { id: "audience", label: "Audience", icon: "trendingUp" },
  { id: "content", label: "Contenu", icon: "folders" },
  { id: "todo", label: "À traiter", icon: "checkCircle" },
  { id: "performance", label: "Performance", icon: "trophy" },
];

export const DASHBOARD_WIDGETS = [
  /* --- Vue d'ensemble --------------------------------------------------- */
  // The headline metric of the whole panel: a full-width hero slab above the
  // KPI strip, not one tile among twelve.
  { id: "kpi.pdf", section: "overview", group: "kpis", label: "Téléchargements PDF (période)", size: "hero", default: true },
  { id: "kpi.visits", section: "overview", group: "kpis", label: "Visiteurs (période)", size: "kpi", default: true },
  { id: "kpi.conversion", section: "overview", group: "kpis", label: "Taux visites → PDF", size: "kpi", default: true },
  { id: "kpi.pdfTotal", section: "overview", group: "kpis", label: "PDF au total (tout temps)", size: "kpi", default: false },
  { id: "kpi.visitsTotal", section: "overview", group: "kpis", label: "Visiteurs (tout temps)", size: "kpi", default: false },
  { id: "kpi.concours", section: "overview", group: "kpis", label: "Concours", size: "kpi", default: true, href: "/admin/concours" },
  { id: "kpi.cours", section: "overview", group: "kpis", label: "Fiches de cours", size: "kpi", default: true, href: "/admin/cours" },
  { id: "kpi.quiz", section: "overview", group: "kpis", label: "Évaluations", size: "kpi", default: true, href: "/admin/evaluation" },
  { id: "kpi.blog", section: "overview", group: "kpis", label: "Articles de blog", size: "kpi", default: false, href: "/admin/blog" },
  { id: "kpi.newsOpen", section: "overview", group: "kpis", label: "Concours ouverts", size: "kpi", default: true, href: "/admin/concours-ouverts" },
  // No server-side "missing corrigé" filter exists on the concours list, so
  // this points at the pipeline view — the one screen that groups concours by
  // how far through editing they are — rather than inventing a query param
  // the list would silently ignore.
  { id: "kpi.sansCorrige", section: "overview", group: "kpis", label: "Concours sans corrigé", size: "kpi", default: true, href: "/admin/concours?vue=pipeline" },
  { id: "kpi.filieres", section: "overview", group: "kpis", label: "Filières couvertes", size: "kpi", default: true, href: "/admin/concours/filieres" },
  { id: "chart.traffic", section: "overview", group: "kpis", label: "Trafic et téléchargements", size: "full", default: true },
  { id: "state.system", section: "overview", group: null, label: "État du système", size: "half", default: true },
  { id: "list.activityFeed", section: "overview", group: "logs", label: "Flux d'activité récent", size: "half", default: true },

  /* --- Audience --------------------------------------------------------- */
  { id: "chart.subscriberGrowth", section: "audience", group: null, label: "Croissance des abonnés", size: "half", default: true },
  { id: "list.newSubscribers", section: "audience", group: null, label: "Derniers abonnés", size: "half", default: true },
  { id: "chart.pdfKind", section: "audience", group: "kpis", label: "Répartition par type de contenu", size: "half", default: true },
  { id: "chart.visitSources", section: "audience", group: "audience", label: "Sources de visiteurs", size: "half", default: true },
  { id: "chart.visitCities", section: "audience", group: "audience", label: "Villes des visiteurs", size: "half", default: true },
  { id: "list.topPages", section: "audience", group: "audience", label: "Vues par page", size: "half", default: true },
  // Raw logs render as closed disclosures (one header line), not as 30-row
  // tables permanently open.
  { id: "list.recentVisits", section: "audience", group: "logs", label: "Derniers visiteurs (IP anonymisée)", size: "full", default: true },
  // The only place a manual/test send AND the unattended daily cron both
  // leave a trace — see lib/analytics.js trackDigestSend.
  { id: "list.digestLog", section: "audience", group: "logs", label: "Journal des envois d'email (digest)", size: "full", default: true },

  /* --- Contenu ---------------------------------------------------------- */
  { id: "chart.concoursByCategorie", section: "content", group: "content", label: "Concours par filière", size: "half", default: true, href: "/admin/concours/filieres" },
  { id: "chart.concoursGrowth", section: "content", group: "content", label: "Croissance du catalogue", size: "half", default: true },

  /* --- À traiter -------------------------------------------------------- */
  { id: "list.todo", section: "todo", group: null, label: "À faire", size: "full", default: true },
  { id: "list.sansCorrige", section: "todo", group: "todo", label: "Concours sans corrigé", size: "half", default: true, href: "/admin/concours" },
  { id: "list.expiring", section: "todo", group: "todo", label: "Concours qui ferment bientôt", size: "half", default: true, href: "/admin/concours-ouverts" },
  { id: "list.searchMisses", section: "todo", group: "todo", label: "Recherches sans résultat", size: "full", default: true },

  /* --- Performance ------------------------------------------------------ */
  { id: "list.topConcours", section: "performance", group: "perf", label: "Concours les plus consultés", size: "half", default: true },
  { id: "list.topPdf", section: "performance", group: "perf", label: "PDF les plus téléchargés", size: "half", default: true },
  { id: "chart.pdfCities", section: "performance", group: "perf", label: "Villes des téléchargements PDF", size: "half", default: false },
  { id: "list.recent", section: "performance", group: "perf", label: "Derniers concours ajoutés", size: "half", default: true, href: "/admin/concours" },
  { id: "list.topAds", section: "performance", group: "perf", label: "Performance des bannières partenaires", size: "half", default: true, href: "/admin/reglages/partenaires" },
  { id: "list.recentPdfDownloads", section: "performance", group: "logs", label: "Derniers téléchargements PDF", size: "full", default: true },
  // Who changed what, from lib/auditLog.js — the panel's only record of its
  // own write history.
  { id: "list.audit", section: "performance", group: "logs", label: "Journal des modifications (audit)", size: "full", default: true },
];

export const DEFAULT_HIDDEN = DASHBOARD_WIDGETS.filter((w) => !w.default).map((w) => w.id);
export const WIDGET_IDS = DASHBOARD_WIDGETS.map((w) => w.id);

export function widgetById(id) {
  return DASHBOARD_WIDGETS.find((w) => w.id === id);
}

export function sectionById(id) {
  return DASHBOARD_SECTIONS.find((s) => s.id === id);
}

// The API groups a given set of visible widgets actually needs. Widgets with
// `group: null` are fed by their own endpoints (settings, subscribers) and
// contribute nothing here.
export function groupsForWidgets(ids) {
  const groups = new Set();
  for (const id of ids) {
    const g = widgetById(id)?.group;
    if (g) groups.add(g);
  }
  return [...groups];
}

export function widgetsInSection(sectionId, ids) {
  return ids.filter((id) => widgetById(id)?.section === sectionId);
}
