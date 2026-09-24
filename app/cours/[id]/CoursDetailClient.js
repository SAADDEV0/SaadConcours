"use client";

import { useEffect, useState } from "react";
import { chromeScript } from "../../_shared/chrome";
import { downloadCoursPdf } from "../../_shared/coursPdf";
import { renderMathWhenReady } from "../../_shared/mathMarkdown";

// Page module (server-rendered, see page.js) : header behavior, KaTeX render
// of the "Synthèse du module" section and the full-course PDF button, which
// lives in the hero so it's visible without scrolling — wired imperatively
// by id rather than rendered here. Shows the admin edit shortcut the same
// way BacChapitreClient does (only on the admin's own browser).
export default function CoursDetailClient({ cours }) {
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    chromeScript();
    const annexe = document.getElementById("coursAnnexe");
    if (annexe) renderMathWhenReady(annexe);

    // Le Markdown du module n'est pas inscrit dans la page (trop lourd) : il
    // est lu au clic dans public/data/cours.json, servi en asset statique.
    const pdfBtn = document.getElementById("coursPdfBtn");
    const onPdf = async () => {
      if (pdfBtn.disabled) return;
      pdfBtn.disabled = true;
      try {
        const list = await fetch("/data/cours.json").then((r) => r.json());
        const complet = list.find((x) => x.id === cours.id);
        if (complet) await downloadCoursPdf({ ...cours, content: complet.content });
      } catch {
        // Réseau coupé : le bouton redevient cliquable, rien d'autre à faire.
      } finally {
        pdfBtn.disabled = false;
      }
    };
    pdfBtn?.addEventListener("click", onPdf);
    try {
      setAdmin(localStorage.getItem("sc_no_track") === "1");
    } catch {}
    return () => pdfBtn?.removeEventListener("click", onPdf);
  }, [cours]);

  if (!admin) return null;
  return (
    <a className="bac-edit-fab" href="/admin/cours">
      ✏️ Modifier ce module
    </a>
  );
}
