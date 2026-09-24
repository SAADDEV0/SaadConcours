import { NextResponse } from "next/server";
import { commitChanges, ConflictError } from "@/lib/githubGit";
import { recordAudit, AUDIT_ACTIONS, AUDIT_RESOURCES } from "@/lib/auditLog";
import { pushTrash } from "@/lib/trash";

export const dynamic = "force-dynamic";

// POST {
//   message,                       message du commit
//   changes: [{ path, sha }],      blobs créés via /api/admin/repo/blob (sha null = supprimer)
//   expect: { [path]: sha },       hash lu avant modification (contrôle de concurrence)
//   audit: { action, resource, id, label, detail },
//   trash: [{ collection, item }], éléments supprimés, gardés pour restauration
// }
// Petit JSON uniquement : les contenus volumineux sont déjà dans les blobs.
export async function POST(req) {
  const body = await req.json().catch(() => null);
  if (!body || !Array.isArray(body.changes)) {
    return NextResponse.json({ error: "Corps invalide." }, { status: 400 });
  }
  try {
    const result = await commitChanges({ changes: body.changes, expect: body.expect || {}, message: body.message });

    const a = body.audit;
    if (a && AUDIT_ACTIONS[a.action] && (AUDIT_RESOURCES[a.resource] || a.resource === "images")) {
      await recordAudit({ action: a.action, resource: a.resource, id: a.id, label: a.label, detail: a.detail });
    }
    if (Array.isArray(body.trash) && body.trash.length) await pushTrash(body.trash);

    return NextResponse.json(result);
  } catch (err) {
    if (err instanceof ConflictError) {
      return NextResponse.json({ error: err.message, conflict: err.paths }, { status: 409 });
    }
    console.error("repo commit", err);
    return NextResponse.json({ error: "Enregistrement impossible : " + err.message }, { status: err.status && err.status < 500 ? err.status : 502 });
  }
}
