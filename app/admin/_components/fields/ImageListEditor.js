"use client";

import { useState } from "react";
import { pub } from "@/app/_shared/chrome";

/* Uploads go straight to GitHub via /api/admin/upload-image, under
 * images/<ville>/<concoursId>/<filename> — same convention as the
 * pre-existing scanned images in the repo. Needs a saved concoursId and a
 * ville to build that path, so uploading is disabled until the entry has
 * been created (matches how enonce_md/corrige_md mirrors only sync after
 * the concours itself exists).
 */

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(",")[1] || "");
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function ImageListEditor({ value, onChange, concoursId, ville }) {
  const images = value || [];
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const canUpload = Boolean(concoursId) && Boolean((ville || "").trim());

  async function handleFiles(fileList) {
    setError("");
    const files = Array.from(fileList || []);
    if (!files.length) return;
    setUploading(true);
    try {
      const added = [];
      for (const file of files) {
        const dataBase64 = await fileToBase64(file);
        const res = await fetch("/api/admin/upload-image", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ville, concoursId, filename: file.name, dataBase64 }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || `Échec de l'envoi de ${file.name}`);
        added.push(data.path);
      }
      onChange([...images, ...added]);
    } catch (e) {
      setError(e.message || "Échec de l'envoi.");
    } finally {
      setUploading(false);
    }
  }

  function removeAt(idx) {
    onChange(images.filter((_, i) => i !== idx));
  }

  return (
    <div>
      {images.length > 0 && (
        <div className="admin-images">
          {images.map((path, idx) => (
            <div className="admin-image-chip" key={path + idx}>
              <img src={pub(path)} alt="" loading="lazy" />
              <button type="button" className="admin-image-remove" onClick={() => removeAt(idx)} title="Retirer">
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
      {canUpload ? (
        <>
          <input
            type="file"
            accept="image/png,image/jpeg,image/webp,image/gif"
            multiple
            disabled={uploading}
            onChange={(e) => handleFiles(e.target.files)}
          />
          {uploading && <div className="admin-image-hint">Envoi en cours...</div>}
          {error && <div className="admin-error">{error}</div>}
        </>
      ) : (
        <div className="admin-image-hint">
          Enregistrez d'abord le concours (avec une ville renseignée) pour pouvoir ajouter des images.
        </div>
      )}
    </div>
  );
}
