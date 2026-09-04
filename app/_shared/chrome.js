// Shared header/banner markup + boilerplate script (theme, dua, visitor counter)
// reused verbatim across every page since they're separate routes now
// instead of one single-page app.

const NAV_ITEMS = [
  { key: "home", href: "/", label: "Accueil" },
  { key: "concours", href: "/concours", label: "Concours" },
  { key: "cours", href: "/cours", label: "Cours" },
  { key: "eval", href: "/evaluation", label: "Évaluation" },
  { key: "news", href: "/news", label: "Concours ouverts" },
  { key: "blog", href: "/blog", label: "Blog" },
];

// Fires on every internal link click (nav, cards, "voir tout"...) - since
// most navigation here is a plain <a href> full page load (not Next <Link>
// client transitions), this is the only loading feedback we can actually
// show before the browser tears the page down to fetch the next one.
export function chromeHtml({ active, showSearch }) {
  return `
<div id="topProgressBar"></div>
<div class="dua-banner">
  <div class="dua-inner">
    <span class="dua-deco">✦</span>
    <span>
      <span class="dua-text" id="duaText" dir="rtl" lang="ar"></span>
      <span class="dua-fr" id="duaFr"></span>
    </span>
    <span class="dua-deco">✦</span>
  </div>
</div>

<header>
  <div class="header-inner">
    <a class="brand" href="/" style="text-decoration:none;">
      <svg class="brand-logo" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
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
      <span><span class="brand-saad">Saad</span><span class="brand-concours">Concours</span></span>
    </a>
    ${
      showSearch
        ? `<div class="search-box">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
      <input type="text" id="searchInput" placeholder="Rechercher (établissement, ville, mot-clé de l'énoncé...)">
    </div>`
        : `<div class="search-box" style="flex:1;"></div>`
    }
    <nav class="view-nav">
      ${NAV_ITEMS.map(
        (item) =>
          `<a class="view-nav-btn${active === item.key ? " active" : ""}" href="${item.href}"><span class="view-nav-label">${item.label}</span></a>`
      ).join("")}
    </nav>
    ${active === "concours" ? `<div class="stat-pill" id="statPill">— concours</div>` : ""}
    ${active === "blog" ? `<div class="stat-pill" id="statPill">— articles</div>` : ""}
    <button class="theme-toggle" id="themeToggle" title="Changer de thème" aria-label="Changer de thème">🌙</button>
    <button class="nav-toggle-btn" id="navToggleBtn" title="Menu" aria-label="Ouvrir le menu" aria-expanded="false">
      <span class="nav-toggle-bar"></span><span class="nav-toggle-bar"></span><span class="nav-toggle-bar"></span>
    </button>
  </div>
  <div class="mobile-nav-panel" id="mobileNavPanel">
    ${NAV_ITEMS.map(
      (item) =>
        `<a class="mobile-nav-link${active === item.key ? " active" : ""}" href="${item.href}">${item.label}</a>`
    ).join("")}
  </div>
</header>
`;
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
<footer>
  <div class="footer-text">Base de données de sujets de concours réels — corrigés indicatifs quand disponibles, sources publiques citées sur chaque fiche.</div>
  <div class="footer-social" id="footerSocial"></div>
  <div class="footer-legal"><a href="/faq">FAQ</a> · <a href="/confidentialite">Confidentialité</a></div>
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

  (function initSocialLinks() {
    const el = document.getElementById("footerSocial");
    if (!el) return;
    fetch("/api/settings")
      .then((r) => r.json())
      .then((settings) => {
        const links = SOCIAL_NETWORKS.filter((n) => settings && settings[n.key]);
        if (!links.length) return;
        el.innerHTML = links
          .map((n) => {
            const raw = settings[n.key];
            const href = n.hrefPrefix ? n.hrefPrefix + raw : raw;
            return `<a class="footer-social-link" href="${href}" target="_blank" rel="noopener noreferrer" title="${n.label}" aria-label="${n.label}">${n.icon}</a>`;
          })
          .join("");
      })
      .catch(() => {});
  })();

  // First-party visit tracking, replacing the old public visitor-counter
  // widget — no longer shown on the site, but every unique browser still
  // pings once (localStorage-gated, same "first hit only" semantics the
  // old counter used) so the real number stays visible in /admin.
  (function initVisitorTracking() {
    if (localStorage.getItem("sc_visited") === "1") return;
    localStorage.setItem("sc_visited", "1");

    function detectSource() {
      try {
        const utm = new URLSearchParams(location.search).get("utm_source");
        if (utm) return utm.toLowerCase();
        const ref = document.referrer;
        if (!ref) return "direct";
        const host = new URL(ref).hostname.replace(/^www\./, "");
        if (host === location.hostname) return "direct";
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

    fetch("/api/track/pageview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source: detectSource() }),
      keepalive: true,
    }).catch(() => {});
  })();

  (function initDua() {
    const DUAS = [
      { ar: "اللهم يسر ولا تعسر", fr: "Ô Allah, facilite et ne rends pas difficile." },
      { ar: "سبحان الله وبحمده، سبحان الله العظيم", fr: "Gloire et louange à Allah, Gloire à Allah l'Immense." },
      { ar: "حسبنا الله ونعم الوكيل", fr: "Allah nous suffit, Il est le meilleur garant." },
      { ar: "رب اشرح لي صدري ويسر لي أمري", fr: "Seigneur, ouvre ma poitrine et facilite ma tâche." },
      { ar: "لا حول ولا قوة إلا بالله", fr: "Il n'y a de force ni de puissance qu'en Allah." },
      { ar: "اللهم إني أسألك العفو والعافية", fr: "Ô Allah, je Te demande le pardon et la santé." },
      { ar: "سبحان الله والحمد لله ولا إله إلا الله والله أكبر", fr: "Gloire à Allah, louange à Lui, nul dieu qu'Lui, Allah est le plus Grand." },
      { ar: "أستغفر الله العظيم وأتوب إليه", fr: "Je demande pardon à Allah l'Immense et me repens à Lui." },
      { ar: "اللهم أعني على ذكرك وشكرك وحسن عبادتك", fr: "Ô Allah, aide-moi à T'évoquer, Te remercier et bien T'adorer." },
      { ar: "ربنا آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار", fr: "Seigneur, accorde-nous le bien ici-bas et dans l'au-delà." },
      { ar: "لا إله إلا الله وحده لا شريك له", fr: "Nul dieu qu'Allah, Seul, sans associé." },
      { ar: "اللهم اجعل خير أعمالي خواتيمها", fr: "Ô Allah, fais que mes meilleures actions soient les dernières." },
      { ar: "رضيت بالله ربا وبالإسلام دينا وبمحمد نبيا", fr: "J'agrée Allah comme Seigneur, l'Islam comme religion, Muhammad comme Prophète." },
      { ar: "اللهم إنك عفو تحب العفو فاعف عني", fr: "Ô Allah, Tu es Pardonneur et aimes le pardon, pardonne-moi." },
    ];
    const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
    const pick = DUAS[dayOfYear % DUAS.length];
    const elAr = document.getElementById("duaText");
    const elFr = document.getElementById("duaFr");
    if (elAr) elAr.textContent = pick.ar;
    if (elFr) elFr.textContent = pick.fr;
  })();

  (function initTheme() {
    const saved = localStorage.getItem("theme");
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const theme = saved || (prefersLight ? "light" : "dark");
    document.documentElement.setAttribute("data-theme", theme);
  })();

  function applyThemeButton() {
    const theme = document.documentElement.getAttribute("data-theme");
    const btn = document.getElementById("themeToggle");
    if (btn) btn.textContent = theme === "light" ? "☀️" : "🌙";
  }

  applyThemeButton();
  const themeBtn = document.getElementById("themeToggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      applyThemeButton();
    });
  }

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
export function pub(path) {
  if (!path) return path;
  return path.startsWith("/") ? path : "/" + path;
}

// Fire-and-forget usage counters feeding the admin stats dashboard. Never
// awaited by callers and never allowed to throw — a tracking hiccup must
// not get in the way of someone's PDF download or a page loading.
export function trackPdfDownload(kind, id) {
  try {
    fetch("/api/track/pdf-download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ kind, id }),
      keepalive: true,
    }).catch(() => {});
  } catch {}
}

export function trackConcoursView(id) {
  try {
    fetch("/api/track/concours-view", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
      keepalive: true,
    }).catch(() => {});
  } catch {}
}
