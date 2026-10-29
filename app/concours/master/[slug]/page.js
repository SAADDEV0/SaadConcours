import { notFound } from "next/navigation";
import { getSettings } from "@/lib/store";
import { categoryOf, categoryLabel } from "@/lib/taxonomy";
import { isMasterDroit } from "@/lib/concoursNiveaux";
import { chiffres, masterHref, masterHubs, villeHref, villeHubs } from "@/lib/concoursHubs";
import AdSlot from "../../../_shared/AdSlot";
import { chromeHtml, footerHtml } from "../../../_shared/chrome";
import { breadcrumbJsonLd, collectionJsonLd } from "../../../_shared/listingSchema";
import JsonLd from "../../../_shared/JsonLd";
import { clampDescription, fitTitle } from "../../../_shared/seoText";
import { formatDateFr } from "../../../_shared/format";
import CommunauteCta from "../../../_shared/CommunauteCta";
import ChromeInit from "../../../_shared/ChromeInit";
import { aCorrige, articleFusionne, coursAReviser, lignesHtml, liste, periode, pluriel, sujetsPublics } from "../../_hub/hub";

// Hub d'un type de master (une sous-filière de lib/taxonomy.js) : tous ses
// sujets, les facultés qui l'organisent, les cours à réviser. Calculé sur la
// base au build (lib/concoursHubs.js), prérendu (voir README).
export const dynamic = "force-static";
export const revalidate = false;
export const dynamicParams = false;

export async function generateStaticParams() {
  return masterHubs(await sujetsPublics()).map((h) => ({ slug: h.slug }));
}

async function trouver(slug) {
  const concours = await sujetsPublics();
  const hub = masterHubs(concours).find((h) => h.slug === slug);
  return hub ? { hub, concours } : null;
}

export async function generateMetadata(props) {
  const { slug } = await props.params;
  const found = await trouver(slug);
  if (!found) return {};
  const { hub } = found;
  const k = chiffres(hub.sujets);
  const path = masterHref(hub);
  const title = fitTitle([
    `Concours ${hub.nom} : ${k.total} sujets réels et corrigés`,
    `Concours ${hub.nom} : sujets et corrigés`,
    `${hub.nom} : sujets de concours`,
  ]);
  const description = clampDescription(
    `${k.total} sujets réels du concours ${hub.nom} (${hub.long.toLowerCase()}) ${periode(k)} dans ${pluriel(k.etablissements.length, "établissement")}, avec corrigés et matières à réviser.`
  );
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, images: ["/opengraph-image"] },
  };
}

export default async function MasterHubPage(props) {
  const { slug } = await props.params;
  const found = await trouver(slug);
  if (!found) notFound();
  const { hub, concours } = found;
  const settings = await getSettings().catch(() => null);
  const k = chiffres(hub.sujets);
  const path = masterHref(hub);
  const droit = hub.sujets.some(isMasterDroit);
  const cours = coursAReviser(hub.sujets);
  const article = await articleFusionne(hub.article);
  const nbCorriges = hub.sujets.filter(aCorrige).length;
  const villes = new Set(villeHubs(concours).map((v) => v.ville));
  const categorie = categoryOf(hub.filiere);
  const voisins = masterHubs(concours).filter((h) => h.slug !== hub.slug && categoryOf(h.filiere) === categorie);
  const autres = masterHubs(concours).filter((h) => h.slug !== hub.slug && categoryOf(h.filiere) !== categorie);

  // Où le concours se passe : un établissement par ligne, avec ses années et
  // le hub de sa ville.
  const etabs = k.etablissements.map(([etab, n]) => {
    const sujets = hub.sujets.filter((c) => c.etablissement === etab);
    const ville = sujets.find((c) => c.ville)?.ville || "";
    return { etab, n, ville, kf: chiffres(sujets), href: villes.has(ville) ? villeHref(ville) : null };
  });

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Concours", path: droit ? "/concours/droit" : "/concours" },
            { name: hub.nom, path },
          ]),
          collectionJsonLd({
            name: `Sujets du concours ${hub.nom} au Maroc`,
            description: `${k.total} sujets réels du concours d'accès au ${hub.nom} (${hub.long.toLowerCase()}), avec corrigés indicatifs.`,
            path,
            items: hub.sujets.map((c) => ({
              name: `${c.master_fr || c.master_reel || c.filiere} — ${c.etablissement} ${c.annee}`,
              path: `/concours/${encodeURIComponent(c.id)}`,
            })),
          }),
        ]}
      />
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: droit ? "concours-droit" : "concours" }) }} />
      <ChromeInit />

      <div className="bac-space">
        <div className="bac-wrap">
          <nav className="cd-breadcrumb" aria-label="Fil d'Ariane">
            <a href="/">Accueil</a> <span>/</span>{" "}
            <a href={droit ? "/concours/droit" : "/concours"}>{droit ? "Concours Master Droit" : "Concours Master"}</a> <span>/</span>{" "}
            <span>{hub.nom}</span>
          </nav>

          <section className="bac-hero">
            <div className="bac-eyebrow">{categoryLabel(categorie)}</div>
            <h1>Concours {hub.nom} : sujets réels et corrigés</h1>
            <p>
              <strong>{pluriel(k.total, "sujet réel", "sujets réels")}</strong> du concours d&apos;accès au master{" "}
              {hub.long.toLowerCase()}, {periode(k)}, dans {pluriel(k.etablissements.length, "établissement")} et{" "}
              {pluriel(k.villes.length, "ville")} ({liste(k.villes.map(([v]) => v), 5)}).{" "}
              {nbCorriges === k.total ? "Tous ont" : `${nbCorriges} ont`} un corrigé indicatif.
              {k.difficulte ? ` Difficulté moyenne : ${String(k.difficulte).replace(".", ",")}/5.` : ""}
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
                <strong>{k.villes.length}</strong> ville{k.villes.length > 1 ? "s" : ""}
              </span>
            </div>
          </section>

          {cours.length > 0 && (
            <section className="bac-group">
              <h2 className="bac-section-title">Les matières à préparer</h2>
              <p className="hub-lead">
                Calculé sur les {k.total} sujets : les modules de cours qui couvrent le plus d&apos;épreuves du concours {hub.nom}, du
                plus fréquent au moins fréquent.
              </p>
              <div className="home-links">
                {cours.map((m) => (
                  <a key={m.href} className="home-link" href={m.href}>
                    <strong>{m.module}</strong>
                    <span>
                      {pluriel(m.n, "sujet")} sur {k.total} ({Math.round((m.n / k.total) * 100)} %) · {m.espace}
                      {m.semestre ? ` · ${m.semestre}` : ""}
                    </span>
                  </a>
                ))}
              </div>
            </section>
          )}

          <section className="bac-group">
            <h2 className="bac-section-title">Où se passe le concours</h2>
            <div className="home-links">
              {etabs.map((e) => {
                const corps = (
                  <>
                    <strong>{e.etab}</strong>
                    <span>
                      {pluriel(e.n, "sujet")} {periode(e.kf)}
                      {e.ville && !e.etab.includes(e.ville) ? ` · ${e.ville}` : ""}
                    </span>
                  </>
                );
                return e.href ? (
                  <a key={e.etab} className="home-link" href={e.href}>
                    {corps}
                  </a>
                ) : (
                  <div key={e.etab} className="home-link">
                    {corps}
                  </div>
                );
              })}
            </div>
          </section>

          <section className="bac-group" id="sujets">
            <h2 className="bac-section-title">Tous les sujets du {hub.nom} ({k.total})</h2>
            <div className="sp-rows" dangerouslySetInnerHTML={{ __html: lignesHtml(hub.sujets) }} />
          </section>

          <CommunauteCta settings={settings} sujet={hub.nom} />

          <AdSlot settings={settings} placement="list_bottom" />

          {article && (
            <section className="cd-card hub-article">
              <h2>Guide : {article.titre.replace(/\s*\(\d+ sujets? réels?\)\s*$/, "")}</h2>
              {article.date && (
                <p className="hub-article-date">
                  Analyse publiée le {formatDateFr(article.date)} : ses chiffres datent de ce jour-là ; les matières et la liste
                  des sujets ci-dessus sont, elles, à jour.
                </p>
              )}
              <div className="enonce-content" dangerouslySetInnerHTML={{ __html: article.html }} />
            </section>
          )}

          {(voisins.length > 0 || autres.length > 0) && (
            <section className="sp-about">
              <h2>Les autres masters</h2>
              <div className="sp-chips hub-chips">
                {[...voisins, ...autres].map((h) => (
                  <a key={h.slug} className="bac-res-chip on" href={masterHref(h)}>
                    {h.nom.replace(/^Master /, "")} · {h.sujets.length}
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
