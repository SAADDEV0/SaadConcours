import { NextResponse } from "next/server";
import { getAllNews, getSettings } from "@/lib/store";
import { getSubscribers } from "@/lib/subscribers";

export const dynamic = "force-dynamic";

const URGENT_DAYS = 7;
const SITE_URL = "https://www.saadconcours.space";

function daysUntil(dateStr) {
  if (!dateStr) return null;
  const diffMs = new Date(dateStr + "T00:00:00") - new Date(new Date().toDateString());
  return Math.round(diffMs / 86400000);
}

function escapeHtml(s) {
  return String(s ?? "").replace(
    /[&<>"']/g,
    (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m])
  );
}

function buildEmailHtml(items, email) {
  const rows = items
    .map(
      (i) => `
        <tr>
          <td style="padding:10px;border-bottom:1px solid #eee;">
            <strong>${escapeHtml(i.titre)}</strong><br>
            <span style="color:#666;font-size:13px;">${escapeHtml(i.etablissement || "")}${
        i.ville ? " · " + escapeHtml(i.ville) : ""
      }</span>
          </td>
          <td style="padding:10px;border-bottom:1px solid #eee;white-space:nowrap;color:#c0392b;font-weight:600;">
            ${escapeHtml(i.date_limite)}
          </td>
        </tr>`
    )
    .join("");
  const unsubUrl = `${SITE_URL}/api/alerts/unsubscribe?email=${encodeURIComponent(email)}`;
  return `
    <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;color:#111;">
      <h2 style="margin-bottom:4px;">⏰ Ces concours ferment bientôt</h2>
      <p style="color:#555;margin-top:0;">Date limite dans les ${URGENT_DAYS} prochains jours.</p>
      <table style="width:100%;border-collapse:collapse;">${rows}</table>
      <p style="margin-top:20px;"><a href="${SITE_URL}/news" style="color:#4f46e5;">Voir tous les concours ouverts →</a></p>
      <p style="font-size:12px;color:#999;margin-top:28px;border-top:1px solid #eee;padding-top:14px;">
        Tu reçois cet email car tu t'es inscrit aux alertes sur SaadConcours.
        <a href="${unsubUrl}" style="color:#999;">Se désabonner</a>
      </p>
    </div>
  `;
}

// Triggered by a scheduled GitHub Actions run (see
// .github/workflows/news-digest.yml), authenticated with a bearer secret
// since this is a server-to-server call, not a browser session — the
// admin cookie middleware.js relies on doesn't apply here. Every failure
// mode (disabled in settings, no Resend key, nothing urgent, no
// subscribers) returns 200 with a `reason` instead of erroring, since
// "nothing to send today" is the expected common case, not a bug.
export async function POST(req) {
  const secret = process.env.CRON_SECRET;
  const auth = req.headers.get("authorization");
  if (!secret || auth !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Non autorisé." }, { status: 401 });
  }

  const settings = await getSettings();
  if (!settings.newsAlertsEnabled) {
    return NextResponse.json({ sent: 0, reason: "Alertes désactivées dans les réglages admin." });
  }

  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    return NextResponse.json({ sent: 0, reason: "RESEND_API_KEY non configuré." });
  }

  const news = await getAllNews();
  const urgent = news.filter(
    (i) => !i.cloture && i.date_limite && daysUntil(i.date_limite) >= 0 && daysUntil(i.date_limite) <= URGENT_DAYS
  );
  if (!urgent.length) {
    return NextResponse.json({ sent: 0, reason: "Aucun concours ne ferme dans les prochains jours." });
  }

  const subscribers = await getSubscribers();
  if (!subscribers.length) {
    return NextResponse.json({ sent: 0, reason: "Aucun abonné." });
  }

  let sent = 0;
  for (const email of subscribers) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: process.env.RESEND_FROM || "SaadConcours <alerts@saadconcours.space>",
          to: [email],
          subject: `⏰ ${urgent.length} concours ferme${urgent.length > 1 ? "nt" : ""} bientôt`,
          html: buildEmailHtml(urgent, email),
        }),
      });
      if (res.ok) sent++;
      else console.error("resend send failed", email, res.status, await res.text().catch(() => ""));
    } catch (err) {
      console.error("resend send error", email, err);
    }
  }

  return NextResponse.json({ sent, total: subscribers.length, urgentCount: urgent.length });
}
