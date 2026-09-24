import { getAllBoutique } from "@/lib/store";
import { chromeHtml, footerHtml } from "../_shared/chrome";
import ChromeInit from "../_shared/ChromeInit";
import { boutiqueCardHtml } from "../_shared/boutiqueCard";
import { BOUTIQUE_NIVEAUX, isProduitVisible, trierProduits } from "../../lib/boutique";
import BoutiqueExplorer from "./BoutiqueExplorer";

// Prérendue au build, comme /blog : la page ne passe jamais par le Worker
// (voir README, « une page publique n'invoque pas le Worker »). La recherche
// et les filtres sont un filtre côté client posé sur la grille complète.
export const dynamic = "force-static";
export const revalidate = false;

const SITE_URL = "https://www.saadconcours.space";

// Sans cahier publié, la page n'est qu'un « les premiers cahiers arrivent
// bientôt » : hors menu (voir BOUTIQUE_OUVERTE dans chrome.js), hors sitemap
// et hors index jusqu'au premier cahier.
export async function generateMetadata() {
  const ouverte = (await getAllBoutique()).some(isProduitVisible);
  return {
    title: "Boutique — cahiers de préparation Bac, Licence et Master",
    description:
      "Cahiers de préparation en PDF pour le Bac, la Licence FSJES et les concours Master au Maroc : QCM corrigés, sujets blancs, fiches de révision. Paiement sécurisé et téléchargement immédiat.",
    alternates: { canonical: `${SITE_URL}/boutique` },
    ...(ouverte ? {} : { robots: { index: false, follow: true } }),
  };
}

const ETAPES = [
  ["🔎", "Trouve ton cahier", "Filtre par niveau ou cherche ta matière, ton concours."],
  ["💳", "Paie en toute sécurité", "Le paiement se fait sur Gumroad, par carte bancaire."],
  ["📥", "Télécharge tout de suite", "Le PDF arrive par email et reste disponible dans ton compte Gumroad."],
];

export default async function BoutiquePage() {
  const produits = trierProduits((await getAllBoutique()).filter(isProduitVisible));
  const niveaux = BOUTIQUE_NIVEAUX.map((n) => ({ ...n, count: produits.filter((p) => p.niveau === n.code).length })).filter((n) => n.count);

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Cahiers de préparation SaadConcours",
    itemListElement: produits.map((p, i) => ({ "@type": "ListItem", position: i + 1, url: `${SITE_URL}/boutique/${p.id}`, name: p.titre })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "boutique", showSearch: false }) }} />
      <ChromeInit />
      <BoutiqueExplorer initialData={produits} />

      <div className="bac-space site-space">
        <div className="bac-wrap">
          <section className="bac-hero" style={{ "--hero-icon": '"🛒"' }}>
            <div className="bac-eyebrow">Boutique · Cahiers de préparation</div>
            <h1>Des cahiers pour réviser plus vite et mieux</h1>
            <p>
              QCM corrigés, sujets blancs et fiches de synthèse, rédigés à partir des vrais sujets de concours et des programmes
              officiels. En PDF, à imprimer ou à lire sur ton téléphone.
            </p>
            <div className="bac-hero-stats">
              <span className="bac-stat">
                <strong>{produits.length}</strong> cahier{produits.length > 1 ? "s" : ""}
              </span>
              <span className="bac-stat">🔒 Paiement sécurisé Gumroad</span>
              <span className="bac-stat">📥 Téléchargement immédiat</span>
            </div>
          </section>

          <div className="shop-steps">
            {ETAPES.map(([icon, titre, texte], i) => (
              <div className="shop-step" key={titre}>
                <span className="shop-step-num">{i + 1}</span>
                <span className="shop-step-icon" aria-hidden="true">
                  {icon}
                </span>
                <strong>{titre}</strong>
                <span>{texte}</span>
              </div>
            ))}
          </div>

          {produits.length > 0 ? (
            <>
              <div className="sp-filters">
                {niveaux.length > 1 && (
                  <div className="bac-year-tabs" id="shopNiveaux" role="group" aria-label="Niveaux">
                    <button type="button" className="bac-year-tab active" data-niveau="">
                      Tous <em>{produits.length}</em>
                    </button>
                    {niveaux.map((n) => (
                      <button key={n.code} type="button" className="bac-year-tab" data-niveau={n.code}>
                        {n.icon} {n.label} <em>{n.count}</em>
                      </button>
                    ))}
                  </div>
                )}
                <input type="search" id="shopSearch" placeholder="Rechercher un cahier, une matière…" aria-label="Rechercher un cahier" />
                <span className="sp-count" id="shopCount">
                  {produits.length} cahier{produits.length > 1 ? "s" : ""}
                </span>
              </div>
              <div className="shop-grid" id="shopGrid" dangerouslySetInnerHTML={{ __html: produits.map(boutiqueCardHtml).join("") }} />
            </>
          ) : (
            <div className="sp-empty">
              <strong>Les premiers cahiers arrivent bientôt.</strong>
              <br />
              En attendant, tous les sujets de concours et les cours restent en accès libre sur le site.
            </div>
          )}

          <section className="sp-about shop-faq">
            <h2>Questions fréquentes</h2>
            <details>
              <summary>Comment je reçois mon cahier ?</summary>
              <p>Juste après le paiement, Gumroad t&apos;envoie le PDF par email. Il reste aussi téléchargeable à tout moment depuis ton compte Gumroad.</p>
            </details>
            <details>
              <summary>Quels moyens de paiement sont acceptés ?</summary>
              <p>Carte bancaire activée pour le paiement en ligne (Visa, Mastercard) et, quand il est proposé, PayPal — sur la page de paiement sécurisée de Gumroad.</p>
            </details>
            <details>
              <summary>Le contenu du site reste-t-il gratuit ?</summary>
              <p>Oui. Les sujets, corrigés, cours et QCM du site restent en accès libre ; les cahiers rassemblent et complètent ce travail dans un format prêt à réviser.</p>
            </details>
            <details>
              <summary>J&apos;ai un problème avec ma commande.</summary>
              <p>
                Écris-nous depuis la page <a href="/contact">Contact</a> en indiquant l&apos;email utilisé pour l&apos;achat.
              </p>
            </details>
          </section>
        </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: footerHtml() }} />
    </>
  );
}
