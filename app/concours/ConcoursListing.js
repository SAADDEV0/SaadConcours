import { concoursCardHtml } from "../_shared/concoursCard";
import ConcoursExplorer from "./ConcoursExplorer";

// Filtres + grille de cartes, communs aux deux pages de liste (/concours pour
// le Master, /concours/licence-excellence). Chaque page passe sa propre liste
// déjà filtrée par niveau : les <select> de ConcoursExplorer ne proposent donc
// que les villes, filières et années réellement présentes dans ce niveau.
export default function ConcoursListing({ concours, gridTitle = "Tous les sujets", sideLinks = [] }) {
  return (
    <>
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
              {concours.length} résultat{concours.length > 1 ? "s" : ""}
            </span>
          </div>
          <div className="sp-card-grid" id="grid" dangerouslySetInnerHTML={{ __html: concours.map(concoursCardHtml).join("") }} />
        </main>
      </div>

      <ConcoursExplorer initialData={concours} />
    </>
  );
}
