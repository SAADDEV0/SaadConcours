"use client";

import { useEffect, useMemo, useState } from "react";
import Modal from "../ui/Modal";
import { PLATFORMS, PlatformIcon, platformFor } from "./lib/platforms";
import {
  blobToFile,
  canCopyImage,
  canShareFiles,
  canShareNative,
  copyImage,
  copyText,
  downloadBlob,
  prepareBundle,
  shareBundle,
} from "./lib/share";
import { formatDateFr } from "./lib/contentTypes";

/* ------------------------------ Feuille de partage ------------------------------
 * Le geste demandé : « je clique sur Partager, je choisis le réseau, et le
 * post part avec l'image ET le texte ». Deux exécutions selon le navigateur —
 * voir lib/platforms.js pour le détail du pourquoi :
 *
 *   • partage natif disponible → un seul clic, l'app s'ouvre déjà remplie ;
 *   • sinon → l'écran « prêt à publier » : image téléchargée + presse-papiers
 *     rempli + composeur ouvert avec la légende quand la plateforme l'accepte.
 *
 * Dans les deux cas la publication est confirmée à la main (« J'ai publié »),
 * ce qui alimente l'historique anti-doublon : rien n'est marqué publié sur la
 * foi d'un clic qui a pu être abandonné en route.
 * ------------------------------------------------------------------------ */

export default function ShareSheet({ open, onClose, blob, filename, text, url, itemLabel, published, onPublish, onTrack }) {
  const [mode, setMode] = useState("auto"); // "auto" (natif si dispo) | "manuel"
  const [step, setStep] = useState("choose");
  const [platformKey, setPlatformKey] = useState(null);
  const [prep, setPrep] = useState(null);
  const [confirmKey, setConfirmKey] = useState(null);
  const [busy, setBusy] = useState(false);
  const [copied, setCopied] = useState(null); // "texte" | "image"

  // canShare() a besoin d'un vrai File pour répondre : on le teste sur le
  // fichier réel dès qu'il est prêt, pas sur une supposition d'user-agent.
  const nativeReady = useMemo(() => {
    if (!blob || !canShareNative()) return false;
    return canShareFiles(blobToFile(blob, filename));
  }, [blob, filename]);

  useEffect(() => {
    if (!open) return;
    setStep("choose");
    setPlatformKey(null);
    setPrep(null);
    setConfirmKey(null);
    setCopied(null);
    setMode("auto");
  }, [open]);

  if (!open) return null;

  const platform = platformKey ? platformFor(platformKey) : null;
  const useNative = mode === "auto" && nativeReady;

  async function start(p) {
    if (busy || !blob) return;
    // Doublon : un premier clic demande confirmation, le second (sur
    // « Republier ») exécute — ça garde aussi le geste utilisateur intact
    // pour navigator.share, qu'une boîte de dialogue asynchrone perdrait.
    if (published?.[p.key] && confirmKey !== p.key) {
      setConfirmKey(p.key);
      return;
    }
    setConfirmKey(null);
    setPlatformKey(p.key);

    if (useNative && p.key !== "autre") {
      setBusy(true);
      const result = await shareBundle({
        blob,
        filename,
        text,
        title: itemLabel,
      });
      setBusy(false);
      if (result === "shared") {
        onPublish(p.key);
        return;
      }
      if (result === "cancelled") {
        setPlatformKey(null);
        return;
      }
      // "unsupported" → on bascule sur la préparation manuelle plutôt que de
      // laisser l'admin sans rien.
    }

    setBusy(true);
    const done = await prepareBundle({ blob, filename, text, imageMode: p.prefill ? "clipboard" : "text" });
    setBusy(false);
    setPrep(done);
    setCopied(done.imageCopied ? "image" : done.textCopied ? "texte" : null);
    setStep("ready");
    onTrack("prepare", p.key);
  }

  async function recopy(what) {
    if (what === "texte") {
      const ok = await copyText(text);
      setCopied(ok ? "texte" : null);
      if (ok) onTrack("copie", platformKey);
    } else {
      const ok = await copyImage(blob);
      setCopied(ok ? "image" : null);
      if (!ok) downloadBlob(blob, filename);
    }
  }

  const openHref = platform ? platform.openUrl({ text, url }) : null;

  return (
    <Modal open={open} onClose={onClose} labelledBy="sgx-share-title">
      <div className="sgx-share">
        <div className="sgx-share-head">
          <div>
            <h2 className="admin-modal-title" id="sgx-share-title">
              {step === "choose" ? "Partager ce post" : `Prêt à publier sur ${platform?.label}`}
            </h2>
            <p className="sgx-share-sub">{itemLabel}</p>
          </div>
          <button type="button" className="admin-icon-btn" onClick={onClose} aria-label="Fermer">
            ✕
          </button>
        </div>

        {step === "choose" && (
          <>
            <p className="sgx-share-lead">
              {useNative
                ? "Choisis le réseau : l'image et le texte partent ensemble via le partage de ton appareil."
                : "Choisis le réseau : l'image et le texte sont préparés en un clic, puis le composeur s'ouvre."}
            </p>

            <div className="sgx-share-grid">
              {PLATFORMS.map((p) => {
                const at = published?.[p.key];
                const asking = confirmKey === p.key;
                return (
                  <button
                    type="button"
                    key={p.key}
                    className={"sgx-share-tile" + (at ? " done" : "") + (asking ? " asking" : "")}
                    style={{ "--tile": p.gradient || p.color }}
                    onClick={() => start(p)}
                    disabled={busy || !blob}
                  >
                    <span className="sgx-share-tile-icon">
                      <PlatformIcon platform={p.key} size={22} />
                    </span>
                    <span className="sgx-share-tile-label">{p.label}</span>
                    {asking ? (
                      <span className="sgx-share-tile-warn">Déjà publié — republier ?</span>
                    ) : at ? (
                      <span className="sgx-share-tile-state">✓ publié le {formatDateFr(at.slice(0, 10))}</span>
                    ) : (
                      <span className="sgx-share-tile-state muted">jamais publié</span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="sgx-share-foot">
              {nativeReady ? (
                <button type="button" className="sgx-linkbtn" onClick={() => setMode(mode === "auto" ? "manuel" : "auto")}>
                  {mode === "auto" ? "Préférer la préparation manuelle" : "Revenir au partage natif"}
                </button>
              ) : (
                <span className="sgx-share-note">
                  Ce navigateur ne sait pas envoyer un fichier vers une autre app : le studio prépare donc image +
                  texte, puis ouvre le composeur.
                </span>
              )}
            </div>
          </>
        )}

        {step === "ready" && platform && (
          <div className="sgx-ready">
            <ol className="sgx-steps">
              <li className={prep?.downloaded ? "ok" : "warn"}>
                <span className="sgx-step-n">1</span>
                <div>
                  <strong>{prep?.downloaded ? "Image téléchargée" : "Téléchargement bloqué"}</strong>
                  <p>{filename}</p>
                </div>
                <button type="button" className="admin-btn secondary" onClick={() => downloadBlob(blob, filename)}>
                  ⬇ Encore
                </button>
              </li>

              <li className={copied ? "ok" : "warn"}>
                <span className="sgx-step-n">2</span>
                <div>
                  <strong>
                    {copied === "image"
                      ? "Image copiée — Ctrl+V dans le composeur"
                      : copied === "texte"
                      ? "Texte copié — Ctrl+V dans le composeur"
                      : "Presse-papiers indisponible"}
                  </strong>
                  <p>
                    {platform.prefill
                      ? "Le texte est déjà dans le lien ci-dessous."
                      : "Le presse-papiers ne garde qu'une chose : colle, puis reviens copier l'autre."}
                  </p>
                </div>
                <div className="sgx-step-actions">
                  <button type="button" className="admin-btn secondary" onClick={() => recopy("texte")}>
                    Texte
                  </button>
                  {canCopyImage() && (
                    <button type="button" className="admin-btn secondary" onClick={() => recopy("image")}>
                      Image
                    </button>
                  )}
                </div>
              </li>

              <li className="ok">
                <span className="sgx-step-n">3</span>
                <div>
                  <strong>Publier sur {platform.label}</strong>
                  <p>{platform.hint}</p>
                </div>
                {openHref && (
                  <a
                    className="admin-btn"
                    style={{ background: platform.gradient || platform.color, color: "#fff" }}
                    href={openHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ouvrir ↗
                  </a>
                )}
              </li>
            </ol>

            <div className="sgx-ready-actions">
              <button type="button" className="admin-btn secondary" onClick={() => setStep("choose")}>
                ← Autre réseau
              </button>
              <button type="button" className="admin-btn sgx-btn-done" onClick={() => onPublish(platform.key)}>
                ✅ J'ai publié sur {platform.label}
              </button>
            </div>
            <p className="sgx-share-note">
              « J'ai publié » enregistre le post dans l'historique — c'est ce qui déclenche l'avertissement anti-doublon
              la prochaine fois.
            </p>
          </div>
        )}
      </div>
    </Modal>
  );
}
