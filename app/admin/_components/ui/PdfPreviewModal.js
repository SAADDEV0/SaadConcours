"use client";

import { useEffect, useRef, useState } from "react";
import Modal from "./Modal";

// pdf.js, loaded lazily from a CDN the first time a preview is opened — kept
// out of app/layout.js's global script list since only admins previewing a
// PDF ever need it, not every site visitor.
const PDFJS_VERSION = "3.11.174";
const PDFJS_SRC = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${PDFJS_VERSION}/legacy/build/pdf.min.js`;
const PDFJS_WORKER_SRC = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${PDFJS_VERSION}/legacy/build/pdf.worker.min.js`;

let pdfjsLoadPromise = null;
function loadPdfJs() {
  if (window.pdfjsLib) return Promise.resolve(window.pdfjsLib);
  if (!pdfjsLoadPromise) {
    pdfjsLoadPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = PDFJS_SRC;
      script.onload = () => {
        window.pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS_WORKER_SRC;
        resolve(window.pdfjsLib);
      };
      script.onerror = () => {
        pdfjsLoadPromise = null; // let a later retry re-attempt the script load
        reject(new Error("pdfjs failed to load"));
      };
      document.head.appendChild(script);
    });
  }
  return pdfjsLoadPromise;
}

// Renders a jsPDF-generated blob: URL as real, scrollable page images.
// Deliberately not a plain <iframe src={url}> — plenty of browsers and
// embedded webviews (in-app browsers, sandboxed preview panes, some mobile
// contexts) ship without a built-in PDF plugin, and silently render an
// iframe'd PDF as a blank rectangle with no error to react to. Drawing each
// page to a <canvas> with pdf.js instead works identically everywhere a
// <canvas> does, which is everywhere.
export default function PdfPreviewModal({ url, title = "Aperçu PDF", onClose }) {
  const containerRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | loading | done | error
  const renderTokenRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!url || !container) return;
    const token = ++renderTokenRef.current;
    container.innerHTML = "";
    setStatus("loading");

    let cancelled = false;
    (async () => {
      try {
        const pdfjsLib = await loadPdfJs();
        const pdf = await pdfjsLib.getDocument(url).promise;
        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
          if (cancelled || renderTokenRef.current !== token) return;
          const page = await pdf.getPage(pageNum);
          const viewport = page.getViewport({ scale: 1.5 });
          const canvas = document.createElement("canvas");
          canvas.className = "pdf-preview-page";
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          await page.render({ canvasContext: canvas.getContext("2d"), viewport }).promise;
          if (cancelled || renderTokenRef.current !== token) return;
          container.appendChild(canvas);
        }
        if (!cancelled && renderTokenRef.current === token) setStatus("done");
      } catch {
        if (!cancelled && renderTokenRef.current === token) setStatus("error");
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [url]);

  return (
    <Modal open={Boolean(url)} onClose={onClose} labelledBy="pdf-preview-title">
      <div className="pdf-preview-modal">
        <div className="pdf-preview-modal-header">
          <h2 className="admin-modal-title" id="pdf-preview-title" style={{ margin: 0 }}>
            {title}
          </h2>
          <button type="button" className="admin-btn secondary" onClick={onClose}>
            Fermer
          </button>
        </div>
        <div className="pdf-preview-modal-body">
          {status === "loading" && <div className="admin-image-hint">Génération de l'aperçu...</div>}
          {status === "error" && <div className="admin-error">Impossible d'afficher l'aperçu PDF.</div>}
          <div className="pdf-preview-modal-frame" ref={containerRef} />
        </div>
      </div>
    </Modal>
  );
}
