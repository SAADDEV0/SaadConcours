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

// En mode « partage de lien », le lien est déjà attaché par Facebook : le
// laisser aussi dans la légende afficherait deux fois la même URL sous le
// post. On retire donc la ligne d'appel à l'action, et elle seule.
function textWithoutLink(text, url) {
  if (!url) return text;
  return text
    .split("\n")
    .filter((line) => !line.includes(url))
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export default function ShareSheet({ open, onClose, blob, filename, text, url, itemLabel, published, onPublish, onTrack }) {
  const [mode, setMode] = useState("auto"); // "auto" (natif si dispo) | "manuel"
  const [step, setStep] = useState("choose");
  const [platformKey, setPlatformKey] = useState(null);
  const [flow, setFlow] = useState("carte"); // "lien" (aperçu auto) | "carte" (image du studio)
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
    setFlow("carte");
    setPrep(null);
    setConfirmKey(null);
    setCopied(null);
    setMode("auto");
  }, [open]);

  if (!open) return null;

  const platform = platformKey ? platformFor(platformKey) : null;
  const useNative = mode === "auto" && nativeReady;

  // `forced` permet de rejouer la même plateforme dans l'autre parcours
  // ("lien" ↔ "carte") depuis l'écran de résultat, sans repasser par la
  // confirmation de doublon ni par le partage natif.
  async function start(p, forced) {
    if (busy || !blob) return;
    // Doublon : un premier clic demande confirmation, le second (sur
    // « Republier ») exécute — ça garde aussi le geste utilisateur intact
    // pour navigator.share, qu'une boîte de dialogue asynchrone perdrait.
    if (!forced && published?.[p.key] && confirmKey !== p.key) {
      setConfirmKey(p.key);
      return;
    }
    setConfirmKey(null);
    setPlatformKey(p.key);

    // Le partage natif reste le meilleur chemin quand il existe : il envoie
    // l'image du studio *et* la légende d'un coup. Le partage de lien n'est
    // qu'un pis-aller pour les navigateurs qui ne l'ont pas.
    if (!forced && useNative && p.key !== "autre") {
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
      // "unsupported" → on enchaîne sur un parcours manuel plutôt que de
      // laisser l'admin sans rien.
    }

    const useLink = forced ? forced === "lien" : Boolean(p.linkShare);
    setBusy(true);
    if (useLink) {
      // Rien à télécharger : c'est Facebook qui ira chercher l'og:image de la
      // page. Seule la légende reste à coller.
      const ok = await copyText(textWithoutLink(text, url));
      setBusy(false);
      setFlow("lien");
      setPrep({ downloaded: false, imageCopied: false, textCopied: ok });
      setCopied(ok ? "texte" : null);
    } else {
      const done = await prepareBundle({ blob, filename, text, imageMode: p.prefill ? "clipboard" : "text" });
      setBusy(false);
      setFlow("carte");
      setPrep(done);
      setCopied(done.imageCopied ? "image" : done.textCopied ? "texte" : null);
    }
    setStep("ready");
    onTrack("prepare", p.key);
  }

  async function recopy(what) {
    if (what === "texte") {
      const ok = await copyText(flow === "lien" ? textWithoutLink(text, url) : text);
      setCopied(ok ? "texte" : null);
      if (ok) onTrack("copie", platformKey);
    } else {
      const ok = await copyImage(blob);
      setCopied(ok ? "image" : null);
      if (!ok) downloadBlob(blob, filename);
    }
  }

  const isLink = flow === "lien" && platform?.linkUrl;
  // Même texte allégé que celui mis dans le presse-papiers : le lien est déjà
  // porté par le paramètre `u`, le répéter dans la légende ferait doublon.
  const openHref = platform
    ? isLink
      ? platform.linkUrl({ text: textWithoutLink(text, url), url })
      : platform.openUrl({ text, url })
    : null;

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
              {isLink ? (
                <li className="ok">
                  <span className="sgx-step-n">🖼</span>
                  <div>
                    <strong>Image ajoutée automatiquement</strong>
                    <p>{platform.linkHint} Rien à télécharger ni à téléverser.</p>
                  </div>
                </li>
              ) : (
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
              )}

              <li className={copied ? "ok" : "warn"}>
                <span className="sgx-step-n">{isLink ? "1" : "2"}</span>
                <div>
                  <strong>
                    {copied === "image"
                      ? "Image copiée — Ctrl+V dans le composeur"
                      : copied === "texte"
                      ? "Texte copié — Ctrl+V dans le composeur"
                      : "Presse-papiers indisponible"}
                  </strong>
                  <p>
                    {isLink
                      ? "Le lien est déjà joint : la légende copiée n'en contient pas de second."
                      : platform.prefill
                      ? "Le texte est déjà dans le lien ci-dessous."
                      : "Le presse-papiers ne garde qu'une chose : colle, puis reviens copier l'autre."}
                  </p>
                </div>
                <div className="sgx-step-actions">
                  <button type="button" className="admin-btn secondary" onClick={() => recopy("texte")}>
                    Texte
                  </button>
                  {!isLink && canCopyImage() && (
                    <button type="button" className="admin-btn secondary" onClick={() => recopy("image")}>
                      Image
                    </button>
                  )}
                </div>
              </li>

              <li className="ok">
                <span className="sgx-step-n">{isLink ? "2" : "3"}</span>
                <div>
                  <strong>Publier sur {platform.label}</strong>
                  <p>{isLink ? "La fenêtre de partage s'ouvre avec l'aperçu déjà prêt." : platform.hint}</p>
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

            {platform.linkShare && (
              <p className="sgx-share-note">
                {isLink ? (
                  <>
                    L&apos;aperçu vient de la page (1200×630), pas de la carte du studio.{" "}
                    <button type="button" className="sgx-linkbtn" onClick={() => start(platform, "carte")}>
                      Publier plutôt l&apos;image du studio →
                    </button>
                  </>
                ) : (
                  <>
                    Tu peux éviter le téléchargement : Facebook sait récupérer l&apos;aperçu tout seul.{" "}
                    <button type="button" className="sgx-linkbtn" onClick={() => start(platform, "lien")}>
                      Repasser au partage de lien →
                    </button>
                  </>
                )}
              </p>
            )}

            <div className="sgx-ready-actions">
              <button type="button" className="admin-btn secondary" onClick={() => setStep("choose")}>
                ← Autre réseau
              </button>
              <button type="button" className="admin-btn sgx-btn-done" onClick={() => onPublish(platform.key)}>
                ✅ J&apos;ai publié sur {platform.label}
              </button>
            </div>
            <p className="sgx-share-note">
              « J&apos;ai publié » enregistre le post dans l&apos;historique — c&apos;est ce qui déclenche
              l&apos;avertissement anti-doublon la prochaine fois.
            </p>
          </div>
        )}
      </div>
    </Modal>
  );
}
