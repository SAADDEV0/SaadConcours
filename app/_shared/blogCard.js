// Card markup shared between the server-rendered initial grid
// (app/blog/page.js, crawlable on first load) and the client-side
// re-render on filter/search changes (BlogExplorer.js) — one place to
// keep both in sync, same pattern as concoursCard.js.

import { escapeHtml } from "./concoursCard";
import { categoryInfo } from "../../lib/blogTaxonomy";

const WORDS_PER_MINUTE = 200;

export function readingTimeMinutes(content) {
  const words = String(content || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

// Teinte par catégorie, pour garder le même code couleur que les cours.
const BLOG_HUES = { facultes: 220, matieres: 152, comparatifs: 265, methode: 42 };

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

export function blogCardHtml(post) {
  const cat = categoryInfo(post.category);
  const minutes = post.minutes ?? readingTimeMinutes(post.content);
  const hue = BLOG_HUES[post.category] ?? 220;
  return `
  <a class="bac-mat-card sp-card" href="/blog/${encodeURIComponent(post.id)}" data-id="${escapeHtml(post.id)}" data-category="${escapeHtml(post.category || "")}" style="--mat-h:${hue}">
    <span class="bac-mat-icon">${cat ? cat.emoji : "📰"}</span>
    <span class="bac-mat-body">
      ${cat ? `<span class="sp-card-kicker">${escapeHtml(cat.label)}</span>` : ""}
      <span class="bac-mat-name">${escapeHtml(post.title)}</span>
      <span class="bac-mat-desc">${escapeHtml(post.excerpt)}</span>
      <span class="bac-mat-meta">
        <time datetime="${escapeHtml(post.publishedAt || "")}">${escapeHtml(post.publishedAt || "")}</time>
        <span class="bac-dot">·</span>
        <span>⏱️ ${minutes} min de lecture</span>
      </span>
    </span>
  </a>`;
}
