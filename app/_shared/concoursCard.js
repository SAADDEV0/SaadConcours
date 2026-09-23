// Card markup shared between the server-rendered initial grid
// (app/concours/page.js, crawlable on first load) and the client-side
// re-render on filter/search changes (ConcoursExplorer.js) — one place to
// keep both in sync instead of two copies drifting apart. Same card
// component as the Bac / FSJES course spaces (bac-mat-card).

export function escapeHtml(s) {
  return String(s ?? "").replace(
    /[&<>"']/g,
    (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m])
  );
}

// Teinte de la carte par grande famille de filières (lib/taxonomy.js).
export const CONCOURS_HUES = { FCA: 152, MRH: 22, MCL: 330, EAPP: 210, EDMQ: 265 };

export function concoursCardHtml(c) {
  const hasImg = (c.images || []).length > 0;
  const hasCorrige = Boolean(c.corrige_md || c.corrige_from_github);
  const masterLabel = c.master_reel || c.filiere || `${c.etablissement} — ${c.ville} — ${c.annee}`;
  const hue = CONCOURS_HUES[c.categorie] ?? 220;
  const modules = c.modules || [];
  return `
  <a class="bac-mat-card sp-card" href="/concours/${encodeURIComponent(c.id)}" data-id="${escapeHtml(c.id)}" style="--mat-h:${hue}">
    <span class="bac-mat-icon sp-year">${escapeHtml(String(c.annee || "—"))}</span>
    <span class="bac-mat-body">
      <span class="bac-mat-name">${escapeHtml(masterLabel)}</span>
      <span class="bac-mat-desc">🏫 ${escapeHtml(c.etablissement)} · 📍 ${escapeHtml(c.ville)}</span>
      ${
        modules.length
          ? `<span class="sp-chips">${modules
              .slice(0, 4)
              .map((m) => `<span class="bac-res-chip on">${escapeHtml(m)}</span>`)
              .join("")}${modules.length > 4 ? `<span class="bac-res-chip">+${modules.length - 4}</span>` : ""}</span>`
          : ""
      }
      <span class="bac-mat-meta">
        <span>Difficulté : ${escapeHtml(c.difficulte || "?")}</span>
        ${hasCorrige ? '<span class="bac-dispo">✅ Corrigé</span>' : ""}
        ${hasImg ? '<span class="bac-soon">🖼️ Scan réel</span>' : ""}
      </span>
    </span>
    <button type="button" class="card-dl sp-card-dl" title="Télécharger l'énoncé (PDF)" aria-label="Télécharger l'énoncé en PDF">⬇</button>
  </a>`;
}
