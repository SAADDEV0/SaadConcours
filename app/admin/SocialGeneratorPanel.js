"use client";

import { useEffect, useMemo, useRef, useState } from "react";

/* -------------------------------------------------------------------
 * V2 — Turns a concours, une actu "concours ouvert", un article de blog
 * ou une évaluation en un texte prêt à coller (Instagram/Facebook/
 * WhatsApp) + une image partageable, générés côté client sur un
 * <canvas> (pas de dépendance de génération d'image, pas d'aller-retour
 * serveur). Toujours "tu génères, tu postes toi-même" — pas d'API
 * Instagram/Facebook branchée ici, juste rendre chaque post manuel
 * 10 fois plus rapide qu'à l'écrire/designer à la main.
 * ---------------------------------------------------------------- */

const SITE_URL = "https://www.saadconcours.space";
const MAX_HASHTAGS = 10;

// Presets instead of raw width/height inputs — la vraie question c'est
// "pour quelle plateforme/placement je poste", les pixels ne sont que ce
// qui en découle. Chaque format redessine la même mise en page à une
// taille de canvas différente (voir drawCard, tout est en unités
// proportionnelles).
const FORMATS = [
  { key: "carre", label: "Carré", sub: "Post Instagram / Facebook", width: 1080, height: 1080 },
  { key: "portrait", label: "Portrait", sub: "Post Instagram (recommandé)", width: 1080, height: 1350 },
  { key: "story", label: "Story", sub: "Story IG/FB · Statut WhatsApp", width: 1080, height: 1920 },
  { key: "paysage", label: "Paysage", sub: "Partage lien Facebook", width: 1200, height: 630 },
];

/* ------------------------------ Content types ------------------------------
 * Un seul générateur, quatre sources de contenu. Chaque type sait comment
 * se lister (recherche/tri), se lier (URL publique) et se raconter (texte +
 * image) — le reste du composant reste générique.
 * ---------------------------------------------------------------------- */

const CONTENT_TYPES = [
  {
    key: "concours",
    tabIcon: "📚",
    tabLabel: "Concours",
    endpoint: "/api/concours",
    // getAllConcours() renvoie la liste dans l'ordre du fichier (ajout en
    // fin de tableau) donc il faut inverser pour avoir le plus récent en
    // premier.
    reverseForRecent: true,
    filterAvailable: (list) => list,
    searchText: (i) => `${i.etablissement || ""} ${i.ville || ""} ${i.filiere || ""} ${i.annee || ""}`,
    listTitle: (i) => i.etablissement || i.id,
    listMeta: (i) => [i.ville, i.filiere, i.annee].filter(Boolean).join(" · "),
    listRight: () => null,
  },
  {
    key: "news",
    tabIcon: "🆕",
    tabLabel: "Concours ouverts",
    endpoint: "/api/news",
    // getAllNews() trie déjà par date_publication décroissante — inverser
    // ici remettrait les plus anciens en premier (c'était un vrai bug côté
    // v1 : le tri était annulé par un .reverse() en trop).
    reverseForRecent: false,
    filterAvailable: (list) => list.filter((n) => !n.cloture),
    searchText: (i) => `${i.titre || ""} ${i.etablissement || ""} ${i.ville || ""} ${i.filiere || ""}`,
    listTitle: (i) => i.titre,
    listMeta: (i) => [i.etablissement, i.ville].filter(Boolean).join(" · "),
    listRight: (i) => i.date_limite || "—",
  },
  {
    key: "blog",
    tabIcon: "📰",
    tabLabel: "Blog",
    endpoint: "/api/blog",
    // getAllBlog() trie déjà par publishedAt décroissant — même raison que
    // "news" ci-dessus, pas de .reverse() ici.
    reverseForRecent: false,
    // Seuls les articles publiés (available) ont une page publique — pas
    // question de générer un post qui pointe vers un brouillon en 404.
    filterAvailable: (list) => list.filter((b) => b.available),
    searchText: (i) => `${i.title || ""} ${i.excerpt || ""}`,
    listTitle: (i) => i.title,
    listMeta: (i) => truncate(i.excerpt, 70),
    listRight: (i) => i.publishedAt || "—",
  },
  {
    key: "evaluation",
    tabIcon: "📝",
    tabLabel: "Évaluation",
    endpoint: "/api/quiz",
    // getAllQuiz() renvoie l'ordre brut du fichier, comme concours.
    reverseForRecent: true,
    // Même logique que blog : une évaluation non "available" n'est pas
    // ouvrable sur /evaluation/[id].
    filterAvailable: (list) => list.filter((q) => q.available),
    searchText: (i) => `${i.title || ""} ${i.module || ""} ${i.description || ""}`,
    listTitle: (i) => i.title || i.module,
    listMeta: (i) => `${i.module || ""} · ${(i.questions || []).length} questions`,
    listRight: () => null,
  },
];

function typeMetaFor(key) {
  return CONTENT_TYPES.find((t) => t.key === key);
}

function urlFor(kind, item) {
  if (kind === "concours") return `${SITE_URL}/concours/${item.id}`;
  if (kind === "news") return `${SITE_URL}/news/${item.id}`;
  if (kind === "blog") return `${SITE_URL}/blog/${item.id}`;
  return `${SITE_URL}/evaluation/${item.id}`;
}

function hasCorrige(item) {
  // corrige_from_github est calculé côté API (/api/concours) quand un
  // corrigé existe dans data/corriges/ sans être recopié dans le champ
  // corrige_md — l'ignorer faisait dire "sujet sans corrigé" à tort.
  return Boolean(item.corrige_md || item.corrige_from_github);
}

/* --------------------------------- Utils --------------------------------- */

function daysUntil(dateStr) {
  if (!dateStr) return null;
  return Math.round((new Date(dateStr + "T00:00:00") - new Date(new Date().toDateString())) / 86400000);
}

function joinLoc(a, b) {
  return [a, b].filter(Boolean).join(" — ");
}

function formatDateFr(dateStr) {
  if (!dateStr) return null;
  try {
    return new Date(dateStr + "T00:00:00").toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" });
  } catch {
    return dateStr;
  }
}

function truncate(s, n) {
  const str = String(s || "");
  return str.length > n ? str.slice(0, n - 1).trimEnd() + "…" : str;
}

function difficultyStars(d) {
  const m = String(d || "").match(/(\d+)\s*\/\s*(\d+)/);
  if (!m) return null;
  const total = parseInt(m[2], 10) || 5;
  const n = Math.min(parseInt(m[1], 10) || 0, total);
  return "★".repeat(n) + "☆".repeat(Math.max(0, total - n));
}

function estimateReadingTime(markdown) {
  const words = String(markdown || "")
    .replace(/[#*_>`|-]/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

/* ------------------------------ SEO hashtags ------------------------------
 * Quelques tags précis et pertinents battent trente tags génériques (pour
 * le classement Instagram comme pour ne pas avoir l'air spammy) : un socle
 * de 3 tags de marque/catégorie par type de contenu, complété par ce qui
 * est spécifique à l'item (filière, établissement, ville, module...), puis
 * quelques tags de portée plus large tant qu'il reste de la place — total
 * plafonné à MAX_HASHTAGS.
 * ------------------------------------------------------------------------ */

const HASHTAG_POOLS = {
  concours: ["#ConcoursMaroc", "#MasterMaroc", "#EtudiantMaroc", "#EtudesMaroc", "#ConcoursAccesMaster"],
  news: ["#ConcoursMaroc", "#InscriptionOuverte", "#MasterMaroc", "#EtudiantMaroc", "#OpportuniteEtudes"],
  blog: ["#ConseilsEtudes", "#MethodeDeTravail", "#MasterMaroc", "#ConcoursMaroc", "#ReussiteEtudiante"],
  evaluation: ["#QCM", "#RevisionMaster", "#EntrainementConcours", "#ConcoursMaroc", "#MasterMaroc"],
};

// Petits mots vides français exclus des hashtags — "AuditEtFiscale" lit
// moins bien et n'apporte rien à la découvrabilité vs "AuditFiscale".
const HASHTAG_STOPWORDS = new Set(["et", "de", "des", "du", "la", "le", "les", "en", "au", "aux", "d", "l"]);
// Un hashtag composé de trop de mots (souvent un intitulé long recopié
// tel quel, ex. master_reel) a l'air spammy et personne ne le cherche —
// mieux vaut l'omettre que le générer.
const HASHTAG_MAX_LEN = 28;

function toHashtag(s) {
  const cleaned = String(s || "")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim();
  if (!cleaned) return null;
  const tag =
    "#" +
    cleaned
      .split(" ")
      .filter(Boolean)
      .filter((w) => !HASHTAG_STOPWORDS.has(w.toLowerCase()))
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
      .join("");
  return tag.length > 1 && tag.length <= HASHTAG_MAX_LEN ? tag : null;
}

function buildHashtags(kind, item) {
  const pool = HASHTAG_POOLS[kind];
  const tags = new Set(pool.slice(0, 3));

  function addSpecific(val, mapFn) {
    if (tags.size >= MAX_HASHTAGS) return;
    const t = mapFn ? mapFn(val) : toHashtag(val);
    if (t) tags.add(t);
  }

  if (kind === "concours") {
    addSpecific(item.filiere);
    addSpecific(item.etablissement);
    if (item.ville && tags.size < MAX_HASHTAGS) {
      const v = toHashtag(item.ville);
      if (v) tags.add("#Concours" + v.slice(1));
    }
    addSpecific(item.master_reel);
  } else if (kind === "news") {
    addSpecific(item.etablissement);
    if (item.ville && tags.size < MAX_HASHTAGS) {
      const v = toHashtag(item.ville);
      if (v) tags.add("#Concours" + v.slice(1));
    }
    addSpecific(item.filiere);
  } else if (kind === "evaluation") {
    addSpecific(item.module);
  }

  for (const t of pool.slice(3)) {
    if (tags.size >= MAX_HASHTAGS) break;
    tags.add(t);
  }
  return [...tags].slice(0, MAX_HASHTAGS);
}

/* ------------------------------ Post text ------------------------------ */

function buildText(kind, item) {
  const hashtags = buildHashtags(kind, item).join(" ");
  const url = urlFor(kind, item);

  if (kind === "concours") {
    const modulesLine = item.modules?.length ? `🧾 Matières : ${item.modules.slice(0, 3).join(" • ")}` : null;
    const stars = difficultyStars(item.difficulte);
    const lines = [
      "📚 Nouveau sujet disponible sur SaadConcours",
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
      "Gratuit, sans compte, sans pub.",
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
      urgent ? `⏰ Ça ferme dans ${days} jour${days > 1 ? "s" : ""} !` : "🆕 Concours ouvert aux inscriptions",
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
      "📰 Nouvel article sur le blog SaadConcours",
      "",
      item.title || "",
      "",
      item.excerpt || "",
      "",
      `⏱ ${readMin} min de lecture`,
      "",
      `👉 ${url}`,
      "",
      "Gratuit, sans compte, sans pub.",
      "",
      hashtags,
    ];
    return lines.filter((l) => l !== null && l !== undefined).join("\n");
  }

  // evaluation
  const nbQ = (item.questions || []).length;
  const nbCh = (item.chapters || []).length;
  const lines = [
    "📝 Nouvelle évaluation disponible",
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

function wrapLines(ctx, text, maxWidth) {
  const words = String(text || "").split(" ");
  const lines = [];
  let line = "";
  for (const word of words) {
    const test = line ? line + " " + word : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);
  return lines;
}

// ctx.roundRect() n'existe que depuis Chrome 99 / Safari 16.4 — on dessine
// le chemin à la main pour que l'image se génère pareil sur n'importe quel
// navigateur utilisé côté admin.
function roundedRect(ctx, x, y, w, h, r) {
  const rad = Math.max(0, Math.min(r, w / 2, h / 2));
  ctx.beginPath();
  ctx.moveTo(x + rad, y);
  ctx.arcTo(x + w, y, x + w, y + h, rad);
  ctx.arcTo(x + w, y + h, x, y + h, rad);
  ctx.arcTo(x, y + h, x, y, rad);
  ctx.arcTo(x, y, x + w, y, rad);
  ctx.closePath();
}

/* --------------------------------- Image ---------------------------------
 * Chaque position/taille est une fraction de `unit` (le plus petit côté du
 * canvas) donc le même code de dessin produit un bon résultat en 1080x1080,
 * 1080x1920 (story) ou 1200x630 (paysage) sans branches par format. Un
 * dégradé + badge dédiés par type de contenu (concours/news/blog/
 * évaluation) pour que l'image donne d'un coup d'œil le type de post.
 * ------------------------------------------------------------------------ */

const THEMES = {
  concours: { grad: ["#4338ca", "#7c3aed", "#c026d3"], accent: "#a21caf" },
  news: { grad: ["#c2410c", "#ea580c", "#f59e0b"], accent: "#9a3412" },
  blog: { grad: ["#0e7490", "#0891b2", "#06b6d4"], accent: "#0e7490" },
  evaluation: { grad: ["#15803d", "#16a34a", "#22c55e"], accent: "#065f46" },
};

function drawCard(canvas, kind, item) {
  const ctx = canvas.getContext("2d");
  const W = canvas.width;
  const H = canvas.height;
  const unit = Math.min(W, H);
  const pad = Math.round(unit * 0.075);
  // Format Story (1080x1920) : Instagram/WhatsApp couvrent le haut (avatar +
  // bouton fermer) et le bas (barre de réponse) de l'interface — on réserve
  // une "zone de sécurité" en plus du padding normal pour ces deux formats
  // très allongés, quel que soit leur libellé exact.
  const isTall = H / W >= 1.5;
  const safeTop = isTall ? unit * 0.09 : 0;
  const safeBottom = isTall ? unit * 0.1 : 0;
  const theme = THEMES[kind];

  const grad = ctx.createLinearGradient(0, 0, W, H);
  grad.addColorStop(0, theme.grad[0]);
  grad.addColorStop(0.55, theme.grad[1]);
  grad.addColorStop(1, theme.grad[2]);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  // Deux cercles décoratifs discrets — volontairement minimal ("attractif
  // mais simple" veut dire retenue, pas plus de formes).
  ctx.fillStyle = "rgba(255,255,255,0.08)";
  ctx.beginPath();
  ctx.arc(W * 0.92, H * 0.05, unit * 0.24, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(W * 0.02, H, unit * 0.2, 0, Math.PI * 2);
  ctx.fill();

  // Voile en bas pour garder le footer lisible quel que soit l'endroit où
  // tombe le dégradé à cette hauteur.
  const scrim = ctx.createLinearGradient(0, H * 0.8, 0, H);
  scrim.addColorStop(0, "rgba(0,0,0,0)");
  scrim.addColorStop(1, "rgba(0,0,0,0.32)");
  ctx.fillStyle = scrim;
  ctx.fillRect(0, H * 0.8, W, H * 0.2);

  // Sceau de marque, coin haut-droit — repère visuel constant même quand le
  // titre est long et pousse tout le reste vers le bas.
  const sealR = unit * 0.05;
  const sealCx = W - pad - sealR;
  const sealCy = pad + sealR + safeTop;
  ctx.fillStyle = "rgba(255,255,255,0.16)";
  ctx.beginPath();
  ctx.arc(sealCx, sealCy, sealR, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#fff";
  ctx.font = `800 ${Math.round(sealR * 1.15)}px system-ui, sans-serif`;
  ctx.textAlign = "center";
  ctx.fillText("S", sealCx, sealCy + sealR * 0.35);
  ctx.textAlign = "left";

  const days = kind === "news" ? daysUntil(item.date_limite) : null;
  const urgent = days !== null && days >= 0 && days <= 7;

  let y = pad + unit * 0.06 + safeTop;
  ctx.textBaseline = "alphabetic";

  // Badge en évidence
  const BADGES = {
    concours: "NOUVEAU SUJET",
    news: urgent ? `FERME DANS ${days} J` : "CONCOURS OUVERT",
    blog: "NOUVEL ARTICLE",
    evaluation: "QCM GRATUIT",
  };
  const badgeText = BADGES[kind];
  ctx.font = `700 ${Math.round(unit * 0.028)}px system-ui, sans-serif`;
  const badgeH = unit * 0.052;
  const badgeW = ctx.measureText(badgeText).width + unit * 0.05;
  ctx.fillStyle = urgent ? "#fff" : "rgba(255,255,255,0.18)";
  roundedRect(ctx, pad, y, badgeW, badgeH, badgeH / 2);
  ctx.fill();
  ctx.fillStyle = urgent ? theme.accent : "#fff";
  ctx.fillText(badgeText, pad + unit * 0.025, y + badgeH * 0.65);
  y += badgeH + unit * 0.06;

  // Titre
  ctx.fillStyle = "#fff";
  ctx.font = `800 ${Math.round(unit * 0.066)}px system-ui, sans-serif`;
  ctx.shadowColor = "rgba(0,0,0,0.18)";
  ctx.shadowBlur = unit * 0.012;
  const TITLES = {
    concours: item.etablissement || item.id,
    news: item.titre || "",
    blog: item.title || "",
    evaluation: item.title || item.module || "",
  };
  const titleLines = wrapLines(ctx, TITLES[kind], W - pad * 2).slice(0, 3);
  const titleLH = unit * 0.08;
  titleLines.forEach((line) => {
    y += titleLH;
    ctx.fillText(line, pad, y);
  });
  ctx.shadowBlur = 0;
  y += unit * 0.02;

  // Pastilles méta
  const nbQ = (item.questions || []).length;
  const nbCh = (item.chapters || []).length;
  const PILLS = {
    concours: [item.filiere, item.ville, item.annee].filter(Boolean),
    news: [item.etablissement, item.ville].filter(Boolean),
    blog: [`⏱ ${estimateReadingTime(item.content)} min`, item.publishedAt ? formatDateFr(item.publishedAt) : null].filter(Boolean),
    evaluation: [item.module, nbQ ? `${nbQ} questions` : null, nbCh ? `${nbCh} chapitres` : null].filter(Boolean),
  };
  const pillItems = PILLS[kind];
  if (pillItems.length) {
    y += unit * 0.045;
    ctx.font = `600 ${Math.round(unit * 0.032)}px system-ui, sans-serif`;
    let x = pad;
    const pillH = unit * 0.052;
    pillItems.slice(0, 3).forEach((txt) => {
      const w = ctx.measureText(txt).width + unit * 0.045;
      if (x + w > W - pad) return;
      ctx.fillStyle = "rgba(255,255,255,0.16)";
      roundedRect(ctx, x, y, w, pillH, pillH / 2);
      ctx.fill();
      ctx.fillStyle = "#fff";
      ctx.fillText(txt, x + unit * 0.022, y + pillH * 0.66);
      x += w + unit * 0.02;
    });
    y += pillH;
  }

  // Bloc additionnel, spécifique au type de contenu.
  if (kind === "news") {
    const openStr = item.date_publication ? formatDateFr(item.date_publication) : null;
    const limitStr = item.date_limite ? formatDateFr(item.date_limite) : null;
    ctx.font = `700 ${Math.round(unit * 0.038)}px system-ui, sans-serif`;
    if (openStr) {
      y += unit * 0.07;
      ctx.fillStyle = "rgba(255,255,255,0.92)";
      ctx.fillText(`📅 Ouvert depuis le ${openStr}`, pad, y);
    }
    if (limitStr) {
      y += unit * 0.055;
      ctx.fillStyle = urgent ? "#ffe28a" : "#fff";
      ctx.fillText(`⏰ Date limite : ${limitStr}`, pad, y);
    }
  } else if (kind === "blog" && item.excerpt) {
    y += unit * 0.06;
    ctx.font = `500 ${Math.round(unit * 0.034)}px system-ui, sans-serif`;
    ctx.fillStyle = "rgba(255,255,255,0.92)";
    const excerptLines = wrapLines(ctx, item.excerpt, W - pad * 2).slice(0, isTall ? 6 : 3);
    excerptLines.forEach((line) => {
      y += unit * 0.048;
      ctx.fillText(line, pad, y);
    });
  } else if (kind === "evaluation") {
    y += unit * 0.07;
    ctx.font = `700 ${Math.round(unit * 0.038)}px system-ui, sans-serif`;
    ctx.fillStyle = "rgba(255,255,255,0.92)";
    ctx.fillText("✅ Corrigé + score instantané", pad, y);
  } else if (kind === "concours") {
    y += unit * 0.07;
    ctx.font = `700 ${Math.round(unit * 0.038)}px system-ui, sans-serif`;
    ctx.fillStyle = "rgba(255,255,255,0.92)";
    ctx.fillText(hasCorrige(item) ? "✅ Corrigé indicatif inclus" : "📄 Énoncé complet disponible", pad, y);
  }

  // Footer, toujours ancré en bas quelle que soit la hauteur du canvas
  // (le format story a beaucoup d'espace vide au-dessus, volontairement).
  const footerY = H - pad - unit * 0.01 - safeBottom;
  ctx.font = `800 ${Math.round(unit * 0.042)}px system-ui, sans-serif`;
  ctx.fillStyle = "#fff";
  ctx.fillText("SaadConcours", pad, footerY - unit * 0.045);
  ctx.font = `500 ${Math.round(unit * 0.028)}px system-ui, sans-serif`;
  ctx.fillStyle = "rgba(255,255,255,0.82)";
  ctx.fillText("saadconcours.space — gratuit, sans compte", pad, footerY);
}

/* --------------------------- Vérification SEO/format --------------------------- */

function seoChecks(text, hashtagCount) {
  const chars = text.trim().length;
  const hasLink = text.includes(SITE_URL);
  return [
    {
      ok: chars > 0 && chars <= 2200,
      label: `${chars} caractères`,
      hint:
        chars > 2200
          ? "Dépasse la limite d'un caption Instagram (2200 caractères) — le texte sera coupé."
          : chars < 60
          ? "Un peu court : ajoute un peu de contexte pour donner envie de cliquer."
          : "Longueur adaptée à Instagram/Facebook.",
    },
    {
      ok: hashtagCount >= 5 && hashtagCount <= MAX_HASHTAGS,
      label: `${hashtagCount} hashtags`,
      hint:
        hashtagCount < 5
          ? "Ajoute quelques hashtags pertinents pour gagner en portée."
          : "Bon équilibre entre portée et pertinence.",
    },
    {
      ok: hasLink,
      label: "Lien inclus",
      hint: hasLink ? "Le lien vers la page est bien présent dans le texte." : "Aucun lien détecté — vérifie le texte généré.",
    },
  ];
}

/* ------------------------------ Aperçu plateformes ------------------------------
 * Chaque appli tronque les captions différemment — on reproduit
 * approximativement ces seuils pour que l'aperçu ressemble à ce que verra
 * réellement un visiteur avant de cliquer sur "... voir plus".
 * ------------------------------------------------------------------------ */

function truncateCaption(text, limit) {
  const clean = text.trim();
  if (clean.length <= limit) return { shown: clean, truncated: false };
  let cut = clean.slice(0, limit);
  const lastBreak = Math.max(cut.lastIndexOf("\n"), cut.lastIndexOf(" "));
  if (lastBreak > limit * 0.6) cut = cut.slice(0, lastBreak);
  return { shown: cut, truncated: true };
}

function FacebookPreview({ imgSrc, text }) {
  const { shown, truncated } = truncateCaption(text, 477);
  return (
    <div className="pf-mock pf-mock-fb">
      <div className="pf-mock-head">
        <div className="pf-mock-avatar">S</div>
        <div>
          <div className="pf-mock-name">SaadConcours</div>
          <div className="pf-mock-time">à l'instant · 🌐</div>
        </div>
      </div>
      <div className="pf-mock-caption">
        {shown}
        {truncated && <span className="pf-mock-truncate"> … Voir plus</span>}
      </div>
      {imgSrc && <img className="pf-mock-image" src={imgSrc} alt="" />}
      <div className="pf-mock-actions">
        <span>👍 J'aime</span>
        <span>💬 Commenter</span>
        <span>↗ Partager</span>
      </div>
    </div>
  );
}

function InstagramPreview({ imgSrc, text }) {
  const { shown, truncated } = truncateCaption(text, 125);
  return (
    <div className="pf-mock pf-mock-ig">
      <div className="pf-mock-head">
        <div className="pf-mock-avatar">S</div>
        <div>
          <div className="pf-mock-name">saadconcours.space</div>
        </div>
        <div className="pf-mock-more">•••</div>
      </div>
      {imgSrc && <img className="pf-mock-image square" src={imgSrc} alt="" />}
      <div className="pf-mock-icons">
        <span>♡</span>
        <span>💬</span>
        <span>➤</span>
        <span className="pf-mock-icons-save">🔖</span>
      </div>
      <div className="pf-mock-caption">
        <strong>saadconcours.space</strong> {shown}
        {truncated && <span className="pf-mock-truncate"> … plus</span>}
      </div>
    </div>
  );
}

function WhatsAppPreview({ imgSrc, text }) {
  const { shown, truncated } = truncateCaption(text, 320);
  return (
    <div className="pf-mock pf-mock-wa">
      <div className="pf-mock-wa-bubble">
        {imgSrc && <img className="pf-mock-image" src={imgSrc} alt="" />}
        <div className="pf-mock-wa-caption">
          {shown}
          {truncated && <span className="pf-mock-truncate">…</span>}
        </div>
        <div className="pf-mock-wa-meta">14:32 ✓✓</div>
      </div>
    </div>
  );
}

export default function SocialGeneratorPanel() {
  const [tab, setTab] = useState("concours");
  const [raw, setRaw] = useState({ concours: null, news: null, blog: null, evaluation: null });
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const [format, setFormat] = useState(FORMATS[0]);
  const [imgSrc, setImgSrc] = useState(null);
  const [copied, setCopied] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    CONTENT_TYPES.forEach((t) => {
      fetch(t.endpoint)
        .then((r) => r.json())
        .then((d) => setRaw((prev) => ({ ...prev, [t.key]: Array.isArray(d) ? d : [] })))
        .catch(() => setRaw((prev) => ({ ...prev, [t.key]: [] })));
    });
  }, []);

  const meta = typeMetaFor(tab);
  const list = raw[tab];

  const filtered = useMemo(() => {
    if (!list) return null;
    const q = query.trim().toLowerCase();
    let src = meta.filterAvailable(list);
    src = meta.reverseForRecent ? [...src].reverse() : [...src];
    if (!q) return src.slice(0, 25);
    return src.filter((i) => meta.searchText(i).toLowerCase().includes(q)).slice(0, 25);
  }, [list, query, meta]);

  const text = selected ? buildText(tab, selected) : "";
  const hashtagCount = selected ? buildHashtags(tab, selected).length : 0;
  const checks = selected ? seoChecks(text, hashtagCount) : [];

  useEffect(() => {
    if (!selected || !canvasRef.current) return;
    const canvas = canvasRef.current;
    canvas.width = format.width;
    canvas.height = format.height;
    drawCard(canvas, tab, selected);
    setImgSrc(canvas.toDataURL("image/png"));
  }, [selected, tab, format]);

  function switchTab(key) {
    setTab(key);
    setSelected(null);
    setQuery("");
    setCopied(false);
  }

  function pick(item) {
    setSelected(item);
    setCopied(false);
  }

  async function copyText() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // API clipboard indisponible (non-HTTPS/local) — le textarea reste
      // sélectionnable/copiable à la main en secours.
    }
  }

  function downloadImage() {
    if (!canvasRef.current) return;
    const link = document.createElement("a");
    link.download = `saadconcours-${tab}-${format.key}-${selected?.id || "post"}.png`;
    link.href = canvasRef.current.toDataURL("image/png");
    link.click();
  }

  return (
    <div>
      <div className="admin-card">
        <h2 style={{ marginTop: 0, fontSize: "1.05rem" }}>📣 Générateur de post</h2>
        <p className="admin-image-hint" style={{ marginBottom: 16 }}>
          Choisis un concours, une actu "concours ouvert", un article de blog ou une évaluation : récupère un texte
          prêt à coller (avec hashtags ciblés SEO) et une image générée automatiquement — pour Instagram, Facebook ou
          le canal WhatsApp.
        </p>

        <div className="admin-view-toggle social-gen-tabs" style={{ marginBottom: 14 }}>
          {CONTENT_TYPES.map((t) => (
            <button
              type="button"
              key={t.key}
              className={"admin-view-toggle-btn" + (tab === t.key ? " active" : "")}
              style={tab === t.key ? { background: THEMES[t.key].grad[1] } : undefined}
              onClick={() => switchTab(t.key)}
            >
              {t.tabIcon} {t.tabLabel}
            </button>
          ))}
        </div>

        <input
          className="admin-search-input"
          style={{ width: "100%", marginBottom: 10 }}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher..."
        />

        <div className="picker-list">
          {filtered === null && <div className="empty-state">Chargement...</div>}
          {filtered !== null &&
            filtered.map((item) => (
              <label className="picker-row" key={item.id} onClick={() => pick(item)}>
                <span className="picker-row-main">
                  <span className="picker-row-title">{meta.listTitle(item)}</span>
                  <span className="picker-row-meta">{meta.listMeta(item)}</span>
                </span>
                {meta.listRight(item) && <span className="picker-row-date">{meta.listRight(item)}</span>}
              </label>
            ))}
          {filtered !== null && !filtered.length && <div className="empty-state">Aucun résultat.</div>}
        </div>
      </div>

      {selected && (
        <>
          <div className="social-gen-result">
            <div className="admin-card">
              <h2 style={{ marginTop: 0, fontSize: "1.05rem" }}>Texte (avec tags SEO)</h2>
              <textarea readOnly style={{ minHeight: 240, fontFamily: "monospace", fontSize: ".85rem" }} value={text} />

              <div className="seo-checks">
                {checks.map((c) => (
                  <span key={c.label} className={"seo-check-chip" + (c.ok ? " ok" : " warn")} title={c.hint}>
                    {c.ok ? "✅" : "⚠️"} {c.label}
                  </span>
                ))}
              </div>

              <div className="admin-row-actions" style={{ marginTop: 10 }}>
                <button type="button" className="admin-btn" onClick={copyText}>
                  {copied ? "✓ Copié" : "Copier le texte"}
                </button>
              </div>
            </div>

            <div className="admin-card">
              <h2 style={{ marginTop: 0, fontSize: "1.05rem" }}>
                Image ({format.width}×{format.height})
              </h2>
              <div className="format-picker">
                {FORMATS.map((f) => (
                  <button
                    type="button"
                    key={f.key}
                    className={"format-picker-btn" + (f.key === format.key ? " active" : "")}
                    onClick={() => setFormat(f)}
                  >
                    <strong>{f.label}</strong>
                    <span>{f.sub}</span>
                  </button>
                ))}
              </div>
              <canvas
                ref={canvasRef}
                width={format.width}
                height={format.height}
                className="social-gen-canvas"
                style={{ aspectRatio: `${format.width} / ${format.height}` }}
              />
              <div className="admin-row-actions" style={{ marginTop: 10 }}>
                <button type="button" className="admin-btn" onClick={downloadImage}>
                  ⬇ Télécharger l'image
                </button>
              </div>
            </div>
          </div>

          <div className="admin-card" style={{ marginTop: 18 }}>
            <h2 style={{ marginTop: 0, fontSize: "1.05rem" }}>Aperçu sur les réseaux</h2>
            <p className="admin-image-hint" style={{ marginBottom: 16 }}>
              Rendu approximatif (troncature de la légende incluse) — la mise en page réelle varie légèrement selon
              l'app et l'appareil.
            </p>
            <div className="social-preview-grid">
              <div className="social-preview-col">
                <div className="social-preview-label">Facebook</div>
                <FacebookPreview imgSrc={imgSrc} text={text} />
              </div>
              <div className="social-preview-col">
                <div className="social-preview-label">Instagram</div>
                <InstagramPreview imgSrc={imgSrc} text={text} />
              </div>
              <div className="social-preview-col">
                <div className="social-preview-label">WhatsApp</div>
                <WhatsAppPreview imgSrc={imgSrc} text={text} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
