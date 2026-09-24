import { NextResponse } from "next/server";
import { recentCommits, recentDeploys, gitConfigured } from "@/lib/githubGit";
import { getAuditLog, AUDIT_ACTIONS, AUDIT_RESOURCES } from "@/lib/auditLog";

export const dynamic = "force-dynamic";

// ?only=deploys → uniquement l'état de mise en ligne (interrogé par la barre
// du haut toutes les 20 s pendant un déploiement, donc le plus léger possible).
export async function GET(req) {
  const only = req.nextUrl.searchParams.get("only");

  const deploys = await recentDeploys(only === "deploys" ? 3 : 8).catch((err) => ({ error: err.message }));
  if (only === "deploys") {
    return NextResponse.json({ deploys }, { headers: { "Cache-Control": "private, no-store" } });
  }

  const [commits, audit] = await Promise.all([
    recentCommits(40).catch((err) => ({ error: err.message })),
    getAuditLog(120),
  ]);
  return NextResponse.json(
    {
      gitConfigured: gitConfigured(),
      deploys,
      commits,
      audit,
      vocabulary: { actions: AUDIT_ACTIONS, resources: AUDIT_RESOURCES },
    },
    { headers: { "Cache-Control": "private, no-store" } }
  );
}
