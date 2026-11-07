import { notFound } from "next/navigation";
import { marked } from "marked";
import { getAllBoutique, getAllCours, getAllDroit } from "@/lib/store";
import { chromeHtml, footerHtml } from "../../_shared/chrome";
import { renderMarkdownWithMath } from "../../_shared/mathMarkdown";
import MathScripts from "../../_shared/MathScripts";
import { boutiqueCardHtml } from "../../_shared/boutiqueCard";
import { fitTitle, clampDescription } from "../../_shared/seoText";
import { accrocheCourte, boutiqueNiveau, commandeHref, coursLieHref, formatPrix, isProduitAchetable, isProduitVisible, produitImage, remisePct, trierProduits } from "../../../lib/boutique";
import { fsjesModule } from "../../../lib/fsjesChapitres";
import { droitModule, droitOuvert, isDroitPublie } from "../../../lib/droit";
import ProduitClient, { ShareButton } from "./ProduitClient";
import { Icon } from "../../_shared/icons";

const SITE_URL = "https://www.saadconcours.space";

// Cours FSJES et modules de Droit publiés : un cahier peut être lié à l'un ou à l'autre.
async function coursLies() {
  const [cours, droit] = await Promise.all([getAllCours().catch(() => []), droitOuvert() ? getAllDroit().catch(() => []) : []]);
  return [...cours, ...droit.filter(isDroitPublie).map((c) => ({ ...c, espace: "droit" }))];
}

async function findProduit(id) {
  const [boutique, coursList] = await Promise.all([getAllBoutique(), coursLies()]);
  const list = boutique.filter(isProduitVisible);
  const p = list.find((x) => x.id === id) || null;
  return { p, list, coursList, cours: coursDe(p, coursList) };
}

// Le cours gratuit du même module, s'il est publié.
function coursDe(p, coursList) {
  return coursList.find((c) => c.id === p?.cours && c.available) || null;
}

// La requête des étudiants d'abord : « cahier de préparation » + module +
// semestre. Sans le suffixe du modèle de app/layout.js, pour garder ces 65
// caractères au nom du module (seoText.js).
function titreSeo(p, cours) {
  if (!cours) return p.titre;
  if (p.langue === "ar") {
    const nom = `دفتر التحضير ${p.matiere} ${cours.semestre}`;
    return fitTitle([`${nom} PDF`, nom, p.titre]);
  }
  const nom = `Cahier de préparation ${p.matiere} ${cours.semestre}`;
  return fitTitle([`${nom} FSJES`, nom, p.titre]);
}

function descriptionSeo(p, cours) {
  const accroche = accrocheCourte(p);
  if (!cours || !accroche) return clampDescription(p.sousTitre || `Cahier de préparation ${boutiqueNiveau(p.niveau)?.long || ""} en PDF.`);
  if (p.langue === "ar") return clampDescription(`دفتر التحضير لامتحان ${p.matiere} (${cours.semestre}) بصيغة PDF بثمن ${formatPrix(p.prix, p.devise)}: ${p.sousTitre} يطلب عبر واتساب.`);
  return clampDescription(`${p.matiere} (Licence FSJES ${cours.semestre}) : cahier de préparation en PDF à ${formatPrix(p.prix, p.devise)}, ${accroche}. En français simple, commande sur WhatsApp.`);
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
  const { p, cours } = await findProduit(id);
  if (!p) return {};
  const url = `${SITE_URL}/boutique/${p.id}`;
  const title = titreSeo(p, cours);
  const description = descriptionSeo(p, cours);
  const image = p.couverture ? `${SITE_URL}${produitImage(p.couverture)}` : undefined;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: { type: "website", title, description, url, images: [image || "/opengraph-image"] },
    twitter: { card: "summary_large_image", title, description, ...(image ? { images: [image] } : {}) },
  };
}

export default async function ProduitPage(props) {
  const { id } = await props.params;
  const { p, list, coursList, cours } = await findProduit(id);
  if (!p) notFound();
  // Cahier en arabe : titre, accroche, points forts, présentation et sommaire de droite à gauche.
  const rtl = p.langue === "ar" ? { dir: "rtl", lang: "ar" } : {};

  const niv = boutiqueNiveau(p.niveau);
  const url = `${SITE_URL}/boutique/${p.id}`;
  const achetable = isProduitAchetable(p);
  const href = commandeHref(p);
  const remise = remisePct(p);
  const cover = produitImage(p.couverture);
  const descriptionHtml = renderMarkdownWithMath(marked, p.description || "");
  // Même semestre d'abord : ceux que l'étudiant passe en même temps.
  const proche = (x) => Number(x.niveau === p.niveau) + Number(Boolean(cours) && coursDe(x, coursList)?.semestre === cours.semestre);
  const autres = trierProduits(list.filter((x) => x.id !== p.id))
    .sort((a, b) => proche(b) - proche(a))
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
            url,
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
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "boutique" }) }} />
      <ProduitClient id={p.id} />

      <div className="bac-space">
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
                  <Icon e={niv?.icon || "book"} size={64} strokeWidth={1.4} />
                </span>
              )}
              {p.badge && <span className="shop-badge">{p.badge}</span>}
            </div>

            <div className="shop-detail-main">
              <div className="bac-eyebrow">
                {niv ? (
                  <a href={`/boutique?niveau=${niv.code}`}>
                    {niv.long}
                  </a>
                ) : (
                  "Cahier de préparation"
                )}
                {p.matiere ? ` · ${p.matiere}` : ""}
              </div>
              <h1 {...rtl}>{p.titre}</h1>
              {p.sousTitre && (
                <p className="shop-detail-sub" {...rtl}>
                  {p.sousTitre}
                </p>
              )}

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
                    <Icon name="message" size={18} />
                    Commander sur WhatsApp
                  </a>
                )}
                <ShareButton titre={p.titre} prix={achetable ? formatPrix(p.prix, p.devise) : ""} />
                {p.apercu && (
                  <a className="sp-btn" href={p.apercu} target="_blank" rel="noopener">
                    <Icon name="eye" size={18} />
                    Voir un extrait gratuit
                  </a>
                )}
                <ul className="shop-reassure">
                  <li>
                    <Icon name="message" size={15} /> Le message avec le nom du cahier est déjà écrit
                  </li>
                  <li>
                    <Icon name="send" size={15} /> PDF envoyé sur WhatsApp après le paiement
                  </li>
                  <li>
                    <Icon name="phone" size={15} /> Lisible sur téléphone, tablette et ordinateur
                  </li>
                </ul>
              </div>

              <div className="bac-hero-stats">
                {p.pages ? (
                  <span className="bac-stat">
                    <Icon name="file" size={15} />
                    {p.pages} pages
                  </span>
                ) : null}
                <span className="bac-stat">
                  <Icon name="folder" size={15} />
                  {p.format || "PDF"}
                </span>
                {niv && (
                  <span className="bac-stat">
                    <Icon e={niv.icon} size={15} />
                    {niv.label}
                  </span>
                )}
              </div>
            </div>
          </div>

          {(p.pointsForts || []).length > 0 && (
            <section className="bac-group">
              <h2 className="bac-section-title">Ce que tu trouveras dedans</h2>
              <ul className="shop-points" {...rtl}>
                {p.pointsForts.map((pt) => (
                  <li key={pt}>
                    <Icon name="check-circle" size={17} />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {p.description && (
            <section className="bac-group">
              <h2 className="bac-section-title">Présentation</h2>
              <div className="cd-card">
                <div className="enonce-content" {...rtl} dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
              </div>
            </section>
          )}

          {(p.sommaire || []).length > 0 && (
            <section className="bac-group">
              <h2 className="bac-section-title">Sommaire</h2>
              <ol className="shop-sommaire" {...rtl}>
                {p.sommaire.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ol>
            </section>
          )}

          {achetable && (
            <div className="shop-cta-bottom">
              <div>
                <strong {...rtl}>{p.titre}</strong>
                <span>{formatPrix(p.prix, p.devise)} · PDF envoyé sur WhatsApp</span>
              </div>
              <a className="sp-btn primary shop-buy" href={href} target="_blank" rel="noopener" data-shop-buy={p.id}>
                <Icon name="message" size={18} />
                Commander sur WhatsApp
              </a>
            </div>
          )}

          {cours && (
            <section className="bac-group">
              <h2 className="bac-section-title">Le cours gratuit de ce module</h2>
              <a className="bac-mat-card" href={coursLieHref(cours)}>
                <span className="bac-mat-body">
                  <span className="bac-mat-name" dir={cours.langue === "ar" ? "rtl" : undefined}>
                    {cours.module} ({cours.semestre})
                  </span>
                  <span className="bac-mat-desc sp-desc-clamp" dir={cours.langue === "ar" ? "rtl" : undefined}>
                    {cours.description}
                  </span>
                  <span className="bac-mat-meta">
                    <span>{(cours.espace === "droit" ? droitModule(cours) : fsjesModule(cours)).chapitres.length} chapitres</span>
                    <span className="bac-dot">·</span>
                    <span>Cours, exercices corrigés, résumé et QCM</span>
                  </span>
                </span>
              </a>
            </section>
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
