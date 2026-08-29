// Same graduation-cap mark as the public header (chrome.js), as a JSX
// component so admin pages (real React tree, not dangerouslySetInnerHTML)
// can reuse it without duplicating the SVG markup.
export default function BrandLogo({ className, gradientId = "adminLogoGrad" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4f46e5" />
          <stop offset="1" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill={`url(#${gradientId})`} />
      <polygon points="32,13 49,21 32,29 15,21" fill="white" />
      <line x1="49" y1="21" x2="51" y2="31" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <circle cx="51" cy="32.5" r="2" fill="#fbbf24" />
      <polygon points="32,42 13,37 13,48 32,54" fill="white" />
      <polygon points="32,42 51,37 51,48 32,54" fill="white" />
      <line x1="32" y1="42" x2="32" y2="54" stroke="#4f46e5" strokeWidth="1.2" />
    </svg>
  );
}
