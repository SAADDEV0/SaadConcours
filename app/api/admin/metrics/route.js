import { NextResponse } from "next/server";
import {
  getRangeMetrics,
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
} from "@/lib/analytics";
import { getSubscriberHistory } from "@/lib/subscribers";
import { resolveRange } from "@/lib/dateRange";

export const dynamic = "force-dynamic";

// Statistiques de la console v6. Uniquement des lectures KV (compteurs,
// classements, journaux) : aucun fichier de contenu n'est chargé ici, les
// libellés sont résolus par le navigateur. Ce qui rendait l'ancien
// /api/admin/stats lourd — charger concours, cours, quiz, news et blog pour
// étiqueter les classements — n'a plus lieu d'être côté Worker.
//
// ?preset=7d|30d|90d|12m|today  ou  ?from=AAAA-MM-JJ&to=AAAA-MM-JJ
// ?scope=summary  → seulement ce que le tableau de bord affiche
export async function GET(req) {
  const sp = req.nextUrl.searchParams;
  const range = resolveRange({ preset: sp.get("preset"), from: sp.get("from"), to: sp.get("to") });
  const full = sp.get("scope") !== "summary";

  const safe = (p, fallback) => p.catch((err) => (console.error("metrics", err), fallback));

  try {
    const [metrics, totals, subscribers, topPaths, sources, searchMisses] = await Promise.all([
      safe(getRangeMetrics(range), null),
      safe(getTotals(), null),
      safe(getSubscriberHistory(30), []),
      safe(getTopPaths(full ? 60 : 12), []),
      safe(getVisitSources(12), []),
      safe(getTopSearchMisses(full ? 30 : 8), []),
    ]);

    const payload = { range, metrics, totals, subscribers, topPaths, sources, searchMisses };

    if (full) {
      const [cities, pdfCities, pdfItems, concoursViews, searchLog, recentVisits, recentPdf, ads, shop] = await Promise.all([
        safe(getVisitCities(15), []),
        safe(getPdfCities(15), []),
        safe(getTopPdfItems(40), []),
        safe(getTopConcoursViews(40), []),
        safe(getSearchMissLog(80), []),
        safe(getRecentVisits(40), []),
        safe(getRecentPdfDownloads(40), []),
        safe(getAdStats(), { views: {}, clicks: {} }),
        safe(getShopStats(), { views: {}, clicks: {} }),
      ]);
      Object.assign(payload, { cities, pdfCities, pdfItems, concoursViews, searchLog, recentVisits, recentPdf, ads, shop });
    }

    return NextResponse.json(payload, { headers: { "Cache-Control": "private, max-age=30" } });
  } catch (err) {
    console.error("metrics", err);
    return NextResponse.json({ error: "Statistiques indisponibles." }, { status: 500 });
  }
}
