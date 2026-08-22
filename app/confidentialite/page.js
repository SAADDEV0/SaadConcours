export const metadata = {
  title: "Confidentialité",
  description: "Ce que SaadConcours collecte comme données et pourquoi.",
  alternates: { canonical: "/confidentialite" },
};

export default function ConfidentialitePage() {
  return (
    <div style={{ maxWidth: 680, margin: "0 auto", padding: "40px 20px 70px" }}>
      <h1 style={{ fontSize: "1.5rem" }}>Confidentialité</h1>
      <p style={{ color: "var(--text-dim)", lineHeight: 1.7 }}>
        SaadConcours est un site indépendant, sans publicité et sans compte utilisateur. Voici, simplement, ce qui
        est collecté et pourquoi.
      </p>

      <h2 style={{ fontSize: "1.1rem", marginTop: 28 }}>Ce qui est mesuré</h2>
      <p style={{ color: "var(--text-dim)", lineHeight: 1.7 }}>
        Le site compte le nombre de visites, les téléchargements de PDF et les concours les plus consultés, pour
        savoir quel contenu est utile et où concentrer les efforts de mise à jour. Ces compteurs ne contiennent ni
        nom, ni email, ni identifiant personnel — ce sont des chiffres globaux, pas des profils individuels.
        Ils sont stockés sur une base de données du site (Vercel KV) et consultables uniquement par l'administrateur.
      </p>

      <h2 style={{ fontSize: "1.1rem", marginTop: 28 }}>Cookies / stockage local</h2>
      <p style={{ color: "var(--text-dim)", lineHeight: 1.7 }}>
        Le site utilise le stockage local du navigateur (localStorage) uniquement pour retenir ton thème
        clair/sombre préféré et éviter de compter deux fois la même visite — rien n'est envoyé à un tiers
        publicitaire.
      </p>

      <h2 style={{ fontSize: "1.1rem", marginTop: 28 }}>Contenu et corrigés</h2>
      <p style={{ color: "var(--text-dim)", lineHeight: 1.7 }}>
        Les énoncés proviennent de sources publiques citées sur chaque fiche. Les corrigés, quand ils existent, sont
        rédigés par IA et signalés comme indicatifs — à vérifier avant de s'y fier pour réviser.
      </p>

      <h2 style={{ fontSize: "1.1rem", marginTop: 28 }}>Contact</h2>
      <p style={{ color: "var(--text-dim)", lineHeight: 1.7 }}>
        Une question sur ces points ou sur le contenu du site ? Passe par les réseaux sociaux listés en pied de
        page.
      </p>

      <p style={{ marginTop: 32 }}>
        <a href="/" style={{ color: "var(--accent)" }}>← Retour à l'accueil</a>
      </p>
    </div>
  );
}
