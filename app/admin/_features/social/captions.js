// Textes des publications, un par réseau.
//
// L'ancien studio produisait UN texte recopié partout. Or chaque réseau a
// ses règles : pas de lien cliquable sur Instagram (« lien dans la bio »),
// 280 caractères sur X, *gras* façon WhatsApp, ton plus sobre sur LinkedIn.
// Chaque lien porte des paramètres UTM : les statistiques du site disent
// ensuite quel réseau amène vraiment des visiteurs.

import { SITE } from "../../_lib/collections";
import { boutiqueNiveau, formatPrix } from "@/lib/boutique";
import { daysUntil, dateFr, normalize } from "../../_lib/format";

export const PLATFORMS = [
  { key: "facebook", label: "Facebook", color: "#1877F2", short: "f", limit: 5000 },
  { key: "instagram", label: "Instagram", color: "#DD2A7B", gradient: "linear-gradient(135deg,#f58529,#dd2a7b 55%,#515bd4)", short: "IG", limit: 2200 },
  { key: "whatsapp", label: "WhatsApp", color: "#25D366", short: "WA", limit: 4000 },
  { key: "telegram", label: "Telegram", color: "#2AABEE", short: "TG", limit: 4000 },
  { key: "linkedin", label: "LinkedIn", color: "#0A66C2", short: "in", limit: 3000 },
  { key: "x", label: "X", color: "#0f1419", short: "X", limit: 280 },
];

export const TONES = [
  { value: "info", label: "Informatif" },
  { value: "motivant", label: "Motivant" },
  { value: "urgent", label: "Urgent" },
];

export const CONTENT_KINDS = [
  { key: "concours", label: "Concours", emoji: "📝" },
  { key: "news", label: "Concours ouverts", emoji: "🔔" },
  { key: "cours", label: "Cours", emoji: "📚" },
  { key: "quiz", label: "Évaluations", emoji: "✅" },
  { key: "blog", label: "Articles", emoji: "✍️" },
  { key: "boutique", label: "Boutique", emoji: "🛒" },
];

export function pathFor(kind, item) {
  switch (kind) {
    case "concours":
      return `/concours/${encodeURIComponent(item.id)}`;
    case "cours":
      return `/cours/${encodeURIComponent(item.id)}`;
    case "quiz":
      return `/evaluation/${encodeURIComponent(item.id)}`;
    case "blog":
      return `/blog/${encodeURIComponent(item.id)}`;
    case "boutique":
      return `/boutique/${encodeURIComponent(item.id)}`;
    default:
      return "/news";
  }
}

export function trackedUrl(kind, item, platform) {
  const qs = new URLSearchParams({ utm_source: platform, utm_medium: "social", utm_campaign: kind });
  return `${SITE}${pathFor(kind, item)}?${qs}`;
}

function tag(s) {
  const t = normalize(s)
    .replace(/\(.*?\)/g, " ")
    .split(/[^a-z0-9]+/)
    .filter(Boolean)
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join("");
  return t && t.length <= 28 ? `#${t}` : null;
}

export function hashtagsFor(kind, item) {
  const year = new Date().getFullYear();
  const base = {
    concours: ["#ConcoursMaster", "#MasterMaroc", `#Master${year}`, "#FSJES"],
    news: ["#ConcoursMaster", "#InscriptionMaster", "#MasterMaroc", `#Master${year}`],
    cours: ["#FSJES", "#LicenceFSJES", "#CoursEconomie", "#EtudiantMaroc"],
    quiz: ["#QCM", "#FSJES", "#Révisions", "#ConcoursMaster"],
    blog: ["#Orientation", "#EtudiantMaroc", "#MasterMaroc"],
    boutique: ["#Révisions", "#ConcoursMaster", "#EtudiantMaroc"],
  }[kind] || [];
  const extra = [];
  if (kind === "concours") {
    const sigle = String(item.master_reel || item.filiere || "").match(/\(([A-Z]{2,6})\)/)?.[1];
    if (sigle) extra.push(`#${sigle}`);
    extra.push(tag(item.ville), tag(String(item.etablissement || "").split(" ")[0]));
  }
  if (kind === "news") extra.push(tag(item.etablissement), tag(item.ville));
  if (kind === "cours" || kind === "quiz") extra.push(tag(item.module));
  if (kind === "boutique") extra.push(tag(item.matiere));
  return [...new Set([...extra, ...base].filter(Boolean))].slice(0, 10);
}

// Les faits à mettre en avant, quel que soit le réseau.
export function factsFor(kind, item, ctx = {}) {
  switch (kind) {
    case "concours": {
      const hasCorrige = Boolean(item.corrige_md) || ctx.corrigeFiles?.has(item.id);
      return {
        emoji: "📝",
        kicker: `Concours ${item.niveau === "licence_excellence" ? "Licence d'excellence" : "Master"} · ${item.annee}`,
        title: `${item.master_reel || item.filiere || "Concours"}`,
        subtitle: `${item.etablissement}${item.ville && !String(item.etablissement).includes(item.ville) ? ` — ${item.ville}` : ""}`,
        bullets: ["Énoncé complet transcrit", hasCorrige ? "Corrigé détaillé" : null, (item.images || []).length ? "Scans du sujet original" : null, "PDF téléchargeable gratuitement"].filter(Boolean),
        cta: "Sujet + corrigé gratuits",
      };
    }
    case "news": {
      const d = daysUntil(item.date_limite);
      return {
        emoji: "🔔",
        kicker: d !== null && d >= 0 && d <= 7 ? `⏰ Ferme ${d === 0 ? "aujourd'hui" : `dans ${d} jour${d > 1 ? "s" : ""}`}` : "Inscriptions ouvertes",
        title: item.titre,
        subtitle: [item.etablissement, item.ville].filter(Boolean).join(" · "),
        bullets: [item.date_limite ? `Date limite : ${dateFr(item.date_limite, { day: "numeric", month: "long", year: "numeric" })}` : null, "Lien d'inscription sur le site"].filter(Boolean),
        cta: "Toutes les infos",
        urgent: d !== null && d >= 0 && d <= 3,
      };
    }
    case "cours": {
      const n = (String(item.content || "").match(/^## /gm) || []).length;
      return {
        emoji: "📚",
        kicker: `Cours Licence FSJES${item.semestre ? ` · ${item.semestre}` : ""}`,
        title: item.module,
        subtitle: item.description || item.title,
        bullets: [n ? `${n} chapitres` : null, "Résumés, exercices corrigés et QCM", "Gratuit, en ligne et en PDF"].filter(Boolean),
        cta: "Cours complet gratuit",
      };
    }
    case "quiz":
      return {
        emoji: "✅",
        kicker: "Évaluation",
        title: item.title,
        subtitle: item.module,
        bullets: [`${(item.questions || []).length} questions`, "Correction et justification à chaque question"],
        cta: "Teste-toi maintenant",
      };
    case "blog":
      return { emoji: "✍️", kicker: "Nouvel article", title: item.title, subtitle: item.excerpt, bullets: [], cta: "Lire l'article" };
    case "boutique":
      return {
        emoji: "🛒",
        kicker: `Cahier de préparation · ${boutiqueNiveau(item.niveau)?.label || ""}`,
        title: item.titre,
        subtitle: item.sousTitre,
        bullets: [...(item.pointsForts || []).slice(0, 3), item.pages ? `${item.pages} pages en PDF` : null].filter(Boolean),
        cta: `${formatPrix(item.prix, item.devise)} · téléchargement immédiat`,
        price: formatPrix(item.prix, item.devise),
      };
    default:
      return { emoji: "🎓", kicker: "", title: "", subtitle: "", bullets: [], cta: "" };
  }
}

const INTROS = {
  info: { concours: "Nouveau sujet disponible sur SaadConcours.", news: "Les inscriptions sont ouvertes.", cours: "Nouveau cours en ligne.", quiz: "Nouvelle évaluation en ligne.", blog: "Nouvel article sur le blog.", boutique: "Nouveau cahier de préparation disponible." },
  motivant: {
    concours: "Tu prépares ton concours ? Entraîne-toi sur le vrai sujet 💪",
    news: "C'est le moment de postuler, ne laisse pas passer ta chance 🚀",
    cours: "Révise mieux, pas plus longtemps 📖",
    quiz: "10 minutes pour savoir où tu en es 🎯",
    blog: "Un conseil qui peut changer ta préparation 👇",
    boutique: "Tout ce qu'il faut pour réviser, réuni dans un seul cahier 📘",
  },
  urgent: {
    concours: "⚠️ Le concours approche : entraîne-toi sur ce sujet dès maintenant !",
    news: "🚨 Dernière ligne droite : les inscriptions ferment bientôt !",
    cours: "⚠️ Examens bientôt : ce cours résume l'essentiel.",
    quiz: "⚠️ Avant l'examen, fais ce QCM !",
    blog: "⚠️ À lire avant de postuler.",
    boutique: "⏳ Offre limitée sur ce cahier !",
  },
};

export function captionFor(platform, kind, item, { tone = "info", ctx } = {}) {
  const f = factsFor(kind, item, ctx);
  const url = trackedUrl(kind, item, platform);
  const tags = hashtagsFor(kind, item);
  const intro = INTROS[tone]?.[kind] || INTROS.info[kind] || "";
  const bullets = f.bullets.map((b) => `✅ ${b}`).join("\n");
  const head = `${f.emoji} ${f.title}${f.subtitle ? `\n${f.subtitle}` : ""}`;

  switch (platform) {
    case "instagram":
      return [intro, head, bullets, `👉 ${f.cta} : lien dans la bio (saadconcours.space)`, tags.join(" ")].filter(Boolean).join("\n\n");
    case "whatsapp":
      return [`*${f.emoji} ${f.title}*${f.subtitle ? `\n${f.subtitle}` : ""}`, intro, bullets, `👉 ${url}`].filter(Boolean).join("\n\n");
    case "telegram":
      return [`${f.emoji} ${f.title}${f.subtitle ? `\n${f.subtitle}` : ""}`, bullets, `👉 ${f.cta} : ${url}`].filter(Boolean).join("\n\n");
    case "linkedin":
      return [intro, head, bullets, `${f.cta} : ${url}`, tags.slice(0, 4).join(" ")].filter(Boolean).join("\n\n");
    case "x": {
      // Un lien compte toujours 23 caractères sur X.
      const tagsShort = tags.slice(0, 2).join(" ");
      let text = `${f.emoji} ${f.title}`;
      const budget = 280 - 23 - tagsShort.length - 4;
      if (text.length > budget) text = text.slice(0, budget - 1) + "…";
      return `${text}\n${url}\n${tagsShort}`;
    }
    default:
      return [intro, head, bullets, `👉 ${f.cta} : ${url}`, tags.slice(0, 4).join(" ")].filter(Boolean).join("\n\n");
  }
}

// Longueur telle que la compte le réseau (liens à 23 caractères sur X).
export function countFor(platform, text) {
  if (platform !== "x") return [...String(text || "")].length;
  return [...String(text || "").replace(/https?:\/\/\S+/g, "x".repeat(23))].length;
}

export function intentUrl(platform, { text, url }) {
  switch (platform) {
    case "facebook":
      return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    case "whatsapp":
      return `https://wa.me/?text=${encodeURIComponent(text)}`;
    case "telegram":
      return `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text.replace(url, "").trim())}`;
    case "linkedin":
      return `https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(text)}`;
    case "x":
      return `https://x.com/intent/post?text=${encodeURIComponent(text)}`;
    case "instagram":
      return "https://www.instagram.com/";
    default:
      return url;
  }
}
