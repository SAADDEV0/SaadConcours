"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Icon from "../../_ui/Icon";
import { BarList, Seg, SectionTitle } from "../../_ui/kit";
import { downloadText } from "../../_lib/api";
import { useLocalStorage } from "../../_lib/hooks";
import { dateFr, num } from "../../_lib/format";
import { adminHrefForPath, describePdf, labelForPdfItem } from "../../_lib/labels";
import { pct, share, sumScores, toCsv } from "./shared";

const KIND_LABELS = { concours: "Concours", cours: "Cours", evaluation: "Évaluations" };
const KIND_COLORS = { concours: "#4f8cff", cours: "#0d9488", evaluation: "#a855f7" };
// En dessous, un taux de téléchargement ne veut rien dire (2 vues, 1 PDF = 50 %).
const MIN_VIEWS = 15;

export function PdfTab({ data, content }) {
  const b = data.breakdown;
  const started = Boolean(b) && data.metrics.coverage.started;
  const [stored, setScope] = useLocalStorage("ax-pdf-scope", "period");
  const scope = started ? stored : "all";
  const period = scope === "period";
  const items = useMemo(() => (period ? b.pdfItems : data.pdfItems || []), [period, b, data.pdfItems]);

  const byKind = useMemo(() => {
    if (!period) return Object.entries(data.totals?.pdfByKind || {}).map(([k, v]) => ({ key: k, value: Number(v) || 0 }));
    const acc = {};
    for (const it of items) {
      const kind = String(it.member).split(":")[0];
      acc[kind] = (acc[kind] || 0) + it.score;
    }
    return Object.entries(acc).map(([k, v]) => ({ key: k, value: v }));
  }, [period, items, data.totals]);
  const total = sumScores(items);

  function exportCsv() {
    const rows = items.map((it, i) => {
      const [kind, ...rest] = String(it.member).split(":");
      return [i + 1, KIND_LABELS[kind] || kind, labelForPdfItem(it.member, content), rest.join(":"), it.score];
    });
    downloadText(`pdf-${scope}-${data.range.from}-${data.range.to}.csv`, toCsv(["rang", "type", "titre", "identifiant", "téléchargements"], rows), "text/csv");
  }

  return (
    <>
      <div className="ax-toolbar ax-section">
        <Seg
          ariaLabel="Période du classement"
          value={scope}
          onChange={setScope}
          options={[
            { value: "period", label: `Sur la période (${data.range.short || data.range.label})`, title: started ? undefined : `Disponible à partir du ${dateFr(data.metrics.coverage.since)}` },
            { value: "all", label: "Depuis le lancement" },
          ]}
        />
        <span className="ax-muted ax-small">{num(period ? data.metrics.pdf.total : data.totals?.pdfTotal)} téléchargements</span>
        <span className="ax-spacer" />
        <button type="button" className="ax-btn sm" onClick={exportCsv} disabled={!items.length}>
          <Icon name="download" size="sm" /> CSV
        </button>
      </div>
      <div className="ax-grid main-side ax-section">
        <section className="ax-card">
          <SectionTitle aside={`${num(items.length)} documents`}>PDF les plus téléchargés</SectionTitle>
          <BarList
            limit={40}
            items={items.map((p) => {
              const [kind, ...rest] = String(p.member).split(":");
              const d = describePdf(kind, rest.join(":"), content);
              return { key: p.member, label: `${labelForPdfItem(p.member, content)} · ${pct(share(p.score, total), 0)}`, value: p.score, href: d.edit || undefined, color: KIND_COLORS[kind] };
            })}
          />
        </section>
        <div className="ax-stack">
          <section className="ax-card">
            <SectionTitle>Par type</SectionTitle>
            <BarList items={byKind.map((k) => ({ key: k.key, label: KIND_LABELS[k.key] || k.key, value: k.value, color: KIND_COLORS[k.key] }))} />
          </section>
          <section className="ax-card">
            <SectionTitle aside="depuis le lancement">Villes</SectionTitle>
            <BarList items={(data.pdfCities || []).map((s) => ({ key: s.member, label: s.member === "Inconnue" ? "Ville inconnue" : s.member, value: s.score }))} />
          </section>
        </div>
      </div>
      <ConversionTable data={data} content={content} />
    </>
  );
}

// Concours : vues de la fiche face aux téléchargements de son PDF, depuis le
// lancement. « À améliorer » = beaucoup vus, peu téléchargés (énoncé illisible,
// bouton PDF mal placé, sujet sans corrigé…).
function ConversionTable({ data, content }) {
  const [order, setOrder] = useState("low");
  const rows = useMemo(() => {
    const pdf = new Map((data.pdfItems || []).filter((p) => String(p.member).startsWith("concours:")).map((p) => [String(p.member).slice(9), p.score]));
    return (data.topPaths || [])
      .filter((p) => /^\/concours\/[^/]+$/.test(p.member) && p.score >= MIN_VIEWS)
      .map((p) => {
        const id = decodeURIComponent(p.member.split("/")[2]);
        const downloads = pdf.get(id) || 0;
        return { id, path: p.member, views: p.score, downloads, rate: (downloads / p.score) * 100, ...describePdf("concours", id, content) };
      });
  }, [data.pdfItems, data.topPaths, content]);
  if (!rows.length) return null;
  const sorted = [...rows].sort(order === "low" ? (a, b) => a.rate - b.rate || b.views - a.views : order === "high" ? (a, b) => b.rate - a.rate || b.views - a.views : (a, b) => b.views - a.views).slice(0, 25);
  const avg = (rows.reduce((s, r) => s + r.downloads, 0) / rows.reduce((s, r) => s + r.views, 0)) * 100;

  return (
    <section className="ax-card">
      <SectionTitle aside={`${num(rows.length)} concours vus au moins ${MIN_VIEWS} fois · moyenne ${pct(avg)}`}>Taux de téléchargement des concours</SectionTitle>
      <div className="ax-toolbar">
        <Seg
          ariaLabel="Tri"
          value={order}
          onChange={setOrder}
          options={[
            { value: "low", label: "À améliorer" },
            { value: "high", label: "Les plus efficaces" },
            { value: "views", label: "Les plus vus" },
          ]}
        />
      </div>
      <div className="ax-table-wrap">
        <table className="ax-table ax-table-num">
          <thead>
            <tr>
              <th>Concours</th>
              <th>Vues</th>
              <th>PDF</th>
              <th>Taux</th>
              <th aria-label="Actions" />
            </tr>
          </thead>
          <tbody>
            {sorted.map((r) => (
              <tr key={r.id}>
                <td>
                  <span className="ax-list-title">{r.title}</span>
                  {r.tags?.length > 0 && <span className="ax-list-meta"> · {r.tags.join(" · ")}</span>}
                </td>
                <td>{num(r.views)}</td>
                <td>{num(r.downloads)}</td>
                <td>
                  <span className={`ax-pill ${r.rate < avg / 2 ? "red" : r.rate >= avg ? "green" : "amber"}`}>{pct(r.rate)}</span>
                </td>
                <td>
                  {adminHrefForPath(r.path) && (
                    <Link className="ax-btn ghost icon sm" href={adminHrefForPath(r.path)} aria-label="Modifier">
                      <Icon name="edit" size="sm" />
                    </Link>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
