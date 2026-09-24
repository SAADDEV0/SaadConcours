import { getAllConcours } from "@/lib/store";
import { chromeHtml, footerHtml } from "../../_shared/chrome";
import { breadcrumbJsonLd, collectionJsonLd } from "../../_shared/listingSchema";
import { faqJsonLd } from "../../_shared/faqSchema";
import JsonLd from "../../_shared/JsonLd";
import ConcoursNiveauSwitch from "../../_shared/ConcoursNiveauSwitch";
import { isLicenceExcellence, LICENCE_EXCELLENCE } from "@/lib/concoursNiveaux";
import ConcoursListing from "../ConcoursListing";

// Même contrainte que /concours : page prérendue, servie depuis les assets
// Cloudflare sans invoquer le Worker (voir README).
export const dynamic = "force-static";
export const revalidate = false;

const PATH = "/concours/licence-excellence";

export const metadata = {
  title: "Concours Licence d'Excellence — Sujets réels",
  description:
    "Sujets réels des concours d'accès aux licences d'excellence en économie et gestion (FSJES, FP, EST) : QCM et épreuves écrites avec corrigés indicatifs, accès en S5 après le DEUG.",
  alternates: { canonical: PATH },
  openGraph: { title: "Concours Licence d'Excellence Maroc — Sujets avec corrigés", url: PATH },
};

// Nombre de questions de QCM d'un énoncé : la plus grande « **Question N :** ».
function nbQuestions(md) {
  let max = 0;
  for (const m of String(md || "").matchAll(/\*\*Question (\d+) :\*\*/g)) max = Math.max(max, Number(m[1]));
  return max;
}

// Modules les plus demandés, calculés sur les sujets réellement en base pour
// que le texte de la page suive les ajouts sans retouche manuelle.
function topModules(list, n = 6) {
  const counts = new Map();
  for (const c of list) for (const m of new Set(c.modules || [])) counts.set(m, (counts.get(m) || 0) + 1);
  return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "fr")).slice(0, n);
}

function buildFaq({ total, nbQcm, etabs, qcmRange }) {
  return [
    {
      question: "Qu'est-ce qu'une licence d'excellence ?",
      answer:
        "C'est un parcours de licence sélectif ouvert par les universités publiques marocaines (FSJES, facultés polydisciplinaires, EST) : effectifs réduits, encadrement renforcé et spécialisation professionnalisante (audit, finance, marketing digital, commerce international, management de projet…). Le diplôme obtenu est une licence, qui permet ensuite de candidater aux masters.",
    },
    {
      question: "Qui peut passer le concours d'une licence d'excellence en économie et gestion ?",
      answer:
        "En économie et gestion, la plupart des licences d'excellence recrutent en semestre 5 : les candidats titulaires d'un DEUG en sciences économiques et gestion (ou d'un bac+2 équivalent) sont présélectionnés sur dossier (moyennes, mentions, absence de redoublement), puis convoqués au test écrit. Certaines filières ajoutent un entretien oral. Les conditions exactes changent d'une faculté et d'une année à l'autre : lis toujours l'appel à candidature.",
    },
    {
      question: "Comment se déroule l'épreuve écrite ?",
      answer: `Sur les ${total} sujets réunis ici, ${nbQcm} prennent la forme d'un QCM (${qcmRange}, en 1 h à 2 h selon les facultés), souvent avec plusieurs réponses justes possibles et parfois une partie en anglais. Les autres sont des sujets de réflexion rédigés. Le programme est celui du DEUG (S1 à S4), complété par de la culture générale et du calcul mental selon les filières.`,
    },
    {
      question: "Les corrigés sont-ils officiels ?",
      answer:
        "Non. Aucune faculté ne publie de grille de réponses : les corrigés de SaadConcours sont indicatifs, justifiés question par question, et signalent les questions ambiguës ou défectueuses. Les coches visibles sur certains scans viennent de candidats, pas du jury.",
    },
    {
      question: "Quelles facultés sont couvertes ?",
      answer: `${etabs.length} établissements à ce jour : ${etabs.join(", ")}. La liste s'enrichit à chaque session.`,
    },
  ];
}

export default async function LicenceExcellencePage() {
  const tous = await getAllConcours().catch(() => []);
  const concours = tous.filter(isLicenceExcellence);
  const nbMaster = tous.length - concours.length;
  const etabs = [...new Set(concours.map((c) => c.etablissement).filter(Boolean))].sort((a, b) => a.localeCompare(b, "fr"));
  const nbEtabs = etabs.length;
  const nbVilles = new Set(concours.map((c) => c.ville).filter(Boolean)).size;
  const nbCorriges = concours.filter((c) => c.corrige_md || c.corrige_from_github).length;
  const qcm = concours.map((c) => nbQuestions(c.enonce_md)).filter((n) => n > 0);
  const nbQcm = qcm.length;
  const totalQuestions = qcm.reduce((a, b) => a + b, 0);
  const modules = topModules(concours);
  const qcmRange = nbQcm ? `de ${Math.min(...qcm)} à ${Math.max(...qcm)} questions` : "questions à choix multiples";
  const faqs = buildFaq({ total: concours.length, nbQcm, etabs, qcmRange });

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Concours", path: "/concours" },
            { name: "Licence d'excellence", path: PATH },
          ]),
          collectionJsonLd({
            name: "Sujets de concours d'accès aux licences d'excellence au Maroc",
            description:
              "Sujets réels des concours d'accès aux licences d'excellence en économie et gestion des universités marocaines, avec énoncés complets et corrigés indicatifs.",
            path: PATH,
            items: concours.map((c) => ({
              name: `${c.master_reel || c.filiere || "Concours"} — ${c.etablissement} ${c.annee}`,
              path: `/concours/${encodeURIComponent(c.id)}`,
            })),
          }),
          faqJsonLd(faqs),
        ].filter(Boolean)}
      />
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "concours-le", showSearch: true }) }} />

      <div className="bac-space site-space">
        <div className="bac-wrap">
          <ConcoursNiveauSwitch active={LICENCE_EXCELLENCE} counts={{ master: nbMaster, [LICENCE_EXCELLENCE]: concours.length }} />

          <section className="bac-hero sp-le-hero" style={{ "--hero-icon": '"⭐"' }}>
            <div className="bac-eyebrow">Licence d'excellence · Concours d'accès en S5</div>
            <h1>Concours d'accès aux Licences d'Excellence — sujets réels</h1>
            <p>
              {concours.length} sujets de concours d'accès aux licences d'excellence en économie et gestion (comptabilité
              et audit, finance et fiscalité, marketing digital, commerce international, entrepreneuriat…), tombés dans les
              facultés marocaines. Énoncés complets, scans du sujet quand ils existent, corrigés indicatifs question par
              question et export PDF gratuit, sans inscription.
            </p>
            <div className="bac-hero-stats">
              <span className="bac-stat">
                <strong>{concours.length}</strong> sujets
              </span>
              <span className="bac-stat">
                <strong>{nbEtabs}</strong> établissements
              </span>
              <span className="bac-stat">
                <strong>{nbVilles}</strong> villes
              </span>
              <span className="bac-stat">
                <strong>{nbCorriges}</strong> corrigés
              </span>
              {totalQuestions > 0 && (
                <span className="bac-stat">
                  <strong>{totalQuestions}</strong> questions de QCM
                </span>
              )}
            </div>
          </section>

          <section className="sp-le-steps" aria-label="Déroulement du concours">
            <div className="sp-le-step">
              <span className="sp-le-step-num">1</span>
              <strong>Présélection sur dossier</strong>
              <span>DEUG en économie et gestion (bac+2) : moyennes, mentions et parcours sans redoublement.</span>
            </div>
            <div className="sp-le-step">
              <span className="sp-le-step-num">2</span>
              <strong>Test écrit</strong>
              <span>
                QCM ({qcmRange}) sur le programme du DEUG, parfois en français et en anglais, ou sujet rédigé.
              </span>
            </div>
            <div className="sp-le-step">
              <span className="sp-le-step-num">3</span>
              <strong>Entretien et admission</strong>
              <span>Oral selon les filières, puis liste définitive et inscription directe en S5.</span>
            </div>
          </section>

          {modules.length > 0 && (
            <section className="bac-group">
              <h2 className="bac-section-title">Ce que testent les épreuves</h2>
              <div className="sp-chips sp-le-modules">
                {modules.map(([m, n]) => (
                  <span key={m} className="bac-res-chip on">
                    {m} · {n} sujet{n > 1 ? "s" : ""}
                  </span>
                ))}
              </div>
            </section>
          )}

          <ConcoursListing
            concours={concours}
            gridTitle="Sujets de licence d'excellence"
            sideLinks={[
              { href: "/concours", label: "Concours Master", icon: "🎓" },
              { href: "/cours", label: "Cours Licence FSJES (S1-S4)", icon: "📖" },
              { href: "/evaluation", label: "QCM d'entraînement", icon: "📝" },
              { href: "/news", label: "Concours ouverts", icon: "🆕" },
            ]}
          />

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
