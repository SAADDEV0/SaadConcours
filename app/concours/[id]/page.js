import { notFound } from "next/navigation";
import { marked } from "marked";
import { getAllConcours, getCorrigeFile } from "@/lib/store";
import { chromeHtml, footerHtml, pub } from "../../_shared/chrome";
import { formatQCM } from "../../_shared/concoursFormat";
import ConcoursDetailClient, { ShareButton } from "./ConcoursDetailClient";

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

export async function generateMetadata({ params }) {
  const { c } = await findConcours(params.id);
  if (!c) return {};

  const corrigeMd = await resolveCorrigeMd(c);
  const masterLabel = c.master_reel || c.filiere;
  const title = `Concours ${c.etablissement} ${c.ville} ${c.annee}${masterLabel ? " — " + masterLabel : ""}`;
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

export async function generateStaticParams() {
  try {
    const list = await getAllConcours();
    return list.map((c) => ({ id: c.id }));
  } catch {
    return [];
  }
}

export default async function ConcoursDetailPage({ params }) {
  const { c, list } = await findConcours(params.id);
  if (!c) notFound();

  const enonceHtml = marked.parse(formatQCM(c.enonce_md) || "*Énoncé non disponible.*");
  const corrigeMd = await resolveCorrigeMd(c);
  const corrigeHtml = corrigeMd ? marked.parse(formatQCM(corrigeMd)) : null;
  const url = `${SITE_URL}/concours/${c.id}`;
  const masterLabel = c.master_reel || c.filiere;
  const related = getRelatedConcours(list, c);

  // c.source is free text ("- Lien / origine du sujet : https://...") in
  // some entries, not always a bare URL — schema.org's isBasedOn expects a
  // URL or CreativeWork, so only include it when we can pull a clean one
  // out, rather than emitting structured data Google would flag invalid.
  const sourceUrlMatch = (c.source || "").match(/https?:\/\/\S+/);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: `Concours ${c.etablissement} ${c.ville} ${c.annee}`,
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
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "concours", showSearch: false }) }} />

      <div className="cd-view">
        <nav className="cd-breadcrumb">
          <a href="/">Accueil</a> <span>/</span> <a href="/concours">Concours</a> <span>/</span>{" "}
          <span>{c.etablissement} {c.annee}</span>
        </nav>

        <div className="cd-head">
          <div className="cd-head-row">
            <h1>{c.etablissement} — {c.ville} — {c.annee}</h1>
            <ShareButton concours={c} />
          </div>
          <div className="cd-tags">
            {(c.master_reel || c.filiere) && <span className="info-tag">🎓 {c.master_reel || c.filiere}</span>}
            <span className="info-tag">📍 {c.ville}</span>
            <span className="info-tag">📅 {c.annee}</span>
            {c.difficulte && <span className="info-tag">⭐ {c.difficulte}</span>}
            {corrigeMd && <span className="corrige-badge">✅ corrigé disponible</span>}
          </div>
        </div>

        <div className="cd-card">
          <h2>Énoncé</h2>
          <div className="enonce-content" dangerouslySetInnerHTML={{ __html: enonceHtml }} />
        </div>

        {c.images && c.images.length > 0 && (
          <div className="cd-card">
            <h2>Extraits scannés</h2>
            <div className="cd-images">
              {c.images.map((img) => (
                <img key={img} src={pub(img)} alt={`Extrait scanné — ${c.etablissement} ${c.annee}`} loading="lazy" />
              ))}
            </div>
          </div>
        )}

        {corrigeHtml && (
          <div className="cd-card">
            <h2>Corrigé</h2>
            <div className="corrige-disclaimer">
              ⚠️ Corrigé indicatif (relecture humaine non garantie) — vérifie les calculs avant de t'y fier pour réviser.
            </div>
            <div className="enonce-content" dangerouslySetInnerHTML={{ __html: corrigeHtml }} />
          </div>
        )}

        {c.source && (
          <p className="cd-source">
            Source : <a href={c.source} target="_blank" rel="noopener noreferrer">{c.source}</a>
          </p>
        )}

        <ConcoursDetailClient concours={corrigeMd ? { ...c, corrige_md: corrigeMd } : c} />

        {related.length > 0 && (
          <div className="cd-card cd-related">
            <h2>Concours similaires</h2>
            <div className="cd-related-grid">
              {related.map((r) => (
                <a key={r.id} className="cd-related-item" href={`/concours/${r.id}`}>
                  <div className="cd-related-title">{r.etablissement} — {r.ville} — {r.annee}</div>
                  <div className="cd-related-sub">{r.master_reel || r.filiere}</div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      <div dangerouslySetInnerHTML={{ __html: footerHtml() }} />
    </>
  );
}
