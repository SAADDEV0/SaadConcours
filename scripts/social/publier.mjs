// Publication automatique sur Instagram et Facebook : carrousels « extrait »
// des concours, et posts à une image pour les cahiers, les cours et les articles.
//
// Lancé par .github/workflows/social-publish.yml, en deux temps :
//   node publier.mjs prepare   lit la file (KV), dessine les images en JPEG
//                              dans .social/out/ et écrit .social/plan.json ;
//   (le workflow pousse .social/out/ sur la branche « social-media ») ;
//   node publier.mjs publish   envoie chaque carrousel à Meta et note le
//                              résultat dans la file.
//
// Rien ne passe par Cloudflare : la file est dans Upstash (le même KV que
// l'admin), les images sont servies par raw.githubusercontent.com (Instagram
// exige une adresse publique) et le dessin se fait sur le runner GitHub, avec
// le même code que l'aperçu du Studio social (carousel.js).
//
// Script source avec alias « @/… » : il est empaqueté par esbuild avant
// d'être lancé (voir le workflow). En local, pour juste dessiner :
//   node .social/publier.mjs render <id-du-concours> [scan|enonce]

import fs from "node:fs";
import path from "node:path";
import { createCanvas, GlobalFonts, loadImage } from "@napi-rs/canvas";
// mathjax-full reste hors du paquet esbuild (--external, comme @napi-rs/canvas) :
// son code CommonJS se détecte avec eval("require"), qui casse en ESM.
import { mathjax } from "mathjax-full/js/mathjax.js";
import { TeX } from "mathjax-full/js/input/tex.js";
import { SVG } from "mathjax-full/js/output/svg.js";
import { liteAdaptor } from "mathjax-full/js/adaptors/liteAdaptor.js";
import { RegisterHTMLHandler } from "mathjax-full/js/handlers/html.js";
import { AllPackages } from "mathjax-full/js/input/tex/AllPackages.js";
import { buildCarousel, mathSpans, mathSvgEntry, scanPaths, sourceFor } from "@/app/admin/_features/social/carousel";
import { wrapAccentedMathWords } from "@/app/_shared/latexPlainText";
import { carouselCaption, factsFor, linkCaption, trackedUrl } from "@/app/admin/_features/social/captions";
import { FORMATS, drawVisual, resolveTheme } from "@/app/admin/_features/social/visual";
import { DESIGNS_KEY, DONE_KEY, HORIZON_MS, KEEP_PUBLISHED_MS, LIGHT_AFTER_MS, RESERVE_KEY, ROBOT_KINDS, contentKey, designKey, parseMember, reserveMember } from "@/lib/socialReserve.mjs";

const KEY = "admin:social:plan";
const ROOT = ".social";
const OUT = path.join(ROOT, "out");
const PLAN = path.join(ROOT, "plan.json");
const BRANCH = "social-media";
// Carrousels par passage : au-delà, ils partent au passage suivant.
const MAX_ITEMS = 10;
// META_GRAPH_BASE : seulement pour les tests (faux serveur local).
const GRAPH = `${process.env.META_GRAPH_BASE || "https://graph.facebook.com"}/${process.env.META_GRAPH_VERSION || "v23.0"}`;

const env = (k) => process.env[k] || "";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const log = (...a) => console.log(...a);

/* ------------------------------ File (Upstash) ------------------------------ */

async function kv(...command) {
  const res = await fetch(env("KV_REST_API_URL"), {
    method: "POST",
    headers: { Authorization: `Bearer ${env("KV_REST_API_TOKEN")}` },
    body: JSON.stringify(command),
  });
  const j = await res.json().catch(() => ({}));
  if (!res.ok || j.error) throw new Error(`Upstash : ${j.error || res.status}`);
  return j.result;
}

async function readQueue() {
  let v = await kv("GET", KEY);
  // L'admin écrit un tableau JSON ; selon le client, il revient en texte.
  for (let i = 0; i < 2 && typeof v === "string"; i++) v = JSON.parse(v);
  return Array.isArray(v) ? v : [];
}

// Relit la file juste avant d'écrire : l'admin a pu la modifier entre-temps.
async function patchQueue(id, patch) {
  const all = await readQueue();
  const next = all.map((e) => (e.id === id ? { ...e, ...patch } : e));
  await kv("SET", KEY, JSON.stringify(next));
}

const PLATFORMS = ["instagram", "facebook"];
const isDue = (e, now) => e.auto === true && e.status === "planned" && ROBOT_KINDS.includes(e.kind) && PLATFORMS.includes(e.platform) && Date.parse(e.date) <= now + 2 * 60000;

/* ------------------------------ Rangement ------------------------------ */

const titleOf = (kind, c) => {
  if (kind === "boutique") return c.titre;
  if (kind === "cours") return c.module;
  if (kind === "blog") return c.title;
  const mark = c.niveau === "master_droit" ? "⚖️ · " : c.niveau === "licence_excellence" ? "⭐ · " : "";
  return `${mark}${c.etablissement} · ${c.annee}`;
};

// Garde la file du Studio légère (voir lib/socialReserve.mjs) : ce qui est
// loin va dans la réserve, ce qui est vieux dans DONE_KEY, et ce qui approche
// revient de la réserve. Les écritures vont de la copie vers l'effacement :
// un passage coupé en route laisse un doublon évité au suivant, jamais un trou.
async function ranger(content, now = Date.now()) {
  const all = await readQueue();
  const keep = [];
  const far = new Map();
  const old = [];
  let changed = false;
  for (const e of all) {
    const t = Date.parse(e.date);
    if (e.auto === true && e.status === "planned" && !e.caption && ROBOT_KINDS.includes(e.kind) && t > now + HORIZON_MS) {
      far.set(reserveMember(e), { score: t, design: e.design });
    } else if (e.status === "published" && PLATFORMS.includes(e.platform) && t < now - KEEP_PUBLISHED_MS) {
      old.push(e);
    } else if (e.status === "published" && e.caption && t < now - LIGHT_AFTER_MS) {
      keep.push({ ...e, caption: "" });
      changed = true;
    } else keep.push(e);
  }

  if (far.size) {
    const designs = [...far.values()].flatMap((r) => [designKey(r.design), JSON.stringify(r.design || {})]);
    await kv("HSET", DESIGNS_KEY, ...designs);
    await kv("ZADD", RESERVE_KEY, ...[...far].flatMap(([member, r]) => [r.score, member]));
  }
  if (old.length) {
    const done = {};
    const seen = await kv("HGETALL", DONE_KEY);
    for (let i = 0; i < (seen || []).length; i += 2) done[seen[i]] = seen[i + 1];
    const fields = new Set();
    for (const e of old) {
      const key = contentKey(e.kind, e.itemId);
      const [date = "", nets = ""] = String(done[key] || "").split("|");
      const net = e.platform === "instagram" ? "I" : "F";
      done[key] = `${e.date > date ? e.date : date}|${nets.includes(net) ? nets : nets + net}`;
      fields.add(key);
    }
    await kv("HSET", DONE_KEY, ...[...fields].flatMap((k) => [k, done[k]]));
  }

  const raw = await kv("ZRANGEBYSCORE", RESERVE_KEY, "-inf", String(now + HORIZON_MS), "WITHSCORES");
  const back = [];
  for (let i = 0; i < (raw || []).length; i += 2) back.push({ member: raw[i], date: new Date(Number(raw[i + 1])).toISOString(), ...parseMember(raw[i]) });
  const designs = new Map();
  for (const [k, row] of back.entries()) {
    if (!designs.has(row.design)) {
      const json = await kv("HGET", DESIGNS_KEY, row.design);
      designs.set(row.design, json ? JSON.parse(json) : {});
    }
    const item = content[row.kind]?.find((c) => c.id === row.itemId);
    for (const platform of PLATFORMS) {
      if (keep.some((e) => e.status === "planned" && e.kind === row.kind && e.itemId === row.itemId && e.platform === platform)) continue;
      keep.push({
        id: `r${now.toString(36)}${k.toString(36)}${platform[0]}`,
        kind: row.kind,
        itemId: row.itemId,
        title: item ? titleOf(row.kind, item) : row.itemId,
        platform,
        status: "planned",
        date: row.date,
        caption: "",
        url: `https://www.saadconcours.space/${row.kind}/${encodeURIComponent(row.itemId)}?utm_source=${platform}&utm_medium=social&utm_campaign=${row.kind}`,
        note: "Publication automatique",
        auto: true,
        theme: row.theme,
        result: "",
        design: designs.get(row.design),
      });
    }
  }

  if (far.size || old.length || back.length || changed) await kv("SET", KEY, JSON.stringify(keep));
  if (back.length) await kv("ZREM", RESERVE_KEY, ...back.map((r) => r.member));
  if (far.size || old.length || back.length) log(`Rangement : ${far.size} vers la réserve, ${back.length} depuis la réserve, ${old.length} archivées.`);
}

/* ------------------------------ Dessin ------------------------------ */

function loadFonts() {
  for (const dir of ["/usr/share/fonts", "C:\\Windows\\Fonts"]) if (fs.existsSync(dir)) GlobalFonts.loadFontsFromDir(dir);
}

const readJson = (name) => JSON.parse(fs.readFileSync(`public/data/${name}.json`, "utf8"));

function loadContent() {
  const dir = "public/data/corriges";
  const corrigeFiles = new Set(fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => f.endsWith(".md")).map((f) => f.slice(0, -3)) : []);
  return { concours: readJson("concours"), boutique: readJson("boutique"), cours: readJson("cours"), blog: readJson("blog"), corrigeFiles };
}

// Contenu encore en ligne : un article fusionné n'a plus de page.
function findItem(content, kind, id) {
  const item = content[kind]?.find((c) => c.id === id);
  if (!item || item.statut === "brouillon" || item.available === false || item.fusion) return null;
  return kind !== "concours" || sourceFor(item) ? item : null;
}

// Pages scannées du sujet. Le workflow n'extrait pas public/images (trop
// lourd) : on prend le fichier sur le disque s'il est là (rendu local), sinon
// sur raw.githubusercontent.com, branche main. Une page illisible est sautée.
async function scanBytes(p) {
  const local = path.join("public", p);
  if (fs.existsSync(local)) return fs.readFileSync(local);
  const repo = env("GITHUB_REPOSITORY") || "SAADDEV0/SaadConcours";
  const url = `https://raw.githubusercontent.com/${repo}/main/public/${p.split("/").map(encodeURIComponent).join("/")}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

async function loadScans(item, style) {
  if (sourceFor(item, style) !== "scan") return [];
  const out = [];
  for (const p of scanPaths(item, style)) {
    try {
      out.push(await loadImage(await scanBytes(p)));
    } catch (err) {
      log(`  scan illisible : ${p} (${err.message})`);
    }
  }
  return out;
}

// Formules de l'énoncé : MathJax (le même moteur que le Studio, dans le
// navigateur) les compose en SVG, que @napi-rs/canvas charge comme images.
// Une formule en erreur est laissée de côté : elle s'écrit en texte brut.
let mathDoc = null;
let mathAdaptor = null;
function texToSvg(tex, display) {
  if (!mathDoc) {
    mathAdaptor = liteAdaptor();
    RegisterHTMLHandler(mathAdaptor);
    mathDoc = mathjax.document("", { InputJax: new TeX({ packages: AllPackages }), OutputJax: new SVG({ fontCache: "none" }) });
  }
  const html = mathAdaptor.outerHTML(mathDoc.convert(wrapAccentedMathWords(tex), { display }));
  if (/data-mjx-error|<merror|mjx-merror/.test(html)) return null;
  const start = html.indexOf("<svg");
  const end = html.lastIndexOf("</svg>");
  return start < 0 || end < 0 ? null : html.slice(start, end + 6);
}

async function loadMath(item, style) {
  if (sourceFor(item, style) !== "enonce") return null;
  const map = new Map();
  for (const { key, tex, display } of mathSpans(item.enonce_md)) {
    try {
      const svg = texToSvg(tex, display);
      const entry = svg && mathSvgEntry(svg);
      if (entry) map.set(key, { ...entry, img: await loadImage(Buffer.from(entry.svg)) });
    } catch (err) {
      log(`  formule en texte brut : ${tex.slice(0, 60)} (${err.message})`);
    }
  }
  return map;
}

// design : réglages du Studio envoyés avec la publication (style, textes de
// l'affiche retouchés, ton, hashtags), pour dessiner exactement l'aperçu.
async function renderItem(item, { themeKey, design = {}, corrigeFiles }, dir) {
  const theme = resolveTheme(themeKey, design.style);
  const scans = await loadScans(item, design.style);
  const math = await loadMath(item, design.style);
  const hasCorrige = Boolean(item.corrige_md) || corrigeFiles.has(item.id);
  const { bullets, ...facts } = design.facts || {};
  const built = buildCarousel(item, {
    theme,
    style: design.style,
    facts: { ...factsFor("concours", item, { corrigeFiles }), ...facts },
    ctaOverride: facts.cta,
    bulletsOverride: Array.isArray(bullets) ? bullets : undefined,
    hasCorrige,
    scans,
    math,
    createCanvas: () => createCanvas(1, 1),
  });
  fs.mkdirSync(dir, { recursive: true });
  const files = [];
  for (let k = 0; k < built.canvases.length; k++) {
    // JPEG : le seul format qu'accepte l'API Instagram.
    const name = `${String(k + 1).padStart(2, "0")}.jpg`;
    fs.writeFileSync(path.join(dir, name), await built.canvases[k].encode("jpeg", 92));
    files.push(name);
  }
  return { files, truncated: built.truncated, scan: built.source === "scan" };
}

// Post à une image. Cahier : l'affiche validée de la boutique (1080 × 1440),
// ramenée au 4:5 qu'exige Instagram, sur la couleur de son propre fond, sans
// rien couper. Cours et article : le visuel du Studio.
async function renderSingle(kind, item, { themeKey, design = {} }, dir) {
  const { w, h } = FORMATS.find((f) => f.key === "portrait");
  const canvas = createCanvas(w, h);
  if (kind === "boutique") {
    const cover = await loadImage(await scanBytes(item.couverture));
    const ctx = canvas.getContext("2d");
    const sample = createCanvas(1, 1).getContext("2d");
    sample.drawImage(cover, 0, 0, 1, 1, 0, 0, 1, 1);
    const [r, g, b] = sample.getImageData(0, 0, 1, 1).data;
    ctx.fillStyle = `rgb(${r},${g},${b})`;
    ctx.fillRect(0, 0, w, h);
    const scale = Math.min(w / cover.width, h / cover.height);
    const dw = cover.width * scale;
    ctx.drawImage(cover, (w - dw) / 2, 0, dw, cover.height * scale);
  } else {
    drawVisual(canvas, { format: { w, h }, theme: resolveTheme(themeKey, design.style), facts: factsFor(kind, item), style: design.style });
  }
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "01.jpg"), await canvas.encode("jpeg", 92));
  return { files: ["01.jpg"] };
}

const COMMENTS = {
  concours: "Le corrigé détaillé ici 👉",
  boutique: "Le cahier est ici 👉",
  cours: "Le cours complet et gratuit ici 👉",
  blog: "L'article complet ici 👉",
};

const safe = (id) => String(id).replace(/[^A-Za-z0-9_-]/g, "_").slice(0, 100);

async function prepare() {
  fs.rmSync(ROOT + "/out", { recursive: true, force: true });
  fs.mkdirSync(OUT, { recursive: true });
  const now = Date.now();
  const content = loadContent();
  await ranger(content, now);
  const due = (await readQueue()).filter((e) => isDue(e, now)).sort((a, b) => String(a.date).localeCompare(String(b.date)));
  const groups = [];
  for (const e of due) {
    let g = groups.find((x) => x.kind === e.kind && x.itemId === e.itemId);
    if (!g) {
      if (groups.length >= MAX_ITEMS) continue;
      groups.push((g = { kind: e.kind, itemId: e.itemId, theme: e.theme, design: e.design || {}, entries: [] }));
    }
    g.entries.push(e);
  }
  const plan = { run: env("GITHUB_RUN_ID") || String(now), items: [] };
  if (!groups.length) {
    fs.writeFileSync(PLAN, JSON.stringify(plan));
    log("Rien à publier.");
    return;
  }

  loadFonts();
  const { corrigeFiles } = content;
  for (const g of groups) {
    const item = findItem(content, g.kind, g.itemId);
    if (!item || (g.kind === "concours" && !sourceFor(item, g.design.style))) {
      for (const e of g.entries) await patchQueue(e.id, { status: "failed", result: "Contenu introuvable, retiré du site, ou sans énoncé ni scan." });
      continue;
    }
    const dir = `${plan.run}/${g.kind}-${safe(item.id)}`;
    const opts = { tone: g.design.tone, tags: g.design.tags, outro: g.design.outro, ctx: { corrigeFiles } };
    try {
      const single = g.kind !== "concours";
      const { files, truncated, scan } = single
        ? await renderSingle(g.kind, item, { themeKey: g.theme, design: g.design }, path.join(OUT, dir))
        : await renderItem(item, { themeKey: g.theme, design: g.design, corrigeFiles }, path.join(OUT, dir));
      plan.items.push({
        itemId: item.id,
        dir,
        files,
        comment: `${COMMENTS[g.kind]} ${trackedUrl(g.kind, item, "facebook")}`,
        entries: g.entries.map((e) => ({ id: e.id, platform: e.platform, caption: e.caption || (single ? linkCaption(e.platform, g.kind, item, opts) : carouselCaption(e.platform, item, { ...opts, truncated, scan })) })),
      });
      log(`Prêt : ${g.kind} ${item.id} (${files.length} image${files.length > 1 ? "s" : ""})`);
    } catch (err) {
      for (const e of g.entries) await patchQueue(e.id, { status: "failed", result: `Dessin impossible : ${err.message}`.slice(0, 300) });
      log(`ÉCHEC du dessin : ${item.id} : ${err.message}`);
    }
  }
  fs.writeFileSync(PLAN, JSON.stringify(plan, null, 2));
}

/* ------------------------------ Meta ------------------------------ */

async function graph(pathname, params = {}, { method = "POST" } = {}) {
  const url = new URL(GRAPH + pathname);
  let body;
  if (params instanceof FormData) {
    body = params;
    body.set("access_token", env("META_PAGE_TOKEN"));
  } else if (method === "GET") {
    for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v);
    url.searchParams.set("access_token", env("META_PAGE_TOKEN"));
  } else {
    body = new URLSearchParams({ ...params, access_token: env("META_PAGE_TOKEN") });
  }
  const res = await fetch(url, { method, body });
  const j = await res.json().catch(() => ({}));
  if (!res.ok || j.error) throw new Error(`${pathname.split("/").pop()} : ${j.error?.error_user_msg || j.error?.message || `HTTP ${res.status}`}`);
  return j;
}

async function instagramUserId() {
  if (env("META_IG_USER_ID")) return env("META_IG_USER_ID");
  const j = await graph(`/${env("META_PAGE_ID")}`, { fields: "instagram_business_account" }, { method: "GET" });
  if (!j.instagram_business_account?.id) throw new Error("Aucun compte Instagram professionnel relié à la Page Facebook.");
  return j.instagram_business_account.id;
}

// Instagram traite chaque image avant d'accepter la publication.
async function waitReady(containerId) {
  for (let i = 0; i < 40; i++) {
    const { status_code: s } = await graph(`/${containerId}`, { fields: "status_code" }, { method: "GET" });
    if (s === "FINISHED") return;
    if (s === "ERROR" || s === "EXPIRED") throw new Error(`Instagram a refusé le média (${s}).`);
    await sleep(3000);
  }
  throw new Error("Instagram n'a pas fini de traiter les images à temps.");
}

async function publishInstagram(igId, item, caption, rawBase) {
  // Instagram refuse un carrousel d'une seule image.
  if (item.files.length === 1) {
    const media = await graph(`/${igId}/media`, { image_url: `${rawBase}/${item.dir}/${item.files[0]}`, caption });
    await waitReady(media.id);
    const post = await graph(`/${igId}/media_publish`, { creation_id: media.id });
    return `instagram:${post.id}`;
  }
  const children = [];
  for (const f of item.files) {
    const c = await graph(`/${igId}/media`, { image_url: `${rawBase}/${item.dir}/${f}`, is_carousel_item: "true" });
    children.push(c.id);
  }
  for (const id of children) await waitReady(id);
  const carousel = await graph(`/${igId}/media`, { media_type: "CAROUSEL", children: children.join(","), caption });
  await waitReady(carousel.id);
  const post = await graph(`/${igId}/media_publish`, { creation_id: carousel.id });
  return `instagram:${post.id}`;
}

async function publishFacebook(item, caption) {
  const page = env("META_PAGE_ID");
  const photos = [];
  for (const f of item.files) {
    const form = new FormData();
    form.set("published", "false");
    form.set("source", new Blob([fs.readFileSync(path.join(OUT, item.dir, f))], { type: "image/jpeg" }), f);
    photos.push((await graph(`/${page}/photos`, form)).id);
  }
  const params = { message: caption };
  photos.forEach((id, i) => (params[`attached_media[${i}]`] = JSON.stringify({ media_fbid: id })));
  const post = await graph(`/${page}/feed`, params);
  // Le lien en premier commentaire : Facebook montre moins un post qui en contient un.
  try {
    await graph(`/${post.id}/comments`, { message: item.comment });
  } catch (err) {
    log(`  commentaire non posté : ${err.message}`);
  }
  return `facebook:${post.id}`;
}

async function publish() {
  const plan = fs.existsSync(PLAN) ? JSON.parse(fs.readFileSync(PLAN, "utf8")) : { items: [] };
  if (!plan.items.length) return log("Rien à publier.");
  const rawBase = `https://raw.githubusercontent.com/${env("GITHUB_REPOSITORY") || "SAADDEV0/SaadConcours"}/${BRANCH}`;
  let igId = null;
  let failures = 0;
  for (const item of plan.items) {
    for (const e of item.entries) {
      try {
        let result;
        if (e.platform === "instagram") {
          igId ||= await instagramUserId();
          result = await publishInstagram(igId, item, e.caption, rawBase);
        } else {
          result = await publishFacebook(item, e.caption);
        }
        // Les réglages ne servent plus une fois publié : la file reste légère.
        await patchQueue(e.id, { status: "published", date: new Date().toISOString(), result, caption: e.caption, design: undefined });
        log(`Publié : ${item.itemId} sur ${e.platform} (${result})`);
      } catch (err) {
        failures++;
        await patchQueue(e.id, { status: "failed", result: err.message.slice(0, 300) });
        log(`ÉCHEC : ${item.itemId} sur ${e.platform} : ${err.message}`);
      }
    }
  }
  // Le workflow passe au rouge : l'échec se voit dans l'onglet Actions.
  if (failures) process.exitCode = 1;
}

/* ------------------------------ Entrée ------------------------------ */

// render <id> [scan|enonce], ou render boutique:<id> (cours:<id>, blog:<id>).
async function renderOnly(ref, arg2) {
  loadFonts();
  const content = loadContent();
  const [kind, id] = ref.includes(":") ? ref.split(":") : ["concours", ref];
  const item = findItem(content, kind, id);
  if (!item) throw new Error(`Contenu introuvable : ${ref}`);
  const dir = path.join(OUT, "local", safe(id));
  if (kind !== "concours") {
    const design = { style: { pattern: "vagues", titleSize: "l" } };
    await renderSingle(kind, item, { themeKey: "brand", design }, dir);
    log(`Image dans ${dir}\n\n${linkCaption("instagram", kind, item, { tone: "question" })}`);
    return;
  }
  const design = arg2 ? { style: { source: arg2 } } : {};
  const { files, truncated, scan } = await renderItem(item, { themeKey: "brand", design, corrigeFiles: content.corrigeFiles }, dir);
  log(`${files.length} images dans ${dir} (${scan ? "scans" : "énoncé"}${truncated ? ", sujet coupé" : ""})`);
}

const [cmd, arg, arg2] = process.argv.slice(2);
const missing = (keys) => keys.filter((k) => !env(k));
try {
  if (cmd === "render") await renderOnly(arg, arg2);
  else if (cmd === "prepare" || cmd === "publish") {
    const need = cmd === "prepare" ? ["KV_REST_API_URL", "KV_REST_API_TOKEN"] : ["KV_REST_API_URL", "KV_REST_API_TOKEN", "META_PAGE_ID", "META_PAGE_TOKEN"];
    if (missing(need).length) throw new Error(`Secrets GitHub manquants : ${missing(need).join(", ")}`);
    await (cmd === "prepare" ? prepare() : publish());
  } else throw new Error("Usage : publier.mjs prepare | publish | render <id> [scan|enonce] | render <kind>:<id>");
} catch (err) {
  console.error(err.message);
  process.exitCode = 1;
}
