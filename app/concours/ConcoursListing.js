import { concoursCardHtml, concoursListItem, compareConcoursRecents, CONCOURS_PAGE_SIZE } from "../_shared/concoursCard";
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
export default function ConcoursListing({ concours: liste, gridTitle = "Tous les sujets", sideLinks = [] }) {
  const concours = [...liste].sort(compareConcoursRecents);
  const nbResultats = `${concours.length} résultat${concours.length > 1 ? "s" : ""}`;
  const restants = Math.max(0, concours.length - CONCOURS_PAGE_SIZE);
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
          {/* Recherche posée au-dessus de la grille qu'elle filtre, et non plus
             dans le header : elle ne cherche que dans les concours, et le
             header doit rester identique d'une page à l'autre. */}
          <form className="sp-search" role="search" id="listSearchForm">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              type="search"
              id="searchInput"
              placeholder="Rechercher un master, une faculté, une ville…"
              aria-label="Rechercher un concours par titre du master, faculté ou ville"
              autoComplete="off"
              enterKeyHint="search"
            />
          </form>
          <div className="sp-results-head">
            <h2 className="bac-section-title">{gridTitle}</h2>
            <span className="sp-count" id="resultsCount">
              {nbResultats}
            </span>
            <label className="sp-sort">
              <span>Trier</span>
              <select id="sortSelect" defaultValue="recents">
                <option value="recents">Plus récents</option>
                <option value="ajouts">Derniers ajoutés</option>
                <option value="anciens">Plus anciens</option>
                <option value="facile">Plus faciles</option>
                <option value="difficile">Plus difficiles</option>
              </select>
            </label>
          </div>
          <div
            className="sp-card-grid"
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

      <button type="button" className="sp-filter-fab" id="filterFab" aria-controls="filterBody">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M3 5h18l-7 8.5V19l-4 2v-7.5z" strokeLinejoin="round" />
        </svg>
        Filtrer
        <span className="sp-filter-badge" hidden />
      </button>

      {/* Données des cartes seulement : voir concoursListItem. */}
      <ConcoursExplorer initialData={concours.map(concoursListItem)} pageSize={CONCOURS_PAGE_SIZE} />
    </>
  );
}
