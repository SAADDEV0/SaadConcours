import { getAllCours } from "@/lib/store";
import { chromeHtml, footerHtml } from "../_shared/chrome";
import { COURS_CATEGORIES, LICENCE_PARCOURS, LICENCE_SEMESTRES, LICENCE_FILIERES, coursSortComparator, coursCategoryInfo, licenceParcoursLabel, licenceFiliereLabel } from "../../lib/coursTaxonomy";
import { fsjesModule, fsjesModuleIcon } from "../../lib/fsjesChapitres";
import { breadcrumbJsonLd, collectionJsonLd } from "../_shared/listingSchema";
import JsonLd from "../_shared/JsonLd";
import CoursExplorer from "./CoursExplorer";
import NiveauSwitch from "../_shared/NiveauSwitch";

// Served as prerendered HTML instead of rendered per request. lib/github.js
// reads the data JSON with `cache: "no-store"` (concours.json is 2.59MB, past
// Next's 2MB fetch-cache entry limit), and a no-store fetch in the render
// path opts the whole route out of static generation.
//
// No revalidation window at all: freshness comes from deploys, not ISR.
// Every admin edit commits to GitHub, which triggers a redeploy that rebuilds
// every page.
export const dynamic = "force-static";
export const revalidate = false;

// Même présentation que l'espace Bac (app/bac/[niveau]/page.js) : une carte
// par module, regroupées par semestre. Toutes les cartes sont dans le HTML
// servi (liens réels pour les robots) ; CoursExplorer ne fait que les
// masquer selon les filtres.
// Seuls les champs affichés sont passés à la carte : le Markdown complet du
// module n'a rien à faire dans les props sérialisées de la page.
function carteModule(c) {
  const cat = coursCategoryInfo(c.category);
  const { chapitres } = fsjesModule(c);
  return {
    id: c.id,
    module: c.module,
    description: c.description,
    available: c.available,
    parcours: c.parcours,
    semestre: c.semestre,
    filiere: c.filiere,
    category: c.category,
    icon: fsjesModuleIcon(c, cat?.emoji),
    hue: cat?.hue ?? 220,
    nbChapitres: chapitres.length,
    search: [c.module, c.title, c.description, ...chapitres.map((x) => x.titre)].join(" ").toLowerCase(),
  };
}

function ModuleCard({ c }) {
  const tag = c.filiere ? licenceFiliereLabel(c.filiere) : c.parcours ? `Parcours ${licenceParcoursLabel(c.parcours)}` : "Tronc commun";
  const inner = (
    <>
      <span className="bac-mat-icon">{c.icon}</span>
      <span className="bac-mat-body">
        <span className="bac-mat-name">{c.module}</span>
        <span className="bac-mat-desc">{c.description}</span>
        <span className="bac-mat-meta">
          {c.available ? <span>{c.nbChapitres} chapitres</span> : <span>Bientôt disponible</span>}
          <span className="bac-dot">·</span>
          <span>{tag}</span>
          {c.semestre && <span className="bac-badge">{c.semestre}</span>}
        </span>
      </span>
      <span className="bac-mat-arrow" aria-hidden="true">
        →
      </span>
    </>
  );
  const props = {
    className: "bac-mat-card",
    style: { "--mat-h": c.hue },
    "data-parcours": c.parcours || "",
    "data-semestre": c.semestre || "",
    "data-filiere": c.filiere || "",
    "data-category": c.category || "",
    "data-search": c.search,
  };
  return c.available ? (
    <a href={`/cours/${encodeURIComponent(c.id)}`} {...props}>
      {inner}
    </a>
  ) : (
    <div {...props} aria-disabled="true">
      {inner}
    </div>
  );
}

export default async function CoursPage() {
  const cours = (await getAllCours().catch(() => [])).sort(coursSortComparator);
  const publies = cours.filter((c) => c.available);
  const totalChapitres = publies.reduce((n, c) => n + fsjesModule(c).chapitres.length, 0);
  const groupes = [
    ...LICENCE_SEMESTRES.map((s) => ({ code: s.code, label: `${s.label}${s.specialisation ? " — Spécialisation" : ""}`, list: cours.filter((c) => c.semestre === s.code) })),
    { code: "", label: "Autres modules", list: cours.filter((c) => !c.semestre) },
  ].filter((g) => g.list.length);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{ name: "Cours", path: "/cours" }]),
          collectionJsonLd({
            name: "Cours de Licence FSJES par module et par chapitre",
            description:
              "Cours de Licence FSJES Économie & Gestion découpés en chapitres (comptabilité, analyse financière, management, marketing, macroéconomie...) : cours, exercices corrigés, résumé et QCM.",
            path: "/cours",
            items: publies.map((c) => ({ name: c.module, path: `/cours/${encodeURIComponent(c.id)}` })),
          }),
        ]}
      />
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "cours", showSearch: false }) }} />

      <div className="bac-space site-space">
        <div className="bac-wrap">
          <NiveauSwitch active="fsjes" />

          <section className="bac-hero">
            <div className="bac-eyebrow">Université · Licence Fondamentale FSJES</div>
            <h1>Cours Licence Économie & Gestion</h1>
            <p>Chaque module est découpé en chapitres, comme en amphi. Pour chaque chapitre : le cours, des exercices corrigés, un résumé et un QCM, puis le formulaire final du module.</p>
            <div className="bac-hero-stats">
              <span className="bac-stat">
                <strong>{publies.length}</strong> modules
              </span>
              <span className="bac-stat">
                <strong>{totalChapitres}</strong> chapitres
              </span>
              <span className="bac-stat">
                <strong>{LICENCE_SEMESTRES.length}</strong> semestres
              </span>
            </div>
          </section>

          <div className="sp-filters" id="coursFilters">
            <div className="bac-year-tabs" role="group" aria-label="Semestre">
              <button type="button" className="bac-year-tab active" data-semestre="">
                Tous
              </button>
              {LICENCE_SEMESTRES.map((s) => (
                <button key={s.code} type="button" className="bac-year-tab" data-semestre={s.code}>
                  {s.code}
                </button>
              ))}
            </div>
            <select id="filterParcours" aria-label="Parcours">
              <option value="">Tous les parcours</option>
              {LICENCE_PARCOURS.map((p) => (
                <option key={p.code} value={p.code}>
                  Parcours {p.label}
                </option>
              ))}
            </select>
            <select id="filterFiliere" aria-label="Filière (S5-S6)">
              <option value="">Toutes les filières</option>
              {LICENCE_FILIERES.map((f) => (
                <option key={f.code} value={f.code} data-parcours={f.parcours}>
                  {f.label}
                </option>
              ))}
            </select>
            <select id="filterCategorie" aria-label="Matière">
              <option value="">Toutes les matières</option>
              {COURS_CATEGORIES.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.emoji} {c.label}
                </option>
              ))}
            </select>
            <input type="search" id="coursSearchInput" placeholder="Module, chapitre, notion..." aria-label="Rechercher" />
            <button type="button" className="sp-reset" id="coursResetBtn">
              ✕ Réinitialiser
            </button>
            <span className="sp-count" id="coursResultsCount">
              {cours.length} module{cours.length > 1 ? "s" : ""}
            </span>
          </div>

          {groupes.map((g) => (
            <section key={g.code || "autres"} className="bac-group" data-groupe={g.code}>
              <h2 className="bac-section-title">{g.label}</h2>
              <div className="bac-mat-grid">
                {g.list.map((c) => (
                  <ModuleCard key={c.id} c={carteModule(c)} />
                ))}
              </div>
            </section>
          ))}
          <div className="sp-empty" id="coursEmpty" hidden>
            Aucun module ne correspond à ces filtres.
          </div>
        </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: footerHtml() }} />

      <CoursExplorer />
    </>
  );
}
