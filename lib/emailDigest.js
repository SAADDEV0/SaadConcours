// Shared email-building/sending logic for the "concours qui ferme bientôt"
// alert - used by both the unattended daily cron
// (app/api/cron/news-digest) and the admin's manual/test send
// (app/api/admin/send-digest, /api/admin/preview-digest). Kept in one
// place so the two paths can never drift into sending different-looking
// emails for the same feature.

export const SITE_URL = "https://www.saadconcours.space";
export const URGENT_DAYS = 7;

export function daysUntil(dateStr) {
  if (!dateStr) return null;
  const diffMs = new Date(dateStr + "T00:00:00") - new Date(new Date().toDateString());
  return Math.round(diffMs / 86400000);
}

export function escapeHtml(s) {
  return String(s ?? "").replace(
    /[&<>"']/g,
    (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m])
  );
}

// Open, non-closed items whose date_limite falls within URGENT_DAYS from
// today - this is the smart default the admin composer pre-checks, and
// the exact set the automatic daily cron always sends (it has no admin
// present to review a selection, so it can't do anything smarter).
export function computeUrgentNews(news) {
  return news
    .filter((i) => !i.cloture && i.date_limite && daysUntil(i.date_limite) >= 0 && daysUntil(i.date_limite) <= URGENT_DAYS)
    .sort((a, b) => daysUntil(a.date_limite) - daysUntil(b.date_limite));
}

export function defaultSubject(itemCount) {
  return `⏰ ${itemCount} concours ferme${itemCount > 1 ? "nt" : ""} bientôt`;
}

export function buildFromHeader(fromName, fromEmail) {
  return `${fromName || "SaadConcours"} <${fromEmail || process.env.RESEND_FROM_EMAIL || "alerts@saadconcours.space"}>`;
}

export function buildEmailHtml(items, email, customMessage) {
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
  // customMessage is admin-authored free text, not a trusted schema-checked
  // field - it still goes through escapeHtml like everything else here.
  const introHtml = customMessage
    ? `<p style="color:#333;white-space:pre-line;">${escapeHtml(customMessage)}</p>`
    : `<p style="color:#555;margin-top:0;">Date limite dans les ${URGENT_DAYS} prochains jours.</p>`;
  return `
    <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;color:#111;">
      <h2 style="margin-bottom:4px;">⏰ Ces concours ferment bientôt</h2>
      ${introHtml}
      <table style="width:100%;border-collapse:collapse;">${rows || `<tr><td style="padding:10px;color:#666;">Aucun concours sélectionné.</td></tr>`}</table>
      <p style="margin-top:20px;"><a href="${SITE_URL}/news" style="color:#4f46e5;">Voir tous les concours ouverts →</a></p>
      <p style="font-size:12px;color:#999;margin-top:28px;border-top:1px solid #eee;padding-top:14px;">
        Tu reçois cet email car tu t'es inscrit aux alertes sur SaadConcours.
        <a href="${unsubUrl}" style="color:#999;">Se désabonner</a>
      </p>
    </div>
  `;
}

// One Resend API call per recipient (never a shared `to` array - that
// would leak every recipient's address to every other recipient). Returns
// {ok, status} so callers can tally sends without each one needing its
// own try/catch/logging boilerplate.
export async function sendDigestEmail({ resendKey, fromHeader, to, subject, items, customMessage }) {
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: fromHeader,
        to: [to],
        subject,
        html: buildEmailHtml(items, to, customMessage),
      }),
    });
    if (!res.ok) {
      console.error("resend send failed", to, res.status, await res.text().catch(() => ""));
    }
    return { ok: res.ok, status: res.status };
  } catch (err) {
    console.error("resend send error", to, err);
    return { ok: false, status: 0 };
  }
}
