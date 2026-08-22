import { notFound } from "next/navigation";
import { marked } from "marked";
import { getAllConcours } from "@/lib/store";
import { chromeHtml, footerHtml, pub } from "../../_shared/chrome";
import { formatQCM } from "../../_shared/concoursFormat";
import ConcoursDetailClient from "./ConcoursDetailClient";

const SITE_URL = "https://www.saadconcours.space";

async function findConcours(id) {
  const list = await getAllConcours();
  return list.find((c) => c.id === id) || null;
}

export async function generateMetadata({ params }) {
  const c = await findConcours(params.id);
  if (!c) return {};

  const title = `Concours ${c.etablissement} ${c.ville} ${c.annee}${c.filiere ? " — " + c.filiere : ""}`;
  const description = `Sujet de concours réel — ${c.etablissement}, ${c.ville}, session ${c.annee}${
    c.filiere ? `, filière ${c.filiere}` : ""
  }.${c.corrige_md ? " Corrigé indicatif disponible." : ""} Énoncé complet et téléchargement PDF gratuit sur SaadConcours.`;
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
  const c = await findConcours(params.id);
  if (!c) notFound();

  const enonceHtml = marked.parse(formatQCM(c.enonce_md) || "*Énoncé non disponible.*");
  const corrigeHtml = c.corrige_md ? marked.parse(formatQCM(c.corrige_md)) : null;
  const url = `${SITE_URL}/concours/${c.id}`;

  // c.source is free text ("- Lien / origine du sujet : https://...") in
  // some entries, not always a bare URL — schema.org's isBasedOn expects a
  // URL or CreativeWork, so only include it when we can pull a clean one
  // out, rather than emitting structured data Google would flag invalid.
  const sourceUrlMatch = (c.source || "").match(/https?:\/\/\S+/);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: `Concours ${c.etablissement} ${c.ville} ${c.annee}`,
    description: `Sujet de concours ${c.filiere || ""} — ${c.etablissement}, ${c.ville}, ${c.annee}`.trim(),
    url,
    educationalLevel: "Master",
    provider: { "@type": "Organization", name: "SaadConcours", url: SITE_URL },
    ...(sourceUrlMatch ? { isBasedOn: sourceUrlMatch[0] } : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "concours", showSearch: false }) }} />

      <div className="cd-view">
        <nav className="cd-breadcrumb">
          <a href="/">Accueil</a> <span>/</span> <a href="/concours">Concours</a> <span>/</span>{" "}
          <span>{c.etablissement} {c.annee}</span>
        </nav>

        <div className="cd-head">
          <h1>{c.etablissement} — {c.ville} — {c.annee}</h1>
          <div className="cd-tags">
            {c.filiere && <span className="info-tag">🎓 {c.filiere}</span>}
            <span className="info-tag">📍 {c.ville}</span>
            <span className="info-tag">📅 {c.annee}</span>
            {c.difficulte && <span className="info-tag">⭐ {c.difficulte}</span>}
            {c.corrige_md && <span className="corrige-badge">✅ corrigé disponible</span>}
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

        <ConcoursDetailClient concours={c} />
      </div>

      <div dangerouslySetInnerHTML={{ __html: footerHtml() }} />
    </>
  );
}
