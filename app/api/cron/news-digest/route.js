import { NextResponse } from "next/server";
import { getAllNews, getSettings } from "@/lib/store";
import { getSubscribers } from "@/lib/subscribers";
import { computeUrgentNews, defaultSubject, buildFromHeader, emailConfigured, sendDigestEmail } from "@/lib/emailDigest";

export const dynamic = "force-dynamic";

// Triggered by a scheduled GitHub Actions run (see
// .github/workflows/news-digest.yml), authenticated with a bearer secret
// since this is a server-to-server call, not a browser session - the
// admin cookie middleware.js relies on doesn't apply here. Every failure
// mode (disabled in settings, no Resend key, nothing urgent, no
// subscribers) returns 200 with a `reason` instead of erroring, since
// "nothing to send today" is the expected common case, not a bug.
//
// This path is intentionally "no admin in the loop": always the full
// urgent list, to the full subscriber list. Reviewing/narrowing a specific
// send before it goes out is what the admin's manual composer
// (/api/admin/send-digest) is for - see lib/emailDigest.js for the shared
// template both paths render.
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

  if (!emailConfigured()) {
    return NextResponse.json({ sent: 0, reason: "GMAIL_USER / GMAIL_APP_PASSWORD non configurés." });
  }

  const news = await getAllNews();
  const urgent = computeUrgentNews(news);
  if (!urgent.length) {
    return NextResponse.json({ sent: 0, reason: "Aucun concours ne ferme dans les prochains jours." });
  }

  const subscribers = await getSubscribers();
  if (!subscribers.length) {
    return NextResponse.json({ sent: 0, reason: "Aucun abonné." });
  }

  const fromHeader = buildFromHeader(settings.newsAlertsFromName);
  const subject = settings.newsAlertsSubject || defaultSubject(urgent.length);

  let sent = 0;
  for (const email of subscribers) {
    const result = await sendDigestEmail({
      fromHeader,
      to: email,
      subject,
      items: urgent,
      customMessage: settings.newsAlertsMessage,
    });
    if (result.ok) sent++;
  }

  return NextResponse.json({ sent, total: subscribers.length, urgentCount: urgent.length });
}
