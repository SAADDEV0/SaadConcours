// Redis, the parts this site uses, on top of Cloudflare D1 (SQLite).
//
// WHY
//   Upstash's free tier meters every command (500K/month) and ran dry on
//   2026-11-22 after 22 days. D1's free tier meters rows instead, per DAY
//   (5M rows read, 100K rows written, reset at 00:00 UTC), and lives in the
//   same Cloudflare account as the Worker — no outside service, no HTTP hop.
//   lib/analytics.js, subscribers.js, auditLog.js… were written against the
//   @upstash/redis client; this file speaks the same dialect so not one of
//   them had to change.
//
// HOW
//   - One table per Redis type, keyed (key, …) WITHOUT ROWID: every write is
//     exactly one row written, no secondary index. Rows written is the scarce
//     resource (100K/day); reads are 50× more plentiful, so sorted sets have
//     no score index and ZRANGE sorts the members of one key.
//   - TTLs live in kv_ttl. Reads ignore expired keys; a write first clears
//     its key if expired (INCR on an expired counter starts again at 1, as in
//     Redis); a periodic sweep removes the rest.
//   - Auto-pipelining: every command issued in the same tick (Promise.all,
//     parallel helpers) goes out as ONE db.batch() — see KvD1.exec. D1 counts a batch as a
//     single query against the free plan's 50-queries-per-invocation limit,
//     and a batch is one round trip.
//   - Two layers: exec() takes raw Redis commands (["ZINCRBY", key, "1", m])
//     and returns raw Redis replies (strings, integers, arrays) — that is what
//     the Upstash-compatible bridge (app/api/kv) hands to GitHub Actions. The
//     client methods on top (get, zrange, hset…) mirror @upstash/redis:
//     values are JSON-serialized on the way in and parsed on the way out.
//
// LIMITS (deliberate — nothing in the code base needs more)
//   - LPUSH/RPUSH/LTRIM keep a list's sequence numbers contiguous, LREM and
//     LINSERT are not implemented.
//   - ZRANGE/LRANGE/LTRIM take start >= 0 and stop >= 0 or -1.
//   - A command error fails the whole batch it was pipelined with.

const TABLES = ["kv_str", "kv_hash", "kv_set", "kv_zset", "kv_list"];
const TYPE_NAMES = ["string", "hash", "set", "zset", "list"];

export const SCHEMA = [
  "CREATE TABLE IF NOT EXISTS kv_str (key TEXT PRIMARY KEY, value TEXT NOT NULL) WITHOUT ROWID",
  "CREATE TABLE IF NOT EXISTS kv_hash (key TEXT NOT NULL, field TEXT NOT NULL, value TEXT NOT NULL, PRIMARY KEY (key, field)) WITHOUT ROWID",
  "CREATE TABLE IF NOT EXISTS kv_set (key TEXT NOT NULL, member TEXT NOT NULL, PRIMARY KEY (key, member)) WITHOUT ROWID",
  "CREATE TABLE IF NOT EXISTS kv_zset (key TEXT NOT NULL, member TEXT NOT NULL, score REAL NOT NULL, PRIMARY KEY (key, member)) WITHOUT ROWID",
  "CREATE TABLE IF NOT EXISTS kv_list (key TEXT NOT NULL, seq INTEGER NOT NULL, value TEXT NOT NULL, PRIMARY KEY (key, seq)) WITHOUT ROWID",
  "CREATE TABLE IF NOT EXISTS kv_ttl (key TEXT PRIMARY KEY, exp INTEGER NOT NULL) WITHOUT ROWID",
];

// One flush in SWEEP_ODDS also deletes every expired key (rate-limit
// windows, 35-day visitor logs…), at most once per isolate per SWEEP_MIN_MS.
const SWEEP_ODDS = 200;
const SWEEP_MIN_MS = 10 * 60 * 1000;

// Microtask hops a flush waits for, to gather commands issued in parallel.
const FLUSH_HOPS = 12;

/* ------------------------------ SQL helpers ------------------------------ */

// `now`, LIMIT/OFFSET and score bounds are numbers we computed or validated
// (Date.now(), int(), num()), never raw input, so they are inlined rather
// than bound: SQLite wants integers in LIMIT, and a JS number may reach it
// bound as REAL.
const alive = (alias, now) => `NOT EXISTS (SELECT 1 FROM kv_ttl t WHERE t.key = ${alias}.key AND t.exp <= ${now})`;
const keyAlive = (now) => `NOT EXISTS (SELECT 1 FROM kv_ttl t WHERE t.key = ?1 AND t.exp <= ${now})`;
const keyExists = (now) => `((${TABLES.map((t) => `EXISTS (SELECT 1 FROM ${t} WHERE key = ?1)`).join(" OR ")}) AND ${keyAlive(now)})`;

// Before a write: an expired key is gone in Redis, so it must not be
// incremented or extended here either.
function clearIfExpired(table, key, now) {
  return [
    { sql: `DELETE FROM ${table} WHERE key = ?1 AND EXISTS (SELECT 1 FROM kv_ttl WHERE key = ?1 AND exp <= ${now})`, params: [key] },
    { sql: `DELETE FROM kv_ttl WHERE key = ?1 AND exp <= ${now}`, params: [key] },
  ];
}

function sweepStatements(now) {
  return [
    ...TABLES.map((t) => ({ sql: `DELETE FROM ${t} WHERE key IN (SELECT key FROM kv_ttl WHERE exp <= ${now})`, params: [] })),
    { sql: `DELETE FROM kv_ttl WHERE exp <= ${now}`, params: [] },
  ];
}

class CommandError extends Error {}

const str = (v) => (v === undefined || v === null ? "" : String(v));
const int = (v, what = "value") => {
  const n = Number(v);
  if (!Number.isInteger(n)) throw new CommandError(`ERR ${what} is not an integer or out of range`);
  return n;
};
const num = (v) => {
  const n = Number(v);
  if (Number.isNaN(n)) throw new CommandError("ERR value is not a valid float");
  return n;
};
// Redis replies scores as strings ("3", "1.5").
const fmtScore = (s) => (s === null || s === undefined ? null : String(Number(s)));
const uniq = (arr) => [...new Set(arr)];

// "-inf", "+inf", "5", "(5" (exclusive) → SQL condition on `score`.
function scoreBound(raw, side) {
  const s = str(raw).toLowerCase();
  if (s === "-inf") return side === "min" ? "1" : "0";
  if (s === "+inf" || s === "inf") return side === "max" ? "1" : "0";
  const exclusive = s.startsWith("(");
  const value = num(exclusive ? s.slice(1) : s);
  if (!Number.isFinite(value)) throw new CommandError("ERR min or max is not a float");
  const op = side === "min" ? (exclusive ? ">" : ">=") : exclusive ? "<" : "<=";
  return `score ${op} ${value}`;
}

// start/stop of ZRANGE/LRANGE → { limit, offset }, or null for an empty range.
function rangeWindow(startRaw, stopRaw) {
  const start = int(startRaw, "start");
  const stop = int(stopRaw, "stop");
  if (start < 0 || stop < -1) throw new CommandError("ERR negative indexes other than -1 are not supported");
  if (stop === -1) return { limit: -1, offset: start };
  if (stop < start) return null;
  return { limit: stop - start + 1, offset: start };
}

const flatPairs = (rows, a, b, fb = (x) => x) => rows.flatMap((r) => [r[a], fb(r[b])]);

/* ------------------------------- Commands -------------------------------- */
// Each compiler returns { stmts: [{ sql, params }], reply(results) }, where
// `results` holds the row arrays of exactly those statements, in order.

const COMMANDS = {
  PING: () => ({ stmts: [{ sql: "SELECT 1 AS ok", params: [] }], reply: () => "PONG" }),

  /* ---- strings ---- */
  GET: ([key], now) => ({
    stmts: [{ sql: `SELECT value FROM kv_str s WHERE key = ?1 AND ${alive("s", now)}`, params: [str(key)] }],
    reply: ([rows]) => rows[0]?.value ?? null,
  }),

  MGET: (keys, now) => ({
    stmts: [
      {
        sql: `SELECT s.value AS value FROM json_each(?1) j LEFT JOIN kv_str s ON s.key = j.value AND ${alive("s", now)} ORDER BY j.key`,
        params: [JSON.stringify(keys.map(str))],
      },
    ],
    reply: ([rows]) => rows.map((r) => r.value ?? null),
  }),

  SET: ([key, value, ...opts], now) => {
    key = str(key);
    let nx = false;
    let ttlMs = null;
    for (let i = 0; i < opts.length; i++) {
      const o = str(opts[i]).toUpperCase();
      if (o === "NX") nx = true;
      else if (o === "EX") ttlMs = int(opts[++i], "EX") * 1000;
      else if (o === "PX") ttlMs = int(opts[++i], "PX");
      else throw new CommandError(`ERR SET option ${o} is not supported`);
    }
    if (nx && ttlMs !== null) throw new CommandError("ERR SET NX with a TTL is not supported");
    const stmts = clearIfExpired("kv_str", key, now);
    if (nx) {
      stmts.push({ sql: "INSERT INTO kv_str (key, value) VALUES (?1, ?2) ON CONFLICT (key) DO NOTHING RETURNING 1 AS ok", params: [key, str(value)] });
      return { stmts, reply: (r) => (r[2].length ? "OK" : null) };
    }
    stmts.push({ sql: "INSERT INTO kv_str (key, value) VALUES (?1, ?2) ON CONFLICT (key) DO UPDATE SET value = excluded.value", params: [key, str(value)] });
    stmts.push({ sql: "DELETE FROM kv_ttl WHERE key = ?1", params: [key] });
    if (ttlMs !== null) stmts.push({ sql: "INSERT INTO kv_ttl (key, exp) VALUES (?1, ?2)", params: [key, now + ttlMs] });
    return { stmts, reply: () => "OK" };
  },

  INCR: ([key], now) => COMMANDS.INCRBY([key, 1], now),
  DECR: ([key], now) => COMMANDS.INCRBY([key, -1], now),
  INCRBY: ([key, by], now) => {
    key = str(key);
    const n = int(by);
    return {
      stmts: [
        ...clearIfExpired("kv_str", key, now),
        {
          // CAST: a JS number may be bound as REAL, and 5.0 would be stored "7.0".
          sql: "INSERT INTO kv_str (key, value) VALUES (?1, CAST(?2 AS INTEGER)) ON CONFLICT (key) DO UPDATE SET value = CAST(value AS INTEGER) + CAST(?2 AS INTEGER) RETURNING value",
          params: [key, n],
        },
      ],
      reply: (r) => Number(r[2][0].value),
    };
  },

  /* ---- keys ---- */
  DEL: (keys) => {
    const list = JSON.stringify(uniq(keys.map(str)));
    return {
      stmts: [
        ...TABLES.map((t) => ({ sql: `DELETE FROM ${t} WHERE key IN (SELECT value FROM json_each(?1)) RETURNING key`, params: [list] })),
        { sql: "DELETE FROM kv_ttl WHERE key IN (SELECT value FROM json_each(?1))", params: [list] },
      ],
      reply: (r) => new Set(r.slice(0, TABLES.length).flatMap((rows) => rows.map((x) => x.key))).size,
    };
  },

  TYPE: ([key], now) => ({
    stmts: [
      {
        sql: `SELECT CASE WHEN NOT ${keyAlive(now)} THEN 'none' ${TABLES.map((t, i) => `WHEN EXISTS (SELECT 1 FROM ${t} WHERE key = ?1) THEN '${TYPE_NAMES[i]}'`).join(" ")} ELSE 'none' END AS type`,
        params: [str(key)],
      },
    ],
    reply: ([rows]) => rows[0].type,
  }),

  // SCAN cursor [MATCH pattern] [COUNT n] — the cursor is an offset in the
  // sorted key list (stable enough for a one-off export, not for live use).
  SCAN: ([cursor, ...opts], now) => {
    let count = 10;
    let match = null;
    for (let i = 0; i < opts.length; i++) {
      const o = str(opts[i]).toUpperCase();
      if (o === "COUNT") count = Math.min(1000, Math.max(1, int(opts[++i], "count")));
      else if (o === "MATCH") match = str(opts[++i]);
      else throw new CommandError(`ERR SCAN option ${o} is not supported`);
    }
    const offset = int(cursor, "cursor");
    const keys = TABLES.map((t) => `SELECT key FROM ${t}`).join(" UNION ");
    return {
      stmts: [
        {
          sql: `SELECT key FROM (${keys}) k WHERE ${alive("k", now)}${match ? " AND key GLOB ?1" : ""} ORDER BY key LIMIT ${count} OFFSET ${offset}`,
          params: match ? [match] : [],
        },
      ],
      reply: ([rows]) => [rows.length < count ? "0" : String(offset + count), rows.map((r) => r.key)],
    };
  },

  EXISTS: (keys, now) => ({
    stmts: keys.map((k) => ({ sql: `SELECT ${keyExists(now)} AS e`, params: [str(k)] })),
    reply: (r) => r.reduce((n, rows) => n + (rows[0]?.e ? 1 : 0), 0),
  }),

  EXPIRE: ([key, secs, flag], now) => COMMANDS.PEXPIRE([key, int(secs, "seconds") * 1000, flag], now),
  PEXPIRE: ([key, ms, flag], now) => {
    const f = str(flag).toUpperCase();
    if (f && f !== "NX") throw new CommandError(`ERR EXPIRE option ${f} is not supported`);
    return {
      stmts: [
        {
          sql: `INSERT INTO kv_ttl (key, exp) SELECT ?1, ?2 WHERE ${keyExists(now)} ON CONFLICT (key) DO ${f === "NX" ? "NOTHING" : "UPDATE SET exp = excluded.exp"} RETURNING 1 AS ok`,
          params: [str(key), now + int(ms, "milliseconds")],
        },
      ],
      reply: ([rows]) => (rows.length ? 1 : 0),
    };
  },

  TTL: ([key], now) => ({
    stmts: [{ sql: `SELECT CASE WHEN NOT ${keyExists(now)} THEN -2 ELSE COALESCE((SELECT exp FROM kv_ttl WHERE key = ?1), -1) END AS v`, params: [str(key)] }],
    reply: ([rows]) => {
      const v = Number(rows[0].v);
      return v < 0 ? v : Math.max(0, Math.round((v - now) / 1000));
    },
  }),
  PTTL: ([key], now) => ({
    stmts: COMMANDS.TTL([key], now).stmts,
    reply: ([rows]) => {
      const v = Number(rows[0].v);
      return v < 0 ? v : Math.max(0, v - now);
    },
  }),

  /* ---- hashes ---- */
  HSET: ([key, ...pairs], now) => {
    if (!pairs.length || pairs.length % 2) throw new CommandError("ERR wrong number of arguments for 'hset' command");
    key = str(key);
    const entries = [];
    for (let i = 0; i < pairs.length; i += 2) entries.push([str(pairs[i]), str(pairs[i + 1])]);
    const fields = uniq(entries.map((e) => e[0]));
    return {
      stmts: [
        ...clearIfExpired("kv_hash", key, now),
        { sql: "SELECT COUNT(*) AS n FROM kv_hash WHERE key = ?1 AND field IN (SELECT value FROM json_each(?2))", params: [key, JSON.stringify(fields)] },
        {
          sql: "INSERT INTO kv_hash (key, field, value) SELECT ?1, json_extract(value, '$[0]'), json_extract(value, '$[1]') FROM json_each(?2) WHERE true ON CONFLICT (key, field) DO UPDATE SET value = excluded.value",
          params: [key, JSON.stringify(entries)],
        },
      ],
      reply: (r) => fields.length - Number(r[2][0].n),
    };
  },

  // HSETNX key field value [field value …] — several pairs is an extension
  // (scripts/kv-to-d1.mjs), the reply is how many fields were set.
  HSETNX: ([key, ...pairs], now) => {
    if (!pairs.length || pairs.length % 2) throw new CommandError("ERR wrong number of arguments for 'hsetnx' command");
    const entries = [];
    for (let i = 0; i < pairs.length; i += 2) entries.push([str(pairs[i]), str(pairs[i + 1])]);
    return {
      stmts: [
        ...clearIfExpired("kv_hash", str(key), now),
        {
          sql: "INSERT INTO kv_hash (key, field, value) SELECT ?1, json_extract(value, '$[0]'), json_extract(value, '$[1]') FROM json_each(?2) WHERE true ON CONFLICT (key, field) DO NOTHING RETURNING 1 AS ok",
          params: [str(key), JSON.stringify(entries)],
        },
      ],
      reply: (r) => r[2].length,
    };
  },

  HGET: ([key, field], now) => ({
    stmts: [{ sql: `SELECT value FROM kv_hash h WHERE key = ?1 AND field = ?2 AND ${alive("h", now)}`, params: [str(key), str(field)] }],
    reply: ([rows]) => rows[0]?.value ?? null,
  }),

  HGETALL: ([key], now) => ({
    stmts: [{ sql: `SELECT field, value FROM kv_hash h WHERE key = ?1 AND ${alive("h", now)}`, params: [str(key)] }],
    reply: ([rows]) => flatPairs(rows, "field", "value"),
  }),

  HDEL: ([key, ...fields]) => ({
    stmts: [{ sql: "DELETE FROM kv_hash WHERE key = ?1 AND field IN (SELECT value FROM json_each(?2)) RETURNING 1 AS ok", params: [str(key), JSON.stringify(fields.map(str))] }],
    reply: ([rows]) => rows.length,
  }),

  HLEN: ([key], now) => ({
    stmts: [{ sql: `SELECT COUNT(*) AS n FROM kv_hash h WHERE key = ?1 AND ${alive("h", now)}`, params: [str(key)] }],
    reply: ([rows]) => Number(rows[0].n),
  }),

  /* ---- sets ---- */
  SADD: ([key, ...members], now) => {
    key = str(key);
    const list = uniq(members.map(str));
    const json = JSON.stringify(list);
    return {
      stmts: [
        ...clearIfExpired("kv_set", key, now),
        { sql: "SELECT COUNT(*) AS n FROM kv_set WHERE key = ?1 AND member IN (SELECT value FROM json_each(?2))", params: [key, json] },
        { sql: "INSERT OR IGNORE INTO kv_set (key, member) SELECT ?1, value FROM json_each(?2)", params: [key, json] },
      ],
      reply: (r) => list.length - Number(r[2][0].n),
    };
  },

  SREM: ([key, ...members]) => ({
    stmts: [{ sql: "DELETE FROM kv_set WHERE key = ?1 AND member IN (SELECT value FROM json_each(?2)) RETURNING 1 AS ok", params: [str(key), JSON.stringify(members.map(str))] }],
    reply: ([rows]) => rows.length,
  }),

  SCARD: ([key], now) => ({
    stmts: [{ sql: `SELECT COUNT(*) AS n FROM kv_set s WHERE key = ?1 AND ${alive("s", now)}`, params: [str(key)] }],
    reply: ([rows]) => Number(rows[0].n),
  }),

  SMEMBERS: ([key], now) => ({
    stmts: [{ sql: `SELECT member FROM kv_set s WHERE key = ?1 AND ${alive("s", now)}`, params: [str(key)] }],
    reply: ([rows]) => rows.map((r) => r.member),
  }),

  SISMEMBER: ([key, member], now) => ({
    stmts: [{ sql: `SELECT 1 AS ok FROM kv_set s WHERE key = ?1 AND member = ?2 AND ${alive("s", now)}`, params: [str(key), str(member)] }],
    reply: ([rows]) => (rows.length ? 1 : 0),
  }),

  /* ---- sorted sets ---- */
  ZADD: ([key, ...args], now) => {
    key = str(key);
    let nx = false;
    let incr = false;
    while (args.length && /^[a-z]+$/i.test(str(args[0]))) {
      const o = str(args.shift()).toUpperCase();
      if (o === "NX") nx = true;
      else if (o === "INCR") incr = true;
      else throw new CommandError(`ERR ZADD option ${o} is not supported`);
    }
    // INCR with several pairs is an extension (Redis takes one): ZINCRBY for
    // a whole batch of members, used by scripts/kv-to-d1.mjs.
    if (nx && incr) throw new CommandError("ERR ZADD NX INCR is not supported");
    if (!args.length || args.length % 2) throw new CommandError("ERR syntax error");
    const pairs = [];
    for (let i = 0; i < args.length; i += 2) pairs.push([num(args[i]), str(args[i + 1])]);
    const members = uniq(pairs.map((p) => p[1]));
    return {
      stmts: [
        ...clearIfExpired("kv_zset", key, now),
        { sql: "SELECT COUNT(*) AS n FROM kv_zset WHERE key = ?1 AND member IN (SELECT value FROM json_each(?2))", params: [key, JSON.stringify(members)] },
        {
          sql: `INSERT INTO kv_zset (key, member, score) SELECT ?1, json_extract(value, '$[1]'), json_extract(value, '$[0]') FROM json_each(?2) WHERE true ON CONFLICT (key, member) DO ${nx ? "NOTHING" : incr ? "UPDATE SET score = score + excluded.score" : "UPDATE SET score = excluded.score"}`,
          params: [key, JSON.stringify(pairs)],
        },
      ],
      reply: (r) => members.length - Number(r[2][0].n),
    };
  },

  ZINCRBY: ([key, by, member], now) => ({
    stmts: [
      ...clearIfExpired("kv_zset", str(key), now),
      {
        sql: "INSERT INTO kv_zset (key, member, score) VALUES (?1, ?2, ?3) ON CONFLICT (key, member) DO UPDATE SET score = score + excluded.score RETURNING score",
        params: [str(key), str(member), num(by)],
      },
    ],
    reply: (r) => fmtScore(r[2][0].score),
  }),

  ZSCORE: ([key, member], now) => ({
    stmts: [{ sql: `SELECT score FROM kv_zset z WHERE key = ?1 AND member = ?2 AND ${alive("z", now)}`, params: [str(key), str(member)] }],
    reply: ([rows]) => fmtScore(rows[0]?.score),
  }),

  ZCARD: ([key], now) => ({
    stmts: [{ sql: `SELECT COUNT(*) AS n FROM kv_zset z WHERE key = ?1 AND ${alive("z", now)}`, params: [str(key)] }],
    reply: ([rows]) => Number(rows[0].n),
  }),

  ZCOUNT: ([key, min, max], now) => ({
    stmts: [{ sql: `SELECT COUNT(*) AS n FROM kv_zset z WHERE key = ?1 AND ${scoreBound(min, "min")} AND ${scoreBound(max, "max")} AND ${alive("z", now)}`, params: [str(key)] }],
    reply: ([rows]) => Number(rows[0].n),
  }),

  ZREM: ([key, ...members]) => ({
    stmts: [{ sql: "DELETE FROM kv_zset WHERE key = ?1 AND member IN (SELECT value FROM json_each(?2)) RETURNING 1 AS ok", params: [str(key), JSON.stringify(members.map(str))] }],
    reply: ([rows]) => rows.length,
  }),

  ZRANK: (args, now) => rank(args, now, false),
  ZREVRANK: (args, now) => rank(args, now, true),

  // ZRANGE key start stop [BYSCORE] [REV] [LIMIT offset count] [WITHSCORES]
  ZRANGE: ([key, a, b, ...opts], now) => {
    const flags = new Set();
    let limit = null;
    for (let i = 0; i < opts.length; i++) {
      const o = str(opts[i]).toUpperCase();
      if (o === "LIMIT") limit = { offset: int(opts[++i], "offset"), count: int(opts[++i], "count") };
      else if (["REV", "WITHSCORES", "BYSCORE"].includes(o)) flags.add(o);
      else throw new CommandError(`ERR ZRANGE option ${o} is not supported`);
    }
    const rev = flags.has("REV");
    if (flags.has("BYSCORE")) {
      // With REV the bounds come max first, as in Redis.
      const [min, max] = rev ? [b, a] : [a, b];
      return byScore(key, min, max, rev, flags.has("WITHSCORES"), limit, now);
    }
    const w = rangeWindow(a, b);
    return zSelect(key, w, rev, flags.has("WITHSCORES"), now);
  },
  ZREVRANGE: ([key, a, b, ...opts], now) => COMMANDS.ZRANGE([key, a, b, "REV", ...opts], now),

  ZRANGEBYSCORE: ([key, min, max, ...opts], now) => {
    let limit = null;
    let withScores = false;
    for (let i = 0; i < opts.length; i++) {
      const o = str(opts[i]).toUpperCase();
      if (o === "WITHSCORES") withScores = true;
      else if (o === "LIMIT") limit = { offset: int(opts[++i], "offset"), count: int(opts[++i], "count") };
      else throw new CommandError(`ERR ZRANGEBYSCORE option ${o} is not supported`);
    }
    return byScore(key, min, max, false, withScores, limit, now);
  },

  // ZUNION numkeys key [key ...] [WITHSCORES] — SUM aggregation only.
  ZUNION: ([numkeys, ...rest], now) => {
    const n = int(numkeys, "numkeys");
    const keys = rest.slice(0, n).map(str);
    const opts = rest.slice(n).map((o) => str(o).toUpperCase());
    for (const o of opts) if (o !== "WITHSCORES") throw new CommandError(`ERR ZUNION option ${o} is not supported`);
    const withScores = opts.includes("WITHSCORES");
    return {
      stmts: [
        {
          sql: `SELECT member, SUM(score) AS total FROM kv_zset z WHERE key IN (SELECT value FROM json_each(?1)) AND ${alive("z", now)} GROUP BY member ORDER BY total, member`,
          params: [JSON.stringify(keys)],
        },
      ],
      reply: ([rows]) => (withScores ? flatPairs(rows, "member", "total", fmtScore) : rows.map((r) => r.member)),
    };
  },

  /* ---- lists ----
   * seq is contiguous: LPUSH takes MIN(seq) - 1, RPUSH MAX(seq) + 1, LTRIM
   * only cuts the ends. So a list's length is MAX - MIN + 1, two index reads
   * instead of a COUNT(*) over hundreds of log entries on every push. */
  LPUSH: ([key, ...values], now) => push(str(key), values, "head", now),
  RPUSH: ([key, ...values], now) => push(str(key), values, "tail", now),

  LLEN: ([key], now) => ({
    stmts: [{ sql: `SELECT COALESCE(MAX(seq) - MIN(seq) + 1, 0) AS n FROM kv_list l WHERE key = ?1 AND ${alive("l", now)}`, params: [str(key)] }],
    reply: ([rows]) => Number(rows[0].n),
  }),

  LRANGE: ([key, a, b], now) => {
    const w = rangeWindow(a, b);
    if (!w) return { stmts: [], reply: () => [] };
    return {
      stmts: [{ sql: `SELECT value FROM kv_list l WHERE key = ?1 AND ${alive("l", now)} ORDER BY seq LIMIT ${w.limit} OFFSET ${w.offset}`, params: [str(key)] }],
      reply: ([rows]) => rows.map((r) => r.value),
    };
  },

  LTRIM: ([key, a, b], now) => {
    key = str(key);
    const w = rangeWindow(a, b);
    const head = "(SELECT MIN(seq) FROM kv_list WHERE key = ?1)";
    const stmts = clearIfExpired("kv_list", key, now);
    if (!w) stmts.push({ sql: "DELETE FROM kv_list WHERE key = ?1", params: [key] });
    else {
      const cut = [`seq < ${head} + ${w.offset}`];
      if (w.limit !== -1) cut.push(`seq > ${head} + ${w.offset + w.limit - 1}`);
      stmts.push({ sql: `DELETE FROM kv_list WHERE key = ?1 AND (${cut.join(" OR ")})`, params: [key] });
    }
    return { stmts, reply: () => "OK" };
  },
};

function rank([key, member], now, rev) {
  const cmp = rev ? ">" : "<";
  return {
    stmts: [
      {
        sql: `SELECT (SELECT COUNT(*) FROM kv_zset o WHERE o.key = z.key AND (o.score ${cmp} z.score OR (o.score = z.score AND o.member ${cmp} z.member))) AS r FROM kv_zset z WHERE z.key = ?1 AND z.member = ?2 AND ${alive("z", now)}`,
        params: [str(key), str(member)],
      },
    ],
    reply: ([rows]) => (rows.length ? Number(rows[0].r) : null),
  };
}

function zSelect(key, w, rev, withScores, now) {
  if (!w) return { stmts: [], reply: () => [] };
  const dir = rev ? "DESC" : "ASC";
  return {
    stmts: [
      {
        sql: `SELECT member, score FROM kv_zset z WHERE key = ?1 AND ${alive("z", now)} ORDER BY score ${dir}, member ${dir} LIMIT ${w.limit} OFFSET ${w.offset}`,
        params: [str(key)],
      },
    ],
    reply: ([rows]) => (withScores ? flatPairs(rows, "member", "score", fmtScore) : rows.map((r) => r.member)),
  };
}

function byScore(key, min, max, rev, withScores, limit, now) {
  const dir = rev ? "DESC" : "ASC";
  return {
    stmts: [
      {
        sql: `SELECT member, score FROM kv_zset z WHERE key = ?1 AND ${scoreBound(min, "min")} AND ${scoreBound(max, "max")} AND ${alive("z", now)} ORDER BY score ${dir}, member ${dir} LIMIT ${limit ? limit.count : -1} OFFSET ${limit ? limit.offset : 0}`,
        params: [str(key)],
      },
    ],
    reply: ([rows]) => (withScores ? flatPairs(rows, "member", "score", fmtScore) : rows.map((r) => r.member)),
  };
}

function push(key, values, end, now) {
  if (!values.length) throw new CommandError("ERR wrong number of arguments for 'push' command");
  const at = end === "head" ? "COALESCE((SELECT MIN(seq) FROM kv_list WHERE key = ?1), 0) - 1" : "COALESCE((SELECT MAX(seq) FROM kv_list WHERE key = ?1), -1) + 1";
  // One INSERT per value: Redis pushes them one after the other (LPUSH a b c
  // leaves c at the head), and log entries can be large JSON documents.
  const stmts = [...clearIfExpired("kv_list", key, now), ...values.map((v) => ({ sql: `INSERT INTO kv_list (key, seq, value) VALUES (?1, ${at}, ?2)`, params: [key, str(v)] }))];
  stmts.push({ sql: "SELECT COALESCE(MAX(seq) - MIN(seq) + 1, 0) AS n FROM kv_list WHERE key = ?1", params: [key] });
  return { stmts, reply: (r) => Number(r[r.length - 1][0].n) };
}

export const SUPPORTED_COMMANDS = Object.keys(COMMANDS);

/* -------------------------------- Engine -------------------------------- */

export class KvD1 {
  constructor(db) {
    this.db = db;
    this.queue = [];
    this.scheduled = false;
    this.schemaReady = false;
    this.lastSweep = 0;
  }

  // One raw Redis command → raw Redis reply. Pipelined with every other
  // command issued within the next FLUSH_HOPS microtasks.
  //
  // Microtasks and NOT setTimeout: on Workers a timer belongs to the request
  // that set it. Once that request has answered, its timer never fires — the
  // queue stayed "scheduled" forever and every later request in the isolate
  // hung (seen locally on 2026-11-25 after a logout). Microtasks always drain
  // before the current turn ends, and a turn belongs to exactly one request,
  // so a batch never mixes two requests' commands either.
  exec(command) {
    return new Promise((resolve, reject) => {
      this.queue.push({ command, resolve, reject });
      if (!this.scheduled) {
        this.scheduled = true;
        this.deferFlush();
      }
    });
  }

  // A few hops so that parallel helpers that each `await getKv()` first
  // still land in the same batch.
  async deferFlush() {
    for (let i = 0; i < FLUSH_HOPS; i++) await null;
    this.scheduled = false;
    this.flush();
  }

  // Several commands, one batch, one reply per command: { result } or
  // { error } — the shape of Upstash's /pipeline endpoint.
  async pipeline(commands) {
    return Promise.all(commands.map((c) => this.exec(c).then((result) => ({ result }), (e) => ({ error: e.message }))));
  }

  async flush() {
    const jobs = this.queue.splice(0);
    if (!jobs.length) return;
    const now = Date.now();

    const statements = [];
    const prelude = this.schemaReady ? 0 : SCHEMA.length;
    if (prelude) statements.push(...SCHEMA.map((sql) => ({ sql, params: [] })));

    const planned = [];
    for (const job of jobs) {
      try {
        const [name, ...args] = job.command;
        const compile = COMMANDS[str(name).toUpperCase()];
        if (!compile) throw new CommandError(`ERR unknown command '${name}'`);
        const plan = compile(args, now);
        planned.push({ job, plan, from: statements.length });
        statements.push(...plan.stmts);
      } catch (err) {
        job.reject(err);
      }
    }

    if (now - this.lastSweep > SWEEP_MIN_MS && Math.random() < 1 / SWEEP_ODDS) {
      this.lastSweep = now;
      statements.push(...sweepStatements(now));
    }
    if (!planned.length && !prelude) return;

    let results;
    try {
      results = statements.length ? await this.db.batch(statements.map((s) => this.db.prepare(s.sql).bind(...s.params))) : [];
    } catch (err) {
      for (const { job } of planned) job.reject(err);
      return;
    }
    if (prelude) this.schemaReady = true;

    for (const { job, plan, from } of planned) {
      try {
        const rows = results.slice(from, from + plan.stmts.length).map((r) => r?.results || []);
        job.resolve(plan.reply(rows));
      } catch (err) {
        job.reject(err);
      }
    }
  }
}

/* ------------------------ @upstash/redis look-alike ------------------------ */
// Same (de)serialization as @upstash/redis with its defaults, so callers see
// exactly what they used to: objects and numbers are JSON-encoded on write,
// and every string reply that parses as JSON comes back parsed ("12" → 12,
// '{"a":1}' → { a: 1 }), except numbers that would not round-trip ("007").

export function serialize(v) {
  return typeof v === "string" ? v : JSON.stringify(v);
}

export function deserialize(v) {
  if (typeof v !== "string") return v;
  try {
    const parsed = JSON.parse(v);
    return typeof parsed === "number" && parsed.toString() !== v ? v : parsed;
  } catch {
    return v;
  }
}

const deserializeAll = (arr) => (Array.isArray(arr) ? arr.map(deserialize) : arr);
const flatKeys = (keys) => (keys.length === 1 && Array.isArray(keys[0]) ? keys[0] : keys);

function zrangeArgs(key, min, max, opts = {}) {
  const args = ["ZRANGE", key, min, max];
  if (opts.byScore) args.push("BYSCORE");
  if (opts.rev) args.push("REV");
  if (opts.count !== undefined && opts.offset !== undefined) args.push("LIMIT", opts.offset, opts.count);
  if (opts.withScores) args.push("WITHSCORES");
  return args;
}

export function createClient(db) {
  const engine = new KvD1(db);
  const run = (...cmd) => engine.exec(cmd);
  return {
    engine,
    exec: (cmd) => engine.exec(cmd),
    pipelineRaw: (cmds) => engine.pipeline(cmds),

    ping: () => run("PING"),

    get: async (key) => deserialize(await run("GET", key)),
    mget: async (...keys) => deserializeAll(await run("MGET", ...flatKeys(keys))),
    set: async (key, value, opts = {}) => {
      const args = ["SET", key, serialize(value)];
      if (opts.nx) args.push("NX");
      if (opts.ex) args.push("EX", opts.ex);
      if (opts.px) args.push("PX", opts.px);
      return run(...args);
    },
    incr: (key) => run("INCR", key),
    incrby: (key, n) => run("INCRBY", key, n),
    decr: (key) => run("DECR", key),

    del: (...keys) => run("DEL", ...flatKeys(keys)),
    exists: (...keys) => run("EXISTS", ...flatKeys(keys)),
    expire: (key, seconds) => run("EXPIRE", key, seconds),
    pexpire: (key, ms) => run("PEXPIRE", key, ms),
    ttl: (key) => run("TTL", key),
    pttl: (key) => run("PTTL", key),

    hset: (key, obj) => run("HSET", key, ...Object.entries(obj).flatMap(([f, v]) => [f, serialize(v)])),
    hsetnx: (key, field, value) => run("HSETNX", key, field, serialize(value)),
    hget: async (key, field) => deserialize(await run("HGET", key, field)),
    hdel: (key, ...fields) => run("HDEL", key, ...fields),
    hlen: (key) => run("HLEN", key),
    // Upstash returns null for a missing hash, never {}.
    hgetall: async (key) => {
      const flat = await run("HGETALL", key);
      if (!flat.length) return null;
      const out = {};
      for (let i = 0; i < flat.length; i += 2) out[flat[i]] = deserialize(flat[i + 1]);
      return out;
    },

    sadd: (key, ...members) => run("SADD", key, ...members.map(serialize)),
    srem: (key, ...members) => run("SREM", key, ...members.map(serialize)),
    scard: (key) => run("SCARD", key),
    smembers: async (key) => deserializeAll(await run("SMEMBERS", key)),
    sismember: (key, member) => run("SISMEMBER", key, serialize(member)),

    // zadd(key, {score, member}, …) or zadd(key, { nx: true }, {score, member}, …)
    zadd: (key, ...items) => {
      const flags = [];
      if (items[0] && !("score" in items[0])) {
        const opts = items.shift();
        if (opts.nx) flags.push("NX");
      }
      return run("ZADD", key, ...flags, ...items.flatMap((i) => [i.score, serialize(i.member)]));
    },
    zincrby: async (key, by, member) => Number(await run("ZINCRBY", key, by, serialize(member))),
    zscore: async (key, member) => {
      const s = await run("ZSCORE", key, serialize(member));
      return s === null ? null : Number(s);
    },
    zcard: (key) => run("ZCARD", key),
    zcount: (key, min, max) => run("ZCOUNT", key, min, max),
    zrem: (key, ...members) => run("ZREM", key, ...members.map(serialize)),
    zrank: (key, member) => run("ZRANK", key, serialize(member)),
    zrevrank: (key, member) => run("ZREVRANK", key, serialize(member)),
    zrange: async (key, min, max, opts) => deserializeAll(await run(...zrangeArgs(key, min, max, opts))),
    zrangebyscore: async (key, min, max, opts = {}) => {
      const args = ["ZRANGEBYSCORE", key, min, max];
      if (opts.withScores) args.push("WITHSCORES");
      return deserializeAll(await run(...args));
    },
    zunion: async (numkeys, keys, opts = {}) => deserializeAll(await run("ZUNION", numkeys, ...keys, ...(opts.withScores ? ["WITHSCORES"] : []))),

    lpush: (key, ...values) => run("LPUSH", key, ...values.map(serialize)),
    rpush: (key, ...values) => run("RPUSH", key, ...values.map(serialize)),
    ltrim: (key, start, stop) => run("LTRIM", key, start, stop),
    lrange: async (key, start, stop) => deserializeAll(await run("LRANGE", key, start, stop)),
    llen: (key) => run("LLEN", key),
  };
}
