"use client";

// Briques partagées par les onglets de l'écran Statistiques : libellés des
// sources / appareils / pays, regroupement des sources en canaux, formats,
// export CSV, carte jour × heure, barre de répartition.

import { Alert } from "../../_ui/kit";
import { dateFr, num } from "../../_lib/format";

export const SITE = "https://www.saadconcours.space";

export const SOURCE_LABELS = {
  google: "Google",
  bing: "Bing",
  yahoo: "Yahoo",
  duckduckgo: "DuckDuckGo",
  ecosia: "Ecosia",
  qwant: "Qwant",
  yandex: "Yandex",
  direct: "Accès direct",
  facebook: "Facebook",
  instagram: "Instagram",
  whatsapp: "WhatsApp",
  tiktok: "TikTok",
  youtube: "YouTube",
  telegram: "Telegram",
  linkedin: "LinkedIn",
  twitter: "X (Twitter)",
  snapchat: "Snapchat",
  other: "Autres sites",
  autre: "Source illisible",
  interne: "Navigation sur le site",
  chatgpt: "ChatGPT",
  perplexity: "Perplexity",
  gemini: "Gemini",
  claude: "Claude",
  copilot: "Copilot",
  mistral: "Le Chat (Mistral)",
  deepseek: "DeepSeek",
};

export const sourceLabel = (s) => SOURCE_LABELS[s] || s;

const AI = ["chatgpt", "perplexity", "gemini", "claude", "copilot", "mistral", "deepseek"];
const SEARCH = ["google", "bing", "yahoo", "duckduckgo", "ecosia", "qwant", "yandex", "baidu", "brave"];
const SOCIAL = ["facebook", "instagram", "whatsapp", "tiktok", "youtube", "telegram", "linkedin", "twitter", "snapchat", "pinterest", "reddit", "messenger", "fb.com", "t.co", "x.com"];

// Canaux d'acquisition : ce que la liste brute des sources ne dit pas d'un
// coup d'œil (« combien viennent des moteurs, des réseaux, des IA ? »).
export const CHANNELS = [
  { key: "search", label: "Moteurs de recherche", color: "#4f8cff" },
  { key: "social", label: "Réseaux sociaux", color: "#ec4899" },
  { key: "ai", label: "Assistants IA", color: "#a855f7" },
  { key: "direct", label: "Accès direct", color: "#64748b" },
  { key: "referral", label: "Autres sites", color: "#f59e0b" },
];

export function channelOf(source) {
  const s = String(source || "").toLowerCase();
  if (AI.includes(s)) return "ai";
  if (s === "direct" || s === "interne") return "direct";
  if (SEARCH.some((k) => s === k || s.includes(`${k}.`))) return "search";
  if (SOCIAL.some((k) => s === k || s.includes(k))) return "social";
  return "referral";
}

export function groupChannels(sources) {
  const acc = new Map(CHANNELS.map((c) => [c.key, 0]));
  for (const s of sources || []) {
    const c = channelOf(s.member);
    acc.set(c, acc.get(c) + s.score);
  }
  return CHANNELS.map((c) => ({ ...c, value: acc.get(c.key) })).filter((c) => c.value > 0);
}

export const DEVICE_LABELS = { m: "Mobile", t: "Tablette", d: "Ordinateur" };
export const DEVICE_COLORS = { m: "#4f8cff", t: "#f59e0b", d: "#0d9488" };

let regionNames = null;
export function countryName(code) {
  if (!code) return "Pays inconnu";
  if (code === "XX" || code === "T1") return code === "T1" ? "Réseau Tor" : "Pays inconnu";
  try {
    regionNames ||= new Intl.DisplayNames(["fr"], { type: "region" });
    return regionNames.of(code) || code;
  } catch {
    return code;
  }
}

export const WEEKDAYS = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
export const WEEKDAYS_SHORT = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

export function pct(n, digits = 1) {
  if (n === null || n === undefined || !Number.isFinite(n)) return "—";
  const f = 10 ** digits;
  return `${String(Math.round(n * f) / f).replace(".", ",")} %`;
}

export function share(part, total) {
  return total > 0 ? (part / total) * 100 : null;
}

export function sumScores(list) {
  return (list || []).reduce((s, x) => s + (Number(x.score) || 0), 0);
}

// Écart en % entre deux nombres, null quand il n'y a rien à comparer.
export function deltaOf(curr, prev) {
  if (prev > 0) return Math.round(((curr - prev) / prev) * 1000) / 10;
  return curr > 0 ? null : 0;
}

/* ------------------------------ Export CSV ------------------------------ */

export function csvCell(v) {
  const s = String(v ?? "");
  return /[";\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

// Point-virgule et BOM : s'ouvre tel quel dans Excel en français.
export function toCsv(head, rows) {
  return "﻿" + [head.map(csvCell).join(";"), ...rows.map((r) => r.map(csvCell).join(";"))].join("\n");
}

/* ------------------------------ Couverture v2 ------------------------------ */

// Ce que la période choisie contient vraiment : les compteurs v2 n'existent
// que depuis `coverage.since`.
export function CoverageNote({ coverage }) {
  if (!coverage || coverage.full) return null;
  return (
    <div className="ax-section">
      <Alert tone="info" title={coverage.started ? `Statistiques v2 : mesurées depuis le ${dateFr(coverage.since)}` : `Statistiques v2 : démarrent le ${dateFr(coverage.since)}`}>
        Visites, pages vues, sources, villes, pays, appareils, horaires et classements <em>sur la période</em> n&apos;existent qu&apos;à partir de cette date : avant, la période paraît vide. Les nouveaux visiteurs, les PDF et les totaux « depuis le lancement » ont tout leur historique.
      </Alert>
    </div>
  );
}

/* ------------------------------ Graphiques ------------------------------ */

// Barre de répartition (100 %) + légende chiffrée.
export function SplitBar({ items, total: forcedTotal, empty = "Aucune donnée sur la période." }) {
  const total = forcedTotal ?? items.reduce((s, i) => s + i.value, 0);
  if (!total) return <p className="ax-muted ax-small">{empty}</p>;
  return (
    <div className="ax-split">
      <div className="ax-split-bar" role="img" aria-label={items.map((i) => `${i.label} ${pct(share(i.value, total), 0)}`).join(", ")}>
        {items.map((i) => (
          <span key={i.key} style={{ width: `${(i.value / total) * 100}%`, background: i.color }} title={`${i.label} : ${num(i.value)} (${pct(share(i.value, total))})`} />
        ))}
      </div>
      <ul className="ax-split-legend">
        {items.map((i) => (
          <li key={i.key}>
            <i style={{ background: i.color }} />
            <span>{i.label}</span>
            <b>{pct(share(i.value, total), 0)}</b>
            <span className="ax-muted">{num(i.value)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Carte jour × heure (heure du Maroc) : plus la case est foncée, plus il y a
// eu de visites commencées dans ce créneau sur la période.
export function Heatmap({ heat, unit = "visite" }) {
  const max = Math.max(0, ...heat.flat());
  if (!max) return <p className="ax-muted ax-small">Aucune visite mesurée sur la période.</p>;
  return (
    <div className="ax-heat-wrap">
      <div className="ax-heat" role="table" aria-label="Visites par jour de la semaine et par heure">
        <span />
        {Array.from({ length: 24 }, (_, h) => (
          <span key={h} className="ax-heat-h" aria-hidden="true">
            {h % 3 === 0 ? h : ""}
          </span>
        ))}
        {heat.map((row, d) => (
          <div key={d} role="row" style={{ display: "contents" }}>
            <span className="ax-heat-d" role="rowheader">
              {WEEKDAYS_SHORT[d]}
            </span>
            {row.map((v, h) => {
              const t = v / max;
              return (
                <span
                  key={h}
                  role="cell"
                  className="ax-heat-cell"
                  style={{ background: v ? `color-mix(in srgb, var(--ax-accent) ${Math.round(12 + t * 88)}%, transparent)` : undefined }}
                  title={`${WEEKDAYS[d]} ${String(h).padStart(2, "0")} h – ${String((h + 1) % 24).padStart(2, "0")} h : ${num(v)} ${unit}${v > 1 ? "s" : ""}`}
                />
              );
            })}
          </div>
        ))}
      </div>
      <div className="ax-heat-scale" aria-hidden="true">
        <span>moins</span>
        {[0.12, 0.35, 0.6, 0.8, 1].map((t) => (
          <i key={t} style={{ background: `color-mix(in srgb, var(--ax-accent) ${Math.round(t * 100)}%, transparent)` }} />
        ))}
        <span>plus</span>
      </div>
    </div>
  );
}

// Colonnes simples (24 heures, 7 jours…), avec une seconde série en fond.
export function Columns({ values, labels, ghost, highlight, title = (i, v) => `${labels[i]} : ${num(v)}`, height = 120 }) {
  const max = Math.max(1, ...values, ...(ghost || []));
  return (
    <div className="ax-cols" style={{ height }}>
      {values.map((v, i) => (
        <div key={i} className={`ax-col${highlight === i ? " on" : ""}`} title={title(i, v)}>
          <div className="ax-col-track">
            {ghost && <span className="ax-col-ghost" style={{ height: `${(ghost[i] / max) * 100}%` }} />}
            <span className="ax-col-fill" style={{ height: `${(v / max) * 100}%` }} />
          </div>
          <span className="ax-col-label">{labels[i]}</span>
        </div>
      ))}
    </div>
  );
}

// Créneau le plus fréquenté d'une carte jour × heure.
export function peakSlot(heat) {
  let best = null;
  heat?.forEach((row, d) => row.forEach((v, h) => v > 0 && (!best || v > best.v) && (best = { d, h, v })));
  return best;
}

/* ------------------------------ Temps passé ------------------------------ */

// 45 s · 3 min 20 s · 1 h 05 min
export function duration(s) {
  if (s === null || s === undefined || !Number.isFinite(Number(s))) return "—";
  const t = Math.max(0, Math.round(Number(s)));
  if (t < 60) return `${t} s`;
  const h = Math.floor(t / 3600);
  const m = Math.floor((t % 3600) / 60);
  const sec = t % 60;
  if (h) return `${h} h ${String(m).padStart(2, "0")} min`;
  return sec && m < 10 ? `${m} min ${sec} s` : `${m} min`;
}

// Le temps passé n'est mesuré que depuis `time.since`.
export function TimeNote({ time }) {
  if (!time || time.full) return null;
  return (
    <p className="ax-muted ax-small" style={{ margin: "6px 0 0" }}>
      Temps passé mesuré depuis le {dateFr(time.since)} : les visites d&apos;avant n&apos;ont pas de durée.
    </p>
  );
}
