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

export default function BacAdmin() {
  const [data, setData] = useState(null);
  const [erreur, setErreur] = useState(null);
  const [niveau, setNiveau] = useState("2bac");

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

  return (
    <div className="bac-adm">
      <div className="stat-grid">
        <StatCard icon="eye" label="Vues des pages Bac" value={resume.vuesTotal} sub="Depuis le début du suivi" />
        <StatCard icon="checkCircle" label="Chapitres rédigés" value={`${resume.chapitresRediges} / ${resume.chapitresTotal}`} sub={`${pctRedige} % du programme`} />
        <StatCard icon="book" label="Matières" value={resume.matieres} sub={`${resume.niveaux} niveaux`} />
        <StatCard icon="clipboard" label="Questions de QCM" value={qcmTotal} sub="Tous chapitres confondus" />
      </div>

      <div className="bac-adm-tabs" role="tablist">
        {niveaux.map((n) => (
          <button key={n.code} type="button" role="tab" aria-selected={n.code === niveau} className={`admin-btn small ${n.code === niveau ? "" : "secondary"}`} onClick={() => setNiveau(n.code)}>
            {n.label} · {n.chapitresRediges}/{n.chapitresTotal} · {formatNumber(n.vues)} vues
          </button>
        ))}
      </div>

      <div className="admin-card bac-adm-card">
        <div className="bac-adm-card-head">
          <h3>
            {niv.label} — {niv.filieres.join(", ")}
          </h3>
          <a className="admin-link-btn" href={niv.href} target="_blank" rel="noopener noreferrer">
            Ouvrir la page ↗
          </a>
        </div>
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Matière</th>
                <th>Groupe</th>
                <th>Contenu rédigé</th>
                <th>QCM</th>
                <th>Vues</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {niv.matieres.map((m) => (
                <tr key={m.slug}>
                  <td data-label="Matière">
                    <span dir={m.lang === "ar" ? "rtl" : undefined}>
                      {m.icon} {m.nom}
                    </span>
                    {m.examen && <span className="bac-adm-badge">{m.examen}</span>}
                  </td>
                  <td data-label="Groupe">{m.groupe}</td>
                  <td data-label="Contenu rédigé">
                    <Progress fait={m.chapitresRediges} total={m.chapitresTotal} />
                  </td>
                  <td data-label="QCM">{formatNumber(m.qcmTotal)}</td>
                  <td data-label="Vues">{formatNumber(m.vues)}</td>
                  <td data-label="">
                    <a className="admin-link-btn" href={m.href} target="_blank" rel="noopener noreferrer">
                      Voir ↗
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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

      <div className="admin-card bac-adm-card">
        <div className="bac-adm-card-head">
          <h3>Détail des chapitres — {niv.label}</h3>
        </div>
        {niv.matieres.map((m) => (
          <details key={m.slug} className="bac-adm-details">
            <summary>
              <span dir={m.lang === "ar" ? "rtl" : undefined}>
                {m.icon} {m.nom}
              </span>
              <span className="bac-adm-muted">
                {m.chapitresRediges}/{m.chapitresTotal} rédigés · {formatNumber(m.vues)} vues
              </span>
            </summary>
            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>N°</th>
                    <th>Chapitre</th>
                    <th>Semestre</th>
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
                      <td data-label="Chapitre" dir={m.lang === "ar" ? "rtl" : undefined}>
                        {c.titre}
                      </td>
                      <td data-label="Semestre">{c.semestre}</td>
                      <td data-label="Statut">
                        <span className={`bac-adm-status ${c.redige ? "ok" : ""}`}>{c.redige ? "Rédigé" : "À rédiger"}</span>
                        {c.modifieLe && (
                          <span className="bac-adm-status edit" title={new Date(c.modifieLe).toLocaleString("fr-FR")}>
                            {" "}
                            Modifié dans l'admin
                          </span>
                        )}
                      </td>
                      <td data-label="QCM">{c.qcm}</td>
                      <td data-label="Vues">{formatNumber(c.vues)}</td>
                      <td data-label="">
                        <Link className="admin-btn small" href={`/admin/bac/modifier?id=${encodeURIComponent(c.id)}`}>
                          {c.redige ? "Modifier" : "Rédiger"}
                        </Link>{" "}
                        <a className="admin-link-btn" href={c.href} target="_blank" rel="noopener noreferrer">
                          Voir ↗
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </details>
        ))}
      </div>

      <p className="bac-adm-muted">
        Cliquez sur « Modifier » pour changer le cours, les exercices, le résumé ou le QCM d'un chapitre. Chaque enregistrement est publié sur GitHub
        (fichier <code>data/bac.json</code>) et apparaît en ligne après le redéploiement automatique ; « Rétablir l'original » annule vos changements.
      </p>
    </div>
  );
}
