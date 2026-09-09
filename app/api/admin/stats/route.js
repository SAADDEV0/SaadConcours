import { NextResponse } from "next/server";
import { getStats, getAdStats, getTopPaths, getVisitCities, getPdfCities, getRecentVisits, getRecentPdfDownloads } from "@/lib/analytics";
import { getAllConcours, getAllCours, getAllQuiz, getAllNews, getAllBlog, getCorrigeIds, getTaxonomyCoverage, getSettings } from "@/lib/store";
import { FILIERE_CATEGORIES } from "@/lib/taxonomy";

// Nothing in this route's own code touches request-specific data (no
// cookies/headers read, no uncached fetch) now that the abacus call is
// gone, so Next would otherwise statically optimize it — freezing the
// stats at build time. Force it dynamic so every request re-reads KV/GitHub.
export const dynamic = "force-dynamic";

// Write access to the underlying resources is gated elsewhere; this route
// only reads, but still sits behind the admin cookie (see middleware.js)
// since it exposes usage numbers not meant to be public.
export async function GET() {
  const [stats, concours, cours, quiz, news, blog, corrigeIds, taxonomyCoverage, settings, adStats, topPaths, visitCities, pdfCities, recentVisits, recentPdfDownloads] =
    await Promise.all([
      getStats(),
      getAllConcours(),
      getAllCours(),
      getAllQuiz(),
      getAllNews(),
      getAllBlog(),
      getCorrigeIds(),
      getTaxonomyCoverage(),
      getSettings(),
      getAdStats(),
      getTopPaths(15),
      getVisitCities(12),
      getPdfCities(12),
      getRecentVisits(30),
      getRecentPdfDownloads(30),
    ]);

  // A concours counts as "having a corrigé" whether it's the reviewed
  // corrige_md field or a file already committed to data/corriges/ that
  // was never copied into it — otherwise this dashboard flags concours as
  // missing a corrigé that already exist in the repo.
  const hasCorrige = (c) => Boolean(c.corrige_md) || corrigeIds.has(c.id);

  const concoursById = Object.fromEntries(concours.map((c) => [c.id, c]));
  const topConcours = stats.topConcours.map(({ member, score }) => ({
    id: member,
    views: score,
    label: concoursById[member]
      ? `${concoursById[member].etablissement} — ${concoursById[member].ville} (${concoursById[member].annee})`
      : member,
  }));

  // Storage appends new entries to the end of the array (see lib/store.js
  // addItem), so the tail of each list is, in practice, the most recently
  // added items — no separate createdAt field needed for a "recent" view.
  const recentConcours = concours
    .slice(-6)
    .reverse()
    .map((c) => ({ id: c.id, label: `${c.etablissement} — ${c.ville} (${c.annee})`, hasCorrige: hasCorrige(c) }));

  const concoursSansCorrige = concours
    .filter((c) => !hasCorrige(c))
    .slice(-8)
    .reverse()
    .map((c) => ({ id: c.id, label: `${c.etablissement} — ${c.ville} (${c.annee})` }));

  const today = new Date().toISOString().slice(0, 10);
  const in14Days = new Date(Date.now() + 14 * 86400000).toISOString().slice(0, 10);
  const newsExpiringSoon = news
    .filter((n) => !n.cloture && n.date_limite && n.date_limite >= today && n.date_limite <= in14Days)
    .sort((a, b) => a.date_limite.localeCompare(b.date_limite))
    .map((n) => ({ id: n.id, titre: n.titre, date_limite: n.date_limite, ville: n.ville }));

  // Content mix by catégorie — the 5 fixed taxonomy buckets, so an admin can
  // see at a glance which filières have the most (or the least) concours.
  const categorieLabel = Object.fromEntries(FILIERE_CATEGORIES.map((c) => [c.code, c.label]));
  const categorieCounts = {};
  for (const c of concours) {
    const code = c.categorie || "Autre";
    categorieCounts[code] = (categorieCounts[code] || 0) + 1;
  }
  const concoursByCategorie = Object.entries(categorieCounts)
    .map(([code, count]) => ({ code, label: categorieLabel[code] || code, count }))
    .sort((a, b) => b.count - a.count);

  // Concours added per month over the last 6 months (from date_ajout) — the
  // one number that answers "are we actually growing the catalogue".
  const monthsBack = 6;
  const monthBuckets = [];
  for (let i = monthsBack - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(1);
    d.setMonth(d.getMonth() - i);
    monthBuckets.push(d.toISOString().slice(0, 7)); // YYYY-MM
  }
  const monthCounts = Object.fromEntries(monthBuckets.map((m) => [m, 0]));
  for (const c of concours) {
    const m = (c.date_ajout || "").slice(0, 7);
    if (m in monthCounts) monthCounts[m]++;
  }
  const monthLabel = (m) => new Date(m + "-02T00:00:00").toLocaleDateString("fr-FR", { month: "short" }).replace(".", "");
  const concoursGrowth = monthBuckets.map((m) => ({ month: m, label: monthLabel(m), count: monthCounts[m] }));

  // Partner-ad performance (views/clicks tracked in lib/analytics), resolved
  // against the configured banners so the dashboard shows names, not raw ids
  // — falls back to the id itself for ads removed from settings since.
  const adNameById = Object.fromEntries((settings.partnerAds || []).map((a) => [a.id, a.name || a.id]));
  const adIds = new Set([...Object.keys(adStats.views || {}), ...Object.keys(adStats.clicks || {})]);
  const topAds = [...adIds]
    .map((id) => {
      const views = adStats.views?.[id] || 0;
      const clicks = adStats.clicks?.[id] || 0;
      return { id, label: adNameById[id] || id, views, clicks, ctr: views ? Math.round((clicks / views) * 1000) / 10 : 0 };
    })
    .sort((a, b) => b.views - a.views)
    .slice(0, 8);

  // Resolve each tracked URL (see trackPathView / /api/track/page-path) to a
  // human label — content detail pages show the item's real title instead
  // of a bare id, listing/static routes get a fixed French label.
  const coursById = Object.fromEntries(cours.map((c) => [c.id, c]));
  const quizById = Object.fromEntries(quiz.map((q) => [q.id, q]));
  const newsById = Object.fromEntries(news.map((n) => [n.id, n]));
  const blogById = Object.fromEntries(blog.map((b) => [b.id, b]));
  const STATIC_PAGE_LABELS = {
    "/": "Accueil",
    "/concours": "Concours (liste)",
    "/cours": "Cours (liste)",
    "/evaluation": "Évaluation (liste)",
    "/news": "Concours ouverts (liste)",
    "/blog": "Blog (liste)",
    "/faq": "FAQ",
  };
  function labelForPath(path) {
    if (STATIC_PAGE_LABELS[path]) return STATIC_PAGE_LABELS[path];
    const [, section, id] = path.split("/");
    if (section === "concours" && concoursById[id]) {
      const c = concoursById[id];
      return `${c.etablissement} — ${c.ville} (${c.annee})`;
    }
    if (section === "cours" && coursById[id]) return coursById[id].module || id;
    if (section === "evaluation" && quizById[id]) return quizById[id].module || id;
    if (section === "news" && newsById[id]) return newsById[id].titre || id;
    if (section === "blog" && blogById[id]) return blogById[id].title || id;
    return path;
  }
  const topPages = topPaths.map(({ member, score }) => ({ path: member, views: score, label: labelForPath(member) }));

  // Most-downloaded PDFs (see trackPdfDownload in lib/analytics.js, keyed
  // as "<kind>:<id>" in the analytics:pdf:byitem sorted set) — resolved
  // against each kind's store the same way topPages resolves a tracked
  // path, so the dashboard shows a real title instead of a bare id. Shared
  // with the recent-downloads log below (kind+id resolve the same way,
  // whether it's a ranked total or a single logged event).
  const KIND_ICON = { concours: "📚", cours: "📖", evaluation: "📝" };
  function labelForPdfItem(kind, id) {
    let label = id;
    if (kind === "concours" && concoursById[id]) {
      const c = concoursById[id];
      label = `${c.etablissement} — ${c.ville} (${c.annee})`;
    } else if (kind === "cours" && coursById[id]) {
      label = coursById[id].module || id;
    } else if (kind === "evaluation" && quizById[id]) {
      label = quizById[id].module || id;
    }
    return `${KIND_ICON[kind] || ""} ${label}`.trim();
  }
  const topPdf = (stats.pdfByItem || []).map(({ member, score }) => {
    const sep = member.indexOf(":");
    const kind = sep === -1 ? "" : member.slice(0, sep);
    const id = sep === -1 ? member : member.slice(sep + 1);
    return { id, kind, label: labelForPdfItem(kind, id), downloads: score };
  });

  // Who's actually visiting and downloading — city aggregates (only
  // populated once deployed on Vercel, see getClientGeo) plus a rolling
  // window of the most recent individual events with IP attached, for the
  // admin who wants to see exactly who/where, not just a ranked total.
  const visitCityStats = visitCities.map(({ member, score }) => ({ city: member, visits: score }));
  const pdfCityStats = pdfCities.map(({ member, score }) => ({ city: member, downloads: score }));
  const recentVisitLog = recentVisits.map((v) => ({ ...v, label: labelForPath(v.path) }));
  const recentPdfLog = recentPdfDownloads.map((d) => ({ ...d, label: labelForPdfItem(d.kind, d.id) }));

  return NextResponse.json({
    ...stats,
    topConcours,
    totalVisits: stats.visitsTotal,
    recentConcours,
    concoursSansCorrige,
    newsExpiringSoon,
    concoursByCategorie,
    concoursGrowth,
    topAds,
    topPages,
    topPdf,
    visitCities: visitCityStats,
    pdfCities: pdfCityStats,
    recentVisits: recentVisitLog,
    recentPdfDownloads: recentPdfLog,
    counts: {
      concours: concours.length,
      cours: cours.length,
      quiz: quiz.length,
      news: news.length,
      blog: blog.length,
      concoursAvecCorrige: concours.filter(hasCorrige).length,
      newsOuvertes: news.filter((n) => !n.cloture).length,
      filieresCouvertes: taxonomyCoverage.reduce((sum, cat) => sum + cat.sousFilieres.filter((s) => s.count > 0).length, 0),
      filieresTotal: taxonomyCoverage.reduce((sum, cat) => sum + cat.sousFilieres.length, 0),
    },
  });
}
