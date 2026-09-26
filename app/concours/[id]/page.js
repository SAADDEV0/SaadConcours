import { notFound } from "next/navigation";
import { marked } from "marked";
import { getPublicConcours, getCorrigeFile, getCorrigeIdsLocal, getSettings } from "@/lib/store";
import { chromeHtml, footerHtml, partnerZoneHtml, pub } from "../../_shared/chrome";
import { CONCOURS_HUES } from "../../_shared/concoursCard";
import { formatQCM, markQcmOptions } from "../../_shared/concoursFormat";
import { renderMarkdownWithMath } from "../../_shared/mathMarkdown";
import { concoursSeo } from "../../_shared/concoursSeo";
import ConcoursDetailClient, { ShareButton, DownloadPdfButton } from "./ConcoursDetailClient";
import AdSlot from "../../_shared/AdSlot";
import MathScripts from "../../_shared/MathScripts";
import { isLicenceExcellence, niveauInfo, niveauOf } from "@/lib/concoursNiveaux";

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
  const fallback = isLicenceExcellence(current) ? others : [];
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
  const adsGloballyEnabled = Boolean(settings?.adsEnabled && settings?.adsPublisherId);

  const enonceHtml = renderEnonce(c.enonce_md || "*Énoncé non disponible.*");
  const corrigeMd = await resolveCorrigeMd(c);
  const corrigeHtml = corrigeMd ? renderEnonce(corrigeMd) : null;
  const url = `${SITE_URL}/concours/${c.id}`;
  const masterLabel = c.master_reel || c.filiere;
  const related = getRelatedConcours(list, c);
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
  const { title } = await seoDe(c, list);

  const niveau = niveauInfo(niveauOf(c));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: title,
    description: `Sujet de concours ${masterLabel || ""} — ${c.etablissement}, ${c.ville}, ${c.annee}`.trim(),
    url,
    educationalLevel: isLicenceExcellence(c) ? "Licence" : "Master",
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
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: isLicenceExcellence(c) ? "concours-le" : "concours", showSearch: false, rails: true }) }} />

      <div className="bac-space site-space" style={{ "--mat-h": CONCOURS_HUES[c.categorie] ?? 220 }}>
      <div className="bac-wrap sp-detail">
        <nav className="cd-breadcrumb">
          <a href="/">Accueil</a> <span>/</span> <a href="/concours">Concours</a> <span>/</span>{" "}
          {isLicenceExcellence(c) && (
            <>
              <a href={niveau.href}>{niveau.label}</a> <span>/</span>{" "}
            </>
          )}
          <span>{c.etablissement} {c.annee}</span>
        </nav>

        <div className="bac-chap-hero sp-detail-hero">
          <div className="bac-eyebrow">
            {niveau.long} · {c.annee}
          </div>
          <h1>{masterLabel || `${c.etablissement} — ${c.ville} — ${c.annee}`}</h1>
          <div className="bac-hero-stats">
            <span className="bac-stat">🏫 {c.etablissement}</span>
            <span className="bac-stat">📍 {c.ville}</span>
            <span className="bac-stat">📅 {c.annee}</span>
            {c.difficulte && <span className="bac-stat">⭐ {c.difficulte}</span>}
            {corrigeMd && <span className="bac-dispo">✅ Corrigé disponible</span>}
          </div>
          {c.modules?.length > 0 && (
            <p className="sp-chips sp-detail-modules">
              <span className="sp-detail-modules-label">Matières :</span>
              {c.modules.map((m) => (
                <span key={m} className="bac-res-chip on">
                  {m}
                </span>
              ))}
            </p>
          )}
          <div className="sp-hero-actions cd-head-actions">
            <DownloadPdfButton concours={fullConcours} />
            <ShareButton
              concours={{ master_reel: c.master_reel, filiere: c.filiere, etablissement: c.etablissement, ville: c.ville, annee: c.annee }}
            />
          </div>
        </div>

        <nav className="bac-tab-labels sp-anchor-tabs" aria-label="Sections du sujet">
          <a className="bac-tab-label" href="#section-enonce">📝 Énoncé</a>
          {corrigeHtml && <a className="bac-tab-label" href="#section-corrige">✅ Corrigé</a>}
          {hasImages && <a className="bac-tab-label" href="#section-images">🖼️ Extraits</a>}
        </nav>

        <div className="cd-card" id="section-enonce">
          <h2>Énoncé</h2>
          <div className="enonce-content" dangerouslySetInnerHTML={{ __html: enonceHtml }} />
        </div>

        <AdSlot
          enabled={adsGloballyEnabled && settings?.adsConcoursMidEnabled}
          publisherId={settings?.adsPublisherId}
          slotId={settings?.adsConcoursMidSlot}
          label="Publicité — entre énoncé et corrigé"
        />

        {/* Bannière partenaire « Dans le contenu » (vide sans annonceur). */}
        <div dangerouslySetInnerHTML={{ __html: partnerZoneHtml("inline") }} />

        {corrigeHtml && (
          <div className="cd-card" id="section-corrige">
            <h2>Corrigé</h2>
            <div className="corrige-disclaimer">
              ⚠️ Corrigé indicatif (relecture humaine non garantie) — vérifie les calculs avant de t'y fier pour réviser.
            </div>
            <div className="enonce-content" dangerouslySetInnerHTML={{ __html: corrigeHtml }} />
          </div>
        )}

        {hasImages && (
          <div className="cd-card" id="section-images">
            <h2>Extraits scannés</h2>
            <div className="cd-images">
              {c.images.map((img) => (
                <img key={img} src={pub(img)} alt={`Extrait scanné — ${c.etablissement} ${c.annee}`} loading="lazy" />
              ))}
            </div>
          </div>
        )}

        <AdSlot
          enabled={adsGloballyEnabled && settings?.adsConcoursBottomEnabled}
          publisherId={settings?.adsPublisherId}
          slotId={settings?.adsConcoursBottomSlot}
          label="Publicité — bas de page"
        />

        <ConcoursDetailClient concours={{ id: c.id }} />

        {/* Plus de bloc « Questions fréquentes » : c'étaient les mêmes
           questions génériques (« Ce sujet est-il gratuit ? ») sur chaque
           fiche, là pour alimenter un balisage FAQPage que Google n'affiche
           plus hors sites officiels et de santé depuis 2023. Les matières et
           la difficulté sont affichées dans l'en-tête de la fiche. */}

        {related.length > 0 && (
          <section className="bac-group">
            <h2 className="bac-section-title">Concours similaires</h2>
            <div className="sp-related">
              {related.map((r) => (
                <a key={r.id} className="bac-mat-card" href={`/concours/${r.id}`} style={{ "--mat-h": CONCOURS_HUES[r.categorie] ?? 220 }}>
                  <span className="bac-mat-icon sp-year">{r.annee}</span>
                  <span className="bac-mat-body">
                    <span className="bac-mat-name">{r.master_reel || r.filiere || `${r.etablissement} — ${r.ville}`}</span>
                    <span className="bac-mat-meta">
                      {r.etablissement} · {r.ville}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </section>
        )}
      </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: footerHtml() }} />
    </>
  );
}
