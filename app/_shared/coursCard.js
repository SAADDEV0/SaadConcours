// Card markup shared between the server-rendered initial grid
// (app/cours/page.js, crawlable on first load — real <a href="/cours/[id]">
// per module) and its hydration in CoursExplorer.js, which intercepts a
// plain click to open the inline reader instead of navigating away.
// Mirrors concoursCard.js.

import { escapeHtml } from "./concoursCard";
import { licenceParcoursLabel, licenceFiliereLabel } from "../../lib/coursTaxonomy";

// Small "Sx · Parcours · Filière" tag row so the Licence classification is
// visible directly on the card, not just in the sidebar filters — makes the
// grid self-explanatory once a filter narrows it down to several semesters.
function coursTagsHtml(m) {
  const tags = [];
  if (m.semestre) tags.push(m.semestre);
  tags.push(m.parcours ? licenceParcoursLabel(m.parcours) : m.semestre ? "Tronc commun" : null);
  if (m.filiere) tags.push(licenceFiliereLabel(m.filiere));
  const clean = tags.filter(Boolean);
  if (!clean.length) return "";
  return `<div class="card-modules">${clean.map((t) => `<span class="mod-tag">${escapeHtml(t)}</span>`).join("")}</div>`;
}

export function coursCardHtml(m) {
  if (!m.available) {
    return `
  <div class="eval-module-card disabled" data-id="${escapeHtml(m.id)}">
    <div class="eval-module-name">${escapeHtml(m.module)}</div>
    ${coursTagsHtml(m)}
    <div class="eval-module-desc">${escapeHtml(m.description || "")}</div>
    <div class="eval-module-meta">Bientôt disponible</div>
  </div>`;
  }
  return `
  <a class="eval-module-card" href="/cours/${encodeURIComponent(m.id)}" data-id="${escapeHtml(m.id)}">
    <div class="eval-module-name">${escapeHtml(m.module)}</div>
    ${coursTagsHtml(m)}
    <div class="eval-module-desc">${escapeHtml(m.description || "")}</div>
    <div class="eval-module-meta">Lire le cours</div>
  </a>`;
}
