import { getPublicConcours, getSettings, getAllCours, getAllQuiz, getAllBlog } from "@/lib/store";
import { chromeHtml, footerHtml } from "./_shared/chrome";
import { CONCOURS_HUES } from "./_shared/concoursCard";
import { isLicenceExcellence } from "@/lib/concoursNiveaux";
import { categoryInfo } from "../lib/blogTaxonomy";
import { BAC_MATIERES } from "../lib/bacProgramme";
import { fsjesModule } from "../lib/fsjesChapitres";
import HomeClient from "./HomeClient";

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

// Server-rendered (the homepage is the page most likely to earn backlinks and
// get crawled first). HomeClient only wires the header and the AdSense home
// banner, which have nothing to crawl.
//
// Le site couvre trois publics — lycée (Bac), université (Licence FSJES) et
// préparation des concours de Master — et la page d'accueil les présente à
// égalité, avec le même design que les espaces de cours (classes bac-*).
export default async function HomePage() {
  const [allConcours, settings, cours, quiz, blog] = await Promise.all([
    getPublicConcours().catch(() => []),
    getSettings().catch(() => null),
    getAllCours().catch(() => []),
    getAllQuiz().catch(() => []),
    getAllBlog().catch(() => []),
  ]);

  const coursPublies = cours.filter((c) => c.available);
  const chapitresFsjes = coursPublies.reduce((n, c) => n + fsjesModule(c).chapitres.length, 0);
  const matieresBac = BAC_MATIERES.filter((m) => m.niveau === "2bac");
  const chapitresBac = matieresBac.reduce((n, m) => n + m.chapitres.length, 0);
  const questionsQcm =
    quiz.filter((q) => q.available).reduce((n, q) => n + (q.questions || []).length, 0) +
    coursPublies.reduce((n, c) => n + fsjesModule(c).chapitres.reduce((k, ch) => k + ch.qcm.length, 0), 0);

  // Storage appends new entries to the end of the array (lib/store.js
  // addItem): tail = most recent.
  const recentConcours = allConcours.slice(-4).reverse();
  const concoursLicence = allConcours.filter(isLicenceExcellence);
  const concoursMaster = allConcours.length - concoursLicence.length;
  const recentPosts = blog
    .filter((p) => p.available)
    .sort((a, b) => (b.publishedAt || "").localeCompare(a.publishedAt || ""))
    .slice(0, 3);

  const PILIERS = [
    {
      href: "/bac/2bac",
      icon: "📘",
      hue: 152,
      eyebrow: "Lycée",
      title: "Cours Bac Sciences Économiques & Gestion",
      desc: "Économie générale, comptabilité, EOAE, droit, maths, philosophie, anglais… chaque matière du 2ᵉ Bac découpée en chapitres, avec cours, exercices corrigés, résumé et QCM.",
      stat: `${matieresBac.length} matières · ${chapitresBac} chapitres`,
    },
    {
      href: "/cours",
      icon: "🎓",
      hue: 220,
      eyebrow: "Université",
      title: "Cours Licence FSJES Économie & Gestion",
      desc: "Du S1 au S6 : comptabilité, analyse financière, macro et microéconomie, statistiques, droit, marketing, audit… chaque module découpé en chapitres corrigés.",
      stat: `${coursPublies.length} modules · ${chapitresFsjes} chapitres`,
    },
    {
      href: "/concours/licence-excellence",
      icon: "⭐",
      hue: 35,
      eyebrow: "Après le DEUG",
      title: "Concours d'accès aux Licences d'excellence",
      desc: "Les QCM et épreuves écrites des licences d'excellence en économie et gestion (accès en S5) : CCA, finance, marketing digital, commerce international, avec corrigés.",
      stat: `${concoursLicence.length} sujets réels`,
    },
    {
      href: "/concours",
      icon: "📚",
      hue: 265,
      eyebrow: "Master",
      title: "Sujets de concours d'accès au Master",
      desc: "Des sujets réellement tombés aux concours des FSJES et ENCG du Maroc, filtrables par ville, filière et année, avec corrigés indicatifs et export PDF.",
      stat: `${concoursMaster} sujets réels`,
    },
  ];

  const OUTILS = [
    { href: "/evaluation", icon: "📝", hue: 22, title: "Évaluation", desc: "Concours blancs en QCM par module, corrigés." },
    { href: "/blog", icon: "📰", hue: 330, title: "Blog", desc: "Méthode, orientation et conseils de révision." },
  ];

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "home", showSearch: true, rails: true }) }} />

      <div className="bac-space site-space">
        <div className="bac-wrap">
          <section className="bac-hero sp-home-hero" style={{ "--hero-icon": '"🎓"' }}>
            <div className="bac-eyebrow">Bac · Licence FSJES · Licence d'excellence · Master</div>
            <h1>Cours, exercices et concours en économie & gestion au Maroc</h1>
            <p>
              SaadConcours accompagne les élèves du <strong>Bac Sciences Économiques et Gestion</strong>, les étudiants
              en <strong>Licence FSJES</strong> et les candidats aux concours d'accès aux <strong>licences d'excellence</strong>
              et au <strong>Master</strong> : cours
              rédigés chapitre par chapitre, exercices corrigés, résumés, QCM et sujets réels de concours — gratuitement
              et sans inscription.
            </p>
            <div className="bac-hero-stats">
              <span className="bac-stat">
                <strong>{chapitresBac + chapitresFsjes}</strong> chapitres de cours
              </span>
              <span className="bac-stat">
                <strong>{allConcours.length}</strong> sujets de concours
              </span>
              <span className="bac-stat">
                <strong>{questionsQcm}</strong> questions de QCM
              </span>
            </div>
            <div className="sp-hero-actions">
              <a className="sp-btn primary" href="/bac/2bac">
                📘 Cours Bac
              </a>
              <a className="sp-btn primary" href="/cours">
                🎓 Cours FSJES
              </a>
              <a className="sp-btn" href="/concours">
                📚 Sujets de concours
              </a>
            </div>
          </section>

          <div id="homeBannerAd" />

          <section className="bac-group">
            <h2 className="bac-section-title">Choisis ton niveau</h2>
            <div className="sp-piliers">
              {PILIERS.map((p) => (
                <a key={p.href} className="bac-mat-card sp-pilier" href={p.href} style={{ "--mat-h": p.hue }}>
                  <span className="bac-mat-icon">{p.icon}</span>
                  <span className="bac-mat-body">
                    <span className="sp-card-kicker">{p.eyebrow}</span>
                    <span className="bac-mat-name">{p.title}</span>
                    <span className="bac-mat-desc">{p.desc}</span>
                    <span className="bac-mat-meta">
                      <span className="bac-badge">{p.stat}</span>
                    </span>
                  </span>
                  <span className="bac-mat-arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              ))}
            </div>
          </section>

          <section className="bac-group">
            <h2 className="bac-section-title">S'entraîner et s'informer</h2>
            <div className="bac-mat-grid">
              {OUTILS.map((o) => (
                <a key={o.href} className="bac-mat-card" href={o.href} style={{ "--mat-h": o.hue }}>
                  <span className="bac-mat-icon">{o.icon}</span>
                  <span className="bac-mat-body">
                    <span className="bac-mat-name">{o.title}</span>
                    <span className="bac-mat-desc">{o.desc}</span>
                  </span>
                  <span className="bac-mat-arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              ))}
            </div>
          </section>

          {recentConcours.length > 0 && (
            <section className="bac-group" id="homeRecent">
              <div className="sp-results-head">
                <h2 className="bac-section-title">Derniers sujets de concours ajoutés</h2>
                <a className="home-alert-link" href="/concours">
                  Tous les sujets →
                </a>
              </div>
              <div className="sp-card-grid">
                {recentConcours.map((c) => (
                  <a key={c.id} className="bac-mat-card sp-card" href={`/concours/${encodeURIComponent(c.id)}`} style={{ "--mat-h": CONCOURS_HUES[c.categorie] ?? 220 }}>
                    <span className="bac-mat-icon sp-year">{c.annee}</span>
                    <span className="bac-mat-body">
                      <span className="bac-mat-name">{c.master_reel || c.filiere || c.etablissement}</span>
                      <span className="bac-mat-desc">
                        🏫 {c.etablissement} · 📍 {c.ville}
                      </span>
                      <span className="bac-mat-meta">
                        {isLicenceExcellence(c) && <span className="sp-le-badge">⭐ Licence d'excellence</span>}
                        {c.date_ajout && <span>Ajouté le {c.date_ajout}</span>}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </section>
          )}

          {recentPosts.length > 0 && (
            <section className="bac-group">
              <div className="sp-results-head">
                <h2 className="bac-section-title">Derniers articles du blog</h2>
                <a className="home-alert-link" href="/blog">
                  Tout le blog →
                </a>
              </div>
              <div className="sp-card-grid">
                {recentPosts.map((p) => {
                  const cat = categoryInfo(p.category);
                  return (
                    <a key={p.id} className="bac-mat-card sp-card" href={`/blog/${encodeURIComponent(p.id)}`} style={{ "--mat-h": 330 }}>
                      <span className="bac-mat-icon">{cat?.emoji || "📰"}</span>
                      <span className="bac-mat-body">
                        {cat && <span className="sp-card-kicker">{cat.label}</span>}
                        <span className="bac-mat-name">{p.title}</span>
                        <span className="bac-mat-meta">{p.publishedAt}</span>
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
