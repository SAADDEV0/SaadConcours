import { notFound } from "next/navigation";
import { chromeHtml, footerHtml } from "../../../_shared/chrome";
import ChromeInit from "../../../_shared/ChromeInit";
import { getBacMatiereEffectif } from "../../../../lib/bacContenuEffectif";
import { BAC_MATIERES, bacNiveauInfo, findBacMatiere, bacChapitreHref, bacTextDir } from "../../../../lib/bacProgramme";
import { bacNationauxSeries, bacNationalHref, bacNationalContenu } from "../../../../lib/bacNationaux";

export const dynamic = "force-static";
export const revalidate = false;

const RESSOURCES = ["Cours", "Exercices", "Résumé", "QCM"];

export function generateStaticParams() {
  return BAC_MATIERES.map((m) => ({ niveau: m.niveau, matiere: m.slug }));
}

export async function generateMetadata(props) {
  const { niveau, matiere } = await props.params;
  const m = findBacMatiere(niveau, matiere);
  if (!m) return {};
  const niv = bacNiveauInfo(niveau);
  return {
    title: `${m.nom} — ${niv.label} Sciences Économiques`,
    description: `${m.nom} ${niv.label} : ${m.description}`,
    alternates: { canonical: `/bac/${niveau}/${matiere}` },
  };
}

export default async function BacMatierePage(props) {
  const { niveau, matiere } = await props.params;
  const m = findBacMatiere(niveau, matiere);
  if (!m) notFound();
  const niv = bacNiveauInfo(niveau);
  const contenu = await getBacMatiereEffectif(niveau, matiere);
  // Examens réellement en ligne (2ème Bac) ; sinon, grille « Bientôt » du programme.
  const series = bacNationauxSeries(niveau, matiere);
  const nbExamens = series.length ? new Set(series.flatMap((s) => s.annees.flatMap((a) => [a.normale, a.rattrapage].filter(Boolean)))).size : m.examen?.annees.length;

  return (
    <>
      <ChromeInit />
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "cours", showSearch: false }) }} />

      <div className="bac-space" style={{ "--mat-h": m.hue }}>
        <div className="bac-wrap">
          <nav className="cd-breadcrumb">
            <a href="/">Accueil</a> <span>/</span> <a href="/bac">Cours Bac</a> <span>/</span> <a href={`/bac/${niveau}`}>{niv.label}</a> <span>/</span> <span {...bacTextDir(m)}>{m.court}</span>
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
                <span className="bac-stat">
                  <strong>6</strong> devoirs
                </span>
                {m.examen && (
                  <span className="bac-stat">
                    <strong>{nbExamens}</strong> {m.examen.pluriel.toLowerCase()}
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
                {m.examen && (
                  <a href="#examens" className="bac-side-link">
                    {m.examen.pluriel}
                    <span>{nbExamens}</span>
                  </a>
                )}
              </div>
              <div className="bac-side-card">
                <div className="bac-side-title">Documents officiels</div>
                <div className="bac-side-doc">
                  📄 Programme pédagogique <em>Bientôt</em>
                </div>
                {m.examen && (
                  <div className="bac-side-doc">
                    📋 Cadre de référence de l'examen <em>Bientôt</em>
                  </div>
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
                        {u.chapitres.map((c) => {
                          const dispo = Boolean(contenu[c.slug]);
                          return (
                            <li key={c.slug}>
                              <a className="bac-chap-row" href={bacChapitreHref(m, c)}>
                                <span className="bac-chap-num">{c.numero}</span>
                                <span className="bac-chap-title">{c.titre}</span>
                                <span className="bac-chap-res">
                                  {RESSOURCES.map((r) => (
                                    <span key={r} className={`bac-res-chip${dispo ? " on" : ""}`}>
                                      {r}
                                    </span>
                                  ))}
                                </span>
                                {dispo ? <span className="bac-dispo">Disponible</span> : <span className="bac-soon">Bientôt</span>}
                              </a>
                            </li>
                          );
                        })}
                      </ol>
                    </div>
                  ))}

                  <div className="bac-devoirs">
                    <div className="bac-devoirs-title">📝 Devoirs corrigés — {s.label}</div>
                    <div className="bac-devoirs-grid">
                      {[1, 2, 3].map((d) => (
                        <div key={d} className="bac-devoir">
                          <strong>Devoir {d}</strong>
                          <span>Bientôt</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              ))}

              {m.examen && (
                <section id="examens" className="bac-semestre">
                  <h2 className="bac-semestre-title">
                    <span className="bac-semestre-code">🏆</span>
                    {m.examen.label}
                  </h2>
                  {series.map((serie) => (
                    <div key={serie.filiere.code} className="bac-nat-serie">
                      <h3 className="bac-nat-serie-title">
                        <span className="bac-nat-fil">{serie.filiere.court}</span> {serie.filiere.label}
                      </h3>
                      {serie.note && <p className="bac-nat-note">{serie.note}</p>}
                      <div className="bac-exam-grid">
                        {serie.annees.map((a) => (
                          <div key={a.annee} className="bac-exam">
                            <div className="bac-exam-year">{a.annee}</div>
                            <div className="bac-exam-sessions">
                              {["normale", "rattrapage"].map((ses) =>
                                a[ses] ? (
                                  <a key={ses} href={bacNationalHref(m, a[ses])} className="on" title={bacNationalContenu(a[ses]).label}>
                                    {ses === "normale" ? "Normale" : "Rattrapage"}
                                    {a[ses].docs.some((d) => d.type === "corrige") ? " ✓" : ""}
                                  </a>
                                ) : (
                                  <span key={ses}>{ses === "normale" ? "Normale" : "Rattrapage"} —</span>
                                )
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                  {!series.length && (
                  <div className="bac-exam-grid">
                    {m.examen.annees.map((y) => (
                      <div key={y} className="bac-exam">
                        <div className="bac-exam-year">{y}</div>
                        <div className="bac-exam-sessions">
                          <span>Normale</span>
                          <span>Rattrapage</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  )}
                  {series.length > 0 && <p className="bac-nat-legend">✓ = sujet et corrigé · les sessions grisées ne sont pas publiées en ligne.</p>}
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
