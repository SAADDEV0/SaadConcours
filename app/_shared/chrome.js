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

const ICON_MOON = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg>`;
const ICON_SUN = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>`;

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
    a.innerHTML = `Reprendre : ${escapeAttr(last.title || "dernier chapitre lu")} →`;
  });
  document.querySelectorAll("[data-resume]").forEach((el) => {
    const last = lastChapter(el.dataset.resume || "*");
    if (!last || el.dataset.filled === "1") return;
    el.dataset.filled = "1";
    el.innerHTML = `<a class="sp-resume" href="${escapeAttr(last.href)}"><span class="sp-resume-kicker">Reprendre où tu t'es arrêté</span><span class="sp-resume-title">${escapeAttr(last.title || last.href)}</span><span class="sp-resume-go" aria-hidden="true">→</span></a>`;
    el.hidden = false;
  });
}

// La Boutique n'entre dans le menu qu'une fois un cahier publié : une boutique
// vide (« 0 cahier, les premiers arrivent bientôt ») est une page « en
// construction », exactement ce que la relecture AdSense sanctionne. Lu au
// build comme tout le site : publier un cahier depuis l'admin redéploie et
// fait revenir l'entrée, sans toucher au code.
export const BOUTIQUE_OUVERTE = Array.isArray(boutiqueData) && boutiqueData.some(isProduitVisible);

// Icônes de navigation en SVG (trait, 24×24) : les emoji s'affichaient
// différemment sous Windows, Android et iOS, à côté d'un logo vectoriel.
const navSvg = (d) =>
  `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
const NAV_ICONS = {
  home: navSvg('<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V20h5v-6h4v6h5V9.5"/>'),
  bac: navSvg('<path d="M4 4.5A1.5 1.5 0 0 1 5.5 3H20v15H5.5A1.5 1.5 0 0 0 4 19.5z"/><path d="M4 19.5A1.5 1.5 0 0 0 5.5 21H20v-3"/>'),
  fsjes: navSvg('<path d="m2 9 10-5 10 5-10 5z"/><path d="M6 11v5c2 1.5 4 2 6 2s4-.5 6-2v-5"/><path d="M22 9v5"/>'),
  concours: navSvg('<path d="M9 3h6l1 2h3v16H5V5h3z"/><path d="M9 11h6M9 15h4"/>'),
  excellence: navSvg('<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>'),
  eval: navSvg('<rect x="4" y="3" width="16" height="18" rx="2"/><path d="m8 9 1.5 1.5L12 8M8 15l1.5 1.5L12 14M14 9.5h3M14 15.5h3"/>'),
  blog: navSvg('<path d="M4 5h12v14H6a2 2 0 0 1-2-2z"/><path d="M16 9h4v8a2 2 0 0 1-2 2"/><path d="M7 9h6M7 13h6"/>'),
  boutique: navSvg('<path d="M5 7h14l-1 13H6z"/><path d="M9 7a3 3 0 0 1 6 0"/>'),
};

// Liens principaux du header. `icon` ne sert qu'au menu mobile.
// L'ancien bouton « Concours ouverts » (/news) est parti avec la section le
// 2026-09-24 : c'était une copie automatique d'almaster-maroc.com.
const NAV_ITEMS = [
  { key: "home", href: "/", icon: NAV_ICONS.home, label: "Accueil" },
  {
    key: "cours-menu",
    label: "Cours",
    // Menu déroulant : un espace de cours par public (lycée, université).
    children: [
      { key: "bac", href: "/bac/2bac", icon: NAV_ICONS.bac, label: "Cours Bac", desc: "Lycée · 2ᵉ Bac Sciences Économiques et Gestion" },
      { key: "cours", href: "/cours", icon: NAV_ICONS.fsjes, label: "Cours Licence FSJES", desc: "Université · modules du S1 au S6" },
    ],
  },
  {
    key: "concours-menu",
    label: "Concours",
    // Un espace de sujets par niveau d'accès, comme le menu Cours.
    children: [
      { key: "concours", href: "/concours", icon: NAV_ICONS.concours, label: "Concours Master", desc: "Après la licence · sujets FSJES, ENCG…" },
      { key: "concours-le", href: "/concours/licence-excellence", icon: NAV_ICONS.excellence, label: "Concours Licence d'excellence", desc: "Après le DEUG · accès en S5" },
    ],
  },
  { key: "eval", href: "/evaluation", icon: NAV_ICONS.eval, label: "Évaluation" },
  { key: "blog", href: "/blog", icon: NAV_ICONS.blog, label: "Blog" },
  ...(BOUTIQUE_OUVERTE ? [{ key: "boutique", href: "/boutique", icon: NAV_ICONS.boutique, label: "Boutique" }] : []),
];

// Liens à plat (menu mobile) : les entrées du menu déroulant y deviennent
// des tuiles à part entière.
const NAV_FLAT = NAV_ITEMS.flatMap((item) => item.children || [item]);

// Fires on every internal link click (nav, cards, "voir tout"...) - since
// most navigation here is a plain <a href> full page load (not Next <Link>
// client transitions), this is the only loading feedback we can actually
// show before the browser tears the page down to fetch the next one.
// `rails` opts a page into the left/right partner-ad columns — accueil and
// the three individual-item detail pages (concours, cours, article de blog)
// only. Every listing page (/concours, /cours, /blog, /evaluation, /news,
// /faq) omits it: it's the request that scoped rails to "une page sélectionnée"
// and explicitly not "la page initiale" of any section.
// `data-pa-section` is the rubrique a partner banner can target (see
// PARTNER_SECTIONS) — read by renderPartnerAds() below and by the space
// reservation CSS in app/layout.js.
export function chromeHtml({ active, showSearch, rails = false }) {
  return `
<div id="topProgressBar" data-pa-rails="${rails ? "1" : "0"}" data-pa-section="${sectionOfNav(active)}"></div>

<header class="site-header">
  <div class="header-inner">
    <a class="brand" href="/" aria-label="SaadConcours, accueil">
      <svg class="brand-logo" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs><linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#4f46e5"/><stop offset="1" stop-color="#a855f7"/>
        </linearGradient></defs>
        <rect width="64" height="64" rx="16" fill="url(#logoGrad)"/>
        <polygon points="32,13 49,21 32,29 15,21" fill="white"/>
        <line x1="49" y1="21" x2="51" y2="31" stroke="white" stroke-width="2" stroke-linecap="round"/>
        <circle cx="51" cy="32.5" r="2" fill="#fbbf24"/>
        <polygon points="32,42 13,37 13,48 32,54" fill="white"/>
        <polygon points="32,42 51,37 51,48 32,54" fill="white"/>
        <line x1="32" y1="42" x2="32" y2="54" stroke="#4f46e5" stroke-width="1.2"/>
      </svg>
      <span class="brand-text">
        <span class="brand-name"><span class="brand-saad">Saad</span><span class="brand-concours">Concours</span></span>
        <span class="brand-tagline">Bac · Licence · Master</span>
      </span>
    </a>
    <nav class="view-nav" aria-label="Navigation principale">
      ${NAV_ITEMS.map((item) => {
        if (!item.children) {
          return `<a class="view-nav-btn${active === item.key ? " active" : ""}" href="${item.href}"${active === item.key ? ' aria-current="page"' : ""}>${item.label}</a>`;
        }
        const isActive = item.children.some((c) => c.key === active);
        return `<div class="nav-dropdown">
        <button type="button" class="view-nav-btn nav-dropdown-btn${isActive ? " active" : ""}" aria-haspopup="true" aria-expanded="false">${item.label}<svg class="nav-caret" viewBox="0 0 12 12" aria-hidden="true"><path d="M3 4.5 6 7.5 9 4.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
        <div class="nav-dropdown-menu" role="menu">
          ${item.children
            .map(
              (c) =>
                `<a class="nav-dropdown-item${active === c.key ? " active" : ""}" role="menuitem" href="${c.href}"${active === c.key ? ' aria-current="page"' : ""}><span class="nav-dropdown-icon" aria-hidden="true">${c.icon}</span><span><span class="nav-dropdown-label">${c.label}</span><span class="nav-dropdown-desc">${c.desc}</span></span></a>`
            )
            .join("")}
        </div>
      </div>`;
      }).join("")}
    </nav>
    <div class="header-actions">
      ${
        showSearch
          ? `<form class="search-box" id="headerSearchForm" role="search">
        <button type="submit" class="search-box-btn" aria-label="Rechercher">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </button>
        <input type="search" id="searchInput" placeholder="Master, faculté ou ville…" aria-label="Rechercher un concours par titre du master, faculté ou ville">
      </form>`
          : ""
      }
      <button class="theme-toggle" id="themeToggle" title="Changer de thème" aria-label="Changer de thème">${ICON_MOON}</button>
      <button class="nav-toggle-btn" id="navToggleBtn" title="Menu" aria-label="Ouvrir le menu" aria-expanded="false">
        <span class="nav-toggle-bar"></span><span class="nav-toggle-bar"></span><span class="nav-toggle-bar"></span>
      </button>
    </div>
  </div>
  <div class="mobile-nav-panel" id="mobileNavPanel">
    ${NAV_FLAT
      .map(
        (item) =>
          `<a class="mobile-nav-link${active === item.key ? " active" : ""}" href="${item.href}"><span class="mobile-nav-icon" aria-hidden="true">${item.icon}</span>${item.label}</a>`
      )
      .join("")}
  </div>
</header>

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

// Shared footer with a social-links row — icons are hidden by default and
// only shown once initSocialLinks() (below) confirms a URL is actually set
// for that network, so an unconfigured link never flashes then disappears.
export function footerHtml() {
  return `
<div class="pa-zone pa-zone-footer" id="paFooter" data-pa-zone="footer"></div>
<footer>
  <div class="footer-text">Cours du Bac Sciences Économiques et de la Licence FSJES, sujets réels de concours Master — corrigés indicatifs, sources publiques citées sur chaque fiche.</div>
  <div class="footer-social" id="footerSocial"></div>
  <div class="footer-legal"><a href="/a-propos">À propos</a> · <a href="/contact">Contact</a> · <a href="/faq">FAQ</a> · <a href="/confidentialite">Confidentialité</a> · <a href="/mentions-legales">Mentions légales</a></div>
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
    const theme = document.documentElement.getAttribute("data-theme");
    const btn = document.getElementById("themeToggle");
    if (!btn) return;
    btn.innerHTML = theme === "light" ? ICON_SUN : ICON_MOON;
    const label = theme === "light" ? "Passer au thème sombre" : "Passer au thème clair";
    btn.setAttribute("aria-label", label);
    btn.title = label;
  }

  applyThemeButton();
  const themeBtn = document.getElementById("themeToggle");
  if (themeBtn && themeBtn.dataset.wired !== "1") {
    themeBtn.dataset.wired = "1";
    themeBtn.addEventListener("click", () => {
      const root = document.documentElement;
      const current = root.getAttribute("data-theme");
      const next = current === "light" ? "dark" : "light";
      // Fondu limité au changement de thème (voir html.theme-anim, globals.css).
      root.classList.add("theme-anim");
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem("theme", next);
      } catch {}
      applyThemeButton();
      clearTimeout(themeBtn._animTimer);
      themeBtn._animTimer = setTimeout(() => root.classList.remove("theme-anim"), 260);
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
      const menuOpen = document.getElementById("mobileNavPanel")?.classList.contains("open");
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

  // Header search box is shared markup (home, concours...) but only
  // /concours has a live results grid to filter in place (ConcoursExplorer
  // wires its own "input" listener for that). Everywhere else — starting
  // with the homepage — Enter/submit sends the visitor to /concours?q=...,
  // which ConcoursExplorer already reads on load to prefill and apply the
  // filter (same param the old "voir tout" search-miss flow used).
  (function initHeaderSearch() {
    const form = document.getElementById("headerSearchForm");
    const input = document.getElementById("searchInput");
    if (!form || !input || form.dataset.wired === "1") return;
    form.dataset.wired = "1";

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (window.location.pathname === "/concours") return;
      const q = input.value.trim();
      window.location.href = "/concours" + (q ? "?q=" + encodeURIComponent(q) : "");
    });
  })();

  (function initNavDropdowns() {
    document.querySelectorAll(".nav-dropdown").forEach((dd) => {
      const btn = dd.querySelector(".nav-dropdown-btn");
      if (!btn || btn.dataset.wired === "1") return;
      btn.dataset.wired = "1";
      const setOpen = (open) => {
        dd.classList.toggle("open", open);
        btn.setAttribute("aria-expanded", String(open));
      };
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        setOpen(!dd.classList.contains("open"));
      });
      dd.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          setOpen(false);
          btn.focus();
        }
      });
      document.addEventListener("click", (e) => {
        if (!dd.contains(e.target)) setOpen(false);
      });
    });
  })();

  (function initMobileNav() {
    const toggleBtn = document.getElementById("navToggleBtn");
    const panel = document.getElementById("mobileNavPanel");
    if (!toggleBtn || !panel || toggleBtn.dataset.wired === "1") return;
    toggleBtn.dataset.wired = "1";

    function close() {
      panel.classList.remove("open");
      toggleBtn.setAttribute("aria-expanded", "false");
    }
    function toggle() {
      const willOpen = !panel.classList.contains("open");
      panel.classList.toggle("open", willOpen);
      toggleBtn.setAttribute("aria-expanded", String(willOpen));
    }

    toggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggle();
    });
    panel.addEventListener("click", (e) => {
      if (e.target.closest("a")) close();
    });
    document.addEventListener("click", (e) => {
      if (!panel.contains(e.target) && e.target !== toggleBtn) close();
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 860) close();
    });
  })();
};

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
