// Who changed what, and when. The panel had no answer to that question at
// all: content lives in GitHub so a commit history exists for *content*, but
// settings, ad banners, taxonomy and every delete went through KV or a
// force-pushed data file with no trace an admin could read back. A
// back-office without an audit trail can't answer "why did this concours
// disappear on Tuesday", which is exactly when you need it.
//
// Same capped rolling window + KV-or-memory shape as lib/analytics.js, so it
// works locally without KV configured and never grows unbounded in
// production. This is an operational log, not an archive.

const KEY = "audit:log";
const MAX_ENTRIES = 300;

function kvConfigured() {
  return Boolean(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
}

async function getKv() {
  const { kv } = await import("@vercel/kv");
  return kv;
}

// Hung off globalThis rather than held in a module-scope `let`: in dev, Next
// compiles each route into its own chunk and re-instantiates modules on every
// recompile, so a plain module variable gives /api/cours and /api/admin/stats
// two *different* logs — writes would vanish on read. Production uses KV and
// never touches this, but a local fallback that silently loses entries is
// worse than no fallback, because it looks like the feature is broken.
const MEM = (globalThis.__scAuditLog ||= { entries: [] });

// Actions are a closed vocabulary so the UI can label and colour them
// without parsing free text.
export const AUDIT_ACTIONS = {
  create: { label: "Création", tone: "green" },
  update: { label: "Modification", tone: "accent" },
  delete: { label: "Suppression", tone: "red" },
  import: { label: "Import groupé", tone: "violet" },
  settings: { label: "Réglages", tone: "amber" },
  send: { label: "Envoi", tone: "accent" },
  login: { label: "Connexion", tone: "accent" },
  logout: { label: "Déconnexion", tone: "faint" },
};

export const AUDIT_RESOURCES = {
  concours: "Concours",
  cours: "Cours",
  quiz: "Évaluation",
  news: "Concours ouvert",
  blog: "Article",
  settings: "Réglages",
  taxonomy: "Filières",
  subscribers: "Abonnés",
  digest: "Alerte email",
  session: "Session",
};

// Never throws and never blocks the caller's own work: an audit write that
// fails must not turn a successful save into a 500. Callers may await it or
// not — failures are swallowed either way.
export async function recordAudit({ action, resource, id, label, detail, ip }) {
  try {
    const entry = {
      at: new Date().toISOString(),
      action: action || "update",
      resource: resource || "",
      id: id ? String(id).slice(0, 120) : "",
      label: label ? String(label).slice(0, 200) : "",
      detail: detail ? String(detail).slice(0, 300) : "",
      ip: ip || "",
    };
    const json = JSON.stringify(entry);
    if (kvConfigured()) {
      const kv = await getKv();
      await kv.lpush(KEY, json);
      await kv.ltrim(KEY, 0, MAX_ENTRIES - 1);
      return;
    }
    MEM.entries = [json, ...MEM.entries].slice(0, MAX_ENTRIES);
  } catch (err) {
    console.error("audit log write failed", err);
  }
}

// Each resource names itself differently (etablissement / title / titre /
// module), so the log would otherwise be a column of opaque ids. Falls back
// to the id when nothing readable is present.
export function auditLabel(resource, item) {
  if (!item || typeof item !== "object") return "";
  switch (resource) {
    case "concours":
      return [item.etablissement, item.ville, item.annee && `(${item.annee})`].filter(Boolean).join(" — ");
    case "cours":
    case "quiz":
      return item.title || item.module || "";
    case "news":
      return item.titre || "";
    case "blog":
      return item.title || "";
    default:
      return item.title || item.titre || item.name || "";
  }
}

export async function getAuditLog(n = 40) {
  try {
    if (kvConfigured()) {
      const kv = await getKv();
      const rows = await kv.lrange(KEY, 0, n - 1);
      return rows.map((r) => (typeof r === "string" ? JSON.parse(r) : r));
    }
    return MEM.entries.slice(0, n).map((r) => JSON.parse(r));
  } catch (err) {
    console.error("audit log read failed", err);
    return [];
  }
}
