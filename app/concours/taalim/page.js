import { getPublicConcours, getCorrigeIdsLocal, getSettings } from "@/lib/store";
import AdSlot from "../../_shared/AdSlot";
import { chromeHtml, footerHtml } from "../../_shared/chrome";
import { breadcrumbJsonLd, collectionJsonLd } from "../../_shared/listingSchema";
import JsonLd from "../../_shared/JsonLd";
import { isTaalim } from "@/lib/concoursNiveaux";
import ConcoursListing from "../ConcoursListing";

// Concours de l'enseignement, « Taalim » (niveau taalim, lib/concoursNiveaux.js) :
// même contrainte que /concours, page prérendue servie depuis les assets
// Cloudflare sans invoquer le Worker (voir README). Les textes de la page
// (cycles, langues, épreuves, sessions) sont calculés sur les sujets en base :
// rien à retoucher quand un sujet s'ajoute. Les conditions de candidature
// citées sont celles de l'avis de la session de novembre 2025 (ministère de
// l'Éducation nationale) : les retoucher quand un nouvel avis paraît.
export const dynamic = "force-static";
export const revalidate = false;

const PATH = "/concours/taalim";

async function donnees() {
  const tous = await getPublicConcours().catch(() => []);
  // Corrigés présents seulement en fichier : même drapeau que sur /concours.
  const corrigeIds = getCorrigeIdsLocal();
  return tous.filter(isTaalim).map((c) => (!c.corrige_md && corrigeIds.has(c.id) ? { ...c, corrige_from_github: true } : c));
}

// Sans sujet publié, la page reste hors de l'index (et n'est liée nulle part :
// l'espace Taalim n'apparaît qu'avec du contenu, lib/espaces.js).
export async function generateMetadata() {
  const concours = await donnees();
  const description =
    "Sujets officiels du concours Taalim (enseignement) au Maroc, en français et en arabe : énoncé complet, scan du sujet et corrigé détaillé, gratuits.";
  return {
    title: "Concours Taalim — Sujets officiels et corrigés",
    description,
    alternates: { canonical: PATH },
    ...(concours.length ? {} : { robots: { index: false, follow: true } }),
    // Un openGraph posé ici remplace celui de la racine, image comprise.
    openGraph: { title: "Concours Taalim Maroc — Sujets avec corrigés", description, url: PATH, images: ["/opengraph-image"] },
  };
}

// Nombre de questions d'un QCM : la plus grande « **Question N** », « **N.** » ou « **N)** ».
function nbQuestions(md) {
  let max = 0;
  for (const m of String(md || "").matchAll(/\*\*(?:Question )?(\d+)\s*[.:)-]\*\*/g)) max = Math.max(max, Number(m[1]));
  return max;
}

// QCM si l'énoncé aligne au moins cinq questions à choix (« A) » ou « a. »).
function estQcm(md) {
  return (String(md || "").match(/^[ \t]*[A-Da-d][).][ \t]+\S/gm) || []).length >= 15;
}

// Épreuves les plus fréquentes, calculées sur les sujets en base.
function topModules(list, n = 8) {
  const counts = new Map();
  for (const c of list) for (const m of new Set(c.modules || [])) counts.set(m, (counts.get(m) || 0) + 1);
  return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "fr")).slice(0, n);
}

function pluriel(n, mot) {
  return `${n} ${mot}${n > 1 ? "s" : ""}`;
}

// « Enseignement primaire » → « l'enseignement primaire » ; les cadres de
// soutien gardent leur intitulé.
function cycleLabel(f) {
  return /^Enseignement/.test(f) ? f.replace(/^Enseignement/, "l'enseignement") : "les cadres de soutien des académies";
}

function buildFaq({ total, nbQcm, nbArabe, cycles, modules, sessions }) {
  return [
    {
      question: "Qu'appelle-t-on le concours Taalim ?",
      answer:
        "C'est le nom courant du concours de l'enseignement public au Maroc, organisé par le ministère de l'Éducation nationale. Les sessions récentes recrutent par l'entrée au cycle de qualification des Centres régionaux des métiers de l'éducation et de la formation (CRMEF) ; les sessions de 2016 à 2021 recrutaient directement les cadres des Académies régionales (AREF). Le format des épreuves écrites est resté proche : matière de spécialité, didactique, sciences de l'éducation.",
    },
    {
      question: "Qui peut se présenter ?",
      answer:
        "Pour la session de novembre 2025, l'avis du ministère demandait la nationalité marocaine, 35 ans au plus à la date du concours et une licence : licence en éducation, licence fondamentale ou professionnelle, ou diplôme équivalent. Les candidats sont présélectionnés sur dossier, et chacun ne choisit qu'un seul cycle (primaire, collège ou lycée). Ces conditions peuvent changer d'une session à l'autre : lis toujours l'avis officiel publié sur men.gov.ma et le portail de candidature.",
    },
    {
      question: "Comment se déroulent les épreuves ?",
      answer: `Après la présélection sur dossier, une journée d'épreuves écrites, puis un entretien oral pour les admissibles. Les sujets écrits sont nationaux : le même sujet tombe dans toutes les académies. Sur les ${pluriel(total, "sujet")} réunis ici, ${pluriel(nbQcm, "épreuve")} ${nbQcm > 1 ? "sont des QCM" : "est un QCM"} et les autres demandent une rédaction (essai argumenté, analyse d'une situation, questions ouvertes).`,
    },
    {
      question: "Les sujets sont-ils en français ou en arabe ?",
      answer: `Cela dépend de l'épreuve : les matières de langue française se composent en français, la plupart des autres épreuves (sciences de l'éducation, nouveautés du système éducatif, épreuves des cadres de soutien) en arabe. Ici, ${pluriel(nbArabe, "sujet")} sur ${total} ${nbArabe > 1 ? "sont" : "est"} en arabe ; leur corrigé est rédigé en arabe, dans la langue de la copie attendue.`,
    },
    {
      question: "Quelles épreuves réviser en priorité ?",
      answer: `Celles de ton cycle, puis le tronc commun à tous : sciences de l'éducation, didactique et textes de la réforme (loi-cadre 51-17, curriculum). Les épreuves présentes dans cette base : ${modules.map(([m]) => m).join(", ")}.`,
    },
    {
      question: "Les corrigés sont-ils officiels ?",
      answer: `Non. Ce sont des corrigés proposés par SaadConcours : la réponse et sa justification pour chaque question de QCM, un plan détaillé pour une épreuve rédigée. Sessions couvertes à ce jour : ${sessions.join(", ")} ; cycles : ${cycles.map(cycleLabel).join(", ")}.`,
    },
  ];
}

export default async function ConcoursTaalimPage() {
  const concours = await donnees();
  const settings = await getSettings().catch(() => null);
  const cycles = [...new Set(concours.map((c) => c.filiere).filter(Boolean))].sort((a, b) => a.localeCompare(b, "fr"));
  const sessions = [...new Set(concours.map((c) => String(c.annee)).filter((a) => /^\d{4}$/.test(a)))].sort();
  const nbCorriges = concours.filter((c) => c.corrige_md || c.corrige_from_github).length;
  const nbArabe = concours.filter((c) => c.langue === "ar").length;
  const qcm = concours.filter((c) => estQcm(c.enonce_md)).map((c) => nbQuestions(c.enonce_md));
  const nbQcm = qcm.length;
  const qcmRange = nbQcm ? (Math.min(...qcm) === Math.max(...qcm) ? `${qcm[0]} questions` : `de ${Math.min(...qcm)} à ${Math.max(...qcm)} questions`) : "";
  const modules = topModules(concours);
  const faqs = buildFaq({ total: concours.length, nbQcm, nbArabe, cycles, modules: modules.slice(0, 8), sessions });

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Concours", path: "/concours" },
            { name: "Taalim", path: PATH },
          ]),
          collectionJsonLd({
            name: "Sujets officiels du concours de l'enseignement (Taalim) au Maroc",
            description:
              "Sujets officiels des concours de l'enseignement public au Maroc (enseignants du primaire et du secondaire, cadres de soutien des AREF), en français et en arabe, avec énoncés complets et corrigés indicatifs.",
            path: PATH,
            items: concours.map((c) => ({
              name: `${c.master_fr || c.master_reel || "Concours"} — Taalim ${c.annee}`,
              path: `/concours/${encodeURIComponent(c.id)}`,
            })),
          }),
        ]}
      />
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "concours-taalim" }) }} />

      <div className="bac-space">
        <div className="bac-wrap">
          <section className="bac-hero">
            <h1>Concours Taalim — sujets officiels et corrigés</h1>
            <p>
              Les épreuves écrites du concours de l&apos;enseignement au Maroc, pour {cycles.map(cycleLabel).join(" et ")}.
              Énoncé complet, scan du sujet officiel et corrigé indicatif pour chaque épreuve.
            </p>
            <div className="bac-hero-stats">
              <span className="bac-stat">
                <strong>{concours.length}</strong> sujets officiels
              </span>
              <span className="bac-stat">
                <strong>{nbCorriges}</strong> corrigés
              </span>
              <span className="bac-stat">
                <strong>{sessions.length}</strong> session{sessions.length > 1 ? "s" : ""}
              </span>
              {nbArabe > 0 && (
                <span className="bac-stat">
                  <strong>{nbArabe}</strong> en arabe
                </span>
              )}
            </div>
          </section>

          <ConcoursListing
            concours={concours}
            gridTitle="Sujets du concours Taalim"
            sideLinks={[
              { href: "/blog", label: "Guides de préparation" },
              { href: "/concours", label: "Concours Master économie-gestion" },
              { href: "/concours/droit", label: "Concours Master Droit" },
            ]}
          />

          <section className="sp-le-steps" aria-label="Déroulement du concours" style={{ marginTop: 32 }}>
            <div className="sp-le-step">
              <span className="sp-le-step-num">1</span>
              <strong>Candidature et présélection</strong>
              <span>Inscription en ligne sur le portail du ministère, licence exigée, présélection sur dossier, un seul cycle au choix.</span>
            </div>
            <div className="sp-le-step">
              <span className="sp-le-step-num">2</span>
              <strong>Épreuves écrites</strong>
              <span>
                Sujet national le même jour dans toutes les académies : spécialité, didactique, sciences de l&apos;éducation
                {nbQcm ? `, souvent en QCM (${qcmRange})` : ""}.
              </span>
            </div>
            <div className="sp-le-step">
              <span className="sp-le-step-num">3</span>
              <strong>Oral, puis formation</strong>
              <span>Entretien pour les admissibles, puis l&apos;année de qualification au CRMEF avant l&apos;affectation.</span>
            </div>
          </section>

          {modules.length > 0 && (
            <section className="bac-group">
              <h2 className="bac-section-title">Ce que testent les épreuves</h2>
              <div className="sp-chips sp-le-modules">
                {modules.map(([m, n]) => (
                  <span key={m} className="bac-res-chip on">
                    {m} · {pluriel(n, "sujet")}
                  </span>
                ))}
              </div>
            </section>
          )}

          <AdSlot settings={settings} placement="list_bottom" />

          {concours.length > 0 && (
            <section className="sp-about">
              <h2>Des sujets officiels du concours de l&apos;enseignement, avec corrigés</h2>
              <p>
                {pluriel(concours.length, "sujet")} officiel{concours.length > 1 ? "s" : ""} du concours de l&apos;enseignement
                public marocain, session{sessions.length > 1 ? "s" : ""} {sessions.join(", ")}, pour {cycles.map(cycleLabel).join(", ")}.
                Chaque fiche donne l&apos;énoncé transcrit, le scan du sujet original, un corrigé indicatif (réponse justifiée
                pour chaque question de QCM, plan détaillé pour une épreuve rédigée) et un export PDF gratuit, sans inscription.
              </p>
            </section>
          )}

          <section className="cd-card sp-le-faq">
            <h2>Questions fréquentes</h2>
            {faqs.map((f) => (
              <div key={f.question} className="faq-item">
                <h3 className="faq-question">{f.question}</h3>
                <p className="faq-answer">{f.answer}</p>
              </div>
            ))}
          </section>
        </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: footerHtml() }} />
    </>
  );
}
