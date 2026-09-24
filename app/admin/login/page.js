"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import BrandLogo from "../../_shared/BrandLogo";
import Icon from "../_ui/Icon";

const FEATURES = [
  ["📝", "Concours, cours, QCM et blog dans un seul éditeur, avec aperçu LaTeX en direct"],
  ["🚀", "Chaque enregistrement = un commit, et le suivi de la mise en ligne"],
  ["📣", "Studio réseaux sociaux et studio PDF intégrés"],
];

function LoginForm() {
  const router = useRouter();
  const sp = useSearchParams();
  const next = sp.get("next");
  const target = next && next.startsWith("/admin") && !next.startsWith("//") ? next : "/admin";
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState(sp.get("expired") ? "Ta session a expiré : reconnecte-toi pour continuer." : "");
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
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || "Connexion impossible.");
        setLoading(false);
        return;
      }
      router.replace(target);
      router.refresh();
    } catch {
      setError("Serveur injoignable. Vérifie ta connexion.");
      setLoading(false);
    }
  }

  return (
    <div className="ax ax-login">
      <aside className="ax-login-art">
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <BrandLogo gradientId="axLoginArt" />
          <strong style={{ fontSize: "1.1rem" }}>SaadConcours</strong>
        </div>
        <div>
          <h2>La console qui fait tourner le site.</h2>
          <p>Concours Master, cours Licence et Bac, évaluations, blog et diffusion : tout se gère ici, et tout part en ligne automatiquement.</p>
          <div className="ax-login-feats">
            {FEATURES.map(([e, t]) => (
              <div className="ax-login-feat" key={t}>
                <span>{e}</span>
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
        <span style={{ fontSize: "0.78rem", opacity: 0.55 }}>Console v6 · accès réservé</span>
      </aside>
      <main className="ax-login-form">
        <div className="ax-login-box">
          <BrandLogo gradientId="axLoginMark" className="ax-login-mark" />
          <h1>Connexion</h1>
          <p>Entre le mot de passe administrateur.</p>
          <form onSubmit={onSubmit}>
            <div className="ax-field">
              <label className="ax-label" htmlFor="password">
                Mot de passe
              </label>
              <div className="ax-pass">
                <input
                  id="password"
                  className="ax-input"
                  type={show ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  autoFocus
                  required
                />
                <button type="button" className="ax-btn ghost icon sm" onClick={() => setShow((s) => !s)} aria-label={show ? "Masquer" : "Afficher"}>
                  <Icon name={show ? "eyeOff" : "eye"} />
                </button>
              </div>
            </div>
            {error && (
              <div className="ax-alert error" role="alert">
                <Icon name="alert" />
                <div className="ax-alert-body">{error}</div>
              </div>
            )}
            <button className="ax-btn primary block" style={{ height: 46 }} type="submit" disabled={loading || !password}>
              {loading ? <Icon name="loader" /> : <Icon name="shield" />}
              {loading ? "Connexion…" : "Se connecter"}
            </button>
          </form>
          <p className="ax-hint" style={{ marginTop: 18 }}>
            5 essais ratés bloquent la connexion 15 minutes depuis cette adresse.
          </p>
        </div>
      </main>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="ax ax-login" />}>
      <LoginForm />
    </Suspense>
  );
}
