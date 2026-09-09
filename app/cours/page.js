import { getAllCours } from "@/lib/store";
import { chromeHtml, footerHtml } from "../_shared/chrome";
import { coursCardHtml } from "../_shared/coursCard";
import { COURS_CATEGORIES } from "../../lib/coursTaxonomy";
import CoursExplorer from "./CoursExplorer";

// Server-rendered on first load (mirrors app/concours/page.js) so every
// module already has a real <a href="/cours/[id]"> link — and the fiche's
// title/description text — in the raw HTML for crawlers. A card click is a
// plain navigation to that dedicated page (no inline reader here anymore),
// exactly like a concours card navigates to /concours/[id]. The category
// chips are a client-side filter (CoursExplorer) layered on top — the full
// list below is what the server sends on the very first response, filters
// or no filters, JS or no JS (same approach as app/blog/page.js).
export default async function CoursPage() {
  const cours = await getAllCours().catch(() => []);

  const categoryCounts = COURS_CATEGORIES.map((c) => ({
    ...c,
    count: cours.filter((m) => m.category === c.code).length,
  })).filter((c) => c.count > 0);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "cours", showSearch: false }) }} />

      <div className="cours-view" id="viewCours">
        <h1 className="eval-title">📖 Cours par module</h1>
        <p className="eval-sub">Fiches de cours synthétiques : définitions, formules et points clés à retenir, par module.</p>

        <div className="cours-filter-bar">
          {categoryCounts.length > 0 && (
            <div className="chip-list" id="coursCategoryChips">
              <button type="button" className="chip cours-cat-chip active" data-category="">
                Tous ({cours.length})
              </button>
              {categoryCounts.map((c) => (
                <button key={c.code} type="button" className="chip cours-cat-chip" data-category={c.code}>
                  {c.emoji} {c.label} ({c.count})
                </button>
              ))}
            </div>
          )}
          <div className="cours-filter-controls">
            <div className="search-box cours-search-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input type="text" id="coursSearchInput" placeholder="Rechercher un module, une notion..." />
            </div>
            <button type="button" className="reset-btn" id="coursResetBtn" style={{ width: "auto" }}>
              Réinitialiser
            </button>
          </div>
          <div className="results-count" id="coursResultsCount">
            {cours.length} module{cours.length > 1 ? "s" : ""}
          </div>
        </div>

        <div
          className="grid"
          id="coursModuleGrid"
          dangerouslySetInnerHTML={{ __html: cours.map(coursCardHtml).join("") }}
        />
      </div>

      <div dangerouslySetInnerHTML={{ __html: footerHtml() }} />

      <CoursExplorer initialData={cours} />
    </>
  );
}
