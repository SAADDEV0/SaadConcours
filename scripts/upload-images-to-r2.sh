#!/usr/bin/env bash
#
# Uploads public/images/** to a Cloudflare R2 bucket, preserving paths.
#
# WHY
#   The scans are ~80% of everything a deployment stores, and Vercel keeps a
#   copy per deployment, so they drive Deployment Storage growth on their own.
#   Serving them from R2 removes them from the deployment entirely. R2 charges
#   nothing for egress, so the bandwidth is free too.
#
# WHAT IT DOES NOT DO
#   It does not delete anything, locally or remotely, and it does not change
#   the site. public/images stays exactly where it is until you have verified
#   the CDN serves every file (step 5 below).
#
# STEPS — the ones marked [you] need your Cloudflare login and must be run by
# you; nothing here handles your credentials.
#
#   1. [you] Create the bucket in the Cloudflare dashboard:
#            R2 > Create bucket > name it  saadconcours-images
#
#   2. [you] Authenticate wrangler once (opens your browser):
#            npx wrangler login
#
#   3.       Upload:
#            bash scripts/upload-images-to-r2.sh saadconcours-images
#
#   4. [you] Expose the bucket publicly and note the URL. Either:
#            - bucket Settings > Public access > allow, which gives you a
#              https://pub-<hash>.r2.dev URL (fine to start with), or
#            - attach a custom domain such as img.saadconcours.space, which is
#              faster and lets you keep the r2.dev URL out of your HTML.
#
#   5.       Verify every file is reachable before changing the site:
#            bash scripts/verify-r2-images.sh https://<your-public-url>
#
#   6. [you] Only once step 5 reports 0 failures, set the env var in Vercel:
#            NEXT_PUBLIC_IMAGE_CDN_URL = https://<your-public-url>
#            then redeploy. app/_shared/chrome.js reads it; unset, the site
#            keeps serving images locally, so this is reversible by deleting
#            the variable and redeploying.
#
#   7.       Only after production is confirmed serving from R2, remove
#            public/images from the repo to actually reclaim the storage.
#            Keep a local copy or rely on git history.
#
# NOTE ON SPEED
#   wrangler uploads one object per invocation, so 656 files takes a while
#   (roughly 15-25 minutes). It is safe to stop and re-run: already-uploaded
#   keys are skipped via the .r2-uploaded ledger next to this script.
#   If you would rather do it in under a minute, configure rclone against R2's
#   S3 API and run a single `rclone copy public/images r2:<bucket>/images`.

set -uo pipefail

BUCKET="${1:-}"
if [ -z "$BUCKET" ]; then
  echo "usage: bash scripts/upload-images-to-r2.sh <bucket-name>" >&2
  exit 2
fi

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SRC="$ROOT/public/images"
LEDGER="$ROOT/scripts/.r2-uploaded"

[ -d "$SRC" ] || { echo "no such directory: $SRC" >&2; exit 1; }
touch "$LEDGER"

TOTAL=$(find "$SRC" -type f | wc -l)
echo "bucket : $BUCKET"
echo "source : $SRC"
echo "files  : $TOTAL"
echo "ledger : $LEDGER ($(wc -l < "$LEDGER") already done)"
echo

n=0; ok=0; skip=0; fail=0
while IFS= read -r file; do
  n=$((n + 1))
  # Key mirrors the path stored in concours.json: "images/Ville/xxx.webp"
  key="images/${file#"$SRC/"}"

  if grep -Fxq "$key" "$LEDGER"; then
    skip=$((skip + 1))
    continue
  fi

  if npx wrangler r2 object put "$BUCKET/$key" --file="$file" --remote >/dev/null 2>&1; then
    printf '%s\n' "$key" >> "$LEDGER"
    ok=$((ok + 1))
  else
    fail=$((fail + 1))
    printf 'FAILED  %s\n' "$key" >&2
  fi

  if [ $((n % 25)) -eq 0 ]; then
    printf '  %d/%d  uploaded=%d skipped=%d failed=%d\n' "$n" "$TOTAL" "$ok" "$skip" "$fail"
  fi
done < <(find "$SRC" -type f | sort)

echo
echo "done: $ok uploaded, $skip already present, $fail failed (of $TOTAL)"
[ "$fail" -eq 0 ] || { echo "re-run to retry the failures" >&2; exit 1; }
echo "next: bash scripts/verify-r2-images.sh https://<your-public-r2-url>"
