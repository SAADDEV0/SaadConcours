// Card markup shared between the server-rendered initial grid
// (app/concours/page.js, crawlable on first load) and the client-side
// re-render on filter/search changes (ConcoursExplorer.js) — one place to
// keep both in sync instead of two copies drifting apart. Same card
// component as the Bac / FSJES course spaces (bac-mat-card).

import { isLicenceExcellence } from "../../lib/concoursNiveaux";
import { difficulteHtml } from "./format";

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

// Teinte de la carte par grande famille de filières (lib/taxonomy.js).
export const CONCOURS_HUES = { FCA: 152, MRH: 22, MCL: 330, EAPP: 210, EDMQ: 265 };

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

// `hidden` : carte rendue mais masquée (au-delà de CONCOURS_PAGE_SIZE).
// Les badges ne signalent que l'exception : « Corrigé » et « Scan réel »
// figuraient sur plus de 90 % des cartes et n'aidaient plus à choisir.
export function concoursCardHtml(c, { hidden = false } = {}) {
  const hasImg = c.hasImg ?? (c.images || []).length > 0;
  const hasCorrige = c.hasCorrige ?? Boolean(c.corrige_md || c.corrige_from_github);
  const masterLabel = c.master_reel || c.filiere || `${c.etablissement} — ${c.ville} — ${c.annee}`;
  const hue = CONCOURS_HUES[c.categorie] ?? 220;
  const modules = c.modules || [];
  return `
  <a class="bac-mat-card sp-card" href="/concours/${encodeURIComponent(c.id)}" data-id="${escapeHtml(c.id)}" style="--mat-h:${hue}"${hidden ? " hidden" : ""}>
    <span class="bac-mat-icon sp-year">${escapeHtml(String(c.annee || "—"))}</span>
    <span class="bac-mat-body">
      <span class="bac-mat-name">${escapeHtml(masterLabel)}</span>
      <span class="bac-mat-desc">🏫 ${escapeHtml(c.etablissement)} · 📍 ${escapeHtml(c.ville)}</span>
      ${
        modules.length
          ? `<span class="sp-chips">${modules
              .slice(0, 4)
              .map((m) => `<span class="bac-res-chip on">${escapeHtml(m)}</span>`)
              .join("")}${modules.length > 4 ? `<span class="bac-res-chip">+${modules.length - 4}</span>` : ""}</span>`
          : ""
      }
      <span class="bac-mat-meta">
        ${isLicenceExcellence(c) ? `<span class="sp-le-badge">⭐ Licence d'excellence</span>` : ""}
        ${difficulteHtml(c.difficulte)}
        ${hasCorrige ? "" : '<span class="sp-flag">Sans corrigé</span>'}
        ${hasImg ? "" : '<span class="sp-flag">Sans scan</span>'}
      </span>
    </span>
    <button type="button" class="card-dl sp-card-dl" title="Télécharger l'énoncé (PDF)" aria-label="Télécharger l'énoncé en PDF"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v11m0 0-4-4m4 4 4-4M5 20h14"/></svg>PDF</button>
  </a>`;
}
