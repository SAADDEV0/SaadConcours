// Boutique : cahiers de préparation commandés sur WhatsApp.
//
// Le site ne gère aucun paiement ni aucun PDF : il présente les cahiers
// (couverture, sommaire, prix) et ouvre WhatsApp avec un message qui nomme le
// cahier. Saad répond, encaisse et envoie le PDF à la main sur WhatsApp. Les
// fiches vivent dans public/data/boutique.json, éditées depuis
// /admin/boutique comme tout le reste du contenu.
//
// Une fiche :
//   { id, titre, sousTitre, niveau, matiere, description (Markdown),
//     sommaire: [], pointsForts: [], prix, prixBarre, devise, pages, format,
//     couverture, apercu, badge, vedette, available, dateAjout }

// Numéro WhatsApp des commandes (aussi celui du bouton flottant du site).
export const WHATSAPP_NUMERO = "212713875327";

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

// Achetable : visible ET prix renseigné. Une fiche sans prix s'affiche en
// « bientôt disponible » plutôt qu'avec un bouton de commande.
export function isProduitAchetable(p) {
  return isProduitVisible(p) && Number(p.prix) > 0 && p.badge !== "Bientôt";
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

// Lien de commande : ouvre WhatsApp avec un message qui nomme le cahier et son
// prix, pour savoir tout de suite lequel l'étudiant veut.
export function commandeHref(p) {
  const prix = Number(p?.prix) > 0 ? ` (${formatPrix(p.prix, p.devise)})` : "";
  const nom = String(p?.titre || "").replace(/^cahier de préparation\s*[—–:-]\s*/i, "");
  const message = `Bonjour, je veux acheter le cahier « ${nom} »${prix}.`;
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(message)}`;
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
