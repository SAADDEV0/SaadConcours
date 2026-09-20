import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import kvIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/kv-incremental-cache";

// KV rather than the documented R2 default: R2 requires a payment method on
// file even inside its free tier, and this migration exists to remove cost,
// not relocate it. KV's free allowance is far above what this site needs —
// the eight public pages revalidate hourly and the [id] pages are prerendered
// at build time, so ISR traffic was ~16k reads / 3k writes per month.
export default defineCloudflareConfig({
  incrementalCache: kvIncrementalCache,
});
