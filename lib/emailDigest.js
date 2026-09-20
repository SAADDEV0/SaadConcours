// Shared email-building/sending logic for the "concours qui ferme bientôt"
// alert - used by both the unattended daily cron
// (app/api/cron/news-digest) and the admin's manual/test send
// (app/api/admin/send-digest, /api/admin/preview-digest). Kept in one
// place so the two paths can never drift into sending different-looking
// emails for the same feature.
//
// Two transports are supported, see getTransporter/sendViaResend below:
// Gmail SMTP via nodemailer (the original, Node-only) and Resend's HTTP API
// (required on Cloudflare Workers, which cannot open raw SMTP sockets).
// nodemailer is imported lazily at its call site so the SMTP stack never
// enters the Worker bundle.

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

// Turns bare "https://..." URLs inside admin-authored free text into real
// clickable links, so a pasted list of resource links (ex. "Guide : ...\n
// https://...") reads as an actual link list instead of dead text. Applied
// to already-escaped HTML — safe because "&amp;" etc. contain no whitespace
// and stay intact inside both the href and the link text.
export function linkifyHtml(escapedText) {
  return escapedText.replace(/https?:\/\/[^\s<]+/g, (url) => {
    const trailing = url.match(/[).,;:!?]+$/)?.[0] || "";
    const clean = trailing ? url.slice(0, -trailing.length) : url;
    return `<a href="${clean}" style="color:#4f46e5;">${clean}</a>${trailing}`;
  });
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
  if (!itemCount) return "📩 Nouveau message de SaadConcours";
  return `⏰ ${itemCount} concours ferme${itemCount > 1 ? "nt" : ""} bientôt`;
}

// Sent via Gmail SMTP (see sendDigestEmail below), which - unlike Resend -
// only lets you send as the authenticated account itself: Gmail rejects a
// From address that isn't GMAIL_USER (or a verified "Send As" alias), so
// only the display name is actually customizable here.
export function buildFromHeader(fromName) {
  return `"${(fromName || "SaadConcours").replace(/"/g, "")}" <${process.env.GMAIL_USER || ""}>`;
}

export function emailConfigured() {
  // Either transport counts as configured — on Cloudflare only Resend can
  // actually deliver, but the admin's "email is set up" indicator should be
  // true whichever one the current runtime is using.
  if (process.env.RESEND_API_KEY) return true;
  return Boolean(process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD);
}

// Plain-text alternative part — most bulk-mail deliverability guides flag
// HTML-only messages (no text/plain part) as a spam signal, and it's the
// fallback for text-only mail clients.
export function buildEmailText(items, email, customMessage) {
  const unsubUrl = `${SITE_URL}/api/alerts/unsubscribe?email=${encodeURIComponent(email)}`;
  const lines = [];
  if (items.length) {
    const rows = items.map((i) => `- ${i.titre}${i.etablissement ? ` (${i.etablissement}${i.ville ? ", " + i.ville : ""})` : ""} — date limite : ${i.date_limite}`);
    lines.push("⏰ Ces concours ferment bientôt", "", customMessage || `Date limite dans les ${URGENT_DAYS} prochains jours.`, "", ...rows);
  } else {
    // No concours attached — a fully free-form personalized email (e.g.
    // "un nouvel ancien concours d'un master vient d'être ajouté"), the
    // message itself is the whole body instead of an intro above a table.
    lines.push(customMessage || "Nouveau message de SaadConcours.");
  }
  lines.push(
    "",
    `Voir tous les concours ouverts : ${SITE_URL}/news`,
    "",
    "Tu reçois cet email car tu t'es inscrit aux alertes sur SaadConcours.",
    `Se désabonner : ${unsubUrl}`
  );
  return lines.join("\n");
}

export function buildEmailHtml(items, email, customMessage) {
  const hasItems = items.length > 0;
  const unsubUrl = `${SITE_URL}/api/alerts/unsubscribe?email=${encodeURIComponent(email)}`;
  // customMessage is admin-authored free text, not a trusted schema-checked
  // field - it still goes through escapeHtml like everything else here.
  let bodyHtml;
  if (hasItems) {
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
    const introHtml = customMessage
      ? `<p style="color:#333;white-space:pre-line;">${linkifyHtml(escapeHtml(customMessage))}</p>`
      : `<p style="color:#555;margin-top:0;">Date limite dans les ${URGENT_DAYS} prochains jours.</p>`;
    bodyHtml = `
      <h2 style="margin-bottom:4px;">⏰ Ces concours ferment bientôt</h2>
      ${introHtml}
      <table style="width:100%;border-collapse:collapse;">${rows}</table>`;
  } else {
    // No concours attached — a fully free-form personalized email, the
    // message itself is the whole body instead of an intro above a table.
    bodyHtml = `<p style="color:#333;white-space:pre-line;">${linkifyHtml(escapeHtml(customMessage || "Nouveau message de SaadConcours."))}</p>`;
  }
  return `
    <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;color:#111;">
      ${bodyHtml}
      <p style="margin-top:20px;"><a href="${SITE_URL}/news" style="color:#4f46e5;">Voir tous les concours ouverts →</a></p>
      <p style="font-size:12px;color:#999;margin-top:28px;border-top:1px solid #eee;padding-top:14px;">
        Tu reçois cet email car tu t'es inscrit aux alertes sur SaadConcours.
        <a href="${unsubUrl}" style="color:#999;">Se désabonner</a>
      </p>
    </div>
  `;
}

// Two transports, picked at call time.
//
// Cloudflare Workers cannot open the raw TCP socket SMTP needs, so nodemailer
// simply cannot run there. Resend is an HTTP API and works on both runtimes,
// which is what lets the same code serve Vercel and Cloudflare while the two
// run side by side during the migration.
//
// RESEND_API_KEY set  -> Resend (required on Cloudflare)
// otherwise           -> Gmail SMTP, the previous behaviour, unchanged
//
// nodemailer is imported lazily rather than at module scope on purpose: a
// top-level import pulls the whole SMTP stack into the Worker bundle, which
// is already at 2.19MB against a 3MB limit, for code that can never execute
// there.
function resendConfigured() {
  return Boolean(process.env.RESEND_API_KEY);
}

let transporter = null;
async function getTransporter() {
  if (!transporter) {
    const { default: nodemailer } = await import("nodemailer");
    transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD },
    });
  }
  return transporter;
}

// Resend takes the same fields nodemailer does, including custom headers, so
// the RFC 8058 one-click unsubscribe below survives the switch intact.
async function sendViaResend({ from, to, subject, html, text, headers }) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from, to, subject, html, text, headers }),
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`resend ${res.status}: ${detail.slice(0, 200)}`);
  }
  return res.json().catch(() => ({}));
}

// One send per recipient (never a shared `to` list - that would leak every
// recipient's address to every other recipient). Returns {ok, status} so
// callers can tally sends without each one needing its own try/catch.
export async function sendDigestEmail({ fromHeader, to, subject, items, customMessage }) {
  const unsubUrl = `${SITE_URL}/api/alerts/unsubscribe?email=${encodeURIComponent(to)}`;
  const payload = {
    from: fromHeader,
    to,
    subject,
    html: buildEmailHtml(items, to, customMessage),
    text: buildEmailText(items, to, customMessage),
    // RFC 8058 one-click unsubscribe — gives Gmail/Outlook/etc. a native
    // "Unsubscribe" button next to the sender instead of relying only on
    // the link in the footer, which materially helps inbox placement.
    headers: {
      "List-Unsubscribe": `<${unsubUrl}>`,
      "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
    },
  };
  try {
    if (resendConfigured()) {
      await sendViaResend(payload);
    } else {
      const t = await getTransporter();
      await t.sendMail(payload);
    }
    return { ok: true, status: 200 };
  } catch (err) {
    console.error(resendConfigured() ? "resend send error" : "gmail send error", to, err?.message || err);
    return { ok: false, status: 0 };
  }
}
