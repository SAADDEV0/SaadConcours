import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

// Prerendered pages are served from Workers static assets rather than KV.
//
// The obvious choice is KV (or R2, which the docs default to), but both are
// wrong here. R2 demands a payment method even on its free tier. KV works,
// but populating it costs one write per prerendered page — 465 of them — and
// the free tier allows 1000 writes a day. With deploys wired to git pushes
// and a bot that commits several times a day, that quota would be gone by
// mid-morning.
//
// Static assets have no write cost and no request cost, so a deploy is free
// no matter how often it runs.
//
// The trade-off is that this cache is read-only: runtime revalidation cannot
// write back to it. That suits this site, where content freshness never came
// from ISR in the first place — an admin edit commits to GitHub, which
// triggers a rebuild, which regenerates every page. The deploy IS the
// revalidation. Pages still carry revalidate so that, if deploys ever stop,
// they fall back to re-rendering on demand rather than serving stale HTML
// forever; that path logs a failed cache write, which is expected.
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
});
