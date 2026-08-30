import { chromeHtml, footerHtml } from "../_shared/chrome";
import ChromeInit from "../_shared/ChromeInit";

const SITE_URL = "https://www.saadconcours.space";

const FAQ = [
  {
    q: "Comment se déroule le concours d'accès à un master au Maroc ?",
    a: "Après une présélection sur dossier (moyenne de licence, filière), les facultés organisent un concours écrit dans les matières de la spécialité visée (comptabilité, analyse financière, fiscalité, contrôle de gestion...), parfois suivi d'un entretien oral selon les établissements. Le format exact (QCM, cas pratiques, durée) varie d'une faculté à l'autre.",
  },
  {
    q: "Quelles sont les conditions pour s'inscrire à un master au Maroc ?",
    a: "En général : une licence fondamentale ou professionnelle en économie, gestion ou finance (ou un diplôme équivalent — ENCG, ISCAE, licence étrangère), avec parfois une moyenne minimale exigée. Les conditions précises (pièces à fournir, dates, moyenne requise) sont fixées par chaque établissement et publiées sur son site — c'est ce que la page Concours ouverts de SaadConcours recense au fur et à mesure.",
  },
  {
    q: "C'est quoi la différence entre les masters CCA, GFCF, Finance, Fiscalité et Audit ?",
    a: "Ce sont tous des masters spécialisés en économie-gestion, avec un cœur commun (comptabilité, analyse financière) mais un angle différent : CCA (Comptabilité Contrôle Audit) et Audit insistent sur le contrôle et la certification des comptes, GFCF (Gestion Financière et Comptable des Entreprises) et Finance sur la gestion financière d'entreprise, Fiscalité sur le droit fiscal et l'optimisation fiscale. Les matières du concours d'accès se recoupent beaucoup d'une filière à l'autre.",
  },
  {
    q: "Les corrigés sur SaadConcours sont-ils fiables ?",
    a: "Les corrigés disponibles sont indicatifs — générés puis relus, mais sans garantie de relecture humaine systématique. Ils sont pensés pour t'aider à comprendre une démarche de résolution, pas comme une source officielle : vérifie toujours les calculs avant de t'y fier pour réviser sérieusement.",
  },
  {
    q: "SaadConcours est-il vraiment gratuit ?",
    a: "Oui, entièrement — pas de compte utilisateur, pas de paywall, pas de publicité. C'est un site indépendant, pas affilié à une université ou un établissement.",
  },
  {
    q: "Comment être alerté quand un nouveau concours ouvre ?",
    a: "La page Concours ouverts liste en continu les masters actuellement ouverts aux inscriptions (mise à jour automatique toutes les ~6h). Tu peux aussi laisser ton email pour recevoir une alerte quand un concours qui t'intéresse approche de sa date limite.",
  },
  {
    q: "Comment bien réviser pour un concours d'accès au master ?",
    a: "Commence par des annales réelles (pas seulement des fiches de cours) pour repérer le format exact utilisé par l'établissement visé, entraîne-toi en conditions chronométrées, et priorise les matières qui reviennent le plus souvent plutôt que de réviser à l'aveugle — c'est l'approche qu'on détaille avec des chiffres réels sur le blog.",
  },
];

export const metadata = {
  title: "Questions fréquentes — Concours d'accès aux Masters au Maroc",
  description:
    "Réponses aux questions les plus courantes sur le concours d'accès aux masters économie-gestion au Maroc : déroulement, conditions, corrigés, alertes.",
  alternates: { canonical: "/faq" },
  openGraph: { title: "Questions fréquentes — SaadConcours", url: "/faq" },
};

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Questions fréquentes", item: `${SITE_URL}/faq` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "faq", showSearch: false }) }} />
      <ChromeInit />

      <div className="cd-view">
        <nav className="cd-breadcrumb">
          <a href="/">Accueil</a> <span>/</span> <span>Questions fréquentes</span>
        </nav>

        <h1 style={{ fontSize: "1.4rem", marginBottom: 6 }}>Questions fréquentes</h1>
        <p style={{ color: "var(--text-dim)", marginBottom: 22 }}>
          Sur le concours d'accès aux masters économie-gestion au Maroc et sur SaadConcours.
        </p>

        <div className="cd-card">
          {FAQ.map((f) => (
            <details key={f.q} className="faq-item">
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>

        <p style={{ marginTop: 24, color: "var(--text-dim)" }}>
          Une autre question ? Passe par les réseaux sociaux listés en pied de page, ou consulte la page{" "}
          <a href="/confidentialite">Confidentialité</a>.
        </p>
      </div>

      <div dangerouslySetInnerHTML={{ __html: footerHtml() }} />
    </>
  );
}
