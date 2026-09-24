import { notFound } from "next/navigation";
import { chromeHtml, footerHtml } from "../../_shared/chrome";
import NiveauSwitch from "../../_shared/NiveauSwitch";
import ChromeInit from "../../_shared/ChromeInit";
import { BAC_NIVEAUX, BAC_GROUPES, bacNiveauInfo, bacMatieres, bacMatiereHref, bacTextDir } from "../../../lib/bacProgramme";

export const dynamic = "force-static";
export const revalidate = false;

export function generateStaticParams() {
  return BAC_NIVEAUX.filter((n) => n.available).map((n) => ({ niveau: n.code }));
}

export async function generateMetadata(props) {
  const { niveau } = await props.params;
  const info = bacNiveauInfo(niveau);
  if (!info?.available) return {};
  return {
    title: `Cours ${info.label} Sciences Économiques & Gestion`,
    alternates: { canonical: `/bac/${niveau}` },
  };
}

function MatiereCard({ m }) {
  return (
    <a className="bac-mat-card" href={bacMatiereHref(m)} style={{ "--mat-h": m.hue }}>
      <span className="bac-mat-icon">{m.icon}</span>
      <span className="bac-mat-body">
        <span className="bac-mat-name" {...bacTextDir(m)}>
          {m.nom}
        </span>
        <span className="bac-mat-desc" {...bacTextDir(m)}>
          {m.description}
        </span>
        <span className="bac-mat-meta">
          <span>{m.chapitres.length} chapitres</span>
          <span className="bac-dot">·</span>
          <span>
            {m.nbUnites} unité{m.nbUnites > 1 ? "s" : ""}
          </span>
          {m.examen && <span className="bac-badge">{m.examen.badge}</span>}
        </span>
      </span>
      <span className="bac-mat-arrow" aria-hidden="true">
        →
      </span>
    </a>
  );
}

export default async function BacNiveauPage(props) {
  const { niveau } = await props.params;
  const info = bacNiveauInfo(niveau);
  if (!info?.available) notFound();

  const matieres = bacMatieres(niveau);
  const totalChapitres = matieres.reduce((n, m) => n + m.chapitres.length, 0);
  const niveauxPublies = BAC_NIVEAUX.filter((n) => n.available);

  return (
    <>
      <ChromeInit />
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "bac", showSearch: false }) }} />

      <div className="bac-space">
        <div className="bac-wrap">
          <NiveauSwitch active="bac" />

          <section className="bac-hero">
            <div className="bac-eyebrow">Lycée · Baccalauréat marocain</div>
            <h1>Cours {info.label} Sciences Économiques & Gestion</h1>
            <p>Chaque matière est découpée en chapitres, comme en classe. Pour chaque chapitre : le cours, des exercices, un résumé et un QCM, et pour les matières de l'examen national, les sujets des sessions précédentes.</p>
            <div className="bac-hero-stats">
              <span className="bac-stat">
                <strong>{matieres.length}</strong> matières
              </span>
              <span className="bac-stat">
                <strong>{totalChapitres}</strong> chapitres
              </span>
              <span className="bac-stat">
                <strong>{info.filieres.length}</strong> filière{info.filieres.length > 1 ? "s" : ""}
              </span>
            </div>
          </section>

          {/* Seuls les niveaux publiés : un onglet « Bientôt » est un marqueur de
             site en construction (voir BAC_NIVEAUX). */}
          {niveauxPublies.length > 1 && (
            <div className="bac-year-tabs" role="tablist" aria-label="Année">
              {niveauxPublies.map((n) => (
                <a key={n.code} href={`/bac/${n.code}`} className={`bac-year-tab${n.code === niveau ? " active" : ""}`} role="tab" aria-selected={n.code === niveau}>
                  {n.label}
                </a>
              ))}
            </div>
          )}

          <div className="bac-filieres">
            <span className="bac-filieres-label">{info.filieres.length > 1 ? "Programme commun aux filières" : "Filière"}</span>
            {info.filieres.map((f) => (
              <span key={f.code} className="bac-filiere-chip">
                {f.label}
              </span>
            ))}
          </div>

          {BAC_GROUPES.map((g) => {
            const list = matieres.filter((m) => m.groupe === g.code);
            if (!list.length) return null;
            return (
              <section key={g.code} className="bac-group">
                <h2 className="bac-section-title">{g.label}</h2>
                <div className="bac-mat-grid">
                  {list.map((m) => (
                    <MatiereCard key={m.slug} m={m} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: footerHtml() }} />
    </>
  );
}
