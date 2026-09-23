// The one Redis client every KV-backed module shares (analytics, subscribers,
// audit log, login rate limit). It talks to the Upstash database directly
// through @upstash/redis — the package @vercel/kv was only ever a thin
// wrapper around. Same env vars, same keys, same data: dropping the wrapper
// removes the last Vercel dependency without touching a single stored stat.
//
// Options mirror what @vercel/kv's default client set, so request behaviour
// on the Worker is unchanged.

let client = null;

export function kvConfigured() {
  return Boolean(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
}

export async function getKv() {
  if (!client) {
    const { Redis } = await import("@upstash/redis");
    client = new Redis({
      url: process.env.KV_REST_API_URL,
      token: process.env.KV_REST_API_TOKEN,
      cache: "default",
      enableAutoPipelining: true,
    });
  }
  return client;
}
