import { notFound } from "next/navigation";
import { marked } from "marked";
import { getAllCours } from "@/lib/store";
import { chromeHtml, footerHtml } from "../../../_shared/chrome";
import { renderMarkdownWithMath } from "../../../_shared/mathMarkdown";
import { breadcrumbJsonLd } from "../../../_shared/listingSchema";
import JsonLd from "../../../_shared/JsonLd";
import MathScripts from "../../../_shared/MathScripts";
import BacQcm from "../../../bac/BacQcm";
import BacChapitreClient from "../../../bac/BacChapitreClient";
import { coursCategoryInfo, licenceSemestreLabel } from "../../../../lib/coursTaxonomy";
import { fsjesModule, fsjesModuleIcon, fsjesChapitreHref } from "../../../../lib/fsjesChapitres";

const SITE_URL = "https://www.saadconcours.space";

export const dynamic = "force-static";
export const revalidate = false;

// Mêmes onglets que l'espace Bac (app/bac/[niveau]/[matiere]/[chapitre]).
const ONGLETS = [
  { code: "cours", label: "Cours", icon: "📖", vide: "Le cours complet de ce chapitre : définitions, explications et exemples." },
  { code: "exercices", label: "Exercices", icon: "✏️", vide: "Des exercices d'application avec leurs corrigés détaillés." },
  { code: "resume", label: "Résumé", icon: "⚡", vide: "L'essentiel à retenir en une page, pour réviser vite avant un partiel." },
  { code: "qcm", label: "QCM", icon: "✅", vide: "Un QCM pour vérifier que le chapitre est bien acquis." },
];

async function findChapitre(id, slug) {
  const list = await getAllCours();
  const c = list.find((x) => x.id === id && x.available);
  if (!c) return null;
  const { chapitres } = fsjesModule(c);
  const i = chapitres.findIndex((x) => x.slug === slug);
  if (i === -1) return null;
  return { c, chapitres, ch: chapitres[i], prev: chapitres[i - 1] || null, next: chapitres[i + 1] || null };
}

export async function generateStaticParams() {
  try {
    const list = await getAllCours();
    return list.filter((c) => c.available).flatMap((c) => fsjesModule(c).chapitres.map((ch) => ({ id: c.id, chapitre: ch.slug })));
  } catch {
    return [];
  }
}

export async function generateMetadata(props) {
  const { id, chapitre } = await props.params;
  const found = await findChapitre(id, chapitre);
  if (!found) return {};
  const { c, ch } = found;
  const title = `${ch.titre} — ${c.module}${c.semestre ? ` ${c.semestre}` : ""}`;
  const description = `${c.module} (Licence FSJES${c.semestre ? `, ${licenceSemestreLabel(c.semestre)}` : ""}), chapitre ${ch.numero} : ${ch.titre}. Cours, exercices corrigés, résumé et QCM.`;
  const url = `${SITE_URL}${fsjesChapitreHref(c, ch)}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: "article", title, description, url },
  };
}

function md(source) {
  return renderMarkdownWithMath(marked, source);
}

export default async function CoursChapitrePage(props) {
  const { id, chapitre } = await props.params;
  const found = await findChapitre(id, chapitre);
  if (!found) notFound();
  const { c, chapitres, ch, prev, next } = found;
  const cat = coursCategoryInfo(c.category);
  const url = `${SITE_URL}${fsjesChapitreHref(c, ch)}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: ch.titre,
    description: `${c.module} — chapitre ${ch.numero} : ${ch.titre}`,
    url,
    educationalLevel: "Licence",
    isPartOf: { "@type": "Course", name: c.module, url: `${SITE_URL}/cours/${c.id}` },
    provider: { "@type": "Organization", name: "SaadConcours", url: SITE_URL },
  };

  return (
    <>
      <MathScripts />
      <JsonLd
        data={[
          jsonLd,
          breadcrumbJsonLd([
            { name: "Cours", path: "/cours" },
            { name: c.module, path: `/cours/${c.id}` },
            { name: ch.titre, path: fsjesChapitreHref(c, ch) },
          ]),
        ]}
      />
      <BacChapitreClient />
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "cours", showSearch: false }) }} />

      <div className="bac-space site-space" style={{ "--mat-h": cat?.hue ?? 220 }}>
        <div className="bac-wrap">
          <nav className="cd-breadcrumb">
            <a href="/">Accueil</a> <span>/</span> <a href="/cours">Cours FSJES</a> <span>/</span> <a href={`/cours/${c.id}`}>{c.module}</a> <span>/</span>{" "}
            <span>Chapitre {ch.numero}</span>
          </nav>

          <div className="bac-mat-layout">
            <aside className="bac-side">
              <div className="bac-side-card">
                <a href={`/cours/${c.id}`} className="bac-side-back">
                  {fsjesModuleIcon(c, cat?.emoji)} {c.module}
                </a>
                <ol className="bac-side-chaps">
                  {chapitres.map((x) => (
                    <li key={x.slug}>
                      <a href={fsjesChapitreHref(c, x)} className={x.slug === ch.slug ? "active" : ""} aria-current={x.slug === ch.slug ? "page" : undefined}>
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
                  {c.semestre ? ` · ${licenceSemestreLabel(c.semestre)}` : ""}
                  {ch.partie ? ` · Partie ${ch.partie.numero}` : ""}
                </div>
                <h1>{ch.titre}</h1>
                <div className="bac-chap-unite">
                  {c.module}
                  {ch.partie ? ` — ${ch.partie.titre}` : ""}
                </div>
              </div>

              <div className="bac-tabs">
                {ONGLETS.map((o, i) => (
                  <input key={o.code} type="radio" name="bac-tab" id={`tab-${o.code}`} className="bac-tab-input" defaultChecked={i === 0} />
                ))}
                <div className="bac-tab-labels" role="tablist">
                  {ONGLETS.map((o) => (
                    <label key={o.code} htmlFor={`tab-${o.code}`} className={`bac-tab-label bac-tab-label-${o.code}`}>
                      <span aria-hidden="true">{o.icon}</span> {o.label}
                    </label>
                  ))}
                </div>
                {ONGLETS.map((o) => {
                  const valeur = ch[o.code];
                  let corps;
                  if (!valeur || (Array.isArray(valeur) && !valeur.length)) {
                    corps = (
                      <div className="bac-empty">
                        <div className="bac-empty-icon">{o.icon}</div>
                        <div className="bac-empty-title">{o.label} en préparation</div>
                        <p>{o.vide}</p>
                      </div>
                    );
                  } else if (o.code === "qcm") {
                    corps = <BacQcm questions={valeur} lang="fr" />;
                  } else {
                    corps = <div className="cours-content bac-md" dangerouslySetInnerHTML={{ __html: md(valeur) }} />;
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
                  <a href={fsjesChapitreHref(c, prev)} className="bac-pager-btn">
                    <span>← Chapitre précédent</span>
                    <strong>{prev.titre}</strong>
                  </a>
                ) : (
                  <a href={`/cours/${c.id}`} className="bac-pager-btn">
                    <span>← Retour au module</span>
                    <strong>{c.module}</strong>
                  </a>
                )}
                {next ? (
                  <a href={fsjesChapitreHref(c, next)} className="bac-pager-btn next">
                    <span>Chapitre suivant →</span>
                    <strong>{next.titre}</strong>
                  </a>
                ) : (
                  <a href={`/cours/${c.id}#formulaire`} className="bac-pager-btn next">
                    <span>Fin du module →</span>
                    <strong>Synthèse et formulaire final</strong>
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
