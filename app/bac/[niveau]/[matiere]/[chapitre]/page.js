import { notFound } from "next/navigation";
import { chromeHtml, footerHtml } from "../../../../_shared/chrome";
import { BAC_MATIERES, bacNiveauInfo, findBacMatiere, findBacChapitre, bacMatiereHref, bacChapitreHref, bacTextDir } from "../../../../../lib/bacProgramme";

export const dynamic = "force-static";
export const revalidate = false;

const ONGLETS = [
  { code: "cours", label: "Cours", icon: "📖", vide: "Le cours complet de ce chapitre : définitions, explications et exemples." },
  { code: "exercices", label: "Exercices", icon: "✏️", vide: "Des exercices d'application avec leurs corrigés détaillés." },
  { code: "resume", label: "Résumé", icon: "⚡", vide: "L'essentiel à retenir en une page, pour réviser vite avant un devoir." },
  { code: "qcm", label: "QCM", icon: "✅", vide: "Un QCM pour vérifier que le chapitre est bien acquis." },
];

export function generateStaticParams() {
  return BAC_MATIERES.flatMap((m) => m.chapitres.map((c) => ({ niveau: m.niveau, matiere: m.slug, chapitre: c.slug })));
}

export async function generateMetadata(props) {
  const { niveau, matiere, chapitre } = await props.params;
  const m = findBacMatiere(niveau, matiere);
  const found = m && findBacChapitre(m, chapitre);
  if (!found) return {};
  const niv = bacNiveauInfo(niveau);
  return {
    title: `${found.chapitre.titre} — ${m.court} ${niv.label}`,
    // Pages encore vides : pas d'indexation tant que le contenu n'est pas publié.
    robots: { index: false, follow: true },
  };
}

export default async function BacChapitrePage(props) {
  const { niveau, matiere, chapitre } = await props.params;
  const m = findBacMatiere(niveau, matiere);
  const found = m && findBacChapitre(m, chapitre);
  if (!found) notFound();
  const { chapitre: c, prev, next } = found;
  const niv = bacNiveauInfo(niveau);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "cours", showSearch: false }) }} />

      <div className="bac-space" style={{ "--mat-h": m.hue }}>
        <div className="bac-wrap">
          <nav className="cd-breadcrumb">
            <a href="/">Accueil</a> <span>/</span> <a href="/bac">Cours Bac</a> <span>/</span> <a href={`/bac/${niveau}`}>{niv.label}</a> <span>/</span>{" "}
            <a href={bacMatiereHref(m)} {...bacTextDir(m)}>
              {m.court}
            </a> <span>/</span> <span>Chapitre {c.numero}</span>
          </nav>

          <div className="bac-mat-layout">
            <aside className="bac-side">
              <div className="bac-side-card">
                <a href={bacMatiereHref(m)} className="bac-side-back">
                  {m.icon} {m.court}
                </a>
                <ol className="bac-side-chaps" {...bacTextDir(m)}>
                  {m.chapitres.map((x) => (
                    <li key={x.slug}>
                      <a href={bacChapitreHref(m, x)} className={x.slug === c.slug ? "active" : ""} aria-current={x.slug === c.slug ? "page" : undefined}>
                        <span>{x.numero}</span>
                        {x.titre}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>

            <main className="bac-main">
              <div className="bac-chap-hero">
                <div className="bac-eyebrow">
                  Chapitre {c.numero} · Semestre {c.semestre.slice(1)}
                  {m.lang !== "ar" && ` · Unité ${c.uniteNumero}`}
                </div>
                <h1 {...bacTextDir(m)}>{c.titre}</h1>
                <div className="bac-chap-unite" {...bacTextDir(m)}>
                  {c.unite}
                </div>
              </div>

              <div className="bac-tabs">
                {ONGLETS.map((o, i) => (
                  <input key={o.code} type="radio" name="bac-tab" id={`tab-${o.code}`} className="bac-tab-input" defaultChecked={i === 0} />
                ))}
                <div className="bac-tab-labels" role="tablist">
                  {ONGLETS.map((o) => (
                    <label key={o.code} htmlFor={`tab-${o.code}`} className={`bac-tab-label bac-tab-label-${o.code}`}>
                      <span aria-hidden="true">{o.icon}</span> {o.label}
                    </label>
                  ))}
                </div>
                {ONGLETS.map((o) => (
                  <section key={o.code} className={`bac-tab-panel bac-tab-panel-${o.code}`}>
                    <div className="bac-empty">
                      <div className="bac-empty-icon">{o.icon}</div>
                      <div className="bac-empty-title">{o.label} en préparation</div>
                      <p>{o.vide}</p>
                    </div>
                  </section>
                ))}
              </div>

              <nav className="bac-pager">
                {prev ? (
                  <a href={bacChapitreHref(m, prev)} className="bac-pager-btn">
                    <span>← Chapitre précédent</span>
                    <strong {...bacTextDir(m)}>{prev.titre}</strong>
                  </a>
                ) : (
                  <span />
                )}
                {next ? (
                  <a href={bacChapitreHref(m, next)} className="bac-pager-btn next">
                    <span>Chapitre suivant →</span>
                    <strong {...bacTextDir(m)}>{next.titre}</strong>
                  </a>
                ) : (
                  <span />
                )}
              </nav>
            </main>
          </div>
        </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: footerHtml() }} />
    </>
  );
}
