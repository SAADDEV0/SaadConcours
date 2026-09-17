// On-demand loader for the PDF export toolchain (jsPDF, jsPDF-AutoTable,
// svg2pdf.js, MathJax, marked). These used to sit as <Script
// strategy="afterInteractive"> tags in the root layout — meaning every
// single page paid for ~250KB+ of PDF/typesetting JS on load, including
// every listing page, the blog, /news, /faq, and all of /admin, even though
// the code that actually uses these globals only ever runs after a click on
// a "Télécharger PDF" / "Aperçu PDF" button. The admin PDF buttons already
// had a defensive `if (!window.jspdf) setErr("...réessaie dans quelques
// secondes")` check for exactly this reason — proof the eager global load
// was never actually guaranteeing availability by the time it was needed,
// just usually winning the race. Loading on the click itself removes both
// the race and the sitewide weight.
//
// Every ensure* function is idempotent and safe to call from multiple
// simultaneous click handlers — loadScript() caches in-flight and completed
// loads by URL so a script is only ever fetched once per page.

const JSPDF_URL = "https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js";
const AUTOTABLE_URL = "https://cdn.jsdelivr.net/npm/jspdf-autotable@3.8.2/dist/jspdf.plugin.autotable.min.js";
const SVG2PDF_URL = "https://cdn.jsdelivr.net/npm/svg2pdf.js@2.2.3/dist/svg2pdf.umd.min.js";
const MATHJAX_URL = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js";
const MARKED_URL = "https://cdn.jsdelivr.net/npm/marked@11.1.1/marked.min.js";

const cache = new Map();

function loadScript(src) {
  if (cache.has(src)) return cache.get(src);
  const promise = new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      if (existing.dataset.scLoaded === "1") {
        resolve();
        return;
      }
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error(`Échec de chargement : ${src}`)));
      return;
    }
    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    s.onload = () => {
      s.dataset.scLoaded = "1";
      resolve();
    };
    s.onerror = () => reject(new Error(`Échec de chargement : ${src}`));
    document.head.appendChild(s);
  });
  cache.set(src, promise);
  return promise;
}

// jsPDF must resolve before AutoTable (it patches jsPDF.API.autoTable onto
// the already-loaded library) — sequential, not Promise.all.
async function ensureJsPDF() {
  await loadScript(JSPDF_URL);
  await loadScript(AUTOTABLE_URL);
  return window.jspdf;
}

// Same ordering requirement as AutoTable: svg2pdf.js patches jsPDF.API.svg,
// so jsPDF has to already be on the page.
async function ensureSvg2Pdf() {
  await ensureJsPDF();
  await loadScript(SVG2PDF_URL);
}

// The MathJax startup config has to exist on window before tex-svg.js
// itself runs (that's what "beforeInteractive" guaranteed previously) — set
// it synchronously before kicking off the script load, not after.
function ensureMathJax() {
  if (!window.MathJax) {
    window.MathJax = { svg: { fontCache: "none" }, startup: { typeset: false } };
  }
  return loadScript(MATHJAX_URL);
}

function ensureMarked() {
  return loadScript(MARKED_URL);
}

// app/_shared/concoursPdf.js: jsPDF + AutoTable only (tables, no formulas
// typeset as vector paths, no markdown preview needed here).
export function ensureConcoursPdfScripts() {
  return ensureJsPDF();
}

// app/evaluation/[id]/EvaluationDetailClient.js: same as concours — math is
// converted to plain text (see latexPlainText.js) rather than typeset, so
// no MathJax/svg2pdf/marked needed.
export function ensureEvaluationPdfScripts() {
  return ensureJsPDF();
}

// app/_shared/coursPdf.js: the one PDF that actually typesets LaTeX as
// vector paths (MathJax -> SVG -> svg2pdf.js) and renders markdown tables,
// so it needs the full set. Used by the public cours download button and by
// every admin PDF preview (PdfStudio, CoursPdfPreviewButton) since they all
// call buildCoursPdf() under the hood.
export function ensureCoursPdfScripts() {
  return Promise.all([ensureSvg2Pdf(), ensureMathJax(), ensureMarked()]);
}

// app/admin/_components/fields/MarkdownEditor.js: live markdown preview
// while typing — only needs marked, and already degrades to plain text
// gracefully if it's not loaded yet, so this is a best-effort warmup on
// mount rather than something callers need to await.
export function ensureMarkedScript() {
  return ensureMarked();
}
