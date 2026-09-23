// Fully static legal copy — no data source, no reason to render per request.
// It was only dynamic because the shared chrome/footer pulls settings through
// lib/github.js, which reads with `cache: "no-store"` and drags the whole
// route out of static generation. Legal copy only changes when the file
// changes, which means a deploy — so there is nothing for ISR to revalidate.
import { chromeHtml, footerHtml } from "../_shared/chrome";
import ChromeInit from "../_shared/ChromeInit";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata = {
  title: "Confidentialité",
  description: "Ce que SaadConcours collecte comme données, les cookies de Google Analytics et AdSense, et comment t'y opposer.",
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
    <>
    <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "", showSearch: false }) }} />
    <ChromeInit />
    <div className="cd-view" style={{ maxWidth: 720 }}>
      <nav className="cd-breadcrumb">
        <a href="/">Accueil</a> <span>/</span> <span>Confidentialité</span>
      </nav>
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
        Pour chaque visite et chaque téléchargement, le site enregistre la ville approximative (déduite par
        l&apos;hébergeur à partir de l&apos;adresse IP) et une <strong>adresse IP tronquée</strong> : le
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
        Si tu t&apos;inscris aux alertes « concours ouverts », ton adresse email est conservée dans la base de
        données du site dans le seul but de t&apos;envoyer ces alertes. Elle n&apos;est ni revendue, ni partagée, ni
        utilisée pour autre chose. Chaque email contient un lien de désinscription, et la désinscription supprime
        l&apos;adresse — elle n&apos;est pas simplement marquée comme inactive.
      </p>

      <h2 style={H2}>Google Analytics</h2>
      <p style={P}>
        Le site utilise Google Analytics 4 pour mesurer son audience (pages vues, durée des visites, provenance du
        trafic, type d&apos;appareil). Google Analytics dépose ses propres cookies et traite ces données selon les{" "}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
          règles de confidentialité de Google
        </a>
        . Tu peux t&apos;y opposer avec le{" "}
        <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
          module de désactivation de Google Analytics
        </a>{" "}
        ou en bloquant les cookies tiers dans ton navigateur.
      </p>

      <h2 style={H2}>Publicité</h2>
      <p style={P}>
        Le site peut afficher des bannières partenaires (images hébergées par le site, qui ne déposent aucun cookie)
        et, lorsque l&apos;option est activée, des annonces Google AdSense. Seul le nombre d&apos;affichages et de
        clics par bannière partenaire est mesuré côté site, sans lien avec un visiteur en particulier.
      </p>
      <p style={P}>
        Pour les annonces Google : des fournisseurs tiers, dont Google, utilisent des cookies pour diffuser des
        annonces en fonction des visites précédentes d&apos;un utilisateur sur ce site ou sur d&apos;autres sites.
        Les cookies publicitaires permettent à Google et à ses partenaires d&apos;adapter les annonces diffusées en
        fonction de ces visites. Tu peux désactiver la publicité personnalisée dans les{" "}
        <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">
          paramètres des annonces Google
        </a>
        , ou désactiver les cookies de fournisseurs tiers sur{" "}
        <a href="https://www.aboutads.info/choices" target="_blank" rel="noopener noreferrer">
          aboutads.info
        </a>
        . Le détail de l&apos;usage que fait Google de ces données est expliqué sur{" "}
        <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">
          cette page de Google
        </a>
        .
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
        Le site est hébergé par Cloudflare. Comme tout hébergeur, Cloudflare traite techniquement les requêtes
        entrantes, y compris les adresses IP, pour servir les pages et protéger le site contre les abus.
      </p>

      <h2 style={H2}>Contenu et corrigés</h2>
      <p style={P}>
        Les énoncés proviennent de sources publiques citées sur chaque fiche. Les corrigés, quand ils existent, sont
        rédigés par IA et signalés comme indicatifs — à vérifier avant de s&apos;y fier pour réviser.
      </p>

      <h2 style={H2}>Contact</h2>
      <p style={P}>
        Une question sur ces points, ou une demande de suppression de ton adresse email ? Écris à{" "}
        <a href="mailto:saadconcours.space@gmail.com">saadconcours.space@gmail.com</a> ou passe par la page{" "}
        <a href="/contact">Contact</a>.
      </p>

      <p style={{ marginTop: 32 }}>
        <a href="/" style={{ color: "var(--accent)" }}>
          ← Retour à l&apos;accueil
        </a>
      </p>
    </div>
    <div dangerouslySetInnerHTML={{ __html: footerHtml() }} />
    </>
  );
}
