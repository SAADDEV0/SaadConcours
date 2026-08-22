import { NextResponse } from "next/server";
import { trackPdfDownload } from "@/lib/analytics";

const ALLOWED_KINDS = ["concours", "cours", "evaluation"];

// Public on purpose — this only increments a counter, same trust level as
// the existing public visitor-counter widget. Never fails the caller's
// download: a tracking error shouldn't be visible to a user just trying to
// get their PDF.
export async function POST(req) {
  try {
    const { kind, id } = await req.json().catch(() => ({}));
    if (!ALLOWED_KINDS.includes(kind)) {
      return NextResponse.json({ error: "kind invalide" }, { status: 400 });
    }
    await trackPdfDownload(kind, id);
  } catch (err) {
    console.error("track pdf-download error", err);
  }
  return NextResponse.json({ ok: true });
}
