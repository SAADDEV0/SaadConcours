// Card markup shared between the server-rendered initial grid
// (app/evaluation/page.js, crawlable on first load — real
// <a href="/evaluation/[id]"> per module) and its hydration in
// EvaluationExplorer.js, which intercepts a plain click to open the inline
// quiz instead of navigating away. Mirrors concoursCard.js / coursCard.js.

import { escapeHtml } from "./concoursCard";

export function evalCardHtml(m) {
  const nbQuestions = (m.questions || []).length;
  if (!m.available) {
    return `
  <div class="eval-module-card disabled" data-id="${escapeHtml(m.id)}">
    <div class="eval-module-name">${escapeHtml(m.module)}</div>
    <div class="eval-module-desc">${escapeHtml(m.title)}</div>
    <div class="eval-module-meta">Bientôt disponible</div>
  </div>`;
  }
  return `
  <a class="eval-module-card" href="/evaluation/${encodeURIComponent(m.id)}" data-id="${escapeHtml(m.id)}">
    <div class="eval-module-name">${escapeHtml(m.module)}</div>
    <div class="eval-module-desc">${escapeHtml(m.title)}</div>
    <div class="eval-module-meta">${nbQuestions} questions</div>
  </a>`;
}
