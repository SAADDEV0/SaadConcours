// Publie le HTML prérendu comme ASSETS STATIQUES, pour que les pages
// publiques ne passent plus jamais par le Worker.
//
// POURQUOI
//   Sur OpenNext, une page prérendue n'est pas servie comme un fichier : elle
//   est relue depuis le cache incrémental PAR LE WORKER. Chaque page vue est
//   donc une invocation. Vérifié en production : "/" répondait avec
//   "x-opennext: 1".
//
//   Or le plan gratuit plafonne à 10 ms de CPU par invocation, et démarrer un
//   isolate froid coûte 33 ms rien qu'à évaluer le bundle (chiffre donné par
//   wrangler au déploiement : "Worker Startup Time: 33 ms"). Toute requête qui
//   tombe sur un isolate froid meurt donc en Error 1102, avant même d'exécuter
//   la moindre ligne applicative. Mesuré sur les pages publiques : 18 % des
//   requêtes en erreur.
//
//   Aucun réglage ne remonte ces 10 ms sans passer au plan payant. En
//   revanche, un fichier servi depuis les assets ne démarre aucun isolate : il
//   part du cache de Cloudflare, gratuit, illimité, et structurellement
//   incapable de rendre une 1102. La seule façon gratuite de ne plus jamais
//   voir cette erreur sur le site public est donc de ne plus y invoquer le
//   Worker du tout.
//
// POURQUOI C'EST SÛR ICI, ET PAS EN GÉNÉRAL
//   Ce site n'utilise pas l'ISR : les 459 routes prérendues sont toutes en
//   "initialRevalidateSeconds: false". Elles ne changent qu'au rebuild — ce
//   qui est déjà le modèle de fraîcheur du projet, le cache Workers étant en
//   lecture seule (voir open-next.config.ts). Copier ce HTML dans les assets
//   ne fige donc rien qui ne l'était déjà.
//
//   Le script REFUSE toute route revalidable : si quelqu'un ajoute un jour un
//   revalidate, elle reste servie par le Worker plutôt que d'être gelée en
//   douce dans les assets.
//
// SÉCURITÉ : LA CONSOLE
//   Les assets sont servis AVANT le Worker. Depuis le 2026-11-07, les pages
//   /admin sont prérendues elles aussi (coquilles client, aucune donnée : tout
//   passe par /api/admin/*, protégé) et publiées ici avec leurs charges RSC,
//   pour que la console ne démarre plus le Worker Next.js de 19 Mo. Elles ne
//   sont pas publiques pour autant : `run_worker_first` (wrangler.jsonc) fait
//   passer ces chemins par le Worker d'entrée (worker/index.js), qui vérifie
//   la session avant de servir l'asset. Le script relit wrangler.jsonc et
//   échoue si un seul fichier publié sous /admin n'est plus couvert par ces
//   motifs. Une route /api prérendue reste refusée.

// LE SITEMAP, AVEC UN GARDE-FOU
//   next build produit aussi le corps des route handlers (sitemap.xml.body,
//   manifest.webmanifest.body, opengraph-image.body...). Le 2026-09-21, le
//   sitemap.xml.body du build ne contenait que 8 <loc> : les données n'étaient
//   pas lues au build, et le sitemap restait donc servi par le Worker, qui le
//   construisait avec les vraies données.
//
//   Ce n'est plus le cas : toutes les fiches (concours, cours, blog, Bac) sont
//   prérendues au build à partir des données, et le sitemap du build les liste
//   toutes (651 <loc> le 2026-09-26). Servi par le Worker, il coûtait 1,8 s et
//   pouvait rendre une Error 1102 à Googlebot sur un isolate froid. Il est donc
//   publié en asset — mais seulement s'il couvre au moins 90 % des pages
//   publiées ci-dessous : un sitemap réduit aux routes statiques (le cas de
//   2026-09-21) fait échouer le déploiement au lieu de remplacer en silence
//   des centaines d'URL par huit, avec un code 200.
//
//   Les images (opengraph-image, icon, apple-icon) restent écartées : leurs
//   routes n'ont pas d'extension de fichier, donc servies en asset elles
//   perdraient leur Content-Type image/png et les crawlers sociaux les
//   rejetteraient.

import { readFile, writeFile, readdir, rm, mkdir, copyFile, access, cp } from "node:fs/promises";
import { dirname, join, relative, sep } from "node:path";

const APP_DIR = ".next/server/app";
const ASSETS_DIR = ".open-next/assets";
const MANIFEST = ".next/prerender-manifest.json";

// Jamais en statique, quoi qu'il arrive.
const NEVER_STATIC = [/^\/api(\/|$)/];
// Publiées, mais derrière la vérification de session du Worker d'entrée.
const GATED = /^\/admin(\/|$)/;

const exists = async (p) => access(p).then(() => true, () => false);

// wrangler.jsonc est du JSON avec commentaires ; les chaînes contiennent des
// « /* » ("/admin/*"), d'où un vrai parcours plutôt qu'une regex.
function parseJsonc(text) {
  let out = "";
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (c === '"') {
      let j = i + 1;
      while (j < text.length && text[j] !== '"') j += text[j] === "\\" ? 2 : 1;
      out += text.slice(i, j + 1);
      i = j;
    } else if (c === "/" && text[i + 1] === "/") {
      while (i < text.length && text[i] !== "\n") i++;
      out += "\n";
    } else if (c === "/" && text[i + 1] === "*") {
      i = text.indexOf("*/", i + 2) + 1;
    } else out += c;
  }
  return JSON.parse(out.replace(/,(\s*[}\]])/g, "$1"));
}

const wrangler = parseJsonc(await readFile("wrangler.jsonc", "utf8"));
const workerFirst = (wrangler.assets?.run_worker_first || []).map(
  (p) => new RegExp("^" + p.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*") + "$"),
);
const gatedFiles = [];
// Chemin d'URL d'un fichier publié, tel que Cloudflare le servirait.
const urlPathsFor = (rel) => {
  const p = "/" + rel.split(sep).join("/");
  return p.endsWith(".html") ? [p, p.slice(0, -5)] : [p];
};

// "/" -> "index.html" ; "/concours" -> "concours.html".
// Cloudflare sert /foo.html pour /foo et /index.html pour / (html_handling
// "auto-trailing-slash", le défaut), donc les chemins se correspondent tels
// quels.
const htmlPathFor = (route) => (route === "/" ? "index.html" : `${route.replace(/^\//, "")}.html`);

const manifest = JSON.parse(await readFile(MANIFEST, "utf8"));
const routes = Object.entries(manifest.routes ?? {});

let copied = 0;
const skippedRevalidate = [];
const missing = [];

for (const [route, meta] of routes) {
  if (NEVER_STATIC.some((re) => re.test(route))) {
    throw new Error(
      `Route d'API prérendue : ${route}\n` +
        `Les assets court-circuitent le Worker, la copier la rendrait publique.`,
    );
  }

  // Console : HTML + charge RSC + segments de préchargement (navigation
  // côté client), servis par worker/index.js après vérification de session.
  if (GATED.test(route)) {
    if (meta.initialRevalidateSeconds) {
      throw new Error(`Page de console revalidable : ${route}. Elle doit être statique (voir app/admin/layout.js).`);
    }
    const base = route.replace(/^\//, "");
    for (const rel of [`${base}.html`, `${base}.rsc`, `${base}.segments`]) {
      const src = join(APP_DIR, rel);
      if (!(await exists(src))) {
        if (rel.endsWith(".html")) throw new Error(`Page de console sans HTML prérendu : ${src}`);
        continue;
      }
      const dest = join(ASSETS_DIR, rel);
      await mkdir(dirname(dest), { recursive: true });
      await cp(src, dest, { recursive: true });
    }
    gatedFiles.push(route);
    continue;
  }

  // false | null | 0 => pas d'ISR. Tout le reste doit rester dynamique.
  if (meta.initialRevalidateSeconds) {
    skippedRevalidate.push(route);
    continue;
  }

  const rel = htmlPathFor(route);
  const src = join(APP_DIR, rel);
  // Toutes les routes du manifeste ne sont pas du HTML (ex.
  // /manifest.webmanifest, les routes d'image) — on ne copie que ce qui existe
  // réellement en .html.
  if (!(await exists(src))) {
    missing.push(route);
    continue;
  }

  const dest = join(ASSETS_DIR, rel);
  await mkdir(dirname(dest), { recursive: true });
  await copyFile(src, dest);
  copied += 1;
}

console.log(`  ${copied} pages prérendues publiées en assets statiques`);

// Chaque fichier publié sous /admin doit passer par le Worker d'entrée. On
// parcourt ce qui est réellement dans les assets (pas seulement ce que ce
// script vient d'y mettre) : un fichier admin venu d'ailleurs, de public/
// par exemple, serait public lui aussi.
async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true }).catch(() => [])) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else yield p;
  }
}
const exposed = [];
let gatedCount = 0;
for (const top of ["admin", "admin.html", "admin.rsc", "admin.segments"]) {
  const start = join(ASSETS_DIR, top);
  if (!(await exists(start))) continue;
  const files = top.includes(".") && !top.endsWith(".segments") ? [start] : [];
  if (!files.length) for await (const f of walk(start)) files.push(f);
  for (const f of files) {
    gatedCount += 1;
    for (const urlPath of urlPathsFor(relative(ASSETS_DIR, f))) {
      if (!workerFirst.some((re) => re.test(urlPath))) exposed.push(urlPath);
    }
  }
}
if (exposed.length) {
  throw new Error(
    `Fichiers de console servis sans vérification de session : ${exposed.slice(0, 5).join(", ")}` +
      (exposed.length > 5 ? ` (+${exposed.length - 5})` : "") +
      `\nAjouter leur chemin à assets.run_worker_first dans wrangler.jsonc.`,
  );
}
if (gatedFiles.length) {
  console.log(`  ${gatedFiles.length} pages de console publiées derrière la session (${gatedCount} fichiers, run_worker_first)`);
}
if (skippedRevalidate.length) {
  console.log(`  ${skippedRevalidate.length} laissées au Worker (revalidate défini) :`);
  for (const r of skippedRevalidate.slice(0, 10)) console.log(`      ${r}`);
}
if (missing.length) {
  console.log(`  ${missing.length} routes du manifeste sans .html (normal : images, webmanifest)`);
}

// Un build qui ne publie rien signifie que le chemin de sortie de Next a
// changé : mieux vaut casser ici que déployer un site qui repasse
// silencieusement par le Worker sur chaque page.
if (copied === 0) {
  throw new Error(
    `Aucune page copiée depuis ${APP_DIR}. Le format de sortie de Next a probablement changé — ` +
      `sans ce transfert, chaque page vue redevient une invocation de Worker et les 1102 reviennent.`,
  );
}

// Sitemap (voir « LE SITEMAP, AVEC UN GARDE-FOU » en tête de fichier). Les
// pages publiées incluent quelques pages absentes du sitemap à dessein
// (boutique vide en noindex, redirections) : d'où la marge de 10 %.
const sitemapSrc = join(APP_DIR, "sitemap.xml.body");
const sitemap = await readFile(sitemapSrc, "utf8").catch(() => null);
if (sitemap === null) {
  throw new Error(
    `Pas de ${sitemapSrc} : app/sitemap.js n'a pas été prérendu. Vérifier qu'il exporte encore ` +
      `dynamic = "force-static" et revalidate = false (sans eux, la route est dynamique dès que GITHUB_TOKEN est défini).`,
  );
}
const nbUrls = (sitemap.match(/<loc>/g) || []).length;
if (nbUrls < copied * 0.9) {
  throw new Error(
    `Sitemap du build incomplet : ${nbUrls} URL pour ${copied} pages publiées (${sitemapSrc}). ` +
      `Les données n'ont sans doute pas été lues au build — le publier remplacerait le sitemap par une version tronquée.`,
  );
}
await copyFile(sitemapSrc, join(ASSETS_DIR, "sitemap.xml"));
console.log(`  sitemap.xml publié en asset statique (${nbUrls} URL)`);

// DONNÉES PUBLIQUES : CE QUE LE SITE LIT, RIEN DE PLUS (2026-10-28)
//   OpenNext copie public/ tel quel dans les assets, donc public/data/ y
//   arrivait entier : le champ interne `source` des sujets (le site d'origine,
//   « jamais publié » depuis le 2026-09-26), les brouillons, les sujets des
//   espaces cachés, les fiches privées des annonceurs (contact, note), les
//   news copiées d'almaster-maroc.com et les copies .md des énoncés, que rien
//   ne lit sur le site. Les fichiers du dépôt ne changent pas (la console et
//   le build lisent le dépôt) : seule la copie déployée est réduite, ce qui
//   ne fait que retirer des fichiers et des octets des assets.
//   Ce que le navigateur lit encore : concours.json (texte des PDF de la
//   liste), corriges/<id>.md (corrigés hors concours.json), settings.json
//   (repli des PDF et du pied de page), cours/droit/blog.json.
const DATA_DIR = join(ASSETS_DIR, "data");
const { QCM_LANCE } = await import("../lib/contenusPublies.mjs");
const { publicAd } = await import("../app/_shared/partnerAds.js");

// Même règle que isConcoursPublic (lib/store.js), sans le registre des espaces.
const concoursPublic = (c) => c?.statut !== "brouillon";

const concoursPath = join(DATA_DIR, "concours.json");
const tousConcours = JSON.parse(await readFile(concoursPath, "utf8"));
const publics = tousConcours.filter(concoursPublic).map(({ source: _source, ...c }) => c);
await writeFile(concoursPath, JSON.stringify(publics));
const idsPublics = new Set(publics.map((c) => c.id));

// Corrigés : seulement ceux d'un sujet publié.
let corrigesRetires = 0;
for (const f of await readdir(join(DATA_DIR, "corriges")).catch(() => [])) {
  if (!idsPublics.has(f.replace(/\.md$/, ""))) {
    await rm(join(DATA_DIR, "corriges", f));
    corrigesRetires += 1;
  }
}

const settingsPath = join(DATA_DIR, "settings.json");
const settings = JSON.parse(await readFile(settingsPath, "utf8"));
if (Array.isArray(settings.partnerAds)) settings.partnerAds = settings.partnerAds.map(publicAd);
await writeFile(settingsPath, JSON.stringify(settings));

await rm(join(DATA_DIR, "extraits"), { recursive: true, force: true });
await rm(join(DATA_DIR, "news.json"), { force: true });
if (!QCM_LANCE) await rm(join(DATA_DIR, "quiz.json"), { force: true });

console.log(
  `  data/ : ${publics.length}/${tousConcours.length} sujets publiés sans « source », ` +
    `${corrigesRetires} corrigés hors site retirés, extraits/ et news.json retirés` +
    (QCM_LANCE ? "" : ", quiz.json retiré (section QCM cachée)"),
);
