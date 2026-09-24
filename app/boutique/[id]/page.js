import { notFound } from "next/navigation";
import { marked } from "marked";
import { getAllBoutique } from "@/lib/store";
import { chromeHtml, footerHtml } from "../../_shared/chrome";
import { renderMarkdownWithMath } from "../../_shared/mathMarkdown";
import MathScripts from "../../_shared/MathScripts";
import { boutiqueCardHtml } from "../../_shared/boutiqueCard";
import { boutiqueNiveau, formatPrix, gumroadHref, isProduitAchetable, isProduitVisible, produitImage, remisePct, trierProduits } from "../../../lib/boutique";
import ProduitClient from "./ProduitClient";

const SITE_URL = "https://www.saadconcours.space";

async function findProduit(id) {
  const list = (await getAllBoutique()).filter(isProduitVisible);
  return { p: list.find((x) => x.id === id) || null, list };
}

export const dynamic = "force-static";
export const revalidate = false;

export async function generateStaticParams() {
  try {
    return (await getAllBoutique()).filter(isProduitVisible).map((p) => ({ id: p.id }));
  } catch {
    return [];
  }
}

export async function generateMetadata(props) {
  const { id } = await props.params;
  const { p } = await findProduit(id);
  if (!p) return {};
  const url = `${SITE_URL}/boutique/${p.id}`;
  const description = p.sousTitre || `Cahier de préparation ${boutiqueNiveau(p.niveau)?.long || ""} en PDF.`;
  const image = p.couverture ? `${SITE_URL}${produitImage(p.couverture)}` : undefined;
  return {
    title: p.titre,
    description,
    alternates: { canonical: url },
    openGraph: { type: "website", title: p.titre, description, url, ...(image ? { images: [image] } : {}) },
    twitter: { card: "summary_large_image", title: p.titre, description },
  };
}

export default async function ProduitPage(props) {
  const { id } = await props.params;
  const { p, list } = await findProduit(id);
  if (!p) notFound();

  const niv = boutiqueNiveau(p.niveau);
  const url = `${SITE_URL}/boutique/${p.id}`;
  const achetable = isProduitAchetable(p);
  const href = gumroadHref(p);
  const remise = remisePct(p);
  const cover = produitImage(p.couverture);
  const descriptionHtml = renderMarkdownWithMath(marked, p.description || "");
  const autres = trierProduits(list.filter((x) => x.id !== p.id))
    .sort((a, b) => Number(b.niveau === p.niveau) - Number(a.niveau === p.niveau))
    .slice(0, 3);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.titre,
    description: p.sousTitre || p.titre,
    url,
    ...(cover ? { image: `${SITE_URL}${cover}` } : {}),
    brand: { "@type": "Brand", name: "SaadConcours" },
    category: "Livre numérique / cahier de préparation",
    ...(achetable
      ? {
          offers: {
            "@type": "Offer",
            price: Number(p.prix),
            priceCurrency: p.devise || "MAD",
            availability: "https://schema.org/InStock",
            url: p.gumroadUrl,
          },
        }
      : {}),
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Boutique", item: `${SITE_URL}/boutique` },
      { "@type": "ListItem", position: 3, name: p.titre, item: url },
    ],
  };

  return (
    <>
      <MathScripts />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "boutique", showSearch: false }) }} />
      <ProduitClient id={p.id} />

      <div className="bac-space site-space" style={{ "--mat-h": niv?.hue ?? 230 }}>
        <div className="bac-wrap">
          <nav className="cd-breadcrumb">
            <a href="/">Accueil</a> <span>/</span> <a href="/boutique">Boutique</a> <span>/</span> <span>{p.titre}</span>
          </nav>

          <div className="shop-detail">
            <div className="shop-detail-cover">
              {cover ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={cover} alt={`Couverture : ${p.titre}`} />
              ) : (
                <span className="shop-cover-ph" aria-hidden="true">
                  {niv?.icon || "📘"}
                </span>
              )}
              {p.badge && <span className="shop-badge">{p.badge}</span>}
            </div>

            <div className="shop-detail-main">
              <div className="bac-eyebrow">
                {niv ? (
                  <a href={`/boutique?niveau=${niv.code}`}>
                    {niv.icon} {niv.long}
                  </a>
                ) : (
                  "Cahier de préparation"
                )}
                {p.matiere ? ` · ${p.matiere}` : ""}
              </div>
              <h1>{p.titre}</h1>
              {p.sousTitre && <p className="shop-detail-sub">{p.sousTitre}</p>}

              <div className="shop-buybox">
                <div className="shop-buybox-price">
                  {achetable ? (
                    <>
                      <strong>{formatPrix(p.prix, p.devise)}</strong>
                      {remise > 0 && (
                        <>
                          <s>{formatPrix(p.prixBarre, p.devise)}</s>
                          <span className="shop-remise static">−{remise} %</span>
                        </>
                      )}
                    </>
                  ) : (
                    <strong className="shop-soon">Bientôt disponible</strong>
                  )}
                </div>
                {achetable && (
                  <a className="sp-btn primary shop-buy" href={href} target="_blank" rel="noopener" data-shop-buy={p.id}>
                    🛒 Acheter sur Gumroad
                  </a>
                )}
                {p.apercu && (
                  <a className="sp-btn" href={p.apercu} target="_blank" rel="noopener">
                    👀 Voir un extrait gratuit
                  </a>
                )}
                <ul className="shop-reassure">
                  <li>🔒 Paiement sécurisé sur Gumroad</li>
                  <li>📥 PDF envoyé par email, tout de suite</li>
                  <li>📱 Lisible sur téléphone, tablette et ordinateur</li>
                </ul>
              </div>

              <div className="bac-hero-stats">
                {p.pages ? <span className="bac-stat">📄 {p.pages} pages</span> : null}
                <span className="bac-stat">🗂️ {p.format || "PDF"}</span>
                {niv && <span className="bac-stat">{niv.icon} {niv.label}</span>}
              </div>
            </div>
          </div>

          {(p.pointsForts || []).length > 0 && (
            <section className="bac-group">
              <h2 className="bac-section-title">Ce que tu trouveras dedans</h2>
              <ul className="shop-points">
                {p.pointsForts.map((pt) => (
                  <li key={pt}>✅ {pt}</li>
                ))}
              </ul>
            </section>
          )}

          {p.description && (
            <section className="bac-group">
              <h2 className="bac-section-title">Présentation</h2>
              <div className="cd-card">
                <div className="enonce-content" dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
              </div>
            </section>
          )}

          {(p.sommaire || []).length > 0 && (
            <section className="bac-group">
              <h2 className="bac-section-title">Sommaire</h2>
              <ol className="shop-sommaire">
                {p.sommaire.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ol>
            </section>
          )}

          {achetable && (
            <div className="shop-cta-bottom">
              <div>
                <strong>{p.titre}</strong>
                <span>{formatPrix(p.prix, p.devise)} · téléchargement immédiat</span>
              </div>
              <a className="sp-btn primary shop-buy" href={href} target="_blank" rel="noopener" data-shop-buy={p.id}>
                🛒 Acheter sur Gumroad
              </a>
            </div>
          )}

          {autres.length > 0 && (
            <section className="bac-group">
              <h2 className="bac-section-title">Autres cahiers</h2>
              <div className="shop-grid" dangerouslySetInnerHTML={{ __html: autres.map(boutiqueCardHtml).join("") }} />
            </section>
          )}
        </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: footerHtml() }} />
    </>
  );
}
