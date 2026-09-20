import { NextResponse } from "next/server";
import {
  trackAdEvent,
  trackConcoursView,
  trackPageview,
  trackPathView,
  trackPdfDownload,
  trackSearchMiss,
  checkRateLimit,
  getClientIp,
  getClientGeo,
} from "@/lib/analytics";

// One endpoint for every /api/track/* counter, so a visitor's whole session
// costs one function invocation instead of one per event. See the batching
// block in app/_shared/chrome.js for the client half and why it exists.
//
// The single-event routes are deliberately still in place: a visitor on an
// already-cached page keeps posting to them until they reload, and this
// endpoint is not a reason to start dropping those events on the floor.
//
// Validation and rate limits below are copied from those routes rather than
// relaxed — arriving in a batch must not buy an event weaker checks than it
// would have got arriving alone.

// Bounds the work a single request can ask for. The client flushes at 25.
const MAX_EVENTS = 40;

const SOURCE_RE = /^[a-z0-9._-]{1,32}$/;
const PATH_RE = /^\/[a-zA-Z0-9\-_/]{0,180}$/;
const AD_TYPES = ["view", "click"];
const PDF_KINDS = ["concours", "cours", "evaluation"];

function sanitizeSource(raw) {
  if (typeof raw !== "string") return null;
  const s = raw.toLowerCase().trim();
  return SOURCE_RE.test(s) ? s : "autre";
}

function sanitizePath(raw) {
  if (typeof raw !== "string") return null;
  let p = raw.split("?")[0].split("#")[0];
  if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
  return PATH_RE.test(p) ? p : null;
}

// limit: [limiter key prefix, max per window, window seconds] — same triples
// the individual routes use, so an IP's budget per counter is unchanged.
const HANDLERS = {
  pageview: {
    limit: ["pageview", 20, 60],
    run: (e) => trackPageview(sanitizeSource(e.source)),
  },
  "page-path": {
    limit: ["pagepath", 60, 60],
    run: (e, ctx) => {
      const path = sanitizePath(e.path);
      return path ? trackPathView(path, ctx) : null;
    },
  },
  ad: {
    limit: ["ad", 60, 60],
    run: (e) => {
      if (!e.id || typeof e.id !== "string" || e.id.length > 100) return null;
      if (!AD_TYPES.includes(e.type)) return null;
      return trackAdEvent(e.id, e.type);
    },
  },
  "concours-view": {
    limit: ["view", 60, 60],
    run: (e) => (e.id ? trackConcoursView(e.id) : null),
  },
  "pdf-download": {
    limit: ["pdf", 30, 60],
    run: (e, ctx) => (PDF_KINDS.includes(e.kind) ? trackPdfDownload(e.kind, e.id, ctx) : null),
  },
  "search-miss": {
    limit: ["search-miss", 20, 60],
    run: (e) => (typeof e.query === "string" && e.query.trim() ? trackSearchMiss(e.query) : null),
  },
};

export async function POST(req) {
  try {
    // sendBeacon posts a Blob; req.json() still parses it, but a malformed
    // body must read as "nothing to record" rather than throw.
    const body = await req.json().catch(() => null);
    const events = Array.isArray(body?.events) ? body.events.slice(0, MAX_EVENTS) : [];
    if (!events.length) return NextResponse.json({ ok: true });

    const ip = getClientIp(req);
    const ctx = { ip, ...getClientGeo(req) };

    // Sequential on purpose: these are counter increments whose order does
    // not matter and whose latency nobody waits on (the client uses
    // sendBeacon and ignores the response), so there is no reason to fan out
    // and risk hammering KV with 25 concurrent connections.
    for (const event of events) {
      const handler = HANDLERS[event?.t];
      if (!handler) continue;
      const [prefix, max, windowSeconds] = handler.limit;
      // Per event, not per request: batching changes how events travel, not
      // how many a single IP is allowed to record.
      const allowed = await checkRateLimit(`${prefix}:${ip}`, max, windowSeconds);
      if (!allowed) continue;
      try {
        await handler.run(event, ctx);
      } catch (err) {
        // One bad event must not discard the rest of the batch.
        console.error(`track batch: ${event.t} failed`, err);
      }
    }
  } catch (err) {
    console.error("track batch error", err);
  }
  // Always 200, same contract as the routes this consolidates: a tracking
  // failure must never surface to a visitor.
  return NextResponse.json({ ok: true });
}
