import { NextResponse } from "next/server";
import { getAllNews } from "@/lib/store";
import { buildEmailHtml, defaultSubject } from "@/lib/emailDigest";

// Renders the exact same template send-digest/news-digest would send, for
// the admin composer's "Aperçu" button — no email is sent here.
export const dynamic = "force-dynamic";

export async function POST(req) {
  const body = await req.json().catch(() => null);
  const newsIds = Array.isArray(body?.newsIds) ? body.newsIds : [];

  const news = await getAllNews();
  const items = news.filter((i) => newsIds.includes(i.id));

  const subject = body?.subject || defaultSubject(items.length);
  const html = buildEmailHtml(items, "apercu@example.com", body?.message);

  return NextResponse.json({ html, subject, itemCount: items.length });
}
