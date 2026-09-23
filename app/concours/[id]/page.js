import { notFound } from "next/navigation";
import { marked } from "marked";
import { getAllConcours, getCorrigeFile, getSettings } from "@/lib/store";
import { chromeHtml, footerHtml, pub } from "../../_shared/chrome";
import { CONCOURS_HUES } from "../../_shared/concoursCard";
import { formatQCM, markQcmOptions } from "../../_shared/concoursFormat";
import { renderMarkdownWithMath } from "../../_shared/mathMarkdown";
import { faqJsonLd } from "../../_shared/faqSchema";
import ConcoursDetailClient, { ShareButton, DownloadPdfButton } from "./ConcoursDetailClient";
import AdSlot from "../../_shared/AdSlot";
import MathScripts from "../../_shared/MathScripts";

const SITE_URL = "https://www.saadconcours.space";

async function findConcours(id) {
  const list = await getAllConcours();
  return { c: list.find((x) => x.id === id) || null, list };
}

// Same real master name first (most specific match a student would care
// about), then same établissement, for internal linking + a reason to keep
// browsing instead of bouncing after one PDF - also gives Google more
// crawl paths into pages that have no other inbound links.
function getRelatedConcours(list, current, limit = 4) {
  const others = list.filter((x) => x.id !== current.id);
  const sameMaster = current.master_reel
    ? others.filter((x) => x.master_reel === current.master_reel)
    : [];
  const sameEtab = others.filter((x) => x.etablissement === current.etablissement);
  const seen = new Set();
  const related = [];
  for (const x of [...sameMaster, ...sameEtab]) {
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

// SEO-facing title (browser tab, <title>, OpenGraph/Twitter, JSON-LD name)
// leads with the real master name — the keyword a prospective student
// actually searches for — but keeps établissement/ville/année so pages
// stay distinguishable in search results even when several concours share
// the same master_reel (e.g. "Comptabilité, Contrôle et Audit (CCA)" alone
// is on 8 different concours). The on-page H1 drops the étab/ville/année
// suffix entirely — see ConcoursDetailPage below — since cd-tags right
// underneath already shows those details individually.
function seoTitle(c) {
  const masterLabel = c.master_reel || c.filiere;
  const location = `${c.etablissement}, ${c.ville} ${c.annee}`;
  return masterLabel ? `${masterLabel} — Concours ${location}` : `Concours ${location}`;
}

// Plain-text Q&A generated from fields already shown on the page (tags,
// corrigé badge, difficulté) — kept in sync with what's visible so the
// FAQPage schema below never markets content the page doesn't actually show.
function buildConcoursFaq(c, hasCorrige) {
  const masterLabel = c.master_reel || c.filiere;
  const faqs = [];

  if (c.modules && c.modules.length) {
    faqs.push({
      question: `Quelles sont les matières du concours ${masterLabel ? masterLabel + " " : ""}à ${c.etablissement} (${c.annee}) ?`,
      answer: `Les épreuves portent sur : ${c.modules.join(", ")}.`,
    });
  }

  faqs.push({
    question: "Un corrigé est-il disponible pour ce sujet ?",
    answer: hasCorrige
      ? "Oui, un corrigé indicatif est disponible sur cette page — vérifie les calculs avant de t'y fier pour réviser, la relecture humaine n'est pas garantie."
      : "Pas encore pour ce sujet précis — l'énoncé complet reste disponible gratuitement, et un corrigé pourra être ajouté ultérieurement.",
  });

  faqs.push({
    question: "Ce sujet de concours est-il gratuit ?",
    answer: "Oui, l'énoncé complet est consultable en ligne et téléchargeable en PDF gratuitement sur SaadConcours, sans inscription.",
  });

  if (c.difficulte) {
    faqs.push({
      question: "Quel est le niveau de difficulté de ce concours ?",
      answer: `Ce sujet est classé avec une difficulté de ${c.difficulte} sur notre échelle, à titre indicatif.`,
    });
  }

  return faqs;
}

// breaks: true because an énoncé is a transcribed exam paper, not prose — its
// line breaks are the layout (the header block, a question and its stem, a
// "Travail à faire" list). Markdown's default would fold each run of lines
// into one wrapped paragraph. Safe here specifically because formatQCM has
// already pulled the answer choices out onto bullet lines, and nothing left in
// the corpus is soft-wrapped mid-sentence.
function renderEnonce(md) {
  return markQcmOptions(renderMarkdownWithMath(marked, formatQCM(md, { tagChoices: true }), { breaks: true }));
}

export async function generateMetadata(props) {
  const params = await props.params;
  const { c } = await findConcours(params.id);
  if (!c) return {};

  const corrigeMd = await resolveCorrigeMd(c);
  const masterLabel = c.master_reel || c.filiere;
  const title = seoTitle(c);
  const description = `Sujet de concours réel — ${c.etablissement}, ${c.ville}, session ${c.annee}${
    masterLabel ? `, filière ${masterLabel}` : ""
  }.${corrigeMd ? " Corrigé indicatif disponible." : ""} Énoncé complet et téléchargement PDF gratuit sur SaadConcours.`;
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
    const list = await getAllConcours();
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
  const hasSource = Boolean(c.source);
  // corrige_md merged in so the PDF (top button + bottom actions) includes
  // the corrigé even when it only exists as a raw file, not on c itself.
  const fullConcours = corrigeMd ? { ...c, corrige_md: corrigeMd } : c;

  // c.source is free text ("- Lien / origine du sujet : https://...") in
  // some entries, not always a bare URL — schema.org's isBasedOn expects a
  // URL or CreativeWork, so only include it when we can pull a clean one
  // out, rather than emitting structured data Google would flag invalid.
  const sourceUrlMatch = (c.source || "").match(/https?:\/\/\S+/);

  const faqs = buildConcoursFaq(c, Boolean(corrigeHtml));
  const faqLd = faqJsonLd(faqs);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: seoTitle(c),
    description: `Sujet de concours ${masterLabel || ""} — ${c.etablissement}, ${c.ville}, ${c.annee}`.trim(),
    url,
    educationalLevel: "Master",
    provider: { "@type": "Organization", name: "SaadConcours", url: SITE_URL },
    ...(sourceUrlMatch ? { isBasedOn: sourceUrlMatch[0] } : {}),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Concours", item: `${SITE_URL}/concours` },
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
      {faqLd && (
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      )}
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "concours", showSearch: false, rails: true }) }} />

      <div className="bac-space site-space" style={{ "--mat-h": CONCOURS_HUES[c.categorie] ?? 220 }}>
      <div className="bac-wrap sp-detail">
        <nav className="cd-breadcrumb">
          <a href="/">Accueil</a> <span>/</span> <a href="/concours">Concours</a> <span>/</span>{" "}
          <span>{c.etablissement} {c.annee}</span>
        </nav>

        <div className="bac-chap-hero sp-detail-hero">
          <div className="bac-eyebrow">
            Concours d'accès au Master · {c.annee}
          </div>
          <h1>{masterLabel || `${c.etablissement} — ${c.ville} — ${c.annee}`}</h1>
          <div className="bac-hero-stats">
            <span className="bac-stat">🏫 {c.etablissement}</span>
            <span className="bac-stat">📍 {c.ville}</span>
            <span className="bac-stat">📅 {c.annee}</span>
            {c.difficulte && <span className="bac-stat">⭐ {c.difficulte}</span>}
            {corrigeMd && <span className="bac-dispo">✅ Corrigé disponible</span>}
          </div>
          <div className="sp-hero-actions cd-head-actions">
            <DownloadPdfButton concours={fullConcours} />
            <ShareButton concours={c} />
          </div>
        </div>

        <nav className="bac-tab-labels sp-anchor-tabs" aria-label="Sections du sujet">
          <a className="bac-tab-label" href="#section-enonce">📝 Énoncé</a>
          {corrigeHtml && <a className="bac-tab-label" href="#section-corrige">✅ Corrigé</a>}
          {hasImages && <a className="bac-tab-label" href="#section-images">🖼️ Extraits</a>}
          {hasSource && <a className="bac-tab-label" href="#section-source">🔗 Source</a>}
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

        {hasSource && (
          <div className="cd-card" id="section-source">
            <h2>Source</h2>
            <p className="cd-source">
              <a href={c.source} target="_blank" rel="noopener noreferrer">{c.source}</a>
            </p>
          </div>
        )}

        <ConcoursDetailClient concours={fullConcours} />

        {faqs.length > 0 && (
          <div className="cd-card">
            <h2>Questions fréquentes</h2>
            {faqs.map((f) => (
              <div key={f.question} className="faq-item">
                <h3 className="faq-question">{f.question}</h3>
                <p className="faq-answer">{f.answer}</p>
              </div>
            ))}
          </div>
        )}

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
