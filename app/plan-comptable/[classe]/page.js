import { notFound } from "next/navigation";
import { chromeHtml, footerHtml } from "../../_shared/chrome";
import ChromeInit from "../../_shared/ChromeInit";
import JsonLd from "../../_shared/JsonLd";
import { breadcrumbJsonLd } from "../../_shared/listingSchema";
import { fitTitle, clampDescription } from "../../_shared/seoText";
import { PCGE, PCGE_HUB, NOTES, pcgeAFiche, pcgeAncre, pcgeClasse, pcgeClasseHref, pcgeFicheHref, pcgeNbComptes } from "../../../lib/planComptable";
import Ecriture from "../Ecriture";
import "../pcge.css";

// Une page par classe du plan comptable : rubriques, postes et comptes, avec
// une ancre par numéro (#c6111) que la recherche et les autres pages visent.
export const dynamic = "force-static";
export const revalidate = false;
export const dynamicParams = false;

const SITE_URL = "https://www.saadconcours.space";

export function generateStaticParams() {
  return PCGE.map((c) => ({ classe: c.slug }));
}

export async function generateMetadata(props) {
  const { classe } = await props.params;
  const c = pcgeClasse(classe);
  if (!c) return {};
  const title = fitTitle([
    `Classe ${c.num} du plan comptable marocain : ${c.titre.toLowerCase()}`,
    `Classe ${c.num} du PCGE : ${c.titre.toLowerCase()}`,
    `Classe ${c.num} du plan comptable marocain`,
  ], 50); // + « | SaadConcours » = 65 au plus
  const description = clampDescription(`Classe ${c.num} du plan comptable marocain (PCGE), ${c.titre.toLowerCase()} : ${c.resume.charAt(0).toLowerCase()}${c.resume.slice(1, -1)}. ${pcgeNbComptes(c)} comptes, numéros et intitulés.`);
  const url = `${SITE_URL}${pcgeClasseHref(c)}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, images: ["/opengraph-image"] },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function PcgeClassePage(props) {
  const { classe } = await props.params;
  const c = pcgeClasse(classe);
  if (!c) notFound();
  const i = PCGE.indexOf(c);
  const prev = PCGE[i - 1];
  const next = PCGE[i + 1];
  const href = pcgeClasseHref(c);
  const nbNotes = c.rubriques.reduce((n, r) => n + r.postes.reduce((k, p) => k + p[2].filter(([code]) => NOTES[code]).length, 0), 0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": `${SITE_URL}${href}#termes`,
    name: `Classe ${c.num} du plan comptable marocain : ${c.titre}`,
    url: `${SITE_URL}${href}`,
    inLanguage: "fr",
    isPartOf: { "@id": `${SITE_URL}${PCGE_HUB}#pcge` },
    hasDefinedTerm: c.rubriques.flatMap((r) =>
      r.postes.flatMap((p) =>
        p[2].map(([code, titre]) => ({
          "@type": "DefinedTerm",
          termCode: code,
          name: titre,
          url: `${SITE_URL}${href}#${pcgeAncre(code)}`,
          ...(NOTES[code] ? { description: NOTES[code].t } : {}),
        }))
      )
    ),
  };

  return (
    <>
      <JsonLd
        data={[
          jsonLd,
          breadcrumbJsonLd([
            { name: "Plan comptable marocain", path: PCGE_HUB },
            { name: `Classe ${c.num}`, path: href },
          ]),
        ]}
      />
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "pcge" }) }} />
      <ChromeInit />

      <div className="bac-space">
        <div className="bac-wrap">
          <div className="bac-hero">
            <nav className="cd-breadcrumb">
              <a href="/">Accueil</a> <span>/</span> <a href={PCGE_HUB}>Plan comptable</a> <span>/</span> <span>Classe {c.num}</span>
            </nav>
            <div className="bac-eyebrow">Plan comptable marocain · {c.etat}</div>
            <h1>
              Classe {c.num} : {c.titre.charAt(0).toLowerCase() + c.titre.slice(1)}
            </h1>
            <p>{c.intro}</p>
            <div className="bac-hero-stats">
              <span className="bac-stat">
                <strong>{c.rubriques.length}</strong> rubriques
              </span>
              <span className="bac-stat">
                <strong>{pcgeNbComptes(c)}</strong> comptes
              </span>
              {nbNotes > 0 && (
                <>
                  <span className="bac-stat">
                    <strong>{nbNotes}</strong> expliqués
                  </span>
                </>
              )}
            </div>
          </div>

          <main className="bac-main">
            <div className="pcge-fonct">
              <h2>Comment fonctionnent ces comptes</h2>
              <p>{c.fonctionnement}</p>
            </div>

            <nav aria-label={`Rubriques de la classe ${c.num}`}>
              <ul className="pcge-sommaire">
                {c.rubriques.map((r) => (
                  <li key={r.code}>
                    <a href={`#${pcgeAncre(r.code)}`}>
                      <span className="pcge-code">{r.code}</span>
                      {r.titre}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {c.rubriques.map((r) => (
              <section key={r.code} className="pcge-rubrique" id={pcgeAncre(r.code)} aria-labelledby={`t${r.code}`}>
                <h2 id={`t${r.code}`}>
                  <span className="pcge-code">{r.code}</span>
                  {r.titre}
                </h2>
                <p>{r.d}</p>
                {r.postes.map(([poste, titre, comptes]) => (
                  <div key={poste} className="pcge-poste" id={pcgeAncre(poste)}>
                    <h3>
                      <span className="pcge-code">{poste}</span>
                      {titre}
                    </h3>
                    {NOTES[poste] && <p className="pcge-poste-note">{NOTES[poste].t}</p>}
                    <ul className="pcge-comptes">
                      {comptes.map(([code, intitule]) => {
                        const note = NOTES[code];
                        return (
                          <li key={code} id={pcgeAncre(code)} className={`pcge-compte${code.length > 4 ? " sous" : ""}${note ? " note" : ""}`}>
                            <div className="pcge-compte-ligne">
                              <span className="pcge-code">{code}</span>
                              <span className="pcge-compte-titre">{intitule}</span>
                            </div>
                            {note && (
                              <div className="pcge-note">
                                <p>{note.t}</p>
                                {note.e && <Ecriture e={note.e} />}
                                {pcgeAFiche(code) && (
                                  <a className="pcge-fiche-link" href={pcgeFicheHref(code)}>
                                    Fiche du compte {code} : pièges et comptes liés →
                                  </a>
                                )}
                              </div>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </section>
            ))}

            <nav className="pcge-nav" aria-label="Autres classes">
              {prev && (
                <a href={pcgeClasseHref(prev)}>
                  <span>← Classe {prev.num}</span>
                  <strong>{prev.titre}</strong>
                </a>
              )}
              {next && (
                <a className="next" href={pcgeClasseHref(next)}>
                  <span>Classe {next.num} →</span>
                  <strong>{next.titre}</strong>
                </a>
              )}
            </nav>
            <p style={{ marginTop: 18 }}>
              <a href={PCGE_HUB}>← Tout le plan comptable et la recherche par numéro</a>
            </p>
          </main>
        </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: footerHtml() }} />
    </>
  );
}
