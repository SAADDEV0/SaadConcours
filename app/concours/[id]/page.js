import { notFound } from "next/navigation";
import { marked } from "marked";
import { getPublicConcours, getCorrigeFile, getCorrigeIdsLocal, getSettings } from "@/lib/store";
import { chromeHtml, footerHtml, partnerZoneHtml, pub } from "../../_shared/chrome";
import { concoursCardHtml } from "../../_shared/concoursCard";
import { difficulteHtml } from "../../_shared/format";
import { formatQCM, markQcmOptions } from "../../_shared/concoursFormat";
import { renderMarkdownWithMath } from "../../_shared/mathMarkdown";
import { concoursSeo } from "../../_shared/concoursSeo";
import ConcoursDetailClient, { ShareButton, DownloadPdfButton } from "./ConcoursDetailClient";
import AdSlot from "../../_shared/AdSlot";
import MathScripts from "../../_shared/MathScripts";
import { isMaster, niveauInfo, niveauOf, LICENCE_EXCELLENCE, POST_BAC } from "@/lib/concoursNiveaux";

// Onglet du header et de la barre d'espace (lib/espaces.js) selon le niveau.
const ACTIVE_DU_NIVEAU = { [LICENCE_EXCELLENCE]: "concours-le", [POST_BAC]: "concours-pb" };
import { Icon } from "../../_shared/icons";
import { modulesDuConcours } from "@/lib/concoursParModule";

const SITE_URL = "https://www.saadconcours.space";

async function findConcours(id) {
  const list = await getPublicConcours();
  return { c: list.find((x) => x.id === id) || null, list };
}

// Same real master name first (most specific match a student would care
// about), then same établissement, for internal linking + a reason to keep
// browsing instead of bouncing after one PDF - also gives Google more
// crawl paths into pages that have no other inbound links.
function getRelatedConcours(list, current, limit = 4) {
  // Un candidat à une licence d'excellence ne cherche pas un sujet de Master
  // (et inversement) : les suggestions restent dans le même niveau.
  const others = list.filter((x) => x.id !== current.id && niveauOf(x) === niveauOf(current));
  const sameMaster = current.master_reel
    ? others.filter((x) => x.master_reel === current.master_reel)
    : [];
  const sameEtab = others.filter((x) => x.etablissement === current.etablissement);
  // Repli sur la même filière, puis (licence d'excellence, niveau encore peu
  // fourni) sur n'importe quel sujet du niveau, pour ne jamais laisser le
  // bloc vide.
  const sameFiliere = others.filter((x) => x.filiere === current.filiere);
  const fallback = isMaster(current) ? [] : others;
  const seen = new Set();
  const related = [];
  for (const x of [...sameMaster, ...sameEtab, ...sameFiliere, ...fallback]) {
    if (seen.has(x.id)) continue;
    seen.add(x.id);
    related.push(x);
    if (related.length >= limit) break;
  }
  return related;
}

// corrige_md on the concours entry is the reviewed/published version, but a
// corrigé can also exist as a raw file in public/data/corriges/<id>.md
// (bulk import, manual commit) without ever having been copied there —
// fall back to it so the site doesn't silently hide a corrigé that's
// already sitting in the repo.
async function resolveCorrigeMd(c) {
  return c.corrige_md || (await getCorrigeFile(c.id));
}

// Un concours blanc ou une reconstitution rédigés par SaadConcours ne sont pas
// des sujets de faculté : pas de ligne « Sujet officiel » pour eux.
function estSujetOfficiel(c) {
  return !/concours ?blanc|entra[iî]nement|reconstitution|non officiel/i.test(`${c.id} ${c.master_reel || ""}`);
}

// « de la FSJES Ain Chock (Casablanca), session 2024 » : la ville seulement si
// le nom de l'établissement ne la contient pas déjà (comme les pastilles), la
// session seulement si l'année est connue (pas « SD » ni « non précisée »).
function officielDe(c) {
  const etab = String(c.etablissement || "").trim();
  const article = /^[aeiouéèêh]/i.test(etab) ? "l'" : "la ";
  const session = /^\d{4}/.test(String(c.annee)) ? `, session ${c.annee}` : "";
  if (!c.ville || etab.includes(c.ville)) return `du concours de ${article}${etab}${session}.`;
  // « FSJES Ait Melloul (Ibn Zohr) » → « (Ibn Zohr, Agadir) », pas deux parenthèses.
  const lieu = etab.endsWith(")") ? `${etab.slice(0, -1)}, ${c.ville})` : `${etab} (${c.ville})`;
  return `du concours de ${article}${lieu}${session}.`;
}

// Titre et description : voir app/_shared/concoursSeo.js (tenir en 65 / 155
// caractères, jamais deux fiches identiques). Le H1 de la page garde le nom
// complet du master, sans établissement ni année : les pastilles juste en
// dessous les affichent déjà.
async function seoDe(c, list) {
  const corrigeIds = getCorrigeIdsLocal();
  for (const x of list) if ((x.corrige_md || "").trim()) corrigeIds.add(x.id);
  return concoursSeo(list, c, corrigeIds);
}

// breaks: true because an énoncé is a transcribed exam paper, not prose — its
// line breaks are the layout (the header block, a question and its stem, a
// "Travail à faire" list). Markdown's default would fold each run of lines
// into one wrapped paragraph. Safe here specifically because formatQCM has
// already pulled the answer choices out onto bullet lines, and nothing left in
// the corpus is soft-wrapped mid-sentence.
//
// Un énoncé ou un corrigé qui titre ses parties en « # » produisait des <h1>
// en plus du titre de la page (jusqu'à 5 sur une fiche). Il est rangé sous le
// <h2> de sa carte (« Énoncé », « Corrigé ») : ses titres descendent de deux
// niveaux, h1 → h3, h2 → h4… Les documents sans « # » ne changent pas.
function renderEnonce(md) {
  const html = markQcmOptions(renderMarkdownWithMath(marked, formatQCM(md, { tagChoices: true }), { breaks: true }));
  if (!/<h1[\s>]/.test(html)) return html;
  return html.replace(/<(\/?)h([1-6])(?=[\s>])/g, (m, fin, n) => `<${fin}h${Math.min(6, Number(n) + 2)}`);
}

export async function generateMetadata(props) {
  const params = await props.params;
  const { c, list } = await findConcours(params.id);
  if (!c) return {};

  const { title, description } = await seoDe(c, list);
  const url = `${SITE_URL}/concours/${c.id}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: "article", title, description, url },
    twitter: { card: "summary_large_image", title, description },
  };
}

// Prerendered at build time rather than server-rendered per request.
//
// generateStaticParams alone was not enough: lib/github.js reads the data
// with `cache: "no-store"` (concours.json is past Next's 2MB fetch-cache
// entry limit), and a no-store fetch anywhere in the render path opts the
// whole route out of static generation. The listing pages already carry
// these two lines for exactly that reason — see app/concours/page.js — but
// the detail routes never got them, so production served every one of them
// dynamically: `x-vercel-cache: MISS` with `no-store` on each visit, each
// one re-fetching and re-parsing the full 2.5MB list twice (once in
// generateMetadata, once here) before rendering.
//
// `revalidate = false` because freshness does not come from ISR here: every
// admin edit commits to GitHub, which triggers a redeploy that rebuilds all
// of these pages anyway. Hourly revalidation was rebuilding pages that were
// already current.
export const dynamic = "force-static";
export const revalidate = false;

export async function generateStaticParams() {
  try {
    const list = await getPublicConcours();
    return list.map((c) => ({ id: c.id }));
  } catch {
    return [];
  }
}

export default async function ConcoursDetailPage(props) {
  const params = await props.params;
  const { c, list } = await findConcours(params.id);
  if (!c) notFound();

  const settings = await getSettings().catch(() => null);

  const enonceHtml = renderEnonce(c.enonce_md || "*Énoncé non disponible.*");
  const corrigeMd = await resolveCorrigeMd(c);
  const corrigeHtml = corrigeMd ? renderEnonce(corrigeMd) : null;
  const url = `${SITE_URL}/concours/${c.id}`;
  const masterLabel = c.master_reel || c.filiere;
  const related = getRelatedConcours(list, c);
  const modulesLies = modulesDuConcours(c);
  const corrigeIds = getCorrigeIdsLocal();
  const hasImages = Boolean(c.images && c.images.length > 0);
  // La source d'un sujet (c.source) reste dans concours.json pour la console,
  // mais n'est plus publiée depuis le 2026-09-26 : ni section « Source », ni
  // ligne dans le PDF, ni isBasedOn — et elle est retirée des props des
  // composants client, sinon elle ressortirait dans le HTML (données RSC).
  // eslint-disable-next-line no-unused-vars
  const { source, ...publique } = c;
  // corrige_md merged in so the PDF (top button + bottom actions) includes
  // the corrigé even when it only exists as a raw file, not on c itself.
  const fullConcours = corrigeMd ? { ...publique, corrige_md: corrigeMd } : publique;
  const { title, description } = await seoDe(c, list);

  const niveau = niveauInfo(niveauOf(c));
  const shareInfo = { master_reel: c.master_reel, filiere: c.filiere, etablissement: c.etablissement, ville: c.ville, annee: c.annee };

  // Lu par Google et par les moteurs de réponse IA (ChatGPT, Perplexity,
  // Gemini…) : de quoi citer la fiche sans la deviner — matières évaluées,
  // corrigé ou non, date de mise en ligne. Jamais la source du sujet (voir plus haut).
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: title,
    description,
    url,
    inLanguage: "fr",
    isAccessibleForFree: true,
    learningResourceType: corrigeHtml ? ["Sujet d'examen", "Corrigé indicatif"] : ["Sujet d'examen"],
    educationalLevel: niveau.educationalLevel,
    ...(c.modules?.length ? { assesses: c.modules } : {}),
    keywords: [...new Set([masterLabel, c.filiere, c.etablissement, c.ville, String(c.annee)].filter(Boolean))].join(", "),
    ...(c.date_ajout ? { datePublished: c.date_ajout } : {}),
    isPartOf: { "@type": "CollectionPage", name: `Concours ${niveau.label}`, url: `${SITE_URL}${niveau.href}` },
    provider: { "@type": "Organization", name: "SaadConcours", url: SITE_URL },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: niveau.label === "Master" ? "Concours" : `Concours ${niveau.label}`, item: `${SITE_URL}${niveau.href}` },
      { "@type": "ListItem", position: 3, name: `${c.etablissement} ${c.annee}`, item: url },
    ],
  };

  return (
    <>
      <MathScripts />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: ACTIVE_DU_NIVEAU[niveauOf(c)] || "concours", rails: true }) }} />

      <div className="bac-space">
      <div className="bac-wrap">
        <nav className="cd-breadcrumb" aria-label="Fil d'Ariane">
          <a href="/">Accueil</a> <span>/</span> <a href={niveau.href}>{niveau.label === "Master" ? "Concours Master" : `Concours ${niveau.label}`}</a>{" "}
          <span>/</span> <span>{c.etablissement} {c.annee}</span>
        </nav>

        {/* Deux colonnes sur grand écran : la fiche, et à droite le résumé
           du sujet (PDF, partage, sommaire) puis la colonne publicitaire.
           En dessous de 1100 px, la colonne disparaît : ses actions sont
           déjà dans l'en-tête et la barre d'onglets collante. */}
        <div className="sp-layout">
        <div className="sp-layout-main sp-detail">
        <div className="bac-chap-hero sp-detail-hero">
          <div className="bac-eyebrow">{niveau.long}</div>
          <h1>{masterLabel || `${c.etablissement} — ${c.ville} — ${c.annee}`}</h1>
          <div className="sp-detail-meta">
            <span>{c.etablissement}</span>
            {c.ville && !String(c.etablissement || "").includes(c.ville) && <span>{c.ville}</span>}
            <span>{c.annee}</span>
            {difficulteHtml(c.difficulte) && <span dangerouslySetInnerHTML={{ __html: difficulteHtml(c.difficulte) }} />}
            {corrigeMd && <span className="sp-detail-corrige">Corrigé disponible</span>}
          </div>
          {estSujetOfficiel(c) && (
            <p className="sp-detail-modules">
              <strong>Sujet officiel</strong> {officielDe(c)}
            </p>
          )}
          {c.modules?.length > 0 && (
            <p className="sp-detail-modules">
              <strong>Matières :</strong> {c.modules.join(", ")}
            </p>
          )}
          <div className="sp-detail-body sp-hide-wide">
            {hasImages && (
              <a className="sp-scan-link" href="#section-images">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={pub(c.images[0])} alt="" width={46} height={60} loading="lazy" />
                <span>
                  <strong>Sujet original scanné</strong>
                  <span>
                    {c.images.length} page{c.images.length > 1 ? "s" : ""} · voir les scans
                  </span>
                </span>
              </a>
            )}
            <div className="sp-hero-actions cd-head-actions">
              <ShareButton concours={shareInfo} />
            </div>
          </div>
        </div>

        {/* Barre collante : sections du sujet et PDF, toujours à portée de
           doigt pendant la lecture. Le « Corrigé » est à l'encre rouge. */}
        <nav
          className="bac-tab-labels sp-anchor-tabs has-pdf"
          style={{ "--tabs": 1 + (hasImages ? 1 : 0) + (corrigeHtml ? 1 : 0) }}
          aria-label="Sections du sujet"
        >
          <a className="bac-tab-label" href="#section-enonce">
            <Icon name="file-pen" size={18} /> Énoncé
          </a>
          {hasImages && (
            <a className="bac-tab-label" href="#section-images">
              <Icon name="image" size={18} /> Scan
            </a>
          )}
          {corrigeHtml && (
            <a className="bac-tab-label sp-tab-corrige" href="#section-corrige">
              <Icon name="check-circle" size={18} /> Corrigé
            </a>
          )}
          <DownloadPdfButton concours={fullConcours} className="sp-tab-pdf" label="PDF" />
        </nav>

        <div className="cd-card" id="section-enonce">
          <h2>Énoncé</h2>
          <div className="enonce-content" dangerouslySetInnerHTML={{ __html: enonceHtml }} />
        </div>

        {/* Le sujet original juste après sa transcription, et non plus après
           un corrigé de plusieurs milliers de pixels. */}
        {hasImages && (
          <div className="cd-card" id="section-images">
            <h2>Sujet original scanné</h2>
            <div className="cd-images">
              {c.images.map((img) => (
                <img key={img} src={pub(img)} alt={`Extrait scanné — ${c.etablissement} ${c.annee}`} loading="lazy" />
              ))}
            </div>
          </div>
        )}

        <AdSlot settings={settings} placement="concours_mid" />

        {/* Bannière partenaire « Dans le contenu » (vide sans annonceur). */}
        <div dangerouslySetInnerHTML={{ __html: partnerZoneHtml("inline") }} />

        {corrigeHtml && (
          <div className="cd-card" id="section-corrige">
            <h2 className="is-corrige">Corrigé</h2>
            {/* Replié par défaut : on s'entraîne sur le sujet avant de voir la
               solution. Le texte reste dans le HTML (indexé), et le lien
               « Corrigé » des onglets l'ouvre (ConcoursDetailClient). */}
            <details className="sp-reveal" id="corrigeReveal">
              <summary>
                <span className="sp-reveal-title sp-reveal-show">
                  <Icon name="eye" size={19} />
                  Afficher le corrigé
                </span>
                <span className="sp-reveal-title sp-reveal-hide">
                  <Icon name="eye-off" size={19} />
                  Masquer le corrigé
                </span>
                <span className="sp-reveal-sub">Essaie d&apos;abord de traiter le sujet en conditions réelles.</span>
              </summary>
              <div className="corrige-disclaimer">
                <Icon name="alert" size={18} />
                <span>Corrigé proposé par SaadConcours, pas une correction officielle de la faculté — vérifie les calculs avant de t&apos;y fier pour réviser.</span>
              </div>
              <div className="enonce-content" dangerouslySetInnerHTML={{ __html: corrigeHtml }} />
            </details>
          </div>
        )}

        <AdSlot settings={settings} placement="concours_bottom" />

        <ConcoursDetailClient concours={{ id: c.id }} />

        {/* Plus de bloc « Questions fréquentes » : c'étaient les mêmes
           questions génériques (« Ce sujet est-il gratuit ? ») sur chaque
           fiche, là pour alimenter un balisage FAQPage que Google n'affiche
           plus hors sites officiels et de santé depuis 2023. Les matières et
           la difficulté sont affichées dans l'en-tête de la fiche. */}

        {modulesLies.length > 0 && (
          <section className="bac-group" id="section-modules">
            <h2 className="bac-section-title">Réviser les matières de ce sujet</h2>
            <div className="sp-related">
              {modulesLies.map((m) => (
                <a key={m.id} className="bac-mat-card" href={`/cours/${m.id}`}>
                  <span className="bac-mat-body">
                    <span className="bac-mat-name">{m.module}</span>
                    <span className="bac-mat-meta">
                      <span>Cours Licence FSJES</span>
                      {m.semestre && <span>{m.semestre}</span>}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </section>
        )}

        {related.length > 0 && (
          <section className="bac-group" id="section-similaires">
            <h2 className="bac-section-title">Concours similaires</h2>
            <div
              className="sp-rows"
              dangerouslySetInnerHTML={{
                __html: related.map((r) => concoursCardHtml({ ...r, hasCorrige: Boolean(r.corrige_md) || corrigeIds.has(r.id) }, { dl: false })).join(""),
              }}
            />
          </section>
        )}
        </div>

        <aside className="sp-layout-aside" aria-label="Résumé du sujet">
          <div className="sp-aside-card">
            <h2 className="sp-aside-title">Ce sujet</h2>
            <dl className="sp-facts">
              <div>
                <dt>Établissement</dt>
                <dd>{c.etablissement}</dd>
              </div>
              {c.ville && (
                <div>
                  <dt>Ville</dt>
                  <dd>{c.ville}</dd>
                </div>
              )}
              <div>
                <dt>Session</dt>
                <dd>{c.annee}</dd>
              </div>
              {difficulteHtml(c.difficulte) && (
                <div>
                  <dt>Difficulté</dt>
                  <dd dangerouslySetInnerHTML={{ __html: difficulteHtml(c.difficulte) }} />
                </div>
              )}
              <div>
                <dt>Corrigé</dt>
                <dd className={corrigeMd ? "is-corrige" : undefined}>{corrigeMd ? "Disponible" : "Pas encore"}</dd>
              </div>
              {hasImages && (
                <div>
                  <dt>Scan original</dt>
                  <dd>
                    {c.images.length} page{c.images.length > 1 ? "s" : ""}
                  </dd>
                </div>
              )}
            </dl>
            <div className="sp-aside-actions">
              <DownloadPdfButton concours={fullConcours} label="Télécharger le PDF" />
              <ShareButton concours={shareInfo} />
            </div>
          </div>
          <div className="sp-aside-sticky">
            <nav className="sp-aside-card sp-toc" aria-label="Sur cette page">
              <h2 className="sp-aside-title">Sur cette page</h2>
              <a href="#section-enonce">Énoncé</a>
              {hasImages && <a href="#section-images">Sujet original scanné</a>}
              {corrigeHtml && (
                <a className="is-corrige" href="#section-corrige">
                  Corrigé
                </a>
              )}
              {modulesLies.length > 0 && <a href="#section-modules">Réviser les matières</a>}
              {related.length > 0 && <a href="#section-similaires">Concours similaires</a>}
            </nav>
            <AdSlot settings={settings} placement="sidebar" />
          </div>
        </aside>
        </div>
      </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: footerHtml() }} />
    </>
  );
}
