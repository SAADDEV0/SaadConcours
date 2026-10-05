// Card markup for the server-rendered /evaluation grid (real
// <a href="/evaluation/[id]"> per module, crawlable on first load).

import { escapeHtml } from "./concoursCard";

// Une ligne par module (liste à filets .sp-rows), comme les sujets.
export function evalCardHtml(m) {
  const nbQuestions = (m.questions || []).length;
  const nbChapitres = (m.chapters || []).length;
  // Le nombre de questions est déjà dans la ligne du bas : on le retire du
  // titre (« … (100 Questions) ») au lieu de l'écrire deux fois.
  const titre = String(m.title || "").replace(/\s*\(\s*\d+\s*questions?\s*\)\s*$/i, "");
  // Pas de badge « QCM corrigé » (vrai pour tous les modules) : la place sert
  // au meilleur score de l'élève, rempli par EvaluationExplorer depuis son
  // navigateur (vide au rendu serveur).
  const body = `
    <span class="sp-row-main">
      <span class="sp-row-title">${escapeHtml(m.module)}</span>
      <span class="sp-row-meta"><span>${escapeHtml(titre)}</span>${
        m.available ? `<span>${nbQuestions} questions</span>${nbChapitres ? `<span>${nbChapitres} chapitres</span>` : ""}` : "<span>Bientôt disponible</span>"
      }</span>
    </span>
    ${m.available ? `<span class="sp-best" data-best="${escapeHtml(m.id)}" hidden></span>` : ""}`;
  if (!m.available) {
    return `<div class="sp-row sp-card disabled" data-id="${escapeHtml(m.id)}">${body}</div>`;
  }
  return `<a class="sp-row" href="/evaluation/${encodeURIComponent(m.id)}" data-id="${escapeHtml(m.id)}">${body}</a>`;
}
