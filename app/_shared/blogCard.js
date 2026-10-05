// Card markup shared between the server-rendered initial grid
// (app/blog/page.js, crawlable on first load) and the client-side
// re-render on filter/search changes (BlogExplorer.js) — one place to
// keep both in sync, same pattern as concoursCard.js.

import { escapeHtml } from "./concoursCard";
import { formatDateFr } from "./format";
import { categoryInfo } from "../../lib/blogTaxonomy";

const WORDS_PER_MINUTE = 200;

export function readingTimeMinutes(content) {
  const words = String(content || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

// Ce que lisent une carte et les filtres de /blog. Le texte intégral des
// articles (517 Ko de page) n'est plus envoyé : BlogExplorer le charge à la
// première recherche depuis /data/blog.json, fichier statique.
export function blogListItem(post) {
  return {
    id: post.id,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    publishedAt: post.publishedAt,
    minutes: readingTimeMinutes(post.content),
  };
}

// Une ligne par article (liste à filets .sp-rows) : titre, chapeau sur deux
// lignes, rubrique, date et temps de lecture.
export function blogCardHtml(post) {
  const cat = categoryInfo(post.category);
  const minutes = post.minutes ?? readingTimeMinutes(post.content);
  return `
  <a class="sp-row" href="/blog/${encodeURIComponent(post.id)}" data-id="${escapeHtml(post.id)}" data-category="${escapeHtml(post.category || "")}">
    <span class="sp-row-main">
      <span class="sp-row-title">${escapeHtml(post.title)}</span>
      ${post.excerpt ? `<span class="sp-row-desc">${escapeHtml(post.excerpt)}</span>` : ""}
      <span class="sp-row-meta">${cat ? `<span>${escapeHtml(cat.label)}</span>` : ""}<time datetime="${escapeHtml(post.publishedAt || "")}">${escapeHtml(formatDateFr(post.publishedAt))}</time><span>${minutes} min de lecture</span></span>
    </span>
  </a>`;
}
