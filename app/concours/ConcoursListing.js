import { concoursCardHtml } from "../_shared/concoursCard";
import ConcoursExplorer from "./ConcoursExplorer";

// Filtres + grille de cartes, communs aux deux pages de liste (/concours pour
// le Master, /concours/licence-excellence). Chaque page passe sa propre liste
// déjà filtrée par niveau : les <select> de ConcoursExplorer ne proposent donc
// que les villes, filières et années réellement présentes dans ce niveau.
//
// Sur mobile, les filtres passent au-dessus de la liste, repliés derrière
// #filterToggle, et #filterFab y ramène depuis le bas de la liste : avec plus
// de 250 cartes, les laisser sous la grille les rendait inatteignables
// (voir space.css).
export default function ConcoursListing({ concours, gridTitle = "Tous les sujets", sideLinks = [] }) {
  const nbResultats = `${concours.length} résultat${concours.length > 1 ? "s" : ""}`;
  return (
    <>
      <div className="bac-mat-layout sp-listing">
        <aside className="bac-side">
          <div className="bac-side-card sp-filter-card" id="filterCard">
            <button type="button" className="sp-filter-toggle" id="filterToggle" aria-expanded="false" aria-controls="filterBody">
              Filtrer les sujets
              <span className="sp-filter-badge" hidden />
              <span className="sp-filter-count">{nbResultats}</span>
              <span className="sp-filter-chevron" aria-hidden="true">
                ▾
              </span>
            </button>
            <div className="bac-side-title sp-filter-title">Filtrer les sujets</div>
            <div className="sp-filter-body" id="filterBody">
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
              <button type="button" className="sp-filter-apply" id="filterApply">
                Voir les {nbResultats}
              </button>
            </div>
          </div>
          <div className="bac-side-card sp-side-more">
            <div className="bac-side-title">Pour aller plus loin</div>
            {sideLinks.map((l) => (
              <a key={l.href} href={l.href} className="bac-side-link">
                {l.label} <span>{l.icon}</span>
              </a>
            ))}
          </div>
        </aside>

        <main className="bac-main">
          <div className="sp-results-head">
            <h2 className="bac-section-title">{gridTitle}</h2>
            <span className="sp-count" id="resultsCount">
              {nbResultats}
            </span>
          </div>
          <div className="sp-card-grid" id="grid" dangerouslySetInnerHTML={{ __html: concours.map(concoursCardHtml).join("") }} />
        </main>
      </div>

      <button type="button" className="sp-filter-fab" id="filterFab" aria-controls="filterBody">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M3 5h18l-7 8.5V19l-4 2v-7.5z" strokeLinejoin="round" />
        </svg>
        Filtrer
        <span className="sp-filter-badge" hidden />
      </button>

      <ConcoursExplorer initialData={concours} />
    </>
  );
}
