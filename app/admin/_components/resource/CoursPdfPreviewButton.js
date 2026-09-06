"use client";

import { useState } from "react";
import PdfPreviewModal from "../ui/PdfPreviewModal";

// Generates the *actual* fiche-de-cours PDF (same buildCoursPdf() the public
// download button uses, including the currently-saved branding — logo,
// watermark, accent color...) from whatever is currently in the edit form,
// even if it hasn't been saved yet — so the admin can check math rendering,
// page breaks and table layout before publishing instead of only after.
export default function CoursPdfPreviewButton({ form }) {
  const [blobUrl, setBlobUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  function closePreview() {
    if (blobUrl) URL.revokeObjectURL(blobUrl);
    setBlobUrl(null);
  }

  async function handlePreview() {
    setErr("");
    if (!form.content || !form.content.trim()) {
      setErr("Ajoute du contenu au cours avant de générer un aperçu.");
      return;
    }
    // jsPDF/marked load via <Script strategy="afterInteractive"> in the root
    // layout — right after first paint they can still be mid-load, and
    // buildCoursPdf throws immediately trying to destructure window.jspdf.
    if (!window.jspdf || !window.marked) {
      setErr("Les bibliothèques PDF sont encore en cours de chargement — réessaie dans quelques secondes.");
      return;
    }
    setLoading(true);
    try {
      const { buildCoursPdf } = await import("@/app/_shared/coursPdf");
      const doc = await buildCoursPdf({ ...form, id: form.id || "apercu" });
      setBlobUrl(doc.output("bloburl"));
    } catch (error) {
      console.error("Échec de la génération de l'aperçu PDF :", error);
      setErr(`Échec de la génération de l'aperçu PDF.${error?.message ? ` (${error.message})` : ""}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button type="button" className="admin-btn secondary" onClick={handlePreview} disabled={loading}>
        {loading ? "Génération..." : "👁 Aperçu PDF"}
      </button>
      {err && <div className="admin-error">{err}</div>}
      <PdfPreviewModal url={blobUrl} title="Aperçu — fiche de cours" onClose={closePreview} />
    </>
  );
}
