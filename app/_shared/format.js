// Petits formats d'affichage partagés (cartes, fiches, articles) : une seule
// façon d'écrire une date ou une difficulté sur tout le site.

const MOIS = ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."];

// « 2026-10-03 » → « 3 oct. 2026 ». Calculé à la main plutôt qu'avec
// Intl.DateTimeFormat : le rendu serveur (Worker) et le navigateur doivent
// produire exactement la même chaîne, sans dépendre du fuseau ni des données
// ICU embarquées. Toute valeur non reconnue est rendue telle quelle.
export function formatDateFr(iso) {
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(String(iso || ""));
  if (!m) return String(iso || "");
  const mois = MOIS[Number(m[2]) - 1];
  return mois ? `${Number(m[3])} ${mois} ${m[1]}` : String(iso);
}

function escapeHtml(s) {
  return String(s ?? "").replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
  );
}

// « 3/5 » → note sur 5 (1 à 5), null si absente ou illisible.
export function difficulteNote(d) {
  const m = /^\s*([1-5])\s*\/\s*5\s*$/.exec(String(d || ""));
  return m ? Number(m[1]) : null;
}

// Jauge de difficulté identique sur les cartes et les fiches : libellé
// explicite (une étoile seule se lisait comme une note d'avis) et cinq
// pastilles, dont la valeur est donnée en texte aux lecteurs d'écran.
export function difficulteHtml(d) {
  const n = difficulteNote(d);
  if (!n) return "";
  const dots = Array.from({ length: 5 }, (_, i) => `<i${i < n ? ' class="on"' : ""}></i>`).join("");
  return `<span class="sp-diff" title="Difficulté ${n} sur 5"><span class="sp-diff-label">Difficulté</span><span class="sp-diff-dots" aria-hidden="true">${dots}</span><span class="sp-diff-val">${escapeHtml(`${n}/5`)}</span></span>`;
}
