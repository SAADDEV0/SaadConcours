// Contenus qui ouvrent un onglet d'espace (lib/espaces.js, champ `contenu`) :
// calculés une fois au démarrage de `next build` / `next dev` par
// next.config.mjs, qui les inscrit dans process.env.SC_CONTENUS. Le registre
// des espaces est lu par le navigateur (chrome.js) : il ne peut pas importer
// concours.json (4 Mo) pour savoir s'il y a des sujets de masters de droit.
//
// Publier le premier contenu d'un onglet depuis la console déclenche un
// déploiement, donc un build qui ouvre l'onglet : rien à retoucher dans le
// code. Les règles doivent rester celles des pages (isDroitPublie dans
// lib/droit.js, getPublicConcours dans lib/store.js).
//
// Les espaces ENCG (cours S1 → S10, concours TAFEM) et Taalim (concours de
// l'enseignement), cachés depuis le 2026-10-17 et le 2026-10-25, ont été
// supprimés le 2026-10-29 : le site se concentre sur la FSJES (économie-
// gestion et droit) et les concours qui la suivent. Leurs anciennes adresses
// redirigent en 301 (public/_redirects).
import fs from "node:fs";
import path from "node:path";

// Espace Droit : construit en silence (2026-10-15). Tant que ce drapeau est
// à false, un build de production n'ouvre pas l'espace, même avec des modules
// publiés : aucune page /droit, aucun lien, rien dans le sitemap. `next dev`
// (aperçu) l'ouvre dès le premier module publié, pour relire les pages.
// Lancement : passer à true (BANQUE_PROMPTS, recette K5). Lancé le 2026-10-17.
export const DROIT_LANCE = true;

// Section QCM (/evaluation, concours blancs de 100 questions) : cachée le
// 2026-10-28 à la demande de Saad. À false, un build de production ne génère
// ni /evaluation ni les fiches des QCM, et rien ne les lie (header, menu, pied
// de page, accueil, recherche, sitemap) ; `next dev` les montre. Les adresses
// déjà en ligne redirigent en 302 (public/_redirects) et quiz.json n'est pas
// publié en asset (scripts/prerender-to-assets.mjs). Relancement : passer à
// true, retirer ces règles et rétablir les liens du blog (recette E1).
export const QCM_LANCE = false;

function lire(fichier) {
  try {
    return JSON.parse(fs.readFileSync(path.join(process.cwd(), "public", "data", fichier), "utf8"));
  } catch {
    return [];
  }
}

const CHAPITRE_RE = /^# CHAPITRE \d+\s*[—–-]\s*\S/m;

export function contenusPublies({ apercu = false } = {}) {
  const out = [];
  const publie = (c) => c.available && CHAPITRE_RE.test(c.content || "");
  const fsjes = new Set(lire("cours.json").filter((c) => c.available).map((c) => c.id));
  const concours = lire("concours.json");
  // Masters de droit : l'onglet de l'espace Master s'ouvre au premier sujet publié.
  if (concours.some((c) => c.niveau === "master_droit" && c.statut !== "brouillon")) out.push("concours-droit");
  // Cours de Droit : même règle (isDroitPublie et droitRenvois, lib/droit.js).
  if ((DROIT_LANCE || apercu) && lire("droit.json").some((c) => (c.renvoi ? c.available && fsjes.has(c.renvoi) : publie(c)))) out.push("droit-cours");
  // QCM d'évaluation : la section s'ouvre au premier QCM disponible.
  if ((QCM_LANCE || apercu) && lire("quiz.json").some((q) => q.available)) out.push("qcm");
  return out.join(",");
}
