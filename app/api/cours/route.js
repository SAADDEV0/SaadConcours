import { NextResponse } from "next/server";
import { getAllCours, addCours } from "@/lib/store";

export async function GET() {
  const list = await getAllCours();
  return NextResponse.json(list);
}

// Write access is gated by middleware.js (admin cookie required for non-GET).
export async function POST(req) {
  const body = await req.json();
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Corps invalide" }, { status: 400 });
  }
  const created = await addCours(body);
  return NextResponse.json(created, { status: 201 });
}
