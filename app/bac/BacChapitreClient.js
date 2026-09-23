"use client";

import { useEffect } from "react";
import { chromeScript } from "../_shared/chrome";
import { renderMathWhenReady } from "../_shared/mathMarkdown";

export default function BacChapitreClient() {
  useEffect(() => {
    chromeScript();
    document.querySelectorAll(".bac-tab-panel .cours-content").forEach((el) => renderMathWhenReady(el));
  }, []);

  return null;
}
