import { getAllEncg, getPublicConcours, getCorrigeIdsLocal } from "@/lib/store";
import { chromeHtml, footerHtml } from "../_shared/chrome";
import { concoursCardHtml, compareConcoursRecents } from "../_shared/concoursCard";
import { breadcrumbJsonLd, collectionJsonLd } from "../_shared/listingSchema";
import JsonLd from "../_shared/JsonLd";
import CoursExplorer from "../cours/CoursExplorer";
import { Icon } from "../_shared/icons";
import { ENCG_CATEGORIES, ENCG_SEMESTRES, encgAnneeLabel, encgSortComparator } from "../../lib/encgTaxonomy";
import { encgModule, encgModuleHref, isEncgPublie } from "../../lib/encg";
import { isPostBac } from "../../lib/concoursNiveaux";

// Prérendue au build, comme /cours (voir README : une page publique
// n'invoque pas le Worker).
export const dynamic = "force-static";
export const revalidate = false;

const PATH = "/encg";

async function donnees() {
  const [modules, concours] = await Promise.all([getAllEncg(), getPublicConcours().catch(() => [])]);
  return {
    modules: modules.filter(isEncgPublie).sort(encgSortComparator),
    tafem: concours.filter(isPostBac).sort(compareConcoursRecents),
  };
}

// Titre et description : app/encg/layout.js. Sans module publié, la page
// n'est liée nulle part (l'onglet « Cours S1 → S10 » de l'espace ENCG reste
// caché, lib/espaces.js) : on la garde hors de l'index, comme la boutique vide.
export async function generateMetadata() {
  const { modules } = await donnees();
  return modules.length ? {} : { robots: { index: false, follow: true } };
}

// Mêmes attributs data-* que les cartes de /cours : CoursExplorer filtre les
// deux pages (semestre, matière, recherche).
function ModuleCard({ c }) {
  const { chapitres } = encgModule(c);
  const search = [c.module, c.title, c.description, c.option, ...chapitres.map((x) => x.titre)].join(" ").toLowerCase();
  return (
    <a
      href={encgModuleHref(c)}
      className="bac-mat-card"
      data-semestre={c.semestre || ""}
      data-category={c.category || ""}
      data-parcours=""
      data-filiere=""
      data-search={search}
    >
      <span className="bac-mat-body">
        <span className="bac-mat-name">{c.module}</span>
        <span className="bac-mat-desc sp-desc-clamp">{c.description}</span>
        <span className="bac-mat-meta">
          <span>{chapitres.length} chapitres</span>
          <span className="bac-dot">·</span>
          <span>{c.option || encgAnneeLabel(c.semestre) || "ENCG"}</span>
        </span>
      </span>
    </a>
  );
}

export default async function EncgPage() {
  const { modules, tafem } = await donnees();
  const corrigeIds = getCorrigeIdsLocal();
  const totalChapitres = modules.reduce((n, c) => n + encgModule(c).chapitres.length, 0);
  const semestres = ENCG_SEMESTRES.filter((s) => modules.some((c) => c.semestre === s.code));
  const groupes = [
    ...semestres.map((s) => ({ code: s.code, label: `${s.label} · ${encgAnneeLabel(s.code)}`, list: modules.filter((c) => c.semestre === s.code) })),
    { code: "", label: "Autres modules", list: modules.filter((c) => !c.semestre) },
  ].filter((g) => g.list.length);
  const categories = ENCG_CATEGORIES.filter((cat) => modules.some((c) => c.category === cat.code));

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{ name: "Cours ENCG", path: PATH }]),
          collectionJsonLd({
            name: "Cours de l'ENCG du S1 au S10 par module et par chapitre",
            description: "Cours de l'École nationale de commerce et de gestion, du S1 au S10, découpés en chapitres avec exercices corrigés.",
            path: PATH,
            items: modules.map((c) => ({ name: c.module, path: encgModuleHref(c) })),
          }),
        ]}
      />
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "encg" }) }} />

      <div className="bac-space">
        <div className="bac-wrap">
          <section className="bac-hero">
            <h1>Cours ENCG du S1 au S10</h1>
            <p>
              Les modules de l&apos;École nationale de commerce et de gestion, semestre par semestre, de la 1ʳᵉ à la 5ᵉ année.
              Chaque module est découpé en chapitres : le cours, des exercices corrigés et le cours complet en PDF.
            </p>
            <div className="bac-hero-stats">
              <span className="bac-stat">
                <strong>{modules.length}</strong> module{modules.length > 1 ? "s" : ""}
              </span>
              <span className="bac-stat">
                <strong>{totalChapitres}</strong> chapitre{totalChapitres > 1 ? "s" : ""}
              </span>
              <span className="bac-stat">
                <strong>{semestres.length}</strong> semestre{semestres.length > 1 ? "s" : ""} sur 10
              </span>
            </div>
          </section>

          {modules.length > 0 && (
            <div className="sp-filters" id="coursFilters">
              <div className="bac-year-tabs" role="group" aria-label="Semestre">
                <button type="button" className="bac-year-tab active" data-semestre="">
                  Tous
                </button>
                {semestres.map((s) => (
                  <button key={s.code} type="button" className="bac-year-tab" data-semestre={s.code}>
                    {s.code}
                  </button>
                ))}
              </div>
              {categories.length > 1 && (
                <>
                  <button type="button" className="sp-sheet-btn" data-sheet-open="coursSheet" aria-controls="coursSheet" aria-expanded="false">
                    <Icon name="sliders" size={17} />
                    Filtres
                    <span className="sp-filter-badge" id="coursFilterBadge" hidden />
                  </button>
                  <div className="sp-filters-more sheet-m" id="coursSheet" role="dialog" aria-label="Filtrer les modules">
                    <div className="sheet-head">
                      <span className="sheet-title">Filtrer les modules</span>
                      <button type="button" className="sheet-close" data-sheet-close aria-label="Fermer les filtres">
                        <Icon name="x" size={20} />
                      </button>
                    </div>
                    <select id="filterCategorie" aria-label="Matière">
                      <option value="">Toutes les matières</option>
                      {categories.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.label}
                        </option>
                      ))}
                    </select>
                    <button type="button" className="sp-reset" id="coursResetBtn">
                      Réinitialiser
                    </button>
                    <button type="button" className="dl-btn sheet-apply" id="coursApply" data-sheet-close>
                      Voir les modules
                    </button>
                  </div>
                </>
              )}
              <input type="search" id="coursSearchInput" placeholder="Module, chapitre, notion…" aria-label="Rechercher un module ou un chapitre" />
              <span className="sp-count" id="coursResultsCount" aria-live="polite">
                {modules.length} module{modules.length > 1 ? "s" : ""}
              </span>
            </div>
          )}

          {groupes.map((g) => (
            <section key={g.code || "autres"} className="bac-group" data-groupe={g.code}>
              <h2 className="bac-section-title">{g.label}</h2>
              <div className="bac-mat-grid">
                {g.list.map((c) => (
                  <ModuleCard key={c.id} c={c} />
                ))}
              </div>
            </section>
          ))}
          <div className="sp-empty" id="coursEmpty" hidden>
            Aucun module ne correspond à ces filtres.
          </div>

          {tafem.length > 0 && (
            <section className="sp-encg-tafem">
              <div className="home-subhead">
                <h2 className="bac-section-title">Avant d&apos;entrer : le concours TAFEM</h2>
                <a href="/concours/post-bac">Tous les sujets ({tafem.length})</a>
              </div>
              <div
                className="sp-rows"
                dangerouslySetInnerHTML={{
                  __html: tafem
                    .slice(0, 4)
                    .map((c) => concoursCardHtml({ ...c, hasCorrige: Boolean(c.corrige_md) || corrigeIds.has(c.id) }, { dl: false }))
                    .join(""),
                }}
              />
            </section>
          )}

          <section className="sp-about">
            <h2>Suivre l&apos;ENCG semestre par semestre</h2>
            <p>
              Le cycle de l&apos;ENCG dure cinq ans, soit dix semestres. Les premières années posent les bases de la gestion :
              comptabilité, mathématiques et statistiques, économie, management, droit et langues. Les dernières approfondissent
              l&apos;option choisie, dont l&apos;intitulé change d&apos;une école à l&apos;autre (finance, audit et contrôle de gestion,
              marketing, commerce international, ressources humaines, logistique…). Ici, chaque module est rangé dans son semestre et
              découpé en chapitres : le cours expliqué, puis des exercices avec leur corrigé détaillé, et le module entier en PDF.
              Tout est gratuit et sans inscription.
              {tafem.length > 0 && " Pour préparer l'entrée à l'ENCG, les sujets réels du concours TAFEM sont réunis sur leur propre page, avec leurs corrigés."}
            </p>
          </section>
        </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: footerHtml() }} />

      <CoursExplorer />
    </>
  );
}
