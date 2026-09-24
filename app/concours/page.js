import { getPublicConcours } from "@/lib/store";
import { chromeHtml, footerHtml } from "../_shared/chrome";
import { breadcrumbJsonLd, collectionJsonLd } from "../_shared/listingSchema";
import JsonLd from "../_shared/JsonLd";
import ConcoursNiveauSwitch from "../_shared/ConcoursNiveauSwitch";
import { isLicenceExcellence, LICENCE_EXCELLENCE } from "@/lib/concoursNiveaux";
import ConcoursListing from "./ConcoursListing";

// Served as prerendered HTML revalidated hourly instead of rendered per
// request. lib/github.js reads the data JSON with `cache: "no-store"` (
// concours.json is 2.59MB, past Next's 2MB fetch-cache entry limit), and a
// no-store fetch in the render path opts the whole route out of static
// generation -- confirmed by building with and without GITHUB_TOKEN, where
// these routes flip between `o` and `f`.
//
// No revalidation window at all: freshness comes from deploys, not ISR.
// Every admin edit commits to GitHub, which triggers a redeploy that rebuilds
// every page -- so an hourly revalidate was re-rendering pages that were
// already current and billing Fluid CPU for it.
export const dynamic = "force-static";
export const revalidate = false;

// Server-rendered on first load (unlike the old client-only SPA version) so
// the full list of concours — real <a href="/concours/[id]"> links and text —
// is already in the raw HTML for crawlers. ConcoursExplorer then hydrates on
// top to power the filters/search without wiping this initial markup unless
// the visitor actually filters (or lands with a ?q= from the sitelinks
// search box, see app/layout.js's WebSite/SearchAction JSON-LD).
export default async function ConcoursPage() {
  const tous = await getPublicConcours().catch(() => []);
  // Les concours de licence d'excellence ont leur propre page
  // (/concours/licence-excellence) : celle-ci ne liste que le Master.
  const concours = tous.filter((c) => !isLicenceExcellence(c));
  const nbLicence = tous.length - concours.length;
  const nbEtabs = new Set(concours.map((c) => c.etablissement).filter(Boolean)).size;
  const nbVilles = new Set(concours.map((c) => c.ville).filter(Boolean)).size;
  const nbCorriges = concours.filter((c) => c.corrige_md || c.corrige_from_github).length;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{ name: "Concours", path: "/concours" }]),
          collectionJsonLd({
            name: "Sujets de concours d'accès aux Masters au Maroc",
            description:
              "Sujets de concours réellement tombés aux Masters économie-gestion des universités marocaines (FSJES, ENCG), avec énoncés complets et corrigés indicatifs.",
            path: "/concours",
            items: concours.map((c) => ({
              name: `${c.master_reel || c.filiere || "Concours"} — ${c.etablissement} ${c.annee}`,
              path: `/concours/${encodeURIComponent(c.id)}`,
            })),
          }),
        ]}
      />
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "concours", showSearch: true }) }} />

      <div className="bac-space site-space">
        <div className="bac-wrap">
          <ConcoursNiveauSwitch active="master" counts={{ master: concours.length, [LICENCE_EXCELLENCE]: nbLicence }} />

          <section className="bac-hero" style={{ "--hero-icon": '"📚"' }}>
            <div className="bac-eyebrow">Master · Concours d'accès</div>
            <h1>Concours d'accès aux Masters — sujets réels</h1>
            {/* Seule page de liste sans texte sous son H1 à l'origine : ce
               paragraphe porte la requête principale du site (« concours
               master maroc »). */}
            <p>
              {concours.length} sujets de concours d'accès aux Masters économie-gestion réellement tombés dans les
              universités marocaines (FSJES, ENCG, facultés privées), classés par ville, établissement, filière et
              année. Chaque fiche donne l'énoncé complet, les scans du sujet original quand ils existent, un corrigé
              indicatif lorsqu'il est disponible, et un export PDF gratuit — sans inscription.
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
            </div>
          </section>

          <ConcoursListing
            concours={concours}
            sideLinks={[
              { href: "/concours/licence-excellence", label: "Concours Licence d'excellence", icon: "⭐" },
              { href: "/evaluation", label: "QCM d'entraînement", icon: "📝" },
              { href: "/cours", label: "Cours Licence FSJES", icon: "📖" },
            ]}
          />
        </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: footerHtml() }} />

    </>
  );
}
