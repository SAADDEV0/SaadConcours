import { NextResponse } from "next/server";
import { getStats } from "@/lib/analytics";
import { getAllConcours, getAllCours, getAllQuiz, getAllNews } from "@/lib/store";

export const dynamic = "force-dynamic";

function csvEscape(v) {
  const s = String(v ?? "");
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

function toCsv(rows) {
  return rows.map((row) => row.map(csvEscape).join(",")).join("\n") + "\n";
}

// Raw analytics export for the admin's own records — CSV opens directly in
// Excel/Sheets, JSON for anything programmatic. Admin-only (see
// middleware.js): this is the same underlying numbers as the dashboard,
// just unaggregated and downloadable.
export async function GET(req) {
  const format = req.nextUrl.searchParams.get("format") === "csv" ? "csv" : "json";

  const [stats, concours, cours, quiz, news] = await Promise.all([
    getStats(),
    getAllConcours(),
    getAllCours(),
    getAllQuiz(),
    getAllNews(),
  ]);

  const concoursById = Object.fromEntries(concours.map((c) => [c.id, c]));
  const generatedAt = new Date().toISOString();

  const payload = {
    generatedAt,
    pdf: {
      total: stats.pdfTotal,
      today: stats.pdfToday,
      byKind: stats.pdfByKind,
      byItem: stats.pdfByItem.map(({ member, score }) => ({ item: member, downloads: score })),
      last7Days: stats.pdfLast7Days.map(([date, count]) => ({ date, count })),
    },
    visits: {
      total: stats.visitsTotal,
      today: stats.visitsToday,
    },
    topConcours: stats.topConcours.map(({ member, score }) => ({
      id: member,
      views: score,
      etablissement: concoursById[member]?.etablissement || null,
      ville: concoursById[member]?.ville || null,
      annee: concoursById[member]?.annee || null,
    })),
    counts: {
      concours: concours.length,
      cours: cours.length,
      quiz: quiz.length,
      news: news.length,
      concoursAvecCorrige: concours.filter((c) => c.corrige_md).length,
      newsOuvertes: news.filter((n) => !n.cloture).length,
    },
  };

  if (format === "json") {
    return new NextResponse(JSON.stringify(payload, null, 2), {
      headers: {
        "Content-Type": "application/json",
        "Content-Disposition": `attachment; filename="saadconcours-analytics-${generatedAt.slice(0, 10)}.json"`,
      },
    });
  }

  const rows = [["section", "key", "value"]];
  rows.push(["pdf", "total", payload.pdf.total]);
  rows.push(["pdf", "today", payload.pdf.today]);
  for (const [kind, n] of Object.entries(payload.pdf.byKind)) rows.push(["pdf_by_kind", kind, n]);
  for (const { date, count } of payload.pdf.last7Days) rows.push(["pdf_last_7_days", date, count]);
  for (const { item, downloads } of payload.pdf.byItem) rows.push(["pdf_by_item", item, downloads]);
  rows.push(["visits", "total", payload.visits.total]);
  rows.push(["visits", "today", payload.visits.today]);
  for (const [key, n] of Object.entries(payload.counts)) rows.push(["counts", key, n]);
  rows.push([]);
  rows.push(["rank", "concours_id", "etablissement", "ville", "annee", "views"]);
  payload.topConcours.forEach((c, i) => rows.push([i + 1, c.id, c.etablissement, c.ville, c.annee, c.views]));

  return new NextResponse(toCsv(rows), {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="saadconcours-analytics-${generatedAt.slice(0, 10)}.csv"`,
    },
  });
}
