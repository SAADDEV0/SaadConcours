import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { logoSvg } from "./appIcon";

// Shared by every route's opengraph-image.js (root site default + one per
// concours/cours/quiz/blog detail page): the card WhatsApp/Facebook/Telegram
// show when a link is shared.
//
// Charte « stylo bleu » (voir app/globals.css) : une feuille blanche, le
// titre à l'encre en Literata, l'interface en Plus Jakarta Sans, le bleu
// --accent comme seule couleur de marque. Pas de dégradé ni de halo.
export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";

const INK = "#4f46e5";
const TEXT = "#16181d";
const TEXT_DIM = "#4a5160";
const PAPER = "#ffffff";
const RULE = "#e3e6ec";

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
  if (len <= 34) return 78;
  if (len <= 50) return 70;
  if (len <= 60) return 64;
  if (len <= 90) return 54;
  return 46;
}

export async function buildOgImage({ eyebrow, title, subtitle }) {
  const fonts = await loadFonts();
  const t = clip(title, 120);
  const sub = clip(subtitle, 120);
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          background: PAPER,
          fontFamily: "Jakarta",
        }}
      >
        {/* Bandeau d'encre en tête, comme l'en-tête d'une copie. */}
        <div style={{ display: "flex", height: 14, background: INK }} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 1,
            padding: "56px 80px 52px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            {logoSvg(64)}
            <div style={{ display: "flex", fontSize: 36, fontWeight: 700, color: TEXT, letterSpacing: -0.5 }}>
              Saad<span style={{ color: INK }}>Concours</span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {eyebrow && (
              <div
                style={{
                  display: "flex",
                  fontSize: 26,
                  fontWeight: 700,
                  color: INK,
                  textTransform: "uppercase",
                  letterSpacing: 2,
                  marginBottom: 18,
                }}
              >
                {clip(eyebrow, 60)}
              </div>
            )}
            <div
              style={{
                display: "flex",
                fontFamily: "Literata",
                fontSize: titleSize(t.length),
                fontWeight: 700,
                lineHeight: 1.12,
                letterSpacing: -1,
                color: TEXT,
                maxWidth: 1040,
              }}
            >
              {t}
            </div>
            {sub && (
              <div
                style={{
                  display: "flex",
                  marginTop: 22,
                  fontSize: 30,
                  fontWeight: 600,
                  lineHeight: 1.35,
                  color: TEXT_DIM,
                  maxWidth: 1000,
                }}
              >
                {sub}
              </div>
            )}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: 22,
              borderTop: `2px solid ${RULE}`,
              fontSize: 24,
              fontWeight: 600,
              color: TEXT_DIM,
            }}
          >
            <span>Cours · Exercices corrigés · QCM · Concours Master</span>
            <span style={{ color: INK, fontWeight: 700 }}>saadconcours.space</span>
          </div>
        </div>
      </div>
    ),
    { ...ogImageSize, fonts }
  );
}
