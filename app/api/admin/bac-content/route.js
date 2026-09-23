import { NextResponse } from "next/server";
import { getBacEdits, saveBacChapitre, resetBacChapitre } from "@/lib/store";
import { bacChapitreContenu } from "@/lib/bacContenu";
import { bacNiveauInfo, findBacMatiere, bacChapitreHref } from "@/lib/bacProgramme";
import { recordAudit } from "@/lib/auditLog";

export const dynamic = "force-dynamic";

const MAX_TEXTE = 200_000;
const MAX_QUESTIONS = 60;

// id = "niveau/matiere/chapitre", validé contre le programme.
function resoudre(id) {
  const [niveau, matiereSlug, chapitreSlug, ...reste] = String(id || "").split("/");
  if (reste.length || !bacNiveauInfo(niveau)) return null;
  const matiere = findBacMatiere(niveau, matiereSlug);
  const chapitre = matiere?.chapitres.find((c) => c.slug === chapitreSlug);
  if (!chapitre) return null;
  return { id: `${niveau}/${matiere.slug}/${chapitre.slug}`, niveau, matiere, chapitre };
}

function libelle(r) {
  return `${bacNiveauInfo(r.niveau).label} · ${r.matiere.court} · ${r.chapitre.titre}`;
}

function texte(v) {
  return typeof v === "string" ? v.slice(0, MAX_TEXTE) : "";
}

// QCM : { q, choix: [2 à 6 textes], bonne: index, explication }.
function nettoyerQcm(qcm) {
  if (!Array.isArray(qcm)) return { erreur: "QCM invalide" };
  const out = [];
  for (const [i, x] of qcm.slice(0, MAX_QUESTIONS).entries()) {
    const q = texte(x?.q).trim();
    const choix = Array.isArray(x?.choix) ? x.choix.map((c) => texte(c).trim()).filter(Boolean).slice(0, 6) : [];
    const bonne = Number(x?.bonne);
    if (!q) return { erreur: `Question ${i + 1} : l'énoncé est vide.` };
    if (choix.length < 2) return { erreur: `Question ${i + 1} : il faut au moins 2 propositions.` };
    if (new Set(choix).size !== choix.length) return { erreur: `Question ${i + 1} : deux propositions sont identiques.` };
    if (!Number.isInteger(bonne) || bonne < 0 || bonne >= choix.length) return { erreur: `Question ${i + 1} : choisissez la bonne réponse.` };
    out.push({ q, choix, bonne, explication: texte(x?.explication).trim() });
  }
  return { qcm: out };
}

export async function GET(req) {
  const r = resoudre(new URL(req.url).searchParams.get("id"));
  if (!r) return NextResponse.json({ error: "Chapitre introuvable" }, { status: 404 });
  const edits = await getBacEdits();
  const edit = edits.find((e) => e.id === r.id) || null;
  const defaut = bacChapitreContenu(r.niveau, r.matiere.slug, r.chapitre.slug);
  return NextResponse.json(
    {
      id: r.id,
      niveau: bacNiveauInfo(r.niveau).label,
      matiere: r.matiere.nom,
      lang: r.matiere.lang || "fr",
      chapitre: { numero: r.chapitre.numero, titre: r.chapitre.titre, semestre: r.chapitre.semestre },
      href: bacChapitreHref(r.matiere, r.chapitre),
      defaut: defaut || { cours: "", exercices: "", resume: "", qcm: [] },
      edit,
    },
    { headers: { "Cache-Control": "private, no-store" } }
  );
}

export async function PUT(req) {
  const body = await req.json().catch(() => null);
  const r = resoudre(body?.id);
  if (!r) return NextResponse.json({ error: "Chapitre introuvable" }, { status: 404 });
  const { qcm, erreur } = nettoyerQcm(body.qcm || []);
  if (erreur) return NextResponse.json({ error: erreur }, { status: 400 });
  const contenu = { cours: texte(body.cours), exercices: texte(body.exercices), resume: texte(body.resume), qcm };
  try {
    const saved = await saveBacChapitre(r.id, contenu);
    recordAudit({ action: "update", resource: "bac", id: r.id, label: libelle(r) });
    return NextResponse.json(saved);
  } catch (err) {
    console.error("bac-content PUT", err);
    return NextResponse.json({ error: "Enregistrement impossible" }, { status: 500 });
  }
}

// Supprime la modification : le chapitre revient à son contenu d'origine.
export async function DELETE(req) {
  const r = resoudre(new URL(req.url).searchParams.get("id"));
  if (!r) return NextResponse.json({ error: "Chapitre introuvable" }, { status: 404 });
  try {
    const ok = await resetBacChapitre(r.id);
    if (ok) recordAudit({ action: "delete", resource: "bac", id: r.id, label: libelle(r), detail: "Retour au contenu d'origine" });
    return NextResponse.json({ ok });
  } catch (err) {
    console.error("bac-content DELETE", err);
    return NextResponse.json({ error: "Opération impossible" }, { status: 500 });
  }
}
