// Jeton pour /api/kv (base KV D1 du Worker, lib/kvBridge.js), côté scripts.
//
// Dans GitHub Actions (permission `id-token: write`) : un jeton OIDC signé
// par GitHub, demandé à la volée et renouvelé avant qu'il n'expire — aucun
// secret à configurer. Ailleurs (poste local, tests) : la variable donnée.

export const KV_AUDIENCE = "saadconcours-kv";
const REFRESH_MS = 4 * 60 * 1000;

let cached = { token: "", at: 0 };

export async function kvBridgeToken(fallback = "") {
  const { ACTIONS_ID_TOKEN_REQUEST_URL: url, ACTIONS_ID_TOKEN_REQUEST_TOKEN: bearer } = process.env;
  if (!url || !bearer) return fallback;
  if (cached.token && Date.now() - cached.at < REFRESH_MS) return cached.token;
  const res = await fetch(`${url}&audience=${encodeURIComponent(KV_AUDIENCE)}`, { headers: { Authorization: `bearer ${bearer}` } });
  const json = await res.json().catch(() => ({}));
  if (!res.ok || !json.value) throw new Error(`Jeton OIDC GitHub : HTTP ${res.status}`);
  cached = { token: json.value, at: Date.now() };
  return cached.token;
}
