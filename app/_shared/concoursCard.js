// Card markup shared between the server-rendered initial grid
// (app/concours/page.js, crawlable on first load) and the client-side
// re-render on filter/search changes (ConcoursExplorer.js) — one place to
// keep both in sync instead of two copies drifting apart.

export function escapeHtml(s) {
  return String(s ?? "").replace(
    /[&<>"']/g,
    (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m])
  );
}

export function concoursCardHtml(c) {
  const hasImg = (c.images || []).length > 0;
  const hasCorrige = Boolean(c.corrige_md || c.corrige_from_github);
  const masterLabel = c.master_reel || c.filiere || `${c.etablissement} — ${c.ville} — ${c.annee}`;
  return `
  <a class="card" href="/concours/${encodeURIComponent(c.id)}" data-id="${escapeHtml(c.id)}">
    <div class="card-top">
      <div class="card-title">${escapeHtml(masterLabel)}</div>
      <div style="display:flex; align-items:center; gap:6px; flex-shrink:0;">
        <div class="card-year">${escapeHtml(String(c.annee))}</div>
        <button type="button" class="card-dl" title="Télécharger l'énoncé (PDF)">⬇</button>
      </div>
    </div>
    <div class="card-meta">🏫 ${escapeHtml(c.etablissement)} · 📍 ${escapeHtml(c.ville)}</div>
    <div class="card-modules">${(c.modules || [])
      .slice(0, 4)
      .map((m) => `<span class="mod-tag">${escapeHtml(m)}</span>`)
      .join("")}${(c.modules || []).length > 4 ? `<span class="mod-tag">+${c.modules.length - 4}</span>` : ""}</div>
    <div class="card-bottom">
      <span class="diff-badge">Difficulté : ${escapeHtml(c.difficulte || "?")}</span>
      <span style="display:flex; gap:6px;">
        ${hasCorrige ? '<span class="corrige-badge">✅ corrigé</span>' : ""}
        ${hasImg ? '<span class="img-badge">🖼️ scan réel</span>' : ""}
      </span>
    </div>
  </a>`;
}
