// Remplaçant minimal de `next/server` pour le Worker d'entrée.
//
// Les routes de app/api/**/route.js sont de simples fonctions
// Request -> Response ; elles n'ont besoin de Next.js que pour ces quelques
// objets. Le Worker d'entrée les importe telles quelles et wrangler remplace
// `next/server` par ce fichier (clé `alias` de wrangler.jsonc), ce qui évite
// d'embarquer les 19 Mo du serveur Next.js — et d'en payer le démarrage à
// chaque isolate froid (voir worker/index.js).
//
// Couvre ce que le code utilise : NextResponse.json / redirect / next,
// `new NextResponse(body, init)`, `res.cookies.set`, `req.cookies.get`,
// `req.nextUrl`. Une route qui utiliserait autre chose de next/server
// échouerait au build de wrangler (export manquant), pas en silence.

function parseCookieHeader(header) {
  const map = new Map();
  for (const part of (header || "").split(";")) {
    const i = part.indexOf("=");
    if (i < 0) continue;
    const name = part.slice(0, i).trim();
    if (!name || map.has(name)) continue;
    let value = part.slice(i + 1).trim();
    try {
      value = decodeURIComponent(value);
    } catch {
      // valeur non encodée : gardée telle quelle
    }
    map.set(name, value);
  }
  return map;
}

class RequestCookies {
  #map;
  constructor(headers) {
    this.#map = parseCookieHeader(headers.get("cookie"));
  }
  get(name) {
    return this.#map.has(name) ? { name, value: this.#map.get(name) } : undefined;
  }
  getAll(name) {
    const all = [...this.#map].map(([n, value]) => ({ name: n, value }));
    return name ? all.filter((c) => c.name === name) : all;
  }
  has(name) {
    return this.#map.has(name);
  }
}

// Même sérialisation que Next (ResponseCookies de @edge-runtime/cookies).
function serializeCookie({ name, value, ...o }) {
  const parts = [`${name}=${encodeURIComponent(value ?? "")}`];
  if (o.path) parts.push(`Path=${o.path}`);
  let expires = o.expires;
  if (typeof o.maxAge === "number") {
    parts.push(`Max-Age=${Math.floor(o.maxAge)}`);
    if (!expires) expires = new Date(Date.now() + o.maxAge * 1000);
  }
  if (expires) parts.push(`Expires=${new Date(expires).toUTCString()}`);
  if (o.domain) parts.push(`Domain=${o.domain}`);
  if (o.secure) parts.push("Secure");
  if (o.httpOnly) parts.push("HttpOnly");
  if (o.sameSite) parts.push(`SameSite=${o.sameSite === true ? "strict" : String(o.sameSite).toLowerCase()}`);
  if (o.partitioned) parts.push("Partitioned");
  if (o.priority) parts.push(`Priority=${o.priority}`);
  return parts.join("; ");
}

class ResponseCookies {
  #headers;
  constructor(headers) {
    this.#headers = headers;
  }
  set(nameOrCookie, value, options) {
    const cookie = typeof nameOrCookie === "object" ? nameOrCookie : { ...options, name: nameOrCookie, value };
    this.#headers.append("set-cookie", serializeCookie(cookie));
    return this;
  }
  delete(name) {
    return this.set(name, "", { path: "/", maxAge: 0 });
  }
}

export class NextRequest extends Request {
  constructor(input, init) {
    super(input, init);
    const nextUrl = new URL(this.url);
    nextUrl.clone = () => new URL(nextUrl);
    this.nextUrl = nextUrl;
    this.cookies = new RequestCookies(this.headers);
  }
}

export class NextResponse extends Response {
  constructor(body, init) {
    super(body, init);
    this.cookies = new ResponseCookies(this.headers);
  }

  static json(body, init = {}) {
    const headers = new Headers(init.headers);
    if (!headers.has("content-type")) headers.set("content-type", "application/json");
    return new NextResponse(JSON.stringify(body), { ...init, headers });
  }

  static redirect(url, init) {
    const status = typeof init === "number" ? init : (init?.status ?? 307);
    const headers = new Headers(typeof init === "object" ? init.headers : undefined);
    headers.set("location", String(url));
    return new NextResponse(null, { status, headers });
  }

  // Sens « laisser passer » du middleware : le Worker d'entrée ne s'en sert
  // pas, mais l'export doit exister pour les modules qui l'importent.
  static next(init) {
    const headers = new Headers(init?.headers);
    headers.set("x-middleware-next", "1");
    return new NextResponse(null, { ...init, headers });
  }
}
