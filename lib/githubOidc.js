// Vérifie un jeton OIDC de GitHub Actions : la preuve, signée par GitHub,
// qu'une requête vient d'un workflow précis de CE dépôt, sur main.
//
// Pourquoi : le robot réseaux sociaux et la copie Upstash → D1 tournent dans
// GitHub Actions et lisent/écrivent la base KV par /api/kv (lib/kvBridge.js).
// Avec OIDC, aucun secret partagé à créer, copier ni faire tourner : le
// workflow demande à GitHub un jeton de quelques minutes (permission
// `id-token: write`), le Worker vérifie sa signature avec les clés publiques
// de GitHub et ses champs ci-dessous. Les workflows lancés depuis un fork
// n'obtiennent jamais ce jeton.

const ISSUER = "https://token.actions.githubusercontent.com";
export const KV_AUDIENCE = "saadconcours-kv";
const REPOSITORY = "saaddev0/saadconcours";
const BRANCH = "refs/heads/main";
const WORKFLOWS = [".github/workflows/social-publish.yml", ".github/workflows/kv-migrate.yml"];

const JWKS_TTL_MS = 60 * 60 * 1000;
let jwks = { keys: [], at: 0 };

function b64urlToBytes(s) {
  const b64 = s.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((s.length + 3) % 4);
  const bin = atob(b64);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

const decodeJson = (part) => JSON.parse(new TextDecoder().decode(b64urlToBytes(part)));

async function publicKey(kid) {
  const find = () => jwks.keys.find((k) => k.kid === kid);
  if (!find() || Date.now() - jwks.at > JWKS_TTL_MS) {
    const res = await fetch(`${ISSUER}/.well-known/jwks`);
    if (!res.ok) throw new Error(`JWKS GitHub : HTTP ${res.status}`);
    jwks = { keys: (await res.json()).keys || [], at: Date.now() };
  }
  const jwk = find();
  if (!jwk) return null;
  return crypto.subtle.importKey("jwk", { kty: jwk.kty, n: jwk.n, e: jwk.e, alg: "RS256", ext: true }, { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, false, ["verify"]);
}

// Renvoie les champs du jeton s'il est valide pour la base KV, sinon null.
// Ne lève jamais : un jeton illisible = pas d'accès.
export async function verifyGithubOidc(token) {
  try {
    const parts = String(token || "").split(".");
    if (parts.length !== 3) return null;
    const header = decodeJson(parts[0]);
    if (header.alg !== "RS256" || !header.kid) return null;
    const key = await publicKey(header.kid);
    if (!key) return null;
    const ok = await crypto.subtle.verify("RSASSA-PKCS1-v1_5", key, b64urlToBytes(parts[2]), new TextEncoder().encode(`${parts[0]}.${parts[1]}`));
    if (!ok) return null;

    const c = decodeJson(parts[1]);
    const now = Math.floor(Date.now() / 1000);
    const aud = Array.isArray(c.aud) ? c.aud : [c.aud];
    if (c.iss !== ISSUER || !aud.includes(KV_AUDIENCE)) return null;
    if (typeof c.exp !== "number" || c.exp <= now || (typeof c.nbf === "number" && c.nbf > now + 60)) return null;
    if (String(c.repository).toLowerCase() !== REPOSITORY || c.ref !== BRANCH) return null;
    const wf = String(c.workflow_ref || "").toLowerCase();
    if (!WORKFLOWS.some((w) => wf === `${REPOSITORY}/${w}@${BRANCH}`)) return null;
    return c;
  } catch {
    return null;
  }
}
