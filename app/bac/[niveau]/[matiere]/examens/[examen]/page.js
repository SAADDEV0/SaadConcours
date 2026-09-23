import { notFound } from "next/navigation";
import { chromeHtml, footerHtml } from "../../../../../_shared/chrome";
import ChromeInit from "../../../../../_shared/ChromeInit";
import { BAC_MATIERES, bacNiveauInfo, findBacMatiere, bacMatiereHref } from "../../../../../../lib/bacProgramme";
import {
  NATIONAL_FILIERES,
  NATIONAL_SOURCES,
  SESSIONS,
  bacNationauxMatiere,
  findBacNational,
  bacNationalHref,
  bacNationalId,
  bacNationalPdf,
  bacNationalDocLabel,
  bacNationalNote,
  bacNationalContenu,
  bacNationalTitre,
} from "../../../../../../lib/bacNationaux";

export const dynamic = "force-static";
export const revalidate = false;
export const dynamicParams = false;

export function generateStaticParams() {
  return BAC_MATIERES.flatMap((m) => bacNationauxMatiere(m.niveau, m.slug).map((e) => ({ niveau: m.niveau, matiere: m.slug, examen: bacNationalId(e) })));
}

export async function generateMetadata(props) {
  const { niveau, matiere, examen } = await props.params;
  const m = findBacMatiere(niveau, matiere);
  const e = m && findBacNational(niveau, matiere, examen);
  if (!e) return {};
  const f = NATIONAL_FILIERES[e.filiere];
  const { sujet, corrige } = bacNationalContenu(e);
  const quoi = sujet && corrige ? "sujet et corrigé" : sujet ? "sujet" : "corrigé";
  return {
    title: `${bacNationalTitre(m, e)} : ${quoi}`,
    description: `Examen national ${m.nom} du 2ème Bac ${f.label}, ${e.annee}, ${SESSIONS[e.session].toLowerCase()} : ${quoi} en PDF, à consulter en ligne ou à télécharger.`,
    alternates: { canonical: bacNationalHref(m, e) },
  };
}

function taille(octets) {
  if (!octets) return "";
  return octets >= 1e6 ? `${(octets / 1e6).toFixed(1).replace(".", ",")} Mo` : `${Math.round(octets / 1e3)} Ko`;
}

export default async function BacNationalPage(props) {
  const { niveau, matiere, examen } = await props.params;
  const m = findBacMatiere(niveau, matiere);
  const e = m && findBacNational(niveau, matiere, examen);
  if (!e) notFound();
  const niv = bacNiveauInfo(niveau);
  const f = NATIONAL_FILIERES[e.filiere];
  const note = bacNationalNote(e);
  const serie = bacNationauxMatiere(niveau, matiere)
    .filter((x) => x.filiere === e.filiere)
    .sort((a, b) => b.annee - a.annee || a.session.localeCompare(b.session));
  const i = serie.indexOf(e);
  const plusRecent = serie[i - 1] || null;
  const plusAncien = serie[i + 1] || null;
  const sujet = e.docs.find((d) => d.type === "sujet") || e.docs[0];
  const sources = [...new Set(e.docs.map((d) => d.src))].map((s) => NATIONAL_SOURCES[s]).filter(Boolean);

  return (
    <>
      <ChromeInit />
      <div dangerouslySetInnerHTML={{ __html: chromeHtml({ active: "cours", showSearch: false }) }} />

      <div className="bac-space" style={{ "--mat-h": m.hue }}>
        <div className="bac-wrap">
          <nav className="cd-breadcrumb">
            <a href="/">Accueil</a> <span>/</span> <a href="/bac">Cours Bac</a> <span>/</span> <a href={`/bac/${niveau}`}>{niv.label}</a> <span>/</span>{" "}
            <a href={bacMatiereHref(m)}>{m.court}</a> <span>/</span> <a href={`${bacMatiereHref(m)}#examens`}>Examens nationaux</a> <span>/</span>{" "}
            <span>
              {f.court} {e.annee} {e.session === "normale" ? "normale" : "rattrapage"}
            </span>
          </nav>

          <div className="bac-mat-layout">
            <aside className="bac-side">
              <div className="bac-side-card">
                <a href={`${bacMatiereHref(m)}#examens`} className="bac-side-back">
                  {m.icon} {m.court} · {f.court}
                </a>
                <ol className="bac-side-chaps">
                  {serie.map((x) => (
                    <li key={bacNationalId(x)}>
                      <a href={bacNationalHref(m, x)} className={x === e ? "active" : ""} aria-current={x === e ? "page" : undefined}>
                        <span>{String(x.annee).slice(2)}</span>
                        {x.annee} · {x.session === "normale" ? "Normale" : "Rattrapage"}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>

            <main className="bac-main">
              <div className="bac-chap-hero">
                <div className="bac-eyebrow">
                  Examen national · 2ème Bac {f.label}
                </div>
                <h1>
                  {m.nom} — {e.annee}, {SESSIONS[e.session].toLowerCase()}
                </h1>
                <div className="bac-chap-unite">
                  {f.court} · {bacNationalContenu(e).label}
                </div>
                {note && <p className="bac-nat-note">{note}</p>}
              </div>

              <div className="bac-nat-docs">
                {e.docs.map((d) => (
                  <div key={d.file} className={`bac-nat-doc bac-nat-doc-${d.type}`}>
                    <span className="bac-nat-doc-icon" aria-hidden="true">
                      {d.type === "sujet" ? "📄" : "✅"}
                    </span>
                    <div className="bac-nat-doc-body">
                      <strong>{bacNationalDocLabel(d)}</strong>
                      <span>PDF · {taille(d.size)}</span>
                    </div>
                    <div className="bac-nat-doc-actions">
                      <a href={bacNationalPdf(d)} target="_blank" rel="noopener" className="bac-nat-btn">
                        Ouvrir
                      </a>
                      <a href={bacNationalPdf(d)} download className="bac-nat-btn ghost">
                        Télécharger
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bac-nat-viewer">
                <iframe src={`${bacNationalPdf(sujet)}#view=FitH`} title={`${bacNationalDocLabel(sujet)} — ${bacNationalTitre(m, e)}`} loading="lazy" />
              </div>

              {e.docs.some((d) => d.type === "corrige") && (
                <p className="bac-nat-disclaimer">
                  Les corrigés proviennent des sources citées ci-dessous (éléments de réponse officiels ou corrigés d'enseignants) : entraîne-toi sur le sujet avant de
                  les consulter.
                </p>
              )}
              <p className="bac-nat-source">
                Source{sources.length > 1 ? "s" : ""} :{" "}
                {sources.map((s, k) => (
                  <span key={s.nom}>
                    {k > 0 && ", "}
                    <a href={s.url} target="_blank" rel="noopener nofollow">
                      {s.nom}
                    </a>
                  </span>
                ))}
                . Sujet : Ministère de l'Éducation nationale, Centre national des examens.
              </p>

              <nav className="bac-pager">
                {plusRecent ? (
                  <a href={bacNationalHref(m, plusRecent)} className="bac-pager-btn">
                    <span>← Plus récent</span>
                    <strong>
                      {plusRecent.annee} · {SESSIONS[plusRecent.session]}
                    </strong>
                  </a>
                ) : (
                  <span />
                )}
                {plusAncien ? (
                  <a href={bacNationalHref(m, plusAncien)} className="bac-pager-btn next">
                    <span>Plus ancien →</span>
                    <strong>
                      {plusAncien.annee} · {SESSIONS[plusAncien.session]}
                    </strong>
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
