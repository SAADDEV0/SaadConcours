// Table des routes /api du Worker d'entrée (worker/index.js), régénérée à
// chaque `wrangler dev` / `wrangler deploy` (clé build.command de
// wrangler.jsonc). Elle est déduite de app/api/**/route.js, comme le fait
// Next : une route ajoutée dans app/api est servie en production sans
// qu'aucune liste ne soit à tenir à jour à la main.
//
// Chaque module est chargé par import() : esbuild l'inclut dans le bundle,
// mais ne l'évalue qu'à la première requête qui le vise (le contenu du Bac de
// /api/admin/bac-content ne coûte rien aux autres routes).

import { readdir, mkdir, writeFile } from "node:fs/promises";
import { join, relative, sep } from "node:path";

const ROOT = process.cwd();
const API_DIR = join(ROOT, "app", "api");
const OUT_DIR = join(ROOT, "worker", ".generated");
const OUT = join(OUT_DIR, "api-routes.js");

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else if (/^route\.(js|mjs|ts)$/.test(entry.name)) yield p;
  }
}

// Segment Next -> segment de la table : "x" statique, ":x" dynamique,
// "*x" attrape-tout, "*?x" attrape-tout optionnel. Les groupes "(x)" ne
// comptent pas dans l'URL, les dossiers "_x" sont privés.
function toSegment(name) {
  if (/^\(.*\)$/.test(name)) return null;
  let m;
  if ((m = name.match(/^\[\[\.\.\.(.+)\]\]$/))) return `*?${m[1]}`;
  if ((m = name.match(/^\[\.\.\.(.+)\]$/))) return `*${m[1]}`;
  if ((m = name.match(/^\[(.+)\]$/))) return `:${m[1]}`;
  return name;
}

const rank = (s) => (s.startsWith("*?") ? 3 : s.startsWith("*") ? 2 : s.startsWith(":") ? 1 : 0);

const routes = [];
for await (const file of walk(API_DIR)) {
  const rel = relative(join(ROOT, "app"), file).split(sep);
  if (rel.some((d) => d.startsWith("_"))) continue;
  const segments = rel.slice(0, -1).map(toSegment).filter(Boolean);
  const importPath = relative(OUT_DIR, file).split(sep).join("/");
  routes.push({ segments, importPath });
}

// Priorité de Next : à chaque niveau, un segment statique passe avant un
// dynamique, qui passe avant un attrape-tout.
routes.sort((a, b) => {
  const n = Math.max(a.segments.length, b.segments.length);
  for (let i = 0; i < n; i++) {
    const sa = a.segments[i];
    const sb = b.segments[i];
    if (sa === undefined) return -1;
    if (sb === undefined) return 1;
    const d = rank(sa) - rank(sb);
    if (d) return d;
  }
  return 0;
});

if (routes.length === 0) throw new Error(`Aucune route trouvée dans ${API_DIR}`);

const body =
  "// Généré par scripts/build-worker-routes.mjs — ne pas éditer.\n" +
  "export const routes = [\n" +
  routes
    .map((r) => `  { segments: ${JSON.stringify(r.segments)}, load: () => import(${JSON.stringify(r.importPath)}) },`)
    .join("\n") +
  "\n];\n";

await mkdir(OUT_DIR, { recursive: true });
await writeFile(OUT, body);
console.log(`  worker/.generated/api-routes.js : ${routes.length} routes /api`);
