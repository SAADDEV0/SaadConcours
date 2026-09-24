"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Icon from "../_ui/Icon";
import { BarList, Delta, ErrorState, Hero, LineChart, Seg, SectionTitle, Skeleton, Stat, Tabs, useTab } from "../_ui/kit";
import { api, downloadText } from "../_lib/api";
import { useJson } from "../_lib/content";
import { COLLECTIONS } from "../_lib/collections";
import { adminHrefForPath, labelForPath, labelForPdfItem } from "../_lib/labels";
import { dateTimeFr, num, timeAgo } from "../_lib/format";
import { useLocalStorage } from "../_lib/hooks";

const TABS = [
  { key: "audience", label: "Audience", icon: "users" },
  { key: "pages", label: "Pages", icon: "file" },
  { key: "pdf", label: "PDF", icon: "download" },
  { key: "recherches", label: "Recherches sans résultat", icon: "search" },
  { key: "journal", label: "Journal", icon: "clock" },
];

const SOURCE_LABELS = { google: "Google", direct: "Accès direct", facebook: "Facebook", instagram: "Instagram", whatsapp: "WhatsApp", bing: "Bing", other: "Autres sites", tiktok: "TikTok", youtube: "YouTube", telegram: "Telegram", linkedin: "LinkedIn" };

export default function Statistics() {
  const [tab, setTab] = useTab(TABS);
  const [preset, setPreset] = useLocalStorage("ax-stats-range", "30d");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const concours = useJson(COLLECTIONS.concours.path);
  const cours = useJson(COLLECTIONS.cours.path);
  const quiz = useJson(COLLECTIONS.quiz.path);
  const blog = useJson(COLLECTIONS.blog.path);
  const content = { concours: concours.data, cours: cours.data, quiz: quiz.data, blog: blog.data };

  function load() {
    setError("");
    setData(null);
    api(`/api/admin/metrics?preset=${preset}`).then(setData).catch((e) => setError(e.message));
  }
  useEffect(load, [preset]); // eslint-disable-line react-hooks/exhaustive-deps

  const m = data?.metrics;
  const lastSeen = useMemo(() => {
    const out = new Map();
    for (const e of data?.searchLog || []) if (!out.has(e.query)) out.set(e.query, e.at);
    return out;
  }, [data]);

  function exportAll() {
    downloadText(`statistiques-${data.range.from}-${data.range.to}.json`, JSON.stringify(data, null, 2));
  }

  return (
    <>
      <Hero
        icon="📊"
        eyebrow="Pilotage · Mesure d'audience maison"
        title="Statistiques"
        actions={
          <>
            <Seg
              ariaLabel="Période"
              value={preset}
              onChange={setPreset}
              options={[
                { value: "today", label: "Auj." },
                { value: "7d", label: "7 j" },
                { value: "30d", label: "30 j" },
                { value: "90d", label: "90 j" },
                { value: "12m", label: "12 m" },
              ]}
            />
            <button type="button" className="ax-btn" onClick={exportAll} disabled={!data}>
              <Icon name="download" size="sm" /> Exporter
            </button>
          </>
        }
      >
        Mesurée par le site lui-même (sans cookie publicitaire), hors visites de la console. Les classements de pages, PDF et villes portent sur tout l&apos;historique ; courbes et totaux sur la période choisie.
      </Hero>
      <Tabs tabs={TABS} value={tab} onChange={setTab} />
      {error && <ErrorState error={error} onRetry={load} />}
      {!data && !error && <Skeleton rows={5} height={90} />}
      {data && tab === "audience" && (
        <>
          <div className="ax-grid c4 ax-section">
            <Stat icon="users" label="Visites" value={num(m?.visits.total)} foot={<><Delta value={m?.visits.deltaPct} /> · {num(m?.visits.perDay)}/jour</>} />
            <Stat icon="download" label="PDF téléchargés" value={num(m?.pdf.total)} foot={<><Delta value={m?.pdf.deltaPct} /> · {num(m?.pdf.perDay)}/jour</>} />
            <Stat icon="target" label="Taux de téléchargement" value={`${String(m?.conversionPct ?? 0).replace(".", ",")} %`} foot={`avant : ${String(m?.prevConversionPct ?? 0).replace(".", ",")} %`} />
            <Stat icon="zap" label="Depuis le lancement" value={num(data.totals?.visitsTotal)} foot={`visites · ${num(data.totals?.pdfTotal)} PDF`} />
          </div>
          <section className="ax-card ax-section">
            <SectionTitle aside={data.range.label}>Évolution</SectionTitle>
            <LineChart
              series={[
                { name: "Visites", color: "#4f8cff", area: true, points: m?.visits.points || [] },
                { name: "PDF", color: "#a855f7", area: true, points: m?.pdf.points || [] },
              ]}
              height={260}
            />
          </section>
          <div className="ax-grid c2">
            <section className="ax-card">
              <SectionTitle>Sources</SectionTitle>
              <BarList items={(data.sources || []).map((s) => ({ key: s.member, label: SOURCE_LABELS[s.member] || s.member, value: s.score }))} />
            </section>
            <section className="ax-card">
              <SectionTitle>Villes des visiteurs</SectionTitle>
              <BarList items={(data.cities || []).map((s) => ({ key: s.member, label: s.member, value: s.score }))} />
            </section>
          </div>
        </>
      )}
      {data && tab === "pages" && (
        <section className="ax-card">
          <SectionTitle aside="vues cumulées">Pages les plus vues</SectionTitle>
          <ul className="ax-list">
            {(data.topPaths || []).map((p, i) => {
              const edit = adminHrefForPath(p.member);
              return (
                <li key={p.member}>
                  <span className="ax-muted" style={{ width: 24 }}>{i + 1}</span>
                  <span className="ax-list-main">
                    <span className="ax-list-title">{labelForPath(p.member, content)}</span>
                    <span className="ax-list-meta">{p.member}</span>
                  </span>
                  <span className="ax-num">{num(p.score)}</span>
                  <a className="ax-btn ghost icon sm" href={`https://www.saadconcours.space${p.member}`} target="_blank" rel="noopener noreferrer" aria-label="Ouvrir">
                    <Icon name="external" size="sm" />
                  </a>
                  {edit && (
                    <Link className="ax-btn ghost icon sm" href={edit} aria-label="Modifier">
                      <Icon name="edit" size="sm" />
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </section>
      )}
      {data && tab === "pdf" && (
        <div className="ax-grid main-side">
          <section className="ax-card">
            <SectionTitle>PDF les plus téléchargés</SectionTitle>
            <BarList limit={40} items={(data.pdfItems || []).map((p) => ({ key: p.member, label: labelForPdfItem(p.member, content), value: p.score }))} />
          </section>
          <div className="ax-stack">
            <section className="ax-card">
              <SectionTitle>Par type</SectionTitle>
              <BarList
                items={Object.entries(data.totals?.pdfByKind || {}).map(([k, v]) => ({ key: k, label: { concours: "Concours", cours: "Cours", evaluation: "Évaluations" }[k] || k, value: Number(v) || 0 }))}
              />
            </section>
            <section className="ax-card">
              <SectionTitle>Villes</SectionTitle>
              <BarList items={(data.pdfCities || []).map((s) => ({ key: s.member, label: s.member, value: s.score }))} />
            </section>
          </div>
        </div>
      )}
      {data && tab === "recherches" && (
        <section className="ax-card">
          <SectionTitle aside="tapées dans la recherche des concours, sans aucun résultat">Ce que les visiteurs cherchent et ne trouvent pas</SectionTitle>
          {(data.searchMisses || []).length ? (
            <ul className="ax-list">
              {data.searchMisses.map((s) => (
                <li key={s.member}>
                  <span className="ax-list-main">
                    <span className="ax-list-title">« {s.member} »</span>
                    <span className="ax-list-meta">{lastSeen.has(s.member) ? `dernière fois ${timeAgo(lastSeen.get(s.member))}` : "ancien"}</span>
                  </span>
                  <span className="ax-num">{num(s.score)}×</span>
                  <Link className="ax-btn xs" href={`/admin/concours?q=${encodeURIComponent(s.member)}`}>
                    Vérifier
                  </Link>
                  <Link className="ax-btn xs primary" href="/admin/concours/editer?nouveau=1">
                    Créer
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="ax-muted">Aucune recherche infructueuse enregistrée.</p>
          )}
        </section>
      )}
      {data && tab === "journal" && (
        <div className="ax-grid c2">
          <section className="ax-card">
            <SectionTitle>Dernières visites</SectionTitle>
            <ul className="ax-list">
              {(data.recentVisits || []).map((v, i) => (
                <li key={i}>
                  <span className="ax-list-main">
                    <span className="ax-list-title">{labelForPath(v.path, content)}</span>
                    <span className="ax-list-meta">
                      {v.city}
                      {v.country ? ` (${v.country})` : ""} · {dateTimeFr(v.at)}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </section>
          <section className="ax-card">
            <SectionTitle>Derniers PDF</SectionTitle>
            <ul className="ax-list">
              {(data.recentPdf || []).map((v, i) => (
                <li key={i}>
                  <span className="ax-list-main">
                    <span className="ax-list-title">{labelForPdfItem(`${v.kind}:${v.id}`, content)}</span>
                    <span className="ax-list-meta">
                      {v.city} · {dateTimeFr(v.at)}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      )}
    </>
  );
}
