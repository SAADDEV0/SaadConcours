import { getPublicConcours, getAllCours, getAllEncg, getAllQuiz, getAllBlog } from "@/lib/store";
import { chromeHtml, footerHtml } from "../_shared/chrome";
import { isLicenceExcellence, isPostBac } from "@/lib/concoursNiveaux";
import { encgModule, encgModuleHref, encgChapitreHref, isEncgPublie } from "../../lib/encg";
import { encgSemestreLabel } from "../../lib/encgTaxonomy";
import { contenuOuvert } from "../../lib/espaces";
import { categoryLabel } from "../../lib/blogTaxonomy";
import { BAC_MATIERES, bacMatiereHref, bacChapitreHref } from "../../lib/bacProgramme";
import { licenceSemestreLabel } from "../../lib/coursTaxonomy";
import { fsjesModule, fsjesChapitreHref } from "../../lib/fsjesChapitres";
import RechercheClient from "./RechercheClient";
import { Icon } from "../_shared/icons";

// Recherche dans tout le site : sujets de concours, cours (modules, matières,
// chapitres), QCM et articles. Page statique : l'index est calculé au build
// et posé dans la page (~100 Ko avant compression, une vingtaine après) ; la
// recherche elle-même se fait dans le navigateur, sans appeler le Worker.
export const dynamic = "force-static";
export const revalidate = false;

export const metadata = {
  title: "Rechercher un concours, un cours ou un QCM",
  description: "Recherche dans tous les sujets de concours, cours du Bac et de la Licence FSJES, QCM et articles de SaadConcours.",
  alternates: { canonical: "/recherche" },
  // Page d'outil : utile aux visiteurs, sans contenu propre à indexer.
  robots: { index: false, follow: true },
};

// Entrée d'index : k = famille, t = titre, s = sous-titre affiché, u = lien,
// x = texte cherché en plus (non affiché).
// Recherches proposées tant que le champ est vide.
const SUGGESTIONS = ["CCA", "Finance", "Audit", "Marketing", "Agadir", "Casablanca", "Rabat", "Comptabilité générale", "Macroéconomie", "2025"];

function entree(k, t, s, u, x = "") {
  return { k, t, s, u, ...(x ? { x } : {}) };
}

export default async function RecherchePage() {
  const [concours, cours, encg, quiz, blog] = await Promise.all([
    getPublicConcours().catch(() => []),
    getAllCours().catch(() => []),
    getAllEncg().catch(() => []),
    getAllQuiz().catch(() => []),
    getAllBlog().catch(() => []),
  ]);

  const index = [];
  for (const c of concours) {
    const lieu = [c.etablissement, c.ville && !String(c.etablissement || "").includes(c.ville) ? c.ville : ""].filter(Boolean).join(", ");
    index.push(
      entree(
        "concours",
        c.master_reel || c.filiere || `${c.etablissement} — ${c.ville}`,
        `${lieu} · ${c.annee}${isLicenceExcellence(c) ? " · Licence d'excellence" : isPostBac(c) ? " · Concours post-bac" : ""}`,
        `/concours/${encodeURIComponent(c.id)}`,
        [c.filiere, ...(c.modules || []), isLicenceExcellence(c) ? "licence excellence" : isPostBac(c) ? "post bac encg tafem" : "master"].filter(Boolean).join(" ")
      )
    );
  }
  for (const c of cours.filter((x) => x.available)) {
    const { chapitres } = fsjesModule(c);
    const sem = c.semestre ? licenceSemestreLabel(c.semestre) : "";
    index.push(entree("cours", c.module, ["Licence FSJES", sem, `${chapitres.length} chapitres`].filter(Boolean).join(" · "), `/cours/${encodeURIComponent(c.id)}`, c.description || ""));
    for (const ch of chapitres) {
      index.push(entree("chapitre", ch.titre, `${c.module} · Chapitre ${ch.numero}`, fsjesChapitreHref(c, ch)));
    }
  }
  for (const c of encg.filter(isEncgPublie)) {
    const { chapitres } = encgModule(c);
    index.push(entree("cours", c.module, ["ENCG", encgSemestreLabel(c.semestre), `${chapitres.length} chapitres`].filter(Boolean).join(" · "), encgModuleHref(c), [c.description, c.option, "encg"].filter(Boolean).join(" ")));
    for (const ch of chapitres) {
      index.push(entree("chapitre", ch.titre, `${c.module} · ENCG · Chapitre ${ch.numero}`, encgChapitreHref(c, ch)));
    }
  }
  for (const m of BAC_MATIERES.filter((x) => x.niveau === "2bac")) {
    index.push(entree("cours", m.nom, `2ᵉ Bac SEG · ${m.chapitres.length} chapitres`, bacMatiereHref(m), m.description || ""));
    for (const ch of m.chapitres) {
      index.push(entree("chapitre", ch.titre, `${m.court || m.nom} · 2ᵉ Bac · Chapitre ${ch.numero}`, bacChapitreHref(m, ch)));
    }
  }
  for (const q of quiz.filter((x) => x.available)) {
    index.push(entree("qcm", q.title, `${(q.questions || []).length} questions corrigées`, `/evaluation/${encodeURIComponent(q.id)}`, q.module || ""));
  }
  for (const p of blog.filter((x) => x.available)) {
    index.push(entree("article", p.title, categoryLabel(p.category), `/blog/${encodeURIComponent(p.id)}`, p.excerpt || ""));
  }

  const nbConcours = index.filter((e) => e.k === "concours").length;
  const nbCours = index.filter((e) => e.k === "cours").length;
  const nbChapitres = index.filter((e) => e.k === "chapitre").length;

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "recherche" }) }} />

      <div className="bac-space">
        <div className="bac-wrap" style={{ maxWidth: 820 }}>
          <h1 className="sr-only">Rechercher sur SaadConcours</h1>
          <form className="sr-form" role="search" id="srForm" action="/recherche" method="get">
            <Icon name="search" size={19} />
            <input
              type="search"
              name="q"
              id="srInput"
              placeholder="Concours, cours, chapitre, faculté, ville…"
              aria-label="Rechercher dans tout le site"
              autoComplete="off"
              enterKeyHint="search"
            />
          </form>
          <div className="sr-status" id="srStatus" aria-live="polite" />
          {/* État sans recherche, rendu au serveur : de quoi s'orienter (et une
             vraie page pour les robots). RechercheClient le reprend tel quel
             quand le champ est vide. */}
          <div id="srResults">
            <div className="sr-group">
              <div className="sr-group-head">
                <h2>Souvent cherché</h2>
              </div>
              <div className="home-suggest" style={{ margin: 0 }}>
                {SUGGESTIONS.map((q) => (
                  <a key={q} href={`/recherche?q=${encodeURIComponent(q)}`} data-q={q}>
                    {q}
                  </a>
                ))}
              </div>
            </div>
            <div className="sr-group">
              <div className="sr-group-head">
                <h2>Comment chercher</h2>
              </div>
              <p className="sr-help">
                Tape le nom d&apos;un master (CCA, Finance, Audit, GRH, Marketing), d&apos;une faculté (FSJES Aïn
                Chock, ENCG Settat), d&apos;une ville ou d&apos;une année : la recherche couvre les {nbConcours} sujets
                de concours, les {nbCours} cours du Bac et de la Licence FSJES et leurs {nbChapitres} chapitres, les QCM
                d&apos;entraînement et les articles du blog. Plusieurs mots se combinent : « CCA Agadir 2023 » ne garde
                que les sujets qui contiennent les trois. Les accents et les majuscules ne comptent pas, et les petits
                mots (« de », « la », « du ») sont ignorés. Pour un cours, cherche une notion du programme : « bilan »,
                « TVA », « amortissement », « élasticité ».
              </p>
            </div>
            <div className="sr-group">
              <div className="sr-group-head">
                <h2>Parcourir</h2>
              </div>
              <div className="home-links">
                <a className="home-link" href="/concours">
                  <strong>Concours Master</strong>
                  <span>Tous les sujets, par ville et filière</span>
                </a>
                <a className="home-link" href="/concours/licence-excellence">
                  <strong>Licence d&apos;excellence</strong>
                  <span>Concours d&apos;accès en S5</span>
                </a>
                {contenuOuvert("concours-post-bac") && (
                  <a className="home-link" href="/concours/post-bac">
                    <strong>Concours ENCG (TAFEM)</strong>
                    <span>Sujets d&apos;accès après le Bac</span>
                  </a>
                )}
                {contenuOuvert("encg-cours") && (
                  <a className="home-link" href="/encg">
                    <strong>Cours ENCG</strong>
                    <span>Modules du S1 au S10</span>
                  </a>
                )}
                <a className="home-link" href="/cours">
                  <strong>Cours Licence FSJES</strong>
                  <span>Modules du S1 au S6</span>
                </a>
                <a className="home-link" href="/bac/2bac">
                  <strong>Cours 2ᵉ Bac SEG</strong>
                  <span>Toutes les matières</span>
                </a>
                <a className="home-link" href="/evaluation">
                  <strong>QCM d&apos;entraînement</strong>
                  <span>Concours blancs corrigés</span>
                </a>
                <a className="home-link" href="/blog">
                  <strong>Blog</strong>
                  <span>Méthode et orientation</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: footerHtml() }} />

      <RechercheClient index={index} />
    </>
  );
}
