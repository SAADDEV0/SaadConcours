import { getPublicConcours, getSettings, getAllCours, getAllQuiz, getAllBlog, getCorrigeIdsLocal } from "@/lib/store";
import { chromeHtml, footerHtml } from "./_shared/chrome";
import { concoursCardHtml } from "./_shared/concoursCard";
import { formatDateFr } from "./_shared/format";
import { isLicenceExcellence } from "@/lib/concoursNiveaux";
import { categoryInfo } from "../lib/blogTaxonomy";
import { BAC_MATIERES, bacMatiereHref } from "../lib/bacProgramme";
import { LICENCE_SEMESTRES } from "../lib/coursTaxonomy";
import { fsjesModule } from "../lib/fsjesChapitres";
import HomeClient from "./HomeClient";
import { Icon } from "./_shared/icons";

// Served as prerendered HTML instead of rendered per request. lib/github.js
// reads the data JSON with `cache: "no-store"` (concours.json is 2.59MB, past
// Next's 2MB fetch-cache entry limit), and a no-store fetch in the render
// path opts the whole route out of static generation.
//
// No revalidation window at all: freshness comes from deploys, not ISR.
// Every admin edit commits to GitHub, which triggers a redeploy that rebuilds
// every page.
export const dynamic = "force-static";
export const revalidate = false;

// Les trois publics du site — lycée (Bac), université (Licence FSJES) et
// préparation des concours de Master — sont servis par une seule question,
// « Tu prépares quoi ? ». Les trois panneaux sont dans le HTML (indexés) ;
// HomeClient affiche celui que le visiteur a choisi la dernière fois. Avant
// tout choix : le Master, cœur du site.
const NIVEAU_DEFAUT = "master";

// Recherches proposées sous le champ : les filières et villes les plus
// demandées.
const SUGGESTIONS = ["CCA", "Finance", "Audit", "Agadir", "Casablanca", "Comptabilité générale"];

export default async function HomePage() {
  const [allConcours, settings, cours, quiz, blog] = await Promise.all([
    getPublicConcours().catch(() => []),
    getSettings().catch(() => null),
    getAllCours().catch(() => []),
    getAllQuiz().catch(() => []),
    getAllBlog().catch(() => []),
  ]);
  const corrigeIds = getCorrigeIdsLocal();

  const coursPublies = cours.filter((c) => c.available);
  const chapitresFsjes = coursPublies.reduce((n, c) => n + fsjesModule(c).chapitres.length, 0);
  const matieresBac = BAC_MATIERES.filter((m) => m.niveau === "2bac");
  const chapitresBac = matieresBac.reduce((n, m) => n + m.chapitres.length, 0);
  const quizPublies = quiz.filter((q) => q.available);
  const questionsQcm =
    quizPublies.reduce((n, q) => n + (q.questions || []).length, 0) +
    coursPublies.reduce((n, c) => n + fsjesModule(c).chapitres.reduce((k, ch) => k + ch.qcm.length, 0), 0);

  // Six derniers sujets par date d'ajout. Sans date d'ajout, la fin du
  // tableau reste la plus récente (lib/store.js addItem).
  const dates = allConcours.filter((c) => c.date_ajout);
  const recentConcours = dates.length >= 6
    ? [...dates].sort((a, b) => b.date_ajout.localeCompare(a.date_ajout)).slice(0, 6)
    : allConcours.slice(-6).reverse();
  const plusRecent = recentConcours[0]?.date_ajout || "";
  const concoursLicence = allConcours.filter(isLicenceExcellence);
  const concoursMaster = allConcours.length - concoursLicence.length;
  const corrigesMaster = allConcours.filter((c) => !isLicenceExcellence(c) && (c.corrige_md || corrigeIds.has(c.id))).length;
  const recentPosts = blog
    .filter((p) => p.available)
    .sort((a, b) => (b.publishedAt || "").localeCompare(a.publishedAt || ""))
    .slice(0, 3);
  const modulesParSemestre = Object.fromEntries(LICENCE_SEMESTRES.map((s) => [s.code, coursPublies.filter((c) => c.semestre === s.code).length]));

  const ligneSujet = (c) =>
    concoursCardHtml(
      { ...c, hasCorrige: Boolean(c.corrige_md) || corrigeIds.has(c.id) },
      { dl: false, badgeNiveau: true, nouveau: Boolean(plusRecent) && c.date_ajout === plusRecent }
    );

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "home", rails: true }) }} />

      <div className="bac-space">
        <div className="bac-wrap">
          <section className="home-intro">
            <h1>Cours, exercices et concours en économie & gestion au Maroc</h1>
            <p className="home-lead">
              Cours du Bac Sciences Économiques et de la Licence FSJES, {allConcours.length} sujets réels de concours
              Master et licence d&apos;excellence, corrigés et {questionsQcm} questions de QCM. Gratuit, sans inscription.
            </p>
            <form className="home-search" action="/recherche" method="get" role="search">
              <Icon name="search" size={18} />
              <input
                type="search"
                name="q"
                placeholder="Concours, cours, faculté…"
                aria-label="Rechercher dans tout le site"
                autoComplete="off"
                enterKeyHint="search"
              />
              <button type="submit" className="dl-btn">
                Rechercher
              </button>
            </form>
            <div className="home-suggest">
              <span>Souvent cherché :</span>
              {SUGGESTIONS.map((q) => (
                <a key={q} href={`/recherche?q=${encodeURIComponent(q)}`}>
                  {q}
                </a>
              ))}
            </div>
          </section>

          <section className="home-levels-wrap" aria-labelledby="homeLevelsTitle">
            <h2 className="home-q" id="homeLevelsTitle">
              Tu prépares quoi ?
            </h2>
            <div className="home-levels" role="tablist" aria-labelledby="homeLevelsTitle">
              {[
                ["bac", "Bac"],
                ["licence", "Licence"],
                ["master", "Master"],
              ].map(([code, label]) => (
                <button
                  key={code}
                  type="button"
                  role="tab"
                  className="home-level"
                  id={`homeTab-${code}`}
                  data-level={code}
                  aria-controls={`homePanel-${code}`}
                  aria-selected={code === NIVEAU_DEFAUT ? "true" : "false"}
                  tabIndex={code === NIVEAU_DEFAUT ? 0 : -1}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Rempli dans le navigateur s'il y a un chapitre en cours
               (chrome.js, initProgressMarks) : le premier geste d'un élève qui
               revient est de reprendre là où il s'était arrêté. */}
            <div data-resume="*" hidden style={{ marginTop: 18 }} />

            <div className="home-panel" role="tabpanel" id="homePanel-bac" aria-labelledby="homeTab-bac" data-panel="bac" hidden={NIVEAU_DEFAUT !== "bac"}>
              <a className="home-main" href="/bac/2bac">
                <span>
                  <span className="home-main-title">Cours 2ᵉ Bac Sciences Économiques & Gestion</span>
                  <span className="home-main-sub">
                    {matieresBac.length} matières · {chapitresBac} chapitres, chacun avec cours, exercices corrigés, résumé et QCM.
                  </span>
                </span>
                <Icon name="arrow-right" size={22} />
              </a>
              <div className="home-sub-title">
                <h3>Les matières</h3>
              </div>
              <div className="home-links">
                {matieresBac.map((m) => (
                  <a key={m.slug} className="home-link" href={bacMatiereHref(m)}>
                    <strong lang={m.lang || undefined}>{m.nom}</strong>
                    <span>
                      {m.chapitres.length} chapitres{m.examen ? " · examen national" : ""}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div
              className="home-panel"
              role="tabpanel"
              id="homePanel-licence"
              aria-labelledby="homeTab-licence"
              data-panel="licence"
              hidden={NIVEAU_DEFAUT !== "licence"}
            >
              <a className="home-main" href="/cours">
                <span>
                  <span className="home-main-title">Cours Licence FSJES Économie & Gestion</span>
                  <span className="home-main-sub">
                    {coursPublies.length} modules · {chapitresFsjes} chapitres corrigés, du S1 au S6.
                  </span>
                </span>
                <Icon name="arrow-right" size={22} />
              </a>
              <div className="home-sub-title">
                <h3>Par semestre</h3>
              </div>
              <div className="home-links">
                {LICENCE_SEMESTRES.filter((s) => modulesParSemestre[s.code] > 0).map((s) => (
                  <a key={s.code} className="home-link" href={`/cours?semestre=${s.code}`}>
                    <strong>
                      {s.label}
                      {s.specialisation ? " · spécialisation" : ""}
                    </strong>
                    <span>
                      {modulesParSemestre[s.code]} module{modulesParSemestre[s.code] > 1 ? "s" : ""}
                    </span>
                  </a>
                ))}
              </div>
              <div className="home-sub-title">
                <h3>Après le DEUG</h3>
              </div>
              <div className="home-links">
                <a className="home-link" href="/concours/licence-excellence">
                  <strong>Concours d&apos;accès aux licences d&apos;excellence</strong>
                  <span>{concoursLicence.length} sujets réels, accès direct en S5</span>
                </a>
                <a className="home-link" href="/evaluation">
                  <strong>QCM d&apos;entraînement par module</strong>
                  <span>{quizPublies.length} concours blancs corrigés</span>
                </a>
              </div>
            </div>

            <div
              className="home-panel"
              role="tabpanel"
              id="homePanel-master"
              aria-labelledby="homeTab-master"
              data-panel="master"
              hidden={NIVEAU_DEFAUT !== "master"}
            >
              <a className="home-main" href="/concours">
                <span>
                  <span className="home-main-title">Sujets de concours d&apos;accès au Master</span>
                  <span className="home-main-sub">
                    {concoursMaster} sujets réellement tombés dans les FSJES et ENCG du Maroc, {corrigesMaster} avec corrigé.
                  </span>
                </span>
                <Icon name="arrow-right" size={22} />
              </a>
              {recentConcours.length > 0 && (
                <>
                  <div className="home-sub-title">
                    <h3>Derniers sujets ajoutés</h3>
                    <a href="/concours">Tous les sujets</a>
                  </div>
                  <div className="sp-rows" dangerouslySetInnerHTML={{ __html: recentConcours.map(ligneSujet).join("") }} />
                </>
              )}
              <div className="home-sub-title">
                <h3>S&apos;entraîner</h3>
              </div>
              <div className="home-links">
                <a className="home-link" href="/evaluation">
                  <strong>Concours blancs en QCM</strong>
                  <span>{quizPublies.length} modules, corrigés question par question</span>
                </a>
                <a className="home-link" href="/blog">
                  <strong>Guides de préparation</strong>
                  <span>Matières à réviser, facultés, méthode</span>
                </a>
              </div>
            </div>
          </section>

          <div id="homeBannerAd" />

          {recentPosts.length > 0 && (
            <section className="bac-group">
              <div className="home-sub-title">
                <h2 className="bac-section-title" style={{ margin: 0 }}>
                  Derniers articles du blog
                </h2>
                <a href="/blog">Tout le blog</a>
              </div>
              <div className="sp-rows">
                {recentPosts.map((p) => {
                  const cat = categoryInfo(p.category);
                  return (
                    <a key={p.id} className="sp-row" href={`/blog/${encodeURIComponent(p.id)}`}>
                      <span className="sp-row-main">
                        <span className="sp-row-title">{p.title}</span>
                        <span className="sp-row-meta">
                          {cat && <span>{cat.label}</span>}
                          <span>{formatDateFr(p.publishedAt)}</span>
                        </span>
                      </span>
                    </a>
                  );
                })}
              </div>
            </section>
          )}

          <section className="sp-about">
            <h2>Une plateforme pour tout le parcours en économie et gestion</h2>
            <p>
              Au <strong>lycée</strong>, les cours du Bac Sciences Économiques et Sciences de Gestion Comptable suivent le
              programme officiel marocain, matière par matière et chapitre par chapitre. À l'<strong>université</strong>,
              les cours de Licence FSJES couvrent les modules du tronc commun (S1 à S4) et des filières de spécialisation
              (S5-S6). Après le DEUG, les sujets des concours de <strong>licence d'excellence</strong> préparent l'accès
              direct en S5 ; pour le <strong>Master</strong>, la base de sujets réels et les QCM permettent de préparer
              les concours d'accès des FSJES et des ENCG en conditions réelles.
            </p>
          </section>
        </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: footerHtml() }} />

      {/* Only the four AdSense fields HomeClient reads: a client component's
         props are serialized into the public HTML, and the full settings
         carry partner-ad contacts and deal notes that must stay private. */}
      <HomeClient
        settings={{
          adsEnabled: settings?.adsEnabled,
          adsHomeBannerEnabled: settings?.adsHomeBannerEnabled,
          adsPublisherId: settings?.adsPublisherId,
          adsHomeBannerSlot: settings?.adsHomeBannerSlot,
        }}
      />
    </>
  );
}
