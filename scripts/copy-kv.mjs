// One-shot copy of every key from the old Redis store (the Vercel-provisioned
// Upstash database) into a new one owned directly on upstash.com, so the
// admin stats, subscribers and audit log survive closing the Vercel account.
//
// Usage: put the four values in .env.migrate (gitignored by `.env*`):
//   OLD_KV_URL=https://…upstash.io
//   OLD_KV_TOKEN=…
//   NEW_KV_URL=https://…upstash.io
//   NEW_KV_TOKEN=…
// then:
//   node --env-file=.env.migrate scripts/copy-kv.mjs            # dry run: counts keys by type
//   node --env-file=.env.migrate scripts/copy-kv.mjs --write    # actually copies
//
// Read-only on the old store. Copies by type (string, list, set, zset, hash)
// with raw values — no JSON round-trip — and keeps each key's TTL, so
// rate-limit keys expire on the same schedule as before.

import { Redis } from "@upstash/redis";

const { OLD_KV_URL, OLD_KV_TOKEN, NEW_KV_URL, NEW_KV_TOKEN } = process.env;
if (!OLD_KV_URL || !OLD_KV_TOKEN || !NEW_KV_URL || !NEW_KV_TOKEN) {
  console.error("OLD_KV_URL/OLD_KV_TOKEN et NEW_KV_URL/NEW_KV_TOKEN sont requis.");
  process.exit(1);
}

const write = process.argv.includes("--write");
const opts = { automaticDeserialization: false };
const src = new Redis({ url: OLD_KV_URL, token: OLD_KV_TOKEN, ...opts });
const dst = new Redis({ url: NEW_KV_URL, token: NEW_KV_TOKEN, ...opts });

const byType = {};
let copied = 0;
let cursor = "0";
do {
  const [next, keys] = await src.scan(cursor, { count: 500 });
  cursor = String(next);
  for (const key of keys) {
    const type = await src.type(key);
    byType[type] = (byType[type] || 0) + 1;
    if (!write) continue;

    await dst.del(key);
    if (type === "string") {
      await dst.set(key, await src.get(key));
    } else if (type === "list") {
      const items = await src.lrange(key, 0, -1);
      if (items.length) await dst.rpush(key, ...items);
    } else if (type === "set") {
      const members = await src.smembers(key);
      if (members.length) await dst.sadd(key, ...members);
    } else if (type === "zset") {
      const flat = await src.zrange(key, 0, -1, { withScores: true });
      const pairs = [];
      for (let i = 0; i < flat.length; i += 2) pairs.push({ member: flat[i], score: Number(flat[i + 1]) });
      if (pairs.length) await dst.zadd(key, ...pairs);
    } else if (type === "hash") {
      const h = await src.hgetall(key);
      if (h && Object.keys(h).length) await dst.hset(key, h);
    } else {
      console.warn(`type non géré, ignoré : ${key} (${type})`);
      continue;
    }
    const ttl = await src.pttl(key);
    if (ttl > 0) await dst.pexpire(key, ttl);
    copied++;
  }
} while (cursor !== "0");

console.log("Clés par type :", byType);
console.log(write ? `${copied} clés copiées.` : "Dry run — relancer avec --write pour copier.");
