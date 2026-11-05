"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Icon from "../../_ui/Icon";
import { BarList, Delta, ErrorState, LineChart, Seg, SectionTitle, Skeleton, Stat } from "../../_ui/kit";
import { api, downloadText } from "../../_lib/api";
import { useLocalStorage } from "../../_lib/hooks";
import { dateFr, dateTimeFr, matchQuery, num } from "../../_lib/format";
import { adminHrefForPath, describePath, labelForPath } from "../../_lib/labels";
import { DEVICE_LABELS, SITE, deltaOf, pct, share, sourceLabel, toCsv } from "./shared";

const PAGE = 20;

export const SECTIONS = [
  { value: "concours", label: "Concours" },
  { value: "cours", label: "Cours Licence" },
  { value: "droit", label: "Cours Droit" },
  { value: "quiz", label: "Évaluations" },
  { value: "blog", label: "Blog" },
  { value: "bac", label: "Bac" },
  { value: "page", label: "Autres pages" },
];
const SECTION_COLORS = { concours: "#4f8cff", cours: "#0d9488", droit: "#f59e0b", quiz: "#a855f7", blog: "#ec4899", bac: "#22c55e", page: "#64748b" };

const VIEWS = [
  { value: "period", label: "Sur la période" },
  { value: "all", label: "Depuis le lancement" },
  { value: "entries", label: "Pages d'entrée" },
  { value: "trends", label: "Hausses et baisses" },
];

const TITLES = { period: "Pages les plus vues sur la période", all: "Pages les plus vues depuis le lancement", entries: "Pages d'entrée", trends: "Hausses et baisses" };

// Classement des pages. « Sur la période » et « Pages d'entrée » viennent des
// compteurs v2 ; « Depuis le lancement » du total historique. Le rang reste
// celui du classement complet, même filtré.
export function PagesTab({ data, content, onOpen }) {
  const b = data.breakdown;
  const started = Boolean(b) && data.metrics.coverage.started;
  const [storedView, setView] = useLocalStorage("ax-pages-view", "period");
  const view = !started && storedView !== "all" ? "all" : storedView;
  const [q, setQ] = useState("");
  const [section, setSection] = useState("");
  const [limit, setLimit] = useState(PAGE);

  const source = useMemo(() => (view === "all" ? data.topPaths || [] : view === "entries" ? b?.entries || [] : b?.pages || []), [view, data.topPaths, b]);
  const rows = useMemo(
    () =>
      source.map((p, i) => {
        const d = describePath(p.member, content);
        return { ...p, rank: i + 1, label: labelForPath(p.member, content), section: d.section };
      }),
    [source, content]
  );
  const bySection = useMemo(() => {
    const acc = new Map();
    for (const r of rows) acc.set(r.section, (acc.get(r.section) || 0) + r.score);
    return SECTIONS.map((s) => ({ key: s.value, label: s.label, value: acc.get(s.value) || 0, color: SECTION_COLORS[s.value] })).filter((s) => s.value > 0).sort((x, y) => y.value - x.value);
  }, [rows]);

  const list = rows.filter((p) => (!section || p.section === section) && matchQuery(`${p.label} ${p.member}`, q));
  const total = rows.reduce((s, r) => s + r.score, 0);
  const showDelta = view === "period" && b?.prevComparable;

  function exportCsv() {
    const head = ["rang", "page", "adresse", "rubrique", view === "entries" ? "visites entrées" : "vues", ...(showDelta ? ["vues période précédente"] : [])];
    const lines = list.map((p) => [p.rank, p.label, `${SITE}${p.member}`, SECTIONS.find((s) => s.value === p.section)?.label || "", p.score, ...(showDelta ? [p.prev] : [])]);
    downloadText(`pages-${view}-${data.range.from}-${data.range.to}.csv`, toCsv(head, lines), "text/csv");
  }

  const aside =
    view === "all"
      ? `vues cumulées · ${num(rows.length)} pages`
      : view === "entries"
        ? `visites commencées sur chaque page · ${data.range.label}`
        : `${num(b?.pageCount || 0)} pages vues · ${data.range.label}`;

  return (
    <div className="ax-grid main-side">
      <section className="ax-card">
        <SectionTitle aside={aside}>{TITLES[view]}</SectionTitle>
        <div className="ax-toolbar">
          <Seg ariaLabel="Classement" value={view} onChange={(v) => (setView(v), setLimit(PAGE))} options={VIEWS.map((v) => ({ ...v, title: !started && v.value !== "all" ? "Disponible avec les statistiques v2" : undefined }))} />
        </div>
        {view === "trends" ? (
          <Trends data={data} content={content} onOpen={onOpen} />
        ) : (
          <>
            <div className="ax-toolbar">
              <div className="ax-search">
                <Icon name="search" size="sm" />
                <input className="ax-input" placeholder="Rechercher une page (titre ou adresse)…" value={q} onChange={(e) => (setQ(e.target.value), setLimit(PAGE))} />
              </div>
              <select className="ax-select" value={section} onChange={(e) => (setSection(e.target.value), setLimit(PAGE))} aria-label="Rubrique">
                <option value="">Toutes les rubriques</option>
                {SECTIONS.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
              <button type="button" className="ax-btn icon" onClick={exportCsv} disabled={!list.length} aria-label="Exporter la liste (CSV)" title="Exporter la liste (CSV)">
                <Icon name="download" size="sm" />
              </button>
            </div>
            {!list.length ? (
              <p className="ax-muted">{q || section ? "Aucune page ne correspond." : view === "all" ? "Aucune page vue pour l'instant." : "Aucune page vue sur la période."}</p>
            ) : (
              <ul className="ax-list">
                {list.slice(0, limit).map((p) => (
                  <PageRow key={p.member} p={p} total={total} onOpen={onOpen} delta={showDelta ? deltaOf(p.score, p.prev) : undefined} />
                ))}
              </ul>
            )}
            {list.length > limit && (
              <div className="ax-more">
                <button type="button" className="ax-btn" onClick={() => setLimit((l) => l + PAGE)}>
                  Afficher plus ({num(list.length - limit)} restantes)
                </button>
              </div>
            )}
          </>
        )}
      </section>
      <div className="ax-stack">
        <section className="ax-card">
          <SectionTitle aside={view === "all" ? "depuis le lancement" : "sur la période"}>Par rubrique</SectionTitle>
          <BarList items={bySection.map((s) => ({ ...s, label: `${s.label} · ${pct(share(s.value, total), 0)}` }))} />
        </section>
        {!started && (
          <section className="ax-card">
            <p className="ax-muted ax-small" style={{ margin: 0 }}>
              Classement sur la période, pages d&apos;entrée et tendances : disponibles dès les premières visites mesurées par les statistiques v2 ({dateFr(data.metrics.coverage.since)}).
            </p>
          </section>
        )}
      </div>
    </div>
  );
}

function PageRow({ p, total, onOpen, delta, extra }) {
  const edit = adminHrefForPath(p.member);
  return (
    <li>
      <span className="ax-muted" style={{ width: 28 }}>
        {p.rank}
      </span>
      <button type="button" className="ax-list-main ax-list-open" onClick={() => onOpen(p.member)} title="Voir les statistiques de la page">
        <span className="ax-list-title">{p.label}</span>
        <span className="ax-list-meta">
          {p.member}
          {total ? ` · ${pct(share(p.score, total))}` : ""}
          {extra ? ` · ${extra}` : ""}
        </span>
      </button>
      {delta !== undefined && <Delta value={delta} />}
      <span className="ax-num">{num(p.score)}</span>
      <a className="ax-btn ghost icon sm" href={`${SITE}${p.member}`} target="_blank" rel="noopener noreferrer" aria-label="Ouvrir">
        <Icon name="external" size="sm" />
      </a>
      {edit && (
        <Link className="ax-btn ghost icon sm" href={edit} aria-label="Modifier">
          <Icon name="edit" size="sm" />
        </Link>
      )}
    </li>
  );
}

// Pages qui gagnent / perdent le plus de vues d'une période à l'autre.
function Trends({ data, content, onOpen }) {
  const b = data.breakdown;
  if (!b?.prevComparable)
    return <p className="ax-muted">Les tendances comparent deux périodes mesurées par les statistiques v2 : disponibles quand la période précédente le sera aussi ({dateFr(data.metrics.coverage.since)} et après). Choisir une période plus courte (7 j, aujourd&apos;hui) permet de les voir plus tôt.</p>;
  const withDiff = b.pages.map((p) => ({ ...p, diff: p.score - p.prev, label: labelForPath(p.member, content) }));
  const up = withDiff.filter((p) => p.diff > 0).sort((x, y) => y.diff - x.diff).slice(0, 15);
  const down = [...withDiff.filter((p) => p.diff < 0), ...b.gone.map((g) => ({ member: g.member, score: 0, prev: g.score, diff: -g.score, label: labelForPath(g.member, content) }))].sort((x, y) => x.diff - y.diff).slice(0, 15);
  const block = (title, items, tone) => (
    <div>
      <h3 className={`ax-sub ${tone}`}>
        <Icon name={tone === "up" ? "arrowUp" : "arrowDown"} size="sm" /> {title}
      </h3>
      {items.length ? (
        <ul className="ax-list">
          {items.map((p, i) => (
            <PageRow key={p.member} p={{ ...p, rank: i + 1 }} onOpen={onOpen} delta={deltaOf(p.score, p.prev)} extra={`${num(p.prev)} → ${num(p.score)} (${p.diff > 0 ? "+" : ""}${num(p.diff)})`} />
          ))}
        </ul>
      ) : (
        <p className="ax-muted ax-small">Rien à signaler.</p>
      )}
    </div>
  );
  return (
    <div className="ax-stack">
      {block("En hausse", up, "up")}
      {block("En baisse", down, "down")}
    </div>
  );
}

// Fiche d'une page : tout ce que le site mesure sur elle, sur la période
// choisie en haut de l'écran (le total et le rang portent sur tout l'historique).
export function PageDetail({ path, query, content, onBack }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [nonce, setNonce] = useState(0);

  useEffect(() => {
    const ctrl = new AbortController();
    setError("");
    setData(null);
    api(`/api/admin/metrics?scope=page&${query}&path=${encodeURIComponent(path)}`, { signal: ctrl.signal })
      .then(setData)
      .catch((e) => e.name !== "AbortError" && setError(e.message));
    return () => ctrl.abort();
  }, [path, query, nonce]);

  const p = data?.page;
  const edit = adminHrefForPath(path);
  // Le détail par jour / ville / source n'existe que depuis `since` : avant,
  // seul le total historique était compté.
  const partial = p && (!p.since || p.since > data.range.from);
  const sourceTotal = p ? p.sources.reduce((s, x) => s + x.score, 0) : 0;

  return (
    <>
      <section className="ax-card ax-section">
        <div className="ax-toolbar ax-mb0">
          <button type="button" className="ax-btn ghost icon sm" aria-label="Retour à la liste des pages" onClick={onBack}>
            <Icon name="arrowLeft" />
          </button>
          <span className="ax-list-main">
            <span className="ax-list-title" style={{ fontSize: "1.05rem" }}>
              {labelForPath(path, content)}
            </span>
            <span className="ax-list-meta">{path}</span>
          </span>
          <a className="ax-btn sm" href={`${SITE}${path}`} target="_blank" rel="noopener noreferrer">
            <Icon name="external" size="sm" /> Ouvrir
          </a>
          {edit && (
            <Link className="ax-btn sm" href={edit}>
              <Icon name="edit" size="sm" /> Modifier
            </Link>
          )}
        </div>
      </section>
      {error && <ErrorState error={error} onRetry={() => setNonce((n) => n + 1)} />}
      {!data && !error && <Skeleton rows={4} height={90} />}
      {p && (
        <>
          <div className="ax-grid c4 ax-section">
            <Stat
              icon="eye"
              label="Vues sur la période"
              value={num(p.views.total)}
              foot={
                <>
                  <Delta value={p.views.deltaPct} /> · {num(p.views.perDay)}/jour
                </>
              }
            />
            <Stat icon="zap" label="Depuis le lancement" value={num(p.total)} foot="vues au total" />
            <Stat icon="sort" label="Classement" value={p.rank ? `${num(p.rank)}ᵉ` : "—"} foot={`sur ${num(p.pageCount)} pages vues`} />
            {p.pdf !== null ? (
              <Stat icon="download" label="PDF téléchargés" value={num(p.pdf)} foot={p.total ? `${pct(share(p.pdf, p.total))} des vues · total` : "depuis le lancement"} />
            ) : p.shop ? (
              <Stat icon="bag" label="Clics « Commander »" value={num(p.shop.clicks)} foot={`${num(p.shop.views)} vues de la fiche · ${p.shop.views ? pct(share(p.shop.clicks, p.shop.views)) : "—"} · total`} />
            ) : (
              <Stat icon="globe" label="Villes différentes" value={num(p.cities.length)} foot="depuis le début du suivi" />
            )}
          </div>
          {partial && (
            <p className="ax-muted ax-section" style={{ fontSize: "0.86rem" }}>
              {p.since
                ? `Courbe, sources et villes de cette page : enregistrées depuis le ${dateFr(p.since)}. Avant, seul le total était compté.`
                : "Courbe, sources et villes de cette page : enregistrées à partir des prochaines visites. Avant, seul le total était compté."}
            </p>
          )}
          <section className="ax-card ax-section">
            <SectionTitle aside={data.range.label}>Vues de la page</SectionTitle>
            <LineChart series={[{ name: "Vues", color: "#4f8cff", area: true, points: p.views.points }]} height={240} />
          </section>
          <div className="ax-grid c2 ax-section">
            <section className="ax-card">
              <SectionTitle aside="depuis le début du suivi">D&apos;où arrivent les visiteurs</SectionTitle>
              <BarList items={p.sources.map((s) => ({ key: s.member, label: `${sourceLabel(s.member)} · ${pct(share(s.score, sourceTotal), 0)}`, value: s.score }))} />
            </section>
            <section className="ax-card">
              <SectionTitle aside="depuis le début du suivi">Villes</SectionTitle>
              <BarList limit={15} items={p.cities.map((s) => ({ key: s.member, label: s.member, value: s.score }))} />
            </section>
          </div>
          <section className="ax-card">
            <SectionTitle aside="visiteurs entrés sur le site par cette page">Dernières arrivées</SectionTitle>
            {p.recent.length ? (
              <ul className="ax-list">
                {p.recent.map((v, i) => (
                  <li key={i}>
                    <span className="ax-list-main">
                      <span className="ax-list-title">
                        {v.city}
                        {v.country ? ` (${v.country})` : ""}
                      </span>
                      <span className="ax-list-meta">
                        {dateTimeFr(v.at)}
                        {v.src ? ` · ${sourceLabel(v.src)}` : ""}
                        {v.dv ? ` · ${DEVICE_LABELS[v.dv] || v.dv}` : ""}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="ax-muted">Aucune arrivée récente sur cette page.</p>
            )}
          </section>
        </>
      )}
    </>
  );
}
