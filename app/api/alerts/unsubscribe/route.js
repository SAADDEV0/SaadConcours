import { NextResponse } from "next/server";
import { removeSubscriber, normalizeEmail } from "@/lib/subscribers";

export const dynamic = "force-dynamic";

// One-click unsubscribe link from the alert email — GET so it works as a
// plain <a href> / email client link, then redirects back to a page that
// confirms it. Public by design (that's the whole point of the link).
export async function GET(req) {
  const email = normalizeEmail(new URL(req.url).searchParams.get("email"));
  if (email) {
    try {
      await removeSubscriber(email);
    } catch (err) {
      console.error("alerts unsubscribe error", err);
    }
  }
  return NextResponse.redirect(new URL("/news?desabonne=1", req.url));
}
