import { handleKvBridge } from "@/lib/kvBridge";

export const dynamic = "force-dynamic";

// Plusieurs commandes en un seul lot D1 : voir lib/kvBridge.js.
export async function POST(req) {
  return handleKvBridge(req, { pipeline: true });
}
