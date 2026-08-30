import { ImageResponse } from "next/og";

// Shared by every route's opengraph-image.js (root site default + one per
// concours/cours/quiz/news/blog detail page) so a link shared on WhatsApp/
// Facebook/Telegram gets a real preview card instead of nothing — these
// pages had no og:image at all before.
export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";

export function buildOgImage({ eyebrow, title, subtitle }) {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "70px 80px",
          background: "linear-gradient(135deg, #0f1220 0%, #1b1f3a 55%, #2a1f4d 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "linear-gradient(135deg,#4f46e5,#a855f7)",
              fontSize: 30,
              fontWeight: 700,
              color: "#fff",
            }}
          >
            S
          </div>
          <div style={{ display: "flex", fontSize: 30, fontWeight: 700 }}>
            <span style={{ color: "#fff" }}>Saad</span>
            <span style={{ color: "#c9a7ff" }}>Concours</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {eyebrow && (
            <div
              style={{
                display: "flex",
                fontSize: 24,
                fontWeight: 600,
                color: "#a5b4fc",
                textTransform: "uppercase",
                letterSpacing: 2,
              }}
            >
              {eyebrow}
            </div>
          )}
          <div style={{ display: "flex", fontSize: 52, fontWeight: 800, lineHeight: 1.15, maxWidth: 980, color: "#fff" }}>
            {title}
          </div>
          {subtitle && (
            <div style={{ display: "flex", fontSize: 27, color: "#cbd5e1", maxWidth: 920 }}>{subtitle}</div>
          )}
        </div>
      </div>
    ),
    ogImageSize
  );
}
