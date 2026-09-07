"use client";

import { useEffect, useMemo, useState } from "react";
import {
  PARTNER_PLACEMENTS,
  adImageSrc,
  isAdLive,
  partnerAdHtml,
  safeAdLink,
  todayIso,
} from "@/app/_shared/partnerAds";
import EmptyState from "../ui/EmptyState";
import { useConfirm } from "../ui/ConfirmProvider";
import { useToast } from "../ui/ToastProvider";

/* Régie publicitaire maison : les bannières des annonceurs qui contactent
 * Saad directement, à ne pas confondre avec AdSense (onglet "Publicité").
 * Tout tient dans data/settings.json (`partnerAds` + `partnerAdsEnabled`) et
 * part en une seule requête PUT /api/settings, comme les autres formulaires
 * de réglages. La lecture passe par /api/admin/settings et non /api/settings,
 * qui masque le contact et les notes de l'annonceur au site public.
 */

const UPLOAD_FOLDER = "partenaires";

function newAd() {
  return {
    id: `pa_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`,
    name: "",
    contact: "",
    image: "",
    link: "",
    alt: "",
    title: "",
    description: "",
    cta: "",
    placements: ["header"],
    active: true,
    startDate: "",
    endDate: "",
    note: "",
  };
}

// Les dimensions réelles du visuel sont stockées avec la bannière pour que le
// site puisse poser width/height sur le <img> : le navigateur réserve alors la
// place avant même de télécharger l'image, et rien ne saute au chargement.
function probeDimensions(src) {
  return new Promise((resolve) => {
    if (!src) return resolve(null);
    const img = new Image();
    img.onload = () => resolve({ w: img.naturalWidth, h: img.naturalHeight });
    img.onerror = () => resolve(null);
    img.src = adImageSrc(src);
  });
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(",")[1] || "");
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// L'état affiché dans la liste : pourquoi cette bannière passe ou ne passe
// pas en ce moment, sans avoir à ouvrir la fiche.
function adStatus(ad, today) {
  if (ad.active === false) return { label: "En pause", tone: "off" };
  if (!ad.image && !ad.title) return { label: "Incomplète", tone: "warn" };
  if (!(ad.placements || []).length) return { label: "Sans emplacement", tone: "warn" };
  if (ad.startDate && ad.startDate > today) return { label: `Démarre le ${ad.startDate}`, tone: "warn" };
  if (ad.endDate && ad.endDate < today) return { label: `Terminée le ${ad.endDate}`, tone: "off" };
  return { label: "En ligne", tone: "on" };
}

export default function PartnerAdsManager() {
  const [form, setForm] = useState(null);
  const [stats, setStats] = useState({ views: {}, clicks: {} });
  const [openId, setOpenId] = useState(null);
  const [dirty, setDirty] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const confirm = useConfirm();
  const toast = useToast();
  const today = todayIso();

  useEffect(() => {
    fetch("/api/admin/settings")
      .then((r) => r.json())
      .then((s) =>
        setForm({
          partnerAdsEnabled: s.partnerAdsEnabled !== false,
          partnerAds: Array.isArray(s.partnerAds) ? s.partnerAds : [],
        })
      )
      .catch(() => setError("Erreur lors du chargement des réglages."));
    // Les compteurs ne sont qu'indicatifs : un échec ici ne doit pas empêcher
    // d'éditer les bannières.
    fetch("/api/admin/ad-stats")
      .then((r) => r.json())
      .then((data) => setStats({ views: data.views || {}, clicks: data.clicks || {} }))
      .catch(() => {});
  }, []);

  const liveCount = useMemo(
    () => (form?.partnerAds || []).filter((ad) => isAdLive(ad, today) && (ad.placements || []).length).length,
    [form, today]
  );

  function patch(next) {
    setForm((prev) => ({ ...prev, ...next }));
    setDirty(true);
  }

  // Toujours en forme fonctionnelle : uploadImage() enchaîne plusieurs patchs
  // autour d'un await, et repartir de `form` capturé au rendu écraserait ce
  // qui a été saisi entre-temps.
  function patchAd(id, changes) {
    setForm((prev) => ({
      ...prev,
      partnerAds: prev.partnerAds.map((ad) => (ad.id === id ? { ...ad, ...changes } : ad)),
    }));
    setDirty(true);
  }

  function addAd() {
    const ad = newAd();
    patch({ partnerAds: [...form.partnerAds, ad] });
    setOpenId(ad.id);
  }

  async function removeAd(ad) {
    const ok = await confirm({
      title: "Supprimer cette bannière ?",
      body: ad.name || "Bannière sans nom",
      confirmLabel: "Supprimer",
      tone: "danger",
    });
    if (!ok) return;
    patch({ partnerAds: form.partnerAds.filter((a) => a.id !== ad.id) });
  }

  function duplicateAd(ad) {
    const copy = { ...ad, id: newAd().id, name: `${ad.name || "Bannière"} (copie)` };
    patch({ partnerAds: [...form.partnerAds, copy] });
    setOpenId(copy.id);
  }

  async function uploadImage(ad, file) {
    if (!file) return;
    patchAd(ad.id, { _uploading: true, _uploadError: "" });
    try {
      const dataBase64 = await fileToBase64(file);
      const res = await fetch("/api/admin/upload-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ folder: UPLOAD_FOLDER, filename: file.name, dataBase64 }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Échec de l'envoi.");
      // Mesuré sur le fichier local : l'image vient d'être commitée sur GitHub
      // et n'est pas encore servie par le site tant que le déploiement n'a pas
      // eu lieu, donc la sonder par son URL échouerait ici.
      const dims = await probeDimensions(URL.createObjectURL(file));
      patchAd(ad.id, { image: data.path, w: dims?.w || "", h: dims?.h || "", _uploading: false });
    } catch (e) {
      patchAd(ad.id, { _uploading: false, _uploadError: e.message || "Échec de l'envoi." });
    }
  }

  // Saisie manuelle d'une URL : on mesure au blur plutôt qu'à chaque frappe.
  async function measureImage(ad) {
    if (!ad.image) return patchAd(ad.id, { w: "", h: "" });
    const dims = await probeDimensions(ad.image);
    patchAd(ad.id, { w: dims?.w || "", h: dims?.h || "" });
  }

  async function onSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError("");
    try {
      // Les champs _uploading/_uploadError sont de l'état d'interface : ils
      // ne doivent pas finir commités dans settings.json.
      const cleaned = form.partnerAds.map(({ _uploading, _uploadError, ...ad }) => ad);
      const res = await fetch("/api/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ partnerAdsEnabled: form.partnerAdsEnabled, partnerAds: cleaned }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Erreur lors de l'enregistrement.");
        return;
      }
      setForm({
        partnerAdsEnabled: data.partnerAdsEnabled !== false,
        partnerAds: Array.isArray(data.partnerAds) ? data.partnerAds : [],
      });
      setDirty(false);
      toast.success("Bannières partenaires enregistrées.");
    } catch {
      setError("Erreur réseau lors de l'enregistrement.");
    } finally {
      setSaving(false);
    }
  }

  if (error && !form) return <div className="admin-error">{error}</div>;
  if (!form) return <div className="admin-card">Chargement...</div>;

  return (
    <form onSubmit={onSubmit}>
      <div className="admin-card">
        <h2 className="admin-section-title">Bannières partenaires</h2>
        <p className="admin-image-hint" style={{ marginBottom: 16 }}>
          Tes propres publicités — celles des annonceurs qui te contactent directement. Aucun rapport avec
          AdSense (onglet « Publicité ») : pas de script Google, tu mets ton image, ton lien et tes dates.
          Quand plusieurs bannières visent le même emplacement, elles tournent l'une après l'autre toutes
          les 12 secondes. Les emplacements restent dans le flux de la page : ils ne recouvrent rien, ne
          décalent pas le site, et la place du visuel est réservée avant son chargement.
        </p>

        <label className="admin-switch-row">
          <span className="admin-switch-row-label">
            Afficher les bannières partenaires sur le site
            <span className="admin-switch-row-hint">
              {liveCount > 0
                ? `${liveCount} bannière${liveCount > 1 ? "s" : ""} en ligne actuellement.`
                : "Aucune bannière en ligne pour le moment."}
            </span>
          </span>
          <span className="admin-switch">
            <input
              type="checkbox"
              checked={form.partnerAdsEnabled !== false}
              onChange={(e) => patch({ partnerAdsEnabled: e.target.checked })}
            />
            <span className="admin-switch-thumb" aria-hidden="true" />
          </span>
        </label>
      </div>

      <div className="admin-card">
        <div className="picker-toolbar" style={{ marginBottom: 14 }}>
          <h2 className="admin-section-title" style={{ marginBottom: 0 }}>
            📢 {form.partnerAds.length} bannière{form.partnerAds.length > 1 ? "s" : ""}
          </h2>
          <span className="picker-actions">
            <button type="button" className="admin-btn secondary" onClick={addAd}>
              ➕ Nouvelle bannière
            </button>
          </span>
        </div>

        {form.partnerAds.length ? (
          <div className="pa-admin-list">
            {form.partnerAds.map((ad) => (
              <AdRow
                key={ad.id}
                ad={ad}
                open={openId === ad.id}
                status={adStatus(ad, today)}
                views={stats.views[ad.id] || 0}
                clicks={stats.clicks[ad.id] || 0}
                onToggle={() => setOpenId(openId === ad.id ? null : ad.id)}
                onChange={(changes) => patchAd(ad.id, changes)}
                onUpload={(file) => uploadImage(ad, file)}
                onMeasure={() => measureImage(ad)}
                onDelete={() => removeAd(ad)}
                onDuplicate={() => duplicateAd(ad)}
              />
            ))}
          </div>
        ) : (
          <EmptyState
            icon="📢"
            title="Aucune bannière partenaire"
            message="Ajoute la première quand un annonceur te contacte : son visuel, son lien, ses dates."
          />
        )}
      </div>

      <div className="admin-form-actions">
        <button className="admin-btn" type="submit" disabled={saving}>
          {saving ? "Enregistrement..." : "Enregistrer"}
        </button>
        {dirty && <span className="admin-image-hint">Modifications non enregistrées.</span>}
        {error && <div className="admin-error">{error}</div>}
      </div>
    </form>
  );
}

function AdRow({ ad, open, status, views, clicks, onToggle, onChange, onUpload, onMeasure, onDelete, onDuplicate }) {
  const placements = ad.placements || [];
  const ctr = views ? Math.round((clicks / views) * 1000) / 10 : 0;
  const linkWarning = ad.link && !safeAdLink(ad.link);

  function togglePlacement(key) {
    onChange({
      placements: placements.includes(key) ? placements.filter((p) => p !== key) : [...placements, key],
    });
  }

  return (
    <div className={`pa-admin-item${open ? " open" : ""}`}>
      <div className="pa-admin-head">
        <button type="button" className="pa-admin-toggle" onClick={onToggle} aria-expanded={open}>
          <span className="pa-admin-thumb">
            {ad.image ? <img src={adImageSrc(ad.image)} alt="" /> : <span>📢</span>}
          </span>
          <span className="pa-admin-head-text">
            <span className="pa-admin-name">{ad.name || "Bannière sans nom"}</span>
            <span className="pa-admin-meta">
              {placements.length
                ? placements.map((p) => PARTNER_PLACEMENTS.find((x) => x.key === p)?.label || p).join(" · ")
                : "Aucun emplacement coché"}
            </span>
          </span>
          <span className={`pa-admin-status ${status.tone}`}>{status.label}</span>
          <span className="pa-admin-stat" title="Affichages · clics · taux de clic">
            👁️ {views} · 🖱️ {clicks}
            {views > 0 && <> · {ctr}%</>}
          </span>
          <span className="pa-admin-chevron" aria-hidden="true">
            {open ? "▲" : "▼"}
          </span>
        </button>
      </div>

      {open && (
        <div className="pa-admin-body">
          <div className="admin-form-grid">
            <div className="admin-field">
              <label>Nom de l'annonceur</label>
              <input
                value={ad.name || ""}
                placeholder="Ex : Agence Al Massar"
                onChange={(e) => onChange({ name: e.target.value })}
              />
            </div>
            <div className="admin-field">
              <label>Contact (privé, jamais affiché sur le site)</label>
              <input
                value={ad.contact || ""}
                placeholder="email ou WhatsApp de la personne qui t'a contacté"
                onChange={(e) => onChange({ contact: e.target.value })}
              />
            </div>
          </div>

          <div className="admin-field">
            <label>Lien de destination</label>
            <input
              value={ad.link || ""}
              placeholder="https://..."
              onChange={(e) => onChange({ link: e.target.value })}
            />
            {linkWarning && (
              <div className="admin-error">
                Lien non valide — utilise une adresse commençant par https:// (ou mailto:). Sans lien
                valide, la bannière s'affiche mais n'est pas cliquable.
              </div>
            )}
          </div>

          <div className="admin-field">
            <label>Visuel</label>
            <div className="pa-admin-upload">
              <input
                type="file"
                accept="image/png,image/jpeg,image/webp,image/gif"
                disabled={ad._uploading}
                onChange={(e) => onUpload(e.target.files?.[0])}
              />
              {ad.image && (
                <button type="button" className="admin-link-btn" onClick={() => onChange({ image: "", w: "", h: "" })}>
                  Retirer l'image
                </button>
              )}
            </div>
            <input
              style={{ marginTop: 8 }}
              value={ad.image || ""}
              placeholder="…ou colle l'URL d'une image hébergée par l'annonceur"
              onChange={(e) => onChange({ image: e.target.value })}
              onBlur={onMeasure}
            />
            {ad._uploading && <div className="admin-image-hint">Envoi en cours...</div>}
            {ad._uploadError && <div className="admin-error">{ad._uploadError}</div>}
            <div className="admin-image-hint">
              Format conseillé : <strong>970×120 px</strong> pour le haut et le bas de page (la hauteur
              est plafonnée à 110 px, 70 px sur mobile), <strong>160×600</strong> ou{" "}
              <strong>300×600 px</strong> pour la colonne latérale. Sans image, c'est l'encart texte
              ci-dessous qui s'affiche.
              {ad.w && ad.h ? (
                <>
                  {" "}
                  Visuel mesuré : {ad.w}×{ad.h} px — la place est réservée à l'avance, la page ne
                  bougera pas au chargement.
                </>
              ) : ad.image ? (
                " Dimensions non mesurées — sors du champ pour les relever."
              ) : null}
            </div>
            {ad.image && !/^https?:/i.test(ad.image) && (
              <div className="admin-image-hint">
                Une image envoyée à l'instant n'apparaît sur le site qu'une fois le déploiement terminé
                (environ une minute). En attendant, la bannière se masque d'elle-même au lieu d'afficher
                une image cassée.
              </div>
            )}
          </div>

          <div className="admin-field">
            <label>Texte alternatif de l'image (accessibilité et SEO)</label>
            <input
              value={ad.alt || ""}
              placeholder="Ex : Agence Al Massar — préparation aux concours"
              onChange={(e) => onChange({ alt: e.target.value })}
            />
          </div>

          <div className="admin-form-grid">
            <div className="admin-field">
              <label>Titre (encart texte, si pas d'image)</label>
              <input value={ad.title || ""} onChange={(e) => onChange({ title: e.target.value })} />
            </div>
            <div className="admin-field">
              <label>Bouton (encart texte)</label>
              <input
                value={ad.cta || ""}
                placeholder="En savoir plus"
                onChange={(e) => onChange({ cta: e.target.value })}
              />
            </div>
          </div>
          <div className="admin-field">
            <label>Description (encart texte)</label>
            <input value={ad.description || ""} onChange={(e) => onChange({ description: e.target.value })} />
          </div>

          <div className="admin-field">
            <label>Emplacements sur le site</label>
            <div className="pa-admin-placements">
              {PARTNER_PLACEMENTS.map((p) => (
                <label key={p.key} className="pa-admin-placement">
                  <input
                    type="checkbox"
                    checked={placements.includes(p.key)}
                    onChange={() => togglePlacement(p.key)}
                  />
                  <span>
                    <strong>{p.label}</strong>
                    <span className="admin-switch-row-hint">{p.desc}</span>
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="admin-form-grid">
            <div className="admin-field">
              <label>Début de diffusion (facultatif)</label>
              <input
                type="date"
                value={ad.startDate || ""}
                onChange={(e) => onChange({ startDate: e.target.value })}
              />
            </div>
            <div className="admin-field">
              <label>Fin de diffusion (facultatif)</label>
              <input
                type="date"
                value={ad.endDate || ""}
                onChange={(e) => onChange({ endDate: e.target.value })}
              />
            </div>
          </div>

          <div className="admin-field">
            <label>Note interne (privée : montant, échéance, conditions...)</label>
            <input value={ad.note || ""} onChange={(e) => onChange({ note: e.target.value })} />
          </div>

          <label className="admin-switch-row">
            <span className="admin-switch-row-label">
              Bannière active
              <span className="admin-switch-row-hint">Décoche pour la mettre en pause sans la supprimer.</span>
            </span>
            <span className="admin-switch">
              <input
                type="checkbox"
                checked={ad.active !== false}
                onChange={(e) => onChange({ active: e.target.checked })}
              />
              <span className="admin-switch-thumb" aria-hidden="true" />
            </span>
          </label>

          <div className="admin-field">
            <label>Aperçu</label>
            <div
              className="pa-admin-preview"
              // Même fonction de rendu que le site public, pour que l'aperçu ne
              // puisse pas diverger de ce que verront les visiteurs.
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: partnerAdHtml(ad, placements[0] || "header") }}
            />
          </div>

          <div className="admin-row-actions">
            <button type="button" className="admin-btn secondary" onClick={onDuplicate}>
              Dupliquer
            </button>
            <button type="button" className="admin-btn danger" onClick={onDelete}>
              Supprimer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
