import { getPublicConcours, getCorrigeIdsLocal, getSettings } from "@/lib/store";
import AdSlot from "../../_shared/AdSlot";
import { chromeHtml, footerHtml } from "../../_shared/chrome";
import { breadcrumbJsonLd, collectionJsonLd } from "../../_shared/listingSchema";
import JsonLd from "../../_shared/JsonLd";
import { isMasterDroit } from "@/lib/concoursNiveaux";
import ConcoursListing from "../ConcoursListing";

// Masters de droit des FSJES (niveau master_droit, lib/concoursNiveaux.js) :
// même contrainte que /concours, page prérendue servie depuis les assets
// Cloudflare sans invoquer le Worker (voir README). Tous les textes de la page
// (formats d'épreuve, langues, matières, facultés) sont calculés sur les
// sujets en base : rien à retoucher quand un sujet s'ajoute.
export const dynamic = "force-static";
export const revalidate = false;

const PATH = "/concours/droit";

async function donnees() {
  const tous = await getPublicConcours().catch(() => []);
  // Corrigés présents seulement en fichier : même drapeau que sur /concours.
  const corrigeIds = getCorrigeIdsLocal();
  return tous.filter(isMasterDroit).map((c) => (!c.corrige_md && corrigeIds.has(c.id) ? { ...c, corrige_from_github: true } : c));
}

// Sans sujet publié, la page reste hors de l'index (et n'est liée nulle part :
// l'onglet « Masters de droit » n'apparaît qu'avec du contenu, lib/espaces.js).
export async function generateMetadata() {
  const concours = await donnees();
  const description =
    "Sujets réels des concours d'accès aux Masters de droit des FSJES : dissertations, cas pratiques et QCM, en français et en arabe, avec corrigés indicatifs.";
  return {
    title: "Concours Master Droit FSJES — Sujets réels",
    description,
    alternates: { canonical: PATH },
    ...(concours.length ? {} : { robots: { index: false, follow: true } }),
    // Un openGraph posé ici remplace celui de la racine, image comprise.
    openGraph: { title: "Concours Master Droit Maroc — Sujets avec corrigés", description, url: PATH, images: ["/opengraph-image"] },
  };
}

// Nombre de questions d'un QCM : la plus grande « **Question N** » ou « **N.** ».
function nbQuestions(md) {
  let max = 0;
  for (const m of String(md || "").matchAll(/\*\*(?:Question )?(\d+)\s*[.:)-]/g)) max = Math.max(max, Number(m[1]));
  return max;
}

// QCM si l'énoncé aligne au moins cinq questions à choix (lettres A, B, C…).
function estQcm(md) {
  return (String(md || "").match(/^[ \t]*[A-Da-d]\)[ \t]+\S/gm) || []).length >= 15;
}

// Matières les plus demandées, calculées sur les sujets en base.
function topModules(list, n = 8) {
  const counts = new Map();
  for (const c of list) for (const m of new Set(c.modules || [])) counts.set(m, (counts.get(m) || 0) + 1);
  return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "fr")).slice(0, n);
}

function pluriel(n, mot) {
  return `${n} ${mot}${n > 1 ? "s" : ""}`;
}

function buildFaq({ total, nbQcm, nbArabe, etabs, modules, qcmRange }) {
  const redige = total - nbQcm;
  return [
    {
      question: "Comment se déroule le concours d'accès à un master de droit ?",
      answer:
        "Le schéma est le même dans presque toutes les facultés : présélection sur dossier (licence en droit privé ou en droit public, moyennes, mentions, parcours sans redoublement), puis épreuve écrite, puis entretien oral pour les candidats retenus. Les conditions exactes, le nombre de places et le calendrier changent d'un master et d'une année à l'autre : lis toujours l'appel à candidature de la faculté.",
    },
    {
      question: "À quoi ressemble l'épreuve écrite ?",
      answer: `Sur les ${total} sujets réunis ici, ${pluriel(redige, "épreuve")} ${redige > 1 ? "sont rédigées" : "est rédigée"} (dissertation juridique, commentaire de texte ou d'arrêt, cas pratique, questions de cours) et ${pluriel(nbQcm, "QCM")}${nbQcm ? ` (${qcmRange})` : ""}. La durée va de 1 h 30 à 3 h. Le jury attend une vraie méthode : problématique, plan en deux parties, articles de loi et jurisprudence marocaine cités avec précision.`,
    },
    {
      question: "Les sujets sont-ils en français ou en arabe ?",
      answer: `Les deux : un master de la section française compose en français, un master de la section arabe en arabe. Ici, ${pluriel(nbArabe, "sujet")} sur ${total} ${nbArabe > 1 ? "sont" : "est"} en arabe ; leur corrigé est rédigé en arabe, dans la langue de la copie attendue. Certains masters ajoutent une question de langue (traduction, résumé d'un texte en anglais ou en français).`,
    },
    {
      question: "Quelles matières réviser ?",
      answer: `Celles de la licence de droit, surtout les matières de la spécialité visée. Les plus présentes dans ces sujets : ${modules.map(([m]) => m.toLowerCase()).join(", ")}. Les cours de Droit du site couvrent le programme du S1 au S4, en français et en arabe.`,
    },
    {
      question: "Les corrigés sont-ils officiels ?",
      answer:
        "Non. Aucune faculté ne publie de corrigé pour ses épreuves de master : ceux de SaadConcours sont indicatifs. Pour une dissertation ou un commentaire, ils donnent un plan détaillé avec les textes à citer ; pour un QCM, la réponse et sa justification, question par question.",
    },
    {
      question: "Quelles facultés sont couvertes ?",
      answer: `${pluriel(etabs.length, "établissement")} à ce jour : ${etabs.join(", ")}. La liste s'enrichit à chaque session.`,
    },
  ];
}

export default async function ConcoursDroitPage() {
  const concours = await donnees();
  const settings = await getSettings().catch(() => null);
  const etabs = [...new Set(concours.map((c) => c.etablissement).filter(Boolean))].sort((a, b) => a.localeCompare(b, "fr"));
  const nbVilles = new Set(concours.map((c) => c.ville).filter(Boolean)).size;
  const nbCorriges = concours.filter((c) => c.corrige_md || c.corrige_from_github).length;
  const nbArabe = concours.filter((c) => c.langue === "ar").length;
  const qcm = concours.filter((c) => estQcm(c.enonce_md)).map((c) => nbQuestions(c.enonce_md));
  const nbQcm = qcm.length;
  const qcmRange = nbQcm ? (Math.min(...qcm) === Math.max(...qcm) ? `${qcm[0]} questions` : `de ${Math.min(...qcm)} à ${Math.max(...qcm)} questions`) : "";
  const modules = topModules(concours);
  const faqs = buildFaq({ total: concours.length, nbQcm, nbArabe, etabs, modules: modules.slice(0, 6), qcmRange });

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Concours", path: "/concours" },
            { name: "Master Droit", path: PATH },
          ]),
          collectionJsonLd({
            name: "Sujets de concours d'accès aux Masters de droit au Maroc",
            description:
              "Sujets réels des concours d'accès aux Masters de droit des facultés marocaines (FSJES), en français et en arabe, avec énoncés complets et corrigés indicatifs.",
            path: PATH,
            items: concours.map((c) => ({
              name: `${c.master_reel || c.filiere || "Concours"} — ${c.etablissement} ${c.annee}`,
              path: `/concours/${encodeURIComponent(c.id)}`,
            })),
          }),
        ]}
      />
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "concours-droit" }) }} />

      <div className="bac-space">
        <div className="bac-wrap">
          <section className="bac-hero">
            <h1>Concours Master Droit FSJES — sujets réels et corrigés</h1>
            <p>
              Les épreuves écrites des concours d&apos;accès aux Masters de droit : droit des affaires, contentieux et modes
              alternatifs, droit civil, famille et immobilier, droit public. Énoncé complet, scan du sujet original et corrigé
              indicatif pour chaque session.
            </p>
            <div className="bac-hero-stats">
              <span className="bac-stat">
                <strong>{concours.length}</strong> sujets
              </span>
              <span className="bac-stat">
                <strong>{etabs.length}</strong> établissements
              </span>
              <span className="bac-stat">
                <strong>{nbVilles}</strong> villes
              </span>
              <span className="bac-stat">
                <strong>{nbCorriges}</strong> corrigés
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
            gridTitle="Sujets de Masters de droit"
            sideLinks={[
              { href: "/droit", label: "Cours de Droit FSJES (S1-S4)" },
              { href: "/concours", label: "Concours Master économie-gestion" },
              { href: "/concours/licence-excellence", label: "Concours Licence d'excellence" },
            ]}
          />

          <section className="sp-le-steps" aria-label="Déroulement du concours" style={{ marginTop: 32 }}>
            <div className="sp-le-step">
              <span className="sp-le-step-num">1</span>
              <strong>Présélection sur dossier</strong>
              <span>Licence en droit privé ou en droit public (bac+3) : moyennes, mentions et parcours sans redoublement.</span>
            </div>
            <div className="sp-le-step">
              <span className="sp-le-step-num">2</span>
              <strong>Épreuve écrite</strong>
              <span>
                Dissertation, commentaire, cas pratique{nbQcm ? ` ou QCM (${qcmRange})` : ""}, en français ou en arabe selon la
                section du master.
              </span>
            </div>
            <div className="sp-le-step">
              <span className="sp-le-step-num">3</span>
              <strong>Entretien et admission</strong>
              <span>Oral devant la commission du master, puis liste définitive et inscription.</span>
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
            <h2>Des sujets de Masters de droit, avec corrigés</h2>
            <p>
              {concours.length} sujets de concours d&apos;accès aux Masters de droit tombés dans {etabs.length} facultés
              marocaines, de {Math.min(...concours.map((c) => Number(c.annee) || 9999))} à{" "}
              {Math.max(...concours.map((c) => Number(c.annee) || 0))}. Chaque fiche donne l&apos;énoncé transcrit, le scan du sujet
              quand il existe, un corrigé indicatif (plan détaillé avec les articles de loi à citer, ou réponse justifiée pour
              chaque question de QCM) et un export PDF gratuit, sans inscription. Pour réviser, chaque fiche renvoie aux cours de
              Droit du site qui couvrent ses matières.
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
