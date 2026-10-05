// Card markup shared between the server-rendered initial grid
// (app/concours/page.js, crawlable on first load) and the client-side
// re-render on filter/search changes (ConcoursExplorer.js) — one place to
// keep both in sync instead of two copies drifting apart. Same card
// component as the Bac / FSJES course spaces (bac-mat-card).

import { isLicenceExcellence } from "../../lib/concoursNiveaux";
import { difficulteHtml } from "./format";
import { iconHtml } from "./icons";

// Cartes affichées d'emblée sur une liste de concours ; les suivantes
// arrivent par « Voir plus » (ConcoursExplorer). Toutes restent dans le HTML
// servi, en `hidden`, pour que les liens vers chaque fiche soient crawlés.
export const CONCOURS_PAGE_SIZE = 24;

// Ordre par défaut des listes : les sujets les plus récents d'abord (année,
// puis date d'ajout), au lieu de l'ordre du fichier qui commençait en 2010.
// Année non datée (« SD », vide) : rangée après toutes les années connues.
export function anneeNum(c) {
  const n = parseInt(c.annee, 10);
  return Number.isFinite(n) ? n : -1;
}

export function compareConcoursRecents(a, b) {
  return (
    anneeNum(b) - anneeNum(a) ||
    String(b.date_ajout || "").localeCompare(String(a.date_ajout || "")) ||
    String(a.master_reel || a.filiere || "").localeCompare(String(b.master_reel || b.filiere || ""), "fr")
  );
}

export function escapeHtml(s) {
  return String(s ?? "").replace(
    /[&<>"']/g,
    (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m])
  );
}

// Ce que lisent une carte et les filtres de /concours, et rien d'autre. La
// liste complète (énoncés et corrigés) partait dans le HTML de /concours pour
// hydrater ConcoursExplorer : 3,9 Mo de page. ConcoursExplorer charge
// désormais le texte des sujets à la demande (recherche dans les énoncés,
// PDF) depuis /data/concours.json, fichier statique.
export function concoursListItem(c) {
  return {
    id: c.id,
    annee: c.annee,
    ville: c.ville,
    etablissement: c.etablissement,
    filiere: c.filiere,
    master_reel: c.master_reel,
    categorie: c.categorie,
    modules: c.modules,
    difficulte: c.difficulte,
    ...(c.date_ajout ? { date_ajout: c.date_ajout } : {}),
    ...(c.niveau ? { niveau: c.niveau } : {}),
    hasImg: (c.images || []).length > 0,
    hasCorrige: Boolean(c.corrige_md || c.corrige_from_github),
  };
}

// Une ligne par sujet (liste à filets .sp-rows) : le titre du master, la
// faculté et la ville, la difficulté, l'année à droite. Les matières sont sur
// la fiche : en pastilles, elles s'empilaient et triplaient la hauteur des
// cartes sur téléphone. Seules les exceptions sont signalées (« Sans
// corrigé », « Sans scan ») : le reste concerne plus de 90 % des sujets.
// `hidden` : ligne rendue mais masquée (au-delà de CONCOURS_PAGE_SIZE).
// `dl` : bouton PDF, câblé par ConcoursExplorer (absent ailleurs).
// `badgeNiveau` : mention « Licence d'excellence » sur les listes qui
// mêlent les deux niveaux (accueil). `nouveau` : surligné « Nouveau ».
export function concoursCardHtml(c, { hidden = false, dl = true, badgeNiveau = false, nouveau = false } = {}) {
  const hasImg = c.hasImg ?? (c.images || []).length > 0;
  const hasCorrige = c.hasCorrige ?? Boolean(c.corrige_md || c.corrige_from_github);
  const masterLabel = c.master_reel || c.filiere || `${c.etablissement} — ${c.ville}`;
  // « FSJES Mohammedia, Mohammedia » : la ville n'est répétée que si le nom
  // de l'établissement ne la contient pas déjà.
  const lieu = [c.etablissement, c.ville && !String(c.etablissement || "").includes(c.ville) ? c.ville : ""].filter(Boolean).join(", ");
  return `
  <a class="sp-row" href="/concours/${encodeURIComponent(c.id)}" data-id="${escapeHtml(c.id)}"${hidden ? " hidden" : ""}>
    <span class="sp-row-main">
      <span class="sp-row-title">${escapeHtml(masterLabel)}${nouveau ? '<span class="home-new">Nouveau</span>' : ""}</span>
      <span class="sp-row-meta"><span>${escapeHtml(lieu)}</span>${difficulteHtml(c.difficulte)}${
        badgeNiveau && isLicenceExcellence(c) ? `<span class="sp-le-badge">${iconHtml("star", { size: 12 })}Licence d'excellence</span>` : ""
      }${hasCorrige ? "" : '<span class="sp-flag">Sans corrigé</span>'}${hasImg ? "" : '<span class="sp-flag">Sans scan</span>'}</span>
    </span>
    <span class="sp-row-year">${escapeHtml(String(c.annee || "—"))}</span>
    ${dl ? `<button type="button" class="card-dl sp-row-dl" title="Télécharger l'énoncé (PDF)" aria-label="Télécharger l'énoncé en PDF">${iconHtml("file-pdf", { size: 17 })}<span>PDF</span></button>` : ""}
  </a>`;
}
