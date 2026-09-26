import { notFound } from "next/navigation";
import { marked } from "marked";
import { getAllCours, getSettings } from "@/lib/store";
import { chromeHtml, footerHtml } from "../../../_shared/chrome";
import { renderMarkdownWithMath } from "../../../_shared/mathMarkdown";
import { breadcrumbJsonLd } from "../../../_shared/listingSchema";
import JsonLd from "../../../_shared/JsonLd";
import MathScripts from "../../../_shared/MathScripts";
import BacQcm from "../../../bac/BacQcm";
import BacChapitreClient from "../../../bac/BacChapitreClient";
import { coursCategoryInfo, licenceSemestreLabel } from "../../../../lib/coursTaxonomy";
import { fsjesModule, fsjesModuleIcon, fsjesChapitreHref, slugifyTitre } from "../../../../lib/fsjesChapitres";
import { concoursDuModule, concoursDuChapitre } from "../../../../lib/concoursParModule";
import ConcoursLies from "../../../_shared/ConcoursLies";
import AdSlot from "../../../_shared/AdSlot";
import { fitTitle, clampDescription } from "../../../_shared/seoText";

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
  return { c, list, chapitres, i, ch: chapitres[i], prev: chapitres[i - 1] || null, next: chapitres[i + 1] || null };
}

export async function generateStaticParams() {
  try {
    const list = await getAllCours();
    return list.filter((c) => c.available).flatMap((c) => fsjesModule(c).chapitres.map((ch) => ({ id: c.id, chapitre: ch.slug })));
  } catch {
    return [];
  }
}

// Titre de résultat Google : la forme longue (« cours et exercices corrigés »,
// ce que tapent les étudiants) tant qu'elle tient en 65 caractères, puis des
// formes de plus en plus courtes (voir seoText.js). Un chapitre dont le titre
// existe aussi dans un autre module (« Les emprunts obligataires » en
// Comptabilité des sociétés et en Mathématiques financières) garde toujours
// le nom du module : deux pages ne doivent pas partager un titre.
function titreSeo(c, ch, list = []) {
  const sem = c.semestre ? ` ${c.semestre}` : "";
  const partage = list.some((x) => x.available && x.id !== c.id && fsjesModule(x).chapitres.some((k) => k.titre === ch.titre));
  return fitTitle([
    `${ch.titre} : cours et exercices corrigés — ${c.module}${sem}`,
    !partage && `${ch.titre} : cours et exercices corrigés`,
    `${ch.titre} — ${c.module}${sem}`,
    !partage && `${ch.titre} : cours et exercices`,
    partage ? `${ch.titre} — ${c.module}` : ch.titre,
  ]);
}

function descriptionSeo(c, ch) {
  if (ch.description) return clampDescription(ch.description);
  return clampDescription(
    `${c.module} (Licence FSJES${c.semestre ? `, ${licenceSemestreLabel(c.semestre)}` : ""}), chapitre ${ch.numero} : ${ch.titre}. Cours, exercices corrigés, résumé et QCM.`
  );
}

const ENTITES = { "&amp;": "&", "&#39;": "'", "&quot;": '"', "&lt;": "<", "&gt;": ">" };

// Sommaire du chapitre : marked ne pose pas d'id sur les titres, on les ajoute
// aux <h2> du cours pour des liens d'ancre (et des « Aller à » dans Google).
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
  const url = `${SITE_URL}${fsjesChapitreHref(c, ch)}`;
  // L'image de partage du module (app/cours/[id]/opengraph-image.js) : un
  // openGraph posé ici remplace celui du parent en entier, images comprises,
  // si bien que les 177 chapitres n'en avaient aucune.
  const image = { url: `/cours/${c.id}/opengraph-image`, width: 1200, height: 630, alt: `${c.module} — cours SaadConcours` };
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

export default async function CoursChapitrePage(props) {
  const { id, chapitre } = await props.params;
  const found = await findChapitre(id, chapitre);
  if (!found) notFound();
  const { c, chapitres, i, ch, prev, next } = found;
  const cat = coursCategoryInfo(c.category);
  const nbSujets = concoursDuModule(c.id).length;
  const sujets = concoursDuChapitre(c.id, i);
  const url = `${SITE_URL}${fsjesChapitreHref(c, ch)}`;
  const coursRendu = ch.cours ? avecAncres(md(ch.cours)) : null;
  const settings = await getSettings().catch(() => null);
  const adsActives = Boolean(settings?.adsEnabled && settings?.adsPublisherId);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: ch.titre,
    headline: ch.titre,
    description: descriptionSeo(c, ch),
    url,
    inLanguage: "fr",
    isAccessibleForFree: true,
    learningResourceType: ["Cours", "Exercices corrigés", "Résumé", "QCM"],
    educationalLevel: `Licence FSJES${c.semestre ? ` — ${licenceSemestreLabel(c.semestre)}` : ""}`,
    teaches: coursRendu?.sommaire.length ? coursRendu.sommaire.map((s) => s.texte) : ch.titre,
    audience: { "@type": "EducationalAudience", educationalRole: "student" },
    position: ch.numero,
    isPartOf: { "@type": "Course", name: c.module, url: `${SITE_URL}/cours/${c.id}` },
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
                  } else if (o.code === "cours" && coursRendu) {
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
                    <section key={o.code} className={`bac-tab-panel bac-tab-panel-${o.code}`}>
                      {corps}
                    </section>
                  );
                })}
              </div>

              <AdSlot
                enabled={adsActives && settings?.adsCoursChapitreEnabled}
                publisherId={settings?.adsPublisherId}
                slotId={settings?.adsCoursChapitreSlot}
                label="Publicité — chapitre de cours"
              />

              <ConcoursLies
                titre="S'entraîner sur des sujets réels"
                intro={`Des sujets réels de concours (master, licence d'excellence) avec une épreuve de ${c.module} : énoncé complet et corrigé indicatif.`}
                sujets={sujets}
                lienTous={
                  nbSujets > sujets.length
                    ? { href: `/cours/${c.id}#concours`, label: `Voir les ${nbSujets} sujets de concours en ${c.module}` }
                    : null
                }
              />

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
