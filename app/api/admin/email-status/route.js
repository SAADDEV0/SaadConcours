import { NextResponse } from "next/server";
import { emailConfigured } from "@/lib/emailDigest";

// Just a boolean - never exposes the actual GMAIL_USER/GMAIL_APP_PASSWORD
// values. Lets the admin Email panel warn "sending won't work" instead of
// silently failing the first time someone tries to send.
export async function GET() {
  return NextResponse.json({ configured: emailConfigured() });
}
