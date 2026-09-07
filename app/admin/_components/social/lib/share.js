/* --------------------------------- Partage ---------------------------------
 * Un post = une image + un texte. Ces helpers font en sorte que les deux
 * partent *ensemble* en un seul geste au lieu d'être copiés/téléchargés/
 * recollés séparément.
 *
 * `shareBundle()` est le chemin idéal : la feuille de partage native reçoit le
 * fichier PNG et la légende, l'app choisie (Facebook, WhatsApp, Instagram…)
 * s'ouvre déjà remplie.
 *
 * `prepareBundle()` est le repli quand le navigateur n'a pas cette API : il
 * met l'image dans le presse-papiers, la télécharge (deux moyens de la
 * récupérer, selon que le composeur accepte Ctrl+V ou un fichier), et rend le
 * texte prêt à coller. Chaque étape peut échouer indépendamment (permission
 * presse-papiers refusée, navigateur sans ClipboardItem…), donc on renvoie le
 * détail de ce qui a réellement marché plutôt qu'un booléen : l'UI affiche
 * ensuite les étapes vraiment restantes.
 * ------------------------------------------------------------------------ */

export function canShareNative() {
  return typeof navigator !== "undefined" && typeof navigator.share === "function";
}

// Un `File` de test suffit à savoir si le navigateur acceptera *ce type* de
// partage : canShare({files}) renvoie false sur Firefox et sur Chrome/Linux,
// où navigator.share existe pourtant (mais sans les fichiers).
export function canShareFiles(file) {
  if (typeof navigator === "undefined" || typeof navigator.canShare !== "function") return false;
  try {
    return navigator.canShare({ files: [file] });
  } catch {
    return false;
  }
}

export function canCopyImage() {
  return typeof window !== "undefined" && typeof window.ClipboardItem === "function" && !!navigator.clipboard?.write;
}

export function canvasToBlob(canvas) {
  return new Promise((resolve) => {
    try {
      canvas.toBlob((b) => resolve(b || null), "image/png");
    } catch {
      resolve(null);
    }
  });
}

export function blobToFile(blob, filename) {
  return new File([blob], filename, { type: "image/png" });
}

// "shared" | "cancelled" | "unsupported" — ne lève jamais, l'appelant décide
// simplement quoi faire ensuite (repli manuel, entrée d'historique…).
export async function shareBundle({ blob, filename, text, title }) {
  if (!canShareNative() || !blob) return "unsupported";
  const file = blobToFile(blob, filename);
  if (!canShareFiles(file)) return "unsupported";
  try {
    await navigator.share({ files: [file], text, title });
    return "shared";
  } catch (err) {
    // AbortError = l'utilisateur a fermé la feuille de partage : ce n'est pas
    // une panne, il ne faut surtout pas enchaîner sur le repli manuel.
    if (err?.name === "AbortError") return "cancelled";
    return "unsupported";
  }
}

export async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

export async function copyImage(blob) {
  if (!canCopyImage() || !blob) return false;
  try {
    await navigator.clipboard.write([new window.ClipboardItem({ "image/png": blob })]);
    return true;
  } catch {
    return false;
  }
}

export function downloadBlob(blob, filename) {
  if (!blob) return false;
  try {
    const href = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = href;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    // Laisser au navigateur le temps de démarrer le téléchargement avant de
    // révoquer l'URL — révoquer immédiatement annule le download sur Firefox.
    setTimeout(() => URL.revokeObjectURL(href), 10000);
    return true;
  } catch {
    return false;
  }
}

// Prépare tout ce qui peut l'être en une fois. `imageMode` :
//   "clipboard" → image dans le presse-papiers (le texte n'y est donc pas :
//                 il est affiché à côté, prêt à recopier)
//   "text"      → texte dans le presse-papiers, image seulement téléchargée
// Dans les deux cas l'image est téléchargée, c'est le seul moyen fiable de
// l'attacher dans un composeur qui n'accepte pas le collage.
export async function prepareBundle({ blob, filename, text, imageMode = "text" }) {
  const result = { downloaded: false, imageCopied: false, textCopied: false };
  result.downloaded = downloadBlob(blob, filename);
  if (imageMode === "clipboard") {
    result.imageCopied = await copyImage(blob);
    if (!result.imageCopied) result.textCopied = await copyText(text);
  } else {
    result.textCopied = await copyText(text);
  }
  return result;
}
