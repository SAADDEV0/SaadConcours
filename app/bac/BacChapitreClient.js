"use client";

import { useEffect, useState } from "react";
import { chromeScript } from "../_shared/chrome";
import { renderMathWhenReady } from "../_shared/mathMarkdown";

// editId : "niveau/matiere/chapitre". Le raccourci d'édition n'est affiché que
// sur le navigateur de l'administrateur (marqué par l'admin, voir AdminShell) ;
// l'éditeur lui-même reste protégé par la connexion.
export default function BacChapitreClient({ editId }) {
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    chromeScript();
    document.querySelectorAll(".bac-tab-panel .cours-content").forEach((el) => renderMathWhenReady(el));
    try {
      setAdmin(localStorage.getItem("sc_no_track") === "1");
    } catch {}
  }, []);

  if (!admin || !editId) return null;
  return (
    <a className="bac-edit-fab" href={`/admin/bac/modifier?id=${encodeURIComponent(editId)}`}>
      ✏️ Modifier ce chapitre
    </a>
  );
}
