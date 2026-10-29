"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Icon from "../_ui/Icon";
import { BarList, Delta, ErrorState, Hero, LineChart, Seg, SectionTitle, Skeleton, Stat, Switch, Tabs, useTab } from "../_ui/kit";
import { api, downloadText } from "../_lib/api";
import { useJson } from "../_lib/content";
import { COLLECTIONS } from "../_lib/collections";
import { adminHrefForPath, describePath, describePdf, labelForPath, labelForPdfItem } from "../_lib/labels";
import { dateFr, dateTimeFr, matchQuery, num, timeAgo } from "../_lib/format";
import { useLocalStorage } from "../_lib/hooks";

const TABS = [
  { key: "audience", label: "Audience", icon: "users" },
  { key: "pages", label: "Pages", icon: "file" },
  { key: "pdf", label: "PDF", icon: "download" },
  { key: "recherches", label: "Recherches sans résultat", icon: "search" },
  { key: "journal", label: "Journal", icon: "clock" },
];

const SOURCE_LABELS = { google: "Google", direct: "Accès direct", facebook: "Facebook", instagram: "Instagram", whatsapp: "WhatsApp", bing: "Bing", other: "Autres sites", tiktok: "TikTok", youtube: "YouTube", telegram: "Telegram", linkedin: "LinkedIn", interne: "Navigation sur le site", chatgpt: "ChatGPT", perplexity: "Perplexity", gemini: "Gemini", claude: "Claude", copilot: "Copilot", mistral: "Le Chat (Mistral)", deepseek: "DeepSeek" };

export default function Statistics() {
  const [tab, setTab] = useTab(TABS);
  // ?page=/chemin : fiche d'une page, ouverte depuis l'onglet Pages. Dans
  // l'URL pour que le bouton Retour du navigateur ramène à la liste.
  const sp = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const pagePath = tab === "pages" ? sp.get("page") : null;
  function openPage(path) {
    const next = new URLSearchParams(sp.toString());
    if (path) next.set("page", path);
    else next.delete("page");
    router.push(`${pathname}?${next.toString()}`, { scroll: true });
  }
  const [preset, setPreset] = useLocalStorage("ax-stats-range", "30d");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const concours = useJson(COLLECTIONS.concours.path);
  const cours = useJson(COLLECTIONS.cours.path);
  const quiz = useJson(COLLECTIONS.quiz.path);
  const blog = useJson(COLLECTIONS.blog.path);
  const droit = useJson(COLLECTIONS.droit.path);
  const content = { concours: concours.data, cours: cours.data, quiz: quiz.data, blog: blog.data, droit: droit.data };

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
        <>
          {/* Reste monté pendant la fiche : la recherche et le « Afficher plus » sont retrouvés au retour. */}
          <div hidden={Boolean(pagePath)}>
            <PagesTab paths={data.topPaths || []} content={content} onOpen={openPage} />
          </div>
          {pagePath && <PageDetail key={pagePath} path={pagePath} preset={preset} content={content} onBack={() => openPage(null)} />}
        </>
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
      {data && tab === "journal" && <JournalTab visits={data.recentVisits || []} pdfs={data.recentPdf || []} content={content} />}
    </>
  );
}

const KIND_ICONS = { concours: "graduation", cours: "book", quiz: "quiz", blog: "news", bac: "notebook", page: "file" };

function dayLabel(d) {
  const today = new Date();
  const yesterday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);
  if (d.toDateString() === today.toDateString()) return "Aujourd'hui";
  if (d.toDateString() === yesterday.toDateString()) return "Hier";
  return d.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" });
}

const JR_SECTIONS = [
  { value: "concours", label: "Concours" },
  { value: "cours", label: "Cours Licence" },
  { value: "droit", label: "Cours Droit" },
  { value: "quiz", label: "Évaluations" },
  { value: "blog", label: "Blog" },
  { value: "bac", label: "Bac" },
  { value: "page", label: "Autres pages" },
];

const JR_PERIODS = [
  { value: "all", label: "Tout le journal" },
  { value: "1h", label: "Dernière heure" },
  { value: "24h", label: "Dernières 24 h" },
  { value: "today", label: "Aujourd'hui" },
  { value: "yesterday", label: "Hier" },
  { value: "7d", label: "7 derniers jours" },
];

const JR_COUNTRIES = [
  { value: "all", label: "Tous les pays" },
  { value: "ma", label: "Maroc" },
  { value: "abroad", label: "Étranger" },
];

const JR_GROUPS = [
  { value: "day", label: "Jour" },
  { value: "hour", label: "Heure" },
  { value: "content", label: "Contenu (les plus vus d'abord)" },
  { value: "city", label: "Ville (les plus actives d'abord)" },
  { value: "none", label: "Aucun regroupement" },
];

// Préférences d'affichage, gardées dans le navigateur (ax-journal-prefs).
// `n` : évènements chargés par type, 200 au plus (MAX_LOG côté serveur).
const JR_PREFS = { group: "day", order: "desc", density: "comfy", tags: true, city: true, relative: false, n: 40, auto: false };
const JR_FILTERS = { type: "all", section: "", period: "all", city: "", country: "all", q: "" };

function inPeriod(at, period) {
  if (period === "all") return true;
  const t = new Date(at).getTime();
  if (Number.isNaN(t)) return false;
  const now = new Date();
  const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  if (period === "1h") return t >= Date.now() - 3600e3;
  if (period === "24h") return t >= Date.now() - 86400e3;
  if (period === "today") return t >= midnight;
  if (period === "yesterday") return t >= new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1).getTime() && t < midnight;
  if (period === "7d") return t >= new Date(now.getFullYear(), now.getMonth(), now.getDate() - 6).getTime();
  return true;
}

function matchCountry(country, filter) {
  if (filter === "ma") return country === "MA";
  if (filter === "abroad") return Boolean(country) && country !== "MA";
  return true;
}

// Regroupe la liste déjà triée. Jour et heure gardent l'ordre chronologique ;
// contenu et ville mettent les groupes les plus fournis en tête.
function groupRows(list, mode) {
  if (mode === "none") return [{ key: "all", label: null, rows: list }];
  const keyOf = (r) => {
    const d = new Date(r.at);
    const bad = Number.isNaN(d.getTime());
    if (mode === "content") return [r.href || r.title, r.title];
    if (mode === "city") return [r.city || "?", r.city || "Ville inconnue"];
    if (bad) return ["?", "Date inconnue"];
    if (mode === "hour") return [`${d.toDateString()} ${d.getHours()}`, `${dayLabel(d)} · ${String(d.getHours()).padStart(2, "0")} h`];
    return [d.toDateString(), dayLabel(d)];
  };
  const map = new Map();
  for (const r of list) {
    const [key, label] = keyOf(r);
    if (!map.has(key)) map.set(key, { key, label, rows: [] });
    map.get(key).rows.push(r);
  }
  const groups = [...map.values()];
  if (mode === "content" || mode === "city") groups.sort((a, b) => b.rows.length - a.rows.length);
  return groups;
}

function countBy(rows, keyOf) {
  const out = new Map();
  for (const r of rows) {
    const k = keyOf(r);
    if (k) out.set(k, (out.get(k) || 0) + 1);
  }
  return out;
}

function csvCell(v) {
  const s = String(v ?? "");
  return /[";\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

// Journal : visites et téléchargements PDF mêlés dans une seule chronologie.
// Pour un concours, le titre est le master (CCA, GRH…) et les pastilles
// donnent l'établissement, la ville et l'année du sujet. Filtres (période,
// contenu, ville, pays) le temps de la visite ; options d'affichage
// mémorisées dans le navigateur.
function JournalTab({ visits, pdfs, content }) {
  const [storedPrefs, setPrefs] = useLocalStorage("ax-journal-prefs", JR_PREFS);
  const p = { ...JR_PREFS, ...storedPrefs };
  const setPref = (k, v) => setPrefs((old) => ({ ...JR_PREFS, ...old, [k]: v }));
  const [f, setF] = useState(JR_FILTERS);
  const setFilter = (k, v) => setF((old) => ({ ...old, [k]: v }));
  const [panel, setPanel] = useState(null);

  // Le tableau de bord n'apporte que les 40 derniers évènements de chaque
  // type : au-delà (ou pour actualiser), le journal se recharge seul.
  const [log, setLog] = useState({ recentVisits: visits, recentPdf: pdfs, n: 40 });
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState("");
  const [updatedAt, setUpdatedAt] = useState(null);
  const n = p.n;
  const refresh = useCallback(() => {
    setLoading(true);
    setLoadError("");
    api(`/api/admin/metrics?scope=journal&n=${n}`)
      .then((d) => {
        setLog({ recentVisits: d.recentVisits || [], recentPdf: d.recentPdf || [], n });
        setUpdatedAt(new Date());
      })
      .catch((e) => setLoadError(e.message))
      .finally(() => setLoading(false));
  }, [n]);
  useEffect(() => {
    if (n > log.n) refresh();
  }, [n]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!p.auto) return undefined;
    const t = setInterval(refresh, 60_000);
    return () => clearInterval(t);
  }, [p.auto, refresh]);

  const rows = useMemo(() => {
    const all = [
      ...log.recentVisits.slice(0, n).map((v) => ({ type: "visit", at: v.at, city: v.city, country: v.country, ...describePath(v.path, content) })),
      ...log.recentPdf.slice(0, n).map((v) => ({ type: "pdf", at: v.at, city: v.city, country: v.country, ...describePdf(v.kind, v.id, content) })),
    ];
    return all.sort((a, b) => String(b.at).localeCompare(String(a.at)));
  }, [log, n, content]);

  const typeCounts = countBy(rows, (r) => r.type);
  const sectionCounts = countBy(rows, (r) => r.section);
  const cities = [...countBy(rows, (r) => r.city).entries()].sort((a, b) => b[1] - a[1]);

  const list = rows.filter(
    (r) =>
      (f.type === "all" || r.type === f.type) &&
      (!f.section || r.section === f.section) &&
      (!f.city || r.city === f.city) &&
      matchCountry(r.country, f.country) &&
      inPeriod(r.at, f.period) &&
      matchQuery([r.title, ...r.tags, r.city].join(" "), f.q)
  );
  if (p.order === "asc") list.reverse();
  const groups = groupRows(list, p.group);

  // Filtres actifs hors type et recherche, déjà visibles dans la barre.
  const chips = [
    f.period !== "all" && { key: "period", label: JR_PERIODS.find((o) => o.value === f.period)?.label },
    f.section && { key: "section", label: JR_SECTIONS.find((o) => o.value === f.section)?.label },
    f.city && { key: "city", label: f.city },
    f.country !== "all" && { key: "country", label: JR_COUNTRIES.find((o) => o.value === f.country)?.label },
  ].filter(Boolean);
  const activeCount = chips.length + (f.type !== "all") + Boolean(f.q);

  function exportCsv() {
    const head = ["date", "type", "contenu", "titre", "details", "ville", "pays", "adresse"];
    const lines = list.map((r) => [r.at, r.type === "pdf" ? "PDF" : "Visite", r.section, r.title, r.tags.join(" · "), r.city, r.country, r.href ? `https://www.saadconcours.space${r.href}` : ""].map(csvCell).join(";"));
    downloadText(`journal-${new Date().toISOString().slice(0, 10)}.csv`, "﻿" + [head.join(";"), ...lines].join("\n"), "text/csv");
  }

  const togglePanel = (name) => setPanel((cur) => (cur === name ? null : name));
  const visitsShown = list.filter((r) => r.type === "visit").length;
  const citiesShown = new Set(list.map((r) => r.city).filter(Boolean)).size;

  return (
    <section className="ax-card">
      <SectionTitle aside={`${num(log.recentVisits.slice(0, n).length)} dernières visites · ${num(log.recentPdf.slice(0, n).length)} derniers PDF${updatedAt ? ` · à jour ${updatedAt.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}` : ""}`}>
        Journal en direct
      </SectionTitle>
      <div className="ax-toolbar">
        <Seg
          ariaLabel="Type d'évènement"
          value={f.type}
          onChange={(v) => setFilter("type", v)}
          options={[
            { value: "all", label: `Tout (${rows.length})` },
            { value: "visit", label: `Visites (${typeCounts.get("visit") || 0})` },
            { value: "pdf", label: `PDF (${typeCounts.get("pdf") || 0})` },
          ]}
        />
        <div className="ax-search">
          <Icon name="search" size="sm" />
          <input className="ax-input" placeholder="Filtrer : master, établissement, ville…" value={f.q} onChange={(e) => setFilter("q", e.target.value)} />
        </div>
        <button type="button" className="ax-btn" aria-pressed={panel === "filters"} aria-expanded={panel === "filters"} onClick={() => togglePanel("filters")}>
          <Icon name="filter" size="sm" /> Filtres{chips.length ? ` (${chips.length})` : ""}
        </button>
        <button type="button" className="ax-btn" aria-pressed={panel === "display"} aria-expanded={panel === "display"} onClick={() => togglePanel("display")}>
          <Icon name="settings" size="sm" /> Affichage
        </button>
        <button type="button" className="ax-btn icon" onClick={refresh} disabled={loading} aria-label="Actualiser le journal" title="Actualiser le journal">
          <Icon name={loading ? "loader" : "refresh"} size="sm" />
        </button>
        <button type="button" className="ax-btn icon" onClick={exportCsv} disabled={!list.length} aria-label="Exporter la sélection (CSV)" title="Exporter la sélection (CSV)">
          <Icon name="download" size="sm" />
        </button>
      </div>

      {panel === "filters" && (
        <div className="ax-jr-panel">
          <label className="ax-jr-field">
            <span>Période</span>
            <select className="ax-select" value={f.period} onChange={(e) => setFilter("period", e.target.value)}>
              {JR_PERIODS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </label>
          <label className="ax-jr-field">
            <span>Contenu</span>
            <select className="ax-select" value={f.section} onChange={(e) => setFilter("section", e.target.value)}>
              <option value="">Tous les contenus</option>
              {JR_SECTIONS.map((o) => (
                <option key={o.value} value={o.value} disabled={!sectionCounts.get(o.value) && f.section !== o.value}>
                  {o.label} ({sectionCounts.get(o.value) || 0})
                </option>
              ))}
            </select>
          </label>
          <label className="ax-jr-field">
            <span>Ville</span>
            <select className="ax-select" value={f.city} onChange={(e) => setFilter("city", e.target.value)}>
              <option value="">Toutes les villes ({cities.length})</option>
              {cities.map(([city, count]) => (
                <option key={city} value={city}>
                  {city} ({count})
                </option>
              ))}
            </select>
          </label>
          <label className="ax-jr-field">
            <span>Pays</span>
            <select className="ax-select" value={f.country} onChange={(e) => setFilter("country", e.target.value)}>
              {JR_COUNTRIES.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </label>
          <button type="button" className="ax-btn ghost" onClick={() => setF(JR_FILTERS)} disabled={!activeCount}>
            <Icon name="x" size="sm" /> Tout effacer
          </button>
        </div>
      )}

      {panel === "display" && (
        <div className="ax-jr-panel">
          <label className="ax-jr-field">
            <span>Grouper par</span>
            <select className="ax-select" value={p.group} onChange={(e) => setPref("group", e.target.value)}>
              {JR_GROUPS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </label>
          <div className="ax-jr-field">
            <span>Ordre</span>
            <Seg
              ariaLabel="Ordre"
              value={p.order}
              onChange={(v) => setPref("order", v)}
              options={[
                { value: "desc", label: "Récents d'abord" },
                { value: "asc", label: "Anciens d'abord" },
              ]}
            />
          </div>
          <div className="ax-jr-field">
            <span>Densité</span>
            <Seg
              ariaLabel="Densité"
              value={p.density}
              onChange={(v) => setPref("density", v)}
              options={[
                { value: "comfy", label: "Aérée" },
                { value: "compact", label: "Compacte" },
              ]}
            />
          </div>
          <div className="ax-jr-field">
            <span>Évènements chargés (par type)</span>
            <Seg
              ariaLabel="Évènements chargés"
              value={p.n}
              onChange={(v) => setPref("n", v)}
              options={[40, 100, 200].map((v) => ({ value: v, label: String(v) }))}
            />
          </div>
          <div className="ax-jr-switches">
            <Switch checked={p.tags} onChange={(v) => setPref("tags", v)} label="Pastilles (établissement, semestre…)" />
            <Switch checked={p.city} onChange={(v) => setPref("city", v)} label="Ville du visiteur" />
            <Switch checked={p.relative} onChange={(v) => setPref("relative", v)} label="Heure relative (« il y a 5 min »)" />
            <Switch checked={p.auto} onChange={(v) => setPref("auto", v)} label="Actualiser chaque minute" />
          </div>
          <button type="button" className="ax-btn ghost" onClick={() => setPrefs(JR_PREFS)}>
            <Icon name="undo" size="sm" /> Affichage par défaut
          </button>
        </div>
      )}

      <div className="ax-jr-summary">
        <span>
          <b>{num(list.length)}</b>
          {list.length !== rows.length ? ` sur ${num(rows.length)}` : ""} évènement{list.length > 1 ? "s" : ""} · {num(visitsShown)} visite{visitsShown > 1 ? "s" : ""} · {num(list.length - visitsShown)} PDF · {num(citiesShown)} ville{citiesShown > 1 ? "s" : ""}
        </span>
        {chips.length > 0 && (
          <span className="ax-chips">
            {chips.map((c) => (
              <span key={c.key} className="ax-chip">
                {c.label}
                <button type="button" aria-label={`Retirer le filtre ${c.label}`} onClick={() => setFilter(c.key, JR_FILTERS[c.key])}>
                  ×
                </button>
              </span>
            ))}
          </span>
        )}
      </div>
      {loadError && <p className="ax-hint error">Actualisation impossible : {loadError}</p>}

      {!list.length && <p className="ax-muted">{activeCount ? "Aucune ligne ne correspond." : "Rien d'enregistré pour l'instant."}</p>}
      {groups.map((g) => (
        <div key={g.key} className="ax-jr-day">
          {g.label && (
            <h3 className="ax-jr-day-title">
              {g.label}
              <span>{num(g.rows.length)}</span>
            </h3>
          )}
          <ol className={`ax-jr${p.density === "compact" ? " compact" : ""}${p.relative ? " relative" : ""}`}>
            {g.rows.map((r, i) => (
              <li key={i} className={`ax-jr-row ${r.type}`}>
                <time className="ax-jr-time" dateTime={r.at} title={dateTimeFr(r.at)}>
                  {p.relative ? timeAgo(r.at) : new Date(r.at).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}
                </time>
                <span className="ax-jr-ic" aria-hidden="true">
                  <Icon name={KIND_ICONS[r.kind] || "file"} size="sm" />
                </span>
                <div className="ax-jr-main">
                  {r.href ? (
                    <a className="ax-jr-title" href={`https://www.saadconcours.space${r.href}`} target="_blank" rel="noopener noreferrer">
                      {r.title}
                    </a>
                  ) : (
                    <span className="ax-jr-title">{r.title}</span>
                  )}
                  {p.tags && r.tags.length > 0 && (
                    <div className="ax-jr-tags">
                      {r.tags.map((t) => (
                        <span key={t} className="ax-jr-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="ax-jr-side">
                  <span className={`ax-pill ${r.type === "pdf" ? "violet" : "accent"}`}>
                    <Icon name={r.type === "pdf" ? "download" : "eye"} size="sm" />
                    {r.type === "pdf" ? "PDF" : "Visite"}
                  </span>
                  {p.city &&
                    (r.city ? (
                      <button type="button" className="ax-jr-city" onClick={() => setFilter("city", f.city === r.city ? "" : r.city)} title={f.city === r.city ? "Retirer le filtre ville" : `Voir seulement ${r.city}`}>
                        <Icon name="globe" size="sm" />
                        {r.city}
                        {r.country && r.country !== "MA" ? ` (${r.country})` : ""}
                      </button>
                    ) : (
                      <span className="ax-jr-city">
                        <Icon name="globe" size="sm" />
                        Ville inconnue
                      </span>
                    ))}
                </div>
                {r.edit ? (
                  <Link className="ax-btn ghost icon sm ax-jr-edit" href={r.edit} aria-label="Modifier">
                    <Icon name="edit" size="sm" />
                  </Link>
                ) : (
                  <span className="ax-jr-edit" />
                )}
              </li>
            ))}
          </ol>
        </div>
      ))}
    </section>
  );
}

const PAGE = 20;

// Classement des pages : recherche sur le titre et l'adresse, affiché par
// paquets de PAGE pour ne pas dérouler des centaines de lignes d'un coup.
// Le rang reste celui du classement complet, même filtré.
function PagesTab({ paths, content, onOpen }) {
  const [q, setQ] = useState("");
  const [limit, setLimit] = useState(PAGE);
  const rows = useMemo(() => paths.map((p, i) => ({ ...p, rank: i + 1, label: labelForPath(p.member, content) })), [paths, content]);
  const needle = q.trim().toLowerCase();
  const list = needle ? rows.filter((p) => p.label.toLowerCase().includes(needle) || p.member.toLowerCase().includes(needle)) : rows;

  return (
    <section className="ax-card">
      <SectionTitle aside={`vues cumulées · ${num(rows.length)} pages`}>Pages les plus vues</SectionTitle>
      <div className="ax-toolbar">
        <div className="ax-search">
          <Icon name="search" size="sm" />
          <input className="ax-input" placeholder="Rechercher une page (titre ou adresse)…" value={q} onChange={(e) => (setQ(e.target.value), setLimit(PAGE))} />
        </div>
      </div>
      {!list.length ? (
        <p className="ax-muted">{q ? "Aucune page ne correspond." : "Aucune page vue pour l'instant."}</p>
      ) : (
        <ul className="ax-list">
          {list.slice(0, limit).map((p) => {
            const edit = adminHrefForPath(p.member);
            return (
              <li key={p.member}>
                <span className="ax-muted" style={{ width: 28 }}>{p.rank}</span>
                <button type="button" className="ax-list-main ax-list-open" onClick={() => onOpen(p.member)} title="Voir les statistiques de la page">
                  <span className="ax-list-title">{p.label}</span>
                  <span className="ax-list-meta">{p.member}</span>
                </button>
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
      )}
      {list.length > limit && (
        <div className="ax-more">
          <button type="button" className="ax-btn" onClick={() => setLimit((l) => l + PAGE)}>
            Afficher plus ({num(list.length - limit)} restantes)
          </button>
        </div>
      )}
    </section>
  );
}

// Fiche d'une page : tout ce que le site mesure sur elle, sur la période
// choisie en haut de l'écran (le total et le rang portent sur tout l'historique).
function PageDetail({ path, preset, content, onBack }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  function load() {
    setError("");
    setData(null);
    api(`/api/admin/metrics?scope=page&preset=${preset}&path=${encodeURIComponent(path)}`).then(setData).catch((e) => setError(e.message));
  }
  useEffect(load, [path, preset]); // eslint-disable-line react-hooks/exhaustive-deps

  const p = data?.page;
  const edit = adminHrefForPath(path);
  // Le détail par jour / ville / source n'existe que depuis `since` : avant,
  // seul le total historique était compté.
  const partial = p && (!p.since || p.since > data.range.from);

  return (
    <>
      <section className="ax-card ax-section">
        <div className="ax-toolbar ax-mb0">
          <button type="button" className="ax-btn ghost icon sm" aria-label="Retour à la liste des pages" onClick={onBack}>
            <Icon name="arrowLeft" />
          </button>
          <span className="ax-list-main">
            <span className="ax-list-title" style={{ fontSize: "1.05rem" }}>{labelForPath(path, content)}</span>
            <span className="ax-list-meta">{path}</span>
          </span>
          <a className="ax-btn sm" href={`https://www.saadconcours.space${path}`} target="_blank" rel="noopener noreferrer">
            <Icon name="external" size="sm" /> Ouvrir
          </a>
          {edit && (
            <Link className="ax-btn sm" href={edit}>
              <Icon name="edit" size="sm" /> Modifier
            </Link>
          )}
        </div>
      </section>
      {error && <ErrorState error={error} onRetry={load} />}
      {!data && !error && <Skeleton rows={4} height={90} />}
      {p && (
        <>
          <div className="ax-grid c4 ax-section">
            <Stat icon="eye" label="Vues sur la période" value={num(p.views.total)} foot={<><Delta value={p.views.deltaPct} /> · {num(p.views.perDay)}/jour</>} />
            <Stat icon="zap" label="Depuis le lancement" value={num(p.total)} foot="vues au total" />
            <Stat icon="sort" label="Classement" value={p.rank ? `${num(p.rank)}ᵉ` : "—"} foot={`sur ${num(p.pageCount)} pages vues`} />
            {p.pdf !== null ? (
              <Stat icon="download" label="PDF téléchargés" value={num(p.pdf)} foot={p.total ? `${String(Math.round((p.pdf / p.total) * 1000) / 10).replace(".", ",")} % des vues · total` : "depuis le lancement"} />
            ) : p.shop ? (
              <Stat icon="bag" label="Clics « Acheter »" value={num(p.shop.clicks)} foot={`${num(p.shop.views)} vues de la fiche · total`} />
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
              <BarList items={p.sources.map((s) => ({ key: s.member, label: SOURCE_LABELS[s.member] || s.member, value: s.score }))} />
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
                      <span className="ax-list-meta">{dateTimeFr(v.at)}</span>
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
