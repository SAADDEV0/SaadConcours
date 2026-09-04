// Card markup shared between the server-rendered initial grid
// (app/cours/page.js, crawlable on first load — real <a href="/cours/[id]">
// per module) and its hydration in CoursExplorer.js, which intercepts a
// plain click to open the inline reader instead of navigating away.
// Mirrors concoursCard.js.

import { escapeHtml } from "./concoursCard";

export function coursCardHtml(m) {
  if (!m.available) {
    return `
  <div class="eval-module-card disabled" data-id="${escapeHtml(m.id)}">
    <div class="eval-module-name">${escapeHtml(m.module)}</div>
    <div class="eval-module-desc">${escapeHtml(m.description || "")}</div>
    <div class="eval-module-meta">Bientôt disponible</div>
  </div>`;
  }
  return `
  <a class="eval-module-card" href="/cours/${encodeURIComponent(m.id)}" data-id="${escapeHtml(m.id)}">
    <div class="eval-module-name">${escapeHtml(m.module)}</div>
    <div class="eval-module-desc">${escapeHtml(m.description || "")}</div>
    <div class="eval-module-meta">Lire le cours</div>
  </a>`;
}
