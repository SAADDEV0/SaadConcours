// Examens nationaux du 2ème Bac SEG : catalogue des sujets et corrigés
// (PDF servis depuis public/bac/nationaux/, donc en assets statiques
// Cloudflare, jamais par le Worker). Le catalogue lib/bacNationaux.json est
// généré à partir des sources citées dans chaque document (champ src).
//
// Les sujets SE et SGC sont DIFFÉRENTS pour l'économie générale, l'EOAE et la
// comptabilité : ils ont chacun leur série (filiere "se" / "sgc"). Maths,
// philosophie et anglais ont un sujet commun aux deux filières (filiere
// "commun") : un seul exemplaire, affiché pour SE et SGC.

import CATALOGUE from "./bacNationaux.json";

export const NATIONAL_FILIERES = {
  se: { code: "se", court: "SE", label: "Sciences Économiques" },
  sgc: { code: "sgc", court: "SGC", label: "Sciences de Gestion Comptable" },
  commun: { code: "commun", court: "SE & SGC", label: "Sciences Économiques et Sciences de Gestion Comptable" },
};

const COMMUN_NOTE = {
  mathematiques: "Sujet commun aux filières Sciences Économiques et Sciences de Gestion Comptable.",
  philosophie: "Sujet commun aux filières scientifiques et techniques, dont Sciences Économiques et Sciences de Gestion Comptable.",
  anglais: "Sujet commun aux filières scientifiques et techniques, dont Sciences Économiques et Sciences de Gestion Comptable.",
};

export const NATIONAL_SOURCES = {
  alloschool: { nom: "AlloSchool", url: "https://www.alloschool.com" },
  profelhamdaoui: { nom: "Prof El Hamdaoui", url: "https://profelhamdaoui.com" },
  fayssalmaths: { nom: "Fayssal Maths", url: "https://www.fayssalmaths.com" },
};

export const SESSIONS = { normale: "Session normale", rattrapage: "Session de rattrapage" };

// "se-2024-normale" ; sujet commun : "2024-normale".
export function bacNationalId(e) {
  return e.filiere === "commun" ? `${e.annee}-${e.session}` : `${e.filiere}-${e.annee}-${e.session}`;
}

export function bacNationauxMatiere(niveau, matiere) {
  if (niveau !== "2bac") return [];
  return CATALOGUE.filter((e) => e.matiere === matiere);
}

// Séries affichées sur la page matière : une par filière, dans l'ordre SE, SGC
// (ou la seule série commune), chacune avec ses années décroissantes.
export function bacNationauxSeries(niveau, matiere) {
  const exams = bacNationauxMatiere(niveau, matiere);
  return ["se", "sgc", "commun"]
    .map((f) => {
      const liste = exams.filter((e) => e.filiere === f);
      if (!liste.length) return null;
      const annees = [...new Set(liste.map((e) => e.annee))].sort((a, b) => b - a);
      return {
        filiere: NATIONAL_FILIERES[f],
        note: f === "commun" ? COMMUN_NOTE[matiere] || null : null,
        annees: annees.map((annee) => ({
          annee,
          normale: liste.find((e) => e.annee === annee && e.session === "normale") || null,
          rattrapage: liste.find((e) => e.annee === annee && e.session === "rattrapage") || null,
        })),
      };
    })
    .filter(Boolean);
}

export function findBacNational(niveau, matiere, id) {
  return bacNationauxMatiere(niveau, matiere).find((e) => bacNationalId(e) === id) || null;
}

export function bacNationalNote(e) {
  return e.filiere === "commun" ? COMMUN_NOTE[e.matiere] || null : null;
}

export function bacNationalHref(m, e) {
  return `/bac/${m.niveau}/${m.slug}/examens/${bacNationalId(e)}`;
}

export function bacNationalPdf(doc) {
  return `/${doc.file}`;
}

export function bacNationalDocLabel(doc) {
  const base = doc.type === "sujet" ? "Sujet" : "Corrigé";
  const extra = [doc.part, doc.langue === "fr" ? "version française" : doc.langue === "ar" ? "version arabe" : null].filter(Boolean);
  if (doc.part === "Sujet et corrigé") return "Sujet et corrigé";
  return extra.length ? `${base} (${extra.join(", ")})` : base;
}

// Ce qui est réellement en ligne pour un examen (certains n'ont que le sujet,
// quelques-uns que le corrigé, et les maths 2025 un seul PDF sujet + corrigé).
export function bacNationalContenu(e) {
  const corrige = e.docs.some((d) => d.type === "corrige");
  const sujet = e.docs.some((d) => d.type === "sujet" || d.part === "Sujet et corrigé");
  const label = sujet && corrige ? "Sujet et corrigé" : sujet ? "Sujet (corrigé non disponible)" : "Corrigé (sujet non disponible)";
  return { sujet, corrige, label };
}

export function bacNationalTitre(m, e) {
  return `Examen national ${m.court} 2Bac ${NATIONAL_FILIERES[e.filiere].court} ${e.annee} — ${SESSIONS[e.session].toLowerCase()}`;
}

export function bacNationauxToutes() {
  return CATALOGUE;
}
