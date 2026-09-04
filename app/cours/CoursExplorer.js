"use client";

import { useEffect } from "react";
import { chromeScript } from "../_shared/chrome";

// Hydrates the server-rendered /cours page's header behavior (theme toggle,
// mobile nav, dua banner...). The module cards are plain <a href="/cours/[id]">
// links (see app/_shared/coursCard.js) so no click interception is needed —
// mirrors ConcoursExplorer.js's chromeScript() call.
export default function CoursExplorer() {
  useEffect(() => {
    chromeScript();
  }, []);

  return null;
}
