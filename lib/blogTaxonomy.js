// Blog category taxonomy — shared between the server-rendered index
// (app/blog/page.js), the client-side filter (app/blog/BlogExplorer.js)
// and the detail page's related-posts logic (app/blog/[id]/page.js).

export const BLOG_CATEGORIES = [
  { code: "facultes", label: "Guides de facultés", emoji: "🏫", cssVar: "accent" },
  { code: "matieres", label: "Matières à préparer", emoji: "📚", cssVar: "green" },
  { code: "comparatifs", label: "Comparatifs", emoji: "⚖️", cssVar: "violet" },
  { code: "methode", label: "Méthode & Conseils", emoji: "🎯", cssVar: "amber" },
];

export function categoryInfo(code) {
  return BLOG_CATEGORIES.find((c) => c.code === code) || null;
}

export function categoryLabel(code) {
  return categoryInfo(code)?.label || "Article";
}
