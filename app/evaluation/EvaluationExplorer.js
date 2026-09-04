"use client";

import { useEffect } from "react";
import { chromeScript } from "../_shared/chrome";

// Hydrates the server-rendered /evaluation page's header behavior (theme
// toggle, mobile nav, dua banner...). The module cards are plain
// <a href="/evaluation/[id]"> links (see app/_shared/evalCard.js) so no
// click interception is needed — mirrors ConcoursExplorer.js's chromeScript()
// call. Also redirects any old ?open=<id> link (from the previous
// list-page-SPA quiz) straight to the quiz's real page.
export default function EvaluationExplorer() {
  useEffect(() => {
    chromeScript();

    const openId = new URLSearchParams(window.location.search).get("open");
    if (openId) {
      window.location.replace(`/evaluation/${encodeURIComponent(openId)}`);
    }
  }, []);

  return null;
}
