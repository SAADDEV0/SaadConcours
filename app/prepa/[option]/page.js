import { notFound } from "next/navigation";
import { getAllPrepa, getSettings } from "@/lib/store";
import { chromeHtml, footerHtml } from "../../_shared/chrome";
import { breadcrumbJsonLd } from "../../_shared/listingSchema";
import JsonLd from "../../_shared/JsonLd";
import ChaineWhatsapp from "../../_shared/ChaineWhatsapp";
import { fitTitle, clampDescription } from "../../_shared/seoText";
import { Icon } from "../../_shared/icons";
import { PREPA_OPTIONS, prepaOption, prepaModule, prepaModuleHref, prepaOptionHref, prepaOptionOuverte, isPrepaPublie, prepaModuleIcon } from "../../../lib/prepa";

const SITE_URL = "https://www.saadconcours.space";

// Page d'une option (ECT ou ECS) : la liste de ses cours. Séparée des cours de la
// Licence (/cours) : une option n'a de page qu'avec au moins un cours publié.
export const dynamic = "force-static";
export const revalidate = false;
export const dynamicParams = false;

async function coursDe(code) {
  if (!prepaOption(code) || !prepaOptionOuverte(code)) return [];
  return (await getAllPrepa()).filter((c) => c.option === code && isPrepaPublie(c));
}

export async function generateStaticParams() {
  const out = [];
  for (const o of PREPA_OPTIONS) if ((await coursDe(o.code).catch(() => [])).length) out.push({ option: o.code });
  return out;
}

export async function generateMetadata(props) {
  const { option } = await props.params;
  const o = prepaOption(option);
  const liste = await coursDe(option);
  if (!o || !liste.length) return {};
  const title = fitTitle([`Cours de prépa ${o.court} : CNAEM, chapitres et exercices corrigés`, `Cours de prépa ${o.court} pour le CNAEM`, `Cours prépa ${o.court}`]);
  const description = clampDescription(
    `Cours de la prépa ${o.court} pour le CNAEM : ${liste.map((c) => c.module.toLowerCase()).join(", ")}. Chapitres expliqués, exercices corrigés, résumés et QCM.`
  );
  const url = `${SITE_URL}${prepaOptionHref(o.code)}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, images: ["/opengraph-image"] },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function PrepaOptionPage(props) {
  const { option } = await props.params;
  const o = prepaOption(option);
  const liste = await coursDe(option);
  if (!o || !liste.length) notFound();
  const settings = await getSettings().catch(() => null);
  const href = prepaOptionHref(o.code);
  const cartes = liste.map((c) => {
    const { chapitres } = prepaModule(c);
    return { c, chapitres, nbExercices: chapitres.reduce((n, x) => n + x.nbExercices, 0), nbQcm: chapitres.reduce((n, x) => n + x.qcm.length, 0) };
  });
  const nbChapitres = cartes.reduce((n, x) => n + x.chapitres.length, 0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Cours de prépa ${o.court}`,
    url: `${SITE_URL}${href}`,
    itemListElement: liste.map((c, i) => ({ "@type": "ListItem", position: i + 1, url: `${SITE_URL}${prepaModuleHref(c)}`, name: c.module })),
  };

  return (
    <>
      <JsonLd data={[jsonLd, breadcrumbJsonLd([{ name: `Cours de prépa ${o.court}`, path: href }])]} />
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: `prepa-${o.code}` }) }} />

      <div className="bac-space">
        <div className="bac-wrap">
          <nav className="cd-breadcrumb">
            <a href="/">Accueil</a> <span>/</span> <span>Cours de prépa {o.court}</span>
          </nav>

          <div className="bac-mat-hero">
            <div className="bac-mat-hero-body">
              <div className="bac-eyebrow">Classes préparatoires · {o.intitule}</div>
              <h1>Cours de prépa {o.court}</h1>
              <p>
                Les cours de la prépa {o.court} pour préparer le CNAEM, le concours d&apos;accès aux ENCG : chaque chapitre est
                expliqué pas à pas, avec des exercices corrigés dans l&apos;esprit des sujets du concours, un résumé et un QCM.
              </p>
              <div className="bac-hero-stats">
                <span className="bac-stat">
                  <strong>{liste.length}</strong> cours
                </span>
                <span className="bac-stat">
                  <strong>{nbChapitres}</strong> chapitres
                </span>
              </div>
              <div className="sp-hero-actions">
                <a className="sp-btn" href="/concours/cnaem">
                  <Icon name="file-pen" size={18} />
                  Sujets du CNAEM corrigés
                </a>
              </div>
            </div>
          </div>

          <main className="bac-main">
            <section className="bac-semestre">
              <h2 className="bac-semestre-title">
                <span className="bac-semestre-code">{o.court}</span>
                Les cours
              </h2>
              <div className="sp-related">
                {cartes.map(({ c, chapitres, nbExercices, nbQcm }) => (
                  <a key={c.id} className="bac-mat-card" href={prepaModuleHref(c)}>
                    <span className="bac-mat-body">
                      <span className="bac-mat-name">
                        <Icon e={prepaModuleIcon(c, "📘")} size={18} /> {c.module}
                      </span>
                      <span className="bac-mat-meta">
                        <span>{chapitres.length} chapitres</span>
                        {nbExercices > 0 && <span>{nbExercices} exercices corrigés</span>}
                        {nbQcm > 0 && <span>{nbQcm} questions de QCM</span>}
                      </span>
                      <span className="bac-mat-meta">{c.description}</span>
                    </span>
                  </a>
                ))}
              </div>
            </section>

            <section className="sp-about">
              <h2>Des cours écrits pour la prépa {o.court}</h2>
              <p>
                Ces cours suivent les épreuves du CNAEM {o.intitule.toLowerCase()} : chaque chapitre part des notions que les
                sujets demandent et se termine par un exercice type concours, corrigé avec la rédaction attendue. Ils sont
                distincts des cours de la Licence FSJES : le niveau, l&apos;ordre des chapitres et les exercices sont ceux de la
                classe préparatoire. Pour s&apos;entraîner en conditions réelles, les sujets des sessions passées sont sur la page{" "}
                <a href="/concours/cnaem">sujets du CNAEM</a>.
              </p>
            </section>

            <ChaineWhatsapp settings={settings} />
          </main>
        </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: footerHtml() }} />
    </>
  );
}
