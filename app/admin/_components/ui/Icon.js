// Stroke icon set for the admin panel — replaces the emoji that used to
// stand in for iconography in the rail, the section headers, the KPI tiles
// and the status labels. Emoji were the single biggest visual tell that
// this wasn't a product: they render differently on every OS, can't take a
// colour, don't inherit currentColor, and get read aloud ("livre ouvert")
// by screen readers.
//
// Drawn on the same 24×24 grid and with the same stroke conventions as
// Lucide (round caps/joins, 1.75 nominal weight) so the whole panel reads as
// one family, but inlined here rather than pulled from a package: the panel
// needs ~50 glyphs, and a tree-shaken import per glyph across ~60 components
// costs more in bundle and build time than these paths do.
//
// `size` is in px and also drives the stroke: at 14px a 1.75 stroke looks
// heavy, at 28px it looks thin, so it scales with the box unless overridden.

const PATHS = {
  // --- Navigation ---------------------------------------------------------
  dashboard: (
    <>
      <rect x="3" y="3" width="7" height="9" rx="1.5" />
      <rect x="14" y="3" width="7" height="5" rx="1.5" />
      <rect x="14" y="12" width="7" height="9" rx="1.5" />
      <rect x="3" y="16" width="7" height="5" rx="1.5" />
    </>
  ),
  book: (
    <>
      <path d="M4 19.5V5a2 2 0 0 1 2-2h13v16H6.5A2.5 2.5 0 0 0 4 21.5" />
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H19" />
    </>
  ),
  notebook: (
    <>
      <path d="M5 3h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5z" />
      <path d="M9 3v18" />
      <path d="M13 8h3M13 12h3" />
    </>
  ),
  clipboard: (
    <>
      <rect x="7" y="4" width="10" height="17" rx="2" />
      <path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" />
      <path d="M10 12l1.6 1.6L15 10.5" />
    </>
  ),
  newspaper: (
    <>
      <path d="M3 6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v13H5a2 2 0 0 1-2-2z" />
      <path d="M18 9h2a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2" />
      <path d="M7 8h7M7 12h7M7 16h4" />
    </>
  ),
  sparkles: (
    <>
      <path d="M11 3l1.8 4.7L17.5 9.5 12.8 11.3 11 16l-1.8-4.7L4.5 9.5l4.7-1.8z" />
      <path d="M18 15l.7 1.8 1.8.7-1.8.7L18 20l-.7-1.8-1.8-.7 1.8-.7z" />
    </>
  ),
  megaphone: (
    <>
      <path d="M3 10v4a1 1 0 0 0 1 1h3l9 4V5L7 9H4a1 1 0 0 0-1 1z" />
      <path d="M19 9a3.5 3.5 0 0 1 0 6" />
      <path d="M7 15v3a2 2 0 0 0 4 0v-1.2" />
    </>
  ),
  bell: (
    <>
      <path d="M18 9a6 6 0 1 0-12 0c0 5-2 6.5-2 6.5h16S18 14 18 9" />
      <path d="M10.3 19.5a2 2 0 0 0 3.4 0" />
    </>
  ),
  bellOff: (
    <>
      <path d="M17 9a5 5 0 0 0-7.2-4.5" />
      <path d="M6.3 6.3A6 6 0 0 0 6 9c0 5-2 6.5-2 6.5h13" />
      <path d="M10.3 19.5a2 2 0 0 0 3.4 0" />
      <path d="M3 3l18 18" />
    </>
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.2 14.3a1.4 1.4 0 0 0 .3 1.5l.1.1a1.7 1.7 0 1 1-2.4 2.4l-.1-.1a1.4 1.4 0 0 0-1.5-.3 1.4 1.4 0 0 0-.9 1.3v.2a1.7 1.7 0 0 1-3.4 0v-.1a1.4 1.4 0 0 0-1-1.3 1.4 1.4 0 0 0-1.5.3l-.1.1a1.7 1.7 0 1 1-2.4-2.4l.1-.1a1.4 1.4 0 0 0 .3-1.5 1.4 1.4 0 0 0-1.3-.9h-.2a1.7 1.7 0 0 1 0-3.4h.1a1.4 1.4 0 0 0 1.3-1 1.4 1.4 0 0 0-.3-1.5l-.1-.1a1.7 1.7 0 1 1 2.4-2.4l.1.1a1.4 1.4 0 0 0 1.5.3h.1a1.4 1.4 0 0 0 .9-1.3v-.2a1.7 1.7 0 0 1 3.4 0v.1a1.4 1.4 0 0 0 .9 1.3 1.4 1.4 0 0 0 1.5-.3l.1-.1a1.7 1.7 0 1 1 2.4 2.4l-.1.1a1.4 1.4 0 0 0-.3 1.5v.1a1.4 1.4 0 0 0 1.3.9h.2a1.7 1.7 0 0 1 0 3.4h-.1a1.4 1.4 0 0 0-1.3.9z" />
    </>
  ),
  palette: (
    <>
      <path d="M12 21a9 9 0 1 1 9-9c0 1.7-1.3 3-3 3h-1.5a2 2 0 0 0-1.4 3.4A1.8 1.8 0 0 1 12 21" />
      <circle cx="7.5" cy="12" r="1" />
      <circle cx="9.5" cy="8" r="1" />
      <circle cx="14.5" cy="8" r="1" />
      <circle cx="17" cy="11.5" r="1" />
    </>
  ),

  // --- Metrics / content types -------------------------------------------
  download: (
    <>
      <path d="M12 3v12" />
      <path d="M7.5 10.5L12 15l4.5-4.5" />
      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
    </>
  ),
  file: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6M9 17h4" />
    </>
  ),
  files: (
    <>
      <path d="M9 3h5l4 4v9a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
      <path d="M14 3v4h4" />
      <path d="M4 8v11a2 2 0 0 0 2 2h8" />
    </>
  ),
  eye: (
    <>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  pen: (
    <>
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4z" />
      <path d="M14.5 5.5l3 3" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <path d="M16 4.5a3.5 3.5 0 0 1 0 7" />
      <path d="M17.5 14.5A6 6 0 0 1 21 20" />
    </>
  ),
  userPlus: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
      <path d="M18 8v6M15 11h6" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 6.5l8.5 6 8.5-6" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l4.5 4.5" />
    </>
  ),
  mapPin: (
    <>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.2l3.2 2" />
    </>
  ),
  calendarClock: (
    <>
      <path d="M20 10V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5" />
      <path d="M8 2v4M16 2v4M4 10h16" />
      <circle cx="17" cy="17" r="4" />
      <path d="M17 15.3V17l1.2.9" />
    </>
  ),
  activity: <path d="M3 12h3.5l2.5-7 4 14 2.5-7H21" />,
  trendingUp: (
    <>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </>
  ),
  trendingDown: (
    <>
      <path d="M3 7l6 6 4-4 8 8" />
      <path d="M15 17h6v-6" />
    </>
  ),
  barChart: (
    <>
      <path d="M3 21h18" />
      <rect x="4.5" y="11" width="4" height="7" rx="1" />
      <rect x="10.5" y="6" width="4" height="12" rx="1" />
      <rect x="16.5" y="14" width="4" height="4" rx="1" />
    </>
  ),
  pieChart: (
    <>
      <path d="M21 12a9 9 0 1 1-9-9v9z" />
      <path d="M14.5 3.5A9 9 0 0 1 20.5 9.5H14.5z" />
    </>
  ),
  trophy: (
    <>
      <path d="M8 4h8v5a4 4 0 0 1-8 0z" />
      <path d="M8 5.5H5.5A2.5 2.5 0 0 0 8 10M16 5.5h2.5A2.5 2.5 0 0 1 16 10" />
      <path d="M12 13v4M9 21h6M10 21v-2.5a2 2 0 0 1 4 0V21" />
    </>
  ),
  folders: (
    <>
      <path d="M3 8.5V18a2 2 0 0 0 2 2h11" />
      <path d="M7 5h3.2l1.5 2H19a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
    </>
  ),
  checkCircle: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12.2l2.4 2.4 4.6-5" />
    </>
  ),
  alertTriangle: (
    <>
      <path d="M10.3 4.2 2.9 17a2 2 0 0 0 1.7 3h14.8a2 2 0 0 0 1.7-3L13.7 4.2a2 2 0 0 0-3.4 0z" />
      <path d="M12 9.5v4M12 17h.01" />
    </>
  ),
  inbox: (
    <>
      <path d="M21 12v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6" />
      <path d="M3 12h4l1.5 2.5h7L17 12h4L18 4H6z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7.5 3v5.5c0 4.5-3.1 8-7.5 9.5-4.4-1.5-7.5-5-7.5-9.5V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  history: (
    <>
      <path d="M3.5 12a8.5 8.5 0 1 0 2.7-6.2" />
      <path d="M3 4v4h4" />
      <path d="M12 8v4.3l3 1.8" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="6" rx="8" ry="3" />
      <path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6" />
      <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </>
  ),

  // --- Controls -----------------------------------------------------------
  chevronDown: <path d="M6 9.5l6 6 6-6" />,
  chevronUp: <path d="M6 14.5l6-6 6 6" />,
  chevronRight: <path d="M9.5 6l6 6-6 6" />,
  chevronLeft: <path d="M14.5 6l-6 6 6 6" />,
  arrowRight: (
    <>
      <path d="M4 12h15" />
      <path d="M13.5 6.5L19 12l-5.5 5.5" />
    </>
  ),
  arrowUp: (
    <>
      <path d="M12 19V5" />
      <path d="M6.5 10.5L12 5l5.5 5.5" />
    </>
  ),
  arrowDown: (
    <>
      <path d="M12 5v14" />
      <path d="M6.5 13.5L12 19l5.5-5.5" />
    </>
  ),
  x: <path d="M6 6l12 12M18 6L6 18" />,
  check: <path d="M5 12.5l4.5 4.5L19 7" />,
  plus: <path d="M12 5v14M5 12h14" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  refresh: (
    <>
      <path d="M20 11a8 8 0 0 0-13.7-4.9L3 9" />
      <path d="M3 4v5h5" />
      <path d="M4 13a8 8 0 0 0 13.7 4.9L21 15" />
      <path d="M21 20v-5h-5" />
    </>
  ),
  sliders: (
    <>
      <path d="M5 21v-7M5 10V3M12 21v-10M12 7V3M19 21v-4M19 13V3" />
      <path d="M2.5 14h5M9.5 7h5M16.5 17h5" />
    </>
  ),
  grip: (
    <>
      <circle cx="9" cy="6" r="1.2" />
      <circle cx="15" cy="6" r="1.2" />
      <circle cx="9" cy="12" r="1.2" />
      <circle cx="15" cy="12" r="1.2" />
      <circle cx="9" cy="18" r="1.2" />
      <circle cx="15" cy="18" r="1.2" />
    </>
  ),
  externalLink: (
    <>
      <path d="M13 4h7v7" />
      <path d="M20 4l-9 9" />
      <path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" />
    </>
  ),
  logOut: (
    <>
      <path d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4" />
      <path d="M15.5 8.5L19 12l-3.5 3.5" />
      <path d="M19 12H9" />
    </>
  ),
  filter: <path d="M3.5 5h17l-6.5 7.6V19l-4 2v-8.4z" />,
  list: (
    <>
      <path d="M8.5 6h12M8.5 12h12M8.5 18h12" />
      <path d="M4 6h.01M4 12h.01M4 18h.01" />
    </>
  ),
  robot: (
    <>
      <rect x="4" y="8" width="16" height="12" rx="3" />
      <path d="M12 4.5V8" />
      <circle cx="12" cy="3.5" r="1.2" />
      <path d="M9 13h.01M15 13h.01" />
      <path d="M9.5 16.5h5" />
    </>
  ),
  flask: (
    <>
      <path d="M10 3v6L4.8 18a2 2 0 0 0 1.7 3h11a2 2 0 0 0 1.7-3L14 9V3" />
      <path d="M9 3h6" />
      <path d="M7.5 14h9" />
    </>
  ),
  skip: (
    <>
      <path d="M5 6l8 6-8 6z" />
      <path d="M18 6v12" />
    </>
  ),
};

export const ICON_NAMES = Object.keys(PATHS);

export default function Icon({ name, size = 16, strokeWidth, className, title, style, ...rest }) {
  const d = PATHS[name];
  if (!d) return null;
  // A hairline at 14px and a hairline at 32px are not the same glyph — the
  // weight has to track the box or small icons turn to mud and large ones
  // look hollow.
  const sw = strokeWidth ?? (size <= 15 ? 1.9 : size >= 26 ? 1.5 : 1.75);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={sw}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={"ad-icon" + (className ? " " + className : "")}
      style={{ flexShrink: 0, ...style }}
      // Decorative by default: these sit next to a text label everywhere in
      // the panel, so announcing them would just double every menu item.
      aria-hidden={title ? undefined : "true"}
      role={title ? "img" : undefined}
      focusable="false"
      {...rest}
    >
      {title && <title>{title}</title>}
      {d}
    </svg>
  );
}
