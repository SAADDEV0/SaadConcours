import { getPublicConcours, getCorrigeIdsLocal, getSettings } from "@/lib/store";
import AdSlot from "../../_shared/AdSlot";
import { chromeHtml, footerHtml } from "../../_shared/chrome";
import { breadcrumbJsonLd, collectionJsonLd } from "../../_shared/listingSchema";
import JsonLd from "../../_shared/JsonLd";
import { isCnaem, optionCnaem } from "@/lib/concoursNiveaux";
import ConcoursListing from "../ConcoursListing";

// Sujets du CNAEM (concours national d'accès aux écoles de management), passé
// en fin de classe prépa ECT ou ECS. Même contrainte que /concours : page
// prérendue, servie depuis les assets Cloudflare sans invoquer le Worker.
export const dynamic = "force-static";
export const revalidate = false;

const PATH = "/concours/cnaem";

export const metadata = {
  title: "Concours CNAEM : sujets ECT et ECS avec corrigés",
  description:
    "Sujets réels du CNAEM (accès aux ENCG après la prépa ECT ou ECS) : économie-droit, gestion-management, mathématiques, avec corrigés détaillés.",
  alternates: { canonical: PATH },
  // Un openGraph posé ici remplace celui de la racine, image comprise.
  openGraph: { title: "Concours CNAEM : sujets ECT et ECS avec corrigés", url: PATH, images: ["/opengraph-image"] },
};

// Épreuves écrites et coefficients, notice officielle du CNAEM, session 2024
// (total 30 dans chaque option). À revoir à chaque nouvelle notice.
const NOTICE = "2024";
const EPREUVES = {
  ECT: [
    { nom: "Gestion, management et informatique", duree: "4 h", coef: 8 },
    { nom: "Mathématiques", duree: "4 h", coef: 6 },
    { nom: "Économie-droit", duree: "4 h", coef: 6 },
    { nom: "Dissertation de culture générale", duree: "3 h", coef: 3 },
    { nom: "Anglais", duree: "2 h", coef: 3 },
    { nom: "Résumé de texte", duree: "2 h", coef: 2 },
    { nom: "Culture arabe et traduction", duree: "2 h", coef: 2 },
  ],
  ECS: [
    { nom: "Mathématiques et informatique", duree: "4 h", coef: 10 },
    { nom: "L'entreprise et son environnement", duree: "4 h", coef: 5 },
    { nom: "Histoire, géographie et géopolitique du monde contemporain", duree: "4 h", coef: 5 },
    { nom: "Dissertation de culture générale", duree: "3 h", coef: 3 },
    { nom: "Anglais", duree: "2 h", coef: 3 },
    { nom: "Résumé de texte", duree: "2 h", coef: 2 },
    { nom: "Culture arabe et traduction", duree: "2 h", coef: 2 },
  ],
};

function compte(list, f) {
  const m = new Map();
  for (const c of list) {
    const k = f(c);
    if (k) m.set(k, (m.get(k) || 0) + 1);
  }
  return [...m.entries()].sort((a, b) => b[1] - a[1] || String(a[0]).localeCompare(String(b[0]), "fr"));
}

function buildFaq({ total, anneeMin, anneeMax, options }) {
  return [
    {
      question: "Qu'est-ce que le CNAEM ?",
      answer:
        "Le Concours national d'accès aux écoles de management (CNAEM) est le concours que passent, en fin de deuxième année, les élèves des classes préparatoires économiques et commerciales (CPGE), option technologique (ECT) ou scientifique (ECS). Il ouvre l'accès en première année du cycle grande école des douze ENCG et de deux écoles privées associées (ESCA et Rabat Business School) : 1 240 places à la session 2024.",
    },
    {
      question: "Comment se déroule le concours ?",
      answer:
        "Trois jours d'écrits en mai (admissibilité), puis des oraux en juin (admission) : un entretien individuel sur le projet du candidat, un entretien sur un texte de presse tiré au sort et un entretien en anglais. Depuis 2024, une note minimale (seuil pédagogique) est exigée dans plusieurs épreuves écrites pour être admissible. Les places sont ensuite attribuées en ligne selon le classement et les vœux.",
    },
    {
      question: "Quelles sont les épreuves écrites de l'option ECT ?",
      answer:
        "Gestion, management et informatique (4 h, coefficient 8), mathématiques (4 h, coefficient 6) et économie-droit (4 h, coefficient 6), plus les épreuves communes aux deux options : dissertation de culture générale (3 h, coefficient 3), anglais (2 h, coefficient 3), résumé de texte (2 h, coefficient 2) et culture arabe et traduction (2 h, coefficient 2). Ce sont les chiffres de la notice de la session 2024.",
    },
    {
      question: "Quels sujets trouve-t-on ici ?",
      answer: `${total} sujets des sessions ${anneeMin} à ${anneeMax}, ${options}, transcrits en entier, avec annexes et tableaux. On commence par les trois épreuves propres à l'option ECT ; les épreuves de l'option ECS suivront.`,
    },
    {
      question: "Les corrigés sont-ils officiels ?",
      answer:
        "Non. Le CNAEM ne publie pas de corrigé. Ceux de SaadConcours sont indicatifs : calculs posés et vérifiés, plans détaillés pour la note de synthèse et la réflexion argumentée, articles de loi cités pour le cas de droit. Les règles de droit marocain sont celles en vigueur à la date du sujet : quand un texte a changé depuis, le corrigé le signale.",
    },
  ];
}

export default async function CnaemPage() {
  const tous = await getPublicConcours().catch(() => []);
  const settings = await getSettings().catch(() => null);
  const corrigeIds = getCorrigeIdsLocal();
  const concours = tous
    .filter(isCnaem)
    .map((c) => (!c.corrige_md && corrigeIds.has(c.id) ? { ...c, corrige_from_github: true } : c));
  const nbCorriges = concours.filter((c) => c.corrige_md || c.corrige_from_github).length;
  const annees = concours.map((c) => Number(c.annee)).filter((n) => n > 1990);
  const anneeMin = annees.length ? Math.min(...annees) : "";
  const anneeMax = annees.length ? Math.max(...annees) : "";
  const epreuves = compte(concours, (c) => c.epreuve);
  const options = compte(concours, (c) => optionCnaem(c).court);
  const optionsTexte = options.map(([o, n]) => `${n} en option ${o}`).join(" et ");
  const faqs = buildFaq({ total: concours.length, anneeMin, anneeMax, options: optionsTexte });

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Concours", path: "/concours" },
            { name: "CNAEM", path: PATH },
          ]),
          collectionJsonLd({
            name: "Sujets du concours CNAEM (classes prépa ECT et ECS)",
            description:
              "Sujets réels du Concours national d'accès aux écoles de management (CNAEM), options ECT et ECS, avec énoncés complets et corrigés indicatifs.",
            path: PATH,
            items: concours.map((c) => ({
              name: `CNAEM ${c.annee} ${optionCnaem(c).court} — ${c.epreuve || c.master_reel}`,
              path: `/concours/${encodeURIComponent(c.id)}`,
            })),
          }),
        ]}
      />
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "concours-cnaem" }) }} />

      <div className="bac-space">
        <div className="bac-wrap">
          <section className="bac-hero">
            <h1>Concours CNAEM : sujets ECT et ECS avec corrigés</h1>
            <div className="bac-hero-stats">
              <span className="bac-stat">
                <strong>{concours.length}</strong> sujets
              </span>
              <span className="bac-stat">
                <strong>{epreuves.length}</strong> épreuves
              </span>
              {anneeMin && (
                <span className="bac-stat">
                  <strong>
                    {anneeMin}–{anneeMax}
                  </strong>{" "}
                  sessions
                </span>
              )}
              <span className="bac-stat">
                <strong>{nbCorriges}</strong> corrigés
              </span>
            </div>
          </section>

          <ConcoursListing
            concours={concours}
            gridTitle="Sujets du CNAEM"
            sideLinks={[
              { href: "/cours/introeco_cours", label: "Réviser l'économie générale" },
              { href: "/cours/droitaffaires_cours", label: "Réviser le droit des affaires" },
              { href: "/cours/comptaana_cours", label: "Réviser la comptabilité analytique" },
              { href: "/cours/analysefin_cours", label: "Réviser l'analyse financière" },
            ]}
          />

          {epreuves.length > 0 && (
            <section className="bac-group">
              <h2 className="bac-section-title">Les épreuves réunies ici</h2>
              <div className="sp-chips sp-le-modules">
                {epreuves.map(([e, n]) => (
                  <span key={e} className="bac-res-chip on">
                    {e} · {n} sujet{n > 1 ? "s" : ""}
                  </span>
                ))}
              </div>
            </section>
          )}

          <section className="cd-card" style={{ marginTop: 24 }}>
            <h2>Épreuves écrites et coefficients (notice {NOTICE})</h2>
            {Object.entries(EPREUVES).map(([opt, liste]) => (
              <div key={opt} style={{ marginTop: 12 }}>
                <h3>Option {opt === "ECT" ? "technologique (ECT)" : "scientifique (ECS)"}</h3>
                <table className="sp-table">
                  <thead>
                    <tr>
                      <th>Épreuve</th>
                      <th>Durée</th>
                      <th>Coefficient</th>
                    </tr>
                  </thead>
                  <tbody>
                    {liste.map((e) => (
                      <tr key={e.nom}>
                        <td>{e.nom}</td>
                        <td>{e.duree}</td>
                        <td>{e.coef}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
            <p>
              Total des coefficients : 30 dans chaque option. En économie-droit (ECT), la sous-épreuve d&apos;économie
              (2 h 30, 60 % de la note) associe une note de synthèse sur dossier et une réflexion argumentée ; la
              sous-épreuve de droit (1 h 30, 40 %) est un cas pratique. L&apos;épreuve de gestion part d&apos;une entreprise
              réelle présentée en annexes et la découpe en dossiers indépendants (comptabilité de gestion, finance,
              marketing, management, tableur).
            </p>
          </section>

          <AdSlot settings={settings} placement="list_bottom" />

          <section className="sp-about">
            <h2>Préparer le CNAEM avec des sujets réels</h2>
            <p>
              {concours.length} sujets du CNAEM ({optionsTexte}), des sessions {anneeMin} à {anneeMax} : énoncés complets
              avec leurs annexes, corrigés indicatifs dossier par dossier et export PDF gratuit, sans inscription. Les
              cours d&apos;économie, de droit et de gestion qui servent à les traiter sont ceux de la Licence FSJES, liés depuis
              chaque sujet.
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
