import { getAllConcours } from "@/lib/store";
import { chromeHtml, footerHtml } from "../_shared/chrome";
import { concoursCardHtml } from "../_shared/concoursCard";
import ConcoursExplorer from "./ConcoursExplorer";

// Server-rendered on first load (unlike the old client-only SPA version) so
// the full list of concours — real <a href="/concours/[id]"> links and text —
// is already in the raw HTML for crawlers. ConcoursExplorer then hydrates on
// top to power the filters/search without wiping this initial markup unless
// the visitor actually filters (or lands with a ?q= from the sitelinks
// search box, see app/layout.js's WebSite/SearchAction JSON-LD).
export default async function ConcoursPage() {
  const concours = await getAllConcours().catch(() => []);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "concours", showSearch: true }) }} />

      <div className="layout" id="viewConcours">
        <aside className="filters">
          <h3>Filtrer</h3>
          <div className="filter-group">
            <label style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Ville</label>
            <select id="filterVille"><option value="">Toutes les villes</option></select>
          </div>
          <div className="filter-group">
            <label style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Catégorie</label>
            <select id="filterCategorie"><option value="">Toutes les catégories</option></select>
          </div>
          <div className="filter-group">
            <label style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Filière</label>
            <select id="filterFiliere"><option value="">Toutes les filières</option></select>
          </div>
          <div className="filter-group">
            <label style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Établissement</label>
            <select id="filterEtab"><option value="">Tous les établissements</option></select>
          </div>
          <div className="filter-group">
            <label style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Année</label>
            <select id="filterAnnee"><option value="">Toutes les années</option></select>
          </div>
          <div className="filter-group">
            <label style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Module requis</label>
            <select id="filterModule"><option value="">Tous les modules</option></select>
          </div>
          <button className="reset-btn" id="resetBtn">✕ Réinitialiser les filtres</button>
        </aside>

        <main>
          <h1 className="concours-h1">Concours d'accès aux Masters — sujets réels</h1>
          <div className="results-header">
            <div className="results-count" id="resultsCount">
              {concours.length} résultat{concours.length > 1 ? "s" : ""}
            </div>
          </div>
          <div
            className="grid"
            id="grid"
            dangerouslySetInnerHTML={{ __html: concours.map(concoursCardHtml).join("") }}
          />
        </main>
      </div>

      <div dangerouslySetInnerHTML={{ __html: footerHtml() }} />

      <ConcoursExplorer initialData={concours} />
    </>
  );
}
