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

function lire(fichier) {
  try {
    return JSON.parse(fs.readFileSync(path.join(process.cwd(), "public", "data", fichier), "utf8"));
  } catch {
    return [];
  }
}

const CHAPITRE_RE = /^# CHAPITRE \d+\s*[—–-]\s*\S/m;

export function contenusPublies() {
  const out = [];
  if (lire("encg.json").some((c) => c.available && CHAPITRE_RE.test(c.content || ""))) out.push("encg-cours");
  if (lire("concours.json").some((c) => c.niveau === "post_bac" && c.statut !== "brouillon")) out.push("concours-post-bac");
  return out.join(",");
}
