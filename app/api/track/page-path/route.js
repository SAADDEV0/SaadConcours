import { NextResponse } from "next/server";
import { trackPathView, checkRateLimit, getClientIp } from "@/lib/analytics";

// Only a bare pathname (no origin, no query/hash, no exotic characters) is
// accepted — matches the slug shapes lib/store.js actually generates
// (lowercase ascii + underscores) plus the id-less listing routes.
const PATH_RE = /^\/[a-zA-Z0-9\-_/]{0,180}$/;

function sanitizePath(raw) {
  if (typeof raw !== "string") return null;
  let p = raw.split("?")[0].split("#")[0];
  if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
  return PATH_RE.test(p) ? p : null;
}

// Public — fires on every public-page load (see chrome.js), one per real
// navigation since this site uses plain full-page <a href> links rather
// than client-side route transitions. Higher rate-limit ceiling than the
// other /api/track/* counters since a single visitor can rack up several
// of these per minute just browsing normally.
export async function POST(req) {
  try {
    const allowed = await checkRateLimit(`pagepath:${getClientIp(req)}`, 60, 60);
    if (!allowed) return NextResponse.json({ ok: true });
    const body = await req.json().catch(() => null);
    const path = sanitizePath(body?.path);
    if (path) await trackPathView(path);
  } catch (err) {
    console.error("track page-path error", err);
  }
  return NextResponse.json({ ok: true });
}
