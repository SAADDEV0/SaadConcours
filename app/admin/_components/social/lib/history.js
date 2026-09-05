/* ------------------------------- Historique -------------------------------
 * Journal des posts générés/copiés/téléchargés/partagés/publiés, gardé côté
 * client (localStorage) — pas besoin d'un aller-retour serveur pour "est-ce
 * que j'ai déjà posté ce concours ?" ou pour retrouver un post d'il y a deux
 * jours. La "programmation" est volontairement un simple rappel local (pas
 * de cron serveur qui publierait tout seul à l'heure dite) : générer
 * l'image côté serveur pour un post différé demanderait un moteur canvas
 * headless qui n'existe pas dans ce projet, et republier automatiquement
 * sans qu'un humain valide le texte au moment T serait plus risqué qu'utile
 * pour une page Facebook publique. L'entrée "programmée" réapparaît juste
 * en haut de l'historique jusqu'à ce qu'un admin la publie ou l'annule.
 * ------------------------------------------------------------------------ */

export const HISTORY_KEY = "sc_social_history_v1";
const MAX_ENTRIES = 200;

let seq = 0;
export function newHistoryId() {
  seq += 1;
  return `${Date.now().toString(36)}_${seq}`;
}

export function addHistoryEntry(list, entry) {
  const next = [{ ...entry, id: entry.id || newHistoryId(), createdAt: entry.createdAt || new Date().toISOString() }, ...(list || [])];
  return next.slice(0, MAX_ENTRIES);
}

export function updateHistoryEntry(list, id, patch) {
  return (list || []).map((e) => (e.id === id ? { ...e, ...patch } : e));
}

export function removeHistoryEntry(list, id) {
  return (list || []).filter((e) => e.id !== id);
}

// Dernière publication connue pour cet item — sert d'avertissement "déjà
// posté" plutôt que de blocage dur (un rappel volontaire est légitime).
export function lastPublished(list, kind, itemId) {
  return (list || []).find((e) => e.kind === kind && e.itemId === itemId && e.status === "publie") || null;
}

export function scheduledEntries(list) {
  return (list || [])
    .filter((e) => e.status === "programme")
    .sort((a, b) => (a.scheduledFor || "").localeCompare(b.scheduledFor || ""));
}
