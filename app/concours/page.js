import { getAllConcours } from "@/lib/store";
import { chromeHtml, footerHtml } from "../_shared/chrome";
import { concoursCardHtml } from "../_shared/concoursCard";
import { breadcrumbJsonLd, collectionJsonLd } from "../_shared/listingSchema";
import JsonLd from "../_shared/JsonLd";
import ConcoursExplorer from "./ConcoursExplorer";

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

// Server-rendered on first load (unlike the old client-only SPA version) so
// the full list of concours — real <a href="/concours/[id]"> links and text —
// is already in the raw HTML for crawlers. ConcoursExplorer then hydrates on
// top to power the filters/search without wiping this initial markup unless
// the visitor actually filters (or lands with a ?q= from the sitelinks
// search box, see app/layout.js's WebSite/SearchAction JSON-LD).
export default async function ConcoursPage() {
  const concours = await getAllConcours().catch(() => []);
  const nbEtabs = new Set(concours.map((c) => c.etablissement).filter(Boolean)).size;
  const nbVilles = new Set(concours.map((c) => c.ville).filter(Boolean)).size;
  const nbCorriges = concours.filter((c) => c.corrige_md || c.corrige_from_github).length;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{ name: "Concours", path: "/concours" }]),
          collectionJsonLd({
            name: "Sujets de concours d'accès aux Masters au Maroc",
            description:
              "Sujets de concours réellement tombés aux Masters économie-gestion des universités marocaines (FSJES, ENCG), avec énoncés complets et corrigés indicatifs.",
            path: "/concours",
            items: concours.map((c) => ({
              name: `${c.master_reel || c.filiere || "Concours"} — ${c.etablissement} ${c.annee}`,
              path: `/concours/${encodeURIComponent(c.id)}`,
            })),
          }),
        ]}
      />
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "concours", showSearch: true }) }} />

      <div className="bac-space site-space">
        <div className="bac-wrap">
          <section className="bac-hero" style={{ "--hero-icon": '"📚"' }}>
            <div className="bac-eyebrow">Master · Concours d'accès</div>
            <h1>Concours d'accès aux Masters — sujets réels</h1>
            {/* Seule page de liste sans texte sous son H1 à l'origine : ce
               paragraphe porte la requête principale du site (« concours
               master maroc »). */}
            <p>
              {concours.length} sujets de concours d'accès aux Masters économie-gestion réellement tombés dans les
              universités marocaines (FSJES, ENCG, facultés privées), classés par ville, établissement, filière et
              année. Chaque fiche donne l'énoncé complet, les scans du sujet original quand ils existent, un corrigé
              indicatif lorsqu'il est disponible, et un export PDF gratuit — sans inscription.
            </p>
            <div className="bac-hero-stats">
              <span className="bac-stat">
                <strong>{concours.length}</strong> sujets
              </span>
              <span className="bac-stat">
                <strong>{nbEtabs}</strong> établissements
              </span>
              <span className="bac-stat">
                <strong>{nbVilles}</strong> villes
              </span>
              <span className="bac-stat">
                <strong>{nbCorriges}</strong> corrigés
              </span>
            </div>
          </section>

          <div className="bac-mat-layout">
            <aside className="bac-side">
              <div className="bac-side-card">
                <div className="bac-side-title">Filtrer les sujets</div>
                <label className="sp-field">
                  <span>Ville</span>
                  <select id="filterVille">
                    <option value="">Toutes les villes</option>
                  </select>
                </label>
                <label className="sp-field">
                  <span>Catégorie</span>
                  <select id="filterCategorie">
                    <option value="">Toutes les catégories</option>
                  </select>
                </label>
                <label className="sp-field">
                  <span>Filière</span>
                  <select id="filterFiliere">
                    <option value="">Toutes les filières</option>
                  </select>
                </label>
                <label className="sp-field">
                  <span>Établissement</span>
                  <select id="filterEtab">
                    <option value="">Tous les établissements</option>
                  </select>
                </label>
                <label className="sp-field">
                  <span>Année</span>
                  <select id="filterAnnee">
                    <option value="">Toutes les années</option>
                  </select>
                </label>
                <label className="sp-field">
                  <span>Module requis</span>
                  <select id="filterModule">
                    <option value="">Tous les modules</option>
                  </select>
                </label>
                <button type="button" className="sp-reset sp-reset-full" id="resetBtn">
                  ✕ Réinitialiser les filtres
                </button>
              </div>
              <div className="bac-side-card">
                <div className="bac-side-title">Pour aller plus loin</div>
                <a href="/news" className="bac-side-link">
                  Concours ouverts <span>🆕</span>
                </a>
                <a href="/evaluation" className="bac-side-link">
                  QCM d'entraînement <span>📝</span>
                </a>
                <a href="/cours" className="bac-side-link">
                  Cours Licence FSJES <span>📖</span>
                </a>
              </div>
            </aside>

            <main className="bac-main">
              <div className="sp-results-head">
                <h2 className="bac-section-title">Tous les sujets</h2>
                <span className="sp-count" id="resultsCount">
                  {concours.length} résultat{concours.length > 1 ? "s" : ""}
                </span>
              </div>
              <div className="sp-card-grid" id="grid" dangerouslySetInnerHTML={{ __html: concours.map(concoursCardHtml).join("") }} />
            </main>
          </div>
        </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: footerHtml() }} />

      <ConcoursExplorer initialData={concours} />
    </>
  );
}
