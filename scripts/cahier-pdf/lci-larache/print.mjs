// Imprime un fichier HTML en PDF via Edge headless (protocole DevTools).
// usage : node print.mjs in.html out.pdf
import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import os from "node:os";

const EDGE = "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";

export async function printPdf(htmlFile, pdfFile, { headerTemplate, footerTemplate } = {}) {
  const port = 9300 + Math.floor(Math.random() * 500);
  const profile = fs.mkdtempSync(path.join(os.tmpdir(), "edgepdf-"));
  const proc = spawn(EDGE, [
    "--headless=new", `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`,
    "--no-first-run", "--disable-gpu", "about:blank",
  ], { stdio: "ignore" });
  try {
    let wsUrl;
    for (let i = 0; i < 60 && !wsUrl; i++) {
      await new Promise((r) => setTimeout(r, 250));
      try {
        const list = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json();
        wsUrl = list.find((t) => t.type === "page")?.webSocketDebuggerUrl;
      } catch { /* pas encore prêt */ }
    }
    if (!wsUrl) throw new Error("Edge ne répond pas");
    const ws = new WebSocket(wsUrl);
    await new Promise((r, j) => { ws.onopen = r; ws.onerror = j; });
    let id = 0;
    const pending = new Map();
    const events = [];
    ws.onmessage = (m) => {
      const d = JSON.parse(m.data);
      if (d.id && pending.has(d.id)) { pending.get(d.id)(d); pending.delete(d.id); }
      else if (d.method) events.push(d);
    };
    const send = (method, params = {}) => new Promise((r, j) => {
      const i = ++id;
      pending.set(i, (d) => (d.error ? j(new Error(method + ": " + d.error.message)) : r(d.result)));
      ws.send(JSON.stringify({ id: i, method, params }));
    });
    await send("Page.enable");
    await send("Runtime.enable");
    const url = "file:///" + path.resolve(htmlFile).replace(/\\/g, "/");
    await send("Page.navigate", { url });
    // attendre que la page signale la fin du rendu (KaTeX)
    for (let i = 0; i < 120; i++) {
      await new Promise((r) => setTimeout(r, 250));
      const r = await send("Runtime.evaluate", { expression: "window.__ready === true", returnByValue: true });
      if (r.result.value) break;
      if (i === 119) throw new Error("rendu non terminé (window.__ready)");
    }
    const errs = await send("Runtime.evaluate", { expression: "JSON.stringify(window.__errors || [])", returnByValue: true });
    if (errs.result.value !== "[]") console.warn("Erreurs de rendu :", errs.result.value);
    const res = await send("Page.printToPDF", {
      printBackground: true,
      preferCSSPageSize: true,
      displayHeaderFooter: Boolean(headerTemplate || footerTemplate),
      headerTemplate: headerTemplate || "<span></span>",
      footerTemplate: footerTemplate || "<span></span>",
      generateDocumentOutline: true,
      generateTaggedPDF: true,
    });
    fs.writeFileSync(pdfFile, Buffer.from(res.data, "base64"));
    ws.close();
  } finally {
    proc.kill();
    await new Promise((r) => setTimeout(r, 500));
    try { fs.rmSync(profile, { recursive: true, force: true }); } catch { /* verrou Edge */ }
  }
}
