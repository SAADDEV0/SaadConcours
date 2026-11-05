import { NextResponse } from "next/server";
import {
  getRangeMetrics,
  getRangeBreakdown,
  getLive,
  getTotals,
  getTopPaths,
  getVisitCities,
  getPdfCities,
  getVisitSources,
  getTopPdfItems,
  getTopConcoursViews,
  getTopSearchMisses,
  getSearchMissLog,
  getRecentVisits,
  getRecentPdfDownloads,
  getAdStats,
  getShopStats,
  getPageStats,
  dismissSearchMiss,
} from "@/lib/analytics";
import { getSubscriberHistory } from "@/lib/subscribers";
import { resolveRange } from "@/lib/dateRange";

export const dynamic = "force-dynamic";

// Même forme que les chemins acceptés par /api/track/* (seuls ceux-là existent).
const PATH_RE = /^\/[a-zA-Z0-9\-_/]{0,180}$/;

const CACHE = { "Cache-Control": "private, max-age=30" };
// « En direct » est rafraîchi chaque minute : pas de cache navigateur.
const NO_CACHE = { "Cache-Control": "private, no-store" };

// Statistiques de la console. Uniquement des lectures KV (compteurs,
// classements, journaux) : aucun fichier de contenu n'est chargé ici, les
// libellés sont résolus par le navigateur.
//
// ?preset=7d|30d|90d|12m|today  ou  ?from=AAAA-MM-JJ&to=AAAA-MM-JJ
// ?scope=summary  → ce que le tableau de bord affiche
// ?scope=ads | shop | journal | page | live → un seul écran / onglet
export async function GET(req) {
  const sp = req.nextUrl.searchParams;
  const scope = sp.get("scope") || "full";
  const range = resolveRange({ preset: sp.get("preset"), from: sp.get("from"), to: sp.get("to") });

  const safe = (p, fallback) => p.catch((err) => (console.error("metrics", scope, err), fallback));

  // Bannières partenaires (écran Monétisation).
  if (scope === "ads") {
    const ads = await safe(getAdStats(), { views: {}, clicks: {}, days: [] });
    return NextResponse.json({ ads }, { headers: CACHE });
  }

  // Boutique : vues des fiches et départs vers WhatsApp. Avant, l'écran
  // Boutique chargeait tout le tableau des statistiques (500 pages, journaux,
  // bannières…) pour n'en lire que ces deux compteurs.
  if (scope === "shop") {
    const shop = await safe(getShopStats(), { views: {}, clicks: {} });
    return NextResponse.json({ shop }, { headers: CACHE });
  }

  // Derniers évènements (onglet Journal), 200 au plus (MAX_LOG).
  if (scope === "journal") {
    const n = Math.min(200, Math.max(1, Number(sp.get("n")) || 40));
    const [recentVisits, recentPdf] = await Promise.all([safe(getRecentVisits(n), []), safe(getRecentPdfDownloads(n), [])]);
    return NextResponse.json({ recentVisits, recentPdf }, { headers: CACHE });
  }

  // Bandeau « En direct » (actualisé chaque minute).
  if (scope === "live") {
    const live = await safe(getLive(), null);
    if (!live) return NextResponse.json({ error: "Statistiques indisponibles." }, { status: 500 });
    return NextResponse.json({ live }, { headers: NO_CACHE });
  }

  // Fiche d'une page (onglet Pages).
  if (scope === "page") {
    const path = sp.get("path") || "";
    if (!PATH_RE.test(path)) return NextResponse.json({ error: "Chemin invalide." }, { status: 400 });
    try {
      const page = await getPageStats(path, range);
      return NextResponse.json({ range, page }, { headers: CACHE });
    } catch (err) {
      console.error("metrics page", err);
      return NextResponse.json({ error: "Statistiques indisponibles." }, { status: 500 });
    }
  }

  const full = scope !== "summary";
  try {
    const [metrics, totals, subscribers, topPaths, sources, searchMisses] = await Promise.all([
      safe(getRangeMetrics(range), null),
      safe(getTotals(), null),
      safe(getSubscriberHistory(30), []),
      safe(getTopPaths(full ? 500 : 12), []),
      safe(getVisitSources(20), []),
      safe(getTopSearchMisses(full ? 50 : 8), []),
    ]);
    // Sans les compteurs principaux, la page n'a rien d'utile à montrer :
    // une erreur franche (avec « Réessayer ») vaut mieux que des zéros.
    if (!metrics) return NextResponse.json({ error: "Statistiques indisponibles (base KV injoignable)." }, { status: 503 });

    const payload = { range, metrics, totals, subscribers, topPaths, sources, searchMisses };

    if (full) {
      const [breakdown, live, cities, pdfCities, pdfItems, concoursViews, searchLog, recentVisits, recentPdf] = await Promise.all([
        safe(getRangeBreakdown(range), null),
        safe(getLive(), null),
        safe(getVisitCities(30), []),
        safe(getPdfCities(30), []),
        safe(getTopPdfItems(300), []),
        safe(getTopConcoursViews(40), []),
        safe(getSearchMissLog(200), []),
        safe(getRecentVisits(40), []),
        safe(getRecentPdfDownloads(40), []),
      ]);
      Object.assign(payload, { breakdown, live, cities, pdfCities, pdfItems, concoursViews, searchLog, recentVisits, recentPdf });
    }

    return NextResponse.json(payload, { headers: CACHE });
  } catch (err) {
    console.error("metrics", err);
    return NextResponse.json({ error: "Statistiques indisponibles." }, { status: 500 });
  }
}

// Actions de la console sur les statistiques.
// { action: "dismiss-search", query } → retire un terme des « recherches sans résultat ».
export async function POST(req) {
  const body = await req.json().catch(() => null);
  if (body?.action === "dismiss-search") {
    if (typeof body.query !== "string" || !body.query.trim()) return NextResponse.json({ error: "Terme manquant." }, { status: 400 });
    try {
      const removed = await dismissSearchMiss(body.query);
      return NextResponse.json({ ok: true, removed });
    } catch (err) {
      console.error("metrics dismiss-search", err);
      return NextResponse.json({ error: "Action impossible." }, { status: 500 });
    }
  }
  return NextResponse.json({ error: "Action inconnue." }, { status: 400 });
}
