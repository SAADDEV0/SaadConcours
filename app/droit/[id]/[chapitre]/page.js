import { notFound } from "next/navigation";
import { marked } from "marked";
import { getAllDroit, getSettings } from "@/lib/store";
import { chromeHtml, footerHtml } from "../../../_shared/chrome";
import { renderMarkdownWithMath } from "../../../_shared/mathMarkdown";
import { breadcrumbJsonLd } from "../../../_shared/listingSchema";
import JsonLd from "../../../_shared/JsonLd";
import MathScripts from "../../../_shared/MathScripts";
import BacQcm from "../../../bac/BacQcm";
import BacChapitreClient from "../../../bac/BacChapitreClient";
import AdSlot from "../../../_shared/AdSlot";
import { fitTitle, clampDescription } from "../../../_shared/seoText";
import { droitLangueInfo, droitRangLabel } from "../../../../lib/droitTaxonomy";
import { droitModule, droitModuleHref, droitChapitreHref, droitModuleIcon, droitOuvert, isDroitPublie } from "../../../../lib/droit";
import { slugifyTitre } from "../../../../lib/fsjesChapitres";
import { Icon } from "../../../_shared/icons";

const SITE_URL = "https://www.saadconcours.space";

export const dynamic = "force-static";
export const revalidate = false;
// Une adresse hors de la liste est une 404, jamais un rendu par le Worker.
export const dynamicParams = false;

// Mêmes onglets que les chapitres FSJES (app/cours/[id]/[chapitre]), mais
// seulement ceux qui ont du contenu : un cours saisi depuis la console
// n'a souvent ni résumé ni QCM, et un onglet « en préparation » est une page
// en construction aux yeux de la relecture AdSense (BANQUE_PROMPTS §1.6).
const ONGLETS = [
  { code: "cours", label: "Cours", icon: "📖" },
  { code: "exercices", label: "Exercices", icon: "✏️" },
  { code: "resume", label: "Résumé", icon: "⚡" },
  { code: "qcm", label: "QCM", icon: "✅" },
];

// Espace construit en silence : avant le lancement (DROIT_LANCE,
// lib/contenusPublies.mjs), aucune page de chapitre n'est générée.
async function publies() {
  return droitOuvert() ? (await getAllDroit()).filter(isDroitPublie) : [];
}

async function findChapitre(id, slug) {
  const list = await publies();
  const c = list.find((x) => x.id === id);
  if (!c) return null;
  const { chapitres } = droitModule(c);
  const i = chapitres.findIndex((x) => x.slug === slug);
  if (i === -1) return null;
  return { c, list, chapitres, ch: chapitres[i], prev: chapitres[i - 1] || null, next: chapitres[i + 1] || null };
}

export async function generateStaticParams() {
  try {
    return (await publies()).flatMap((c) => droitModule(c).chapitres.map((ch) => ({ id: c.id, chapitre: ch.slug })));
  } catch {
    return [];
  }
}

// Même règle que les chapitres FSJES : la forme longue tant qu'elle tient en
// 65 caractères, le nom du module dès qu'un autre module a un chapitre du
// même titre (deux pages ne partagent pas un titre).
function titreSeo(c, ch, list) {
  const sem = c.semestre ? ` ${c.semestre}` : "";
  const partage = list.some((x) => x.id !== c.id && droitModule(x).chapitres.some((k) => k.titre === ch.titre));
  if (c.langue === "ar") {
    return fitTitle([`${ch.titre}: درس وتمارين مصححة — ${c.module}${sem}`, `${ch.titre} — ${c.module}${sem}`, `${ch.titre} — ${c.module}`, ch.titre]);
  }
  return fitTitle([
    `${ch.titre} : cours et exercices corrigés — ${c.module}${sem}`,
    `${ch.titre} — ${c.module}${sem}`,
    !partage && `${ch.titre} : cours de Droit${sem}`,
    partage ? `${ch.titre} — ${c.module}` : ch.titre,
  ]);
}

function descriptionSeo(c, ch) {
  if (ch.description) return clampDescription(ch.description);
  if (c.langue === "ar") {
    return clampDescription(`${c.module}${c.semestre ? ` (${c.semestre})` : ""}، الفصل ${ch.numero}: ${ch.titre}. شرح الدرس مع تمارين مصححة.`);
  }
  return clampDescription(
    `${c.module} (licence de Droit${c.semestre ? `, ${c.semestre}` : ""}), chapitre ${ch.numero} : ${ch.titre}. Cours expliqué et exercices corrigés.`
  );
}

const ENTITES = { "&amp;": "&", "&#39;": "'", "&quot;": '"', "&lt;": "<", "&gt;": ">" };

// Ancres sur les <h2> du cours : sommaire du chapitre (même code que /cours).
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
  const { id, chapitre } = await props.params;
  const found = await findChapitre(id, chapitre);
  if (!found) return {};
  const { c, ch, list } = found;
  const title = titreSeo(c, ch, list);
  const description = descriptionSeo(c, ch);
  const url = `${SITE_URL}${droitChapitreHref(c, ch)}`;
  const image = { url: `${droitModuleHref(c)}/opengraph-image`, width: 1200, height: 630, alt: `${c.module} — cours de Droit SaadConcours` };
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

export default async function DroitChapitrePage(props) {
  const { id, chapitre } = await props.params;
  const found = await findChapitre(id, chapitre);
  if (!found) notFound();
  const { c, chapitres, ch, prev, next } = found;
  const langue = droitLangueInfo(c.langue);
  const ar = langue.code === "ar";
  const rtl = ar ? "rtl" : undefined;
  const moduleHref = droitModuleHref(c);
  const url = `${SITE_URL}${droitChapitreHref(c, ch)}`;
  const coursRendu = ch.cours ? avecAncres(md(ch.cours)) : null;
  const onglets = ONGLETS.filter((o) => aDuContenu(ch[o.code]));
  const settings = await getSettings().catch(() => null);
  const { annexe } = droitModule(c);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: ch.titre,
    headline: ch.titre,
    description: descriptionSeo(c, ch),
    url,
    inLanguage: langue.lang,
    isAccessibleForFree: true,
    learningResourceType: onglets.map((o) => ({ cours: "Cours", exercices: "Exercices corrigés", resume: "Résumé", qcm: "QCM" })[o.code]),
    educationalLevel: `Licence de Droit${c.semestre ? ` — ${c.semestre}` : ""}`,
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
            { name: "Cours de Droit", path: "/droit" },
            { name: c.module, path: moduleHref },
            { name: ch.titre, path: droitChapitreHref(c, ch) },
          ]),
        ]}
      />
      <BacChapitreClient />
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "droit" }) }} />

      <div className="bac-space">
        <div className="bac-wrap">
          <nav className="cd-breadcrumb">
            <a href="/">Accueil</a> <span>/</span> <a href="/droit">Cours de Droit</a> <span>/</span> <a href={moduleHref}>{c.module}</a> <span>/</span>{" "}
            <span>Chapitre {ch.numero}</span>
          </nav>

          <div className="bac-mat-layout">
            <aside className="bac-side">
              <div className="bac-side-card">
                <a href={moduleHref} className="bac-side-back">
                  <Icon e={droitModuleIcon(c, "⚖️")} size={18} /> {c.module}
                </a>
                <ol className="bac-side-chaps">
                  {chapitres.map((x) => (
                    <li key={x.slug}>
                      <a href={droitChapitreHref(c, x)} className={x.slug === ch.slug ? "active" : ""} aria-current={x.slug === ch.slug ? "page" : undefined}>
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
                  Chapitre {ch.numero}
                  {` · Droit${c.semestre ? ` ${c.semestre}` : ""} · ${droitRangLabel(c)}`}
                  {ch.partie ? ` · Partie ${ch.partie.numero}` : ""}
                </div>
                <h1 dir={rtl} lang={langue.lang}>
                  {ch.titre}
                </h1>
                <div className="bac-chap-unite">
                  {c.module}
                  {ch.partie ? ` — ${ch.partie.titre}` : ""}
                </div>
              </div>

              <div className="bac-tabs">
                {onglets.map((o, i) => (
                  <input key={o.code} type="radio" name="bac-tab" id={`tab-${o.code}`} className="bac-tab-input" defaultChecked={i === 0} />
                ))}
                {onglets.length > 1 && (
                  <div className="bac-tab-labels">
                    {onglets.map((o) => (
                      <label key={o.code} htmlFor={`tab-${o.code}`} className={`bac-tab-label bac-tab-label-${o.code}`}>
                        <Icon e={o.icon} size={18} /> {o.label}
                      </label>
                    ))}
                  </div>
                )}
                {onglets.map((o) => {
                  const valeur = ch[o.code];
                  let corps;
                  if (o.code === "qcm") {
                    corps = <BacQcm questions={valeur} lang={langue.lang} />;
                  } else if (o.code === "cours" && coursRendu) {
                    corps = (
                      <>
                        {coursRendu.sommaire.length >= 3 && (
                          <nav className="fs-sommaire" aria-label="Sommaire du chapitre" dir={rtl}>
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
                        <div className="cours-content bac-md" dir={rtl} lang={langue.lang} dangerouslySetInnerHTML={{ __html: coursRendu.html }} />
                      </>
                    );
                  } else {
                    corps = <div className="cours-content bac-md" dir={rtl} lang={langue.lang} dangerouslySetInnerHTML={{ __html: md(valeur) }} />;
                  }
                  return (
                    <section key={o.code} className={`bac-tab-panel bac-tab-panel-${o.code}`}>
                      {corps}
                    </section>
                  );
                })}
              </div>

              <AdSlot settings={settings} placement="cours_chapitre" />

              <nav className="bac-pager">
                {prev ? (
                  <a href={droitChapitreHref(c, prev)} className="bac-pager-btn">
                    <span>← Chapitre précédent</span>
                    <strong>{prev.titre}</strong>
                  </a>
                ) : (
                  <a href={moduleHref} className="bac-pager-btn">
                    <span>← Retour au module</span>
                    <strong>{c.module}</strong>
                  </a>
                )}
                {next ? (
                  <a href={droitChapitreHref(c, next)} className="bac-pager-btn next">
                    <span>Chapitre suivant →</span>
                    <strong>{next.titre}</strong>
                  </a>
                ) : (
                  <a href={annexe ? `${moduleHref}#formulaire` : moduleHref} className="bac-pager-btn next">
                    <span>Fin du module →</span>
                    <strong>{annexe ? "Synthèse et formulaire final" : c.module}</strong>
                  </a>
                )}
              </nav>
            </main>
          </div>
        </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: footerHtml() }} />
    </>
  );
}
