import { getPublicConcours, getSettings, getAllCours, getAllEncg, getAllQuiz, getAllBlog, getCorrigeIdsLocal } from "@/lib/store";
import { chromeHtml, footerHtml } from "./_shared/chrome";
import { concoursCardHtml } from "./_shared/concoursCard";
import { formatDateFr } from "./_shared/format";
import { isLicenceExcellence, isMaster, isPostBac } from "@/lib/concoursNiveaux";
import { ENCG_SEMESTRES, encgAnneeLabel } from "../lib/encgTaxonomy";
import { encgModule, isEncgPublie } from "../lib/encg";
import { categoryInfo } from "../lib/blogTaxonomy";
import { BAC_MATIERES, bacMatiereHref } from "../lib/bacProgramme";
import { LICENCE_SEMESTRES } from "../lib/coursTaxonomy";
import { fsjesModule } from "../lib/fsjesChapitres";
import { ESPACES_ACTIFS, espaceClass } from "../lib/espaces";
import HomeClient from "./HomeClient";
import AdSlot from "./_shared/AdSlot";
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

// Accueil, de haut en bas :
// 1. en-tête : ce qu'est le site, la recherche, et « Je prépare… » (un lien
//    par espace, lib/espaces.js) — tout visiteur trouve sa porte d'entrée
//    sans défiler ;
// 2. les chiffres clés ;
// 3. une section par espace, bien séparées (fond alterné, titre, bouton
//    d'entrée, puis ses liens les plus utiles) — dans l'ordre du parcours ;
// 4. s'entraîner (QCM) et le blog ;
// 5. le texte de présentation (référencement), sous les listes.
// Tout est dans le HTML (indexé) : plus d'onglets qui cachaient deux tiers de
// la page. Un nouvel espace apparaît automatiquement avec une section
// générique (ses onglets) ; SECTIONS ci-dessous lui donne un contenu propre.

const SUGGESTIONS = ["CCA", "Finance", "Audit", "Agadir", "Casablanca", "Comptabilité générale"];

function nombre(n) {
  return new Intl.NumberFormat("fr-FR").format(n);
}

export default async function HomePage() {
  const [allConcours, settings, cours, encg, quiz, blog] = await Promise.all([
    getPublicConcours().catch(() => []),
    getSettings().catch(() => null),
    getAllCours().catch(() => []),
    getAllEncg().catch(() => []),
    getAllQuiz().catch(() => []),
    getAllBlog().catch(() => []),
  ]);
  const corrigeIds = getCorrigeIdsLocal();
  const aCorrige = (c) => Boolean(c.corrige_md) || corrigeIds.has(c.id);

  const coursPublies = cours.filter((c) => c.available);
  const chapitresFsjes = coursPublies.reduce((n, c) => n + fsjesModule(c).chapitres.length, 0);
  const matieresBac = BAC_MATIERES.filter((m) => m.niveau === "2bac");
  const chapitresBac = matieresBac.reduce((n, m) => n + m.chapitres.length, 0);
  const quizPublies = quiz.filter((q) => q.available);
  const questionsQcm =
    quizPublies.reduce((n, q) => n + (q.questions || []).length, 0) +
    coursPublies.reduce((n, c) => n + fsjesModule(c).chapitres.reduce((k, ch) => k + ch.qcm.length, 0), 0);

  const master = allConcours.filter(isMaster);
  const licenceExc = allConcours.filter(isLicenceExcellence);
  const etablissements = new Set(allConcours.map((c) => c.etablissement).filter(Boolean)).size;
  const corriges = allConcours.filter(aCorrige).length;

  // Cinq derniers sujets de master par date d'ajout. Sans date d'ajout, la fin
  // du tableau reste la plus récente (lib/store.js addItem).
  const dates = master.filter((c) => c.date_ajout);
  const recents = dates.length >= 5
    ? [...dates].sort((a, b) => b.date_ajout.localeCompare(a.date_ajout)).slice(0, 5)
    : master.slice(-5).reverse();
  const plusRecent = recents[0]?.date_ajout || "";
  const recentsExcellence = [...licenceExc].sort((a, b) => String(b.annee).localeCompare(String(a.annee)) || String(b.date_ajout || "").localeCompare(String(a.date_ajout || ""))).slice(0, 5);
  const etabsExcellence = new Set(licenceExc.map((c) => c.etablissement).filter(Boolean)).size;
  const recentPosts = blog
    .filter((p) => p.available)
    .sort((a, b) => (b.publishedAt || "").localeCompare(a.publishedAt || ""))
    .slice(0, 4);
  // Espace ENCG : sujets TAFEM (niveau post_bac) et cours S1 → S10.
  const tafem = allConcours.filter(isPostBac);
  const recentsTafem = [...tafem].sort((a, b) => String(b.annee).localeCompare(String(a.annee)) || String(b.date_ajout || "").localeCompare(String(a.date_ajout || ""))).slice(0, 4);
  const encgPublies = encg.filter(isEncgPublie);
  const chapitresEncg = encgPublies.reduce((n, c) => n + encgModule(c).chapitres.length, 0);
  const semestresEncg = ENCG_SEMESTRES.map((s) => ({ ...s, n: encgPublies.filter((c) => c.semestre === s.code).length })).filter((s) => s.n > 0);
  const modulesParSemestre = Object.fromEntries(LICENCE_SEMESTRES.map((s) => [s.code, coursPublies.filter((c) => c.semestre === s.code).length]));

  const ligneSujet = (c) =>
    concoursCardHtml({ ...c, hasCorrige: aCorrige(c) }, { dl: false, nouveau: Boolean(plusRecent) && c.date_ajout === plusRecent });

  // Ligne de « Je prépare… » et chiffres de chaque espace.
  const RESUME = {
    bac: { ligne: `${matieresBac.length} matières · ${chapitresBac} chapitres`, chiffres: [[matieresBac.length, "matières"], [chapitresBac, "chapitres"]] },
    licence: {
      ligne: `${coursPublies.length} modules · ${chapitresFsjes} chapitres corrigés`,
      chiffres: [[coursPublies.length, "modules"], [chapitresFsjes, "chapitres"], [quizPublies.length, "concours blancs"]],
    },
    encg: {
      ligne: [tafem.length && `${tafem.length} sujets TAFEM`, encgPublies.length && `${encgPublies.length} modules du S1 au S10`].filter(Boolean).join(" · "),
      chiffres: [
        ...(tafem.length ? [[tafem.length, "sujets TAFEM"]] : []),
        ...(encgPublies.length ? [[encgPublies.length, "modules"], [chapitresEncg, "chapitres"]] : []),
      ],
    },
    excellence: {
      ligne: `${licenceExc.length} sujets réels · accès en S5 après le DEUG`,
      chiffres: [[licenceExc.length, "sujets réels"], [licenceExc.filter(aCorrige).length, "corrigés"], [etabsExcellence, "établissements"]],
    },
    master: {
      ligne: `${nombre(master.length)} sujets réels · ${nombre(master.filter(aCorrige).length)} corrigés`,
      chiffres: [[master.length, "sujets réels"], [master.filter(aCorrige).length, "corrigés"], [etablissements, "établissements"]],
    },
  };

  // Contenu propre à chaque espace ; un espace absent d'ici affiche ses
  // onglets (section générique).
  const SECTIONS = {
    bac: (
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
    ),
    licence: (
      <>
        <div className="home-links home-links-semestres">
          {LICENCE_SEMESTRES.filter((s) => modulesParSemestre[s.code] > 0).map((s) => (
            <a key={s.code} className="home-link" href={`/cours?semestre=${s.code}`}>
              <strong>{s.label}</strong>
              <span>
                {modulesParSemestre[s.code]} module{modulesParSemestre[s.code] > 1 ? "s" : ""}
                {s.specialisation ? " · spécialisation" : ""}
              </span>
            </a>
          ))}
        </div>
        <div className="home-links home-links-wide">
          <a className="home-link" href="/evaluation">
            <strong>QCM d&apos;entraînement par module</strong>
            <span>{quizPublies.length} concours blancs corrigés question par question</span>
          </a>
          <a className="home-link" href="#excellence">
            <strong>Après le DEUG : la licence d&apos;excellence</strong>
            <span>Les concours d&apos;accès en S5 ont leur propre espace, juste en dessous</span>
          </a>
        </div>
      </>
    ),
    encg: (
      <>
        {recentsTafem.length > 0 && (
          <>
            <div className="home-subhead">
              <h3>Sujets du concours TAFEM</h3>
              <a href="/concours/post-bac">Tous les sujets</a>
            </div>
            <div className="sp-rows" dangerouslySetInnerHTML={{ __html: recentsTafem.map(ligneSujet).join("") }} />
          </>
        )}
        {semestresEncg.length > 0 && (
          <div className="home-links home-links-semestres">
            {semestresEncg.map((s) => (
              <a key={s.code} className="home-link" href={`/encg?semestre=${s.code}`}>
                <strong>{s.label}</strong>
                <span>
                  {s.n} module{s.n > 1 ? "s" : ""} · {encgAnneeLabel(s.code)}
                </span>
              </a>
            ))}
          </div>
        )}
      </>
    ),
    excellence: (
      <>
        <div className="home-subhead">
          <h3>Derniers sujets</h3>
          <a href="/concours/licence-excellence">Tous les sujets</a>
        </div>
        <div className="sp-rows" dangerouslySetInnerHTML={{ __html: recentsExcellence.map(ligneSujet).join("") }} />
      </>
    ),
    master: (
      <>
        <div className="home-subhead">
          <h3>Derniers sujets ajoutés</h3>
          <a href="/concours">Tous les sujets</a>
        </div>
        <div className="sp-rows" dangerouslySetInnerHTML={{ __html: recents.map(ligneSujet).join("") }} />
        <div className="home-suggest home-suggest-inline">
          <span>Chercher par :</span>
          {SUGGESTIONS.map((q) => (
            <a key={q} href={`/recherche?q=${encodeURIComponent(q)}`}>
              {q}
            </a>
          ))}
        </div>
      </>
    ),
  };

  const espaceIndexLicence = ESPACES_ACTIFS.findIndex((e) => e.key === "licence");

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "home", rails: true }) }} />

      <main className="home">
        <section className="home-hero">
          <div className="home-wrap home-hero-grid">
            <div className="home-hero-main">
              <p className="home-kicker">Économie et gestion · Maroc</p>
              <h1>Cours, sujets réels de concours et corrigés, du Bac au Master.</h1>
              <p className="home-lead">
                Les cours du Bac et de la Licence FSJES, {nombre(allConcours.length)} sujets de concours réellement tombés et
                leurs corrigés détaillés, {nombre(questionsQcm)} questions de QCM. Gratuit, sans inscription.
              </p>
              <form className="home-search" action="/recherche" method="get" role="search">
                <Icon name="search" size={18} />
                <input
                  type="search"
                  name="q"
                  placeholder="Un concours, une faculté, un cours…"
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
                {SUGGESTIONS.slice(0, 4).map((q) => (
                  <a key={q} href={`/recherche?q=${encodeURIComponent(q)}`}>
                    {q}
                  </a>
                ))}
              </div>
              {/* Rempli dans le navigateur s'il y a un chapitre en cours
                 (chrome.js, initProgressMarks). */}
              <div className="home-resume" data-resume="*" hidden />
            </div>

            <nav className="home-chooser" aria-labelledby="homeChooserTitle">
              <h2 id="homeChooserTitle">Je prépare…</h2>
              <ul>
                {ESPACES_ACTIFS.map((e) => (
                  <li key={e.key}>
                    <a href={e.hub} data-espace={e.key} className={espaceClass(e)}>
                      <span className="home-chooser-text">
                        <span className="home-chooser-name">{e.long}</span>
                        <span className="home-chooser-desc">{RESUME[e.key]?.ligne || e.desc}</span>
                      </span>
                      <span className="home-chooser-mine">Ton espace</span>
                      <Icon name="arrow-right" size={18} />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="home-wrap">
            <dl className="home-figures">
              <div className="esp-c-indigo">
                <dt>sujets réels de concours</dt>
                <dd>{nombre(allConcours.length)}</dd>
              </div>
              <div className="home-figure-corrige">
                <dt>corrigés détaillés</dt>
                <dd>{nombre(corriges)}</dd>
              </div>
              <div className="esp-c-teal">
                <dt>chapitres de cours</dt>
                <dd>{nombre(chapitresBac + chapitresFsjes)}</dd>
              </div>
              <div className="esp-c-orange">
                <dt>questions de QCM</dt>
                <dd>{nombre(questionsQcm)}</dd>
              </div>
            </dl>
          </div>
        </section>

        {ESPACES_ACTIFS.map((e, i) => (
          <div key={e.key} className="home-band-group">
            <section className={`home-espace ${espaceClass(e)}`} id={e.key} aria-labelledby={`home-${e.key}-title`}>
              <div className="home-wrap home-espace-grid">
                <header className="home-espace-head">
                  <p className="home-kicker">{e.audience}</p>
                  <h2 id={`home-${e.key}-title`}>{e.long}</h2>
                  <p className="home-espace-desc">{e.desc}</p>
                  {RESUME[e.key] && (
                    <ul className="home-espace-figures">
                      {RESUME[e.key].chiffres.map(([n, label]) => (
                        <li key={label}>
                          <strong>{nombre(n)}</strong> {label}
                        </li>
                      ))}
                    </ul>
                  )}
                  <a className="sp-btn primary" href={e.hub} data-espace={e.key}>
                    Ouvrir l&apos;espace {e.label}
                    <Icon name="arrow-right" size={18} />
                  </a>
                </header>
                <div className="home-espace-body">
                  {SECTIONS[e.key] || (
                    <div className="home-links">
                      {e.tabs.map((t) => (
                        <a key={t.href} className="home-link" href={t.href}>
                          <strong>{t.label}</strong>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </section>
            {i === espaceIndexLicence && (
              <div className="home-wrap">
                <AdSlot settings={settings} placement="home_mid" />
              </div>
            )}
          </div>
        ))}

        <section className="home-espace home-outils" aria-labelledby="home-outils-title">
          <div className="home-wrap">
            <div className="home-outils-grid">
              <div>
                <p className="home-kicker">S&apos;entraîner</p>
                <h2 id="home-outils-title">QCM et concours blancs</h2>
                <p className="home-espace-desc">
                  {quizPublies.length} concours blancs de 100 questions, corrigés question par question, pour réviser un module en
                  conditions d&apos;examen. Ton meilleur score reste enregistré dans ce navigateur.
                </p>
                <div className="home-links home-links-wide">
                  {quizPublies.slice(0, 4).map((q) => (
                    <a key={q.id} className="home-link" href={`/evaluation/${encodeURIComponent(q.id)}`}>
                      <strong>{q.module || q.title}</strong>
                      <span>Concours blanc · {(q.questions || []).length} questions</span>
                    </a>
                  ))}
                </div>
                <a className="home-more" href="/evaluation">
                  Tous les QCM <Icon name="arrow-right" size={16} />
                </a>
              </div>
              {recentPosts.length > 0 && (
                <div>
                  <p className="home-kicker">Méthode et orientation</p>
                  <h2>Derniers articles</h2>
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
                  <a className="home-more" href="/blog">
                    Tout le blog <Icon name="arrow-right" size={16} />
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="home-wrap sp-about home-about">
          <h2>Une plateforme pour tout le parcours en économie et gestion</h2>
          <p>
            Au <strong>lycée</strong>, les cours du Bac Sciences Économiques et Sciences de Gestion Comptable suivent le
            programme officiel marocain, matière par matière et chapitre par chapitre, avec les examens nationaux. À
            l&apos;<strong>université</strong>, les cours de Licence FSJES couvrent les modules du tronc commun (S1 à S4) et des
            filières de spécialisation (S5-S6). Après le DEUG, les sujets des concours de <strong>licence d&apos;excellence</strong>{" "}
            préparent l&apos;accès direct en S5 ; pour le <strong>Master</strong>, la base de sujets réels et les QCM permettent de
            préparer les concours d&apos;accès des FSJES et des ENCG en conditions réelles.
          </p>
        </section>
      </main>

      <div dangerouslySetInnerHTML={{ __html: footerHtml() }} />

      <HomeClient />
    </>
  );
}
