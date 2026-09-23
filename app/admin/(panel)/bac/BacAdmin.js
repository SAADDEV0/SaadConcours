"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import StatCard from "@/app/admin/_components/dashboard/StatCard";
import BarList from "@/app/admin/_components/dashboard/BarList";
import Skeleton from "@/app/admin/_components/ui/Skeleton";
import EmptyState from "@/app/admin/_components/ui/EmptyState";
import { formatNumber } from "@/app/admin/_lib/format";

function Progress({ fait, total }) {
  const pct = total ? Math.round((fait / total) * 100) : 0;
  return (
    <div className="bac-adm-progress" title={`${fait} / ${total}`}>
      <div className="bac-adm-progress-track">
        <div className="bac-adm-progress-fill" style={{ width: `${pct}%`, background: pct === 100 ? "var(--green, #16a34a)" : "var(--accent)" }} />
      </div>
      <span>
        {fait}/{total} · {pct} %
      </span>
    </div>
  );
}

function editHref(c) {
  return `/admin/bac/modifier?id=${encodeURIComponent(c.id)}`;
}

export default function BacAdmin() {
  const [data, setData] = useState(null);
  const [erreur, setErreur] = useState(null);
  const [niveau, setNiveau] = useState("2bac");
  const [ouverte, setOuverte] = useState(null);

  useEffect(() => {
    let actif = true;
    fetch("/api/admin/bac-stats", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(`HTTP ${r.status}`))))
      .then((d) => actif && setData(d))
      .catch((e) => actif && setErreur(e.message));
    return () => {
      actif = false;
    };
  }, []);

  if (erreur) return <EmptyState icon="alertTriangle" title="Impossible de charger les données Bac" message={erreur} />;
  if (!data) return <Skeleton lines={8} />;

  const { resume, niveaux, topChapitres } = data;
  const niv = niveaux.find((n) => n.code === niveau) || niveaux[0];
  const qcmTotal = niveaux.reduce((s, n) => s + n.matieres.reduce((a, m) => a + m.qcmTotal, 0), 0);
  const pctRedige = resume.chapitresTotal ? Math.round((resume.chapitresRediges / resume.chapitresTotal) * 100) : 0;
  const basculer = (slug) => setOuverte((o) => (o === slug ? null : slug));

  return (
    <div className="bac-adm">
      <div className="bac-adm-guide">
        <strong>✏️ Modifier un cours</strong>
        <ol>
          <li>Choisissez le niveau (1ère ou 2ème Bac) ci-dessous.</li>
          <li>
            Cliquez sur <b>« Chapitres »</b> à côté de la matière : la liste de ses chapitres s'ouvre.
          </li>
          <li>
            Cliquez sur <b>« Modifier »</b> (ou <b>« Rédiger »</b> pour un chapitre vide) : vous pouvez changer le cours, les exercices, le résumé et le QCM, puis{" "}
            <b>Enregistrer</b>.
          </li>
        </ol>
        <span className="bac-adm-muted">Le changement apparaît sur le site après le redéploiement automatique (quelques minutes).</span>
      </div>

      <div className="stat-grid">
        <StatCard icon="eye" label="Vues des pages Bac" value={resume.vuesTotal} sub="Depuis le début du suivi" />
        <StatCard icon="checkCircle" label="Chapitres rédigés" value={`${resume.chapitresRediges} / ${resume.chapitresTotal}`} sub={`${pctRedige} % du programme`} />
        <StatCard icon="book" label="Matières" value={resume.matieres} sub={`${resume.niveaux} niveaux`} />
        <StatCard icon="clipboard" label="Questions de QCM" value={qcmTotal} sub="Tous chapitres confondus" />
      </div>

      <div className="bac-adm-tabs" role="tablist">
        {niveaux.map((n) => (
          <button
            key={n.code}
            type="button"
            role="tab"
            aria-selected={n.code === niveau}
            className={`admin-btn ${n.code === niveau ? "" : "secondary"}`}
            onClick={() => {
              setNiveau(n.code);
              setOuverte(null);
            }}
          >
            {n.label} · {n.chapitresRediges}/{n.chapitresTotal} rédigés
          </button>
        ))}
      </div>

      <div className="admin-card bac-adm-card">
        <div className="bac-adm-card-head">
          <h3>
            {niv.label} — matières et chapitres
          </h3>
          <a className="admin-link-btn" href={niv.href} target="_blank" rel="noopener noreferrer">
            Voir la page publique ↗
          </a>
        </div>

        <div className="bac-adm-mats">
          {niv.matieres.map((m) => {
            const open = ouverte === m.slug;
            return (
              <div key={m.slug} className={`bac-adm-mat${open ? " open" : ""}`}>
                <div className="bac-adm-mat-row">
                  <div className="bac-adm-mat-name">
                    <span dir={m.lang === "ar" ? "rtl" : undefined}>
                      {m.icon} {m.nom}
                    </span>
                    <span className="bac-adm-muted">
                      {m.groupe}
                      {m.examen ? ` · ${m.examen}` : ""} · {formatNumber(m.qcmTotal)} questions QCM · {formatNumber(m.vues)} vues
                    </span>
                  </div>
                  <Progress fait={m.chapitresRediges} total={m.chapitresTotal} />
                  <button type="button" className={`admin-btn small ${open ? "secondary" : ""}`} aria-expanded={open} onClick={() => basculer(m.slug)}>
                    {open ? "Fermer" : `Chapitres (${m.chapitresTotal}) ▾`}
                  </button>
                </div>

                {open && (
                  <div className="admin-table-wrap bac-adm-chaps">
                    <table className="admin-table">
                      <thead>
                        <tr>
                          <th>N°</th>
                          <th>Chapitre</th>
                          <th>Statut</th>
                          <th>QCM</th>
                          <th>Vues</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {m.chapitres.map((c) => (
                          <tr key={c.slug}>
                            <td data-label="N°">{c.numero}</td>
                            <td data-label="Chapitre">
                              <span dir={m.lang === "ar" ? "rtl" : undefined}>{c.titre}</span>
                              <span className="bac-adm-muted"> · {c.semestre}</span>
                            </td>
                            <td data-label="Statut">
                              <span className={`bac-adm-status ${c.redige ? "ok" : ""}`}>{c.redige ? "Rédigé" : "À rédiger"}</span>
                              {c.modifieLe && (
                                <span className="bac-adm-status edit" title={new Date(c.modifieLe).toLocaleString("fr-FR")}>
                                  Modifié dans l'admin
                                </span>
                              )}
                            </td>
                            <td data-label="QCM">{c.qcm}</td>
                            <td data-label="Vues">{formatNumber(c.vues)}</td>
                            <td data-label="" className="bac-adm-actions">
                              <Link className="admin-btn small" href={editHref(c)}>
                                ✏️ {c.redige ? "Modifier" : "Rédiger"}
                              </Link>
                              <a className="admin-link-btn" href={c.href} target="_blank" rel="noopener noreferrer">
                                Voir ↗
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="bac-adm-cols">
        <div className="admin-card bac-adm-card">
          <div className="bac-adm-card-head">
            <h3>Chapitres les plus consultés</h3>
          </div>
          {topChapitres.length ? (
            <BarList items={topChapitres.map((c) => ({ label: c.label, value: c.vues }))} />
          ) : (
            <p className="bac-adm-muted">Aucune visite enregistrée sur les chapitres pour l'instant.</p>
          )}
        </div>
        <div className="admin-card bac-adm-card">
          <div className="bac-adm-card-head">
            <h3>Vues par matière — {niv.label}</h3>
          </div>
          {niv.matieres.some((m) => m.vues > 0) ? (
            <BarList items={[...niv.matieres].sort((a, b) => b.vues - a.vues).map((m) => ({ label: m.court, value: m.vues }))} />
          ) : (
            <p className="bac-adm-muted">Aucune visite enregistrée pour ce niveau pour l'instant.</p>
          )}
        </div>
      </div>
    </div>
  );
}
