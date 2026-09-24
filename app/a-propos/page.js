import { getPublicConcours, getAllCours, getAllQuiz, getAllBlog, getCorrigeIds } from "@/lib/store";
import { BAC_MATIERES } from "../../lib/bacProgramme";
import { fsjesModule } from "../../lib/fsjesChapitres";
import { chromeHtml, footerHtml } from "../_shared/chrome";
import ChromeInit from "../_shared/ChromeInit";

// Prerendered, like /faq: every admin edit commits to GitHub and redeploys,
// which rebuilds this page — so the figures below are always the live ones
// without the Worker ever rendering it per request.
export const dynamic = "force-static";
export const revalidate = false;

const SITE_URL = "https://www.saadconcours.space";

export const metadata = {
  title: "À propos",
  description:
    "Qui fait SaadConcours, ce que couvrent les cours du Bac et de la Licence FSJES, d'où viennent les sujets de concours Master, comment les corrigés sont rédigés et comment le site est tenu à jour.",
  alternates: { canonical: "/a-propos" },
};

const P = { color: "var(--text-dim)", lineHeight: 1.7 };
const H2 = { fontSize: "1.1rem", marginTop: 28 };

// Every number on this page is computed from the datasets the site actually
// serves — an About page that overstates the catalogue is exactly the kind of
// thing a quality review checks against the rest of the site.
async function getFigures() {
  const [concours, cours, quiz, blog, corrigeIds] = await Promise.all([
    getPublicConcours().catch(() => []),
    getAllCours().catch(() => []),
    getAllQuiz().catch(() => []),
    getAllBlog().catch(() => []),
    getCorrigeIds().catch(() => new Set()),
  ]);
  const annees = concours.map((c) => Number(c.annee)).filter(Boolean);
  return {
    concours: concours.length,
    // A corrigé can live only in public/data/corriges/ — see getCorrigeIds.
    corriges: concours.filter((c) => (c.corrige_md || "").trim().length > 0 || corrigeIds.has(c.id)).length,
    villes: new Set(concours.map((c) => c.ville).filter(Boolean)).size,
    etablissements: new Set(concours.map((c) => c.etablissement).filter(Boolean)).size,
    anneeMin: annees.length ? Math.min(...annees) : null,
    anneeMax: annees.length ? Math.max(...annees) : null,
    cours: cours.filter((c) => c.available).length,
    chapitresFsjes: cours.filter((c) => c.available).reduce((n, c) => n + fsjesModule(c).chapitres.length, 0),
    matieresBac: BAC_MATIERES.filter((m) => m.niveau === "2bac").length,
    chapitresBac: BAC_MATIERES.filter((m) => m.niveau === "2bac").reduce((n, m) => n + m.chapitres.length, 0),
    quiz: quiz.filter((q) => q.available).length,
    questions: quiz.filter((q) => q.available).reduce((n, q) => n + (q.questions?.length || 0), 0),
    articles: blog.filter((b) => b.available).length,
  };
}

export default async function AProposPage() {
  const f = await getFigures();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url: `${SITE_URL}/a-propos`,
    name: "À propos de SaadConcours",
    mainEntity: {
      "@type": "Organization",
      name: "SaadConcours",
      url: SITE_URL,
      email: "saadconcours.space@gmail.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "", showSearch: false }) }} />
      <ChromeInit />

      <div className="cd-view" style={{ maxWidth: 720 }}>
        <nav className="cd-breadcrumb">
          <a href="/">Accueil</a> <span>/</span> <span>À propos</span>
        </nav>

        <h1 style={{ fontSize: "1.5rem", marginBottom: 6 }}>À propos de SaadConcours</h1>
        <p style={P}>
          SaadConcours est un site indépendant consacré à l&apos;économie et à la gestion au Maroc, du lycée au
          master : des cours du Bac Sciences Économiques et Gestion et de la Licence FSJES rédigés chapitre par
          chapitre, avec exercices corrigés, résumés et QCM, et les sujets réels des concours d&apos;accès aux
          masters — FSJES, ENCG, facultés polydisciplinaires — pour s&apos;y préparer.
        </p>

        <h2 style={H2}>Pourquoi ce site existe</h2>
        <p style={P}>
          Quand on prépare un concours de master au Maroc, les anciens sujets sont la ressource la plus utile… et la
          plus difficile à trouver. Ils circulent en photos floues sur des groupes Facebook et WhatsApp, sans année,
          sans faculté, souvent incomplets, et presque jamais corrigés. SaadConcours part de ce constat : retrouver
          ces sujets, les retranscrire proprement, les classer, et y ajouter une correction quand c&apos;est
          possible — pour qu&apos;un étudiant de licence puisse s&apos;entraîner sur ce qui tombe vraiment, au lieu
          de réviser au hasard.
        </p>

        <h2 style={H2}>Ce que tu trouves ici</h2>
        <ul style={{ ...P, paddingLeft: 20 }}>
          <li>
            <a href="/concours">{f.concours} sujets de concours</a>
            {f.anneeMin && f.anneeMax ? ` (de ${f.anneeMin} à ${f.anneeMax})` : ""}, provenant de{" "}
            {f.etablissements} établissements dans {f.villes} villes, retranscrits en texte et accompagnés du scan
            original quand il existe ;
          </li>
          <li>{f.corriges} corrigés détaillés, rédigés sujet par sujet ;</li>
          <li>
            les <a href="/bac/2bac">cours du 2ᵉ Bac Sciences Économiques et Gestion</a> : {f.matieresBac} matières
            et {f.chapitresBac} chapitres, avec cours, exercices, résumé et QCM ;
          </li>
          <li>
            les <a href="/cours">cours de Licence FSJES</a> : {f.cours} modules du S1 au S6 découpés en{" "}
            {f.chapitresFsjes} chapitres, chacun avec son cours, ses exercices corrigés, son résumé et son QCM ;
          </li>
          <li>
            <a href="/evaluation">{f.quiz} QCM d&apos;auto-évaluation</a> totalisant {f.questions} questions
            corrigées ;
          </li>
          <li>
            <a href="/blog">{f.articles} articles</a> de méthode : déroulement du concours, choix du master,
            dossier de candidature, oral ;
          </li>
          <li>
            la liste des <a href="/news">concours actuellement ouverts</a>, avec les dates limites et les liens
            d&apos;inscription officiels.
          </li>
        </ul>

        <h2 style={H2}>D&apos;où viennent les sujets</h2>
        <p style={P}>
          Chaque sujet provient d&apos;une source publique — site d&apos;une faculté, page d&apos;une association
          d&apos;étudiants, archive partagée par des candidats — citée sur la fiche du concours. Le sujet est
          retranscrit à partir du document d&apos;origine (tableaux, formules et énoncés compris), puis classé par
          année, ville, établissement, filière et modules concernés, pour pouvoir filtrer exactement ce qu&apos;on
          cherche. Quand un passage est illisible sur la source, la fiche le dit au lieu de deviner.
        </p>

        <h2 style={H2}>Comment les corrigés sont rédigés</h2>
        <p style={P}>
          Les facultés ne publient presque jamais de corrigé officiel. Les corrigés de SaadConcours sont donc rédigés
          avec l&apos;aide d&apos;une intelligence artificielle, à partir du scan réel et de sa transcription, puis
          vérifiés en recoupant les chiffres avec ceux de l&apos;énoncé (totaux d&apos;un bilan, cohérence d&apos;un
          calcul d&apos;annuité, etc.). Ils sont signalés comme tels, avec un bandeau sur chaque corrigé : ce sont
          des corrections indicatives pour s&apos;entraîner, pas des barèmes officiels. Toute donnée manquante dans
          la source est indiquée explicitement plutôt qu&apos;inventée.
        </p>

        <h2 style={H2}>Comment le site est tenu à jour</h2>
        <p style={P}>
          Les nouveaux sujets sont ajoutés au fil des sessions de concours, et les fiches existantes sont corrigées
          quand une erreur est signalée. La liste des concours ouverts est actualisée tous les deux jours à partir des
          annonces publiées en ligne, et chaque annonce renvoie vers la page officielle de l&apos;établissement :
          c&apos;est toujours elle qui fait foi pour les dates et les conditions.
        </p>

        <h2 style={H2}>Ce que SaadConcours n&apos;est pas</h2>
        <p style={P}>
          Le site n&apos;est affilié à aucune université ni à aucun établissement. Il ne gère aucune candidature et
          ne demande aucun paiement : tout le contenu est en accès libre. Le site peut afficher de la publicité pour
          couvrir ses frais — voir la page <a href="/confidentialite">Confidentialité</a>.
        </p>

        <h2 style={H2}>Une erreur, un sujet à proposer ?</h2>
        <p style={P}>
          Si tu repères une erreur dans un énoncé ou un corrigé, ou si tu as un sujet de concours qui n&apos;est pas
          encore sur le site, écris-nous depuis la page <a href="/contact">Contact</a>. Chaque signalement est lu,
          et c&apos;est ce qui permet au catalogue de s&apos;améliorer.
        </p>
      </div>

      <div dangerouslySetInnerHTML={{ __html: footerHtml() }} />
    </>
  );
}
