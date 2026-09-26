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
// SÉCURITÉ
//   Les assets sont servis AVANT le Worker, donc avant middleware.js. Un HTML
//   d'admin copié ici serait accessible sans authentification. Aujourd'hui
//   aucune page /admin n'est prérendue (elles sont rendues côté client), mais
//   on ne s'en remet pas à ça : /admin et /api sont exclus explicitement, et
//   le script échoue si une telle route se présente.

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

import { readFile, mkdir, copyFile, access } from "node:fs/promises";
import { dirname, join } from "node:path";

const APP_DIR = ".next/server/app";
const ASSETS_DIR = ".open-next/assets";
const MANIFEST = ".next/prerender-manifest.json";

// Servies avant le middleware : jamais en statique, quoi qu'il arrive.
const NEVER_STATIC = [/^\/admin(\/|$)/, /^\/api(\/|$)/];

const exists = async (p) => access(p).then(() => true, () => false);

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
      `Route protégée prérendue en HTML : ${route}\n` +
        `Les assets court-circuitent middleware.js, la copier la rendrait publique.`,
    );
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
