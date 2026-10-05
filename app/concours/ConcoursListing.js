import { concoursCardHtml, concoursListItem, compareConcoursRecents, CONCOURS_PAGE_SIZE } from "../_shared/concoursCard";
import ConcoursExplorer from "./ConcoursExplorer";
import { Icon } from "../_shared/icons";

// Recherche, filtres et liste de sujets, communs aux deux pages de liste
// (/concours pour le Master, /concours/licence-excellence). Chaque page passe
// sa propre liste déjà filtrée par niveau : les <select> de ConcoursExplorer
// ne proposent donc que les villes, filières et années réellement présentes
// dans ce niveau.
//
// Ordinateur : filtres dans la colonne de gauche. Téléphone : la liste vient
// juste sous la recherche ; les filtres s'ouvrent dans une feuille du bas
// (bouton « Filtres », voir openSheet dans chrome.js) et les filtres actifs
// restent visibles en pastilles au-dessus de la liste.
export default function ConcoursListing({ concours: liste, gridTitle = "Tous les sujets", sideLinks = [] }) {
  const concours = [...liste].sort(compareConcoursRecents);
  const nbResultats = `${concours.length} résultat${concours.length > 1 ? "s" : ""}`;
  const restants = Math.max(0, concours.length - CONCOURS_PAGE_SIZE);
  return (
    <>
      <div className="bac-mat-layout sp-listing">
        <aside className="bac-side">
          <div className="bac-side-card sp-filter-card sheet-m" id="filterSheet" role="dialog" aria-label="Filtrer les sujets">
            <div className="sheet-head">
              <span className="sheet-title">Filtrer les sujets</span>
              <button type="button" className="sheet-close" data-sheet-close aria-label="Fermer les filtres">
                <Icon name="x" size={20} />
              </button>
            </div>
            <div className="bac-side-title sp-filter-title">Filtrer les sujets</div>
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
              Réinitialiser les filtres
            </button>
            <button type="button" className="dl-btn sheet-apply" id="filterApply" data-sheet-close>
              Voir les {nbResultats}
            </button>
          </div>
          {sideLinks.length > 0 && (
            <div className="bac-side-card sp-side-more">
              <div className="bac-side-title">Pour aller plus loin</div>
              {sideLinks.map((l) => (
                <a key={l.href} href={l.href} className="bac-side-link">
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </aside>

        <main className="bac-main">
          {/* Recherche posée au-dessus de la liste qu'elle filtre (titre du
             master, faculté, ville) ; /recherche cherche dans tout le site. */}
          <form className="sp-search" role="search" id="listSearchForm">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="11" cy="11" r="7.5" />
              <path d="m21 21-4.5-4.5" />
            </svg>
            <input
              type="search"
              id="searchInput"
              placeholder="Master, faculté, ville…"
              aria-label="Rechercher un concours par titre du master, faculté ou ville"
              autoComplete="off"
              enterKeyHint="search"
            />
          </form>
          <div className="sp-results-head">
            <h2 className="bac-section-title">{gridTitle}</h2>
            <button type="button" className="sp-filter-btn" data-sheet-open="filterSheet" aria-controls="filterSheet" aria-expanded="false">
              <Icon name="sliders" size={17} />
              Filtres
              <span className="sp-filter-badge" hidden />
            </button>
            <label className="sp-sort">
              <span className="sr-only">Trier</span>
              <select id="sortSelect" defaultValue="recents" aria-label="Trier les sujets">
                <option value="recents">Plus récents</option>
                <option value="ajouts">Derniers ajoutés</option>
                <option value="anciens">Plus anciens</option>
                <option value="facile">Plus faciles</option>
                <option value="difficile">Plus difficiles</option>
              </select>
            </label>
            <span className="sp-count" id="resultsCount" aria-live="polite">
              {nbResultats}
            </span>
          </div>
          <div className="sp-active-filters" id="activeFilters" />
          <div
            className="sp-rows"
            id="grid"
            dangerouslySetInnerHTML={{
              __html: concours.map((c, i) => concoursCardHtml(c, { hidden: i >= CONCOURS_PAGE_SIZE })).join(""),
            }}
          />
          <div className="sp-more" id="moreWrap" hidden={restants === 0}>
            <button type="button" className="sp-btn sp-more-btn" id="moreBtn">
              Voir plus de sujets <span id="moreCount">({restants} restants)</span>
            </button>
          </div>
        </main>
      </div>

      {/* Données des lignes seulement : voir concoursListItem. */}
      <ConcoursExplorer initialData={concours.map(concoursListItem)} pageSize={CONCOURS_PAGE_SIZE} />
    </>
  );
}
