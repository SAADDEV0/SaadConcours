import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { logoSvg } from "./appIcon";

// Shared by every route's opengraph-image.js (root site default + one per
// concours/cours/quiz/blog/droit detail page): the card WhatsApp/Facebook/
// Telegram show when a link is shared.
//
// Carte « affiche » : fond d'encre indigo (le dégradé du logo), titre blanc
// en Literata, et une pastille de couleur par type de page (`kind` :
// concours, cours, qcm, blog, droit) pour qu'on reconnaisse d'un coup d'œil,
// dans un fil WhatsApp ou Facebook, ce que contient le lien.
export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";

const BG = "linear-gradient(135deg, #1e1b4b 0%, #312e81 58%, #5b21b6 100%)";
const WHITE = "#ffffff";
const TEXT_SOFT = "#c7d2fe";
const NIGHT = "#1e1b4b";
const GOLD = "#fbbf24";

const KINDS = {
  concours: { label: "Concours Master", color: GOLD },
  cours: { label: "Cours", color: "#5eead4" },
  qcm: { label: "QCM corrigé", color: "#f9a8d4" },
  blog: { label: "Article", color: "#7dd3fc" },
  droit: { label: "Cours de droit", color: "#d8b4fe" },
};

// Le chapeau du logo, seul et en grand, en filigrane à droite de la carte.
function capWatermark(px) {
  return (
    <svg width={px} height={px} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <polygon points="32,13 49,21 32,29 15,21" fill="white" />
      <line x1="49" y1="21" x2="51" y2="31" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <circle cx="51" cy="32.5" r="2" fill="white" />
      <polygon points="32,42 13,37 13,48 32,54" fill="white" />
      <polygon points="32,42 51,37 51,48 32,54" fill="white" />
    </svg>
  );
}

// Les images sont prérendues au build (force-static), où les .ttf du dépôt
// sont lisibles. Si une image venait à être dessinée par le Worker (id
// inconnu au build), la lecture échoue et la carte retombe sur la police
// par défaut au lieu de planter.
const FONT_FILES = [
  ["Literata", 600, "Literata-600.ttf"],
  ["Literata", 700, "Literata-700.ttf"],
  ["Jakarta", 600, "PlusJakartaSans-600.ttf"],
  ["Jakarta", 700, "PlusJakartaSans-700.ttf"],
];
let fontsPromise;
function loadFonts() {
  fontsPromise ??= Promise.all(
    FONT_FILES.map(async ([name, weight, file]) => ({
      name,
      weight,
      style: "normal",
      data: await readFile(join(process.cwd(), "assets", "og-fonts", file)),
    }))
  ).catch(() => []);
  return fontsPromise;
}

function clip(text, max) {
  const s = String(text || "").replace(/\s+/g, " ").trim();
  return s.length > max ? s.slice(0, max - 1).replace(/[\s,;:.–—-]+\S*$/, "") + "…" : s;
}

// Taille du titre selon sa longueur : un nom de master court s'affiche en
// grand, un titre d'article long tient sur trois lignes.
function titleSize(len) {
  if (len <= 34) return 80;
  if (len <= 50) return 72;
  if (len <= 60) return 64;
  if (len <= 90) return 54;
  return 46;
}

export async function buildOgImage({ kind, eyebrow, title, subtitle }) {
  const fonts = await loadFonts();
  const t = clip(title, 120);
  const sub = clip(subtitle, 110);
  const k = KINDS[kind];
  const eb = clip(eyebrow, k ? 44 : 60);
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          position: "relative",
          width: "100%",
          height: "100%",
          backgroundImage: BG,
          fontFamily: "Jakarta",
          color: WHITE,
        }}
      >
        <div
          style={{
            display: "flex",
            position: "absolute",
            right: -70,
            top: 70,
            opacity: 0.09,
            transform: "rotate(-14deg)",
          }}
        >
          {capWatermark(560)}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            padding: "52px 72px 48px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {logoSvg(60)}
            <div style={{ display: "flex", fontSize: 34, fontWeight: 700, letterSpacing: -0.5 }}>
              Saad<span style={{ color: GOLD }}>Concours</span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {(k || eb) && (
              <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 24 }}>
                {k && (
                  <div
                    style={{
                      display: "flex",
                      padding: "9px 20px",
                      borderRadius: 999,
                      background: k.color,
                      color: NIGHT,
                      fontSize: 24,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: 1.5,
                    }}
                  >
                    {k.label}
                  </div>
                )}
                {eb && (
                  <div
                    style={{
                      display: "flex",
                      fontSize: 26,
                      fontWeight: 700,
                      color: k ? TEXT_SOFT : GOLD,
                      textTransform: "uppercase",
                      letterSpacing: 2,
                    }}
                  >
                    {eb}
                  </div>
                )}
              </div>
            )}
            <div
              style={{
                display: "flex",
                fontFamily: "Literata",
                fontSize: titleSize(t.length),
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: -1,
                maxWidth: 1000,
              }}
            >
              {t}
            </div>
            {sub && (
              <div
                style={{
                  display: "flex",
                  marginTop: 20,
                  fontSize: 30,
                  fontWeight: 600,
                  lineHeight: 1.35,
                  color: TEXT_SOFT,
                  maxWidth: 960,
                }}
              >
                {sub}
              </div>
            )}
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 22, fontSize: 24, fontWeight: 600, color: TEXT_SOFT }}>
              {["Sujets réels", "Corrigés", "QCM", "Gratuit"].map((w) => (
                <div key={w} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ display: "flex", width: 10, height: 10, borderRadius: 5, background: GOLD }} />
                  {w}
                </div>
              ))}
            </div>
            <div
              style={{
                display: "flex",
                padding: "12px 26px",
                borderRadius: 999,
                background: WHITE,
                color: NIGHT,
                fontSize: 26,
                fontWeight: 700,
              }}
            >
              saadconcours.space
            </div>
          </div>
        </div>
      </div>
    ),
    { ...ogImageSize, fonts }
  );
}
