import { NextResponse } from "next/server";
import { getStats } from "@/lib/analytics";
import { getAllConcours, getAllCours, getAllQuiz, getAllNews } from "@/lib/store";

// Best-effort — the public visitor counter is a third-party service with no
// SLA, so a failed fetch here shouldn't break the rest of the dashboard.
async function getTotalVisits() {
  try {
    const res = await fetch("https://abacus.jasoncameron.dev/get/saadconcours-maroc/visits", { cache: "no-store" });
    if (!res.ok) return null;
    const data = await res.json();
    return typeof data.value === "number" ? data.value : null;
  } catch {
    return null;
  }
}

// Write access to the underlying resources is gated elsewhere; this route
// only reads, but still sits behind the admin cookie (see middleware.js)
// since it exposes usage numbers not meant to be public.
export async function GET() {
  const [stats, concours, cours, quiz, news, totalVisits] = await Promise.all([
    getStats(),
    getAllConcours(),
    getAllCours(),
    getAllQuiz(),
    getAllNews(),
    getTotalVisits(),
  ]);

  const concoursById = Object.fromEntries(concours.map((c) => [c.id, c]));
  const topConcours = stats.topConcours.map(({ member, score }) => ({
    id: member,
    views: score,
    label: concoursById[member]
      ? `${concoursById[member].etablissement} — ${concoursById[member].ville} (${concoursById[member].annee})`
      : member,
  }));

  return NextResponse.json({
    ...stats,
    topConcours,
    totalVisits,
    counts: {
      concours: concours.length,
      cours: cours.length,
      quiz: quiz.length,
      news: news.length,
      concoursAvecCorrige: concours.filter((c) => c.corrige_md).length,
      newsOuvertes: news.filter((n) => !n.cloture).length,
    },
  });
}
