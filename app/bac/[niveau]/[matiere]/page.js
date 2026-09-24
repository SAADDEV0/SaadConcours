import { notFound } from "next/navigation";
import { chromeHtml, footerHtml } from "../../../_shared/chrome";
import ChromeInit from "../../../_shared/ChromeInit";
import { getBacMatiereEffectif } from "../../../../lib/bacContenuEffectif";
import { BAC_MATIERES_PUBLIEES, bacNiveauInfo, findBacMatiere, bacChapitreHref, bacTextDir } from "../../../../lib/bacProgramme";
import { NATIONAL_SOURCES, bacNationauxSeries, bacNationalPdf, bacNationalDocLabel } from "../../../../lib/bacNationaux";

export const dynamic = "force-static";
export const revalidate = false;
export const dynamicParams = false;

const RESSOURCES = ["Cours", "Exercices", "Résumé", "QCM"];

export function generateStaticParams() {
  return BAC_MATIERES_PUBLIEES.map((m) => ({ niveau: m.niveau, matiere: m.slug }));
}

export async function generateMetadata(props) {
  const { niveau, matiere } = await props.params;
  const m = findBacMatiere(niveau, matiere);
  const niv = bacNiveauInfo(niveau);
  if (!m || !niv?.available) return {};
  return {
    title: `${m.nom} — ${niv.label} Sciences Économiques`,
    description: `${m.nom} ${niv.label} : ${m.description}`,
    alternates: { canonical: `/bac/${niveau}/${matiere}` },
  };
}

// Libellé court d'un PDF dans la grille des examens (« Sujet », « Corrigé AR »…).
function docCourt(d) {
  if (d.part === "Sujet et corrigé") return "Sujet + corrigé";
  return [d.type === "sujet" ? "Sujet" : "Corrigé", d.part, d.langue?.toUpperCase()].filter(Boolean).join(" ");
}

const SESSION_LABEL = { normale: "Normale", rattrapage: "Rattrapage" };

export default async function BacMatierePage(props) {
  const { niveau, matiere } = await props.params;
  const m = findBacMatiere(niveau, matiere);
  const niv = bacNiveauInfo(niveau);
  if (!m || !niv?.available) notFound();
  const contenu = await getBacMatiereEffectif(niveau, matiere);
  // Les examens nationaux sont listés ici, en liens directs vers les PDF.
  // Jusqu'au 2026-09-24, chaque session avait sa propre page
  // (/bac/.../examens/<id>) : 289 pages de ~90 mots autour d'un seul PDF,
  // le profil exact du « low value content » refusé par AdSense.
  const series = bacNationauxSeries(niveau, matiere);
  const nbExamens = new Set(series.flatMap((s) => s.annees.flatMap((a) => [a.normale, a.rattrapage].filter(Boolean)))).size;
  const sourcesCorriges = [
    ...new Set(series.flatMap((s) => s.annees.flatMap((a) => [a.normale, a.rattrapage].filter(Boolean).flatMap((e) => e.docs.map((d) => d.src))))),
  ]
    .map((s) => NATIONAL_SOURCES[s])
    .filter(Boolean);
  const examen = m.examen || { label: "Examens nationaux corrigés", pluriel: "Examens nationaux" };

  return (
    <>
      <ChromeInit />
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "bac", showSearch: false }) }} />

      <div className="bac-space" style={{ "--mat-h": m.hue }}>
        <div className="bac-wrap">
          <nav className="cd-breadcrumb">
            <a href="/">Accueil</a> <span>/</span> <a href={`/bac/${niveau}`}>Cours Bac · {niv.label}</a> <span>/</span>{" "}
            <span {...bacTextDir(m)}>{m.court}</span>
          </nav>

          <div className="bac-mat-hero">
            <span className="bac-mat-hero-icon">{m.icon}</span>
            <div className="bac-mat-hero-body">
              <div className="bac-eyebrow">
                {niv.label} · {niv.filieres.map((f) => f.code.toUpperCase()).join(" & ")}
              </div>
              <h1 {...bacTextDir(m)}>{m.nom}</h1>
              <p {...bacTextDir(m)}>{m.description}</p>
              <div className="bac-hero-stats">
                <span className="bac-stat">
                  <strong>{m.chapitres.length}</strong> chapitres
                </span>
                <span className="bac-stat">
                  <strong>{m.nbUnites}</strong> unité{m.nbUnites > 1 ? "s" : ""}
                </span>
                {nbExamens > 0 && (
                  <span className="bac-stat">
                    <strong>{nbExamens}</strong> {examen.pluriel.toLowerCase()}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="bac-mat-layout">
            <aside className="bac-side">
              <div className="bac-side-card">
                <div className="bac-side-title">Sommaire</div>
                {m.semestres.map((s) => (
                  <a key={s.code} href={`#${s.code}`} className="bac-side-link">
                    {s.label}
                    <span>{s.unites.reduce((n, u) => n + u.chapitres.length, 0)} ch.</span>
                  </a>
                ))}
                {nbExamens > 0 && (
                  <a href="#examens" className="bac-side-link">
                    {examen.pluriel}
                    <span>{nbExamens}</span>
                  </a>
                )}
              </div>
            </aside>

            <main className="bac-main">
              {m.semestres.map((s) => (
                <section key={s.code} id={s.code} className="bac-semestre">
                  <h2 className="bac-semestre-title">
                    <span className="bac-semestre-code">{s.code}</span>
                    {s.label}
                  </h2>

                  {s.unites.map((u) => (
                    <div key={u.numero} className="bac-unite" {...bacTextDir(m)}>
                      <div className="bac-unite-head">
                        {m.lang !== "ar" && <span className="bac-unite-num">Unité {u.numero}</span>}
                        <h3>{u.titre}</h3>
                      </div>
                      <ol className="bac-chap-list">
                        {u.chapitres.map((c) => (
                          <li key={c.slug}>
                            {/* Un chapitre pas encore rédigé n'a pas de page (voir
                               generateStaticParams du chapitre) : titre seul, sans
                               lien ni badge « Bientôt ». */}
                            {contenu[c.slug] ? (
                              <a className="bac-chap-row" href={bacChapitreHref(m, c)}>
                                <span className="bac-chap-num">{c.numero}</span>
                                <span className="bac-chap-title">{c.titre}</span>
                                <span className="bac-chap-res">
                                  {RESSOURCES.map((r) => (
                                    <span key={r} className="bac-res-chip on">
                                      {r}
                                    </span>
                                  ))}
                                </span>
                              </a>
                            ) : (
                              <div className="bac-chap-row">
                                <span className="bac-chap-num">{c.numero}</span>
                                <span className="bac-chap-title">{c.titre}</span>
                              </div>
                            )}
                          </li>
                        ))}
                      </ol>
                    </div>
                  ))}
                </section>
              ))}

              {nbExamens > 0 && (
                <section id="examens" className="bac-semestre">
                  <h2 className="bac-semestre-title">
                    <span className="bac-semestre-code">🏆</span>
                    {examen.label}
                  </h2>
                  <p className="bac-nat-note">
                    Les sujets de l&apos;examen national des sessions précédentes, en PDF, avec leur corrigé quand il est
                    disponible. Traite le sujet en temps limité avant d&apos;ouvrir le corrigé.
                  </p>
                  {series.map((serie) => (
                    <div key={serie.filiere.code} className="bac-nat-serie">
                      <h3 className="bac-nat-serie-title">
                        <span className="bac-nat-fil">{serie.filiere.court}</span> {serie.filiere.label}
                      </h3>
                      {serie.note && <p className="bac-nat-note">{serie.note}</p>}
                      <div className="bac-exam-grid bac-exam-grid-docs">
                        {serie.annees.map((a) => (
                          <div key={a.annee} className="bac-exam">
                            <div className="bac-exam-year">{a.annee}</div>
                            <div className="bac-exam-sessions">
                              {["normale", "rattrapage"].map((ses) =>
                                a[ses] ? (
                                  <div key={ses} className="bac-exam-ses">
                                    <div className="bac-exam-ses-label">{SESSION_LABEL[ses]}</div>
                                    <div className="bac-exam-ses-links">
                                      {a[ses].docs.map((d) => (
                                        <a
                                          key={d.file}
                                          href={bacNationalPdf(d)}
                                          target="_blank"
                                          rel="noopener"
                                          className="on"
                                          title={`${bacNationalDocLabel(d)} — ${m.court} ${a.annee}, session ${SESSION_LABEL[ses].toLowerCase()} (PDF)`}
                                        >
                                          {docCourt(d)}
                                        </a>
                                      ))}
                                    </div>
                                  </div>
                                ) : (
                                  <span key={ses}>{SESSION_LABEL[ses]} —</span>
                                )
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                  <p className="bac-nat-legend">Les sessions grisées ne sont pas publiées en ligne.</p>
                  <p className="bac-nat-source">
                    Sujets : Ministère de l&apos;Éducation nationale, Centre national des examens. PDF et corrigés
                    (éléments de réponse officiels ou corrigés d&apos;enseignants) :{" "}
                    {sourcesCorriges.map((s, k) => (
                      <span key={s.nom}>
                        {k > 0 && ", "}
                        <a href={s.url} target="_blank" rel="noopener nofollow">
                          {s.nom}
                        </a>
                      </span>
                    ))}
                    .
                  </p>
                </section>
              )}
            </main>
          </div>
        </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: footerHtml() }} />
    </>
  );
}
