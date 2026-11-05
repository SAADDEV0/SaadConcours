"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Icon from "../../_ui/Icon";
import { Seg, SectionTitle, Switch } from "../../_ui/kit";
import { api, downloadText } from "../../_lib/api";
import { describePath, describePdf } from "../../_lib/labels";
import { dateTimeFr, matchQuery, num, timeAgo } from "../../_lib/format";
import { useLocalStorage } from "../../_lib/hooks";
import { CHANNELS, DEVICE_LABELS, SITE, channelOf, sourceLabel, toCsv } from "./shared";

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
const JR_PREFS = { group: "day", order: "desc", density: "comfy", tags: true, city: true, origin: true, relative: false, n: 40, auto: false };
const JR_FILTERS = { type: "all", section: "", period: "all", city: "", country: "all", device: "", channel: "", q: "" };
// v2 : canal d'arrivée et appareil, connus pour les visites enregistrées
// depuis les statistiques v2 (les plus anciennes ne les ont pas).
const JR_DEVICES = Object.entries(DEVICE_LABELS).map(([value, label]) => ({ value, label }));

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

// Journal : visites et téléchargements PDF mêlés dans une seule chronologie.
// Pour un concours, le titre est le master (CCA, GRH…) et les pastilles
// donnent l'établissement, la ville et l'année du sujet. Filtres (période,
// contenu, ville, pays) le temps de la visite ; options d'affichage
// mémorisées dans le navigateur.
export function JournalTab({ visits, pdfs, content }) {
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
      ...log.recentVisits.slice(0, n).map((v) => ({ type: "visit", at: v.at, city: v.city, country: v.country, src: v.src || null, dv: v.dv || null, ...describePath(v.path, content) })),
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
      (!f.device || r.dv === f.device) &&
      (!f.channel || (r.src && channelOf(r.src) === f.channel)) &&
      matchCountry(r.country, f.country) &&
      inPeriod(r.at, f.period) &&
      matchQuery([r.title, ...r.tags, r.city, r.src ? sourceLabel(r.src) : ""].join(" "), f.q)
  );
  if (p.order === "asc") list.reverse();
  const groups = groupRows(list, p.group);

  // Filtres actifs hors type et recherche, déjà visibles dans la barre.
  const chips = [
    f.period !== "all" && { key: "period", label: JR_PERIODS.find((o) => o.value === f.period)?.label },
    f.section && { key: "section", label: JR_SECTIONS.find((o) => o.value === f.section)?.label },
    f.city && { key: "city", label: f.city },
    f.country !== "all" && { key: "country", label: JR_COUNTRIES.find((o) => o.value === f.country)?.label },
    f.device && { key: "device", label: DEVICE_LABELS[f.device] },
    f.channel && { key: "channel", label: CHANNELS.find((c) => c.key === f.channel)?.label },
  ].filter(Boolean);
  const activeCount = chips.length + (f.type !== "all") + Boolean(f.q);

  function exportCsv() {
    const head = ["date", "type", "contenu", "titre", "details", "ville", "pays", "source", "appareil", "adresse"];
    const lines = list.map((r) => [r.at, r.type === "pdf" ? "PDF" : "Visite", r.section, r.title, r.tags.join(" · "), r.city, r.country, r.src ? sourceLabel(r.src) : "", r.dv ? DEVICE_LABELS[r.dv] || r.dv : "", r.href ? `${SITE}${r.href}` : ""]);
    downloadText(`journal-${new Date().toISOString().slice(0, 10)}.csv`, toCsv(head, lines), "text/csv");
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
          <label className="ax-jr-field">
            <span>Arrivée par</span>
            <select className="ax-select" value={f.channel} onChange={(e) => setFilter("channel", e.target.value)}>
              <option value="">Tous les canaux</option>
              {CHANNELS.map((c) => (
                <option key={c.key} value={c.key}>
                  {c.label}
                </option>
              ))}
            </select>
          </label>
          <label className="ax-jr-field">
            <span>Appareil</span>
            <select className="ax-select" value={f.device} onChange={(e) => setFilter("device", e.target.value)}>
              <option value="">Tous les appareils</option>
              {JR_DEVICES.map((o) => (
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
            <Switch checked={p.origin} onChange={(v) => setPref("origin", v)} label="Source et appareil des visites" />
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
                    <a className="ax-jr-title" href={`${SITE}${r.href}`} target="_blank" rel="noopener noreferrer">
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
                  {p.origin && (r.src || r.dv) && (
                    <span className="ax-jr-city" title="Source d'arrivée · appareil">
                      {[r.src && sourceLabel(r.src), r.dv && DEVICE_LABELS[r.dv]].filter(Boolean).join(" · ")}
                    </span>
                  )}
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
