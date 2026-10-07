import { ImageResponse } from "next/og";

// Real, crawlable favicon file (Next's file convention) instead of the old
// inline data:image/svg+xml URI in metadata.icons — Google's favicon
// crawler wants a stable image URL at least 48x48, not a data URI, which is
// why search results were showing a generic globe instead of the logo.
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%" }}>
        <svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#4f46e5" />
              <stop offset="1" stopColor="#a855f7" />
            </linearGradient>
          </defs>
          <rect width="64" height="64" rx="16" fill="url(#g)" />
          <polygon points="32,13 49,21 32,29 15,21" fill="white" />
          <line x1="49" y1="21" x2="51" y2="31" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <circle cx="51" cy="32.5" r="2" fill="#fbbf24" />
          <polygon points="32,42 13,37 13,48 32,54" fill="white" />
          <polygon points="32,42 51,37 51,48 32,54" fill="white" />
          <line x1="32" y1="42" x2="32" y2="54" stroke="#4f46e5" strokeWidth="1.2" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
