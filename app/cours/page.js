import { getAllCours } from "@/lib/store";
import { chromeHtml, footerHtml } from "../_shared/chrome";
import { coursCardHtml } from "../_shared/coursCard";
import { COURS_CATEGORIES, LICENCE_PARCOURS, LICENCE_SEMESTRES, LICENCE_FILIERES, coursSortComparator } from "../../lib/coursTaxonomy";
import { breadcrumbJsonLd, collectionJsonLd } from "../_shared/listingSchema";
import JsonLd from "../_shared/JsonLd";
import CoursExplorer from "./CoursExplorer";

// Server-rendered on first load (mirrors app/concours/page.js) so every
// module already has a real <a href="/cours/[id]"> link — and the fiche's
// title/description text — in the raw HTML for crawlers. The sidebar
// filters (same .layout/.filters pattern as /concours: a <select> per
// dimension, cascading, reset button) are a client-side filter
// (CoursExplorer) layered on top — the full list below is what the server
// sends on the very first response, filters or no filters, JS or no JS.
export default async function CoursPage() {
  const cours = (await getAllCours().catch(() => [])).sort(coursSortComparator);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{ name: "Cours", path: "/cours" }]),
          collectionJsonLd({
            name: "Fiches de cours par module — Master Maroc",
            description:
              "Fiches de cours synthétiques par module (comptabilité, analyse financière, management, marketing, macroéconomie...) pour réviser les concours d'accès aux Masters marocains.",
            path: "/cours",
            // Only the published fiches: the others have no page to link to
            // (generateStaticParams and the sitemap filter on `available` too).
            items: cours
              .filter((c) => c.available)
              .map((c) => ({ name: c.title, path: `/cours/${encodeURIComponent(c.id)}` })),
          }),
        ]}
      />
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "cours", showSearch: false }) }} />

      <div className="layout" id="viewCours">
        <aside className="filters">
          <h3>Filtrer</h3>
          <div className="filter-group">
            <label style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Parcours (Licence)</label>
            <select id="filterParcours">
              <option value="">Tous les parcours</option>
              {LICENCE_PARCOURS.map((p) => (
                <option key={p.code} value={p.code}>
                  {p.label}
                </option>
              ))}
            </select>
          </div>
          <div className="filter-group">
            <label style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Semestre</label>
            <select id="filterSemestre">
              <option value="">Tous les semestres</option>
              {LICENCE_SEMESTRES.map((s) => (
                <option key={s.code} value={s.code}>
                  {s.label}
                  {s.specialisation ? " — Spécialisation" : ""}
                </option>
              ))}
            </select>
          </div>
          <div className="filter-group">
            <label style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Filière (S5-S6)</label>
            <select id="filterFiliere">
              <option value="">Toutes les filières</option>
              {LICENCE_FILIERES.map((f) => (
                <option key={f.code} value={f.code} data-parcours={f.parcours}>
                  {f.label}
                </option>
              ))}
            </select>
          </div>
          <div className="filter-group">
            <label style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Matière</label>
            <select id="filterCategorie">
              <option value="">Toutes les matières</option>
              {COURS_CATEGORIES.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.emoji} {c.label}
                </option>
              ))}
            </select>
          </div>
          <div className="filter-group">
            <label style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Recherche</label>
            <input type="text" id="coursSearchInput" placeholder="Module, notion..." />
          </div>
          <button className="reset-btn" id="coursResetBtn">✕ Réinitialiser les filtres</button>
        </aside>

        <main>
          <h1 className="eval-title">📖 Cours par module</h1>
          <p className="eval-sub">Fiches de cours synthétiques : définitions, formules et points clés à retenir, par module.</p>
          <div className="results-header">
            <div className="results-count" id="coursResultsCount">
              {cours.length} module{cours.length > 1 ? "s" : ""}
            </div>
          </div>
          <div
            className="grid"
            id="coursModuleGrid"
            dangerouslySetInnerHTML={{ __html: cours.map(coursCardHtml).join("") }}
          />
        </main>
      </div>

      <div dangerouslySetInnerHTML={{ __html: footerHtml() }} />

      <CoursExplorer initialData={cours} />
    </>
  );
}
