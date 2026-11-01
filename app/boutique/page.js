import { getAllBoutique, getAllCours } from "@/lib/store";
import { chromeHtml, footerHtml } from "../_shared/chrome";
import ChromeInit from "../_shared/ChromeInit";
import { boutiqueCardHtml } from "../_shared/boutiqueCard";
import { clampDescription } from "../_shared/seoText";
import { BOUTIQUE_NIVEAUX, isProduitVisible, trierProduits } from "../../lib/boutique";
import { LICENCE_SEMESTRES } from "../../lib/coursTaxonomy";
import BoutiqueExplorer from "./BoutiqueExplorer";
import { Icon } from "../_shared/icons";

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
  const { produits, groupes } = await donnees();
  const semestres = groupes.filter((g) => g.code).map((g) => g.code);
  return {
    title: "Cahiers de préparation FSJES en PDF",
    description: clampDescription(
      `${produits.length} cahiers de préparation en PDF pour la Licence FSJES${semestres.length ? ` (${semestres.join(", ")})` : ""} : le module en français simple, QCM corrigés, exercices et examens blancs.`
    ),
    alternates: { canonical: `${SITE_URL}/boutique` },
    ...(produits.length ? {} : { robots: { index: false, follow: true } }),
  };
}

// Une section par semestre, comme /cours : le semestre vient du cours lié au
// cahier. Un cahier sans cours (concours, Bac) va dans « Autres cahiers ».
async function donnees() {
  const [boutique, cours] = await Promise.all([getAllBoutique(), getAllCours().catch(() => [])]);
  const semestreDe = (p) => cours.find((c) => c.id === p.cours)?.semestre || "";
  const produits = trierProduits(boutique.filter(isProduitVisible)).map((p) => ({ ...p, semestre: semestreDe(p) }));
  const groupes = [
    ...LICENCE_SEMESTRES.map((s) => ({ code: s.code, titre: `Cahiers de préparation du ${s.label.toLowerCase()}`, list: produits.filter((p) => p.semestre === s.code) })),
    { code: "", titre: "Autres cahiers", list: produits.filter((p) => !p.semestre) },
  ].filter((g) => g.list.length);
  return { produits, groupes };
}

const ETAPES = [
  ["search", "Trouve ton cahier", "Filtre par semestre ou cherche ta matière."],
  ["message", "Commande sur WhatsApp", "Clique sur « Commander » : le message avec le nom du cahier est déjà écrit."],
  ["send", "Reçois ton PDF", "Après le paiement, le PDF t'est envoyé directement sur WhatsApp."],
];

export default async function BoutiquePage() {
  const { produits, groupes } = await donnees();
  const niveaux = BOUTIQUE_NIVEAUX.map((n) => ({ ...n, count: produits.filter((p) => p.niveau === n.code).length })).filter((n) => n.count);
  const semestres = groupes.filter((g) => g.code);
  // Le filtre n'a besoin que du texte cherché : pas la description entière de
  // chaque cahier dans le HTML de la page.
  const filtre = produits.map(({ id, niveau, semestre, titre, sousTitre, matiere, sommaire, pointsForts }) => ({ id, niveau, semestre, titre, sousTitre, matiere, sommaire, pointsForts }));

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
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "boutique" }) }} />
      <ChromeInit />
      <BoutiqueExplorer initialData={filtre} />

      <div className="bac-space">
        <div className="bac-wrap">
          <section className="bac-hero">
            <h1>Cahiers de préparation FSJES pour réviser plus vite et mieux</h1>
            <p>
              QCM corrigés, sujets blancs et fiches de synthèse, rédigés à partir des vrais sujets de concours et des programmes
              officiels. En PDF, à imprimer ou à lire sur ton téléphone.
            </p>
            <div className="bac-hero-stats">
              <span className="bac-stat">
                <strong>{produits.length}</strong> cahier{produits.length > 1 ? "s" : ""}
              </span>
              <span className="bac-stat">
                <Icon name="message" size={15} />
                Commande sur WhatsApp
              </span>
              <span className="bac-stat">
                <Icon name="send" size={15} />
                PDF envoyé sur WhatsApp
              </span>
            </div>
          </section>

          <div className="shop-steps">
            {ETAPES.map(([icon, titre, texte], i) => (
              <div className="shop-step" key={titre}>
                <span className="shop-step-num">{i + 1}</span>
                <span className="shop-step-icon" aria-hidden="true">
                  <Icon name={icon} size={26} />
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
                        <Icon e={n.icon} size={16} />
                        {n.label} <em>{n.count}</em>
                      </button>
                    ))}
                  </div>
                )}
                {semestres.length > 1 && (
                  <div className="bac-year-tabs" id="shopSemestres" role="group" aria-label="Semestre">
                    <button type="button" className="bac-year-tab active" data-semestre="">
                      Tous <em>{produits.length}</em>
                    </button>
                    {semestres.map((g) => (
                      <button key={g.code} type="button" className="bac-year-tab" data-semestre={g.code}>
                        {g.code} <em>{g.list.length}</em>
                      </button>
                    ))}
                  </div>
                )}
                <input type="search" id="shopSearch" placeholder="Rechercher un cahier, une matière…" aria-label="Rechercher un cahier" />
                <span className="sp-count" id="shopCount">
                  {produits.length} cahier{produits.length > 1 ? "s" : ""}
                </span>
              </div>
              {groupes.map((g) => (
                <section key={g.code || "autres"} className="bac-group" data-groupe={g.code}>
                  <h2 className="bac-section-title">{g.titre}</h2>
                  <div className="shop-grid" dangerouslySetInnerHTML={{ __html: g.list.map(boutiqueCardHtml).join("") }} />
                </section>
              ))}
              <div className="sp-empty" id="shopEmpty" hidden>
                Aucun cahier ne correspond à ta recherche.
              </div>
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
              <p>Commande le cahier sur WhatsApp avec le bouton « Commander ». Après le paiement, nous t&apos;envoyons le PDF directement dans la conversation WhatsApp.</p>
            </details>
            <details>
              <summary>Quels moyens de paiement sont acceptés ?</summary>
              <p>Quand tu commandes sur WhatsApp, nous t&apos;indiquons les moyens de paiement disponibles. Le PDF part dès que le paiement est reçu.</p>
            </details>
            <details>
              <summary>Le contenu du site reste-t-il gratuit ?</summary>
              <p>Oui. Les sujets, corrigés, cours et QCM du site restent en accès libre ; les cahiers rassemblent et complètent ce travail dans un format prêt à réviser.</p>
            </details>
            <details>
              <summary>Quel lien entre un cahier et le cours du site ?</summary>
              <p>
                Chaque cahier suit le cours gratuit du même module, à retrouver dans les <a href="/cours">cours FSJES</a>. Il y ajoute l&apos;entraînement : QCM corrigés, exercices,
                méthode de l&apos;épreuve et examens blancs.
              </p>
            </details>
            <details>
              <summary>J&apos;ai un problème avec ma commande.</summary>
              <p>
                Écris-nous sur WhatsApp au +212 7 13 87 53 27, dans la conversation de ta commande, ou depuis la page <a href="/contact">Contact</a>.
              </p>
            </details>
          </section>
        </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: footerHtml() }} />
    </>
  );
}
