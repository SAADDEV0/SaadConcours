import { NextResponse } from "next/server";
import { getSettings } from "@/lib/store";

// Réglages complets, champs privés compris (contacts et notes des annonceurs
// partenaires), que /api/settings retire de sa réponse publique. Auth requise
// sur toutes les méthodes via middleware.js. Les écritures passent toujours
// par PUT /api/settings.
export const dynamic = "force-dynamic";

export async function GET() {
  const settings = await getSettings();
  return NextResponse.json(settings);
}
