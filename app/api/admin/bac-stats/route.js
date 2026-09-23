import { NextResponse } from "next/server";
import { getTopPaths } from "@/lib/analytics";
import { BAC_NIVEAUX, BAC_GROUPES, bacMatieres, bacMatiereHref, bacChapitreHref, parseBacPath } from "@/lib/bacProgramme";
import { getBacMatiereEffectif, getBacEditsIndex, bacContenuId } from "@/lib/bacContenuEffectif";

export const dynamic = "force-dynamic";

// Le compteur analytics:views:path contient toutes les URL du site ; on en lit
// une large tranche en une seule requête et on ne garde que /bac/….
const PATH_SCAN = 5000;

export async function GET() {
  try {
    const paths = await getTopPaths(PATH_SCAN).catch(() => []);
    const vuesParPath = new Map();
    for (const { member, score } of paths) {
      if (typeof member === "string" && (member === "/bac" || member.startsWith("/bac/"))) vuesParPath.set(member, score);
    }

    let vuesTotal = 0;
    let vuesAccueil = 0;
    const vuesParNiveau = {};
    const vuesParMatiere = {};
    const vuesParChapitre = {};
    for (const [path, vues] of vuesParPath) {
      vuesTotal += vues;
      const p = parseBacPath(path);
      if (!p?.niveau) {
        vuesAccueil += vues;
        continue;
      }
      vuesParNiveau[p.niveau.code] = (vuesParNiveau[p.niveau.code] || 0) + vues;
      if (!p.matiere) continue;
      const km = `${p.niveau.code}/${p.matiere.slug}`;
      vuesParMatiere[km] = (vuesParMatiere[km] || 0) + vues;
      if (p.chapitre) vuesParChapitre[`${km}/${p.chapitre.slug}`] = vues;
    }

    let chapitresTotal = 0;
    let chapitresRediges = 0;
    const editsIndex = await getBacEditsIndex();
    const contenus = {};
    for (const n of BAC_NIVEAUX) {
      for (const m of bacMatieres(n.code)) contenus[`${n.code}/${m.slug}`] = await getBacMatiereEffectif(n.code, m.slug);
    }
    const niveaux = BAC_NIVEAUX.map((n) => {
      const matieres = bacMatieres(n.code).map((m) => {
        const contenu = contenus[`${n.code}/${m.slug}`];
        const km = `${n.code}/${m.slug}`;
        const chapitres = m.chapitres.map((c) => {
          const ch = contenu[c.slug];
          return {
            numero: c.numero,
            titre: c.titre,
            slug: c.slug,
            semestre: c.semestre,
            href: bacChapitreHref(m, c),
            id: bacContenuId(n.code, m.slug, c.slug),
            modifieLe: editsIndex.get(bacContenuId(n.code, m.slug, c.slug)) || null,
            redige: Boolean(ch),
            qcm: ch?.qcm?.length || 0,
            vues: vuesParChapitre[`${km}/${c.slug}`] || 0,
          };
        });
        const rediges = chapitres.filter((c) => c.redige).length;
        chapitresTotal += chapitres.length;
        chapitresRediges += rediges;
        return {
          slug: m.slug,
          nom: m.nom,
          court: m.court,
          icon: m.icon,
          lang: m.lang || "fr",
          groupe: BAC_GROUPES.find((g) => g.code === m.groupe)?.label || m.groupe,
          examen: m.examen?.badge || null,
          href: bacMatiereHref(m),
          chapitresTotal: chapitres.length,
          chapitresRediges: rediges,
          qcmTotal: chapitres.reduce((s, c) => s + c.qcm, 0),
          vues: vuesParMatiere[km] || 0,
          chapitres,
        };
      });
      return {
        code: n.code,
        label: n.label,
        href: `/bac/${n.code}`,
        filieres: n.filieres.map((f) => f.label),
        vues: vuesParNiveau[n.code] || 0,
        chapitresTotal: matieres.reduce((s, m) => s + m.chapitresTotal, 0),
        chapitresRediges: matieres.reduce((s, m) => s + m.chapitresRediges, 0),
        matieres,
      };
    });

    const topChapitres = niveaux
      .flatMap((n) => n.matieres.flatMap((m) => m.chapitres.map((c) => ({ label: `${n.label} · ${m.court} · ${c.titre}`, href: c.href, vues: c.vues }))))
      .filter((c) => c.vues > 0)
      .sort((a, b) => b.vues - a.vues)
      .slice(0, 15);

    return NextResponse.json(
      {
        resume: {
          vuesTotal,
          vuesAccueil,
          chapitresTotal,
          chapitresRediges,
          matieres: niveaux.reduce((s, n) => s + n.matieres.length, 0),
          niveaux: niveaux.length,
        },
        niveaux,
        topChapitres,
      },
      { headers: { "Cache-Control": "private, no-store" } }
    );
  } catch (err) {
    console.error("bac-stats", err);
    return NextResponse.json({ error: "Statistiques Bac indisponibles" }, { status: 500 });
  }
}
