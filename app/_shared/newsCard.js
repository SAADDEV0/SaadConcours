// Card markup + urgency helpers shared between the server-rendered initial
// grid (app/news/page.js, crawlable on first load) and the client-side
// re-render on filter/search changes (NewsExplorer.js) — same pattern as
// concoursCard.js / coursCard.js. Also reused by app/page.js for the
// homepage's "concours récemment ouverts" / urgent alert sections so the
// urgency math (what counts as "closing soon") never drifts between pages.

import { escapeHtml } from "./concoursCard";

export const NEWS_SOON_DAYS = 21;

export function daysUntil(dateStr) {
  if (!dateStr) return null;
  const diffMs = new Date(dateStr + "T00:00:00") - new Date(new Date().toDateString());
  return Math.round(diffMs / 86400000);
}

export function urgency(item) {
  if (!item.date_limite) return "none";
  const d = daysUntil(item.date_limite);
  if (d < 0) return "closed";
  if (d <= 7) return "urgent";
  if (d <= NEWS_SOON_DAYS) return "soon";
  return "ok";
}

export function etabGroup(etab) {
  if (etab === "FSJES") return "FSJES";
  if (etab === "ENCG") return "ENCG";
  if (etab === "FEG" || etab === "FSEG") return "FEG/FSEG";
  return "Autre";
}

export function etabColorClass(etab) {
  const g = etabGroup(etab);
  if (g === "FSJES") return "blue";
  if (g === "ENCG") return "violet";
  if (g === "FEG/FSEG") return "green";
  return "neutral";
}

export function urgencyLabel(item) {
  const u = urgency(item);
  if (u === "none") return `<span class="nw-badge">📅 Date limite non précisée</span>`;
  const label = `📅 ${escapeHtml(item.date_limite)}`;
  const d = daysUntil(item.date_limite);
  if (u === "closed") return `<span class="nw-badge nw-closed">${label} (clôturé)</span>`;
  if (u === "urgent") return `<span class="nw-badge nw-urgent">${label} — J-${d}</span>`;
  if (u === "soon") return `<span class="nw-badge nw-soon">${label} — J-${d}</span>`;
  return `<span class="nw-badge nw-ok">${label}</span>`;
}

// Same sort as the old client-only /news page: urgent first, then soon,
// then open-no-date, then closed — ties broken by days-left (ascending) for
// the two time-bound buckets, and by publication date (newest first)
// otherwise.
export function sortNewsByUrgency(items) {
  const order = { urgent: 0, soon: 1, ok: 2, none: 3, closed: 4 };
  return [...items].sort((a, b) => {
    const ua = order[urgency(a)];
    const ub = order[urgency(b)];
    if (ua !== ub) return ua - ub;
    if (ua <= 1) return daysUntil(a.date_limite) - daysUntil(b.date_limite);
    return (b.date_publication || "").localeCompare(a.date_publication || "");
  });
}

export function newsCardHtml(item) {
  return `
  <div class="nw-card nw-u-${urgency(item)} etab-${etabColorClass(item.etablissement)}" data-id="${escapeHtml(item.id)}">
    <div class="nw-card-head">
      <span class="news-etab-chip">${escapeHtml(item.etablissement || "Autre")}</span>
      ${item.ville ? `<span class="news-ville">📍 ${escapeHtml(item.ville)}</span>` : ""}
      ${item.filiere ? `<span class="news-filiere-chip">${escapeHtml(item.filiere)}</span>` : ""}
    </div>
    <div class="news-card-title">${escapeHtml(item.titre)} <a class="card-dl" href="/news/${encodeURIComponent(item.id)}" title="Ouvrir la page dédiée" style="text-decoration:none; display:inline-flex; vertical-align:middle;">🔗</a></div>
    <div class="nw-card-bottom">
      ${urgencyLabel(item)}
      <div class="nw-card-actions">
        <a class="dl-btn" style="text-decoration:none;" href="${escapeHtml(item.lien_inscription || item.source)}" target="_blank" rel="noopener">S'inscrire</a>
        <a class="reset-btn" style="width:auto; text-decoration:none; display:inline-flex; align-items:center;" href="${escapeHtml(item.source)}" target="_blank" rel="noopener">🔗 Source</a>
      </div>
    </div>
  </div>`;
}

// Applies the admin's établissement visibility toggle (Réglages → "Concours
// ouverts affichés") — same rule used by app/page.js and app/news/page.js so
// the "closing soon" count on the homepage always matches what /news shows.
export function visibleNews(rawList, settings) {
  const visibles = settings?.newsEtablissementsVisibles || [];
  return visibles.length ? rawList.filter((i) => visibles.includes(i.etablissement)) : rawList;
}
