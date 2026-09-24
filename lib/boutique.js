// Boutique : cahiers de préparation vendus sur Gumroad.
//
// Le site ne gère aucun paiement : il présente les cahiers (couverture,
// sommaire, prix) et envoie l'acheteur sur Gumroad, qui encaisse et livre le
// PDF. Les fiches vivent dans public/data/boutique.json, éditées depuis
// /admin/boutique comme tout le reste du contenu.
//
// Une fiche :
//   { id, titre, sousTitre, niveau, matiere, description (Markdown),
//     sommaire: [], pointsForts: [], prix, prixBarre, devise, pages, format,
//     couverture, apercu, gumroadUrl, paiementDirect, badge, vedette,
//     available, dateAjout }

export const BOUTIQUE_NIVEAUX = [
  { code: "bac", label: "Bac", long: "Bac Sciences Économiques & Gestion", icon: "🎒", hue: 152 },
  { code: "licence", label: "Licence", long: "Licence FSJES (S1 à S6)", icon: "📚", hue: 210 },
  { code: "licence_excellence", label: "Licence d'excellence", long: "Concours de Licence d'excellence", icon: "⭐", hue: 42 },
  { code: "master", label: "Master", long: "Concours d'accès au Master", icon: "🎓", hue: 265 },
];

export const BOUTIQUE_BADGES = ["Nouveau", "Best-seller", "Promo", "Édition 2026", "Bientôt"];

export const BOUTIQUE_DEVISES = [
  { code: "MAD", label: "Dirham (DH)" },
  { code: "EUR", label: "Euro (€)" },
  { code: "USD", label: "Dollar ($)" },
];

export function boutiqueNiveau(code) {
  return BOUTIQUE_NIVEAUX.find((n) => n.code === code) || null;
}

export function isProduitVisible(p) {
  return Boolean(p && p.available && p.titre);
}

// Achetable : visible ET lien Gumroad valide. Une fiche sans lien s'affiche
// en « bientôt disponible » plutôt qu'avec un bouton mort.
export function isProduitAchetable(p) {
  return isProduitVisible(p) && /^https:\/\/([\w-]+\.)?gumroad\.com\//i.test(String(p.gumroadUrl || "")) && p.badge !== "Bientôt";
}

export function formatPrix(value, devise = "MAD") {
  const n = Number(value);
  if (!Number.isFinite(n) || n <= 0) return "Gratuit";
  const s = Number.isInteger(n) ? String(n) : n.toFixed(2).replace(".", ",");
  if (devise === "EUR") return `${s} €`;
  if (devise === "USD") return `${s} $`;
  return `${s} DH`;
}

export function remisePct(p) {
  const a = Number(p?.prix);
  const b = Number(p?.prixBarre);
  if (!(a > 0 && b > a)) return 0;
  return Math.round((1 - a / b) * 100);
}

// Lien vers Gumroad. `?wanted=true` ouvre directement le paiement au lieu de
// la page produit Gumroad : un clic de moins entre l'envie et l'achat.
export function gumroadHref(p) {
  const raw = String(p?.gumroadUrl || "").trim();
  if (!raw) return "";
  if (p.paiementDirect === false) return raw;
  return raw + (raw.includes("?") ? "&" : "?") + "wanted=true";
}

export function produitImage(path) {
  if (!path) return "";
  if (/^(https?:)?\/\//.test(path)) return path;
  return path.startsWith("/") ? path : "/" + path;
}

export function trierProduits(list) {
  return [...list].sort(
    (a, b) =>
      Number(Boolean(b.vedette)) - Number(Boolean(a.vedette)) ||
      String(b.dateAjout || "").localeCompare(String(a.dateAjout || "")) ||
      String(a.titre).localeCompare(String(b.titre), "fr")
  );
}
