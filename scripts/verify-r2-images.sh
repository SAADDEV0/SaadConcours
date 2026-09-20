#!/usr/bin/env bash
#
# Checks that every image the site actually references is reachable at the
# given public R2 URL. Run this BEFORE setting NEXT_PUBLIC_IMAGE_CDN_URL:
# a single missing object means broken scans on a live concours page, and
# those pages are what the site ranks for.
#
#   bash scripts/verify-r2-images.sh https://pub-xxxx.r2.dev
#   bash scripts/verify-r2-images.sh https://img.saadconcours.space
#
# It checks two sets and reports both:
#   1. every path listed in public/data/concours.json  (what pages render)
#   2. every file under public/images                  (catches orphans)
#
# Exit code is 0 only when set 1 is completely clean.

set -uo pipefail

BASE="${1:-}"
if [ -z "$BASE" ]; then
  echo "usage: bash scripts/verify-r2-images.sh <public-r2-base-url>" >&2
  exit 2
fi
BASE="${BASE%/}"

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

# Encode exactly the way app/_shared/chrome.js pub() does, so this tests the
# real URLs the browser will request rather than an approximation.
node -e '
const fs = require("fs");
const base = process.argv[1];
const enc = p => base + "/" + p.replace(/^\//, "").split("/").map(encodeURIComponent).join("/");

const raw = JSON.parse(fs.readFileSync("public/data/concours.json", "utf8"));
const list = Array.isArray(raw) ? raw : Object.values(raw)[0];
const referenced = new Set();
for (const c of list) for (const img of c.images || []) referenced.add(img);
fs.writeFileSync(process.argv[2], [...referenced].map(enc).join("\n") + "\n");

const walk = d => fs.readdirSync(d, { withFileTypes: true }).flatMap(e =>
  e.isDirectory() ? walk(d + "/" + e.name) : [d + "/" + e.name]);
const onDisk = walk("public/images").map(p => p.replace(/^public\//, ""));
fs.writeFileSync(process.argv[3], onDisk.map(enc).join("\n") + "\n");

console.error(`referenced by concours.json: ${referenced.size}`);
console.error(`present under public/images: ${onDisk.length}`);
' "$BASE" "$TMP/referenced.txt" "$TMP/ondisk.txt"

check() {
  local label="$1" file="$2"
  local total failed
  total=$(grep -c . "$file")
  echo
  echo "checking $label ($total URLs) ..."
  : > "$TMP/fail-$label"
  # -P 12 keeps this to well under a minute without hammering the bucket.
  xargs -P 12 -I{} bash -c '
    code=$(curl -s -o /dev/null -w "%{http_code}" --max-time 20 "$1")
    [ "$code" = "200" ] || printf "%s  %s\n" "$code" "$1"
  ' _ {} < "$file" >> "$TMP/fail-$label"
  failed=$(grep -c . "$TMP/fail-$label" || true)
  if [ "$failed" -eq 0 ]; then
    echo "  OK - all $total reachable"
  else
    echo "  $failed of $total FAILED:"
    head -15 "$TMP/fail-$label" | sed 's/^/    /'
    [ "$failed" -gt 15 ] && echo "    ... and $((failed - 15)) more"
  fi
  return "$failed"
}

check "referenced" "$TMP/referenced.txt"; ref_failed=$?
check "ondisk"     "$TMP/ondisk.txt"     || true

echo
if [ "$ref_failed" -eq 0 ]; then
  echo "SAFE: every image the site renders is served from $BASE"
  echo "next: set NEXT_PUBLIC_IMAGE_CDN_URL=$BASE in Vercel and redeploy"
  exit 0
fi
echo "NOT SAFE: $ref_failed referenced image(s) missing - do not set the env var yet"
echo "re-run the upload, then run this again"
exit 1
