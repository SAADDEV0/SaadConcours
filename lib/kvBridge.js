// Upstash-compatible REST endpoint over the D1 KV store (app/api/kv).
//
// The social robot (.github/workflows/social-publish.yml, scripts/social/
// publier.mjs) and scripts/kv-to-d1.mjs run outside Cloudflare and used to
// talk to Upstash's REST API directly: POST <url> with ["GET", "key"] as the
// body, Authorization: Bearer <token>, reply { result } or { error }. This
// endpoint answers the same protocol at https://www.saadconcours.space/api/kv.
// POST /api/kv/pipeline takes [[cmd…], [cmd…]] and runs them as one D1 batch.
//
// Who may call it (it is the whole database):
//   - a GitHub Actions OIDC token from social-publish.yml or kv-migrate.yml
//     on main (lib/githubOidc.js) — no shared secret to manage;
//   - or the Worker secret KV_BRIDGE_TOKEN (>= 32 chars), if one is set, for
//     a run from a laptop. Unset, only GitHub Actions gets in.
//
// Replies are raw Redis replies (strings, not parsed JSON), exactly as
// Upstash's REST API sends them.

import { NextResponse } from "next/server";
import { kvConfigured, getKv } from "./redis";
import { verifyGithubOidc } from "./githubOidc";

const MAX_PIPELINE = 1000;
const MIN_TOKEN = 32;

function sameString(a, b) {
  if (typeof a !== "string" || typeof b !== "string" || a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

async function authorized(req) {
  const header = req.headers.get("authorization") || "";
  if (!/^bearer /i.test(header)) return false;
  const token = header.slice(7).trim();
  const expected = process.env.KV_BRIDGE_TOKEN || "";
  if (expected.length >= MIN_TOKEN && sameString(token, expected)) return true;
  return Boolean(await verifyGithubOidc(token));
}

const isCommand = (c) => Array.isArray(c) && c.length > 0 && c.every((x) => ["string", "number"].includes(typeof x));

const noStore = { "cache-control": "no-store" };

export async function handleKvBridge(req, { pipeline }) {
  if (!(await authorized(req))) return NextResponse.json({ error: "Unauthorized" }, { status: 401, headers: noStore });
  if (!kvConfigured()) return NextResponse.json({ error: "KV store not configured" }, { status: 503, headers: noStore });

  const body = await req.json().catch(() => null);
  const kv = await getKv();

  if (pipeline) {
    if (!Array.isArray(body) || !body.length || body.length > MAX_PIPELINE || !body.every(isCommand)) {
      return NextResponse.json({ error: "ERR body must be an array of commands" }, { status: 400, headers: noStore });
    }
    try {
      return NextResponse.json(await kv.pipelineRaw(body), { headers: noStore });
    } catch (err) {
      return NextResponse.json({ error: err.message }, { status: 500, headers: noStore });
    }
  }

  if (!isCommand(body)) return NextResponse.json({ error: "ERR body must be a command array" }, { status: 400, headers: noStore });
  try {
    return NextResponse.json({ result: await kv.exec(body) }, { headers: noStore });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400, headers: noStore });
  }
}
