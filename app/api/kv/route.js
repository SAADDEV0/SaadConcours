import { handleKvBridge } from "@/lib/kvBridge";

export const dynamic = "force-dynamic";

// Même protocole que l'API REST d'Upstash, sur la base D1 : voir lib/kvBridge.js.
export async function POST(req) {
  return handleKvBridge(req, { pipeline: false });
}
