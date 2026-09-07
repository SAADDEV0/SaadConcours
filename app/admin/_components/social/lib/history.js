/* ------------------------------- Historique -------------------------------
 * La question à laquelle ce journal doit répondre en un coup d'œil, c'est
 * « est-ce que j'ai déjà posté ça, et où ? ». D'où le changement principal
 * par rapport à la v1 : une entrée porte maintenant **une plateforme**
 * (facebook, instagram, whatsapp…) et non un simple statut global. Publier le
 * même concours sur Facebook puis sur Instagram fait deux entrées ; le
 * reposter sur Facebook déclenche un avertissement de doublon.
 *
 * Tout est local (localStorage) : le studio ne parle à aucune API de
 * publication, il n'y a donc rien à synchroniser côté serveur.
 * ------------------------------------------------------------------------ */

export const HISTORY_KEY = "sc_social_history_v2";
const LEGACY_KEY = "sc_social_history_v1";
const MAX_ENTRIES = 400;

// Seul "publie" compte comme « ce post est sorti » (badge de doublon).
// Les autres tracent l'activité sans bloquer quoi que ce soit.
export const ACTIONS = {
  publie: { label: "Publié", icon: "✅" },
  prepare: { label: "Préparé", icon: "🧰" },
  telecharge: { label: "Image téléchargée", icon: "⬇️" },
  copie: { label: "Texte copié", icon: "📋" },
  rappel: { label: "Rappel", icon: "🕒" },
};

let seq = 0;
function newId() {
  seq += 1;
  return `${Date.now().toString(36)}${seq.toString(36)}`;
}

export function addEntry(list, entry) {
  const full = { ...entry, id: entry.id || newId(), at: entry.at || new Date().toISOString() };
  return [full, ...(list || [])].slice(0, MAX_ENTRIES);
}

export function removeEntry(list, id) {
  return (list || []).filter((e) => e.id !== id);
}

export function updateEntry(list, id, patch) {
  return (list || []).map((e) => (e.id === id ? { ...e, ...patch } : e));
}

export function contentKey(kind, itemId) {
  return `${kind}:${itemId}`;
}

/* Index { "concours:123": { facebook: "2026-09-07T…", instagram: … } } calculé
 * une seule fois pour toute la liste, plutôt qu'un .find() par ligne affichée
 * — le sélecteur peut lister plusieurs centaines de contenus. */
export function publicationIndex(list) {
  const index = {};
  for (const e of list || []) {
    if (e.action !== "publie" || !e.platform) continue;
    const key = contentKey(e.kind, e.itemId);
    const bucket = index[key] || (index[key] = {});
    // La liste est triée du plus récent au plus ancien : la première
    // occurrence rencontrée est la bonne.
    if (!bucket[e.platform]) bucket[e.platform] = e.at;
  }
  return index;
}

export function publishedOn(index, kind, itemId) {
  return index[contentKey(kind, itemId)] || null;
}

export function reminders(list) {
  return (list || [])
    .filter((e) => e.action === "rappel" && !e.done)
    .sort((a, b) => String(a.dueAt || "").localeCompare(String(b.dueAt || "")));
}

export function isDue(entry, now = Date.now()) {
  return Boolean(entry.dueAt) && new Date(entry.dueAt).getTime() <= now;
}

/* --------------------------- Reprise de la v1 ---------------------------
 * L'ancien format n'avait pas de plateforme : un "publie" venait forcément de
 * la publication Facebook automatique (supprimée depuis), et un "partage" du
 * partage natif, dont on ne peut pas savoir où il a atterri. On convertit
 * plutôt que d'effacer, pour ne pas perdre l'antériorité « déjà publié ».
 * ---------------------------------------------------------------------- */
const LEGACY_ACTIONS = {
  publie: { action: "publie", platform: "facebook" },
  partage: { action: "publie", platform: "autre" },
  telecharge: { action: "telecharge", platform: "autre" },
  copie: { action: "copie", platform: "autre" },
  genere: { action: "prepare", platform: "autre" },
  programme: { action: "rappel", platform: "autre" },
};

export function readLegacyHistory() {
  try {
    const raw = window.localStorage.getItem(LEGACY_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .map((e) => {
        const mapped = LEGACY_ACTIONS[e.status] || LEGACY_ACTIONS.genere;
        return {
          id: e.id || newId(),
          at: e.createdAt || new Date().toISOString(),
          kind: e.kind,
          itemId: e.itemId,
          itemLabel: e.itemLabel || "",
          formatKey: e.formatKey || null,
          variant: e.variant ?? 0,
          dueAt: e.scheduledFor || null,
          legacy: true,
          ...mapped,
        };
      })
      .filter((e) => e.kind && e.itemId)
      .slice(0, MAX_ENTRIES);
  } catch {
    return [];
  }
}
