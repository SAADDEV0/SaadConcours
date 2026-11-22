import { notFound } from "next/navigation";
import { chromeHtml, footerHtml } from "../../../_shared/chrome";
import ChromeInit from "../../../_shared/ChromeInit";
import JsonLd from "../../../_shared/JsonLd";
import { breadcrumbJsonLd } from "../../../_shared/listingSchema";
import { fitTitle, clampDescription } from "../../../_shared/seoText";
import {
  PCGE_HUB,
  NOTES,
  NOTES_PLUS,
  pcgeAFiche,
  pcgeAncre,
  pcgeAncreHref,
  pcgeClasseHref,
  pcgeCompteHref,
  pcgeFicheHref,
  pcgeFiches,
  pcgePlace,
  pcgeTitre,
} from "../../../../lib/planComptable";
import Ecriture from "../../Ecriture";
import "../../pcge.css";

// Fiche d'un compte du plan comptable (/plan-comptable/compte/6111) : seulement
// pour les comptes qui ont une note et un complément rédigés (NOTES et
// NOTES_PLUS, lib/planComptable.js), jamais une page gabarit vide.
export const dynamic = "force-static";
export const revalidate = false;
export const dynamicParams = false;

const SITE_URL = "https://www.saadconcours.space";

export function generateStaticParams() {
  return pcgeFiches().map((code) => ({ code }));
}

function minuscule(t) {
  // « État » et les sigles gardent leur majuscule.
  return /^(État|[A-Z]{2,})/.test(t) || !/^[A-ZÉ][a-zé]/.test(t) ? t : t.charAt(0).toLowerCase() + t.slice(1);
}

export async function generateMetadata(props) {
  const { code } = await props.params;
  if (!pcgeAFiche(code)) return {};
  const titre = pcgeTitre(code);
  const title = fitTitle([`Compte ${code} : ${minuscule(titre)} (plan comptable marocain)`, `Compte ${code} : ${minuscule(titre)}`, `Compte ${code} du plan comptable marocain`]);
  const description = clampDescription(`Compte ${code} du plan comptable marocain, ${minuscule(titre)}. ${NOTES[code].t}`);
  const url = `${SITE_URL}${pcgeFicheHref(code)}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, images: ["/opengraph-image"] },
    twitter: { card: "summary_large_image", title, description },
  };
}

// Comptes cités par la fiche (texte et écriture), dans l'ordre d'apparition.
function comptesLies(code) {
  const n = NOTES[code];
  const textes = [n.t, NOTES_PLUS[code], ...(n.e ? n.e.l.map((l) => l[1]) : [])].join(" ");
  const vus = new Set([code]);
  const out = [];
  for (const c of textes.match(/\b\d{4,5}\b/g) || []) {
    if (vus.has(c) || !pcgeTitre(c)) continue;
    vus.add(c);
    out.push(c);
  }
  return out;
}

export default async function PcgeFichePage(props) {
  const { code } = await props.params;
  if (!pcgeAFiche(code)) notFound();
  const note = NOTES[code];
  const plus = NOTES_PLUS[code];
  const titre = pcgeTitre(code);
  const { classe, rubrique, poste, voisins } = pcgePlace(code);
  const lies = comptesLies(code);
  const fiches = pcgeFiches();
  const i = fiches.indexOf(code);
  const prev = fiches[i - 1];
  const next = fiches[i + 1];
  const href = pcgeFicheHref(code);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "@id": `${SITE_URL}${href}#compte`,
    termCode: code,
    name: titre,
    description: note.t,
    url: `${SITE_URL}${href}`,
    inLanguage: "fr",
    inDefinedTermSet: { "@id": `${SITE_URL}${pcgeClasseHref(classe)}#termes` },
  };

  return (
    <>
      <JsonLd
        data={[
          jsonLd,
          breadcrumbJsonLd([
            { name: "Plan comptable marocain", path: PCGE_HUB },
            { name: `Classe ${classe.num}`, path: pcgeClasseHref(classe) },
            { name: `Compte ${code}`, path: href },
          ]),
        ]}
      />
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "pcge" }) }} />
      <ChromeInit />

      <div className="bac-space">
        <div className="bac-wrap">
          <div className="bac-hero">
            <nav className="cd-breadcrumb">
              <a href="/">Accueil</a> <span>/</span> <a href={PCGE_HUB}>Plan comptable</a> <span>/</span>{" "}
              <a href={pcgeClasseHref(classe)}>Classe {classe.num}</a> <span>/</span> <span>Compte {code}</span>
            </nav>
            <div className="bac-eyebrow">Plan comptable marocain · {classe.etat}</div>
            <h1>
              Compte <span className="pcge-fiche-code">{code}</span> : {titre}
            </h1>
            <p>{note.t}</p>
          </div>

          <main className="bac-main pcge-fiche">
            <ul className="pcge-place" aria-label="Place du compte dans le plan comptable">
              <li>
                <span className="pcge-place-niv">Classe</span>
                <a href={pcgeClasseHref(classe)}>
                  <span className="pcge-code">{classe.num}</span> {classe.titre}
                </a>
              </li>
              <li>
                <span className="pcge-place-niv">Rubrique</span>
                <a href={`${pcgeClasseHref(classe)}#${pcgeAncre(rubrique.code)}`}>
                  <span className="pcge-code">{rubrique.code}</span> {rubrique.titre}
                </a>
              </li>
              <li>
                <span className="pcge-place-niv">Poste</span>
                <a href={`${pcgeClasseHref(classe)}#${pcgeAncre(poste[0])}`}>
                  <span className="pcge-code">{poste[0]}</span> {poste[1]}
                </a>
              </li>
            </ul>

            <h2>À savoir</h2>
            <p className="pcge-fiche-texte">{plus}</p>

            {note.e && (
              <>
                <h2>Écriture type</h2>
                <Ecriture e={note.e} />
              </>
            )}

            {lies.length > 0 && (
              <>
                <h2>Comptes liés</h2>
                <ul className="pcge-liste">
                  {lies.map((c) => (
                    <li key={c}>
                      <a href={pcgeCompteHref(c)}>
                        <span className="pcge-code">{c}</span>
                        <span>{pcgeTitre(c)}</span>
                        {pcgeAFiche(c) && <span className="pcge-liste-fiche">fiche</span>}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {voisins.length > 0 && (
              <>
                <h2>
                  Les autres comptes du poste {poste[0]} · {poste[1]}
                </h2>
                <ul className="pcge-liste">
                  {voisins.map(([c, t]) => (
                    <li key={c}>
                      <a href={pcgeAFiche(c) ? pcgeFicheHref(c) : pcgeAncreHref(c)}>
                        <span className="pcge-code">{c}</span>
                        <span>{t}</span>
                        {pcgeAFiche(c) && <span className="pcge-liste-fiche">fiche</span>}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <nav className="pcge-nav" aria-label="Autres fiches de compte">
              {prev && (
                <a href={pcgeFicheHref(prev)}>
                  <span>← Compte {prev}</span>
                  <strong>{pcgeTitre(prev)}</strong>
                </a>
              )}
              {next && (
                <a className="next" href={pcgeFicheHref(next)}>
                  <span>Compte {next} →</span>
                  <strong>{pcgeTitre(next)}</strong>
                </a>
              )}
            </nav>
            <p style={{ marginTop: 18 }}>
              <a href={`${pcgeClasseHref(classe)}#${pcgeAncre(code)}`}>← Toute la classe {classe.num}</a> ·{" "}
              <a href={PCGE_HUB}>Chercher un autre compte</a>
            </p>
          </main>
        </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: footerHtml() }} />
    </>
  );
}
