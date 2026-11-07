// WORKER D'ENTRÉE DE www.saadconcours.space (Worker « saad-concours »)
//
// POURQUOI IL EXISTE
//   Le plan gratuit accorde 10 ms de CPU par invocation et 128 Mo de mémoire
//   par isolate. Le Worker Next.js (OpenNext) pèse 19 Mo, dont 12 de contenu
//   de cours que le Worker ne sert jamais (les pages publiques sont des
//   assets). Le démarrer à froid dépasse ces limites : le 2026-11-07, une
//   requête sur trois vers /admin ou /api restait sans réponse plus de trois
//   minutes puis finissait en Error 1102 — y compris /api/admin/health sans
//   cookie, qui n'exécute presque rien. Ce n'était donc pas le code des
//   routes, mais le démarrage du bundle.
//
//   Ce Worker-ci ne contient que les routes de app/api (importées telles
//   quelles, `next/server` remplacé par worker/next-server.js) et la garde de
//   connexion : quelques centaines de Ko, qui démarrent en quelques ms.
//
// QUI SERT QUOI
//   - pages publiques, /_next/static, images, data : assets Cloudflare, avant
//     même ce Worker (inchangé) ;
//   - /api/*  : ici, sans Next.js ;
//   - /admin* : ici. Les pages de la console sont prérendues au build (ce
//     sont des coquilles client, les données passent par /api/admin/*) et
//     publiées dans les assets ; `run_worker_first` fait passer ces chemins
//     par ce Worker, qui vérifie la session avant de les servir ;
//   - le reste (404 hors console, images de partage opengraph-image) :
//     transmis au Worker Next.js « saad-concours-next » par la liaison de
//     service NEXT. Il n'a que GITHUB_TOKEN : rien qui exige une session ne
//     doit lui être transmis.
//
//   Les secrets (ADMIN_PASSWORD, GITHUB_TOKEN, KV_REST_API_*...) restent sur
//   ce Worker, qui garde le nom « saad-concours » : rien à reconfigurer.

import { NextRequest, NextResponse } from "next/server";
import { needsAuth, authorize, loginUrl } from "../lib/adminAuth";
import { routes } from "./.generated/api-routes.js";

const METHODS = ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"];

// Le code de lib/ lit process.env. Avec nodejs_compat et une date de
// compatibilité >= 2025-04-01, workerd le remplit déjà à partir des
// variables et secrets ; on le complète au cas où, sans rien écraser.
let envReady = false;
function populateProcessEnv(env) {
  if (envReady) return;
  envReady = true;
  for (const [key, value] of Object.entries(env)) {
    if (typeof value === "string" && process.env[key] === undefined) process.env[key] = value;
  }
}

function matchRoute(pathname) {
  const parts = pathname.split("/").filter(Boolean).map((s) => {
    try {
      return decodeURIComponent(s);
    } catch {
      return s;
    }
  });
  for (const route of routes) {
    const params = {};
    let ok = true;
    let i = 0;
    for (const seg of route.segments) {
      if (seg.startsWith("*")) {
        const rest = parts.slice(i);
        if (!rest.length && !seg.startsWith("*?")) ok = false;
        else if (rest.length) params[seg.replace(/^\*\??/, "")] = rest;
        i = parts.length;
        break;
      }
      if (i >= parts.length) {
        ok = false;
        break;
      }
      if (seg.startsWith(":")) params[seg.slice(1)] = parts[i];
      else if (seg !== parts[i]) {
        ok = false;
        break;
      }
      i++;
    }
    if (ok && i === parts.length) return { route, params };
  }
  return null;
}

// Next répond 308 vers l'adresse sans barre finale ; on garde ce comportement.
function trailingSlashRedirect(url) {
  if (url.pathname.length > 1 && url.pathname.endsWith("/")) {
    const to = new URL(url);
    to.pathname = url.pathname.replace(/\/+$/, "") || "/";
    return Response.redirect(to.toString(), 308);
  }
  return null;
}

async function handleApi(request, url) {
  const req = new NextRequest(request);

  if (needsAuth(url.pathname, request.method) && !(await authorize(req))) {
    return NextResponse.json({ error: "Session expirée : reconnecte-toi." }, { status: 401 });
  }

  const match = matchRoute(url.pathname);
  if (!match) return NextResponse.json({ error: "Route inconnue." }, { status: 404 });

  const mod = await match.route.load();
  const allow = METHODS.filter((m) => typeof mod[m] === "function" || (m === "HEAD" && mod.GET) || m === "OPTIONS");
  let handler = mod[request.method];
  if (!handler && request.method === "HEAD") handler = mod.GET;
  if (!handler && request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: { allow: allow.join(", ") } });
  }
  if (!handler) return new Response(null, { status: 405, headers: { allow: allow.join(", ") } });

  // Next 15+ passe params en promesse ; les propriétés sont aussi posées
  // dessus pour un éventuel accès direct.
  const params = Object.assign(Promise.resolve(match.params), match.params);
  try {
    const res = await handler(req, { params });
    if (!(res instanceof Response)) throw new Error(`${request.method} ${url.pathname} n'a pas renvoyé de Response`);
    if (request.method === "HEAD") return new Response(null, res);
    return res;
  } catch (err) {
    console.error(`${request.method} ${url.pathname}`, err);
    return NextResponse.json({ error: "Erreur interne du serveur." }, { status: 500 });
  }
}

const RSC_VARY = "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch";

async function handleAdmin(request, env, url) {
  if (request.method !== "GET" && request.method !== "HEAD") {
    return new Response(null, { status: 405, headers: { allow: "GET, HEAD" } });
  }

  // Tout ce qui commence par /admin exige une session, fichiers .rsc et
  // .html compris (/admin.rsc n'est pas une « page » pour isAdminPage) — sauf
  // la page de connexion elle-même.
  const req = new NextRequest(request);
  if (url.pathname !== "/admin/login" && !(await authorize(req))) {
    return NextResponse.redirect(loginUrl(req), 307);
  }

  // Navigation côté client de Next : la charge RSC prérendue (.rsc), ou un
  // segment pour un préchargement (.segments/...). Absente, Next retombe sur
  // une navigation complète : rien ne casse.
  const isRsc = request.headers.get("rsc") === "1";
  let assetPath = url.pathname;
  if (isRsc) {
    const segment = request.headers.get("next-router-segment-prefetch");
    assetPath = segment ? `${url.pathname}.segments${segment}.segment.rsc` : `${url.pathname}.rsc`;
  }

  const asset = await env.ASSETS.fetch(new Request(new URL(assetPath, url.origin), { method: request.method }));
  if (asset.status === 404) {
    // Page de console inconnue. Pas de renvoi au Worker Next.js : il n'a pas
    // le secret de session, son middleware renverrait vers la connexion en
    // boucle. La page 404 prérendue du site suffit.
    if (isRsc) return new Response(null, { status: 404, headers: { "cache-control": "no-store", vary: RSC_VARY } });
    const notFound = await env.ASSETS.fetch(new URL("/_not-found", url.origin));
    return new Response(notFound.ok ? notFound.body : "Page introuvable", {
      status: 404,
      headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store", "x-robots-tag": "noindex" },
    });
  }

  const headers = new Headers(asset.headers);
  headers.set("cache-control", "private, no-store");
  headers.set("x-robots-tag", "noindex, nofollow");
  if (isRsc) {
    // Mêmes en-têtes que Next pour une page prérendue (.meta du build).
    headers.set("content-type", "text/x-component");
    headers.set("vary", RSC_VARY);
    headers.set("x-nextjs-prerender", "1");
    headers.set("x-nextjs-stale-time", "300");
  }
  return new Response(asset.body, { status: asset.status, headers });
}

const worker = {
  async fetch(request, env) {
    populateProcessEnv(env);
    const url = new URL(request.url);
    const { pathname } = url;

    const isApi = pathname === "/api" || pathname.startsWith("/api/");
    const isAdmin = pathname === "/admin" || pathname.startsWith("/admin/") || pathname.startsWith("/admin.");

    if (isApi || isAdmin) {
      const redirect = trailingSlashRedirect(url);
      if (redirect) return redirect;
      return isApi ? handleApi(request, url) : handleAdmin(request, env, url);
    }

    // Tout ce que les assets n'ont pas servi : 404, images de partage...
    return env.NEXT.fetch(request);
  },
};

export default worker;
