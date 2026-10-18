import { getAllDroit, getAllCours } from "@/lib/store";
import { chromeHtml, footerHtml } from "../_shared/chrome";
import { breadcrumbJsonLd, collectionJsonLd } from "../_shared/listingSchema";
import JsonLd from "../_shared/JsonLd";
import CoursExplorer from "../cours/CoursExplorer";
import { Icon } from "../_shared/icons";
import LicenceSwitch from "../_shared/LicenceSwitch";
import { DROIT_LANGUES, DROIT_SEMESTRES, droitFilieresFor, droitRangLabel, droitSortComparator } from "../../lib/droitTaxonomy";
import { droitModule, droitModuleHref, droitOuvert, droitRenvois, isDroitPublie } from "../../lib/droit";
import { fsjesModule } from "../../lib/fsjesChapitres";
import { clampDescription, fitTitle } from "../_shared/seoText";

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

// Semestres couverts par un cours rédigé, pour le titre : « S1 », « S1 et
// S2 », « S1 à S4 ». Une carte de renvoi (cours d'économie et gestion)
// ne compte pas : le titre ne promet que les cours de droit de la page.
function plage(modules) {
  const rediges = modules.filter((c) => !c.cible);
  const s = DROIT_SEMESTRES.filter((x) => (rediges.length ? rediges : modules).some((c) => c.semestre === x.code)).map((x) => x.code);
  return s.length > 2 ? `${s[0]} à ${s[s.length - 1]}` : s.join(" et ");
}

// Titre et description calculés sur les modules publiés (« Cours de droit »
// FSJES en tête : la requête des étudiants). Repli : app/droit/layout.js. Sans module publié (ou
// avant le lancement), la page reste hors de l'index.
export async function generateMetadata() {
  const { modules } = await donnees();
  if (!modules.length) return { robots: { index: false, follow: true } };
  const s = plage(modules);
  const ar = modules.some((c) => c.langue === "ar");
  // ≤ 50 : le modèle « | SaadConcours » s'ajoute (seoText.js).
  const title = fitTitle([`Cours de Droit FSJES ${s}${ar ? " (FR et arabe)" : ""}`, `Cours de Droit FSJES ${s}`], 50);
  const description = clampDescription(
    `Cours de Droit FSJES ${s} rangés par semestre : tronc commun, droit privé et droit public${ar ? ", en français et en arabe" : ""}, avec exercices corrigés et QCM.`
  );
  return { title, description, openGraph: { title: `${title} — SaadConcours`, description, url: PATH } };
}

// Comme /cours : une section par semestre, la filière et la langue sur la
// carte. Dans un semestre, l'ordre de droitSortComparator : le français puis
// l'arabe, le tronc commun puis les filières.
function groupes(modules) {
  return [
    ...DROIT_SEMESTRES.map((s) => ({ cle: s.code, titre: s.label, list: modules.filter((c) => c.semestre === s.code) })),
    { cle: "", titre: "Autres modules", list: modules.filter((c) => !c.semestre) },
  ].filter((g) => g.list.length);
}

// Mêmes attributs data-* que les cartes de /cours : CoursExplorer filtre les
// deux pages. Ici « parcours » porte la langue et « filiere » la filière
// (un module du tronc commun, sans filière, reste visible avec chacune).
// Une carte de renvoi mène au cours d'économie et gestion et le dit.
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
        {/* Pas de badge de semestre : les cartes sont déjà rangées sous « Semestre N ». */}
        <span className="bac-mat-meta">
          <span>{chapitres.length} {ar ? "فصول" : "chapitres"}</span>
          <span className="bac-dot">·</span>
          <span>{c.cible ? "Même cours qu'en économie et gestion" : droitRangLabel(c)}</span>
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
            name: "Cours de la licence de Droit (FSJES)",
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
            <LicenceSwitch actif="droit" />
            <h1>Cours de Droit FSJES{modules.length > 0 && ` : licence de Droit ${plage(modules)}`}</h1>
            <p>
              Les cours de la licence de Droit de la FSJES rangés par semestre : le tronc commun, puis la filière droit privé ou
              droit public et son parcours. Chaque module est découpé en chapitres : le cours, des exercices corrigés, un résumé et
              un QCM, et le cours complet en PDF.
            </p>
            {langues.length > 1 && (
              <p lang="ar" dir="rtl">
                دروس الإجازة في القانون باللغة العربية: الجذع المشترك، ثم القانون الخاص والقانون العام، مع تمارين مصححة.
              </p>
            )}
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
            <section key={g.cle || "autres"} className="bac-group" data-groupe={g.cle}>
              <h2 className="bac-section-title">{g.titre}</h2>
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
              La licence de Droit des FSJES (facultés des sciences juridiques, économiques et sociales) dure trois ans, soit six
              semestres. Les premiers semestres forment un tronc commun, qui
              pose les bases du droit privé et du droit public. L&apos;étudiant choisit ensuite sa filière, droit privé ou droit
              public, puis un parcours : affaires et finance, métiers de la justice, études politiques et internationales, science
              politique, géopolitique. Le droit s&apos;enseigne en français et en arabe, avec des filières propres à chaque langue.
              {filieres.length > 0 && ` Filières couvertes ici : ${filieres.map((f) => f.fr || f.label).join(", ")}.`} Chaque module
              est rangé sous son semestre et découpé en chapitres : le cours expliqué, puis des exercices avec leur corrigé détaillé, et le
              module entier en PDF. Tout est gratuit et sans inscription.
            </p>
            {communs.length > 0 && (
              <p>
                Quelques matières de la licence de Droit s&apos;enseignent aussi en licence d&apos;économie et gestion de la FSJES (
                {communs.map((c) => c.module.toLowerCase()).join(", ")}). Pour elles, le site n&apos;a qu&apos;un seul cours, celui de la
                Licence Économie et Gestion, et la carte du module y mène directement.
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
