import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #4f46e5, #a855f7)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 140,
            height: 140,
            borderRadius: 32,
            background: "rgba(255,255,255,0.15)",
            marginBottom: 36,
          }}
        >
          <svg width="86" height="86" viewBox="0 0 64 64">
            <polygon points="32,13 49,21 32,29 15,21" fill="white" />
            <line x1="49" y1="21" x2="51" y2="31" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <circle cx="51" cy="32.5" r="2" fill="#fbbf24" />
            <polygon points="32,42 13,37 13,48 32,54" fill="white" />
            <polygon points="32,42 51,37 51,48 32,54" fill="white" />
            <line x1="32" y1="42" x2="32" y2="54" stroke="#4f46e5" strokeWidth="1.2" />
          </svg>
        </div>
        <div style={{ display: "flex", fontSize: 72, fontWeight: 700, color: "white" }}>
          <span>Saad</span>
          <span style={{ color: "#fde68a" }}>Concours</span>
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "rgba(255,255,255,0.9)", marginTop: 18 }}>
          Concours Masters Maroc — CCA · GFCF · Finance · Fiscalité · Audit
        </div>
      </div>
    ),
    { ...size }
  );
}
