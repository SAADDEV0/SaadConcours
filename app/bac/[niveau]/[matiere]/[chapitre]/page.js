import { notFound } from "next/navigation";
import { marked } from "marked";
import { chromeHtml, footerHtml } from "../../../../_shared/chrome";
import { renderMarkdownWithMath } from "../../../../_shared/mathMarkdown";
import MathScripts from "../../../../_shared/MathScripts";
import { fitTitle, clampDescription } from "../../../../_shared/seoText";
import BacQcm from "../../../BacQcm";
import BacChapitreClient from "../../../BacChapitreClient";
import { BAC_MATIERES_PUBLIEES, bacNiveauInfo, findBacMatiere, findBacChapitre, bacMatiereHref, bacChapitreHref, bacTextDir } from "../../../../../lib/bacProgramme";
import { getBacChapitreEffectif, getBacMatiereEffectif } from "../../../../../lib/bacContenuEffectif";

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
  const description = clampDescription(`${m.nom} ${niv.label} : ${t}. Cours, exercices corrigés, résumé et QCM.`);
  return {
    title,
    description,
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

  return (
    <>
      <MathScripts />
      <BacChapitreClient editId={`${niveau}/${matiere}/${chapitre}`} />
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "bac", showSearch: false }) }} />

      <div className="bac-space" style={{ "--mat-h": m.hue }}>
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
                  {m.icon} {m.court}
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
                <div className="bac-tab-labels" role="tablist">
                  {onglets.map((o) => (
                    <label key={o.code} htmlFor={`tab-${o.code}`} className={`bac-tab-label bac-tab-label-${o.code}`}>
                      <span aria-hidden="true">{o.icon}</span> {o.label}
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
