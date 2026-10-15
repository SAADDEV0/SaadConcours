import { notFound } from "next/navigation";
import { marked } from "marked";
import { getAllDroit, getSettings } from "@/lib/store";
import { chromeHtml, footerHtml } from "../../_shared/chrome";
import { renderMarkdownWithMath } from "../../_shared/mathMarkdown";
import { breadcrumbJsonLd } from "../../_shared/listingSchema";
import JsonLd from "../../_shared/JsonLd";
import MathScripts from "../../_shared/MathScripts";
import CoursDetailClient from "../../cours/[id]/CoursDetailClient";
import AdSlot from "../../_shared/AdSlot";
import { fitTitle, clampDescription } from "../../_shared/seoText";
import { droitLangueInfo, droitRangLabel } from "../../../lib/droitTaxonomy";
import { droitModule, droitModuleHref, droitChapitreHref, droitOuvert, isDroitPublie } from "../../../lib/droit";
import { Icon } from "../../_shared/icons";

const SITE_URL = "https://www.saadconcours.space";
const RESSOURCES = [
  { code: "cours", label: "Cours" },
  { code: "exercices", label: "Exercices" },
  { code: "resume", label: "Résumé" },
  { code: "qcm", label: "QCM" },
];

// Espace construit en silence : avant le lancement (DROIT_LANCE,
// lib/contenusPublies.mjs), aucune page de module n'est générée.
async function publies() {
  return droitOuvert() ? (await getAllDroit()).filter(isDroitPublie) : [];
}

async function findModule(id) {
  const list = await publies();
  return { c: list.find((x) => x.id === id) || null, list };
}

// Même langue seulement ; même filière d'abord, puis même semestre :
// maillage entre modules de Droit.
function getRelated(list, current, limit = 4) {
  const score = (x) => ((x.filiere || "") === (current.filiere || "") ? 2 : 0) + (x.semestre === current.semestre ? 1 : 0);
  return list
    .filter((x) => x.id !== current.id && (x.langue || "fr") === (current.langue || "fr") && score(x) > 0)
    .sort((a, b) => score(b) - score(a))
    .slice(0, limit);
}

export async function generateMetadata(props) {
  const params = await props.params;
  const { c } = await findModule(params.id);
  if (!c) return {};
  const sem = c.semestre ? `${c.semestre} ` : "";
  const title = fitTitle([`${c.module} — Cours de Droit ${sem}par chapitre`, `${c.module} — Cours de Droit ${sem}`.trim(), `${c.module} — Droit`]);
  const description = clampDescription(
    `${c.module} (licence de Droit${c.semestre ? `, ${c.semestre}` : ""}, ${droitRangLabel(c)}) : cours et exercices corrigés, chapitre par chapitre. ${c.description || ""}`
  );
  const url = `${SITE_URL}${droitModuleHref(c)}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: "article", title, description, url },
    twitter: { card: "summary_large_image", title, description },
  };
}

// Prérendu au build — voir app/cours/[id]/page.js.
export const dynamic = "force-static";
export const revalidate = false;

// Une adresse hors de la liste est une 404, jamais un rendu par le Worker.
export const dynamicParams = false;

export async function generateStaticParams() {
  try {
    return (await publies()).map((c) => ({ id: c.id }));
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

export default async function DroitModulePage(props) {
  const params = await props.params;
  const { c, list } = await findModule(params.id);
  if (!c) notFound();

  const langue = droitLangueInfo(c.langue);
  const ar = langue.code === "ar";
  const { chapitres, annexe } = droitModule(c);
  const href = droitModuleHref(c);
  const related = getRelated(list, c);
  const nbExercices = chapitres.reduce((n, x) => n + x.nbExercices, 0);
  const nbQcm = chapitres.reduce((n, x) => n + x.qcm.length, 0);
  const annexeMd = annexe.startsWith("# ") ? annexe.replace(/^## /gm, "### ").replace(/^# /gm, "## ") : annexe;
  const annexeHtml = annexe ? renderMarkdownWithMath(marked, annexeMd) : "";
  const settings = await getSettings().catch(() => null);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: c.module,
    description: c.description || `Cours de ${c.module} — licence de Droit`,
    url: `${SITE_URL}${href}`,
    educationalLevel: `Licence de Droit${c.semestre ? ` — ${c.semestre}` : ""}`,
    inLanguage: langue.lang,
    provider: { "@type": "Organization", name: "SaadConcours", url: SITE_URL },
    hasPart: chapitres.map((ch) => ({ "@type": "LearningResource", name: ch.titre, url: `${SITE_URL}${droitChapitreHref(c, ch)}` })),
  };

  return (
    <>
      {annexe && <MathScripts />}
      <JsonLd data={[jsonLd, breadcrumbJsonLd([{ name: "Cours de Droit", path: "/droit" }, { name: c.module, path: href }])]} />
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "droit" }) }} />

      <div className="bac-space">
        <div className="bac-wrap">
          <nav className="cd-breadcrumb">
            <a href="/">Accueil</a> <span>/</span> <a href="/droit">Cours de Droit</a> <span>/</span> <span>{c.module}</span>
          </nav>

          <div className="bac-mat-hero">
            <div className="bac-mat-hero-body">
              <div className="bac-eyebrow">
                Licence de Droit{c.semestre ? ` · ${c.semestre}` : ""} · {droitRangLabel(c)}
              </div>
              <h1 dir={ar ? "rtl" : undefined} lang={langue.lang}>
                {c.module}
              </h1>
              <p dir={ar ? "rtl" : undefined} lang={langue.lang}>
                {c.description}
              </p>
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
                <a className="sp-btn primary" href={droitChapitreHref(c, chapitres[0])} data-resume-link={href}>
                  Commencer le chapitre 1 →
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
              </div>
              <div className="bac-side-card">
                <div className="bac-side-title">Ce module</div>
                {c.semestre && (
                  <div className="sp-side-info">
                    Semestre <strong>{c.semestre}</strong>
                  </div>
                )}
                <div className="sp-side-info">
                  {c.filiere ? "Filière" : "Cycle"} <strong>{droitRangLabel(c)}</strong>
                </div>
                <div className="sp-side-info">
                  Langue <strong>{langue.court}</strong>
                </div>
              </div>
            </aside>

            <main className="bac-main">
              <section id="chapitres" className="bac-semestre">
                <h2 className="bac-semestre-title">
                  <span className="bac-semestre-code">{c.semestre || <Icon name="book-open" size={16} />}</span>
                  Chapitres du module
                </h2>
                {groupesParPartie(chapitres).map((g) => (
                  <div key={g.cle} className="bac-unite">
                    <div className="bac-unite-head">
                      {g.partie ? (
                        <>
                          <span className="bac-unite-num">Partie {g.partie.numero}</span>
                          <h3 dir={ar ? "rtl" : undefined}>{g.partie.titre}</h3>
                        </>
                      ) : (
                        <>
                          <span className="bac-unite-num">{c.module}</span>
                          <h3>Cours et exercices corrigés</h3>
                        </>
                      )}
                    </div>
                    <ol className="bac-chap-list">
                      {g.chapitres.map((ch) => (
                        <li key={ch.slug}>
                          <a className="bac-chap-row" href={droitChapitreHref(c, ch)}>
                            <span className="bac-chap-num">{ch.numero}</span>
                            <span className="bac-chap-title" dir={ar ? "rtl" : undefined} lang={langue.lang}>
                              {ch.titre}
                            </span>
                            {/* Seulement ce que le chapitre contient : pas de pastille éteinte
                               pour un onglet qui n'existe pas encore. */}
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
                ))}
              </section>

              <AdSlot settings={settings} placement="cours_module" />

              {annexe && (
                <section id="formulaire" className="bac-semestre">
                  <h2 className="bac-semestre-title">
                    <span className="bac-semestre-code">
                      <Icon name="ruler" size={16} />
                    </span>
                    Synthèse du module
                  </h2>
                  <div className="sp-annexe">
                    <div className="cours-content bac-md" id="coursAnnexe" dir={ar ? "rtl" : undefined} lang={langue.lang} dangerouslySetInnerHTML={{ __html: annexeHtml }} />
                  </div>
                </section>
              )}

              {related.length > 0 && (
                <section className="bac-semestre">
                  <h2 className="bac-section-title">Autres modules de Droit</h2>
                  <div className="sp-related">
                    {related.map((r) => (
                      <a key={r.id} className="bac-mat-card" href={droitModuleHref(r)}>
                        <span className="bac-mat-body">
                          <span className="bac-mat-name" dir={ar ? "rtl" : undefined}>
                            {r.module}
                          </span>
                          <span className="bac-mat-meta">
                            {r.semestre && <span>{r.semestre}</span>}
                            <span>{droitModule(r).chapitres.length} chapitres</span>
                          </span>
                        </span>
                      </a>
                    ))}
                  </div>
                </section>
              )}
            </main>
          </div>
        </div>
      </div>

      <CoursDetailClient cours={{ id: c.id, module: c.module, title: c.title, description: c.description }} source="/data/droit.json" editHref="/admin/droit" />
      <div dangerouslySetInnerHTML={{ __html: footerHtml() }} />
    </>
  );
}
