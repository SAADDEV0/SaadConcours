import { SOCIAL_FIELDS } from "./settingsFields";

// Auto-generated from the site's real current state (never a fixed/manual
// list) — items disappear on their own once fixed, instead of an admin
// having to remember to update a static checklist somewhere. Pure function
// (no navigation callback) so it can be reused by both the dashboard widget
// and the "Santé" overview.
export function buildTodoItems({ settings, emailConfigured, filiereCounts }) {
  const items = [];
  if (settings) {
    const socialFilled = SOCIAL_FIELDS.some((f) => f.key !== "email" && String(settings[f.key] || "").trim());
    if (!socialFilled) {
      items.push({
        key: "social",
        text: "Aucun réseau social configuré — les icônes du site restent invisibles.",
        href: "/admin/reglages",
        actionLabel: "Réglages →",
      });
    }
  }
  if (emailConfigured === false) {
    items.push({
      key: "email",
      text: "Envoi d'email non configuré côté serveur (GMAIL_USER / GMAIL_APP_PASSWORD).",
      href: "/admin/alertes",
      actionLabel: "Alertes email →",
    });
  }
  if (filiereCounts) {
    const low = Object.entries(filiereCounts).filter(([, n]) => n < 3);
    if (low.length) {
      items.push({
        key: "taxonomy",
        text: `${low.length} filière${low.length > 1 ? "s" : ""} avec moins de 3 concours : ${low
          .map(([name]) => name)
          .slice(0, 4)
          .join(", ")}${low.length > 4 ? "…" : ""}.`,
        href: "/admin/concours/filieres",
        actionLabel: "Filières →",
      });
    }
  }
  return items;
}
