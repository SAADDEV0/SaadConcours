import { getAllNews, getSettings } from "@/lib/store";
import { chromeHtml, footerHtml } from "../_shared/chrome";
import { newsCardHtml, sortNewsByUrgency, urgency, visibleNews } from "../_shared/newsCard";
import { breadcrumbJsonLd, collectionJsonLd } from "../_shared/listingSchema";
import JsonLd from "../_shared/JsonLd";
import NewsExplorer from "./NewsExplorer";

// Served as prerendered HTML revalidated hourly instead of rendered per
// request. lib/github.js reads the data JSON with `cache: "no-store"` (
// concours.json is 2.59MB, past Next's 2MB fetch-cache entry limit), and a
// no-store fetch in the render path opts the whole route out of static
// generation -- confirmed by building with and without GITHUB_TOKEN, where
// these routes flip between `o` and `f`.
//
// No revalidation window at all: freshness comes from deploys, not ISR.
// Every admin edit commits to GitHub, which triggers a redeploy that rebuilds
// every page -- so an hourly revalidate was re-rendering pages that were
// already current and billing Fluid CPU for it.
export const dynamic = "force-static";
export const revalidate = false;

const ETAB_GROUPS = ["Tous", "FSJES", "ENCG", "FEG/FSEG", "Autre"];

// Server-rendered on first load (mirrors app/concours/page.js, app/cours/page.js,
// app/evaluation/page.js) — this used to be a pure client SPA reader (fetch
// in useEffect, empty grid until JS ran), so every "concours ouvert" here
// was invisible to crawlers and the page had nothing to paint until the
// round trip to /api/news finished. The search box / établissement chips /
// "afficher les clôturés" toggle are a client-side filter (NewsExplorer)
// layered on top — the full open list below is what the server sends on
// the very first response, filters or no filters, JS or no JS.
export default async function NewsPage() {
  const [rawNews, settings] = await Promise.all([
    getAllNews().catch(() => []),
    getSettings().catch(() => null),
  ]);
  const newsItems = sortNewsByUrgency(visibleNews(rawNews, settings));
  const open = newsItems.filter((i) => !i.cloture);
  const urgent = open.filter((i) => urgency(i) === "urgent");

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{ name: "Concours ouverts", path: "/news" }]),
          collectionJsonLd({
            name: "Concours d'accès aux Masters actuellement ouverts au Maroc",
            description:
              "Liste à jour des concours d'accès aux Masters ouverts aux inscriptions au Maroc, avec dates limites et liens d'inscription.",
            path: "/news",
          }),
        ]}
      />
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "news", showSearch: false }) }} />

      <div className="nw-view">
        <h1 className="eval-title">🆕 Concours ouverts</h1>
        <p className="eval-sub">
          Masters actuellement ouverts, mis à jour automatiquement depuis{" "}
          <a href="https://www.almaster-maroc.com/" target="_blank" rel="noopener">almaster-maroc.com</a> toutes les
          ~6 heures.
        </p>

        {urgent.length > 0 && (
          <section className="urgent-alert" id="urgentAlert">
            <div className="urgent-alert-head">
              <span className="urgent-alert-title">
                ⏰ <strong id="urgentCount">{urgent.length}</strong> concours ferment bientôt
              </span>
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
                <span>${item.titre}${item.ville ? " · " + item.ville : ""}</span>
                <span class="urgent-alert-date">${item.date_limite}</span>
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

        <div className="nw-toolbar">
          <div className="nw-search">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
            <input type="text" id="nwSearch" placeholder="Rechercher (établissement, ville, titre...)" />
          </div>
          <div className="nw-chip-row" id="nwEtabChips">
            {ETAB_GROUPS.map((g) => (
              <span key={g} className={`chip${g === "Tous" ? " active" : ""}`} data-group={g}>
                {g}
              </span>
            ))}
          </div>
          <label className="nw-toggle">
            <input type="checkbox" id="nwShowClosed" />
            Afficher les clôturés
          </label>
        </div>

        <div className="nw-stats" id="nwStats">
          <span className="stat-pill">
            {open.length} concours ouvert{open.length > 1 ? "s" : ""}
          </span>
          {urgent.length > 0 && (
            <span className="stat-pill nw-stat-urgent">
              🔥 {urgent.length} clôture{urgent.length > 1 ? "nt" : ""} sous 7 jours
            </span>
          )}
        </div>

        <div className="nw-grid" id="nwGrid" dangerouslySetInnerHTML={{ __html: open.map(newsCardHtml).join("") || `<div class="empty-state">Aucun concours ouvert pour le moment.</div>` }} />
      </div>

      <div dangerouslySetInnerHTML={{ __html: footerHtml() }} />

      <NewsExplorer initialData={newsItems} />
    </>
  );
}
