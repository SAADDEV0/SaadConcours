import { notFound } from "next/navigation";
import { marked } from "marked";
import { getAllPrepa, getSettings } from "@/lib/store";
import { chromeHtml, footerHtml } from "../../../_shared/chrome";
import { renderMarkdownWithMath } from "../../../_shared/mathMarkdown";
import { breadcrumbJsonLd } from "../../../_shared/listingSchema";
import JsonLd from "../../../_shared/JsonLd";
import MathScripts from "../../../_shared/MathScripts";
import CoursDetailClient from "../../../cours/[id]/CoursDetailClient";
import AdSlot from "../../../_shared/AdSlot";
import ConcoursLies from "../../../_shared/ConcoursLies";
import ChaineWhatsapp from "../../../_shared/ChaineWhatsapp";
import { fitTitle, clampDescription } from "../../../_shared/seoText";
import { Icon } from "../../../_shared/icons";
import { concoursDuModule } from "../../../../lib/concoursParModule";
import { prepaOption, prepaModule, prepaModuleHref, prepaChapitreHref, prepaOptionHref, prepaOptionOuverte, prepaSlug, isPrepaPublie } from "../../../../lib/prepa";

const SITE_URL = "https://www.saadconcours.space";
const RESSOURCES = [
  { code: "cours", label: "Cours" },
  { code: "exercices", label: "Exercices" },
  { code: "resume", label: "Résumé" },
  { code: "qcm", label: "QCM" },
];

export const dynamic = "force-static";
export const revalidate = false;
// Une adresse hors de la liste est une 404, jamais un rendu par le Worker.
export const dynamicParams = false;

// Cours publiés des options ouvertes (lib/prepa.js).
async function publies() {
  return (await getAllPrepa()).filter((c) => isPrepaPublie(c) && prepaOptionOuverte(c.option));
}

async function findModule(option, slug) {
  const list = await publies();
  return { c: list.find((x) => x.option === option && prepaSlug(x) === slug) || null, list };
}

export async function generateStaticParams() {
  try {
    return (await publies()).map((c) => ({ option: c.option, id: prepaSlug(c) }));
  } catch {
    return [];
  }
}

export async function generateMetadata(props) {
  const { option, id } = await props.params;
  const { c } = await findModule(option, id);
  if (!c) return {};
  const o = prepaOption(c.option);
  const title = fitTitle([`${c.module} — Cours de prépa ${o.court} par chapitre`, `${c.module} — Cours de prépa ${o.court}`, `${c.module} — Prépa ${o.court}`]);
  const description = clampDescription(
    [`${c.description}`, `${c.module} : cours de prépa ${o.court} pour le CNAEM, chapitres et exercices corrigés.`].find((d) => d && d.length <= 155) || c.description
  );
  const url = `${SITE_URL}${prepaModuleHref(c)}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: "article", title, description, url },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function PrepaModulePage(props) {
  const { option, id } = await props.params;
  const { c, list } = await findModule(option, id);
  if (!c) notFound();

  const o = prepaOption(c.option);
  const { chapitres, annexe } = prepaModule(c);
  const href = prepaModuleHref(c);
  const optionHref = prepaOptionHref(o.code);
  const related = list.filter((x) => x.id !== c.id && x.option === c.option).slice(0, 4);
  const sujets = concoursDuModule(c.id);
  const nbExercices = chapitres.reduce((n, x) => n + x.nbExercices, 0);
  const nbQcm = chapitres.reduce((n, x) => n + x.qcm.length, 0);
  const annexeMd = annexe.startsWith("# ") ? annexe.replace(/^## /gm, "### ").replace(/^# /gm, "## ") : annexe;
  const annexeHtml = annexe ? renderMarkdownWithMath(marked, annexeMd) : "";
  const settings = await getSettings().catch(() => null);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: c.module,
    description: c.description || `Cours de ${c.module} — prépa ${o.court}`,
    url: `${SITE_URL}${href}`,
    educationalLevel: `Classes préparatoires — ${o.intitule}`,
    inLanguage: "fr",
    provider: { "@type": "Organization", name: "SaadConcours", url: SITE_URL },
    hasPart: chapitres.map((ch) => ({ "@type": "LearningResource", name: ch.titre, url: `${SITE_URL}${prepaChapitreHref(c, ch)}` })),
  };

  return (
    <>
      {annexe && <MathScripts />}
      <JsonLd data={[jsonLd, breadcrumbJsonLd([{ name: `Cours de prépa ${o.court}`, path: optionHref }, { name: c.module, path: href }])]} />
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: `prepa-${o.code}` }) }} />

      <div className="bac-space">
        <div className="bac-wrap">
          <nav className="cd-breadcrumb">
            <a href="/">Accueil</a> <span>/</span> <a href={optionHref}>Cours de prépa {o.court}</a> <span>/</span> <span>{c.module}</span>
          </nav>

          <div className="bac-mat-hero">
            <div className="bac-mat-hero-body">
              <div className="bac-eyebrow">Prépa {o.court} · CNAEM</div>
              <h1>{c.module}</h1>
              <p>{c.description}</p>
              <div className="bac-hero-stats">
                <span className="bac-stat">
                  <strong>{chapitres.length}</strong> chapitre{chapitres.length > 1 ? "s" : ""}
                </span>
                {nbExercices > 0 && (
                  <span className="bac-stat">
                    <strong>{nbExercices}</strong> exercice{nbExercices > 1 ? "s" : ""} corrigé{nbExercices > 1 ? "s" : ""}
                  </span>
                )}
                {nbQcm > 0 && (
                  <span className="bac-stat">
                    <strong>{nbQcm}</strong> questions de QCM
                  </span>
                )}
              </div>
              <div className="sp-hero-actions">
                <a className="sp-btn primary" href={prepaChapitreHref(c, chapitres[0])} data-resume-link={href}>
                  Commencer le chapitre 1 <Icon name="arrow-right" size={18} />
                </a>
                <button type="button" className="sp-btn" id="coursPdfBtn">
                  <Icon name="file-pdf" size={18} />
                  Cours complet en PDF
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
                    Formulaire & conseils{" "}
                    <span>
                      <Icon name="ruler" size={16} />
                    </span>
                  </a>
                )}
                {sujets.length > 0 && (
                  <a href="#concours" className="bac-side-link">
                    Sujets du CNAEM <span>{sujets.length}</span>
                  </a>
                )}
              </div>
              <div className="bac-side-card">
                <div className="bac-side-title">Ce cours</div>
                <div className="sp-side-info">
                  Classe <strong>Prépa {o.court}</strong>
                </div>
                <div className="sp-side-info">
                  Concours <strong>CNAEM</strong>
                </div>
              </div>
            </aside>

            <main className="bac-main">
              <section id="chapitres" className="bac-semestre">
                <h2 className="bac-semestre-title">
                  <span className="bac-semestre-code">{o.court}</span>
                  Chapitres du cours
                </h2>
                <div className="bac-unite">
                  <div className="bac-unite-head">
                    <span className="bac-unite-num">{c.module}</span>
                    <h3>Cours et exercices corrigés</h3>
                  </div>
                  <ol className="bac-chap-list">
                    {chapitres.map((ch) => (
                      <li key={ch.slug}>
                        <a className="bac-chap-row" href={prepaChapitreHref(c, ch)}>
                          <span className="bac-chap-num">{ch.numero}</span>
                          <span className="bac-chap-title">{ch.titre}</span>
                          <span className="bac-chap-res">
                            {RESSOURCES.filter((r) => (Array.isArray(ch[r.code]) ? ch[r.code].length > 0 : Boolean(ch[r.code]))).map((r) => (
                              <span key={r.code} className="bac-res-chip on">
                                {r.label}
                              </span>
                            ))}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>
              </section>

              <AdSlot settings={settings} placement="cours_module" />

              {annexe && (
                <section id="formulaire" className="bac-semestre">
                  <h2 className="bac-semestre-title">
                    <span className="bac-semestre-code">
                      <Icon name="ruler" size={16} />
                    </span>
                    Synthèse du cours
                  </h2>
                  <div className="sp-annexe">
                    <div className="cours-content bac-md" id="coursAnnexe" dangerouslySetInnerHTML={{ __html: annexeHtml }} />
                  </div>
                </section>
              )}

              <ConcoursLies
                id="concours"
                titre={`Sujets du CNAEM ${o.court} pour ce cours`}
                intro={`${sujets.length} sujet${sujets.length > 1 ? "s" : ""} réel${sujets.length > 1 ? "s" : ""} du CNAEM option ${o.court} comporte${sujets.length > 1 ? "nt" : ""} une partie traitée dans ce cours. Chaque fiche donne l'énoncé complet et un corrigé indicatif.`}
                sujets={sujets}
              />

              {related.length > 0 && (
                <section className="bac-semestre">
                  <h2 className="bac-section-title">Autres cours de prépa {o.court}</h2>
                  <div className="sp-related">
                    {related.map((r) => (
                      <a key={r.id} className="bac-mat-card" href={prepaModuleHref(r)}>
                        <span className="bac-mat-body">
                          <span className="bac-mat-name">{r.module}</span>
                          <span className="bac-mat-meta">
                            <span>{prepaModule(r).chapitres.length} chapitres</span>
                          </span>
                        </span>
                      </a>
                    ))}
                  </div>
                </section>
              )}

              <ChaineWhatsapp settings={settings} />
            </main>
          </div>
        </div>
      </div>

      <CoursDetailClient cours={{ id: c.id, module: c.module, title: c.title, description: c.description }} source="/data/prepa.json" editHref="/admin" />
      <div dangerouslySetInnerHTML={{ __html: footerHtml() }} />
    </>
  );
}
