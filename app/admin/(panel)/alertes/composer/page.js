"use client";

import { useEffect, useState } from "react";
import DigestComposer from "@/app/admin/_components/email/DigestComposer";

export default function ComposerPage() {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    document.title = "Composer un envoi · Admin";
    fetch("/api/settings")
      .then((r) => r.json())
      .then(setSettings)
      .catch(() => setSettings({}));
  }, []);

  return (
    <div className="admin-card">
      <h2 className="admin-section-title">📨 Composer un envoi</h2>
      <DigestComposer settings={settings} />
    </div>
  );
}
