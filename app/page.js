import { getAllConcours, getAllNews, getSettings } from "@/lib/store";
import { chromeHtml, footerHtml } from "./_shared/chrome";
import { escapeHtml } from "./_shared/concoursCard";
import { daysUntil, urgency, visibleNews } from "./_shared/newsCard";
import HomeClient from "./HomeClient";

const ACTIONS = [
  {
    href: "/concours",
    icon: "📚",
    title: "Concours",
    desc: "Sujets réels de concours d'accès aux Masters, filtrables par ville, filière, année.",
    color: "blue",
  },
  {
    href: "/cours",
    icon: "📖",
    title: "Cours",
    desc: "Fiches synthétiques par module : définitions, formules, points clés à retenir.",
    color: "violet",
  },
  {
    href: "/evaluation",
    icon: "📝",
    title: "Évaluation",
    desc: "QCM d'auto-évaluation par module, en conditions concours, avec correction.",
    color: "green",
  },
  {
    href: "/news",
    icon: "🆕",
    title: "Concours ouverts",
    desc: "Masters économie-gestion actuellement ouverts, mis à jour automatiquement.",
    color: "amber",
  },
  {
    href: "/blog",
    icon: "📰",
    title: "Blog",
    desc: "Méthode, matières à préparer et conseils pour réussir ton concours d'accès au Master.",
    color: "red",
  },
];

// Server-rendered on first load (mirrors app/concours/page.js, app/news/page.js)
// — this used to be a pure client SPA reader: the hero text was the only
// thing in the raw HTML, and the action cards, "concours récemment ouverts"
// and "derniers concours ajoutés" sections were all built by DOM
// manipulation inside a useEffect after a round trip to /api/news and
// /api/concours. That meant the homepage — the page most likely to earn
// backlinks and get crawled first — shipped an almost-empty document.
// HomeClient only wires the alert subscribe form and the partner banner ad,
// both of which need no SSR (a form has nothing to crawl; an ad slot has
// nothing worth indexing).
export default async function HomePage() {
  const [allConcours, rawNews, settings] = await Promise.all([
    getAllConcours().catch(() => []),
    getAllNews().catch(() => []),
    getSettings().catch(() => null),
  ]);

  // Storage appends new entries to the end of the array (see lib/store.js
  // addItem) - same "tail = most recent" logic as the admin dashboard's
  // "Derniers concours ajoutés" widget.
  const recentConcours = allConcours.slice(-4).reverse();

  // Interrupteur des réglages (« Encarts concours sur la page d'accueil ») :
  // masque les deux encarts alimentés par les concours ouverts sans toucher
  // à /news. Absent = activé, comme newsScraperEnabled.
  const showNewsBoxes = settings?.homeNewsBoxesEnabled !== false;

  const newsItems = visibleNews(rawNews, settings);
  const open = newsItems.filter((i) => !i.cloture);
  const urgent = open
    .filter((i) => i.date_limite && daysUntil(i.date_limite) >= 0 && daysUntil(i.date_limite) <= 7)
    .sort((a, b) => daysUntil(a.date_limite) - daysUntil(b.date_limite));
  const recentOpen = [...open]
    .sort((a, b) => (b.date_publication || "").localeCompare(a.date_publication || ""))
    .slice(0, 3);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "home", showSearch: false, rails: true }) }} />

      <div className="home-view">
        <section className="home-hero">
          <h1 className="home-hero-title">Prépare ton concours d'accès au Master 🎓</h1>
          <p className="home-hero-sub">
            Sujets réels, fiches de cours et QCM d'auto-évaluation pour les Masters économie-gestion
            (Finance & Audit, Management & RH, Marketing & Commerce, Économie Appliquée, Data & Économétrie)
            des universités marocaines.
          </p>
        </section>

        <div id="homeBannerAd" />

        {showNewsBoxes && urgent.length > 0 && (
          <section className="urgent-alert" id="urgentAlert">
            <div className="urgent-alert-head">
              <span className="urgent-alert-title">
                ⏰ <strong id="urgentCount">{urgent.length}</strong> concours ferment bientôt
              </span>
              <a className="home-alert-link" href="/news">Voir tout →</a>
            </div>
            <div
              className="urgent-alert-list"
              id="urgentAlertList"
              dangerouslySetInnerHTML={{
                __html: urgent
                  .slice(0, 5)
                  .map(
                    (item) => `
              <div class="urgent-alert-item">
                <span>${escapeHtml(item.titre)}${item.ville ? " · " + escapeHtml(item.ville) : ""}</span>
                <span class="urgent-alert-date">${escapeHtml(item.date_limite)}</span>
              </div>`
                  )
                  .join(""),
              }}
            />
            <form className="alert-subscribe-form" id="alertForm">
              <input type="email" id="alertEmail" placeholder="Ton email pour être alerté avant la clôture" required />
              <button type="submit">🔔 M'alerter</button>
            </form>
            <div className="alert-form-msg" id="alertFormMsg" />
          </section>
        )}

        {showNewsBoxes && recentOpen.length > 0 && (
          <section className="home-alert" id="homeAlert">
            <div className="home-alert-head">
              <span className="home-alert-title">🔔 Concours récemment ouverts</span>
              <a className="home-alert-link" href="/news">Voir tout →</a>
            </div>
            <div
              className="home-alert-list"
              id="homeAlertList"
              dangerouslySetInnerHTML={{
                __html: recentOpen
                  .map(
                    (item) => `
              <a class="home-alert-item" href="${escapeHtml(item.lien_inscription || item.source || "/news")}" target="_blank" rel="noopener">
                <span class="home-alert-etab">${escapeHtml(item.etablissement || "Autre")}</span>
                <span class="home-alert-titre">${escapeHtml(item.titre)}</span>
                ${item.ville ? `<span class="home-alert-ville">📍 ${escapeHtml(item.ville)}</span>` : ""}
              </a>`
                  )
                  .join(""),
              }}
            />
          </section>
        )}

        <section className="home-actions">
          <h2 className="home-section-title">Que veux-tu faire ?</h2>
          <div
            className="home-actions-grid"
            id="homeActionsGrid"
            dangerouslySetInnerHTML={{
              __html: ACTIONS.map(
                (a) => `
              <a href="${a.href}" class="home-action-card color-${a.color}">
                <div class="home-action-icon">${a.icon}</div>
                <div class="home-action-title">${escapeHtml(a.title)}</div>
                <div class="home-action-desc">${escapeHtml(a.desc)}</div>
                <div class="home-action-go">Ouvrir →</div>
              </a>`
              ).join(""),
            }}
          />
        </section>

        {recentConcours.length > 0 && (
          <section className="home-recent" id="homeRecent">
            <div className="home-recent-head">
              <h2 className="home-section-title">🆕 Derniers concours ajoutés</h2>
              <a className="home-alert-link" href="/concours">Voir tout →</a>
            </div>
            <div
              className="cd-related-grid"
              id="homeRecentGrid"
              dangerouslySetInnerHTML={{
                __html: recentConcours
                  .map(
                    (c) => `
              <a class="cd-related-item" href="/concours/${encodeURIComponent(c.id)}">
                <div class="cd-related-title">${escapeHtml(c.etablissement)} — ${escapeHtml(c.ville)} — ${escapeHtml(String(c.annee))}</div>
                <div class="cd-related-sub">${escapeHtml(c.master_reel || c.filiere || "")}</div>
                ${c.date_ajout ? `<div class="cd-related-date">🗓️ Ajouté le ${escapeHtml(c.date_ajout)}</div>` : ""}
              </a>`
                  )
                  .join(""),
              }}
            />
          </section>
        )}
      </div>

      <div dangerouslySetInnerHTML={{ __html: footerHtml() }} />

      <HomeClient settings={settings} />
    </>
  );
}
