"use client";

import { useEffect } from "react";
import { chromeScript } from "./chrome";

// Minimal client wiring for server-rendered pages that need the shared
// header/footer behavior (theme toggle, dua banner, footer social links)
// but no other client-only logic — see ConcoursDetailClient / CoursDetailClient
// for pages that need more than this.
export default function ChromeInit() {
  useEffect(() => {
    chromeScript();
  }, []);

  return null;
}
