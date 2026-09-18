export const metadata = {
  title: "Confidentialité",
  description: "Ce que SaadConcours collecte comme données et pourquoi.",
  alternates: { canonical: "/confidentialite" },
};

const P = { color: "var(--text-dim)", lineHeight: 1.7 };
const H2 = { fontSize: "1.1rem", marginTop: 28 };

// Kept deliberately specific. The previous version described the site as
// "sans publicité" (it can serve AdSense and partner banners) and said the
// counters contained no personal identifier, while the admin panel was in
// fact logging visitor IP addresses. A privacy page that doesn't match what
// the code does is worse than none.
export default function ConfidentialitePage() {
  return (
    <div style={{ maxWidth: 680, margin: "0 auto", padding: "40px 20px 70px" }}>
      <h1 style={{ fontSize: "1.5rem" }}>Confidentialité</h1>
      <p style={P}>
        SaadConcours est un site indépendant, sans compte utilisateur. Voici, précisément, ce qui est collecté et
        pourquoi.
      </p>

      <h2 style={H2}>Ce qui est mesuré</h2>
      <p style={P}>
        Le site compte le nombre de visites, les pages consultées, les téléchargements de PDF et les concours les
        plus vus, pour savoir quel contenu est utile et où concentrer les efforts de mise à jour. Les termes tapés
        dans la recherche qui ne donnent aucun résultat sont également comptés, afin de repérer les concours qui
        manquent au catalogue. Ces compteurs sont des totaux : ils ne contiennent ni nom, ni email, ni identifiant
        de compte.
      </p>

      <h2 style={H2}>Adresse IP et ville</h2>
      <p style={P}>
        Pour chaque visite et chaque téléchargement, le site enregistre la ville approximative (fournie par
        l&apos;hébergeur Vercel à partir de l&apos;adresse IP) et une <strong>adresse IP tronquée</strong> : le
        dernier bloc est remplacé par zéro (par exemple <code>102.51.23.0</code>), ce qui permet de distinguer deux
        visiteurs sans conserver une adresse qui identifie une connexion précise. L&apos;adresse complète n&apos;est
        jamais stockée.
      </p>
      <p style={P}>
        Ce journal est une fenêtre glissante : seules les ~200 dernières entrées existent, les plus anciennes sont
        effacées automatiquement au fur et à mesure. Il est consultable uniquement depuis l&apos;espace
        d&apos;administration, protégé par mot de passe.
      </p>

      <h2 style={H2}>Alertes email</h2>
      <p style={P}>
        Si tu t&apos;inscris aux alertes « concours ouverts », ton adresse email est conservée dans la base du site
        (Vercel KV) dans le seul but de t&apos;envoyer ces alertes. Elle n&apos;est ni revendue, ni partagée, ni
        utilisée pour autre chose. Chaque email contient un lien de désinscription, et la désinscription supprime
        l&apos;adresse — elle n&apos;est pas simplement marquée comme inactive.
      </p>

      <h2 style={H2}>Publicité</h2>
      <p style={P}>
        Le site peut afficher des bannières partenaires (images hébergées par le site, qui ne déposent aucun cookie)
        et, lorsque l&apos;option est activée, des annonces Google AdSense. AdSense est un service tiers : il peut
        déposer ses propres cookies et utiliser ces données selon la politique de Google, sur laquelle
        SaadConcours n&apos;a pas la main. Seul le nombre d&apos;affichages et de clics par bannière partenaire est
        mesuré côté site, sans lien avec un visiteur en particulier.
      </p>

      <h2 style={H2}>Cookies / stockage local</h2>
      <p style={P}>
        Le site utilise le stockage local du navigateur (localStorage) pour retenir ton thème clair/sombre préféré
        et éviter de compter deux fois la même visite. Le seul cookie déposé par le site lui-même est celui de
        session de l&apos;administrateur, sur l&apos;espace <code>/admin</code> — il n&apos;existe pas pour un
        visiteur normal.
      </p>

      <h2 style={H2}>Hébergement et mesure technique</h2>
      <p style={P}>
        Le site est hébergé par Vercel, qui fournit également des mesures d&apos;audience et de performance
        agrégées (Vercel Analytics et Speed Insights). Comme tout hébergeur, Vercel traite techniquement les
        requêtes entrantes, y compris les adresses IP, pour servir les pages.
      </p>

      <h2 style={H2}>Contenu et corrigés</h2>
      <p style={P}>
        Les énoncés proviennent de sources publiques citées sur chaque fiche. Les corrigés, quand ils existent, sont
        rédigés par IA et signalés comme indicatifs — à vérifier avant de s&apos;y fier pour réviser.
      </p>

      <h2 style={H2}>Contact</h2>
      <p style={P}>
        Une question sur ces points, ou une demande de suppression de ton adresse email ? Passe par les réseaux
        sociaux listés en pied de page.
      </p>

      <p style={{ marginTop: 32 }}>
        <a href="/" style={{ color: "var(--accent)" }}>
          ← Retour à l&apos;accueil
        </a>
      </p>
    </div>
  );
}
