// Signale aux moteurs de recherche les pages ajoutées, modifiées ou retirées
// par un déploiement, via IndexNow (Bing, Yandex, Seznam, Naver, Yep).
//
// POURQUOI
//   ChatGPT Search, Copilot et DuckDuckGo répondent à partir de l'index de
//   Bing. Le 2026-10-02, Bing ne montrait qu'environ 55 pages du site pour
//   675 URL dans le sitemap : il le relit à son rythme et découvre les pages
//   au compte-gouttes. IndexNow le prévient dès le déploiement.
//
// QUELLES PAGES
//   Chaque page du sitemap est résumée en une empreinte : description, JSON-LD
//   et texte visible de son HTML prérendu, sans les autres scripts (les noms
//   de fichiers du build changent à chaque fois, le contenu non). Seules les
//   URL dont l'empreinte a changé depuis le déploiement précédent partent,
//   plus celles qui ont quitté le sitemap (supprimées ou redirigées).
//   Les empreintes précédentes viennent du cache GitHub Actions
//   (.indexnow/manifest.json, voir .github/workflows/deploy-cloudflare.yml).
//   Sans elles (premier passage, cache expiré), tout le sitemap part : IndexNow
//   accepte 10 000 URL par envoi.
//
// LA CLÉ
//   public/<KEY>.txt, servi en asset statique : IndexNow lit ce fichier pour
//   vérifier que l'envoi vient du propriétaire du domaine. Elle n'a rien de
//   secret. Le script attend qu'elle soit en ligne avant d'envoyer (sinon
//   IndexNow répond 403).
//
// USAGE (après next build)
//   node scripts/indexnow.mjs            envoie les pages changées
//   node scripts/indexnow.mjs --dry-run  liste ce qui partirait, n'envoie rien
//   node scripts/indexnow.mjs --all      ignore les empreintes : tout le sitemap
//
// Un échec (clé introuvable en ligne, refus d'IndexNow) sort en code 1 SANS
// écrire le manifeste : le déploiement suivant renverra les mêmes pages.

import { createHash } from "node:crypto";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";

const HOST = "www.saadconcours.space";
const SITE_URL = `https://${HOST}`;
const KEY = "e657fda819c595e0829622889594962d";
const KEY_LOCATION = `${SITE_URL}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/indexnow";
const MAX_PAR_ENVOI = 10000;
const APP_DIR = ".next/server/app";
const MANIFEST = ".indexnow/manifest.json";

const args = new Set(process.argv.slice(2));
const dryRun = args.has("--dry-run");
const tout = args.has("--all");

function echec(message) {
  console.error(`ÉCHEC IndexNow : ${message}`);
  // L'étape est en continue-on-error et ses logs ne se lisent qu'authentifié :
  // l'annotation, elle, s'affiche dans le résumé du run (et via l'API publique).
  if (process.env.GITHUB_ACTIONS) console.log(`::warning title=IndexNow::${message}`);
  process.exit(1);
}

// Même correspondance que scripts/prerender-to-assets.mjs : "/" → index.html,
// "/concours/x" → concours/x.html.
function fichierHtml(url) {
  const path = new URL(url).pathname;
  return join(APP_DIR, path === "/" ? "index.html" : `${path.replace(/^\//, "")}.html`);
}

function empreinte(html) {
  const description = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || "";
  const jsonLd = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => m[1]).join("\n");
  const texte = html
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return createHash("sha1").update(`${description}\n${jsonLd}\n${texte}`).digest("hex").slice(0, 16);
}

if ((await readFile(`public/${KEY}.txt`, "utf8").catch(() => "")).trim() !== KEY) {
  echec(`public/${KEY}.txt absent ou différent de la clé.`);
}

const sitemap = await readFile(join(APP_DIR, "sitemap.xml.body"), "utf8").catch(() => null);
if (sitemap === null) echec(`pas de ${APP_DIR}/sitemap.xml.body : lancer next build d'abord.`);
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
if (urls.length < 50) echec(`sitemap du build réduit à ${urls.length} URL : rien n'est envoyé.`);

const pages = {};
for (const url of urls) pages[url] = await readFile(fichierHtml(url), "utf8").then(empreinte, () => "absent");

const precedent = tout ? null : await readFile(MANIFEST, "utf8").then(JSON.parse, () => null);
let aEnvoyer;
if (!precedent?.pages) {
  aEnvoyer = urls;
  console.log(`  ${tout ? "--all" : "aucun manifeste précédent"} : les ${urls.length} URL du sitemap`);
} else {
  const nouvelles = urls.filter((u) => !(u in precedent.pages));
  const modifiees = urls.filter((u) => u in precedent.pages && precedent.pages[u] !== pages[u]);
  const retirees = Object.keys(precedent.pages).filter((u) => !(u in pages));
  aEnvoyer = [...nouvelles, ...modifiees, ...retirees];
  console.log(`  depuis le déploiement du ${precedent.generatedAt} : ${nouvelles.length} nouvelles, ${modifiees.length} modifiées, ${retirees.length} retirées`);
}

if (dryRun) {
  for (const u of aEnvoyer.slice(0, 40)) console.log(`    ${u}`);
  if (aEnvoyer.length > 40) console.log(`    … et ${aEnvoyer.length - 40} autres`);
  console.log("  --dry-run : rien n'est envoyé, manifeste inchangé");
  process.exit(0);
}

if (aEnvoyer.length) {
  // Les assets d'un déploiement mettent quelques secondes à être servis
  // partout : jusqu'à une minute d'attente, comme les vérifications du workflow.
  let cleEnLigne = false;
  for (let essai = 1; essai <= 6 && !cleEnLigne; essai++) {
    const r = await fetch(KEY_LOCATION).catch(() => null);
    cleEnLigne = Boolean(r?.ok) && (await r.text()).trim() === KEY;
    if (!cleEnLigne) console.log(`  clé pas encore en ligne (essai ${essai}/6 : ${r ? r.status : "requête impossible"})`);
    if (!cleEnLigne && essai < 6) await new Promise((ok) => setTimeout(ok, 10_000));
  }
  if (!cleEnLigne) echec(`${KEY_LOCATION} ne renvoie pas la clé : le site n'est pas (encore) déployé avec elle.`);

  for (let i = 0; i < aEnvoyer.length; i += MAX_PAR_ENVOI) {
    const urlList = aEnvoyer.slice(i, i + MAX_PAR_ENVOI);
    const r = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "content-type": "application/json; charset=utf-8" },
      body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
    }).catch((err) => echec(`requête impossible (${err.message})`));
    // 200 : reçu ; 202 : reçu, clé en cours de vérification (premier envoi).
    if (r.status !== 200 && r.status !== 202) echec(`IndexNow a répondu ${r.status} ${await r.text().catch(() => "")}`.trim());
    console.log(`  ${urlList.length} URL envoyées à IndexNow (${r.status})`);
  }
} else {
  console.log("  aucune page changée : rien à envoyer");
}

await mkdir(dirname(MANIFEST), { recursive: true });
await writeFile(MANIFEST, JSON.stringify({ generatedAt: new Date().toISOString().slice(0, 16), pages }) + "\n");
console.log(`  manifeste écrit (${urls.length} empreintes) : ${MANIFEST}`);
