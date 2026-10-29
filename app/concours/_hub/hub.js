// Briques communes aux hubs de concours (lib/concoursHubs.js) : données,
// cours à réviser, lignes de sujets, article fusionné. Le dossier _hub n'est
// pas une route (préfixe « _ »).
import { marked } from "marked";
import { getAllBlog, getCorrigeIdsLocal, getPublicConcours } from "@/lib/store";
import { modulesDuConcours } from "@/lib/concoursParModule";
import { compareConcoursRecents, concoursCardHtml } from "../../_shared/concoursCard";
import { renderMarkdownWithMath } from "../../_shared/mathMarkdown";

// Sujets publics avec le drapeau des corrigés rangés à part, comme /concours.
export async function sujetsPublics() {
  const tous = await getPublicConcours().catch(() => []);
  const corrigeIds = getCorrigeIdsLocal();
  return tous.map((c) => (!c.corrige_md && corrigeIds.has(c.id) ? { ...c, corrige_from_github: true } : c));
}

export const aCorrige = (c) => Boolean(c.corrige_md || c.corrige_from_github);

// Cours de la Licence (et de Droit) qui couvrent les épreuves de ces sujets,
// du plus demandé au moins demandé : « pour ces concours, révise d'abord… ».
export function coursAReviser(sujets, n = 8) {
  const compte = new Map();
  for (const c of sujets) {
    for (const m of modulesDuConcours(c, 12)) {
      const e = compte.get(m.href) || { ...m, n: 0 };
      e.n += 1;
      compte.set(m.href, e);
    }
  }
  return [...compte.values()].sort((a, b) => b.n - a.n || a.module.localeCompare(b.module, "fr")).slice(0, n);
}

// Toutes les lignes, sans « Voir plus » : le hub est la page qui lie chaque
// sujet de sa ville ou de son master.
export function lignesHtml(sujets) {
  return [...sujets].sort(compareConcoursRecents).map((c) => concoursCardHtml({ ...c, hasCorrige: aCorrige(c) }, { dl: false })).join("");
}

// Article de blog repris en fin de hub : publié, ou fusionné (champ `fusion`,
// posé quand l'article a été retiré du blog au profit du hub).
export async function articleFusionne(id) {
  if (!id) return null;
  const blog = await getAllBlog().catch(() => []);
  const a = blog.find((x) => x.id === id);
  if (!a || !(a.available || a.fusion) || !a.content) return null;
  // Les intertitres de l'article descendent d'un niveau : le hub a déjà son H1
  // et ses H2.
  const md = a.content.replace(/^### /gm, "#### ").replace(/^## /gm, "### ");
  return { titre: a.title, date: a.publishedAt || "", html: renderMarkdownWithMath(marked, md) };
}

export function periode({ anneeMin, anneeMax }) {
  if (!anneeMin) return "";
  return anneeMin === anneeMax ? `en ${anneeMin}` : `de ${anneeMin} à ${anneeMax}`;
}

// « d'Agadir », « d'El Jadida », mais « de Rabat ».
export function deVille(ville) {
  return /^[aeiouyàâéèêîôûh]/i.test(ville) ? `d'${ville}` : `de ${ville}`;
}

export function pluriel(n, mot, motPluriel = `${mot}s`) {
  return `${n} ${n > 1 ? motPluriel : mot}`;
}

// « A, B et C » (et « … et N autres » au-delà de `max`).
export function liste(items, max = 4) {
  if (items.length <= 1) return items.join("");
  if (items.length > max) return `${items.slice(0, max).join(", ")} et ${pluriel(items.length - max, "autre")}`;
  return `${items.slice(0, -1).join(", ")} et ${items[items.length - 1]}`;
}
