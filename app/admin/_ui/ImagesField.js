"use client";

import { useRef, useState } from "react";
import Icon from "./Icon";
import { assetUrl, bytesToBase64 } from "../_lib/repo";
import { bytes } from "../_lib/format";

const MAX_SIDE = 2200;

// Convertit une image déposée en WebP (le format de tous les scans du site
// depuis la conversion de septembre) et la réduit à 2200 px de côté : un
// scan de téléphone de 6 Mo tombe autour de 400 Ko, sans perte de lisibilité.
export async function prepareImage(file) {
  const original = new Uint8Array(await file.arrayBuffer());
  try {
    const bmp = await createImageBitmap(file);
    const scale = Math.min(1, MAX_SIDE / Math.max(bmp.width, bmp.height));
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(bmp.width * scale);
    canvas.height = Math.round(bmp.height * scale);
    canvas.getContext("2d").drawImage(bmp, 0, 0, canvas.width, canvas.height);
    const blob = await new Promise((r) => canvas.toBlob(r, "image/webp", 0.86));
    if (blob && blob.type === "image/webp" && blob.size < original.length * 1.1) {
      const buf = new Uint8Array(await blob.arrayBuffer());
      return { base64: bytesToBase64(buf), ext: "webp", size: buf.length, previewUrl: URL.createObjectURL(blob), originalSize: original.length };
    }
  } catch {
    // format non décodable par le navigateur : on garde le fichier tel quel
  }
  const ext = (file.name.split(".").pop() || "png").toLowerCase();
  return { base64: bytesToBase64(original), ext, size: original.length, previewUrl: URL.createObjectURL(file), originalSize: original.length };
}

// value : chemins déjà publiés ; staged : images déposées, envoyées au
// prochain enregistrement (dans le même commit que la fiche).
export default function ImagesField({ value = [], onChange, staged = [], onStage, onUnstage, single = false }) {
  const inputRef = useRef(null);
  const [over, setOver] = useState(false);
  const [busy, setBusy] = useState(false);

  async function addFiles(files) {
    const list = [...files].filter((f) => /^image\//.test(f.type));
    if (!list.length) return;
    setBusy(true);
    try {
      for (const f of list) {
        const prepared = await prepareImage(f);
        onStage({ key: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, name: f.name, ...prepared });
      }
    } finally {
      setBusy(false);
    }
  }

  function move(i, dir) {
    const next = [...value];
    const j = i + dir;
    if (j < 0 || j >= next.length) return;
    [next[i], next[j]] = [next[j], next[i]];
    onChange(next);
  }

  return (
    <div>
      <div className="ax-images">
        {(single && staged.length ? [] : value).map((p, i) => (
          <figure className="ax-image" key={p} style={{ margin: 0 }}>
            <a href={assetUrl(p)} target="_blank" rel="noopener noreferrer" title={p}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={assetUrl(p)} alt={`Page ${i + 1}`} loading="lazy" />
            </a>
            <figcaption className="ax-image-bar">
              <span>p. {i + 1}</span>
              <span style={{ display: "flex", gap: 4 }}>
                <button type="button" onClick={() => move(i, -1)} aria-label="Avancer" disabled={i === 0}>
                  <Icon name="chevronLeft" size="sm" />
                </button>
                <button type="button" onClick={() => move(i, 1)} aria-label="Reculer" disabled={i === value.length - 1}>
                  <Icon name="chevronRight" size="sm" />
                </button>
                <button type="button" onClick={() => onChange(value.filter((x) => x !== p))} aria-label="Retirer de la fiche">
                  <Icon name="x" size="sm" />
                </button>
              </span>
            </figcaption>
          </figure>
        ))}
        {staged.map((s, i) => (
          <figure className="ax-image staged" key={s.key} style={{ margin: 0 }} title={`${s.name} — ${bytes(s.originalSize)} → ${bytes(s.size)}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={s.previewUrl} alt={s.name} />
            <figcaption className="ax-image-bar">
              <span>
                p. {value.length + i + 1} · {s.ext.toUpperCase()} {bytes(s.size)}
              </span>
              <button type="button" onClick={() => onUnstage(s.key)} aria-label="Annuler l'ajout">
                <Icon name="x" size="sm" />
              </button>
            </figcaption>
          </figure>
        ))}
        <div
          className={`ax-drop${over ? " over" : ""}`}
          role="button"
          tabIndex={0}
          onClick={() => inputRef.current?.click()}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && inputRef.current?.click()}
          onDragOver={(e) => {
            e.preventDefault();
            setOver(true);
          }}
          onDragLeave={() => setOver(false)}
          onDrop={(e) => {
            e.preventDefault();
            setOver(false);
            addFiles(e.dataTransfer.files);
          }}
        >
          <Icon name={busy ? "loader" : "upload"} size="lg" />
          <strong>{busy ? "Conversion…" : single ? (value.length || staged.length ? "Remplacer" : "Choisir l'image") : "Ajouter des pages"}</strong>
          <span className="ax-hint">Glisse les scans ici. Convertis en WebP automatiquement.</span>
          <input ref={inputRef} type="file" accept="image/*" multiple={!single} hidden onChange={(e) => (addFiles(e.target.files), (e.target.value = ""))} />
        </div>
      </div>
      {staged.length > 0 && (
        <p className="ax-hint" style={{ marginTop: 8 }}>
          {staged.length} image{staged.length > 1 ? "s" : ""} en attente : envoyée{staged.length > 1 ? "s" : ""} avec la fiche au prochain enregistrement.
        </p>
      )}
    </div>
  );
}
