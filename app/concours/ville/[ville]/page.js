import { notFound } from "next/navigation";
import { getSettings } from "@/lib/store";
import { chiffres, masterHref, masterHubDuConcours, masterHubs, villeHref, villeHubs } from "@/lib/concoursHubs";
import AdSlot from "../../../_shared/AdSlot";
import { chromeHtml, footerHtml } from "../../../_shared/chrome";
import { breadcrumbJsonLd, collectionJsonLd } from "../../../_shared/listingSchema";
import JsonLd from "../../../_shared/JsonLd";
import { clampDescription, fitTitle } from "../../../_shared/seoText";
import { formatDateFr } from "../../../_shared/format";
import CommunauteCta from "../../../_shared/CommunauteCta";
import ChromeInit from "../../../_shared/ChromeInit";
import { aCorrige, articleFusionne, coursAReviser, deVille, lignesHtml, liste, periode, pluriel, sujetsPublics } from "../../_hub/hub";

// Hub d'une ville : tous ses sujets de concours (master, master de droit,
// licence d'excellence), calculés sur la base au build (lib/concoursHubs.js).
// Prérendu comme toutes les pages publiques (voir README).
export const dynamic = "force-static";
export const revalidate = false;
export const dynamicParams = false;

export async function generateStaticParams() {
  return villeHubs(await sujetsPublics()).map((v) => ({ ville: v.slug }));
}

async function trouver(slug) {
  const concours = await sujetsPublics();
  const hub = villeHubs(concours).find((v) => v.slug === slug);
  return hub ? { hub, concours } : null;
}

export async function generateMetadata(props) {
  const { ville } = await props.params;
  const found = await trouver(ville);
  if (!found) return {};
  const { hub } = found;
  const k = chiffres(hub.sujets);
  const path = villeHref(hub.ville);
  const title = fitTitle([
    `Concours Master ${hub.ville} : ${k.total} sujets et corrigés`,
    `Concours Master ${hub.ville} : sujets et corrigés`,
    `Concours ${hub.ville} : sujets et corrigés`,
  ]);
  const description = clampDescription(
    `${k.total} sujets réels des concours de master à ${hub.ville}, ${periode(k)}, dans ${pluriel(k.etablissements.length, "établissement")} : énoncés, corrigés indicatifs et cours à réviser.`
  );
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, images: ["/opengraph-image"] },
  };
}

export default async function VilleHubPage(props) {
  const { ville } = await props.params;
  const found = await trouver(ville);
  if (!found) notFound();
  const { hub, concours } = found;
  const settings = await getSettings().catch(() => null);
  const k = chiffres(hub.sujets);
  const path = villeHref(hub.ville);
  const masters = masterHubs(concours);
  const cours = coursAReviser(hub.sujets);
  const article = await articleFusionne(hub.article);
  const autres = villeHubs(concours).filter((v) => v.slug !== hub.slug);
  const nbCorriges = hub.sujets.filter(aCorrige).length;

  // Une ligne par filière : nombre de sujets, années, établissements, et le
  // hub du master quand il existe.
  const filieres = k.filieres.map(([filiere, n]) => {
    const sujets = hub.sujets.filter((c) => c.filiere === filiere);
    const kf = chiffres(sujets);
    const mh = masterHubDuConcours(masters, sujets[0]);
    return { filiere, n, kf, href: mh ? masterHref(mh) : null };
  });

  const niveaux = [
    k.niveaux.master && pluriel(k.niveaux.master, "sujet de master en économie-gestion", "sujets de master en économie-gestion"),
    k.niveaux.droit && pluriel(k.niveaux.droit, "sujet de master de droit", "sujets de master de droit"),
    k.niveaux.excellence && pluriel(k.niveaux.excellence, "sujet de licence d'excellence", "sujets de licence d'excellence"),
  ].filter(Boolean);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Concours", path: "/concours" },
            { name: hub.ville, path },
          ]),
          collectionJsonLd({
            name: `Sujets de concours de master à ${hub.ville}`,
            description: `${k.total} sujets réels des concours de master et de licence d'excellence à ${hub.ville}, avec corrigés indicatifs.`,
            path,
            items: hub.sujets.map((c) => ({
              name: `${c.master_fr || c.master_reel || c.filiere} — ${c.etablissement} ${c.annee}`,
              path: `/concours/${encodeURIComponent(c.id)}`,
            })),
          }),
        ]}
      />
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "concours" }) }} />
      <ChromeInit />

      <div className="bac-space">
        <div className="bac-wrap">
          <nav className="cd-breadcrumb" aria-label="Fil d'Ariane">
            <a href="/">Accueil</a> <span>/</span> <a href="/concours">Concours Master</a> <span>/</span> <span>{hub.ville}</span>
          </nav>

          <section className="bac-hero">
            <div className="bac-eyebrow">Concours par ville</div>
            <h1>Concours Master à {hub.ville} : sujets réels et corrigés</h1>
            <p>
              La base compte <strong>{niveaux.length ? liste(niveaux) : pluriel(k.total, "sujet")}</strong> passés à {hub.ville}{" "}
              {periode(k)}, dans {pluriel(k.etablissements.length, "établissement")} :{" "}
              {liste(k.etablissements.map(([e, n]) => `${e} : ${n}`), 5)}. {nbCorriges === k.total ? "Tous ont" : `${nbCorriges} ont`} un
              corrigé indicatif.
              {k.difficulte ? ` Difficulté moyenne des épreuves : ${String(k.difficulte).replace(".", ",")}/5.` : ""}
            </p>
            <div className="bac-hero-stats">
              <span className="bac-stat">
                <strong>{k.total}</strong> sujets
              </span>
              <span className="bac-stat">
                <strong>{nbCorriges}</strong> corrigés
              </span>
              <span className="bac-stat">
                <strong>{k.etablissements.length}</strong> établissement{k.etablissements.length > 1 ? "s" : ""}
              </span>
              <span className="bac-stat">
                <strong>{k.filieres.length}</strong> filière{k.filieres.length > 1 ? "s" : ""}
              </span>
            </div>
          </section>

          <section className="bac-group">
            <h2 className="bac-section-title">Les masters {deVille(hub.ville)}, filière par filière</h2>
            <div className="home-links">
              {filieres.map((f) => {
                const corps = (
                  <>
                    <strong>{f.filiere}</strong>
                    <span>
                      {pluriel(f.n, "sujet")} {periode(f.kf)} · {liste(f.kf.etablissements.map(([e]) => e), 2)}
                    </span>
                  </>
                );
                return f.href ? (
                  <a key={f.filiere} className="home-link" href={f.href}>
                    {corps}
                  </a>
                ) : (
                  <div key={f.filiere} className="home-link">
                    {corps}
                  </div>
                );
              })}
            </div>
          </section>

          {cours.length > 0 && (
            <section className="bac-group">
              <h2 className="bac-section-title">Les cours à réviser pour ces concours</h2>
              <p className="hub-lead">
                Les modules de cours qui couvrent le plus d&apos;épreuves dans les sujets {deVille(hub.ville)}, du plus demandé au
                moins demandé.
              </p>
              <div className="home-links">
                {cours.map((m) => (
                  <a key={m.href} className="home-link" href={m.href}>
                    <strong>{m.module}</strong>
                    <span>
                      {pluriel(m.n, "sujet")} sur {k.total} · {m.espace}
                      {m.semestre ? ` · ${m.semestre}` : ""}
                    </span>
                  </a>
                ))}
              </div>
            </section>
          )}

          <section className="bac-group" id="sujets">
            <h2 className="bac-section-title">Tous les sujets {deVille(hub.ville)} ({k.total})</h2>
            <div className="sp-rows" dangerouslySetInnerHTML={{ __html: lignesHtml(hub.sujets) }} />
          </section>

          <CommunauteCta settings={settings} />

          <AdSlot settings={settings} placement="list_bottom" />

          {article && (
            <section className="cd-card hub-article">
              <h2>Guide : {article.titre.replace(/\s*\(\d+ sujets? réels?\)\s*$/, "")}</h2>
              {article.date && (
                <p className="hub-article-date">
                  Analyse publiée le {formatDateFr(article.date)} : ses chiffres datent de ce jour-là ; la liste des sujets
                  ci-dessus est, elle, à jour.
                </p>
              )}
              <div className="enonce-content" dangerouslySetInnerHTML={{ __html: article.html }} />
            </section>
          )}

          {autres.length > 0 && (
            <section className="sp-about">
              <h2>Les concours des autres villes</h2>
              <div className="sp-chips hub-chips">
                {autres.map((v) => (
                  <a key={v.slug} className="bac-res-chip on" href={villeHref(v.ville)}>
                    {v.ville} · {v.sujets.length}
                  </a>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: footerHtml() }} />
    </>
  );
}
