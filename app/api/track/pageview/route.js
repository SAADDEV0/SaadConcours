import { NextResponse } from "next/server";
import { trackPageview } from "@/lib/analytics";

// Public — this is our own replacement for the old third-party visitor
// counter widget. Same trust level: just an increment, no PII collected.
export async function POST() {
  try {
    await trackPageview();
  } catch (err) {
    console.error("track pageview error", err);
  }
  return NextResponse.json({ ok: true });
}
