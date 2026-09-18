import { formatDayFr } from "@/lib/dateRange";
import { formatNumber, formatDeltaPct } from "./format";

// A dashboard that only prints numbers makes the admin do the analysis. A
// professional one says what changed and what needs attention — which, with
// ~35 blocks on the page, is the difference between "I'll read this later"
// and "I know what to do now".
//
// Everything here is derived from data already on screen; nothing is
// invented, and nothing fires on a sample too small to mean anything (a jump
// from 2 visits to 5 is +150% and tells you nothing, so it is suppressed).

const MIN_BASE = 15; // below this, a percentage swing is noise
const BIG_MOVE = 20; // percent

const SEVERITY = { bad: 0, warn: 1, good: 2, info: 3 };

export function buildInsights({ range, kpis, todo, content, extra, subscribers }) {
  const out = [];
  const metrics = kpis?.metrics;

  if (metrics) {
    for (const [key, label, noun] of [
      ["visits", "Visites", "visite"],
      ["pdf", "Téléchargements PDF", "téléchargement"],
    ]) {
      const m = metrics[key];
      if (!m) continue;
      const base = Math.max(m.total, m.prev);
      if (base < MIN_BASE || Math.abs(m.deltaPct) < BIG_MOVE) continue;
      const up = m.deltaPct >= 0;
      out.push({
        id: `move-${key}`,
        tone: up ? "good" : "bad",
        icon: up ? "trendingUp" : "trendingDown",
        title: `${label} ${up ? "en hausse" : "en baisse"} de ${formatDeltaPct(Math.abs(m.deltaPct))}`,
        text: `${formatNumber(m.total)} ${noun}${m.total > 1 ? "s" : ""} sur la période, contre ${formatNumber(
          m.prev
        )} sur la période précédente de même longueur.`,
      });
    }

    // A single outlier day is worth surfacing: it's usually a share that
    // worked, and it's invisible in a total.
    const daily = metrics.pdf?.daily || [];
    if (daily.length > 3 && metrics.pdf.total > MIN_BASE) {
      const best = daily.reduce((a, b) => (b[1] > a[1] ? b : a), daily[0]);
      const avg = metrics.pdf.total / daily.length;
      if (best[1] >= avg * 2.5 && best[1] >= 5) {
        out.push({
          id: "peak-pdf",
          tone: "info",
          icon: "activity",
          title: `Pic de téléchargements le ${formatDayFr(best[0], { weekday: "long", day: "numeric", month: "long" })}`,
          text: `${formatNumber(best[1])} PDF ce jour-là, soit ${Math.round(best[1] / Math.max(1, avg))}× la moyenne de la période.`,
        });
      }
    }

    // Conversion is the one ratio that says whether traffic is the right
    // traffic. Only flagged when both windows have enough volume to compare.
    if (metrics.visits.total >= 50 && metrics.visits.prev >= 50) {
      const diff = Math.round((metrics.conversionPct - metrics.prevConversionPct) * 10) / 10;
      if (Math.abs(diff) >= 2) {
        out.push({
          id: "conversion",
          tone: diff > 0 ? "good" : "warn",
          icon: "target",
          title: `Taux visites → PDF ${diff > 0 ? "en hausse" : "en baisse"} (${metrics.conversionPct} %)`,
          text: `Il était de ${metrics.prevConversionPct} % sur la période précédente.`,
        });
      }
    }
  }

  // --- Things that need doing, not just things that changed ---------------
  const expiring = todo?.newsExpiringSoon || [];
  const urgent = expiring.filter((n) => {
    const days = Math.round((new Date(n.date_limite + "T00:00:00") - new Date(new Date().toDateString())) / 86400000);
    return days <= 3;
  });
  if (urgent.length) {
    out.push({
      id: "expiring",
      tone: "bad",
      icon: "calendarClock",
      title: `${urgent.length} concours ferme${urgent.length > 1 ? "nt" : ""} sous 3 jours`,
      text: urgent
        .slice(0, 3)
        .map((n) => n.titre)
        .join(" · "),
      href: "/admin/concours-ouverts",
      actionLabel: "Vérifier",
    });
  }

  const sansCorrige = kpis?.counts?.concoursSansCorrige ?? 0;
  const totalConcours = kpis?.counts?.concours ?? 0;
  if (sansCorrige > 0 && totalConcours > 0) {
    const pct = Math.round((sansCorrige / totalConcours) * 100);
    // Only worth an insight slot when it's a meaningful share of the
    // catalogue — two missing corrigés out of two hundred is a to-do item,
    // not a headline.
    if (pct >= 25) {
      out.push({
        id: "corriges",
        tone: "warn",
        icon: "alertTriangle",
        title: `${formatNumber(sansCorrige)} concours sans corrigé (${pct} % du catalogue)`,
        text: "C'est la première chose que les visiteurs cherchent après le sujet.",
        href: "/admin/concours",
        actionLabel: "Compléter",
      });
    }
  }

  const misses = todo?.searchMisses || [];
  const hotMiss = misses.find((m) => m.count >= 3);
  if (hotMiss) {
    out.push({
      id: "search-miss",
      tone: "warn",
      icon: "search",
      title: `« ${hotMiss.query} » recherché ${formatNumber(hotMiss.count)} fois sans résultat`,
      text: "Un contenu manquant que des visiteurs réels sont déjà venus chercher.",
      href: "/admin/concours/import",
      actionLabel: "Ajouter",
    });
  }

  if (extra?.emailConfigured === false) {
    out.push({
      id: "email",
      tone: "warn",
      icon: "mail",
      title: "Envoi d'email non configuré",
      text: "Les alertes quotidiennes ne partent pas tant que GMAIL_USER / GMAIL_APP_PASSWORD manquent côté serveur.",
      href: "/admin/alertes",
      actionLabel: "Configurer",
    });
  }

  if (content && content.addedInRange === 0 && range?.days >= 30) {
    out.push({
      id: "no-growth",
      tone: "info",
      icon: "folders",
      title: "Aucun concours ajouté sur la période",
      text: `Le catalogue n'a pas bougé depuis ${formatDayFr(range.from, { day: "numeric", month: "long" })}.`,
      href: "/admin/concours/import",
      actionLabel: "Importer",
    });
  }

  if (subscribers && subscribers.count === 0 && extra?.emailConfigured) {
    out.push({
      id: "no-subs",
      tone: "info",
      icon: "userPlus",
      title: "Aucun abonné aux alertes",
      text: "Le formulaire d'abonnement est en ligne mais personne ne s'y est encore inscrit.",
    });
  }

  // Worst news first, and never more than four: an insight bar that scrolls
  // is just another list to read.
  return out.sort((a, b) => SEVERITY[a.tone] - SEVERITY[b.tone]).slice(0, 4);
}
