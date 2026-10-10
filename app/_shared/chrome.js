// Shared header/banner markup + boilerplate script (theme, visitor counter)
// reused verbatim across every page since they're separate routes now
// instead of one single-page app.

import {
  adsForPlacement,
  partnerAdHtml,
  partnerAdsOptions,
  rotationOrder,
  sectionOfNav,
  localTodayIso,
  MOBILE_QUERY,
} from "./partnerAds";
import boutiqueData from "../../public/data/boutique.json";
import { isProduitVisible } from "../../lib/boutique";
import { readChapters, lastChapter } from "./progress";
import { iconHtml } from "./icons";
import { ESPACES_ACTIFS, OUTILS, espaceOfActive, espaceByKey, espaceOfPath, espaceClass } from "../../lib/espaces";

const ICON_MOON = iconHtml("moon", { size: 18, strokeWidth: 2 });
const ICON_SUN = iconHtml("sun", { size: 18, strokeWidth: 2 });

// Logo (toque + livre ouvert) sur le dégradé indigo → violet d'origine de la marque.
function brandLogoSvg() {
  return `<svg class="brand-logo" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs><linearGradient id="brandg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4f46e5"/><stop offset="1" stop-color="#a855f7"/></linearGradient></defs>
        <rect width="64" height="64" rx="16" fill="url(#brandg)"/>
        <polygon points="32,13 49,21 32,29 15,21" fill="white"/>
        <line x1="49" y1="21" x2="51" y2="31" stroke="white" stroke-width="2" stroke-linecap="round"/>
        <circle cx="51" cy="32.5" r="2" fill="#fbbf24"/>
        <polygon points="32,42 13,37 13,48 32,54" fill="white"/>
        <polygon points="32,42 51,37 51,48 32,54" fill="white"/>
        <line x1="32" y1="42" x2="32" y2="54" stroke="#4f46e5" stroke-width="1.2"/>
      </svg>`;
}

function escapeAttr(s) {
  return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

// Progression locale (app/_shared/progress.js) affichée sur la page :
// - coche « lu » sur les liens de chapitres déjà ouverts (listes d'un module,
//   colonne latérale d'un chapitre) ;
// - bouton [data-resume-link="<chemin du module>"] (« Commencer le
//   chapitre 1 ») qui devient « Reprendre : <dernier chapitre lu> » ;
// - encart [data-resume="*"] (accueil) vers le dernier chapitre lu du site.
function initProgressMarks() {
  const read = readChapters();
  if (!Object.keys(read).length) return;
  document.querySelectorAll(".bac-chap-list a[href], .bac-side-chaps a[href]").forEach((a) => {
    const path = a.getAttribute("href").split(/[?#]/)[0].replace(/\/+$/, "");
    if (!read[path] || a.classList.contains("is-read")) return;
    a.classList.add("is-read");
    a.insertAdjacentHTML("beforeend", '<span class="sp-read-mark" title="Déjà lu"><span class="sr-only">(déjà lu)</span></span>');
  });
  document.querySelectorAll("[data-resume-link]").forEach((a) => {
    const last = lastChapter(a.dataset.resumeLink);
    if (!last || a.dataset.resumed === "1") return;
    a.dataset.resumed = "1";
    a.href = last.href;
    a.innerHTML = `Reprendre : ${escapeAttr(last.title || "dernier chapitre lu")} ${iconHtml("arrow-right", { size: 18 })}`;
  });
  document.querySelectorAll("[data-resume]").forEach((el) => {
    const last = lastChapter(el.dataset.resume || "*");
    if (!last || el.dataset.filled === "1") return;
    el.dataset.filled = "1";
    el.innerHTML = `<a class="sp-resume" href="${escapeAttr(last.href)}"><span class="sp-resume-kicker">Reprendre où tu t'es arrêté</span><span class="sp-resume-title">${escapeAttr(last.title || last.href)}</span><span class="sp-resume-go">${iconHtml("arrow-right", { size: 22 })}</span></a>`;
    el.hidden = false;
  });
}

// La Boutique n'entre dans le menu qu'une fois un cahier publié : une boutique
// vide (« 0 cahier, les premiers arrivent bientôt ») est une page « en
// construction », exactement ce que la relecture AdSense sanctionne. Lu au
// build comme tout le site : publier un cahier depuis l'admin redéploie et
// fait revenir l'entrée, sans toucher au code.
export const BOUTIQUE_OUVERTE = Array.isArray(boutiqueData) && boutiqueData.some(isProduitVisible);

/* ------------------------------ Navigation --------------------------------
 * Tout vient du registre des espaces (lib/espaces.js) : ajouter un espace
 * l'ajoute au header, au menu, à la barre d'espace et au pied de page. Rien ici ne nomme un espace.
 *
 * - Header (ordinateur) : les espaces, puis les outils communs (QCM, Blog),
 *   la recherche et le thème. Pas de menu déroulant (pénible au doigt, il
 *   cache les choix) : la page active est soulignée.
 * - Barre d'espace : sous le header, sur toute page qui appartient à un
 *   espace — nom de l'espace puis ses onglets. Répond à « où suis-je, que
 *   puis-je faire ici ».
 * - Menu (bouton « Menu », téléphone et tablette) : recherche, puis un groupe
 *   par espace, les outils et le thème. Plein écran sur téléphone : c'est la
 *   navigation du mobile (la barre d'onglets du bas a été retirée le
 *   2026-10-10 à la demande de Saad).
 * ------------------------------------------------------------------------ */
const OUTILS_VISIBLES = [
  ...OUTILS,
  ...(BOUTIQUE_OUVERTE ? [{ key: "boutique", label: "Boutique", long: "Boutique", desc: "Cahiers de préparation", href: "/boutique" }] : []),
];

function isActiveEspace(espace, active) {
  return espace.tabs.some((t) => t.keys.includes(active));
}

function navLink({ href, label, on, cls = "nav-link" }) {
  return `<a class="${cls}${on ? " active" : ""}" href="${href}"${on ? ' aria-current="page"' : ""}>${label}</a>`;
}

function headerNavHtml(active) {
  const espaces = ESPACES_ACTIFS.map((e) => navLink({ href: e.hub, label: e.label, on: isActiveEspace(e, active), cls: `nav-link ${espaceClass(e)}` })).join("");
  const outils = OUTILS_VISIBLES.map((o) => navLink({ href: o.href, label: o.label, on: active === o.key })).join("");
  return `<nav class="site-nav" aria-label="Navigation principale">${espaces}<span class="site-nav-sep" aria-hidden="true"></span>${outils}</nav>`;
}

// Barre d'espace : absente du HTML hors d'un espace.
function espaceBarHtml(active) {
  const espace = espaceOfActive(active);
  if (!espace) return "";
  return `<nav class="espace-bar ${espaceClass(espace)}" aria-label="${escapeAttr(espace.long)}">
  <div class="espace-bar-inner">
    <a class="espace-bar-name" href="${espace.hub}"><span class="esp-dot" aria-hidden="true"></span>${escapeAttr(espace.long)}</a>
    <div class="espace-bar-tabs">
      ${espace.tabs.map((t) => navLink({ href: t.href, label: escapeAttr(t.label), on: t.keys.includes(active), cls: "espace-bar-tab" })).join("")}
    </div>
  </div>
</nav>`;
}

function menuSheetHtml(active) {
  const espaces = ESPACES_ACTIFS.map(
    (e) => `<div class="menu-group ${espaceClass(e)}">
    <a class="menu-espace${isActiveEspace(e, active) ? " active" : ""}" href="${e.hub}">
      <span class="menu-espace-name"><span class="esp-dot" aria-hidden="true"></span>${escapeAttr(e.long)}</span>
      <span class="menu-espace-desc">${escapeAttr(e.desc)}</span>
    </a>
    ${e.tabs.length > 1 ? `<div class="menu-sublinks">${e.tabs.map((t) => navLink({ href: t.href, label: escapeAttr(t.label), on: t.keys.includes(active), cls: "menu-sublink" })).join("")}</div>` : ""}
  </div>`
  ).join("");
  const outils = OUTILS_VISIBLES.map(
    (o) => `<a class="menu-espace${active === o.key ? " active" : ""}" href="${o.href}"><span class="menu-espace-name">${escapeAttr(o.long)}</span><span class="menu-espace-desc">${escapeAttr(o.desc)}</span></a>`
  ).join("");
  return `<div class="sheet menu-sheet" id="menuSheet" role="dialog" aria-modal="true" aria-label="Menu">
  <div class="sheet-head"><a class="menu-brand" href="/">${brandLogoSvg()}<span>Accueil</span></a><button type="button" class="sheet-close" data-sheet-close aria-label="Fermer le menu">${iconHtml("x", { size: 22 })}</button></div>
  <form class="menu-search" action="/recherche" method="get" role="search">
    ${iconHtml("search", { size: 18, className: "menu-search-ic" })}
    <input type="search" name="q" placeholder="Un concours, une faculté, un cours…" aria-label="Rechercher dans tout le site" autocomplete="off" enterkeyhint="search">
  </form>
  <div class="menu-label">Je prépare…</div>
  ${espaces}
  <div class="menu-label">S'entraîner et lire</div>
  <div class="menu-group menu-group-outils">${outils}</div>
  <div class="menu-foot">
    <button type="button" class="menu-theme" data-theme-toggle>${ICON_MOON}<span class="menu-theme-label">Thème sombre</span></button>
    <nav class="menu-foot-links" aria-label="Le site"><a href="/a-propos">À propos</a><a href="/faq">FAQ</a><a href="/contact">Contact</a></nav>
  </div>
</div>`;
}

function brandHtml() {
  return `<a class="brand" href="/" aria-label="SaadConcours, accueil">
      ${brandLogoSvg()}
      <span class="brand-text">
        <span class="brand-name"><span class="brand-saad">Saad</span><span class="brand-concours">Concours</span></span>
        <span class="brand-tagline">Du Bac au Master</span>
      </span>
    </a>`;
}

// `rails` opts a page into the left/right partner-ad columns — accueil and
// the individual-item detail pages (concours, article de blog) only.
// `data-pa-section` is the rubrique a partner banner can target (see
// PARTNER_SECTIONS) — read by renderPartnerAds() below and by the space
// reservation CSS in app/layout.js.
export function chromeHtml({ active, rails = false }) {
  return `
<div id="topProgressBar" data-pa-rails="${rails ? "1" : "0"}" data-pa-section="${sectionOfNav(active)}"></div>
<a class="skip-link" href="#contenu">Aller au contenu</a>
<header class="site-header">
  <div class="header-inner">
    ${brandHtml()}
    ${headerNavHtml(active)}
    <div class="header-actions">
      <form class="search-box" action="/recherche" method="get" role="search">
        ${iconHtml("search", { size: 16, className: "search-box-ic" })}
        <input type="search" name="q" id="headerSearchInput" placeholder="Rechercher un concours, un cours…" aria-label="Rechercher dans tout le site" autocomplete="off">
        <kbd class="search-box-kbd" aria-hidden="true">/</kbd>
      </form>
      <a class="search-btn" href="/recherche" aria-label="Rechercher">${iconHtml("search", { size: 20 })}</a>
      <button class="theme-toggle" id="themeToggle" data-theme-toggle title="Changer de thème" aria-label="Changer de thème">${ICON_MOON}</button>
      <button class="nav-toggle-btn" id="navToggleBtn" data-sheet-open="menuSheet" aria-label="Ouvrir le menu" aria-expanded="false" aria-controls="menuSheet">
        ${iconHtml("menu", { size: 20 })}<span>Menu</span>
      </button>
    </div>
  </div>
</header>
${espaceBarHtml(active)}
${menuSheetHtml(active)}
<span id="contenu" tabindex="-1"></span>
<div class="pa-zone pa-zone-header" id="paHeader" data-pa-zone="header"></div>
`;
}

// In-content partner zone ("Dans le contenu"), dropped into a detail page
// between two blocks — see app/concours/[id]/page.js and app/blog/[id]/page.js.
// Injected as raw HTML like the rest of the chrome so React never owns (or
// re-renders over) what renderPartnerAds() puts inside it.
export function partnerZoneHtml(placement) {
  return `<div class="pa-zone pa-zone-${placement}" data-pa-zone="${placement}"></div>`;
}

// Drop-in replacement for an empty grid while its first fetch() is in
// flight (concours/cours/évaluation/news list pages) - swap the grid's
// innerHTML to this, then overwrite it once the real cards are ready.
export function spinnerHtml(label) {
  return `
<div class="content-spinner-wrap">
  <div class="content-spinner"></div>
  ${label ? `<div class="content-spinner-label">${label}</div>` : ""}
</div>
`;
}

// Pied de page : la marque, une colonne par espace (ses onglets), puis le
// site. Généré depuis lib/espaces.js comme le header. Les icônes des réseaux
// ne s'affichent qu'une fois l'adresse confirmée (renderSocialLinks), pour
// qu'un réseau non configuré n'apparaisse jamais un instant.
export function footerHtml() {
  const annee = new Date().getFullYear();
  const colonnes = ESPACES_ACTIFS.map(
    (e) => `<nav class="footer-col ${espaceClass(e)}" aria-label="${escapeAttr(e.long)}">
      <h2><a href="${e.hub}"><span class="esp-dot" aria-hidden="true"></span>${escapeAttr(e.long)}</a></h2>
      <ul>${e.tabs.map((t) => `<li><a href="${t.href}">${escapeAttr(t.label)}</a></li>`).join("")}</ul>
    </nav>`
  ).join("");
  return `
<div class="pa-zone pa-zone-footer" id="paFooter" data-pa-zone="footer"></div>
<footer class="site-footer">
  <div class="footer-inner">
    <div class="footer-brand">
      ${brandHtml()}
      <p class="footer-text">Cours, sujets réels de concours et corrigés en économie et gestion au Maroc, du Bac au Master. Gratuit et sans inscription.</p>
      <div class="footer-social" id="footerSocial"></div>
    </div>
    ${colonnes}
    <nav class="footer-col" aria-label="SaadConcours">
      <h2>SaadConcours</h2>
      <ul>
        ${OUTILS_VISIBLES.map((o) => `<li><a href="${o.href}">${escapeAttr(o.long)}</a></li>`).join("")}
        <li><a href="/a-propos">À propos</a></li>
        <li><a href="/faq">FAQ</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  </div>
  <div class="footer-bottom footer-legal">
    <span>© ${annee} SaadConcours</span>
    <span><a href="/confidentialite">Confidentialité</a> · <a href="/mentions-legales">Mentions légales</a></span>
  </div>
</footer>
`;
}

const SOCIAL_NETWORKS = [
  {
    key: "facebook",
    label: "Facebook",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.06 5.66 21.2 10.44 22v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22C18.34 21.2 22 17.06 22 12.06Z"/></svg>`,
  },
  {
    key: "instagram",
    label: "Instagram",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/></svg>`,
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.3-.5.1-1 .1-1.7-.1-.4-.1-.9-.3-1.6-.6-2.7-1.2-4.5-3.9-4.6-4.1-.1-.2-1.1-1.5-1.1-2.8s.7-2 .9-2.3c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5.2.6.7 1.9.8 2 .1.2.1.4 0 .6-.1.2-.2.4-.3.5-.2.2-.3.4-.1.7.2.3.9 1.4 1.9 2.3 1.3 1.2 2.4 1.5 2.7 1.7.3.2.5.1.7-.1.2-.2.8-.9 1-1.2.2-.3.4-.3.7-.2.3.1 1.8.8 2.1.9.3.2.5.2.6.4.1.2.1.9-.1 1.5Z"/></svg>`,
  },
  {
    key: "tiktok",
    label: "TikTok",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 5.8c-.9-.9-1.4-2.1-1.4-3.4h-3.3v13.3c0 1.5-1.2 2.7-2.7 2.7a2.7 2.7 0 0 1 0-5.4c.3 0 .5 0 .8.1v-3.4a6.1 6.1 0 0 0-.8-.1 6.1 6.1 0 1 0 6.1 6.1V9.4a7.4 7.4 0 0 0 4.4 1.4V7.5c-1.2 0-2.3-.6-3.1-1.7Z"/></svg>`,
  },
  {
    key: "youtube",
    label: "YouTube",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.6 7.2s-.2-1.5-.8-2.1c-.8-.8-1.7-.8-2.1-.9C15.9 4 12 4 12 4s-3.9 0-6.7.2c-.4 0-1.3.1-2.1.9-.6.6-.8 2.1-.8 2.1S2.2 9 2.2 10.7v1.9c0 1.7.2 3.5.2 3.5s.2 1.5.8 2.1c.8.8 1.9.8 2.3.9 1.7.2 7 .2 7 .2s3.9 0 6.7-.2c.4 0 1.3-.1 2.1-.9.6-.6.8-2.1.8-2.1s.2-1.7.2-3.5v-1.9c0-1.7-.2-3.5-.2-3.5ZM9.9 14.6V8.8l5.4 2.9-5.4 2.9Z"/></svg>`,
  },
  {
    key: "telegram",
    label: "Telegram",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="m21.9 4.5-3.2 15.3c-.2 1.1-.9 1.3-1.8.8l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.3-5 9.3-8.4c.4-.4-.1-.6-.6-.2L6.2 13 1.3 11.5c-1.1-.3-1.1-1.1.2-1.6L20.5 3c.9-.3 1.7.2 1.4 1.5Z"/></svg>`,
  },
  {
    key: "email",
    label: "Email",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>`,
    hrefPrefix: "mailto:",
  },
];

// Loaded here instead of a blocking <link> in app/layout.js's <head> — see
// that file for why. Idempotent, safe to call from anywhere that renders
// KaTeX output (chromeScript() below, or the admin's MarkdownEditor preview,
// which doesn't otherwise pull in the chrome/nav script).
export function ensureKatexCss() {
  if (document.getElementById("katex-css")) return;
  const link = document.createElement("link");
  link.id = "katex-css";
  link.rel = "stylesheet";
  link.href = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css";
  document.head.appendChild(link);
}

// Partner-ad rails (createRail below). Module-level on purpose: the baked ad
// config renders synchronously while initChrome() is still running, before
// any `const` declared further down inside it would be initialized.
const RAIL_WIDTH = 160;
const RAIL_MARGIN = 16;

export const chromeScript = function initChrome() {
  ensureKatexCss();

  (function initTopProgressBar() {
    const bar = document.getElementById("topProgressBar");
    if (!bar || document.__scTopProgressWired) return;
    document.__scTopProgressWired = true;

    document.addEventListener("click", (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = e.target.closest("a[href]");
      if (!link || link.target === "_blank") return;
      const href = link.getAttribute("href") || "";
      // Only same-origin, actual-navigation hrefs - not "#anchor", not
      // mailto:/tel:, not the current page (nothing to show a bar for).
      if (!href.startsWith("/") || href === window.location.pathname) return;
      bar.classList.add("loading");
    });

    // Bar never gets to finish/hide on a real navigation (the page unloads
    // first) - this only covers the back/forward cache restoring a page
    // that still had the class from before it was left.
    window.addEventListener("pageshow", () => bar.classList.remove("loading"));
  })();

  // Partner banners come from the configuration baked into the page at build
  // time (app/layout.js, <script id="sc-partner-ads">): they render on
  // hydration, with no network round-trip that could be slow, fail, or land
  // on a cold Worker. /api/settings now only feeds the footer's social row —
  // and stands in for the baked config on a page built without settings.
  (function initSettingsChrome() {
    if (document.__scSettingsChromeWired) return;
    document.__scSettingsChromeWired = true;

    const baked = readBakedPartnerAds();
    if (baked !== undefined) renderPartnerAds(baked);

    fetch("/api/settings")
      .then((r) => r.json())
      .then((settings) => {
        renderSocialLinks(settings);
        if (baked === undefined) renderPartnerAds(settings);
      })
      .catch(() => {});
  })();

  // undefined = no baked config on this page (fall back to the fetch);
  // {partnerAdsEnabled:false} = baked, and there is nothing to show.
  function readBakedPartnerAds() {
    const el = document.getElementById("sc-partner-ads");
    if (!el) return undefined;
    try {
      return JSON.parse(el.textContent);
    } catch {
      return undefined;
    }
  }

  function renderSocialLinks(settings) {
    const el = document.getElementById("footerSocial");
    if (!el) return;
    const links = SOCIAL_NETWORKS.filter((n) => settings && settings[n.key]);
    if (!links.length) return;
    el.innerHTML = links
      .map((n) => {
        const raw = settings[n.key];
        const href = n.hrefPrefix ? n.hrefPrefix + raw : raw;
        return `<a class="footer-social-link" href="${href}" target="_blank" rel="noopener noreferrer" title="${n.label}" aria-label="${n.label}">${n.icon}</a>`;
      })
      .join("");
  }

  // Own-inventory banners (see _shared/partnerAds.js). Each zone shows one
  // banner at a time and cycles through the others, so several advertisers
  // can share the same slot instead of competing for it.
  //
  // Every zone lives in the normal document flow — no overlay is ever allowed
  // to push, shrink or cover the site. The one exception is the left/right
  // rail pair below, which only exists where the margin beside the content is
  // genuinely empty, measured against the real page rather than guessed from
  // a fixed breakpoint.
  function renderPartnerAds(settings) {
    if (!settings || settings.partnerAdsEnabled === false) return;
    const opts = partnerAdsOptions(settings);
    const bar = document.getElementById("topProgressBar");
    const mobile = window.matchMedia(MOBILE_QUERY).matches;
    const filter = {
      today: localTodayIso(),
      section: bar?.dataset.paSection || "info",
      device: mobile ? "mobile" : "desktop",
    };

    // Header, footer and in-content zones are already in the markup and
    // collapse on their own when left empty (.pa-zone:empty).
    document.querySelectorAll(".pa-zone[data-pa-zone]").forEach((el) => {
      const placement = el.dataset.paZone;
      const ads = adsForPlacement(settings, placement, filter);
      if (ads.length) mountAdZone(el, ads, placement, opts);
      // Nothing for this page or screen after all (targeting, a campaign
      // that ended since the build…): give back any space the build reserved.
      else el.style.display = "none";
    });

    // Rails never fit beside the content on a phone.
    if (bar?.dataset.paRails !== "1" || mobile) return;
    for (const side of ["left", "right"]) {
      const ads = adsForPlacement(settings, `rail_${side}`, filter);
      if (ads.length) mountAdZone(createRail(side), ads, `rail_${side}`, opts);
    }
  }

  // Fixed-position rail, hidden by default. Its `left` is computed — not
  // guessed from a viewport breakpoint — from what actually occupies the
  // middle of the page: the content column (.bac-wrap: 1100px on the home
  // page, 900px on a concours or article page; .home-view / .cd-view on the
  // older templates) measured at its padding edge, and the 970px header and
  // footer banners, which are wider than a 900px article and would otherwise
  // slide under the rail. The rail only appears once the gutter left by all
  // of them is wide enough, and re-measures on resize so rotating a tablet or
  // resizing a window never leaves it overlapping anything.
  function createRail(side) {
    const rail = document.createElement("aside");
    rail.className = "pa-rail pa-rail-" + side;
    rail.style.width = RAIL_WIDTH + "px";
    rail.setAttribute("aria-label", "Publicité partenaire");
    document.body.appendChild(rail);

    function obstacle() {
      const content = document.querySelector(".bac-wrap, .home-view, .cd-view");
      if (!content) return null;
      const box = content.getBoundingClientRect();
      const cs = getComputedStyle(content);
      let left = box.left + parseFloat(cs.paddingLeft || 0);
      let right = box.right - parseFloat(cs.paddingRight || 0);
      document.querySelectorAll(".pa-zone-header .pa-unit, .pa-zone-footer .pa-unit").forEach((u) => {
        const r = u.getBoundingClientRect();
        if (!r.width) return;
        left = Math.min(left, r.left);
        right = Math.max(right, r.right);
      });
      return { left, right };
    }

    function reposition() {
      const box = obstacle();
      if (!box) return (rail.style.display = "none");
      const gutter = side === "left" ? box.left : document.documentElement.clientWidth - box.right;
      if (gutter < RAIL_WIDTH + RAIL_MARGIN * 2) {
        rail.style.display = "none";
        return;
      }
      rail.style.display = "flex";
      rail.style.left = side === "left" ? `${box.left - RAIL_MARGIN - RAIL_WIDTH}px` : `${box.right + RAIL_MARGIN}px`;
    }

    reposition();
    // Watching the page's own box, not just the window: a scrollbar that
    // appears once the content has loaded narrows the layout by ~15px and
    // re-centres everything without firing any window resize — the rail
    // would then sit against the header banner.
    let resizeTimer = null;
    const later = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(reposition, 100);
    };
    if (typeof ResizeObserver !== "undefined") new ResizeObserver(later).observe(document.documentElement);
    window.addEventListener("resize", later);

    return rail;
  }

  // One zone = one banner on screen at a time, rotating through `ads`.
  //
  // What an advertiser is shown as "affichages" must be banners somebody
  // could actually see, so an impression is counted only when the banner is
  // (1) loaded, (2) at least half inside the viewport and (3) in a visible
  // tab — a footer banner nobody scrolled down to, a rail with no room to
  // appear or a tab left in the background count nothing. Rotation pauses
  // in the same situations, which also stops a footer from cycling through
  // every advertiser unseen.
  function mountAdZone(el, ads, placement, opts) {
    const order = rotationOrder(ads);
    let pos = Math.floor(Math.random() * order.length);
    const failed = new Set(); // indexes into `ads` whose visual failed to load
    let current = null;
    let pendingView = null; // id of the banner shown but not yet counted
    let inView = typeof IntersectionObserver === "undefined";
    let timer = null;

    function countIfSeen() {
      if (inView && pendingView && !document.hidden) {
        trackAdEvent(pendingView, "view");
        pendingView = null;
      }
    }

    function show() {
      for (let tries = 0; failed.has(order[pos]) && tries < order.length; tries++) pos = (pos + 1) % order.length;
      if (failed.size >= ads.length) {
        // Every visual is broken (typically uploaded seconds ago, before the
        // deploy carrying it has landed): leave no trace. A broken-image box
        // labelled "Sponsorisé" reads as the site itself being broken.
        stop();
        el.innerHTML = "";
        el.style.display = "none";
        return;
      }
      const index = order[pos];
      const ad = ads[index];
      // The same advertiser again (a heavier weight comes round twice in a
      // row): it simply stays up longer — no redraw, no second impression.
      if (ad === current && el.firstElementChild) return;
      current = ad;
      pendingView = null;
      el.innerHTML = partnerAdHtml(ad, placement, opts);

      const link = el.querySelector("a.pa-banner");
      if (link) link.addEventListener("click", () => trackAdEvent(ad.id, "click"));
      const logo = el.querySelector(".pa-text-logo");
      if (logo) logo.addEventListener("error", () => logo.remove(), { once: true });

      const ready = () => {
        if (current !== ad) return;
        pendingView = ad.id;
        countIfSeen();
      };
      const img = el.querySelector(".pa-banner:not(.pa-banner-text) img");
      if (!img || (img.complete && img.naturalWidth)) return ready();
      img.addEventListener("load", ready, { once: true });
      // Hand the slot to the next advertiser instead of leaving a hole.
      img.addEventListener(
        "error",
        () => {
          if (current !== ad) return;
          failed.add(index);
          current = null;
          next();
        },
        { once: true }
      );
    }

    function next() {
      pos = (pos + 1) % order.length;
      show();
    }
    function start() {
      if (!timer && ads.length - failed.size > 1) timer = setInterval(next, opts.rotationSec * 1000);
    }
    function stop() {
      clearInterval(timer);
      timer = null;
    }

    show();

    if (!inView) {
      new IntersectionObserver(
        (entries) => {
          const e = entries[entries.length - 1];
          inView = e.isIntersecting && e.intersectionRatio >= 0.5;
          if (inView && !document.hidden) {
            countIfSeen();
            start();
          } else stop();
        },
        { threshold: [0, 0.5] }
      ).observe(el);
    } else start();

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) return stop();
      if (inView) {
        countIfSeen();
        start();
      }
    });
  }

  // Same fire-and-forget contract as the other counters below: never awaited,
  // never allowed to throw, and a blocked/failed request must not affect the
  // banner the visitor is looking at.
  function trackAdEvent(id, type) {
    if (!id) return;
    queueTrackEvent({ t: "ad", id, type });
  }

  // First-party visit tracking, replacing the old public visitor-counter
  // widget — no longer shown on the site, but every unique browser still
  // pings once (localStorage-gated, same "first hit only" semantics the
  // old counter used) so the real number stays visible in /admin.
  // D'où arrive le visiteur : partagé par le compteur de visites ci-dessous et
  // par le compteur par page (source d'arrivée de la première page vue).
  // Moteurs de réponse IA : testés avant Google (gemini.google.com contient
  // « google ») et aussi sur utm_source, que ChatGPT ajoute à ses liens
  // (utm_source=chatgpt.com).
  function aiSource(s) {
    if (s.includes("chatgpt") || s.includes("openai")) return "chatgpt";
    if (s.includes("perplexity")) return "perplexity";
    if (s.includes("gemini") || s.includes("bard.google")) return "gemini";
    if (s.includes("claude")) return "claude";
    if (s.includes("copilot")) return "copilot";
    if (s.includes("mistral")) return "mistral";
    if (s.includes("deepseek")) return "deepseek";
    return null;
  }

  function detectSource() {
    try {
      const utm = new URLSearchParams(location.search).get("utm_source");
      if (utm) return aiSource(utm.toLowerCase()) || utm.toLowerCase();
      const ref = document.referrer;
      if (!ref) return "direct";
      const host = new URL(ref).hostname.replace(/^www\./, "");
      if (host === location.hostname) return "direct";
      const ai = aiSource(host);
      if (ai) return ai;
      if (host.includes("google")) return "google";
      if (host.includes("facebook") || host.includes("fb.com")) return "facebook";
      if (host.includes("instagram")) return "instagram";
      if (host.includes("t.co") || host.includes("twitter") || host.includes("x.com")) return "twitter";
      if (host.includes("whatsapp")) return "whatsapp";
      if (host.includes("tiktok")) return "tiktok";
      if (host.includes("youtube")) return "youtube";
      if (host.includes("bing")) return "bing";
      return host;
    } catch {
      return "direct";
    }
  }

  (function initVisitorTracking() {
    try {
      if (localStorage.getItem("sc_visited") === "1") return;
      localStorage.setItem("sc_visited", "1");
    } catch {
      return;
    }
    queueTrackEvent({ t: "pageview", source: detectSource() });
  })();

  // Per-page view counter — unlike initVisitorTracking above (once per
  // browser, ever), this pings on every single page load so the admin
  // dashboard can show a view count for each individual page, not just
  // concours detail pages (already covered by trackConcoursView).
  // Une page n'est comptée qu'une fois par session (un rafraîchissement ne
  // compte pas), et la ville / le journal des visiteurs seulement à la
  // première page de la session (`first`).
  (function initPathTracking() {
    let first = true;
    try {
      const seen = JSON.parse(sessionStorage.getItem("sc_paths") || "[]");
      if (seen.includes(location.pathname)) return;
      first = seen.length === 0;
      sessionStorage.setItem("sc_paths", JSON.stringify([...seen, location.pathname].slice(-200)));
    } catch {}
    queueTrackEvent(first ? { t: "page-path", path: location.pathname, first, source: detectSource() } : { t: "page-path", path: location.pathname, first });
  })();

  (function initTheme() {
    const saved = localStorage.getItem("theme");
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const theme = saved || (prefersLight ? "light" : "dark");
    document.documentElement.setAttribute("data-theme", theme);
  })();

  // Icône SVG (rendu identique sur tous les systèmes, contrairement aux
  // emoji) et libellé qui annonce l'action, pas l'état.
  function applyThemeButton() {
    const light = document.documentElement.getAttribute("data-theme") === "light";
    const label = light ? "Passer au thème sombre" : "Passer au thème clair";
    document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
      const text = btn.querySelector(".menu-theme-label");
      if (text) {
        // Bouton du menu : icône + libellé de l'action.
        btn.innerHTML = (light ? ICON_MOON : ICON_SUN) + `<span class="menu-theme-label">${light ? "Thème sombre" : "Thème clair"}</span>`;
      } else {
        btn.innerHTML = light ? ICON_SUN : ICON_MOON;
        btn.title = label;
      }
      btn.setAttribute("aria-label", label);
    });
  }

  applyThemeButton();
  if (!document.__scThemeWired) {
    document.__scThemeWired = true;
    document.addEventListener("click", (e) => {
      if (!e.target.closest?.("[data-theme-toggle]")) return;
      const root = document.documentElement;
      const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      // Fondu limité au changement de thème (voir html.theme-anim, globals.css).
      root.classList.add("theme-anim");
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem("theme", next);
      } catch {}
      applyThemeButton();
      clearTimeout(document.__scThemeTimer);
      document.__scThemeTimer = setTimeout(() => root.classList.remove("theme-anim"), 260);
    });
  }

  // Header replié en défilant vers le bas sur mobile, rendu dès qu'on
  // remonte : il occupait ~60px fixes, plus les onglets collants en dessous.
  // La variable --header-h (globals.css) suit, pour que ce qui colle sous le
  // header remonte avec lui.
  (function initHeaderAutoHide() {
    const root = document.documentElement;
    if (root.dataset.headerAutoHide === "1") return;
    root.dataset.headerAutoHide = "1";
    const mq = window.matchMedia("(max-width: 860px)");
    let lastY = window.scrollY;
    let ticking = false;
    function update() {
      ticking = false;
      const y = window.scrollY;
      const menuOpen = root.classList.contains("sheet-open");
      if (!mq.matches || menuOpen || y < 120) root.classList.remove("header-hidden");
      else if (y > lastY + 6) root.classList.add("header-hidden");
      else if (y < lastY - 6) root.classList.remove("header-hidden");
      if (Math.abs(y - lastY) > 6 || y < 120) lastY = y;
    }
    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(update);
        }
      },
      { passive: true }
    );
    // Un champ qui prend le focus au clavier ne doit pas rester sous un header caché.
    document.addEventListener("focusin", (e) => {
      if (e.target.matches?.(":focus-visible")) root.classList.remove("header-hidden");
    });
  })();

  initProgressMarks();

  // Introduction des heros repliée à 3 lignes sur téléphone (space.css) :
  // le bouton n'est ajouté que si le texte dépasse vraiment. Le texte
  // complet reste dans le HTML (indexé), seul l'affichage est replié.
  (function initHeroClamp() {
    if (!window.matchMedia("(max-width: 560px)").matches) return;
    document.querySelectorAll(".bac-hero > p").forEach((p) => {
      if (p.dataset.clampWired === "1") return;
      p.dataset.clampWired = "1";
      p.classList.add("is-clampable");
      if (p.scrollHeight <= p.clientHeight + 2) {
        p.classList.remove("is-clampable");
        return;
      }
      if (!p.id) p.id = `hero-intro-${Math.random().toString(36).slice(2, 8)}`;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "sp-clamp-btn";
      btn.textContent = "Lire la suite";
      btn.setAttribute("aria-expanded", "false");
      btn.setAttribute("aria-controls", p.id);
      btn.addEventListener("click", () => {
        const open = p.classList.toggle("is-expanded");
        btn.textContent = open ? "Réduire" : "Lire la suite";
        btn.setAttribute("aria-expanded", String(open));
      });
      p.after(btn);
    });
  })();

  initSheets();
  initEspaceMemory();
  markScrollables(document);

  // « / » ouvre la recherche du header (ordinateur), comme sur la plupart des
  // sites de documentation ; ignoré pendant la saisie dans un champ.
  (function initSearchShortcut() {
    if (document.__scSearchKey) return;
    document.__scSearchKey = true;
    document.addEventListener("keydown", (e) => {
      if (e.key !== "/" || e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.target.closest?.("input, textarea, select, [contenteditable]")) return;
      const input = document.getElementById("headerSearchInput");
      if (!input || !input.offsetParent) return;
      e.preventDefault();
      input.focus();
    });
  })();
};

/* ------------------------------ Feuilles ---------------------------------
 * Un seul mécanisme pour le menu du téléphone et les panneaux de filtres
 * (listes de concours et de cours) : un bouton [data-sheet-open="<id>"]
 * ouvre l'élément .sheet portant cet id, qui glisse depuis le bas de l'écran
 * au-dessus d'un voile ; [data-sheet-close], le voile ou Échap le referment.
 * Sur ordinateur, un panneau de filtres reste à sa place dans la page : son
 * CSS ne le transforme en feuille qu'en dessous de 860px (classe .sheet-m).
 * ------------------------------------------------------------------------ */
let sheetState = null; // { sheet, opener }

function sheetBackdrop() {
  let el = document.getElementById("sheetBackdrop");
  if (!el) {
    el = document.createElement("div");
    el.id = "sheetBackdrop";
    el.className = "sheet-backdrop";
    el.addEventListener("click", () => closeSheet());
    document.body.appendChild(el);
  }
  return el;
}

export function openSheet(id, opener) {
  const sheet = document.getElementById(id);
  if (!sheet) return;
  if (sheetState) closeSheet({ restoreFocus: false });
  sheetState = { sheet, opener: opener || null };
  sheet.classList.add("is-open");
  sheetBackdrop().classList.add("is-open");
  document.documentElement.classList.add("sheet-open");
  document.querySelectorAll(`[data-sheet-open="${id}"]`).forEach((b) => b.setAttribute("aria-expanded", "true"));
  // Après le changement de visibilité, sinon le navigateur refuse le focus.
  requestAnimationFrame(() => sheet.querySelector("[data-sheet-close], a[href], button, select, input")?.focus({ preventScroll: true }));
}

export function closeSheet({ restoreFocus = true } = {}) {
  if (!sheetState) return;
  const { sheet, opener } = sheetState;
  sheetState = null;
  sheet.classList.remove("is-open");
  document.getElementById("sheetBackdrop")?.classList.remove("is-open");
  document.documentElement.classList.remove("sheet-open");
  document.querySelectorAll(`[data-sheet-open="${sheet.id}"]`).forEach((b) => b.setAttribute("aria-expanded", "false"));
  if (restoreFocus) opener?.focus({ preventScroll: true });
}

function initSheets() {
  if (document.__scSheetsWired) return;
  document.__scSheetsWired = true;
  document.addEventListener("click", (e) => {
    const opener = e.target.closest("[data-sheet-open]");
    if (opener) {
      e.preventDefault();
      const id = opener.getAttribute("data-sheet-open");
      if (sheetState?.sheet.id === id) closeSheet();
      else openSheet(id, opener);
      return;
    }
    if (e.target.closest("[data-sheet-close]")) {
      closeSheet();
      return;
    }
    // Un lien suivi depuis une feuille (menu) la referme : au retour arrière,
    // la page restaurée par le navigateur ne doit pas la montrer ouverte.
    if (sheetState && e.target.closest(".sheet a[href]")) closeSheet({ restoreFocus: false });
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && sheetState) closeSheet();
  });
  window.addEventListener("pageshow", () => closeSheet({ restoreFocus: false }));
}

/* --------------------------- Espace retenu -------------------------------
 * L'espace du visiteur (sc_espace) alimente le repère « Ton espace » de
 * « Je prépare… » sur l'accueil. Ce qui le retient :
 * - un choix explicite (accueil, header, menu) ;
 * - l'ouverture du hub d'un espace ;
 * - n'importe quelle page d'un espace tant qu'aucun espace n'est retenu.
 * Une seule fiche ouverte depuis Google ne remplace donc pas un choix fait.
 * L'ancien sc_cours (Bac ou Licence) est repris une fois puis oublié.
 * ------------------------------------------------------------------------ */
export const ESPACE_KEY = "sc_espace";

export function retenirEspace(key) {
  try {
    if (espaceByKey(key)) localStorage.setItem(ESPACE_KEY, key);
  } catch {}
}

function initEspaceMemory() {
  try {
    const legacy = localStorage.getItem("sc_cours");
    if (legacy) {
      if (!localStorage.getItem(ESPACE_KEY)) localStorage.setItem(ESPACE_KEY, legacy.startsWith("/bac") ? "bac" : "licence");
      localStorage.removeItem("sc_cours");
    }
    const path = window.location.pathname.replace(/\/+$/, "") || "/";
    const ici = espaceOfPath(path);
    if (ici && (path === ici.hub || !localStorage.getItem(ESPACE_KEY))) localStorage.setItem(ESPACE_KEY, ici.key);
  } catch {}
  if (document.__scEspaceClicks) return;
  document.__scEspaceClicks = true;
  document.addEventListener("click", (e) => {
    const a = e.target.closest?.(".site-nav a, .menu-espace, [data-espace]");
    if (!a) return;
    const key = a.dataset.espace || espaceOfPath(a.getAttribute("href"))?.key;
    if (key) retenirEspace(key);
  });
}

/* ------------------------- Contenus plus larges ---------------------------
 * Formules et tableaux plus larges que l'écran défilent dans leur propre
 * boîte ; sans indice, rien ne disait qu'il restait du texte à droite. La
 * classe .is-scrollable ajoute un fondu sur le bord et une barre visible.
 * Rappelée après le rendu KaTeX (mathMarkdown.js), qui change les largeurs.
 * ------------------------------------------------------------------------ */
export function markScrollables(root) {
  if (!root || typeof window === "undefined") return;
  const els = root.querySelectorAll(".katex-display, .enonce-content table, .cours-content table, .bac-md table, .table-scroll");
  els.forEach((el) => {
    const update = () => el.classList.toggle("is-scrollable", el.scrollWidth > el.clientWidth + 2 && el.scrollLeft + el.clientWidth < el.scrollWidth - 2);
    update();
    if (el.dataset.scrollWired === "1") return;
    el.dataset.scrollWired = "1";
    el.addEventListener("scroll", update, { passive: true });
  });
  if (!document.__scScrollablesResize) {
    document.__scScrollablesResize = true;
    window.addEventListener("sc:content-rendered", (e) => markScrollables(e.detail || document));
    let t = null;
    window.addEventListener("resize", () => {
      clearTimeout(t);
      t = setTimeout(() => markScrollables(document), 150);
    });
  }
}

// A public asset path stored in JSON as "data/foo.json" or "images/x.png"
// needs a leading slash now that pages live at nested routes (/cours, /admin, ...).
//
// The scans under images/ are ~80% of everything a deployment stores, and
// Vercel keeps a copy per deployment forever, so they dominate Deployment
// Storage growth. Setting NEXT_PUBLIC_IMAGE_CDN_URL serves them from external
// object storage (Cloudflare R2) instead, without rewriting a single stored
// path: concours.json still holds "images/Ville/x.webp" and only the origin
// changes. Data files are deliberately excluded — they stay local.
//
// Unset, this behaves exactly as before, so deploying the change on its own
// is a no-op. Segments are percent-encoded for the CDN because some folders
// carry spaces and accents ("Béni Mellal"); the local branch is left byte
// for byte as it was, since the browser already handles that case.
const IMAGE_CDN = (process.env.NEXT_PUBLIC_IMAGE_CDN_URL || "").replace(/\/+$/, "");

export function pub(path) {
  if (!path) return path;
  const clean = path.startsWith("/") ? path.slice(1) : path;
  if (IMAGE_CDN && clean.startsWith("images/")) {
    return IMAGE_CDN + "/" + clean.split("/").map(encodeURIComponent).join("/");
  }
  return "/" + clean;
}

/* ------------------------- Counter batching -------------------------------
 * Fire-and-forget usage counters feeding the admin stats dashboard. Never
 * awaited by callers and never allowed to throw — a tracking hiccup must not
 * get in the way of someone's PDF download or a page loading.
 *
 * They used to POST one request each. That was the single biggest source of
 * serverless invocations on the site: page-path fires on every load, and the
 * rotating ad zones fire a "view" per rotation, so one visitor reading one
 * page for a couple of minutes could open ~30 connections — 30 function
 * invocations to record 30 integers.
 *
 * Now every counter goes into an in-memory queue that is flushed as a single
 * POST to /api/track/batch: on a short timer, when the queue fills, and when
 * the page goes away. That last case uses sendBeacon, which the browser
 * delivers after teardown — a plain fetch would be cancelled mid-flight, so
 * batching without it would silently lose the events of anyone who closes the
 * tab quickly.
 *
 * The per-event single routes (/api/track/ad, .../pageview, ...) are kept:
 * a visitor sitting on an already-cached page still posts to them until they
 * reload, and dropping them would throw those events away.
 * ------------------------------------------------------------------------ */

const TRACK_BATCH_ENDPOINT = "/api/track/batch";
// Long enough to collect a burst of ad rotations, short enough that a normal
// read flushes while the visitor is still on the page.
const TRACK_FLUSH_DELAY_MS = 4000;
const TRACK_MAX_QUEUE = 25;

let trackQueue = [];
let trackFlushTimer = null;
let trackLifecycleBound = false;

function sendTrackBatch(events, useBeacon) {
  if (!events.length) return;
  const body = JSON.stringify({ events });
  try {
    if (useBeacon && typeof navigator !== "undefined" && navigator.sendBeacon) {
      // Blob carries the content type through, so the route still parses JSON.
      navigator.sendBeacon(TRACK_BATCH_ENDPOINT, new Blob([body], { type: "application/json" }));
      return;
    }
    fetch(TRACK_BATCH_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      keepalive: true,
    }).catch(() => {});
  } catch {}
}

function flushTrackQueue(useBeacon) {
  if (trackFlushTimer) {
    clearTimeout(trackFlushTimer);
    trackFlushTimer = null;
  }
  if (!trackQueue.length) return;
  // Swap the array out before sending so events queued during the send land
  // in the next batch rather than being dropped by the reset.
  const events = trackQueue;
  trackQueue = [];
  sendTrackBatch(events, useBeacon);
}

// pagehide covers real unloads and bfcache; visibilitychange covers tab
// switches and mobile app-switching, which is how most sessions actually end.
function bindTrackLifecycle() {
  if (trackLifecycleBound || typeof document === "undefined") return;
  trackLifecycleBound = true;
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) flushTrackQueue(true);
  });
  window.addEventListener("pagehide", () => flushTrackQueue(true));
}

// Exported so callers outside this module (ConcoursExplorer's search-miss
// counter) share the same queue rather than opening their own connection.
export function queueTrackEvent(event) {
  try {
    if (!event || !event.t) return;
    // Navigateur de l'administrateur (marqué à l'ouverture de /admin) : ses
    // propres visites ne faussent pas les statistiques.
    if (localStorage.getItem("sc_no_track") === "1") return;
    bindTrackLifecycle();
    trackQueue.push(event);
    if (trackQueue.length >= TRACK_MAX_QUEUE) {
      flushTrackQueue(false);
      return;
    }
    if (!trackFlushTimer) {
      trackFlushTimer = setTimeout(() => flushTrackQueue(false), TRACK_FLUSH_DELAY_MS);
    }
  } catch {}
}

export function trackPdfDownload(kind, id) {
  queueTrackEvent({ t: "pdf-download", kind, id });
}

export function trackConcoursView(id) {
  try {
    const key = "sc_cv:" + id;
    if (sessionStorage.getItem(key)) return;
    sessionStorage.setItem(key, "1");
  } catch {}
  queueTrackEvent({ t: "concours-view", id });
}
