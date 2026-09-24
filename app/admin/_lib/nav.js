// Navigation de la console : menu latéral, fil d'Ariane et palette de
// commandes lisent tous cette liste.

export const NAV = [
  {
    label: null,
    items: [{ href: "/admin", icon: "home", label: "Tableau de bord", exact: true }],
  },
  {
    label: "Contenu",
    items: [
      { href: "/admin/concours", icon: "book", label: "Concours Master", badge: "concours" },
      { href: "/admin/cours", icon: "notebook", label: "Cours Licence" },
      { href: "/admin/bac", icon: "graduation", label: "Cours Bac" },
      { href: "/admin/evaluations", icon: "quiz", label: "Évaluations" },
      { href: "/admin/blog", icon: "news", label: "Blog" },
      { href: "/admin/annonces", icon: "megaphone", label: "Concours ouverts", badge: "news" },
      { href: "/admin/boutique", icon: "bag", label: "Boutique" },
    ],
  },
  {
    label: "Diffusion",
    items: [
      { href: "/admin/social", icon: "share", label: "Studio social" },
      { href: "/admin/pdf", icon: "palette", label: "Studio PDF" },
      { href: "/admin/abonnes", icon: "users", label: "Abonnés" },
    ],
  },
  {
    label: "Pilotage",
    items: [
      { href: "/admin/statistiques", icon: "chart", label: "Statistiques" },
      { href: "/admin/monetisation", icon: "coins", label: "Monétisation" },
      { href: "/admin/activite", icon: "activity", label: "Activité & corbeille" },
      { href: "/admin/reglages", icon: "settings", label: "Réglages" },
    ],
  },
];

export const SUBPAGES = {
  "/admin/concours/editer": "Éditeur",
  "/admin/concours/couverture": "Couverture & qualité",
  "/admin/concours/import": "Import groupé",
  "/admin/cours/editer": "Éditeur",
  "/admin/evaluations/editer": "Éditeur",
  "/admin/blog/editer": "Éditeur",
  "/admin/bac/editer": "Éditeur de chapitre",
  "/admin/annonces/editer": "Éditeur",
  "/admin/boutique/editer": "Fiche produit",
};

export const FLAT_NAV = NAV.flatMap((s) => s.items.map((i) => ({ ...i, group: s.label || "Général" })));

export function activeItem(pathname) {
  let best = null;
  for (const item of FLAT_NAV) {
    const match = item.exact ? pathname === item.href : pathname === item.href || pathname.startsWith(item.href + "/");
    if (match && (!best || item.href.length > best.href.length)) best = item;
  }
  return best;
}
