/* ------------------------------- Partage natif -------------------------------
 * navigator.share (Web Share API niveau 2, avec `files`) ouvre la feuille de
 * partage native du système — sur mobile (Chrome/Safari Android/iOS) et sur
 * desktop récent (Chrome/Edge Windows/macOS), WhatsApp y figure parmi les
 * cibles quand l'app/l'extension WhatsApp Web est installée, et l'image +
 * le texte sont déjà attachés : il ne reste qu'à choisir le contact. C'est
 * la seule façon web-standard d'obtenir ce comportement — un lien wa.me ne
 * peut pas pré-attacher un fichier (limitation de l'URL scheme WhatsApp,
 * pas de ce code), donc le mode dégradé se contente de préparer texte +
 * image séparément.
 * ------------------------------------------------------------------------ */

export function canShareFiles(file) {
  return typeof navigator !== "undefined" && !!navigator.canShare && navigator.canShare({ files: [file] });
}

export function canShareNative() {
  return typeof navigator !== "undefined" && !!navigator.share;
}

export async function canvasToFile(canvas, filename) {
  const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
  return new File([blob], filename, { type: "image/png" });
}

// Renvoie "shared" | "cancelled" | "unsupported" — jamais ne lève, pour que
// l'appelant décide simplement quoi afficher/faire ensuite (ex. fallback).
export async function shareNative({ canvas, text, filename }) {
  if (!canShareNative()) return "unsupported";
  const file = await canvasToFile(canvas, filename);
  const data = canShareFiles(file) ? { text, files: [file] } : { text };
  try {
    await navigator.share(data);
    return "shared";
  } catch (err) {
    if (err?.name === "AbortError") return "cancelled";
    return "unsupported";
  }
}

export function whatsappWebUrl(text) {
  return `https://wa.me/?text=${encodeURIComponent(text)}`;
}

export function instagramUrl() {
  return "https://www.instagram.com/";
}
