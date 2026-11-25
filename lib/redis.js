// The one KV client every stats/state module shares (analytics, subscribers,
// audit log, trash, login rate limit, session revocation, social plan).
//
// Since 2026-11-25 it is Cloudflare D1, not Upstash: the Upstash free tier
// (500K commands/month) ran out on 2026-11-22, D1's free tier is per day and
// counts rows (100K written, 5M read). lib/kvD1.js speaks the same dialect as
// the @upstash/redis client these modules were written against, so none of
// them changed. Details and limits in lib/kvD1.js.
//
// The binding: wrangler.jsonc gives the entry Worker a D1 database bound as
// KV_DB, and worker/index.js hands it to globalThis.__scKvDb on each request
// (lib/ reads its config from process.env, which only carries strings).
// Without it — `next dev`, the Next.js Worker, a Node script — kvConfigured()
// is false and every module falls back to its in-memory store, as before.

let client = null;

function db() {
  return globalThis.__scKvDb || null;
}

export function kvConfigured() {
  return Boolean(db());
}

export async function getKv() {
  const current = db();
  if (!current) throw new Error("Base KV non configurée (liaison D1 KV_DB absente).");
  if (!client || client.engine.db !== current) {
    const { createClient } = await import("./kvD1.js");
    client = createClient(current);
  }
  return client;
}
