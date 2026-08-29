import { NextResponse } from "next/server";
import { getAllNews } from "@/lib/store";
import { isValidEmail, normalizeEmail } from "@/lib/subscribers";
import { buildFromHeader, defaultSubject, sendDigestEmail } from "@/lib/emailDigest";

// Manual/test send from the admin composer - distinct from
// /api/cron/news-digest (unattended, always-full-list). Lets the admin pick
// which open concours to include and which subscribers to send to,
// independently of the persisted settings.json defaults (so a one-off
// tweak here never silently changes what tomorrow's automatic digest sends).
export const dynamic = "force-dynamic";

// Defensive upper bound - this project's subscriber list is small, so
// hitting this would mean a client bug, not a real campaign.
const MAX_RECIPIENTS = 500;

export async function POST(req) {
  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    return NextResponse.json({ error: "RESEND_API_KEY non configuré côté serveur." }, { status: 400 });
  }

  const body = await req.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Corps de requête invalide." }, { status: 400 });
  }

  const newsIds = Array.isArray(body.newsIds) ? body.newsIds : [];
  const news = await getAllNews();
  const items = news.filter((i) => newsIds.includes(i.id));
  if (!items.length) {
    return NextResponse.json({ error: "Sélectionne au moins un concours à inclure." }, { status: 400 });
  }

  // testEmail short-circuits the recipient list to just that address,
  // ignoring whatever was selected - the "envoyer un test à moi-même" mode.
  let emails;
  if (body.testEmail) {
    const email = normalizeEmail(body.testEmail);
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Email de test invalide." }, { status: 400 });
    }
    emails = [email];
  } else {
    emails = (Array.isArray(body.emails) ? body.emails : []).map(normalizeEmail).filter(isValidEmail);
    if (!emails.length) {
      return NextResponse.json({ error: "Sélectionne au moins un destinataire." }, { status: 400 });
    }
    if (emails.length > MAX_RECIPIENTS) {
      return NextResponse.json({ error: `Trop de destinataires (max ${MAX_RECIPIENTS}).` }, { status: 400 });
    }
  }

  const fromHeader = buildFromHeader(body.fromName, body.fromEmail);
  const subject = body.subject || defaultSubject(items.length);

  let sent = 0;
  const failed = [];
  for (const email of emails) {
    const result = await sendDigestEmail({
      resendKey,
      fromHeader,
      to: email,
      subject,
      items,
      customMessage: body.message,
    });
    if (result.ok) sent++;
    else failed.push(email);
  }

  return NextResponse.json({ sent, total: emails.length, failed, itemCount: items.length, test: Boolean(body.testEmail) });
}
