// Card markup for the server-rendered /evaluation grid (real
// <a href="/evaluation/[id]"> per module, crawlable on first load). Same
// card component as the Bac / FSJES course spaces (bac-mat-card).

import { escapeHtml } from "./concoursCard";
import { iconHtml } from "./icons";

// Teinte et icône par module, reprises des matières des cours FSJES.
const MODULES = [
  { re: /analyse financi/i, icon: "📘", hue: 42 },
  { re: /audit/i, icon: "🔍", hue: 152 },
  { re: /comptabilit/i, icon: "📗", hue: 152 },
  { re: /macro|micro|économie/i, icon: "🌍", hue: 210 },
  { re: /math/i, icon: "📐", hue: 42 },
  { re: /stat|économétrie/i, icon: "📊", hue: 265 },
  { re: /marketing/i, icon: "📣", hue: 330 },
  { re: /management|rh|ressources/i, icon: "🧭", hue: 22 },
];

export function evalModuleStyle(m) {
  return MODULES.find((x) => x.re.test(m.module || "")) || { icon: "📝", hue: 220 };
}

export function evalCardHtml(m) {
  const nbQuestions = (m.questions || []).length;
  const nbChapitres = (m.chapters || []).length;
  const { icon, hue } = evalModuleStyle(m);
  // Le nombre de questions est déjà dans la ligne du bas : on le retire du
  // titre (« … (100 Questions) ») au lieu de l'écrire deux fois.
  const titre = String(m.title || "").replace(/\s*\(\s*\d+\s*questions?\s*\)\s*$/i, "");
  // Plus de badge « QCM corrigé » (vrai pour tous les modules) : la place
  // sert au meilleur score de l'élève, rempli par EvaluationExplorer depuis
  // son navigateur (vide au rendu serveur).
  const body = `
    <span class="bac-mat-icon">${iconHtml(icon, { size: 23 })}</span>
    <span class="bac-mat-body">
      <span class="bac-mat-name">${escapeHtml(m.module)}</span>
      <span class="bac-mat-desc">${escapeHtml(titre)}</span>
      <span class="bac-mat-meta">
        ${m.available ? `<span>${nbQuestions} questions</span>${nbChapitres ? `<span class="bac-dot">·</span><span>${nbChapitres} chapitres</span>` : ""}<span class="sp-best" data-best="${escapeHtml(m.id)}" hidden></span>` : "<span>Bientôt disponible</span>"}
      </span>
    </span>
    <span class="bac-mat-arrow" aria-hidden="true">→</span>`;
  if (!m.available) {
    return `<div class="bac-mat-card sp-card disabled" data-id="${escapeHtml(m.id)}" style="--mat-h:${hue}">${body}</div>`;
  }
  return `<a class="bac-mat-card sp-card" href="/evaluation/${encodeURIComponent(m.id)}" data-id="${escapeHtml(m.id)}" style="--mat-h:${hue}">${body}</a>`;
}
