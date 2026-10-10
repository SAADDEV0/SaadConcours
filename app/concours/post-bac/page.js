import { getPublicConcours, getCorrigeIdsLocal, getSettings } from "@/lib/store";
import AdSlot from "../../_shared/AdSlot";
import { chromeHtml, footerHtml } from "../../_shared/chrome";
import { breadcrumbJsonLd, collectionJsonLd } from "../../_shared/listingSchema";
import JsonLd from "../../_shared/JsonLd";
import { isPostBac } from "@/lib/concoursNiveaux";
import { contenuOuvert } from "@/lib/espaces";
import ConcoursListing from "../ConcoursListing";

// Même contrainte que /concours : page prérendue, servie depuis les assets
// Cloudflare sans invoquer le Worker (voir README).
export const dynamic = "force-static";
export const revalidate = false;

const PATH = "/concours/post-bac";

// Sans sujet publié, l'onglet « Concours TAFEM » de l'espace ENCG reste caché
// (lib/espaces.js) et la page n'est liée nulle part : hors de l'index, comme
// la boutique vide.
export const metadata = {
  title: "Concours ENCG (TAFEM) — Sujets réels corrigés",
  description:
    "Sujets réels du concours d'accès aux ENCG après le Bac (TAFEM) : énoncés complets, scans et corrigés indicatifs question par question, PDF gratuit.",
  alternates: { canonical: PATH },
  openGraph: { title: "Concours ENCG (TAFEM) — Sujets réels avec corrigés", url: PATH, images: ["/opengraph-image"] },
  ...(contenuOuvert("concours-post-bac") ? {} : { robots: { index: false, follow: true } }),
};

// Nombre de questions de QCM d'un énoncé : la plus grande « **Question N :** »
// ou « **N.** ».
function nbQuestions(md) {
  let max = 0;
  for (const m of String(md || "").matchAll(/\*\*(?:Question )?(\d+)\s*[.:]\s*\*\*/g)) max = Math.max(max, Number(m[1]));
  return max;
}

// Épreuves les plus fréquentes, calculées sur les sujets en base : le texte
// de la page suit les ajouts sans retouche manuelle.
function topModules(list, n = 6) {
  const counts = new Map();
  for (const c of list) for (const m of new Set(c.modules || [])) counts.set(m, (counts.get(m) || 0) + 1);
  return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "fr")).slice(0, n);
}

function buildFaq({ total, nbQcm, qcmRange, etabs, annees }) {
  return [
    {
      question: "Qu'est-ce que le TAFEM ?",
      answer:
        "C'est le test écrit du concours d'accès en première année des ENCG (Écoles nationales de commerce et de gestion), passé après le Bac. Les candidats sont d'abord présélectionnés sur leurs notes du baccalauréat, puis convoqués à l'épreuve écrite. Les séries admises, les seuils et la pondération des notes changent d'une année à l'autre : lis toujours l'avis officiel du concours.",
    },
    {
      question: "Comment se présente l'épreuve ?",
      answer: nbQcm
        ? `Sur les ${total} sujets réunis ici, ${nbQcm} prennent la forme d'un QCM (${qcmRange}). Les matières de chaque sujet sont indiquées sur sa fiche, avec l'énoncé complet et, quand il existe, le scan de l'original.`
        : `Les ${total} sujets réunis ici sont donnés en entier, avec leurs matières, l'énoncé complet et, quand il existe, le scan de l'original.`,
    },
    {
      question: "Les corrigés sont-ils officiels ?",
      answer:
        "Non. Les corrigés de SaadConcours sont indicatifs, justifiés question par question, et signalent les questions ambiguës. Aucune grille officielle n'est reprise ici.",
    },
    {
      question: "Quelles sessions sont couvertes ?",
      answer: `${annees.length ? `Les sessions ${annees.join(", ")}` : "Plusieurs sessions"}, pour ${etabs.length} établissement${etabs.length > 1 ? "s" : ""} : ${etabs.join(", ")}. La liste s'enrichit à chaque session.`,
    },
  ];
}

export default async function PostBacPage() {
  const tous = await getPublicConcours().catch(() => []);
  const settings = await getSettings().catch(() => null);
  const corrigeIds = getCorrigeIdsLocal();
  const concours = tous
    .filter(isPostBac)
    .map((c) => (!c.corrige_md && corrigeIds.has(c.id) ? { ...c, corrige_from_github: true } : c));
  const etabs = [...new Set(concours.map((c) => c.etablissement).filter(Boolean))].sort((a, b) => a.localeCompare(b, "fr"));
  const annees = [...new Set(concours.map((c) => String(c.annee)).filter((a) => /^\d{4}$/.test(a)))].sort();
  const nbCorriges = concours.filter((c) => c.corrige_md || c.corrige_from_github).length;
  const qcm = concours.map((c) => nbQuestions(c.enonce_md)).filter((n) => n > 0);
  const totalQuestions = qcm.reduce((a, b) => a + b, 0);
  const qcmRange = qcm.length ? (Math.min(...qcm) === Math.max(...qcm) ? `${qcm[0]} questions` : `de ${Math.min(...qcm)} à ${Math.max(...qcm)} questions`) : "";
  const modules = topModules(concours);
  const faqs = buildFaq({ total: concours.length, nbQcm: qcm.length, qcmRange, etabs, annees });

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Concours", path: "/concours" },
            { name: "Post-bac (ENCG)", path: PATH },
          ]),
          collectionJsonLd({
            name: "Sujets du concours d'accès aux ENCG (TAFEM)",
            description: "Sujets réels du concours d'accès aux ENCG après le Bac, avec énoncés complets et corrigés indicatifs.",
            path: PATH,
            items: concours.map((c) => ({
              name: `${c.master_reel || "TAFEM"} — ${c.etablissement} ${c.annee}`,
              path: `/concours/${encodeURIComponent(c.id)}`,
            })),
          }),
        ]}
      />
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "concours-pb" }) }} />

      <div className="bac-space">
        <div className="bac-wrap">
          <section className="bac-hero">
            <h1>Concours ENCG (TAFEM) — sujets réels</h1>
            <p>
              Les sujets du concours d&apos;accès en première année des ENCG, tels qu&apos;ils sont tombés : énoncé complet, scan de
              l&apos;original quand il existe et corrigé indicatif question par question.
            </p>
            <div className="bac-hero-stats">
              <span className="bac-stat">
                <strong>{concours.length}</strong> sujet{concours.length > 1 ? "s" : ""}
              </span>
              <span className="bac-stat">
                <strong>{nbCorriges}</strong> corrigé{nbCorriges > 1 ? "s" : ""}
              </span>
              {annees.length > 0 && (
                <span className="bac-stat">
                  <strong>{annees.length}</strong> session{annees.length > 1 ? "s" : ""}
                </span>
              )}
              {totalQuestions > 0 && (
                <span className="bac-stat">
                  <strong>{totalQuestions}</strong> questions de QCM
                </span>
              )}
            </div>
          </section>

          <ConcoursListing
            concours={concours}
            gridTitle="Sujets du concours TAFEM"
            sideLinks={[
              ...(contenuOuvert("encg-cours") ? [{ href: "/encg", label: "Cours ENCG du S1 au S10" }] : []),
              { href: "/bac/2bac", label: "Réviser le 2ᵉ Bac Éco & Gestion" },
              { href: "/evaluation", label: "QCM d'entraînement" },
            ]}
          />

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

          <AdSlot settings={settings} placement="list_bottom" />

          <section className="sp-about">
            <h2>Préparer l&apos;entrée à l&apos;ENCG avec de vrais sujets</h2>
            <p>
              Le meilleur entraînement pour le TAFEM reste les sujets des sessions passées : ils montrent le format de
              l&apos;épreuve, le rythme à tenir et les matières qui reviennent. Traite chaque sujet en temps limité, sans regarder le
              corrigé, puis compare tes réponses une à une : les justifications du corrigé expliquent la règle ou le calcul derrière
              chaque bonne réponse. Chaque fiche se télécharge en PDF, gratuitement et sans inscription.
            </p>
          </section>

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
