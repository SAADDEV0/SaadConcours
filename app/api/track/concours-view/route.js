import { NextResponse } from "next/server";
import { trackConcoursView } from "@/lib/analytics";

export async function POST(req) {
  try {
    const { id } = await req.json().catch(() => ({}));
    await trackConcoursView(id);
  } catch (err) {
    console.error("track concours-view error", err);
  }
  return NextResponse.json({ ok: true });
}
