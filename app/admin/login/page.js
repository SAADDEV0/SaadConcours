"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ThemeToggle from "../../_shared/ThemeToggle";
import BrandLogo from "../../_shared/BrandLogo";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Erreur de connexion.");
        return;
      }
      router.push("/admin");
      router.refresh();
    } finally {
      setLoading(false);
    }
  }

  // Wrapped in .admin-shell so the gate inherits the panel's v4 tokens — in
  // v3 this page fell back to the public site's palette and looked like a
  // different product than the thing it unlocks.
  return (
    <div className="admin-shell admin-gate">
      <div className="admin-login-wrap">
        <div className="admin-login-topbar">
          <a className="admin-login-brand" href="/">
            <BrandLogo className="admin-login-logo" gradientId="adminLoginLogoGrad" from="#19c8a0" to="#49c7ff" />
            <span className="brand-saad">Saad</span>
            <span className="brand-concours">Concours</span>
          </a>
          <ThemeToggle />
        </div>
        <div className="admin-card admin-gate-card">
          <div className="ad-kicker">Accès restreint</div>
          <h1 className="admin-gate-title">Espace d&apos;administration</h1>
          <p className="admin-gate-sub">Cette console gère les concours, cours et diffusions publiés sur le site.</p>
          <form onSubmit={onSubmit}>
            <div className="admin-field">
              <label htmlFor="password">Mot de passe</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
                required
              />
            </div>
            <button className="admin-btn admin-gate-submit" type="submit" disabled={loading}>
              {loading ? "Connexion…" : "Se connecter"}
            </button>
            {error && <div className="admin-error">{error}</div>}
          </form>
        </div>
        <div className="admin-gate-foot ad-kicker">SaadConcours · Console v4</div>
      </div>
    </div>
  );
}
