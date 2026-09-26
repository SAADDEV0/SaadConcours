import { chromeHtml, footerHtml } from "../_shared/chrome";
import ChromeInit from "../_shared/ChromeInit";

// Static copy, prerendered — same reasoning as /faq and /confidentialite.
export const dynamic = "force-static";
export const revalidate = false;

const EMAIL = "saadconcours.space@gmail.com";
const MISE_A_JOUR = "26 septembre 2026";

export const metadata = {
  title: "Mentions légales et conditions d'utilisation",
  description:
    "Éditeur et hébergeur de SaadConcours, droits sur les sujets, cours et corrigés, demandes de retrait, limites de responsabilité et publicité.",
  alternates: { canonical: "/mentions-legales" },
};

const P = { color: "var(--text-dim)", lineHeight: 1.7 };
const H2 = { fontSize: "1.1rem", marginTop: 28 };

// Page demandée par les relecteurs (AdSense, Google) pour savoir qui répond
// du site. À tenir exacte : si l'hébergeur, l'adresse de contact ou la
// publicité changent, cette page change avec eux.
export default function MentionsLegalesPage() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "", showSearch: false }) }} />
      <ChromeInit />
      <div className="cd-view" style={{ maxWidth: 720 }}>
        <nav className="cd-breadcrumb">
          <a href="/">Accueil</a> <span>/</span> <span>Mentions légales</span>
        </nav>
        <h1 style={{ fontSize: "1.5rem", marginBottom: 6 }}>Mentions légales et conditions d&apos;utilisation</h1>
        <p style={{ ...P, fontSize: ".85rem" }}>Dernière mise à jour : {MISE_A_JOUR}</p>

        <h2 style={H2}>Éditeur du site</h2>
        <p style={P}>
          SaadConcours (www.saadconcours.space) est un site indépendant édité par Saad, à titre personnel, qui en est
          aussi le directeur de la publication. Il n&apos;est affilié à aucune université, faculté ou école. Contact :{" "}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a> ou la page <a href="/contact">Contact</a>.
        </p>

        <h2 style={H2}>Hébergement</h2>
        <p style={P}>
          Le site est hébergé par Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, États-Unis
          (cloudflare.com).
        </p>

        <h2 style={H2}>Utilisation du site</h2>
        <p style={P}>
          Le site est gratuit et consultable sans compte. Les cours, sujets, corrigés, QCM et articles sont proposés pour
          réviser et s&apos;entraîner : tu peux les lire, les télécharger en PDF et les partager pour un usage personnel
          ou pédagogique, en citant SaadConcours. Leur reproduction à des fins commerciales (revente, publication sur un
          autre site, recueil payant) demande un accord écrit préalable.
        </p>

        <h2 style={H2}>Sujets de concours et droits d&apos;auteur</h2>
        <p style={P}>
          Les sujets de concours sont des épreuves données par les établissements, qui en restent les auteurs. Ils sont
          retranscrits ici à partir de documents publics pour permettre aux candidats de s&apos;y préparer. Les cours,
          les transcriptions, les corrigés, les QCM et les articles sont rédigés pour SaadConcours.
        </p>
        <p style={P}>
          Tu es l&apos;auteur ou le titulaire des droits d&apos;un document publié ici et tu souhaites qu&apos;il soit
          retiré ou corrigé ? Écris à <a href={`mailto:${EMAIL}?subject=${encodeURIComponent("Demande de retrait")}`}>{EMAIL}</a>{" "}
          en indiquant l&apos;adresse de la page concernée : la demande est traitée en priorité et le document est retiré
          s&apos;il y a lieu.
        </p>

        <h2 style={H2}>Exactitude des contenus</h2>
        <p style={P}>
          Les corrigés sont indicatifs : ils sont rédigés avec l&apos;aide d&apos;une intelligence artificielle, puis
          vérifiés en recoupant les chiffres de l&apos;énoncé, et ne remplacent pas une correction officielle. Pour les
          dates de candidature, les conditions d&apos;admission et les résultats, seule l&apos;annonce officielle de
          l&apos;établissement fait foi. Une erreur repérée ? Elle peut être signalée depuis la page{" "}
          <a href="/contact">Contact</a> et elle est corrigée.
        </p>

        <h2 style={H2}>Publicité et liens externes</h2>
        <p style={P}>
          Le site peut afficher des annonces Google AdSense et des bannières de partenaires, signalées comme publicité ou
          « Sponsorisé ». SaadConcours ne répond pas du contenu des sites vers lesquels mènent ces annonces ou les liens
          externes.
        </p>

        <h2 style={H2}>Données personnelles</h2>
        <p style={P}>
          Ce que le site mesure, les cookies utilisés (Google Analytics, Google AdSense) et tes droits sont détaillés sur
          la page <a href="/confidentialite">Confidentialité</a>.
        </p>

        <h2 style={H2}>Droit applicable</h2>
        <p style={P}>Ces mentions et l&apos;utilisation du site sont régies par le droit marocain.</p>
      </div>
      <div dangerouslySetInnerHTML={{ __html: footerHtml() }} />
    </>
  );
}
