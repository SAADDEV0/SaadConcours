import { getPublicConcours, getAllCours, getCorrigeIdsLocal } from "@/lib/store";
import { chromeHtml, footerHtml } from "../_shared/chrome";
import { concoursCardHtml, compareConcoursRecents } from "../_shared/concoursCard";
import { breadcrumbJsonLd } from "../_shared/listingSchema";
import JsonLd from "../_shared/JsonLd";
import { isTaalim } from "@/lib/concoursNiveaux";
import { FILIERES, TRONC_COMMUN, TYPES_COURS, SPECIALITES_SECONDAIRE, specialitesDuCycle } from "@/lib/taalimFilieres";

// Hub de l'espace Taalim (2026-10-25) : d'abord les filières du concours et
// le professeur que l'on devient, puis les cours à réviser pour chacune, puis
// les sujets officiels (liste complète : /concours/taalim). Prérendue comme
// toutes les pages publiques (voir README). Contenu des filières :
// lib/taalimFilieres.js.
export const dynamic = "force-static";
export const revalidate = false;

const PATH = "/taalim";

async function donnees() {
  const [tous, cours] = await Promise.all([getPublicConcours().catch(() => []), getAllCours().catch(() => [])]);
  const corrigeIds = getCorrigeIdsLocal();
  const concours = tous.filter(isTaalim).map((c) => ({ ...c, hasCorrige: Boolean(c.corrige_md) || corrigeIds.has(c.id) }));
  // Cours du site cités par une filière : seulement s'ils sont publiés.
  const coursPublies = new Map(cours.filter((c) => c.available).map((c) => [c.id, c.module]));
  return { concours: concours.sort(compareConcoursRecents), coursPublies };
}

// Sans sujet publié, l'espace Taalim est fermé (lib/espaces.js) : la page
// n'est liée nulle part et reste hors de l'index.
export async function generateMetadata() {
  const { concours } = await donnees();
  const description =
    "Concours Taalim au Maroc : les filières (primaire, collège, lycée, cadres de soutien), le professeur que vous devenez, les cours à réviser et les sujets officiels corrigés.";
  return {
    title: "Concours Taalim — filières, cours et sujets officiels",
    description,
    alternates: { canonical: PATH },
    ...(concours.length ? {} : { robots: { index: false, follow: true } }),
    openGraph: { title: "Concours Taalim — filières, cours et sujets", description, url: PATH, images: ["/opengraph-image"] },
  };
}

function TypeBadge({ type }) {
  return (
    <span className={`tl-type tl-type-${type}`} title={TYPES_COURS[type].desc}>
      {TYPES_COURS[type].label}
    </span>
  );
}

// Une ligne de cours : nom (et nom arabe), type, détail, cours du site liés.
function CoursLigne({ c, coursPublies }) {
  const liens = (c.liens || []).filter((id) => coursPublies.has(id));
  return (
    <li className="tl-cours">
      <div className="tl-cours-head">
        <strong>{c.nom}</strong>
        {c.ar && (
          <bdi lang="ar" className="tl-ar">
            {c.ar}
          </bdi>
        )}
        <TypeBadge type={c.type} />
      </div>
      {c.detail && <p>{c.detail}</p>}
      {liens.length > 0 && <LiensCours ids={liens} coursPublies={coursPublies} />}
    </li>
  );
}

function LiensCours({ ids, coursPublies }) {
  return (
    <p className="tl-liens">
      Réviser sur le site :{" "}
      {ids.map((id, i) => (
        <span key={id}>
          {i > 0 && " · "}
          <a href={`/cours/${encodeURIComponent(id)}`}>{coursPublies.get(id)}</a>
        </span>
      ))}
    </p>
  );
}

function FiliereCarte({ f, nbSujets }) {
  const specialites = f.specialites ? f.specialites.map((s) => s.nom) : specialitesDuCycle(f.secondaire).map((s) => s.nom);
  return (
    <article className="tl-filiere" id={`filiere-${f.key}`}>
      <span className="tl-filiere-cycle">{f.cycle}</span>
      <h3>{f.titre}</h3>
      <bdi lang="ar" className="tl-ar">
        {f.ar}
      </bdi>
      <dl>
        <dt>Vos élèves</dt>
        <dd>{f.eleves}</dd>
        <dt>Votre métier</dt>
        <dd>{f.role}</dd>
        <dt>Pour candidater</dt>
        <dd>{f.acces}</dd>
        {f.postes && (
          <>
            <dt>Postes</dt>
            <dd>{f.postes}</dd>
          </>
        )}
        <dt>{specialites.length > 1 ? `${specialites.length} spécialités` : "Spécialité"}</dt>
        <dd>{specialites.join(", ")}.</dd>
      </dl>
      <div className="tl-filiere-liens">
        <a href={`#cours-${f.key}`}>Les cours à réviser</a>
        {nbSujets > 0 && <a href={`#sujets-${f.key}`}>{nbSujets > 1 ? `${nbSujets} sujets officiels` : "1 sujet officiel"}</a>}
      </div>
    </article>
  );
}

export default async function TaalimPage() {
  const { concours, coursPublies } = await donnees();
  const parFiliere = (f) => concours.filter((c) => c.filiere === f.filiere);
  const nbCorriges = concours.filter((c) => c.hasCorrige).length;
  const nbSpecialites = FILIERES.reduce((n, f) => n + (f.specialites?.length || 0), 0) + SPECIALITES_SECONDAIRE.length;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Concours", path: "/concours" },
          { name: "Taalim", path: PATH },
        ])}
      />
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "taalim" }) }} />

      <div className="bac-space">
        <div className="bac-wrap">
          <section className="bac-hero">
            <h1>Concours Taalim — devenir enseignant au Maroc</h1>
            <p>
              Le concours de l&apos;enseignement public recrute chaque année des professeurs du primaire, du collège et du lycée.
              Choisissez votre filière, voyez le professeur que vous deviendrez, les cours à réviser pour l&apos;écrit, puis
              entraînez-vous sur les sujets officiels corrigés.
            </p>
            <div className="bac-hero-stats">
              <span className="bac-stat">
                <strong>{FILIERES.length}</strong> filières
              </span>
              <span className="bac-stat">
                <strong>{nbSpecialites}</strong> spécialités
              </span>
              <span className="bac-stat">
                <strong>{concours.length}</strong> sujets officiels
              </span>
              <span className="bac-stat">
                <strong>{nbCorriges}</strong> corrigés
              </span>
            </div>
          </section>

          <nav className="tl-sommaire" aria-label="Sur cette page">
            <a href="#filieres">1. Les filières</a>
            <a href="#cours">2. Les cours</a>
            <a href="#concours">3. Les concours</a>
          </nav>

          {/* 1. Filières et métier */}
          <section className="bac-group" id="filieres">
            <h2 className="bac-section-title">Les filières du concours : quel professeur serez-vous ?</h2>
            <p className="tl-intro">
              On ne choisit qu&apos;une filière par session. Au primaire, toute licence est acceptée ; au collège et au lycée, la
              spécialité doit être celle de votre licence.
            </p>
            <div className="tl-filieres">
              {FILIERES.map((f) => (
                <FiliereCarte key={f.key} f={f} nbSujets={parFiliere(f).length} />
              ))}
            </div>
          </section>

          <section className="sp-le-steps" aria-label="Du concours à la classe">
            <div className="sp-le-step">
              <span className="sp-le-step-num">1</span>
              <strong>Candidature et présélection</strong>
              <span>Inscription en ligne sur le portail du ministère, licence exigée, 35 ans au plus, présélection sur dossier.</span>
            </div>
            <div className="sp-le-step">
              <span className="sp-le-step-num">2</span>
              <strong>Écrit, puis oral</strong>
              <span>Un écrit commun à tous et un écrit de spécialité, le même jour partout au Maroc ; entretien oral pour les admissibles.</span>
            </div>
            <div className="sp-le-step">
              <span className="sp-le-step-num">3</span>
              <strong>Un an au CRMEF, puis la classe</strong>
              <span>
                Année de qualification (cours et stages), puis affectation par l&apos;académie. Depuis le statut de février 2024, les
                enseignants recrutés sont fonctionnaires du ministère.
              </span>
            </div>
          </section>

          {/* 2. Cours par filière */}
          <section className="bac-group" id="cours">
            <h2 className="bac-section-title">Les cours à réviser, filière par filière</h2>
            <p className="tl-intro">Chaque cours porte son type : il dit à quelle épreuve il sert.</p>
            <ul className="tl-legende">
              {Object.entries(TYPES_COURS).map(([k, t]) => (
                <li key={k}>
                  <TypeBadge type={k} /> {t.desc}
                </li>
              ))}
            </ul>

            <div className="tl-bloc" id="cours-commun">
              <h3>Tronc commun — toutes les filières d&apos;enseignement</h3>
              <ul className="tl-cours-liste">
                {TRONC_COMMUN.map((c) => (
                  <CoursLigne key={c.nom} c={c} coursPublies={coursPublies} />
                ))}
              </ul>
            </div>

            {FILIERES.map((f) => (
              <div className="tl-bloc" id={`cours-${f.key}`} key={f.key}>
                <h3>
                  {f.cycle} <span className="tl-h3-sub">— {f.titre}</span>
                </h3>
                {f.specialites ? (
                  f.specialites.map((s) => (
                    <div key={s.nom} className="tl-specialite">
                      <h4>
                        {s.nom}{" "}
                        <bdi lang="ar" className="tl-ar">
                          {s.ar}
                        </bdi>
                      </h4>
                      <p className="tl-spec-desc">{s.desc}</p>
                      <ul className="tl-cours-liste">
                        {s.cours.map((c) => (
                          <CoursLigne key={c.nom} c={c} coursPublies={coursPublies} />
                        ))}
                      </ul>
                    </div>
                  ))
                ) : (
                  <>
                    <p className="tl-spec-desc">
                      Pour chaque spécialité : le contenu de la matière <TypeBadge type="specialite" /> et sa didactique{" "}
                      <TypeBadge type="didactique" />, en plus du tronc commun.
                    </p>
                    <div className="tl-specs">
                      {specialitesDuCycle(f.secondaire).map((s) => {
                        const liens = (s.liens || []).filter((id) => coursPublies.has(id));
                        return (
                          <div key={s.nom} className="tl-spec">
                            <strong>{s.nom}</strong>
                            <bdi lang="ar" className="tl-ar">
                              {s.ar}
                            </bdi>
                            <ul>
                              {s.cours.map((x) => (
                                <li key={x}>{x}</li>
                              ))}
                              <li>Didactique de la matière</li>
                            </ul>
                            {liens.length > 0 && <LiensCours ids={liens} coursPublies={coursPublies} />}
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
            ))}
          </section>

          {/* 3. Sujets officiels */}
          <section className="bac-group" id="concours">
            <div className="home-subhead">
              <h2 className="bac-section-title">Les concours : sujets officiels corrigés</h2>
              {concours.length > 0 && <a href="/concours/taalim">Tous les sujets</a>}
            </div>
            {FILIERES.filter((f) => parFiliere(f).length).map((f) => (
              <div key={f.key} className="tl-bloc" id={`sujets-${f.key}`}>
                <h3>{f.cycle}</h3>
                <div
                  className="sp-rows"
                  dangerouslySetInnerHTML={{ __html: parFiliere(f).map((c) => concoursCardHtml(c, { dl: false })).join("") }}
                />
              </div>
            ))}
            <p className="tl-intro">
              Les sujets sont nationaux : le même tombe dans toutes les académies. Chaque fiche donne l&apos;énoncé transcrit, le
              scan officiel et un corrigé proposé par SaadConcours.
            </p>
          </section>
        </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: footerHtml() }} />
    </>
  );
}
