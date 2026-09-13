import { Inter, JetBrains_Mono } from "next/font/google";
import "./admin.css";

// The panel gets its own typography instead of the public site's system
// stack: Inter for UI (designed for dense interface text — real tabular
// figures, unambiguous 1/l/I) and JetBrains Mono for the v4 micro-labels,
// IDs and metric readouts. next/font self-hosts both at build time, so no
// request ever leaves the page at runtime.
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-admin-sans",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--font-admin-mono",
});

export const metadata = {
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }) {
  // display:contents — the wrapper carries the font variables down without
  // introducing a box that could disturb .admin-shell's full-height flex
  // layout (custom properties inherit through it normally).
  return (
    <div className={`${inter.variable} ${jetbrains.variable}`} style={{ display: "contents" }}>
      {children}
    </div>
  );
}
