import { chromeHtml, footerHtml } from "../_shared/chrome";
import ChromeInit from "../_shared/ChromeInit";

// Static copy, prerendered — same reasoning as /faq and /confidentialite.
export const dynamic = "force-static";
export const revalidate = false;

const EMAIL = "saadconcours.space@gmail.com";

export const metadata = {
  title: "Contact",
  description:
    "Contacter SaadConcours : signaler une erreur dans un sujet ou un corrigé, proposer un sujet de concours, ou poser une question.",
  alternates: { canonical: "/contact" },
};

const P = { color: "var(--text-dim)", lineHeight: 1.7 };
const H2 = { fontSize: "1.1rem", marginTop: 28 };

// Pre-filled subjects so the inbox can be triaged at a glance — and so the
// visitor doesn't have to wonder what to write.
function mailto(subject) {
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`;
}

export default function ContactPage() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "", showSearch: false }) }} />
      <ChromeInit />

      <div className="cd-view" style={{ maxWidth: 720 }}>
        <nav className="cd-breadcrumb">
          <a href="/">Accueil</a> <span>/</span> <span>Contact</span>
        </nav>

        <h1 style={{ fontSize: "1.5rem", marginBottom: 6 }}>Contact</h1>
        <p style={P}>
          Le moyen le plus simple de nous joindre est l&apos;email :{" "}
          <a href={`mailto:${EMAIL}`}>
            <strong>{EMAIL}</strong>
          </a>
          . On répond généralement sous quelques jours.
        </p>

        <h2 style={H2}>Signaler une erreur</h2>
        <p style={P}>
          Un chiffre faux dans un énoncé, une étape douteuse dans un corrigé, une date de concours dépassée ?
          Indique le lien de la page concernée et ce qui ne va pas.{" "}
          <a href={mailto("Erreur sur SaadConcours")}>Signaler une erreur</a>
        </p>

        <h2 style={H2}>Proposer un sujet de concours</h2>
        <p style={P}>
          Tu as passé un concours de master et tu as gardé le sujet, ou tu en as trouvé un qui n&apos;est pas encore
          sur le site ? Envoie une photo ou un PDF, avec l&apos;année, la faculté et le master concerné. Il sera
          retranscrit, classé et, si possible, corrigé.{" "}
          <a href={mailto("Proposition de sujet de concours")}>Proposer un sujet</a>
        </p>

        <h2 style={H2}>Demander le retrait d&apos;un document</h2>
        <p style={P}>
          Tu es l&apos;auteur ou le titulaire des droits d&apos;un sujet, d&apos;un scan ou d&apos;un texte publié ici ?
          Indique l&apos;adresse de la page concernée : la demande est traitée en priorité (voir les{" "}
          <a href="/mentions-legales">mentions légales</a>).{" "}
          <a href={mailto("Demande de retrait")}>Demander un retrait</a>
        </p>

        <h2 style={H2}>Données personnelles</h2>
        <p style={P}>
          Pour faire supprimer ton adresse des anciennes alertes email, ou pour toute autre demande liée à tes données,
          écris à la même adresse — le détail de ce qui est collecté et de tes droits est sur la page{" "}
          <a href="/confidentialite">Confidentialité</a>.
        </p>

        <h2 style={H2}>Avant d&apos;écrire</h2>
        <p style={P}>
          SaadConcours n&apos;est affilié à aucune faculté : pour une question sur ta propre candidature (dossier,
          résultats, convocation), seul l&apos;établissement peut te répondre. Beaucoup de questions courantes sont
          déjà traitées dans la <a href="/faq">FAQ</a>.
        </p>
      </div>

      <div dangerouslySetInnerHTML={{ __html: footerHtml() }} />
    </>
  );
}
