import { ImageResponse } from "next/og";

// Same logo mark as app/icon.js / app/apple-icon.js, parameterized for the
// PWA manifest's larger icon sizes (192/512) — kept in one place so the
// mark can't drift between the favicon and the installable-app icon.
function logoSvg(px, { maskable = false } = {}) {
  // Maskable icons get cropped into a circle/rounded-square by the OS, so
  // the artwork needs to stay inside the ~80% "safe zone" instead of
  // touching the edges like the plain favicon does.
  const pad = maskable ? px * 0.1 : 0;
  const inner = px - pad * 2;
  return (
    <svg width={px} height={px} viewBox={`0 0 ${px} ${px}`} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4f46e5" />
          <stop offset="1" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      <rect width={px} height={px} rx={maskable ? 0 : px * 0.25} fill="url(#g)" />
      <g transform={`translate(${pad} ${pad}) scale(${inner / 64})`}>
        <polygon points="32,13 49,21 32,29 15,21" fill="white" />
        <line x1="49" y1="21" x2="51" y2="31" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <circle cx="51" cy="32.5" r="2" fill="#fbbf24" />
        <polygon points="32,42 13,37 13,48 32,54" fill="white" />
        <polygon points="32,42 51,37 51,48 32,54" fill="white" />
        <line x1="32" y1="42" x2="32" y2="54" stroke="#4f46e5" strokeWidth="1.2" />
      </g>
    </svg>
  );
}

export function buildAppIcon(px, opts) {
  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%" }}>{logoSvg(px, opts)}</div>,
    { width: px, height: px }
  );
}
