import { notFound } from "next/navigation";
import { marked } from "marked";
import { getAllPrepa, getSettings } from "@/lib/store";
import { chromeHtml, footerHtml } from "../../../../_shared/chrome";
import { renderMarkdownWithMath } from "../../../../_shared/mathMarkdown";
import { breadcrumbJsonLd } from "../../../../_shared/listingSchema";
import JsonLd from "../../../../_shared/JsonLd";
import MathScripts from "../../../../_shared/MathScripts";
import BacQcm from "../../../../bac/BacQcm";
import BacChapitreClient from "../../../../bac/BacChapitreClient";
import AdSlot from "../../../../_shared/AdSlot";
import AvisUtile from "../../../../_shared/AvisUtile";
import ConcoursLies from "../../../../_shared/ConcoursLies";
import ChaineWhatsapp from "../../../../_shared/ChaineWhatsapp";
import { fitTitle, clampDescription } from "../../../../_shared/seoText";
import { Icon } from "../../../../_shared/icons";
import { slugifyTitre } from "../../../../../lib/fsjesChapitres";
import { concoursDuModule, concoursDuChapitre } from "../../../../../lib/concoursParModule";
import { prepaOption, prepaModule, prepaModuleHref, prepaChapitreHref, prepaOptionHref, prepaOptionOuverte, prepaSlug, prepaModuleIcon, isPrepaPublie } from "../../../../../lib/prepa";

const SITE_URL = "https://www.saadconcours.space";

export const dynamic = "force-static";
export const revalidate = false;
// Une adresse hors de la liste est une 404, jamais un rendu par le Worker.
export const dynamicParams = false;

// Mêmes onglets que les autres chapitres, seulement ceux qui ont du contenu
// (pas d'onglet « en préparation », BANQUE_PROMPTS §1.6).
const ONGLETS = [
  { code: "cours", label: "Cours", icon: "📖" },
  { code: "exercices", label: "Exercices", icon: "✏️" },
  { code: "resume", label: "Résumé", icon: "⚡" },
  { code: "qcm", label: "QCM", icon: "✅" },
];

async function publies() {
  return (await getAllPrepa()).filter((c) => isPrepaPublie(c) && prepaOptionOuverte(c.option));
}

async function findChapitre(option, id, slug) {
  const list = await publies();
  const c = list.find((x) => x.option === option && prepaSlug(x) === id);
  if (!c) return null;
  const { chapitres } = prepaModule(c);
  const i = chapitres.findIndex((x) => x.slug === slug);
  if (i === -1) return null;
  return { c, i, chapitres, ch: chapitres[i], prev: chapitres[i - 1] || null, next: chapitres[i + 1] || null };
}

export async function generateStaticParams() {
  try {
    return (await publies()).flatMap((c) => prepaModule(c).chapitres.map((ch) => ({ option: c.option, id: prepaSlug(c), chapitre: ch.slug })));
  } catch {
    return [];
  }
}

// La forme longue tant qu'elle tient en 65 caractères ; un titre trop long
// garde sa tête (avant les deux-points).
function titreSeo(c, ch) {
  const o = prepaOption(c.option);
  const tete = ch.titre.split(/\s?:\s/)[0].trim();
  const court = tete.length >= 10 && tete !== ch.titre ? tete : null;
  return fitTitle([
    `${ch.titre} : cours et exercices corrigés — Prépa ${o.court}`,
    `${ch.titre} — ${c.module}, prépa ${o.court}`,
    `${ch.titre} — Prépa ${o.court}`,
    court && `${court} — ${c.module}, prépa ${o.court}`,
    court && `${court} — Prépa ${o.court}`,
    court || ch.titre,
  ]);
}

function descriptionSeo(c, ch) {
  if (ch.description) return clampDescription(ch.description);
  const o = prepaOption(c.option);
  return clampDescription(`${c.module} (prépa ${o.court}), chapitre ${ch.numero} : ${ch.titre}. Cours expliqué et exercices corrigés pour le CNAEM.`);
}

const ENTITES = { "&amp;": "&", "&#39;": "'", "&quot;": '"', "&lt;": "<", "&gt;": ">" };

// Ancres sur les <h2> du cours : sommaire du chapitre (même code que /cours et /droit).
function avecAncres(html) {
  const sommaire = [];
  const vus = new Set();
  const out = html.replace(/<h2>([\s\S]*?)<\/h2>/g, (m, inner) => {
    const texte = inner
      .replace(/<[^>]+>/g, "")
      .replace(/&(amp|#39|quot|lt|gt);/g, (e) => ENTITES[e])
      .trim();
    let ancre = slugifyTitre(texte) || `section-${sommaire.length + 1}`;
    while (vus.has(ancre)) ancre = `${ancre}-${sommaire.length + 1}`;
    vus.add(ancre);
    sommaire.push({ ancre, texte });
    return `<h2 id="${ancre}">${inner}</h2>`;
  });
  return { html: out, sommaire };
}

export async function generateMetadata(props) {
  const { option, id, chapitre } = await props.params;
  const found = await findChapitre(option, id, chapitre);
  if (!found) return {};
  const { c, ch } = found;
  const title = titreSeo(c, ch);
  const description = descriptionSeo(c, ch);
  const url = `${SITE_URL}${prepaChapitreHref(c, ch)}`;
  const image = { url: `${prepaModuleHref(c)}/opengraph-image`, width: 1200, height: 630, alt: `${c.module} — cours de prépa SaadConcours` };
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: "article", title, description, url, images: [image] },
    twitter: { card: "summary_large_image", title, description, images: [image.url] },
  };
}

function md(source) {
  return renderMarkdownWithMath(marked, source);
}

function aDuContenu(v) {
  return Array.isArray(v) ? v.length > 0 : Boolean(v);
}

export default async function PrepaChapitrePage(props) {
  const { option, id, chapitre } = await props.params;
  const found = await findChapitre(option, id, chapitre);
  if (!found) notFound();
  const { c, i, chapitres, ch, prev, next } = found;
  const o = prepaOption(c.option);
  const optionHref = prepaOptionHref(o.code);
  const moduleHref = prepaModuleHref(c);
  const url = `${SITE_URL}${prepaChapitreHref(c, ch)}`;
  const coursRendu = ch.cours ? avecAncres(md(ch.cours)) : null;
  const onglets = ONGLETS.filter((x) => aDuContenu(ch[x.code]));
  const settings = await getSettings().catch(() => null);
  const { annexe } = prepaModule(c);
  const nbSujets = concoursDuModule(c.id).length;
  const sujets = concoursDuChapitre(c.id, i);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: ch.titre,
    headline: ch.titre,
    description: descriptionSeo(c, ch),
    url,
    inLanguage: "fr",
    isAccessibleForFree: true,
    learningResourceType: onglets.map((x) => ({ cours: "Cours", exercices: "Exercices corrigés", resume: "Résumé", qcm: "QCM" })[x.code]),
    educationalLevel: `Classes préparatoires — ${o.intitule}`,
    teaches: coursRendu?.sommaire.length ? coursRendu.sommaire.map((s) => s.texte) : ch.titre,
    audience: { "@type": "EducationalAudience", educationalRole: "student" },
    position: ch.numero,
    isPartOf: { "@type": "Course", name: c.module, url: `${SITE_URL}${moduleHref}` },
    provider: { "@type": "Organization", name: "SaadConcours", url: SITE_URL },
    author: { "@type": "Organization", name: "SaadConcours", url: SITE_URL },
  };

  return (
    <>
      <MathScripts />
      <JsonLd
        data={[
          jsonLd,
          breadcrumbJsonLd([
            { name: `Cours de prépa ${o.court}`, path: optionHref },
            { name: c.module, path: moduleHref },
            { name: ch.titre, path: prepaChapitreHref(c, ch) },
          ]),
        ]}
      />
      <BacChapitreClient />
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: `prepa-${o.code}` }) }} />

      <div className="bac-space">
        <div className="bac-wrap">
          <nav className="cd-breadcrumb">
            <a href="/">Accueil</a> <span>/</span> <a href={optionHref}>Cours de prépa {o.court}</a> <span>/</span> <a href={moduleHref}>{c.module}</a>{" "}
            <span>/</span> <span>Chapitre {ch.numero}</span>
          </nav>

          <div className="bac-mat-layout">
            <aside className="bac-side">
              <div className="bac-side-card">
                <a href={moduleHref} className="bac-side-back">
                  <Icon e={prepaModuleIcon(c, "📘")} size={18} /> {c.module}
                </a>
                <ol className="bac-side-chaps">
                  {chapitres.map((x) => (
                    <li key={x.slug}>
                      <a href={prepaChapitreHref(c, x)} className={x.slug === ch.slug ? "active" : ""} aria-current={x.slug === ch.slug ? "page" : undefined}>
                        <span>{x.numero}</span>
                        {x.titre}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>

            <main className="bac-main">
              <div className="bac-chap-hero">
                <div className="bac-eyebrow">
                  Chapitre {ch.numero} · Prépa {o.court} · CNAEM
                </div>
                <h1>{ch.titre}</h1>
                <div className="bac-chap-unite">{c.module}</div>
              </div>

              <div className="bac-tabs">
                {onglets.map((x, k) => (
                  <input key={x.code} type="radio" name="bac-tab" id={`tab-${x.code}`} className="bac-tab-input" defaultChecked={k === 0} />
                ))}
                {onglets.length > 1 && (
                  <div className="bac-tab-labels">
                    {onglets.map((x) => (
                      <label key={x.code} htmlFor={`tab-${x.code}`} className={`bac-tab-label bac-tab-label-${x.code}`}>
                        <Icon e={x.icon} size={18} /> {x.label}
                      </label>
                    ))}
                  </div>
                )}
                {onglets.map((x) => {
                  const valeur = ch[x.code];
                  let corps;
                  if (x.code === "qcm") {
                    corps = <BacQcm questions={valeur} lang="fr" />;
                  } else if (x.code === "cours" && coursRendu) {
                    corps = (
                      <>
                        {coursRendu.sommaire.length >= 3 && (
                          <nav className="fs-sommaire" aria-label="Sommaire du chapitre">
                            <div className="fs-sommaire-title">Au sommaire de ce chapitre</div>
                            <ol>
                              {coursRendu.sommaire.map((s) => (
                                <li key={s.ancre}>
                                  <a href={`#${s.ancre}`}>{s.texte}</a>
                                </li>
                              ))}
                            </ol>
                          </nav>
                        )}
                        <div className="cours-content bac-md" dangerouslySetInnerHTML={{ __html: coursRendu.html }} />
                      </>
                    );
                  } else {
                    corps = <div className="cours-content bac-md" dangerouslySetInnerHTML={{ __html: md(valeur) }} />;
                  }
                  return (
                    <section key={x.code} className={`bac-tab-panel bac-tab-panel-${x.code}`}>
                      {corps}
                    </section>
                  );
                })}
              </div>

              <AvisUtile lang="fr" />

              <AdSlot settings={settings} placement="cours_chapitre" />

              <ConcoursLies
                titre="S'entraîner sur des sujets du CNAEM"
                intro={`Des sujets réels du CNAEM option ${o.court} avec une partie traitée dans le cours ${c.module} : énoncé complet et corrigé indicatif.`}
                sujets={sujets}
                lienTous={nbSujets > sujets.length ? { href: `${moduleHref}#concours`, label: `Voir les ${nbSujets} sujets du CNAEM liés à ce cours` } : null}
              />

              <nav className="bac-pager">
                {prev ? (
                  <a href={prepaChapitreHref(c, prev)} className="bac-pager-btn">
                    <span>← Chapitre précédent</span>
                    <strong>{prev.titre}</strong>
                  </a>
                ) : (
                  <a href={moduleHref} className="bac-pager-btn">
                    <span>← Retour au cours</span>
                    <strong>{c.module}</strong>
                  </a>
                )}
                {next ? (
                  <a href={prepaChapitreHref(c, next)} className="bac-pager-btn next">
                    <span>Chapitre suivant →</span>
                    <strong>{next.titre}</strong>
                  </a>
                ) : (
                  <a href={annexe ? `${moduleHref}#formulaire` : moduleHref} className="bac-pager-btn next">
                    <span>Fin du cours →</span>
                    <strong>{annexe ? "Synthèse et formulaire final" : c.module}</strong>
                  </a>
                )}
              </nav>

              <ChaineWhatsapp settings={settings} />
            </main>
          </div>
        </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: footerHtml() }} />
    </>
  );
}
