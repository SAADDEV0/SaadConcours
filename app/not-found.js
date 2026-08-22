export const metadata = { title: "Page introuvable", robots: { index: false } };

export default function NotFound() {
  return (
    <div style={{ maxWidth: 480, margin: "80px auto", padding: "0 20px", textAlign: "center" }}>
      <div style={{ fontSize: "3rem", marginBottom: 10 }}>🔎</div>
      <h1 style={{ fontSize: "1.4rem", marginBottom: 8 }}>Page introuvable</h1>
      <p style={{ color: "var(--text-dim)", marginBottom: 24 }}>
        Ce concours, cette fiche ou cette page n'existe pas (ou plus) sur SaadConcours.
      </p>
      <a
        href="/"
        style={{
          display: "inline-block",
          padding: "10px 20px",
          borderRadius: 8,
          background: "var(--accent)",
          color: "#fff",
          textDecoration: "none",
          fontWeight: 600,
        }}
      >
        ← Retour à l'accueil
      </a>
    </div>
  );
}
