import { getAllDroit, getAllCours } from "@/lib/store";
import { chromeHtml, footerHtml } from "../_shared/chrome";
import { breadcrumbJsonLd, collectionJsonLd } from "../_shared/listingSchema";
import JsonLd from "../_shared/JsonLd";
import CoursExplorer from "../cours/CoursExplorer";
import { Icon } from "../_shared/icons";
import { DROIT_LANGUES, DROIT_SEMESTRES, TRONC_COMMUN, droitFilieresFor, droitRangLabel, droitSortComparator } from "../../lib/droitTaxonomy";
import { droitModule, droitModuleHref, droitOuvert, droitRenvois, isDroitPublie } from "../../lib/droit";
import { fsjesModule } from "../../lib/fsjesChapitres";

// Prérendue au build, comme /cours (voir README : une page publique
// n'invoque pas le Worker).
export const dynamic = "force-static";
export const revalidate = false;

const PATH = "/droit";

// Espace construit en silence : tant qu'il n'est pas lancé (DROIT_LANCE,
// lib/contenusPublies.mjs), la page ne liste rien et n'est liée nulle part.
async function donnees() {
  if (!droitOuvert()) return { modules: [] };
  const [droit, cours] = await Promise.all([getAllDroit(), getAllCours().catch(() => [])]);
  // Modules rédigés pour le Droit, puis ceux qui renvoient au cours FSJES de
  // la même matière (lib/droit.js, droitRenvois) : une seule liste.
  return { modules: [...droit.filter(isDroitPublie), ...droitRenvois(droit, cours)].sort(droitSortComparator) };
}

// Titre et description : app/droit/layout.js. Sans module publié (ou avant le
// lancement), la page reste hors de l'index, comme /encg vide.
export async function generateMetadata() {
  const { modules } = await donnees();
  return modules.length ? {} : { robots: { index: false, follow: true } };
}

// Une section par rang : le tronc commun semestre par semestre, puis chaque
// filière (modules communs à la filière, puis un groupe par parcours) ; le
// français d'abord, l'arabe ensuite.
function groupes(modules) {
  const out = [];
  for (const l of DROIT_LANGUES) {
    const deLaLangue = modules.filter((c) => (c.langue || "fr") === l.code);
    for (const s of DROIT_SEMESTRES) {
      const list = deLaLangue.filter((c) => !c.filiere && c.semestre === s.code);
      if (list.length) out.push({ cle: `${l.code}-tc-${s.code}`, langue: l, titre: `${TRONC_COMMUN[l.code]} · ${s.code}`, list });
    }
    const sansSemestre = deLaLangue.filter((c) => !c.filiere && !c.semestre);
    if (sansSemestre.length) out.push({ cle: `${l.code}-tc`, langue: l, titre: TRONC_COMMUN[l.code], list: sansSemestre });
    for (const f of droitFilieresFor(l.code)) {
      // Modules communs à la filière : un groupe par semestre (S1 → S4 en
      // droit privé), puis ceux sans semestre.
      const communs = deLaLangue.filter((c) => c.filiere === f.code && !c.parcours);
      for (const s of DROIT_SEMESTRES) {
        const list = communs.filter((c) => c.semestre === s.code);
        if (list.length) out.push({ cle: `${f.code}-${s.code}`, langue: l, titre: `${f.label} · ${s.code}`, list });
      }
      const communsSansSemestre = communs.filter((c) => !c.semestre);
      if (communsSansSemestre.length) out.push({ cle: `${f.code}`, langue: l, titre: f.label, list: communsSansSemestre });
      for (const p of f.parcours) {
        const list = deLaLangue.filter((c) => c.filiere === f.code && c.parcours === p.code);
        if (list.length) out.push({ cle: `${f.code}-${p.code}`, langue: l, titre: `${f.label} · ${p.label}`, list });
      }
    }
  }
  return out;
}

// Mêmes attributs data-* que les cartes de /cours : CoursExplorer filtre les
// deux pages. Ici « parcours » porte la langue et « filiere » la filière
// (un module du tronc commun, sans filière, reste visible avec chacune).
// Une carte de renvoi mène au cours FSJES et le dit.
function ModuleCard({ c }) {
  const { chapitres } = c.cible ? fsjesModule(c.cible) : droitModule(c);
  const ar = c.langue === "ar";
  const search = [c.module, c.title, c.description, droitRangLabel(c), c.cible?.module, ...chapitres.map((x) => x.titre)].join(" ").toLowerCase();
  return (
    <a
      href={moduleHref(c)}
      className="bac-mat-card"
      data-semestre={c.semestre || ""}
      data-category=""
      data-parcours={c.langue || "fr"}
      data-filiere={c.filiere || ""}
      data-search={search}
      dir={ar ? "rtl" : undefined}
      lang={ar ? "ar" : undefined}
    >
      <span className="bac-mat-body">
        <span className="bac-mat-name">{c.module}</span>
        <span className="bac-mat-desc sp-desc-clamp">{c.description}</span>
        <span className="bac-mat-meta">
          <span>{c.semestre || "Licence"}</span>
          <span className="bac-dot">·</span>
          <span>{chapitres.length} chapitres</span>
          {c.cible && (
            <>
              <span className="bac-dot">·</span>
              <span>Cours de la Licence FSJES</span>
            </>
          )}
        </span>
      </span>
    </a>
  );
}

function moduleHref(c) {
  return c.cible ? `/cours/${encodeURIComponent(c.cible.id)}` : droitModuleHref(c);
}

export default async function DroitPage() {
  const { modules } = await donnees();
  const totalChapitres = modules.reduce((n, c) => n + (c.cible ? fsjesModule(c.cible) : droitModule(c)).chapitres.length, 0);
  const communs = modules.filter((c) => c.cible);
  const semestres = DROIT_SEMESTRES.filter((s) => modules.some((c) => c.semestre === s.code));
  const langues = DROIT_LANGUES.filter((l) => modules.some((c) => (c.langue || "fr") === l.code));
  const filieres = langues.flatMap((l) => droitFilieresFor(l.code)).filter((f) => modules.some((c) => c.filiere === f.code));
  const liste = groupes(modules);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{ name: "Cours de Droit", path: PATH }]),
          collectionJsonLd({
            name: "Cours de la licence de Droit (FSJES) du S1 au S6",
            description: "Cours de droit du tronc commun puis des filières droit privé et droit public, découpés en chapitres avec exercices corrigés.",
            path: PATH,
            items: modules.map((c) => ({ name: c.module, path: moduleHref(c) })),
          }),
        ]}
      />
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "droit" }) }} />

      <div className="bac-space">
        <div className="bac-wrap">
          <section className="bac-hero">
            <h1>Cours de Droit FSJES du S1 au S6</h1>
            <p>
              La licence de Droit module par module : d&apos;abord le tronc commun, puis la filière droit privé ou droit public et son
              parcours. Chaque module est découpé en chapitres : le cours, des exercices corrigés et le cours complet en PDF.
            </p>
            <div className="bac-hero-stats">
              <span className="bac-stat">
                <strong>{modules.length}</strong> module{modules.length > 1 ? "s" : ""}
              </span>
              <span className="bac-stat">
                <strong>{totalChapitres}</strong> chapitre{totalChapitres > 1 ? "s" : ""}
              </span>
              <span className="bac-stat">
                <strong>{semestres.length}</strong> semestre{semestres.length > 1 ? "s" : ""} sur 6
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
              {(langues.length > 1 || filieres.length > 0) && (
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
                    {langues.length > 1 && (
                      <select id="filterParcours" aria-label="Langue">
                        <option value="">Toutes les langues</option>
                        {langues.map((l) => (
                          <option key={l.code} value={l.code}>
                            {l.label}
                          </option>
                        ))}
                      </select>
                    )}
                    {filieres.length > 0 && (
                      <select id="filterFiliere" aria-label="Filière">
                        <option value="">Toutes les filières</option>
                        {filieres.map((f) => (
                          <option key={f.code} value={f.code} data-parcours={f.langue}>
                            {f.label}
                          </option>
                        ))}
                      </select>
                    )}
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

          {liste.map((g) => (
            <section key={g.cle} className="bac-group" data-groupe={g.cle}>
              <h2 className="bac-section-title" dir={g.langue.code === "ar" ? "rtl" : undefined} lang={g.langue.lang}>
                {g.titre}
              </h2>
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

          <section className="sp-about">
            <h2>Suivre la licence de Droit semestre par semestre</h2>
            <p>
              La licence de Droit des FSJES dure trois ans, soit six semestres. Les premiers semestres forment un tronc commun, qui
              pose les bases du droit privé et du droit public. L&apos;étudiant choisit ensuite sa filière, droit privé ou droit
              public, puis un parcours : affaires et finance, métiers de la justice, études politiques et internationales, science
              politique, géopolitique. Le droit s&apos;enseigne en français et en arabe, avec des filières propres à chaque langue.
              {filieres.length > 0 && ` Filières couvertes ici : ${filieres.map((f) => f.fr || f.label).join(", ")}.`} Chaque module
              est rangé à sa place et découpé en chapitres : le cours expliqué, puis des exercices avec leur corrigé détaillé, et le
              module entier en PDF. Tout est gratuit et sans inscription.
            </p>
            {communs.length > 0 && (
              <p>
                Quelques matières de la licence de Droit s&apos;enseignent aussi en licence d&apos;économie et gestion des FSJES (
                {communs.map((c) => c.module.toLowerCase()).join(", ")}). Pour elles, le site n&apos;a qu&apos;un seul cours, celui de la
                Licence FSJES, et la carte du module y mène directement.
              </p>
            )}
          </section>
        </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: footerHtml() }} />

      <CoursExplorer />
    </>
  );
}
