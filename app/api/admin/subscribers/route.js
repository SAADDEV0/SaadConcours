import { NextResponse } from "next/server";
import {
  getSubscribersDetailed,
  getSubscriberHistory,
  addSubscriber,
  removeSubscriber,
  isValidEmail,
  normalizeEmail,
} from "@/lib/subscribers";
import { recordAudit } from "@/lib/auditLog";

// Adresses réelles d'étudiants : protégé sur toutes les méthodes par
// middleware.js (tout /api/admin/*). L'envoi d'emails ne se fait plus depuis
// le site — cette route sert à consulter la liste et à l'exporter vers la
// plateforme d'emailing externe.
export const dynamic = "force-dynamic";

function csvCell(v) {
  const s = String(v ?? "");
  return /[",\n;]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

export async function GET(req) {
  const subscribers = await getSubscribersDetailed();

  if (req.nextUrl.searchParams.get("format") === "csv") {
    const rows = [["email", "date_inscription"]];
    for (const s of subscribers) rows.push([s.email, s.subscribedAt ? new Date(s.subscribedAt).toISOString() : ""]);
    const csv = "﻿" + rows.map((r) => r.map(csvCell).join(",")).join("\n") + "\n";
    return new NextResponse(csv, {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="abonnes-saadconcours-${new Date().toISOString().slice(0, 10)}.csv"`,
        "Cache-Control": "private, no-store",
      },
    });
  }

  const history = await getSubscriberHistory(30);
  if (history.length) history[history.length - 1] = { ...history[history.length - 1], count: subscribers.length };
  return NextResponse.json(
    { count: subscribers.length, history, subscribers },
    { headers: { "Cache-Control": "private, no-store" } }
  );
}

// Ajout manuel (quelqu'un qui a demandé par message à être inscrit).
export async function POST(req) {
  const body = await req.json().catch(() => null);
  const email = normalizeEmail(body?.email);
  if (!isValidEmail(email)) return NextResponse.json({ error: "Email invalide." }, { status: 400 });
  const added = await addSubscriber(email);
  if (!added) return NextResponse.json({ error: "Cet email est déjà abonné." }, { status: 409 });
  recordAudit({ action: "create", resource: "subscribers", id: email, label: email });
  return NextResponse.json({ ok: true, email });
}

// { email } ou { emails: [...] } — suppression unitaire ou groupée.
export async function DELETE(req) {
  const body = await req.json().catch(() => null);
  const emails = (Array.isArray(body?.emails) ? body.emails : [body?.email]).filter(Boolean).slice(0, 500);
  if (!emails.length) return NextResponse.json({ error: "email requis" }, { status: 400 });
  let removed = 0;
  for (const e of emails) if (await removeSubscriber(e)) removed++;
  if (removed) {
    recordAudit({ action: "delete", resource: "subscribers", label: `${removed} abonné${removed > 1 ? "s" : ""} retiré${removed > 1 ? "s" : ""}` });
  }
  return NextResponse.json({ ok: true, removed });
}
