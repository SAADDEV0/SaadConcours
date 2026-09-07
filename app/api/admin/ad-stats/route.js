import { NextResponse } from "next/server";
import { getAdStats } from "@/lib/analytics";

// Affichages/clics par bannière partenaire, pour la page
// /admin/reglages/partenaires. Auth requise sur toutes les méthodes
// (middleware.js) — ce sont des chiffres commerciaux, pas des données de site.
export const dynamic = "force-dynamic";

export async function GET() {
  const stats = await getAdStats();
  return NextResponse.json(stats);
}
