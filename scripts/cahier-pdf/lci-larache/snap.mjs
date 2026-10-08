// Rend des pages d'un PDF en PNG (pdf.js dans Edge headless) pour relecture visuelle.
// node snap.mjs file.pdf outdir 1,2,8
import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import os from "node:os";

const [pdf, outDir, list] = process.argv.slice(2);
const pagesWanted = list.split(",").map(Number);
fs.mkdirSync(outDir, { recursive: true });
const EDGE = "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";
const port = 9800 + Math.floor(Math.random() * 100);
const profile = fs.mkdtempSync(path.join(os.tmpdir(), "edgesnap-"));
const viewer = path.join(path.dirname(path.resolve(pdf)), "_viewer.html");
const b64 = fs.readFileSync(pdf).toString("base64");
fs.writeFileSync(viewer, `<!doctype html><html><body style="margin:0;background:#888">
<canvas id="c"></canvas>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
<script>
pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
const data = Uint8Array.from(atob("${b64}"), c => c.charCodeAt(0));
window.doc = pdfjsLib.getDocument({ data }).promise;
window.show = async (n) => {
  const d = await window.doc; const p = await d.getPage(n);
  const v = p.getViewport({ scale: 1.6 }); const c = document.getElementById("c");
  c.width = v.width; c.height = v.height;
  await p.render({ canvasContext: c.getContext("2d"), viewport: v }).promise;
  return [v.width, v.height, d.numPages];
};
</script></body></html>`);
const proc = spawn(EDGE, ["--headless=new", `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`, "--no-first-run", "about:blank"], { stdio: "ignore" });
try {
  let wsUrl;
  for (let i = 0; i < 60 && !wsUrl; i++) {
    await new Promise((r) => setTimeout(r, 250));
    try { wsUrl = (await (await fetch(`http://127.0.0.1:${port}/json/list`)).json()).find((t) => t.type === "page")?.webSocketDebuggerUrl; } catch {}
  }
  const ws = new WebSocket(wsUrl);
  await new Promise((r) => (ws.onopen = r));
  let id = 0; const pend = new Map();
  ws.onmessage = (m) => { const d = JSON.parse(m.data); if (d.id) { pend.get(d.id)?.(d); pend.delete(d.id); } };
  const send = (method, params = {}) => new Promise((r, j) => { const i = ++id; pend.set(i, (d) => (d.error ? j(new Error(d.error.message)) : r(d.result))); ws.send(JSON.stringify({ id: i, method, params })); });
  await send("Page.enable");
  await send("Page.navigate", { url: "file:///" + viewer.replace(/\\/g, "/") });
  await new Promise((r) => setTimeout(r, 3000));
  for (const n of pagesWanted) {
    const r = await send("Runtime.evaluate", { expression: `window.show(${n})`, awaitPromise: true, returnByValue: true });
    const [w, h] = r.result.value;
    await send("Emulation.setDeviceMetricsOverride", { width: Math.ceil(w), height: Math.ceil(h), deviceScaleFactor: 1, mobile: false });
    const shot = await send("Page.captureScreenshot", { format: "png", clip: { x: 0, y: 0, width: w, height: h, scale: 1 } });
    fs.writeFileSync(path.join(outDir, `p${n}.png`), Buffer.from(shot.data, "base64"));
  }
  ws.close();
} finally { proc.kill(); fs.rmSync(viewer, { force: true }); }
