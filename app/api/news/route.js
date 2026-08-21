import { NextResponse } from "next/server";
import { getAllNews, addNews } from "@/lib/store";

export async function GET() {
  const list = await getAllNews();
  return NextResponse.json(list);
}

// Write access is gated by middleware.js (admin cookie required for non-GET).
// Manually-added news are stored as a KV overlay on top of the file that
// scripts/fetch_almaster.py keeps updating automatically — see lib/store.js.
export async function POST(req) {
  const body = await req.json();
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Corps invalide" }, { status: 400 });
  }
  const created = await addNews(body);
  return NextResponse.json(created, { status: 201 });
}
