"use client";

// "Modèles" tab: pick a whole look in one click, or snapshot the current one
// as a reusable template. The thumbnails are pure CSS miniatures built from
// the same values the renderer reads — cheap enough to draw a dozen of them,
// and they change the moment a template's colors do.

import { useState } from "react";
import { colorOr } from "./PdfCanvas";

function Sheet({ values, kind }) {
  const accent = colorOr(values.pdfAccentColor, "#4f46e5");
  const text = colorOr(values.pdfTextColor, "#1a1d27");
  const bg = colorOr(values.pdfCoverBackgroundColor, "#ffffff");
  const serif = values.pdfFontFamily === "times";

  if (kind === "cover") {
    return (
      <div className="pdfx-sheet" style={{ background: bg }}>
        {values.pdfCoverAccentBar && (
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: accent }} />
        )}
        <div style={{ position: "absolute", top: "23%", left: "50%", transform: "translateX(-50%)" }}>
          <div style={{ width: 13, height: 13, borderRadius: 3.5, background: accent }} />
        </div>
        <div style={{ position: "absolute", top: "39%", left: "18%", right: "18%", height: 2, borderRadius: 1, background: colorOr(values.pdfCoverEyebrowColor, accent), opacity: .9 }} />
        <div className="pdfx-sheet-lines" style={{ top: "44%", left: "14%", right: "14%" }}>
          <i style={{ height: 4, background: colorOr(values.pdfCoverTitleColor, text) }} />
          <i style={{ height: 4, width: "70%", margin: "0 auto", background: colorOr(values.pdfCoverTitleColor, text) }} />
        </div>
        <div className="pdfx-sheet-lines" style={{ top: "58%", left: "22%", right: "22%" }}>
          <i style={{ background: colorOr(values.pdfCoverSubtitleColor, "#9aa0ae"), height: 1.5 }} />
        </div>
        {values.pdfCoverShowRule !== false && (
          <div style={{ position: "absolute", top: "66%", left: "35%", width: "30%", height: 1.5, background: accent }} />
        )}
        <div style={{ position: "absolute", bottom: "8%", left: "30%", right: "30%", height: 1.5, background: colorOr(values.pdfCoverTaglineColor, "#b6bcc8") }} />
      </div>
    );
  }

  return (
    <div className="pdfx-sheet">
      {values.pdfBorderEnabled && (
        <div
          style={{
            position: "absolute",
            inset: `${((values.pdfBorderInset || 6) / 297) * 100 * 1.4}%`,
            border: `1px solid ${colorOr(values.pdfBorderColor, accent)}`,
          }}
        />
      )}
      <div style={{ position: "absolute", top: "5%", left: "12%", display: "flex", alignItems: "center", gap: 2 }}>
        <div style={{ width: 5, height: 5, borderRadius: 1.6, background: accent }} />
        <div style={{ width: 18, height: 2, borderRadius: 1, background: text, opacity: .75 }} />
      </div>
      {values.pdfHeaderRule !== false && (
        <div style={{ position: "absolute", top: "11%", left: "12%", right: "12%", height: 1, background: "#e3e6ee" }} />
      )}
      <div className="pdfx-sheet-lines" style={{ top: "18%" }}>
        <i style={{ height: 3, width: "62%", background: text, opacity: .85, fontFamily: serif ? "serif" : "inherit" }} />
        <i />
        <i />
        <i style={{ width: "82%" }} />
      </div>
      <div className="pdfx-sheet-lines" style={{ top: "40%" }}>
        <i style={{ height: 2.5, width: "48%", background: accent, opacity: .85 }} />
        <i />
        <i style={{ width: "90%" }} />
      </div>
      <div style={{ position: "absolute", top: "58%", left: "12%", right: "12%" }}>
        <div style={{ height: 4, background: accent, borderRadius: "1px 1px 0 0" }} />
        <div style={{ height: 4, border: "1px solid #e0e3ea", borderTop: "none" }} />
        <div style={{ height: 4, border: "1px solid #e0e3ea", borderTop: "none" }} />
      </div>
      {values.pdfWatermarkEnabled !== false && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: accent,
            opacity: 0.22,
            fontSize: 8,
            fontWeight: 800,
            transform: values.pdfWatermarkStyle === "diagonal" ? "rotate(-30deg)" : "none",
          }}
        >
          {values.pdfWatermarkStyle === "tiled" ? "≡≡≡" : "SC"}
        </div>
      )}
      <div className="pdfx-sheet-lines" style={{ bottom: "6%", left: "24%", right: "24%" }}>
        <i style={{ height: 1.5, background: "#c3c8d4" }} />
      </div>
    </div>
  );
}

export default function TemplateGallery({ templates, activeId, onApply, onSave, onDelete }) {
  const [name, setName] = useState("");
  const custom = templates.filter((t) => !t.builtIn);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      <div className="pdfx-panel">
        <div className="pdfx-panel-head">
          <div>
            <h2 className="pdfx-panel-title">Modèles</h2>
            <div className="pdfx-panel-hint">
              Un clic applique tout le style — couleurs, police, filigrane, page de garde, mise en page. Rien n'est
              enregistré tant que tu n'as pas cliqué « Enregistrer », tu peux donc en essayer plusieurs.
            </div>
          </div>
        </div>
        <div className="pdfx-panel-body" style={{ paddingTop: 16 }}>
          <div className="pdfx-gallery">
            {templates.map((tpl) => (
              <div key={tpl.id} className={"pdfx-tpl" + (activeId === tpl.id ? " active" : "")}>
                <button type="button" className="pdfx-tpl-thumb" onClick={() => onApply(tpl)} style={{ width: "100%", border: "none", cursor: "pointer" }}>
                  {tpl.values.pdfCoverPageEnabled && <Sheet values={tpl.values} kind="cover" />}
                  <Sheet values={tpl.values} kind="content" />
                </button>
                {activeId === tpl.id && (
                  <span className="pdfx-tpl-check" aria-hidden="true">
                    ✓
                  </span>
                )}
                <div className="pdfx-tpl-body">
                  <span className="pdfx-tpl-name">
                    {tpl.name}
                    {!tpl.builtIn && <span className="pdfx-tpl-badge">Perso</span>}
                  </span>
                  <span className="pdfx-tpl-blurb">{tpl.blurb || "Modèle enregistré depuis tes réglages."}</span>
                </div>
                <div className="pdfx-tpl-actions">
                  <button type="button" className="admin-btn secondary" style={{ flex: 1, justifyContent: "center" }} onClick={() => onApply(tpl)}>
                    Appliquer
                  </button>
                  {!tpl.builtIn && (
                    <button type="button" className="admin-btn secondary" onClick={() => onDelete(tpl)} title="Supprimer ce modèle">
                      🗑
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pdfx-save-tpl">
        <div style={{ flex: 1, minWidth: 200 }}>
          <div style={{ fontSize: ".85rem", fontWeight: 700 }}>Enregistrer le style actuel comme modèle</div>
          <div className="pdfx-help">
            Reprends cette combinaison plus tard en un clic. {custom.length > 0 ? `${custom.length} modèle(s) perso.` : ""}
          </div>
        </div>
        <input
          className="pdfx-input"
          value={name}
          placeholder="ex : Fiches de révision"
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && name.trim()) {
              onSave(name.trim());
              setName("");
            }
          }}
        />
        <button
          type="button"
          className="admin-btn"
          disabled={!name.trim()}
          onClick={() => {
            onSave(name.trim());
            setName("");
          }}
        >
          + Créer le modèle
        </button>
      </div>
    </div>
  );
}
