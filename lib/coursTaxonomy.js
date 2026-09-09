// Cours category taxonomy — shared between the server-rendered index
// (app/cours/page.js), the client-side filter (app/cours/CoursExplorer.js)
// and the admin editor (app/admin/_lib/resourceConfigs.js). Mirrors
// lib/blogTaxonomy.js's shape/usage.

export const COURS_CATEGORIES = [
  { code: "compta", label: "Comptabilité & Audit", emoji: "📗" },
  { code: "finance", label: "Finance", emoji: "💰" },
  { code: "economie", label: "Économie", emoji: "📈" },
  { code: "quant", label: "Statistiques & Économétrie", emoji: "🔢" },
  { code: "management", label: "Management & RH", emoji: "🧭" },
  { code: "marketing", label: "Marketing", emoji: "📣" },
  { code: "droit", label: "Fiscalité & Droit", emoji: "⚖️" },
];

export function coursCategoryInfo(code) {
  return COURS_CATEGORIES.find((c) => c.code === code) || null;
}

export function coursCategoryLabel(code) {
  return coursCategoryInfo(code)?.label || "";
}

export function coursCategoryOptions() {
  return COURS_CATEGORIES.map((c) => ({ value: c.code, label: `${c.emoji} ${c.label}` }));
}
