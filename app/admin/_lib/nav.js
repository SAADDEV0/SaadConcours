// Single source of truth for admin navigation — sidebar, mobile drawer,
// sub-nav strips, page headers/breadcrumbs and the command palette's
// "Navigation" section all read from this file instead of keeping their
// own copies in sync.

export const SECTIONS = [
  {
    label: null,
    items: [{ key: "dashboard", href: "/admin", icon: "📊", label: "Tableau de bord", exact: true }],
  },
  {
    label: "Contenu",
    items: [
      {
        key: "concours",
        href: "/admin/concours",
        icon: "📚",
        label: "Concours",
        children: [
          { key: "concours-liste", href: "/admin/concours", label: "Liste", exact: true },
          { key: "concours-pipeline", href: "/admin/concours?vue=pipeline", label: "Pipeline", basePath: "/admin/concours", query: { vue: "pipeline" } },
          { key: "concours-import", href: "/admin/concours/import", label: "Import groupé" },
          { key: "concours-filieres", href: "/admin/concours/filieres", label: "Filières" },
        ],
      },
      { key: "cours", href: "/admin/cours", icon: "📖", label: "Cours" },
      { key: "evaluation", href: "/admin/evaluation", icon: "📝", label: "Évaluation" },
      { key: "blog", href: "/admin/blog", icon: "📰", label: "Blog" },
    ],
  },
  {
    label: "Diffusion",
    items: [
      { key: "concours-ouverts", href: "/admin/concours-ouverts", icon: "🆕", label: "Concours ouverts" },
      { key: "reseaux", href: "/admin/reseaux", icon: "📣", label: "Réseaux sociaux" },
      {
        key: "alertes",
        href: "/admin/alertes",
        icon: "🔔",
        label: "Alertes email",
        children: [
          { key: "alertes-reglages", href: "/admin/alertes", label: "Réglages d'alerte", exact: true },
          { key: "alertes-composer", href: "/admin/alertes/composer", label: "Composer un envoi" },
          { key: "alertes-abonnes", href: "/admin/alertes/abonnes", label: "Abonnés" },
        ],
      },
    ],
  },
  {
    label: "Réglages",
    items: [
      {
        key: "reglages",
        href: "/admin/reglages",
        icon: "⚙️",
        label: "Réglages",
        children: [
          { key: "reglages-general", href: "/admin/reglages", label: "Général", exact: true },
          { key: "reglages-pdf", href: "/admin/reglages/pdf", label: "PDF" },
          { key: "reglages-publicite", href: "/admin/reglages/publicite", label: "Publicité" },
        ],
      },
    ],
  },
];

function stripQuery(href) {
  const i = href.indexOf("?");
  return i === -1 ? href : href.slice(0, i);
}

// Top-level item is "active" when the current path matches it or falls
// under one of its children's base paths (so "Concours" stays highlighted
// while on /admin/concours/import).
export function isItemActive(item, pathname) {
  const base = stripQuery(item.href);
  if (item.exact) return pathname === base;
  if (item.children) {
    return pathname === base || item.children.some((c) => pathname === (c.basePath || stripQuery(c.href)));
  }
  return pathname === base || pathname.startsWith(base + "/");
}

export function isChildActive(child, pathname, searchParams) {
  const base = child.basePath || stripQuery(child.href);
  if (pathname !== base) return false;
  if (!child.query) return child.exact ? true : !Object.keys(child.query || {}).some((k) => searchParams?.get(k));
  return Object.entries(child.query).every(([k, v]) => searchParams?.get(k) === v);
}

export function findActiveTrail(pathname, searchParams) {
  for (const section of SECTIONS) {
    for (const item of section.items) {
      if (!isItemActive(item, pathname)) continue;
      const child = item.children?.find((c) => isChildActive(c, pathname, searchParams));
      return { section, item, child };
    }
  }
  return { section: null, item: null, child: null };
}

// Flat list for the command palette / global search "Aller à…" section.
export const FLAT_NAV = SECTIONS.flatMap((section) =>
  section.items.flatMap((item) => [
    { key: item.key, href: item.href, icon: item.icon, label: item.label, group: section.label },
    ...(item.children || []).map((c) => ({
      key: c.key,
      href: c.href,
      icon: item.icon,
      label: `${item.label} · ${c.label}`,
      group: section.label,
    })),
  ])
);
