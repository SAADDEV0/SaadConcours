// Lightweight event counters backed by Vercel KV (Upstash Redis under the
// hood — the project already has a free store connected, see
// KV_REST_API_URL/KV_REST_API_TOKEN in Vercel env vars). Unlike GitHub-as-DB
// for content, these are high-frequency writes (every PDF download, every
// concours open) — committing each one to the repo would spam the commit
// history, so they live in KV instead. Falls back to an in-memory store
// when KV isn't configured (local dev without the env vars), same pattern
// as lib/store.js's GITHUB_TOKEN fallback — the admin stats panel still
// works locally, just without persistence across restarts.

function kvConfigured() {
  return Boolean(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
}

let memory = null;
function mem() {
  if (!memory) {
    memory = { counters: new Map(), sortedSets: new Map() };
  }
  return memory;
}

async function getKv() {
  const { kv } = await import("@vercel/kv");
  return kv;
}

function todayKey() {
  return new Date().toISOString().slice(0, 10); // YYYY-MM-DD
}

async function incr(key) {
  if (kvConfigured()) {
    const kv = await getKv();
    await kv.incr(key);
    return;
  }
  const m = mem();
  m.counters.set(key, (m.counters.get(key) || 0) + 1);
}

async function getCount(key) {
  if (kvConfigured()) {
    const kv = await getKv();
    return (await kv.get(key)) || 0;
  }
  return mem().counters.get(key) || 0;
}

async function zincr(key, member) {
  if (kvConfigured()) {
    const kv = await getKv();
    await kv.zincrby(key, 1, member);
    return;
  }
  const m = mem();
  if (!m.sortedSets.has(key)) m.sortedSets.set(key, new Map());
  const set = m.sortedSets.get(key);
  set.set(member, (set.get(member) || 0) + 1);
}

// Returns [{ member, score }] sorted by score desc, top `n`.
async function zTop(key, n) {
  if (kvConfigured()) {
    const kv = await getKv();
    // withScores flattens to [member, score, member, score, ...]
    const flat = await kv.zrange(key, 0, n - 1, { rev: true, withScores: true });
    const out = [];
    for (let i = 0; i < flat.length; i += 2) {
      out.push({ member: flat[i], score: Number(flat[i + 1]) });
    }
    return out;
  }
  const set = mem().sortedSets.get(key);
  if (!set) return [];
  return [...set.entries()]
    .map(([member, score]) => ({ member, score }))
    .sort((a, b) => b.score - a.score)
    .slice(0, n);
}

/* ------------------------------- Public API ------------------------------- */

export async function trackPdfDownload(kind, id) {
  const day = todayKey();
  await Promise.all([
    incr(`analytics:pdf:total`),
    incr(`analytics:pdf:day:${day}`),
    incr(`analytics:pdf:kind:${kind}`),
    id ? zincr(`analytics:pdf:byitem`, `${kind}:${id}`) : Promise.resolve(),
  ]);
}

export async function trackConcoursView(id) {
  if (!id) return;
  await zincr(`analytics:view:concours`, id);
}

export async function getStats() {
  const day = todayKey();
  const last7 = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(Date.now() - i * 86400000).toISOString().slice(0, 10);
    last7.push(d);
  }

  const [pdfTotal, pdfToday, pdfByKind, pdfByItem, topConcours, week] = await Promise.all([
    getCount(`analytics:pdf:total`),
    getCount(`analytics:pdf:day:${day}`),
    Promise.all(["concours", "cours", "evaluation"].map(async (k) => [k, await getCount(`analytics:pdf:kind:${k}`)])),
    zTop(`analytics:pdf:byitem`, 10),
    zTop(`analytics:view:concours`, 10),
    Promise.all(last7.map(async (d) => [d, await getCount(`analytics:pdf:day:${d}`)])),
  ]);

  return {
    pdfTotal,
    pdfToday,
    pdfByKind: Object.fromEntries(pdfByKind),
    pdfByItem,
    topConcours,
    pdfLast7Days: week,
  };
}
