// Card markup shared between the server-rendered initial grid
// (app/concours/page.js, crawlable on first load) and the client-side
// re-render on filter/search changes (ConcoursExplorer.js) — one place to
// keep both in sync instead of two copies drifting apart. Same card
// component as the Bac / FSJES course spaces (bac-mat-card).

import { isLicenceExcellence } from "../../lib/concoursNiveaux";

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
    ...(c.niveau ? { niveau: c.niveau } : {}),
    hasImg: (c.images || []).length > 0,
    hasCorrige: Boolean(c.corrige_md || c.corrige_from_github),
  };
}

export function concoursCardHtml(c) {
  const hasImg = c.hasImg ?? (c.images || []).length > 0;
  const hasCorrige = c.hasCorrige ?? Boolean(c.corrige_md || c.corrige_from_github);
  const masterLabel = c.master_reel || c.filiere || `${c.etablissement} — ${c.ville} — ${c.annee}`;
  const hue = CONCOURS_HUES[c.categorie] ?? 220;
  const modules = c.modules || [];
  return `
  <a class="bac-mat-card sp-card" href="/concours/${encodeURIComponent(c.id)}" data-id="${escapeHtml(c.id)}" style="--mat-h:${hue}">
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
        <span>Difficulté : ${escapeHtml(c.difficulte || "?")}</span>
        ${hasCorrige ? '<span class="bac-dispo">✅ Corrigé</span>' : ""}
        ${hasImg ? '<span class="bac-soon">🖼️ Scan réel</span>' : ""}
      </span>
    </span>
    <button type="button" class="card-dl sp-card-dl" title="Télécharger l'énoncé (PDF)" aria-label="Télécharger l'énoncé en PDF">⬇</button>
  </a>`;
}
