// Garde-fou « low value content » : à lancer après `next build`
// (`npm run audit:contenu`, inclus dans `npm run check` et en CI dans
// .github/workflows/ci.yml).
//
// Le site a été refusé par AdSense pour « low value content » à cause de pages
// que personne ne regardait : 289 pages d'examen réduites à un lien PDF,
// 172 pages de 1ère Bac « en préparation », une boutique vide, des annonces
// copiées d'un autre site. Mettre ces pages en noindex n'a pas suffi : la
// relecture suit les liens du site, qu'ils soient indexés ou non.
//
// Ce script fait donc ce que fait le relecteur : il part de l'accueil, suit
// tous les liens internes des pages prérendues (.next/server/app) et échoue si
// une page atteignable
//   1. porte un marqueur de page en construction (badge « Bientôt »,
//      « … en préparation ») ;
//   2. a moins de MIN_MOTS mots de contenu propre (hors en-tête, menus, barre
//      latérale et pied de page — une ancienne page d'examen tombait à ~90) ;
//   3. contient un lien interne vers une page ou un fichier qui n'existe pas.
//
// Une page qu'aucun lien n'atteint (ex. /boutique tant qu'elle est vide) n'est
// pas contrôlée : le relecteur ne la voit pas.

import { readdir, readFile, access } from "node:fs/promises";
import { join, relative, sep } from "node:path";

const APP_DIR = ".next/server/app";
const PUBLIC_DIR = "public";
const MIN_MOTS = 120;
// « Bientôt » avec majuscule = le badge ; en minuscule, le mot vient dans des
// phrases normales. Pas de « en construction » pour la même raison : il revient
// dans les corrigés (« un cadre réglementaire encore en construction »).
const MARQUEURS = /\bBientôt\b|\ben préparation\b|arrivent bientôt|coming soon|under construction/;
// Cibles servies par le Worker ou générées à la volée : pas de .html.
const HORS_PAGES = [/^\/api\//, /^\/admin(\/|$)/, /^\/_next\//, /opengraph-image/, /^\/icon/, /^\/apple-icon/, /^\/manifest\.webmanifest$/, /^\/sitemap\.xml$/];

const exists = (p) => access(p).then(() => true, () => false);

async function listHtml(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await listHtml(p)));
    else if (e.name.endsWith(".html")) out.push(p);
  }
  return out;
}

function routeOf(file) {
  const rel = relative(APP_DIR, file).split(sep).join("/").replace(/\.html$/, "");
  return rel === "index" ? "/" : `/${rel}`;
}

function texte(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<header[\s\S]*?<\/header>/gi, " ")
    .replace(/<footer[\s\S]*?<\/footer>/gi, " ")
    .replace(/<nav[\s\S]*?<\/nav>/gi, " ")
    .replace(/<aside[\s\S]*?<\/aside>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;|&#160;/g, " ")
    .replace(/&[a-z#0-9]+;/gi, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function liens(html) {
  const out = new Set();
  for (const m of html.matchAll(/href="(\/[^"#?]*)/g)) {
    let href = m[1];
    if (href.startsWith("//")) continue;
    try {
      href = decodeURIComponent(href);
    } catch {
      // lien mal encodé : on le garde tel quel, il ressortira comme cassé
    }
    out.add(href.length > 1 ? href.replace(/\/$/, "") : href);
  }
  return out;
}

const pages = new Map();
for (const f of await listHtml(APP_DIR)) {
  const route = routeOf(f);
  if (/^\/(_not-found|404|500)$/.test(route) || route.startsWith("/admin")) continue;
  pages.set(route, f);
}
if (!pages.has("/")) {
  console.error(`Aucune page d'accueil dans ${APP_DIR} : lancer \`next build\` avant ce script.`);
  process.exit(1);
}

const vues = new Set(["/"]);
const file = ["/"];
const erreurs = { marqueurs: [], minces: [], cassés: [] };
const mots = [];

while (file.length) {
  const route = file.shift();
  const html = await readFile(pages.get(route), "utf8");
  const t = texte(html);
  const noindex = /<meta name="robots" content="[^"]*noindex/i.test(html);

  const marqueur = t.match(MARQUEURS);
  if (marqueur) {
    const i = t.toLowerCase().indexOf(marqueur[0].toLowerCase());
    erreurs.marqueurs.push(`${route} — « …${t.slice(Math.max(0, i - 60), i + 40)}… »`);
  }
  const n = t ? t.split(" ").length : 0;
  mots.push([n, route]);
  if (n < MIN_MOTS) erreurs.minces.push(`${route} — ${n} mots${noindex ? " (noindex, mais liée)" : ""}`);

  for (const href of liens(html)) {
    if (HORS_PAGES.some((re) => re.test(href))) continue;
    if (pages.has(href)) {
      if (!vues.has(href)) {
        vues.add(href);
        file.push(href);
      }
    } else if (!(await exists(join(PUBLIC_DIR, href)))) {
      erreurs.cassés.push(`${route} → ${href}`);
    }
  }
}

mots.sort((a, b) => a[0] - b[0]);
console.log(`Pages atteignables depuis l'accueil : ${vues.size} (sur ${pages.size} pages prérendues)`);
console.log(`Contenu le plus mince : ${mots.slice(0, 5).map(([n, r]) => `${r} (${n})`).join(", ")}`);

let echec = false;
for (const [cle, titre] of [
  ["marqueurs", "Pages « en construction »"],
  ["minces", `Pages de moins de ${MIN_MOTS} mots`],
  ["cassés", "Liens internes cassés"],
]) {
  const liste = [...new Set(erreurs[cle])];
  if (!liste.length) continue;
  echec = true;
  console.error(`\n✗ ${titre} : ${liste.length}`);
  for (const l of liste.slice(0, 25)) console.error(`  ${l}`);
  if (liste.length > 25) console.error(`  … et ${liste.length - 25} autres`);
}

if (echec) {
  console.error(
    "\nCes pages sont exactement ce qui a fait refuser le site par AdSense (« low value content »).\n" +
      "Rédiger le contenu, ou ne pas générer la page et retirer les liens qui y mènent — un noindex ne suffit pas."
  );
  process.exit(1);
}
console.log("✓ Aucune page en construction, mince ou cassée.");
