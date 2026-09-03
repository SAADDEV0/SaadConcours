/* A concours moves brouillon -> sujet_publie -> corrige_en_cours -> pret as
 * it's worked on, tracked in a plain "statut" field on the concours object
 * itself (nothing new to sync). Existing concours predating this field have
 * no `statut` at all — treated as "pret" (not "brouillon"), since they're
 * already live on the public site; only new/imported entries default to
 * "brouillon" (see addConcours/addConcoursBulk in lib/store.js). */

export const STATUT_OPTIONS = [
  { value: "brouillon", label: "📝 Brouillon" },
  { value: "sujet_publie", label: "📄 Sujet publié" },
  { value: "corrige_en_cours", label: "✍️ Corrigé en cours" },
  { value: "pret", label: "✅ Prêt" },
];

export function statutValue(item) {
  return item.statut || "pret";
}

export function statutLabel(item) {
  return STATUT_OPTIONS.find((o) => o.value === statutValue(item))?.label || "✅ Prêt";
}
