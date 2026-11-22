import { chromeHtml, footerHtml } from "../_shared/chrome";
import ChromeInit from "../_shared/ChromeInit";
import JsonLd from "../_shared/JsonLd";
import { breadcrumbJsonLd } from "../_shared/listingSchema";
import { Icon } from "../_shared/icons";
import { BAC_MATIERES_PUBLIEES, bacMatiereHref } from "../../lib/bacProgramme";
import { PCGE, PCGE_HUB, PCGE_ESSENTIELS, NOTES, pcgeClasseHref, pcgeCompteHref, pcgeListe, pcgeNbComptes, pcgeTitre } from "../../lib/planComptable";
import PcgeRecherche from "./PcgeRecherche";
import "./pcge.css";

// Page d'entrée du plan comptable marocain : recherche, les 8 classes, la
// lecture d'un numéro et les comptes les plus utilisés. Prérendue au build.
export const dynamic = "force-static";
export const revalidate = false;

const SITE_URL = "https://www.saadconcours.space";

// Cours qui s'appuient sur le plan comptable (liens vérifiés par l'audit de contenu).
const COURS_LIES = [
  { href: "/cours/comptagen1_cours", titre: "Comptabilité générale 1", sous: "Licence FSJES · S1" },
  { href: "/cours/comptagen2_cours", titre: "Comptabilité générale 2", sous: "Licence FSJES · S2" },
  { href: "/cours/comptasoc_cours", titre: "Comptabilité des sociétés", sous: "Licence FSJES · S4" },
];

export const metadata = {
  // + « | SaadConcours » (app/layout.js).
  title: "Plan comptable marocain (PCGE) : liste des comptes",
  description:
    "Le plan comptable marocain (PCGE) complet : les 8 classes, plus de 400 comptes avec recherche par numéro ou par nom, et les principaux comptes expliqués avec une écriture type.",
  alternates: { canonical: PCGE_HUB },
  openGraph: { title: "Plan comptable marocain (PCGE)", url: PCGE_HUB, images: ["/opengraph-image"] },
};

export default function PlanComptablePage() {
  const liste = pcgeListe().map((x) => [x.code, x.titre, pcgeCompteHref(x.code)]);
  const nbComptes = PCGE.reduce((n, c) => n + pcgeNbComptes(c), 0);
  const nbNotes = Object.keys(NOTES).length;
  const bac = BAC_MATIERES_PUBLIEES.find((m) => m.niveau === "2bac" && m.slug === "comptabilite-mathematiques-financieres");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": `${SITE_URL}${PCGE_HUB}#pcge`,
    name: "Plan comptable général des entreprises (PCGE) du Maroc",
    url: `${SITE_URL}${PCGE_HUB}`,
    inLanguage: "fr",
    hasPart: PCGE.map((c) => ({ "@type": "WebPage", name: `Classe ${c.num} : ${c.titre}`, url: `${SITE_URL}${pcgeClasseHref(c)}` })),
  };

  return (
    <>
      <JsonLd data={[jsonLd, breadcrumbJsonLd([{ name: "Plan comptable marocain", path: PCGE_HUB }])]} />
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "pcge" }) }} />
      <ChromeInit />

      <div className="bac-space">
        <div className="bac-wrap">
          <div className="bac-hero">
            <nav className="cd-breadcrumb">
              <a href="/">Accueil</a> <span>/</span> <span>Plan comptable marocain</span>
            </nav>
            <div className="bac-eyebrow">Comptabilité générale · CGNC</div>
            <h1>Plan comptable marocain (PCGE)</h1>
            <p>
              La liste complète des comptes du plan comptable général des entreprises, classe par classe, avec les comptes les plus
              utilisés expliqués et accompagnés d&apos;une écriture type. Cherche un compte par son numéro ou par son nom.
            </p>
            <div className="bac-hero-stats">
              <span className="bac-stat">
                <strong>{PCGE.length}</strong> classes
              </span>
              <span className="bac-stat">
                <strong>{nbComptes}</strong> comptes
              </span>
              <span className="bac-stat">
                <strong>{nbNotes}</strong> comptes expliqués
              </span>
            </div>
            <PcgeRecherche liste={liste} />
          </div>

          <main className="bac-main">
            <section className="pcge-section" aria-labelledby="pcge-classes">
              <h2 id="pcge-classes">Les 8 classes du plan comptable</h2>
              <p>
                Les classes 1 à 5 sont les comptes du bilan, les classes 6 et 7 ceux du compte de produits et charges (CPC), et la
                classe 8 sert à calculer les résultats. Chaque classe a sa page, avec tous ses comptes.
              </p>
              <div className="pcge-classes">
                {PCGE.map((c) => (
                  <a key={c.num} className="pcge-classe-card" href={pcgeClasseHref(c)}>
                    <span className="pcge-classe-num">{c.num}</span>
                    <span className="pcge-classe-body">
                      <span className="pcge-classe-titre">{c.titre}</span>
                      <span className="pcge-classe-resume">{c.resume}</span>
                      <span className="pcge-classe-meta">
                        {c.etat} · {pcgeNbComptes(c)} comptes
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </section>

            <section className="pcge-section" aria-labelledby="pcge-lire">
              <h2 id="pcge-lire">Comment lire un numéro de compte</h2>
              <p>
                Chaque chiffre précise le précédent. Le compte <strong>6111 Achats de marchandises</strong> se lit de gauche à droite :
              </p>
              <div className="pcge-lecture">
                <div>
                  <strong>6</strong>
                  <span>Classe : comptes de charges</span>
                </div>
                <div>
                  <strong>61</strong>
                  <span>Rubrique : charges d&apos;exploitation</span>
                </div>
                <div>
                  <strong>611</strong>
                  <span>Poste : achats revendus de marchandises</span>
                </div>
                <div>
                  <strong>6111</strong>
                  <span>Compte : achats de marchandises</span>
                </div>
              </div>
              <p>
                Les comptes à quatre chiffres sont ceux qu&apos;on utilise dans le journal. Une entreprise peut ouvrir des sous-comptes à
                cinq chiffres ou plus pour suivre le détail, comme 34552 pour la TVA récupérable sur charges. Un 9 en dernière position
                signale souvent un compte qui fonctionne à l&apos;envers des autres comptes de son poste : 1199 (perte), 6119 (rabais
                obtenus), 7119 (rabais accordés).
              </p>
            </section>

            <section className="pcge-section" aria-labelledby="pcge-essentiels">
              <h2 id="pcge-essentiels">Les comptes les plus utilisés</h2>
              <p>Ceux qui reviennent dans presque tous les exercices de comptabilité générale et les sujets de concours.</p>
              <ul className="pcge-essentiels">
                {PCGE_ESSENTIELS.map((code) => (
                  <li key={code}>
                    <a href={pcgeCompteHref(code)}>
                      <span className="pcge-code">{code}</span>
                      <span>{pcgeTitre(code)}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            <section className="pcge-section" aria-labelledby="pcge-cgnc">
              <h2 id="pcge-cgnc">Le PCGE et le CGNC</h2>
              <p>
                Le plan comptable général des entreprises fait partie du Code général de normalisation comptable (CGNC), rendu
                obligatoire par la loi 9-88 relative aux obligations comptables des commerçants. Il fixe la numérotation et
                l&apos;intitulé des comptes, et la façon de les regrouper dans les états de synthèse : bilan, CPC, état des soldes de
                gestion (ESG), tableau de financement et état des informations complémentaires (ETIC).
              </p>
              <p>
                En plus des classes 1 à 8 présentées ici, le CGNC prévoit une classe 0 pour les comptes spéciaux (engagements hors
                bilan, comme les cautions données ou reçues) et une classe 9 pour la comptabilité analytique, que chaque entreprise
                organise librement selon ses besoins.
              </p>
            </section>

            <section className="pcge-section" aria-labelledby="pcge-cours">
              <h2 id="pcge-cours">Réviser avec les cours</h2>
              <p>Le plan comptable s&apos;apprend en passant des écritures : ces cours reprennent les comptes en situation, avec des exercices corrigés.</p>
              <div className="sp-related">
                {COURS_LIES.map((c) => (
                  <a key={c.href} className="bac-mat-card" href={c.href}>
                    <span className="bac-mat-body">
                      <span className="bac-mat-name">{c.titre}</span>
                      <span className="bac-mat-meta">{c.sous}</span>
                    </span>
                  </a>
                ))}
                {bac && (
                  <a className="bac-mat-card" href={bacMatiereHref(bac)}>
                    <span className="bac-mat-body">
                      <span className="bac-mat-name">{bac.nom}</span>
                      <span className="bac-mat-meta">2ᵉ Bac Sciences économiques et gestion</span>
                    </span>
                  </a>
                )}
              </div>
              <p style={{ marginTop: 14 }}>
                <a className="sp-btn" href="/concours">
                  <Icon name="file-pen" size={18} />
                  Sujets de concours corrigés
                </a>
              </p>
            </section>
          </main>
        </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: footerHtml() }} />
    </>
  );
}
