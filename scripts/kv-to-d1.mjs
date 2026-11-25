// Copie l'ancienne base Upstash dans la base D1 (lib/kvD1.js), en FUSION :
// le site écrit déjà dans D1 depuis la bascule du 2026-11-25, donc rien n'y
// est écrasé.
//   - compteurs analytics:* (chaînes numériques, ensembles triés) : additionnés
//     (INCRBY / ZADD INCR) — une journée à cheval sur la bascule reste juste ;
//   - autres chaînes et ensembles triés : copiés seulement s'ils manquent
//     (SET NX / ZADD NX) — la file des réseaux sociaux ou les styles déjà
//     refaits dans D1 gagnent ;
//   - ensembles : union (SADD) ; hashes : champs manquants seulement (HSETNX) ;
//   - listes (journaux, corbeille) : ajoutées APRÈS les entrées de D1, qui
//     sont plus récentes (RPUSH) ;
//   - durée de vie : reprise si la clé n'en a pas déjà une (EXPIRE … NX).
// Ignorées : ratelimit:*, login:fail:* (fenêtres de quelques minutes).
//
// REPRISE SANS DOUBLON
//   Chaque clé copiée est notée dans l'ensemble `migration:upstash:done`, dans
//   le MÊME lot D1 que ses données (un lot = une transaction) : relancer le
//   script ne recopie jamais une clé, et un lot qui échoue ne laisse rien.
//
// QUOTA
//   D1 gratuit = 100 000 lignes écrites par jour, pour le site ET la copie.
//   --max-rows (40 000 par défaut) arrête la copie avant : le reste part au
//   prochain lancement, le lendemain si besoin. Lire Upstash coûte ~3
//   commandes par clé sur son quota mensuel (500 000) : il doit être
//   disponible (renouvelé le 1er du mois, ou passé en pay-as-you-go).
//
// LANCEMENT : normalement par GitHub Actions (.github/workflows/kv-migrate.yml,
// automatique du 1er au 3 décembre, ou à la main), qui a déjà les anciens
// secrets Upstash et s'authentifie sur /api/kv par OIDC, sans secret.
// En local, il faut en plus le secret KV_BRIDGE_TOKEN du Worker :
//   UPSTASH_URL=https://…upstash.io  UPSTASH_TOKEN=…        (anciens secrets KV_REST_API_*)
//   D1_BRIDGE_URL=https://www.saadconcours.space/api/kv  D1_BRIDGE_TOKEN=…
//
//   node --env-file=.env.migrate scripts/kv-to-d1.mjs            # simulation : compte clés et lignes
//   node --env-file=.env.migrate scripts/kv-to-d1.mjs --write    # copie
//   … --write --max-rows 80000                                   # budget de lignes de ce lancement

import { kvBridgeToken } from "./kvAuth.mjs";

const { UPSTASH_URL, UPSTASH_TOKEN, D1_BRIDGE_URL, D1_BRIDGE_TOKEN } = process.env;
const inActions = Boolean(process.env.ACTIONS_ID_TOKEN_REQUEST_URL);
if (!UPSTASH_URL || !UPSTASH_TOKEN || !D1_BRIDGE_URL || (!D1_BRIDGE_TOKEN && !inActions)) {
  console.error("UPSTASH_URL / UPSTASH_TOKEN, D1_BRIDGE_URL et (hors GitHub Actions) D1_BRIDGE_TOKEN sont requis.");
  process.exit(1);
}

const args = process.argv.slice(2);
const write = args.includes("--write");
const maxRowsArg = args.indexOf("--max-rows");
const MAX_ROWS = maxRowsArg >= 0 ? Number(args[maxRowsArg + 1]) : 40000;

const DONE = "migration:upstash:done";
const SKIP = [/^ratelimit:/, /^login:fail:/, /^migration:/];
const ADDITIVE = /^analytics:/;
const CHUNK = 200; // éléments par commande (SADD, ZADD, RPUSH…)
const PIPE = 150; // commandes par lot envoyé au Worker (10 ms de CPU en gratuit)

async function rest(url, token, body) {
  for (let attempt = 1; ; attempt++) {
    const bearer = typeof token === "function" ? await token() : token;
    const res = await fetch(url, { method: "POST", headers: { Authorization: `Bearer ${bearer}` }, body: JSON.stringify(body) });
    const json = await res.json().catch(() => null);
    if (res.ok && json) return json;
    if (attempt >= 3) throw new Error(`${url} : HTTP ${res.status} ${JSON.stringify(json)?.slice(0, 300)}`);
    await new Promise((r) => setTimeout(r, 1000 * attempt));
  }
}

const upstash = async (cmds) => {
  const out = await rest(`${UPSTASH_URL.replace(/\/$/, "")}/pipeline`, UPSTASH_TOKEN, cmds);
  for (const r of out) if (r.error) throw new Error(`Upstash : ${r.error}`);
  return out.map((r) => r.result);
};
const d1 = async (cmds) => {
  const out = await rest(`${D1_BRIDGE_URL.replace(/\/$/, "")}/pipeline`, () => kvBridgeToken(D1_BRIDGE_TOKEN), cmds);
  if (!Array.isArray(out)) throw new Error(`D1 : ${JSON.stringify(out).slice(0, 300)}`);
  for (const r of out) if (r.error) throw new Error(`D1 : ${r.error}`);
  return out.map((r) => r.result);
};

const chunks = (arr, n) => Array.from({ length: Math.ceil(arr.length / n) }, (_, i) => arr.slice(i * n, i * n + n));
const pairs = (flat) => {
  const out = [];
  for (let i = 0; i < (flat || []).length; i += 2) out.push([flat[i], flat[i + 1]]);
  return out;
};

// Commandes D1 pour une clé, et le nombre de lignes qu'elles écriront au plus.
function plan(key, type, value, pttl) {
  const cmds = [];
  let rows = 0;
  if (type === "string") {
    if (ADDITIVE.test(key) && /^-?\d+$/.test(value)) cmds.push(["INCRBY", key, value]);
    else cmds.push(["SET", key, value, "NX"]);
    rows = 1;
  } else if (type === "hash") {
    // HSETNX et ZADD INCR à plusieurs paires : extensions de lib/kvD1.js,
    // pour qu'une grosse clé tienne en quelques commandes (10 ms de CPU).
    const fields = pairs(value);
    for (const part of chunks(fields, CHUNK)) cmds.push(["HSETNX", key, ...part.flat()]);
    rows = fields.length;
  } else if (type === "set") {
    for (const part of chunks(value || [], CHUNK)) cmds.push(["SADD", key, ...part]);
    rows = (value || []).length;
  } else if (type === "zset") {
    const members = pairs(value);
    const mode = ADDITIVE.test(key) ? "INCR" : "NX";
    for (const part of chunks(members, CHUNK)) cmds.push(["ZADD", key, mode, ...part.flatMap(([m, s]) => [s, m])]);
    rows = members.length;
  } else if (type === "list") {
    for (const part of chunks(value || [], CHUNK)) cmds.push(["RPUSH", key, ...part]);
    rows = (value || []).length;
  } else {
    return null;
  }
  if (pttl > 0) {
    cmds.push(["PEXPIRE", key, String(pttl), "NX"]);
    rows++;
  }
  cmds.push(["SADD", DONE, key]);
  return { cmds, rows: rows + 1 };
}

const READ = { string: (k) => ["GET", k], hash: (k) => ["HGETALL", k], set: (k) => ["SMEMBERS", k], zset: (k) => ["ZRANGE", k, "0", "-1", "WITHSCORES"], list: (k) => ["LRANGE", k, "0", "-1"] };

const done = new Set(write ? (await d1([["SMEMBERS", DONE]]))[0] || [] : []);
if (done.size) console.log(`${done.size} clés déjà copiées lors d'un lancement précédent : ignorées.`);

const stats = { keys: 0, skipped: 0, already: 0, copied: 0, rows: 0, byType: {} };
let pending = [];
let budgetHit = false;

async function send(force = false) {
  while (pending.length >= PIPE || (force && pending.length)) {
    // Ne jamais couper une clé entre deux lots : son marqueur DONE doit
    // partir avec ses données.
    let cut = Math.min(PIPE, pending.length);
    while (cut < pending.length && !(pending[cut - 1][0] === "SADD" && pending[cut - 1][1] === DONE)) cut++;
    await d1(pending.slice(0, cut));
    pending = pending.slice(cut);
  }
}

let cursor = "0";
outer: do {
  const [[next, keys]] = await upstash([["SCAN", cursor, "COUNT", "500"]]);
  cursor = String(next);
  const todo = [];
  for (const key of keys) {
    stats.keys++;
    if (SKIP.some((re) => re.test(key))) stats.skipped++;
    else if (done.has(key)) stats.already++;
    else todo.push(key);
  }
  if (!todo.length) continue;
  const types = await upstash(todo.map((k) => ["TYPE", k]));
  for (const part of chunks(todo.map((k, i) => [k, types[i]]), 100)) {
    const reads = await upstash(part.flatMap(([k, t]) => (READ[t] ? [READ[t](k), ["PTTL", k]] : [["PTTL", k], ["PTTL", k]])));
    for (const [i, [key, type]] of part.entries()) {
      const p = plan(key, type, reads[2 * i], Number(reads[2 * i + 1]));
      if (!p) {
        console.warn(`type non géré, ignoré : ${key} (${type})`);
        continue;
      }
      if (write && stats.rows + p.rows > MAX_ROWS && stats.copied) {
        budgetHit = true;
        break outer;
      }
      stats.byType[type] = (stats.byType[type] || 0) + 1;
      stats.rows += p.rows;
      stats.copied++;
      if (write) {
        pending.push(...p.cmds);
        await send();
      }
    }
  }
} while (cursor !== "0");

if (write) await send(true);

console.log("Clés par type :", stats.byType);
console.log(`${stats.keys} clés lues dans Upstash, ${stats.skipped} éphémères ignorées, ${stats.already} déjà copiées.`);
console.log(`${write ? "Copiées" : "À copier"} : ${stats.copied} clés, ~${stats.rows} lignes D1 écrites au plus.`);
if (budgetHit) console.log(`Budget de ${MAX_ROWS} lignes atteint : relancer (demain si le quota D1 du jour est entamé) pour la suite.`);
if (!write) console.log("Simulation — relancer avec --write pour copier.");
