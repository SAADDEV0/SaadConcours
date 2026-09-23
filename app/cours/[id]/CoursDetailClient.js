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

    const pdfBtn = document.getElementById("coursPdfBtn");
    const onPdf = () => downloadCoursPdf(cours);
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
