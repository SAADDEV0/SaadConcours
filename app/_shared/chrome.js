// Shared header/banner markup + boilerplate script (theme, dua, visitor counter)
// reused verbatim across every page since they're separate routes now
// instead of one single-page app.

export function chromeHtml({ active, showSearch }) {
  return `
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
      <a class="view-nav-btn${active === "home" ? " active" : ""}" href="/">🏠 Accueil</a>
      <a class="view-nav-btn${active === "concours" ? " active" : ""}" href="/concours">📚 Concours</a>
      <a class="view-nav-btn${active === "cours" ? " active" : ""}" href="/cours">📖 Cours</a>
      <a class="view-nav-btn${active === "eval" ? " active" : ""}" href="/evaluation">📝 Évaluation</a>
      <a class="view-nav-btn${active === "news" ? " active" : ""}" href="/news">🆕 Concours ouverts</a>
    </nav>
    ${active === "concours" ? `<div class="stat-pill" id="statPill">— concours</div>` : ""}
    <div class="stat-pill" id="visitorPill" title="Nombre de visites">👁 —</div>
    <button class="theme-toggle" id="themeToggle" title="Changer de thème" aria-label="Changer de thème">🌙</button>
  </div>
</header>
`;
}

export const chromeScript = function initChrome() {
  (function initVisitorCounter() {
    const alreadyCounted = localStorage.getItem("sc_visited") === "1";
    const endpoint = alreadyCounted
      ? "https://abacus.jasoncameron.dev/get/saadconcours-maroc/visits"
      : "https://abacus.jasoncameron.dev/hit/saadconcours-maroc/visits";
    fetch(endpoint)
      .then((r) => r.json())
      .then((d) => {
        if (!alreadyCounted) localStorage.setItem("sc_visited", "1");
        const el = document.getElementById("visitorPill");
        if (el && typeof d.value === "number") el.textContent = `👁 ${d.value.toLocaleString("fr-FR")} visites`;
      })
      .catch(() => {
        const el = document.getElementById("visitorPill");
        if (el) el.style.display = "none";
      });
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
};

// A public asset path stored in JSON as "data/foo.json" or "images/x.png"
// needs a leading slash now that pages live at nested routes (/cours, /admin, ...).
export function pub(path) {
  if (!path) return path;
  return path.startsWith("/") ? path : "/" + path;
}
