import { NextResponse } from "next/server";
import {
  getStats,
  getAdStats,
  getTopPaths,
  getVisitCities,
  getPdfCities,
  getRecentVisits,
  getRecentPdfDownloads,
  getDigestLog,
  getTopSearchMisses,
  getSearchMissLog,
  getRangeMetrics,
} from "@/lib/analytics";
import { getAuditLog, AUDIT_ACTIONS, AUDIT_RESOURCES } from "@/lib/auditLog";
import {
  getAllConcours,
  getAllCours,
  getAllQuiz,
  getAllNews,
  getAllBlog,
  getCorrigeIds,
  getTaxonomyCoverage,
  getSettings,
} from "@/lib/store";
import { FILIERE_CATEGORIES } from "@/lib/taxonomy";
import { bacPathLabel } from "@/lib/bacProgramme";
import { resolveRange, dayKeysInRange, bucketGranularity, formatDayFr } from "@/lib/dateRange";

// Nothing in this route's own code touches request-specific data beyond the
// query string, so Next would otherwise statically optimize it — freezing
// the stats at build time. Force it dynamic so every request re-reads
// KV/GitHub.
export const dynamic = "force-dynamic";

/* --------------------------------------------------------------------------
 * This used to be one monolith: 19 parallel calls that loaded *every*
 * concours, cours, quiz, news and blog post out of GitHub/KV and returned
 * ~35 widgets' worth of data — on every request, every 60 seconds, for every
 * open tab, whether or not the widgets that needed them were even visible.
 *
 * Two changes fix that:
 *   1. `?groups=` — the client asks for the groups its visible tab actually
 *      renders, and only the stores those groups need get loaded (see
 *      `stores` below: each dataset is fetched at most once per request, and
 *      never at all if no requested group mentions it).
 *   2. `?preset=` / `?from=&to=` — every series, total and delta is scoped to
 *      the dashboard's period picker instead of a window hard-coded per
 *      widget.
 * Responses carry a short s-maxage + stale-while-revalidate so a burst of
 * tabs polling at once collapses onto one upstream read.
 * ------------------------------------------------------------------------ */

const ALL_GROUPS = ["kpis", "audience", "content", "todo", "perf", "logs"];

// Memoised per request: several groups need the same dataset for labels, and
// each of these is a GitHub read or a KV round-trip.
function createStores() {
  const cache = new Map();
  const once = (key, fn) => () => {
    if (!cache.has(key)) cache.set(key, fn());
    return cache.get(key);
  };
  return {
    concours: once("concours", getAllConcours),
    cours: once("cours", getAllCours),
    quiz: once("quiz", getAllQuiz),
    news: once("news", getAllNews),
    blog: once("blog", getAllBlog),
    corrigeIds: once("corrigeIds", getCorrigeIds),
    taxonomyCoverage: once("taxonomyCoverage", getTaxonomyCoverage),
    settings: once("settings", getSettings),
    // The all-time counters (totals, top lists, source breakdown) are shared
    // by three groups — without the memo they'd each pay for their own set
    // of KV round-trips.
    base: once("base", getStats),
  };
}

// Resolves a tracked URL to a human label — content detail pages show the
// item's real title instead of a bare id, listing/static routes get a fixed
// French label.
const STATIC_PAGE_LABELS = {
  "/": "Accueil",
  "/concours": "Concours (liste)",
  "/cours": "Cours (liste)",
  "/evaluation": "Évaluation (liste)",
  "/news": "Concours ouverts (liste)",
  "/blog": "Blog (liste)",
  "/faq": "FAQ",
};

function makePathLabeller({ concoursById, coursById, quizById, newsById, blogById }) {
  return function labelForPath(path) {
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
    if (section === "bac") return bacPathLabel(path) || path;
    return path;
  };
}

// Most-downloaded PDFs are keyed "<kind>:<id>" in the analytics:pdf:byitem
// sorted set; the recent-downloads log carries kind and id separately. Both
// resolve through here so a ranked total and a single logged event show the
// same title.
const KIND_ICON = { concours: "concours", cours: "cours", evaluation: "evaluation" };
function makePdfLabeller({ concoursById, coursById, quizById }) {
  return function labelForPdfItem(kind, id) {
    if (kind === "concours" && concoursById[id]) {
      const c = concoursById[id];
      return `${c.etablissement} — ${c.ville} (${c.annee})`;
    }
    if (kind === "cours" && coursById[id]) return coursById[id].module || id;
    if (kind === "evaluation" && quizById[id]) return quizById[id].module || id;
    return id;
  };
}

const byId = (list) => Object.fromEntries(list.map((x) => [x.id, x]));

/* ----------------------------- Group builders ----------------------------- */

async function buildKpis(stores, range) {
  const [metrics, base, concours, cours, quiz, news, blog, corrigeIds, taxonomyCoverage] = await Promise.all([
    getRangeMetrics(range),
    getStats(),
    stores.concours(),
    stores.cours(),
    stores.quiz(),
    stores.news(),
    stores.blog(),
    stores.corrigeIds(),
    stores.taxonomyCoverage(),
  ]);

  // A concours counts as "having a corrigé" whether it's the reviewed
  // corrige_md field or a file already committed to data/corriges/ that was
  // never copied into it — otherwise the dashboard flags concours as missing
  // a corrigé that already exist in the repo.
  const hasCorrige = (c) => Boolean(c.corrige_md) || corrigeIds.has(c.id);

  return {
    metrics,
    totals: {
      pdfTotal: base.pdfTotal,
      pdfToday: base.pdfToday,
      visitsTotal: base.visitsTotal,
      visitsToday: base.visitsToday,
    },
    pdfByKind: base.pdfByKind,
    counts: {
      concours: concours.length,
      cours: cours.length,
      quiz: quiz.length,
      news: news.length,
      blog: blog.length,
      concoursAvecCorrige: concours.filter(hasCorrige).length,
      concoursSansCorrige: concours.filter((c) => !hasCorrige(c)).length,
      newsOuvertes: news.filter((n) => !n.cloture).length,
      filieresCouvertes: taxonomyCoverage.reduce(
        (sum, cat) => sum + cat.sousFilieres.filter((s) => s.count > 0).length,
        0
      ),
      filieresTotal: taxonomyCoverage.reduce((sum, cat) => sum + cat.sousFilieres.length, 0),
    },
  };
}

async function buildAudience(stores) {
  const [base, topPaths, visitCities, concours, cours, quiz, news, blog] = await Promise.all([
    getStats(),
    getTopPaths(15),
    getVisitCities(12),
    stores.concours(),
    stores.cours(),
    stores.quiz(),
    stores.news(),
    stores.blog(),
  ]);
  const labelForPath = makePathLabeller({
    concoursById: byId(concours),
    coursById: byId(cours),
    quizById: byId(quiz),
    newsById: byId(news),
    blogById: byId(blog),
  });

  return {
    visitSources: base.visitSources,
    visitCities: visitCities.map(({ member, score }) => ({ city: member, visits: score })),
    topPages: topPaths.map(({ member, score }) => ({ path: member, views: score, label: labelForPath(member) })),
  };
}

async function buildContent(stores, range) {
  const concours = await stores.concours();

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

  // Catalogue growth now follows the picker instead of a fixed 6 months —
  // bucketed the same way the analytics series are, so both charts on the
  // page share an x axis granularity.
  const granularity = bucketGranularity(range.days);
  const days = dayKeysInRange(range.from, range.to);
  const bucketKey = (day) => {
    if (granularity === "month") return day.slice(0, 7);
    if (granularity === "day") return day;
    const [y, m, d] = day.split("-").map(Number);
    const date = new Date(Date.UTC(y, m - 1, d));
    date.setUTCDate(date.getUTCDate() - ((date.getUTCDay() + 6) % 7));
    return date.toISOString().slice(0, 10);
  };
  const buckets = new Map();
  for (const day of days) {
    const k = bucketKey(day);
    if (!buckets.has(k)) buckets.set(k, { key: k, first: day, value: 0 });
  }
  let addedInRange = 0;
  for (const c of concours) {
    const day = (c.date_ajout || "").slice(0, 10);
    if (!day || day < range.from || day > range.to) continue;
    addedInRange++;
    const b = buckets.get(bucketKey(day));
    if (b) b.value++;
  }
  const concoursGrowth = [...buckets.values()].map((b) => ({
    key: b.key,
    label:
      granularity === "month"
        ? formatDayFr(b.key + "-01", { month: "short" })
        : formatDayFr(b.first, { day: "numeric", month: "short" }),
    full: b.key,
    value: b.value,
  }));

  return { concoursByCategorie, concoursGrowth, addedInRange, granularity };
}

async function buildTodo(stores) {
  const [concours, corrigeIds, news, searchMisses, searchMissLog] = await Promise.all([
    stores.concours(),
    stores.corrigeIds(),
    stores.news(),
    getTopSearchMisses(15),
    getSearchMissLog(),
  ]);
  const hasCorrige = (c) => Boolean(c.corrige_md) || corrigeIds.has(c.id);

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

  // The miss counter is a plain tally with no notion of time, so the "quand"
  // of each term is reconstructed from the event log (newest first, see
  // trackSearchMiss). A term whose occurrences have all scrolled out of that
  // capped window keeps lastAt empty rather than borrowing a wrong date — so
  // the count can legitimately be higher than times.length.
  const missTimes = new Map();
  for (const e of searchMissLog) {
    if (!e?.query || !e?.at) continue;
    const seen = missTimes.get(e.query);
    if (seen) seen.push(e.at);
    else missTimes.set(e.query, [e.at]);
  }
  const searchMissStats = searchMisses.map(({ member, score }) => {
    const times = missTimes.get(member) || [];
    return {
      query: member,
      count: score,
      lastAt: times[0] || null,
      firstAt: times.length ? times[times.length - 1] : null,
      times: times.slice(0, 20),
    };
  });

  return { concoursSansCorrige, newsExpiringSoon, searchMisses: searchMissStats };
}

async function buildPerf(stores) {
  const [base, adStats, pdfCities, concours, cours, quiz, corrigeIds, settings] = await Promise.all([
    getStats(),
    getAdStats(),
    getPdfCities(12),
    stores.concours(),
    stores.cours(),
    stores.quiz(),
    stores.corrigeIds(),
    stores.settings(),
  ]);

  const concoursById = byId(concours);
  const hasCorrige = (c) => Boolean(c.corrige_md) || corrigeIds.has(c.id);
  const labelForPdfItem = makePdfLabeller({ concoursById, coursById: byId(cours), quizById: byId(quiz) });

  const topConcours = base.topConcours.map(({ member, score }) => ({
    id: member,
    views: score,
    label: concoursById[member]
      ? `${concoursById[member].etablissement} — ${concoursById[member].ville} (${concoursById[member].annee})`
      : member,
  }));

  const topPdf = (base.pdfByItem || []).map(({ member, score }) => {
    const sep = member.indexOf(":");
    const kind = sep === -1 ? "" : member.slice(0, sep);
    const id = sep === -1 ? member : member.slice(sep + 1);
    return { id, kind: KIND_ICON[kind] || kind, label: labelForPdfItem(kind, id), downloads: score };
  });

  // Storage appends new entries to the end of the array (see lib/store.js
  // addItem), so the tail of each list is, in practice, the most recently
  // added items — no separate createdAt field needed for a "recent" view.
  const recentConcours = concours
    .slice(-6)
    .reverse()
    .map((c) => ({ id: c.id, label: `${c.etablissement} — ${c.ville} (${c.annee})`, hasCorrige: hasCorrige(c) }));

  // Partner-ad performance resolved against the configured banners so the
  // dashboard shows names, not raw ids — falls back to the id itself for ads
  // removed from settings since.
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

  return {
    topConcours,
    topPdf,
    recentConcours,
    topAds,
    pdfCities: pdfCities.map(({ member, score }) => ({ city: member, downloads: score })),
  };
}

async function buildLogs(stores) {
  const [recentVisits, recentPdfDownloads, digestLog, auditLog, concours, cours, quiz, news, blog] = await Promise.all([
    getRecentVisits(30),
    getRecentPdfDownloads(30),
    getDigestLog(20),
    getAuditLog(40),
    stores.concours(),
    stores.cours(),
    stores.quiz(),
    stores.news(),
    stores.blog(),
  ]);

  const concoursById = byId(concours);
  const coursById = byId(cours);
  const quizById = byId(quiz);
  const labelForPath = makePathLabeller({
    concoursById,
    coursById,
    quizById,
    newsById: byId(news),
    blogById: byId(blog),
  });
  const labelForPdfItem = makePdfLabeller({ concoursById, coursById, quizById });

  return {
    recentVisits: recentVisits.map((v) => ({ ...v, label: labelForPath(v.path) })),
    recentPdfDownloads: recentPdfDownloads.map((d) => ({ ...d, label: labelForPdfItem(d.kind, d.id), kind: d.kind })),
    digestLog,
    auditLog: auditLog.map((e) => ({
      ...e,
      actionLabel: AUDIT_ACTIONS[e.action]?.label || e.action,
      actionTone: AUDIT_ACTIONS[e.action]?.tone || "faint",
      resourceLabel: AUDIT_RESOURCES[e.resource] || e.resource,
    })),
  };
}

const BUILDERS = {
  kpis: buildKpis,
  audience: buildAudience,
  content: buildContent,
  todo: buildTodo,
  perf: buildPerf,
  logs: buildLogs,
};

// Write access to the underlying resources is gated elsewhere; this route
// only reads, but still sits behind the admin cookie (see middleware.js)
// since it exposes usage numbers not meant to be public.
export async function GET(req) {
  const params = req.nextUrl.searchParams;
  const range = resolveRange({
    preset: params.get("preset"),
    from: params.get("from"),
    to: params.get("to"),
  });

  const asked = (params.get("groups") || "").split(",").map((g) => g.trim()).filter(Boolean);
  const groups = asked.length ? asked.filter((g) => ALL_GROUPS.includes(g)) : ALL_GROUPS;
  if (!groups.length) {
    return NextResponse.json({ error: "Aucun groupe valide demandé." }, { status: 400 });
  }

  const stores = createStores();

  // One group failing (a GitHub hiccup, a malformed data file) must not take
  // the whole payload down with it — the client renders an error slab for
  // that group alone and keeps the rest of the dashboard live.
  const settled = await Promise.allSettled(groups.map((g) => BUILDERS[g](stores, range)));

  const data = {};
  const errors = {};
  settled.forEach((res, i) => {
    const name = groups[i];
    if (res.status === "fulfilled") {
      data[name] = res.value;
    } else {
      console.error(`stats group "${name}" failed`, res.reason);
      errors[name] = res.reason?.message || "Erreur inconnue";
    }
  });

  const body = { range, groups: data };
  if (Object.keys(errors).length) body.errors = errors;

  const json = NextResponse.json(body);
  // Analytics counters move constantly but nobody needs second-level
  // freshness here; 30s of shared cache collapses a burst of polling tabs
  // onto one upstream read, and the stale window keeps the panel responsive
  // while the next read is in flight.
  json.headers.set("Cache-Control", "private, s-maxage=30, stale-while-revalidate=120");
  return json;
}
