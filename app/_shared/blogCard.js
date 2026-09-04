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

export function blogCardHtml(post) {
  const cat = categoryInfo(post.category);
  const minutes = readingTimeMinutes(post.content);
  return `
  <a class="blog-card" href="/blog/${encodeURIComponent(post.id)}" data-id="${escapeHtml(post.id)}" data-category="${escapeHtml(post.category || "")}">
    <div class="blog-card-top">
      ${cat ? `<span class="blog-cat-badge blog-cat-${escapeHtml(cat.code)}">${cat.emoji} ${escapeHtml(cat.label)}</span>` : ""}
      <span class="blog-read-time">⏱️ ${minutes} min</span>
    </div>
    <div class="eval-module-name">${escapeHtml(post.title)}</div>
    <div class="eval-module-desc">${escapeHtml(post.excerpt)}</div>
    <time class="eval-module-meta" datetime="${escapeHtml(post.publishedAt || "")}">${escapeHtml(post.publishedAt || "")}</time>
  </a>`;
}
