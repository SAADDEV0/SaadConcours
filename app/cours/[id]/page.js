import { notFound } from "next/navigation";
import { marked } from "marked";
import { getAllCours, getSettings } from "@/lib/store";
import { chromeHtml, footerHtml } from "../../_shared/chrome";
import { renderMarkdownWithMath } from "../../_shared/mathMarkdown";
import { breadcrumbJsonLd } from "../../_shared/listingSchema";
import JsonLd from "../../_shared/JsonLd";
import MathScripts from "../../_shared/MathScripts";
import CoursDetailClient from "./CoursDetailClient";
import ConcoursLies from "../../_shared/ConcoursLies";
import AdSlot from "../../_shared/AdSlot";
import { coursCategoryInfo, licenceParcoursLabel, licenceFiliereLabel, licenceSemestreLabel } from "../../../lib/coursTaxonomy";
import { fsjesModule, fsjesModuleIcon, fsjesChapitreHref } from "../../../lib/fsjesChapitres";
import { concoursDuModule } from "../../../lib/concoursParModule";

const SITE_URL = "https://www.saadconcours.space";
const RESSOURCES = [
  { code: "cours", label: "Cours" },
  { code: "exercices", label: "Exercices" },
  { code: "resume", label: "Résumé" },
  { code: "qcm", label: "QCM" },
];

async function findCours(id) {
  const list = await getAllCours();
  return { c: list.find((x) => x.id === id) || null, list };
}

// Même semestre d'abord, puis même matière : maillage interne entre modules.
function getRelatedCours(list, current, limit = 4) {
  const autres = list.filter((x) => x.id !== current.id && x.available);
  const score = (x) => (x.semestre === current.semestre ? 2 : 0) + (x.category === current.category ? 1 : 0);
  return autres
    .filter((x) => score(x) > 0)
    .sort((a, b) => score(b) - score(a))
    .slice(0, limit);
}

export async function generateMetadata(props) {
  const params = await props.params;
  const { c } = await findCours(params.id);
  if (!c || !c.available) return {};

  const title = `${c.module} — Cours ${c.semestre ? `${c.semestre} ` : ""}FSJES par chapitre`;
  const description = `${c.module} (Licence FSJES${c.semestre ? `, ${licenceSemestreLabel(c.semestre)}` : ""}) : ${c.description || ""} Cours, exercices corrigés, résumé et QCM par chapitre.`.trim();
  const url = `${SITE_URL}/cours/${c.id}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: "article", title, description, url },
    twitter: { card: "summary_large_image", title, description },
  };
}

// Prerendered at build time — see app/concours/[id]/page.js for why
// generateStaticParams alone leaves the route dynamic (the no-store read in
// lib/github.js) and why revalidate is false (deploys rebuild everything).
export const dynamic = "force-static";
export const revalidate = false;

export async function generateStaticParams() {
  try {
    const list = await getAllCours();
    return list.filter((c) => c.available).map((c) => ({ id: c.id }));
  } catch {
    return [];
  }
}

function groupesParPartie(chapitres) {
  const groupes = [];
  for (const ch of chapitres) {
    const cle = ch.partie ? ch.partie.numero : 0;
    let g = groupes.find((x) => x.cle === cle);
    if (!g) {
      g = { cle, partie: ch.partie, chapitres: [] };
      groupes.push(g);
    }
    g.chapitres.push(ch);
  }
  return groupes;
}

export default async function CoursModulePage(props) {
  const params = await props.params;
  const { c, list } = await findCours(params.id);
  if (!c || !c.available) notFound();

  const cat = coursCategoryInfo(c.category);
  const { chapitres, annexe } = fsjesModule(c);
  const url = `${SITE_URL}/cours/${c.id}`;
  const related = getRelatedCours(list, c);
  const sujets = concoursDuModule(c.id);
  const nbExercices = chapitres.reduce((n, x) => n + x.nbExercices, 0);
  const nbQcm = chapitres.reduce((n, x) => n + x.qcm.length, 0);
  // Titres de l'annexe décalés d'un niveau quand elle commence en "# " : la
  // section a déjà son propre h2.
  const annexeMd = annexe.startsWith("# ") ? annexe.replace(/^## /gm, "### ").replace(/^# /gm, "## ") : annexe;
  const annexeHtml = annexe ? renderMarkdownWithMath(marked, annexeMd) : "";
  const settings = await getSettings().catch(() => null);
  const adsActives = Boolean(settings?.adsEnabled && settings?.adsPublisherId);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: c.module,
    description: c.description || `Cours de ${c.module} — Licence FSJES`,
    url,
    educationalLevel: "Licence",
    provider: { "@type": "Organization", name: "SaadConcours", url: SITE_URL },
    hasPart: chapitres.map((ch) => ({ "@type": "LearningResource", name: ch.titre, url: `${SITE_URL}${fsjesChapitreHref(c, ch)}` })),
  };

  return (
    <>
      {annexe && <MathScripts />}
      <JsonLd data={[jsonLd, breadcrumbJsonLd([{ name: "Cours", path: "/cours" }, { name: c.module, path: `/cours/${c.id}` }])]} />
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "cours", showSearch: false }) }} />

      <div className="bac-space site-space" style={{ "--mat-h": cat?.hue ?? 220 }}>
        <div className="bac-wrap">
          <nav className="cd-breadcrumb">
            <a href="/">Accueil</a> <span>/</span> <a href="/cours">Cours FSJES</a> <span>/</span> <span>{c.module}</span>
          </nav>

          <div className="bac-mat-hero">
            <span className="bac-mat-hero-icon">{fsjesModuleIcon(c, cat?.emoji)}</span>
            <div className="bac-mat-hero-body">
              <div className="bac-eyebrow">
                Licence FSJES{c.semestre ? ` · ${licenceSemestreLabel(c.semestre)}` : ""}
                {c.parcours ? ` · Parcours ${licenceParcoursLabel(c.parcours)}` : " · Tronc commun"}
              </div>
              <h1>{c.module}</h1>
              <p>{c.description}</p>
              <div className="bac-hero-stats">
                <span className="bac-stat">
                  <strong>{chapitres.length}</strong> chapitres
                </span>
                <span className="bac-stat">
                  <strong>{nbExercices}</strong> exercices corrigés
                </span>
                {nbQcm > 0 && (
                  <span className="bac-stat">
                    <strong>{nbQcm}</strong> questions de QCM
                  </span>
                )}
              </div>
              <div className="sp-hero-actions">
                {chapitres[0] && (
                  <a className="sp-btn primary" href={fsjesChapitreHref(c, chapitres[0])}>
                    Commencer le chapitre 1 →
                  </a>
                )}
                <button type="button" className="sp-btn" id="coursPdfBtn">
                  ⬇ Cours complet en PDF
                </button>
              </div>
            </div>
          </div>

          <div className="bac-mat-layout">
            <aside className="bac-side">
              <div className="bac-side-card">
                <div className="bac-side-title">Sommaire</div>
                <a href="#chapitres" className="bac-side-link">
                  Chapitres <span>{chapitres.length}</span>
                </a>
                {annexe && (
                  <a href="#formulaire" className="bac-side-link">
                    Formulaire & conseils <span>📐</span>
                  </a>
                )}
                {sujets.length > 0 && (
                  <a href="#concours" className="bac-side-link">
                    Sujets de concours <span>{sujets.length}</span>
                  </a>
                )}
              </div>
              <div className="bac-side-card">
                <div className="bac-side-title">Ce module</div>
                {c.semestre && (
                  <div className="sp-side-info">
                    Semestre <strong>{c.semestre}</strong>
                  </div>
                )}
                <div className="sp-side-info">
                  Parcours <strong>{c.parcours ? licenceParcoursLabel(c.parcours) : "Commun"}</strong>
                </div>
                {c.filiere && (
                  <div className="sp-side-info">
                    Filière <strong>{licenceFiliereLabel(c.filiere)}</strong>
                  </div>
                )}
                {cat && (
                  <div className="sp-side-info">
                    Matière <strong>{cat.label}</strong>
                  </div>
                )}
              </div>
            </aside>

            <main className="bac-main">
              <section id="chapitres" className="bac-semestre">
                <h2 className="bac-semestre-title">
                  <span className="bac-semestre-code">{c.semestre || "📖"}</span>
                  Chapitres du module
                </h2>
                {groupesParPartie(chapitres).map((g) => (
                  <div key={g.cle} className="bac-unite">
                    <div className="bac-unite-head">
                      {g.partie ? (
                        <>
                          <span className="bac-unite-num">Partie {g.partie.numero}</span>
                          <h3>{g.partie.titre}</h3>
                        </>
                      ) : (
                        <>
                          <span className="bac-unite-num">{c.module}</span>
                          <h3>Cours, exercices, résumé et QCM</h3>
                        </>
                      )}
                    </div>
                    <ol className="bac-chap-list">
                      {g.chapitres.map((ch) => (
                        <li key={ch.slug}>
                          <a className="bac-chap-row" href={fsjesChapitreHref(c, ch)}>
                            <span className="bac-chap-num">{ch.numero}</span>
                            <span className="bac-chap-title">{ch.titre}</span>
                            <span className="bac-chap-res">
                              {RESSOURCES.map((r) => {
                                const v = ch[r.code];
                                const on = Array.isArray(v) ? v.length > 0 : Boolean(v);
                                return (
                                  <span key={r.code} className={`bac-res-chip${on ? " on" : ""}`}>
                                    {r.label}
                                  </span>
                                );
                              })}
                            </span>
                          </a>
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
              </section>

              <AdSlot
                enabled={adsActives && settings?.adsCoursModuleEnabled}
                publisherId={settings?.adsPublisherId}
                slotId={settings?.adsCoursModuleSlot}
                label="Publicité — page du module"
              />

              {annexe && (
                <section id="formulaire" className="bac-semestre">
                  <h2 className="bac-semestre-title">
                    <span className="bac-semestre-code">📐</span>
                    Synthèse du module
                  </h2>
                  <div className="sp-annexe">
                    <div className="cours-content bac-md" id="coursAnnexe" dangerouslySetInnerHTML={{ __html: annexeHtml }} />
                  </div>
                </section>
              )}

              <ConcoursLies
                id="concours"
                titre={`Sujets de concours avec une épreuve de ${c.module}`}
                intro={`${sujets.length} sujet${sujets.length > 1 ? "s" : ""} réel${sujets.length > 1 ? "s" : ""} de concours d'accès au master ou à la licence d'excellence comportent une épreuve de ${c.module}. Chaque fiche donne l'énoncé complet et, pour la quasi-totalité, un corrigé indicatif : de quoi vérifier que ce module est acquis au niveau attendu le jour du concours.`}
                sujets={sujets}
              />

              {related.length > 0 && (
                <section className="bac-semestre">
                  <h2 className="bac-section-title">Autres modules</h2>
                  <div className="sp-related">
                    {related.map((r) => {
                      const rc = coursCategoryInfo(r.category);
                      return (
                        <a key={r.id} className="bac-mat-card" href={`/cours/${r.id}`} style={{ "--mat-h": rc?.hue ?? 220 }}>
                          <span className="bac-mat-icon">{fsjesModuleIcon(r, rc?.emoji)}</span>
                          <span className="bac-mat-body">
                            <span className="bac-mat-name">{r.module}</span>
                            <span className="bac-mat-meta">
                              {r.semestre && <span>{r.semestre}</span>}
                              <span>{fsjesModule(r).chapitres.length} chapitres</span>
                            </span>
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </section>
              )}
            </main>
          </div>
        </div>
      </div>

      {/* Sans le Markdown : il pèserait plus lourd que la page elle-même dans
          le HTML. Le bouton PDF le charge au clic. */}
      <CoursDetailClient cours={{ id: c.id, module: c.module, title: c.title, description: c.description }} />
      <div dangerouslySetInnerHTML={{ __html: footerHtml() }} />
    </>
  );
}
