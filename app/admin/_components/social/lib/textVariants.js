import { daysUntil, difficultyStars, estimateReadingTime, formatDateFr, hasCorrige, joinLoc, urlFor } from "./contentTypes";

/* ------------------------------ Post text ------------------------------
 * Deux tons par type de contenu : "Standard" (direct, informatif — ce que
 * V2 générait) et "Accrocheur" (une accroche plus punchy en ouverture). Le
 * variant ne change que la ligne d'accroche + éventuellement l'appel à
 * l'action final ; le corps (lieu, matières, dates...) reste identique — un
 * ton se joue surtout dans les deux premières lignes qu'on lit avant de
 * cliquer "voir plus", pas dans les détails factuels.
 * ------------------------------------------------------------------------ */

export const VARIANTS = [
  { key: "standard", label: "Standard" },
  { key: "accrocheur", label: "Accrocheur" },
];

const HOOKS = {
  concours: [
    () => "📚 Nouveau sujet disponible sur SaadConcours",
    () => "📚 Tu révises ce concours ? Voici un sujet à travailler dès maintenant.",
  ],
  news: [
    (item, days, urgent) => (urgent ? `⏰ Ça ferme dans ${days} jour${days > 1 ? "s" : ""} !` : "🆕 Concours ouvert aux inscriptions"),
    (item, days, urgent) =>
      urgent ? `🚨 Dernière ligne droite : ${days} jour${days > 1 ? "s" : ""} pour t'inscrire.` : "📢 Nouvelle session d'inscriptions ouverte, ne traîne pas.",
  ],
  blog: [
    () => "📰 Nouvel article sur le blog SaadConcours",
    () => "📰 Un conseil qui peut vraiment changer ta préparation.",
  ],
  evaluation: [
    () => "📝 Nouvelle évaluation disponible",
    () => "🧠 Prêt à tester ton niveau ? Nouveau QCM en ligne.",
  ],
};

// texte "gratuit/sans compte" varie aussi d'accroche — le variant punchy
// pousse plutôt vers l'action immédiate que vers l'argument "gratuit".
const CTA = {
  concours: [
    "Gratuit, sans compte, sans pub.",
    "👉 Ouvre-le et entraîne-toi maintenant.",
  ],
  blog: [
    "Gratuit, sans compte, sans pub.",
    "👉 5 minutes de lecture qui peuvent tout changer.",
  ],
};

function hookLine(kind, item, variant, days, urgent) {
  const fn = HOOKS[kind][variant] || HOOKS[kind][0];
  return fn(item, days, urgent);
}

function ctaLine(kind, variant) {
  const pair = CTA[kind];
  if (!pair) return null;
  return pair[variant] || pair[0];
}

export function buildText(kind, item, { variant = 0, hashtags = "" } = {}) {
  const url = urlFor(kind, item);

  if (kind === "concours") {
    const modulesLine = item.modules?.length ? `🧾 Matières : ${item.modules.slice(0, 3).join(" • ")}` : null;
    const stars = difficultyStars(item.difficulte);
    const lines = [
      hookLine(kind, item, variant),
      "",
      joinLoc(item.etablissement, item.ville),
      item.filiere || null,
      modulesLine,
      item.annee ? `📅 Session ${item.annee}` : null,
      stars ? `🎯 Difficulté : ${stars}` : null,
      "",
      hasCorrige(item) ? "✅ Corrigé indicatif inclus" : "📄 Sujet avec énoncé complet",
      "",
      `👉 ${url}`,
      "",
      ctaLine(kind, variant),
      "",
      hashtags,
    ];
    return lines.filter((l) => l !== null && l !== undefined).join("\n");
  }

  if (kind === "news") {
    const days = daysUntil(item.date_limite);
    const urgent = days !== null && days >= 0 && days <= 7;
    // date_publication est la date où l'actu a été détectée (scraper ou
    // ajout manuel) — le meilleur proxy réel et déjà disponible de "date
    // d'ouverture des inscriptions", sans inventer un champ inexistant.
    const openLine = item.date_publication ? `📅 Ouvert depuis le ${formatDateFr(item.date_publication)}` : null;
    const limitLine = item.date_limite ? `⏰ Date limite : ${formatDateFr(item.date_limite)}` : null;

    const lines = [
      hookLine(kind, item, variant, days, urgent),
      "",
      item.titre || "",
      joinLoc(item.etablissement, item.ville),
      item.filiere ? `🎓 ${item.filiere}` : null,
      openLine,
      limitLine,
      item.lien_inscription ? `🔗 Inscription : ${item.lien_inscription}` : null,
      "",
      `👉 ${url}`,
      "",
      hashtags,
    ];
    return lines.filter((l) => l !== null && l !== undefined).join("\n");
  }

  if (kind === "blog") {
    const readMin = estimateReadingTime(item.content);
    const lines = [
      hookLine(kind, item, variant),
      "",
      item.title || "",
      "",
      item.excerpt || "",
      "",
      `⏱ ${readMin} min de lecture`,
      "",
      `👉 ${url}`,
      "",
      ctaLine(kind, variant),
      "",
      hashtags,
    ];
    return lines.filter((l) => l !== null && l !== undefined).join("\n");
  }

  // evaluation
  const nbQ = (item.questions || []).length;
  const nbCh = (item.chapters || []).length;
  const lines = [
    hookLine(kind, item, variant),
    "",
    item.module || "",
    item.title || "",
    item.description || null,
    "",
    `🧠 ${nbQ} question${nbQ > 1 ? "s" : ""} QCM${nbCh ? ` • ${nbCh} chapitre${nbCh > 1 ? "s" : ""}` : ""}`,
    "✅ Corrigé + score instantané",
    "",
    `👉 ${url}`,
    "",
    hashtags,
  ];
  return lines.filter((l) => l !== null && l !== undefined).join("\n");
}
