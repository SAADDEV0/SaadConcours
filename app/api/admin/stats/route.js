import { NextResponse } from "next/server";
import { getStats } from "@/lib/analytics";
import { getAllConcours, getAllCours, getAllQuiz, getAllNews, getCorrigeIds } from "@/lib/store";

// Nothing in this route's own code touches request-specific data (no
// cookies/headers read, no uncached fetch) now that the abacus call is
// gone, so Next would otherwise statically optimize it — freezing the
// stats at build time. Force it dynamic so every request re-reads KV/GitHub.
export const dynamic = "force-dynamic";

// Write access to the underlying resources is gated elsewhere; this route
// only reads, but still sits behind the admin cookie (see middleware.js)
// since it exposes usage numbers not meant to be public.
export async function GET() {
  const [stats, concours, cours, quiz, news, corrigeIds] = await Promise.all([
    getStats(),
    getAllConcours(),
    getAllCours(),
    getAllQuiz(),
    getAllNews(),
    getCorrigeIds(),
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

  return NextResponse.json({
    ...stats,
    topConcours,
    totalVisits: stats.visitsTotal,
    recentConcours,
    concoursSansCorrige,
    newsExpiringSoon,
    counts: {
      concours: concours.length,
      cours: cours.length,
      quiz: quiz.length,
      news: news.length,
      concoursAvecCorrige: concours.filter(hasCorrige).length,
      newsOuvertes: news.filter((n) => !n.cloture).length,
    },
  });
}
