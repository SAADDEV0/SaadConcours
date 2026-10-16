// Contenus qui ouvrent un onglet d'espace (lib/espaces.js, champ `contenu`) :
// calculés une fois au démarrage de `next build` / `next dev` par
// next.config.mjs, qui les inscrit dans process.env.SC_CONTENUS. Le registre
// des espaces est lu par le navigateur (chrome.js) : il ne peut pas importer
// concours.json (4 Mo) pour savoir s'il y a des sujets post-bac.
//
// Publier le premier cours ENCG ou le premier sujet TAFEM depuis la console
// déclenche un déploiement, donc un build qui ouvre l'onglet : rien à
// retoucher dans le code. Les règles doivent rester celles des pages
// (isEncgPublie dans lib/encg.js, getPublicConcours dans lib/store.js).
import fs from "node:fs";
import path from "node:path";

// Espace Droit : construit en silence (2026-10-15). Tant que ce drapeau est
// à false, un build de production n'ouvre pas l'espace, même avec des modules
// publiés : aucune page /droit, aucun lien, rien dans le sitemap. `next dev`
// (aperçu) l'ouvre dès le premier module publié, pour relire les pages.
// Lancement : passer à true (BANQUE_PROMPTS, recette K5).
export const DROIT_LANCE = false;

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
  // Cours ENCG : un module rédigé, ou un renvoi vers un cours FSJES publié
  // (isEncgPublie et encgRenvois dans lib/encg.js).
  const fsjes = new Set(lire("cours.json").filter((c) => c.available).map((c) => c.id));
  if (lire("encg.json").some((c) => (c.renvoi ? c.available && fsjes.has(c.renvoi) : publie(c)))) out.push("encg-cours");
  if (lire("concours.json").some((c) => c.niveau === "post_bac" && c.statut !== "brouillon")) out.push("concours-post-bac");
  // Cours de Droit : même règle (isDroitPublie et droitRenvois, lib/droit.js).
  if ((DROIT_LANCE || apercu) && lire("droit.json").some((c) => (c.renvoi ? c.available && fsjes.has(c.renvoi) : publie(c)))) out.push("droit-cours");
  return out.join(",");
}
