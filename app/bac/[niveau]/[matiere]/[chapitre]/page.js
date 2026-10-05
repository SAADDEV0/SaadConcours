import { notFound } from "next/navigation";
import { marked } from "marked";
import { chromeHtml, footerHtml } from "../../../../_shared/chrome";
import { renderMarkdownWithMath } from "../../../../_shared/mathMarkdown";
import MathScripts from "../../../../_shared/MathScripts";
import { fitTitle, clampDescription } from "../../../../_shared/seoText";
import { breadcrumbJsonLd } from "../../../../_shared/listingSchema";
import JsonLd from "../../../../_shared/JsonLd";
import BacQcm from "../../../BacQcm";
import BacChapitreClient from "../../../BacChapitreClient";
import { BAC_MATIERES_PUBLIEES, bacNiveauInfo, findBacMatiere, findBacChapitre, bacMatiereHref, bacChapitreHref, bacTextDir } from "../../../../../lib/bacProgramme";
import { getBacChapitreEffectif, getBacMatiereEffectif } from "../../../../../lib/bacContenuEffectif";
import { Icon } from "../../../../_shared/icons";

const SITE_URL = "https://www.saadconcours.space";

export const dynamic = "force-static";
export const revalidate = false;
export const dynamicParams = false;

const ONGLETS = [
  { code: "cours", label: "Cours", icon: "📖" },
  { code: "exercices", label: "Exercices", icon: "✏️" },
  { code: "resume", label: "Résumé", icon: "⚡" },
  { code: "qcm", label: "QCM", icon: "✅" },
];

const rempli = (v) => Boolean(v) && (!Array.isArray(v) || v.length > 0);

function descriptionDe(m, niv, titre) {
  return clampDescription(`${m.nom} ${niv.label} : ${titre}. Cours, exercices corrigés, résumé et QCM.`);
}

// Titres de sections du cours (## et ###), pour `teaches` : ce que le chapitre
// enseigne vraiment, comme le sommaire des chapitres FSJES.
function sommaireDe(cours) {
  if (typeof cours !== "string") return [];
  return [...cours.matchAll(/^#{2,3}\s+(.+)$/gm)].map((x) => x[1].replace(/[*_`]/g, "").trim()).filter(Boolean);
}

// Seuls les chapitres rédigés ont une page. Un chapitre vide rendait quatre
// onglets « en préparation » : une page vide de plus aux yeux de la relecture
// AdSense, qui suit les liens qu'ils soient indexés ou non (le noindex ne
// suffisait pas).
export async function generateStaticParams() {
  const params = [];
  for (const m of BAC_MATIERES_PUBLIEES) {
    const contenu = await getBacMatiereEffectif(m.niveau, m.slug);
    for (const c of m.chapitres) if (contenu[c.slug]) params.push({ niveau: m.niveau, matiere: m.slug, chapitre: c.slug });
  }
  return params;
}

export async function generateMetadata(props) {
  const { niveau, matiere, chapitre } = await props.params;
  const m = findBacMatiere(niveau, matiere);
  const found = m && findBacChapitre(m, chapitre);
  if (!found) return {};
  const niv = bacNiveauInfo(niveau);
  const t = found.chapitre.titre;
  const title = fitTitle([`${t} — ${m.court} ${niv.label}`, `${t} — ${niv.label}`, t]);
  return {
    title,
    description: descriptionDe(m, niv, t),
    alternates: { canonical: `/bac/${niveau}/${matiere}/${chapitre}` },
  };
}

function md(source) {
  return renderMarkdownWithMath(marked, source);
}

export default async function BacChapitrePage(props) {
  const { niveau, matiere, chapitre } = await props.params;
  const m = findBacMatiere(niveau, matiere);
  const found = m && findBacChapitre(m, chapitre);
  const niv = bacNiveauInfo(niveau);
  const contenu = found && niv?.available ? await getBacChapitreEffectif(niveau, matiere, chapitre) : null;
  if (!contenu) notFound();
  const c = found.chapitre;
  // Sommaire et navigation limités aux chapitres rédigés : les autres n'ont
  // pas de page.
  const matiereContenu = await getBacMatiereEffectif(niveau, matiere);
  const chapitresRediges = m.chapitres.filter((x) => matiereContenu[x.slug]);
  const i = chapitresRediges.findIndex((x) => x.slug === c.slug);
  const prev = chapitresRediges[i - 1] || null;
  const next = chapitresRediges[i + 1] || null;
  const onglets = ONGLETS.filter((o) => rempli(contenu[o.code]));
  const sommaire = sommaireDe(contenu.cours);

  // Même balisage que les chapitres FSJES (app/cours/[id]/[chapitre]/page.js) :
  // les pages Bac n'avaient que le balisage commun à tout le site.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: c.titre,
    headline: c.titre,
    description: descriptionDe(m, niv, c.titre),
    url: `${SITE_URL}${bacChapitreHref(m, c)}`,
    // L'anglais est rédigé en anglais mais n'a pas de `lang` (réservé à l'arabe, qui change le sens d'écriture).
    inLanguage: m.lang || (m.slug === "anglais" ? "en" : "fr"),
    isAccessibleForFree: true,
    learningResourceType: onglets.map((o) => o.label),
    educationalLevel: `${niv.label} Sciences Économiques et Gestion`,
    teaches: sommaire.length ? sommaire : c.titre,
    audience: { "@type": "EducationalAudience", educationalRole: "student" },
    position: c.numero,
    isPartOf: { "@type": "Course", name: `${m.nom} — ${niv.label}`, url: `${SITE_URL}${bacMatiereHref(m)}` },
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
            { name: `Cours Bac · ${niv.label}`, path: `/bac/${niveau}` },
            { name: m.court, path: bacMatiereHref(m) },
            { name: c.titre, path: bacChapitreHref(m, c) },
          ]),
        ]}
      />
      <BacChapitreClient editId={`${niveau}/${matiere}/${chapitre}`} />
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "bac" }) }} />

      <div className="bac-space">
        <div className="bac-wrap">
          <nav className="cd-breadcrumb">
            <a href="/">Accueil</a> <span>/</span> <a href={`/bac/${niveau}`}>Cours Bac · {niv.label}</a> <span>/</span>{" "}
            <a href={bacMatiereHref(m)} {...bacTextDir(m)}>
              {m.court}
            </a> <span>/</span> <span>Chapitre {c.numero}</span>
          </nav>

          <div className="bac-mat-layout">
            <aside className="bac-side">
              <div className="bac-side-card">
                <a href={bacMatiereHref(m)} className="bac-side-back">
                  <Icon e={m.icon} size={18} /> {m.court}
                </a>
                <ol className="bac-side-chaps" {...bacTextDir(m)}>
                  {chapitresRediges.map((x) => (
                    <li key={x.slug}>
                      <a href={bacChapitreHref(m, x)} className={x.slug === c.slug ? "active" : ""} aria-current={x.slug === c.slug ? "page" : undefined}>
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
                  Chapitre {c.numero} · Semestre {c.semestre.slice(1)}
                  {m.lang !== "ar" && ` · Unité ${c.uniteNumero}`}
                </div>
                <h1 {...bacTextDir(m)}>{c.titre}</h1>
                <div className="bac-chap-unite" {...bacTextDir(m)}>
                  {c.unite}
                </div>
              </div>

              <div className="bac-tabs">
                {onglets.map((o, k) => (
                  <input key={o.code} type="radio" name="bac-tab" id={`tab-${o.code}`} className="bac-tab-input" defaultChecked={k === 0} />
                ))}
                <div className="bac-tab-labels">
                  {onglets.map((o) => (
                    <label key={o.code} htmlFor={`tab-${o.code}`} className={`bac-tab-label bac-tab-label-${o.code}`}>
                      <Icon e={o.icon} size={18} /> {o.label}
                    </label>
                  ))}
                </div>
                {onglets.map((o) => {
                  const valeur = contenu[o.code];
                  let corps;
                  if (o.code === "qcm") {
                    corps = <BacQcm questions={valeur} lang={m.lang || "fr"} />;
                  } else {
                    corps = <div className="cours-content bac-md" {...bacTextDir(m)} dangerouslySetInnerHTML={{ __html: md(valeur) }} />;
                  }
                  return (
                    <section key={o.code} className={`bac-tab-panel bac-tab-panel-${o.code}`}>
                      {corps}
                    </section>
                  );
                })}
              </div>

              <nav className="bac-pager">
                {prev ? (
                  <a href={bacChapitreHref(m, prev)} className="bac-pager-btn">
                    <span>← Chapitre précédent</span>
                    <strong {...bacTextDir(m)}>{prev.titre}</strong>
                  </a>
                ) : (
                  <span />
                )}
                {next ? (
                  <a href={bacChapitreHref(m, next)} className="bac-pager-btn next">
                    <span>Chapitre suivant →</span>
                    <strong {...bacTextDir(m)}>{next.titre}</strong>
                  </a>
                ) : (
                  <span />
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
