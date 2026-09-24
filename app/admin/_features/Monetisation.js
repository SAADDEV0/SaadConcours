"use client";

import { useEffect, useMemo, useState } from "react";
import Icon from "../_ui/Icon";
import { Alert, Empty, ErrorState, Field, Hero, SectionTitle, Skeleton, Switch, Tabs, useTab } from "../_ui/kit";
import { Drawer, useConfirm, useToast } from "../_ui/feedback";
import { useSettingsForm, SETTINGS_PATH } from "../_lib/settings";
import { useJson } from "../_lib/content";
import { assetUrl, mutateJson } from "../_lib/repo";
import { api } from "../_lib/api";
import { prepareImage } from "../_ui/ImagesField";
import { num, slugify, todayIso } from "../_lib/format";
import { PARTNER_PLACEMENTS, isAdLive } from "@/app/_shared/partnerAds";

const TABS = [
  { key: "partenaires", label: "Bannières partenaires", icon: "megaphone" },
  { key: "adsense", label: "Google AdSense", icon: "coins" },
];

const SLOTS = [
  { enabledKey: "adsHomeBannerEnabled", slotKey: "adsHomeBannerSlot", title: "Accueil — bannière", desc: "Sous le titre de la page d'accueil." },
  { enabledKey: "adsConcoursMidEnabled", slotKey: "adsConcoursMidSlot", title: "Fiche concours — entre énoncé et corrigé", desc: "Un seul bloc entre les deux sections." },
  { enabledKey: "adsConcoursBottomEnabled", slotKey: "adsConcoursBottomSlot", title: "Fiche concours — bas de page", desc: "Après les scans, avant les concours similaires." },
];

function AdSense() {
  const keys = useMemo(() => ["adsEnabled", "adsPublisherId", ...SLOTS.flatMap((s) => [s.enabledKey, s.slotKey])], []);
  const s = useSettingsForm(keys);
  const toast = useToast();
  if (s.error) return <ErrorState error={s.error} onRetry={s.reload} />;
  if (!s.form) return <Skeleton rows={5} />;
  const pubOk = !s.form.adsPublisherId || /^ca-pub-\d{10,}$/.test(s.form.adsPublisherId);
  return (
    <div className="ax-grid main-side">
      <section className="ax-card">
        <SectionTitle>Emplacements</SectionTitle>
        {SLOTS.map((slot) => (
          <div key={slot.slotKey} className="ax-card pad-sm" style={{ marginBottom: 10, background: "var(--bg)" }}>
            <Switch checked={s.form[slot.enabledKey]} onChange={(v) => s.set(slot.enabledKey, v)} label={slot.title} />
            <p className="ax-hint" style={{ margin: "6px 0 8px" }}>{slot.desc}</p>
            <input className="ax-input sm ax-mono" placeholder="ID du bloc (data-ad-slot), ex. 1234567890" value={s.form[slot.slotKey] || ""} onChange={(e) => s.set(slot.slotKey, e.target.value.trim())} disabled={!s.form[slot.enabledKey]} />
          </div>
        ))}
      </section>
      <aside className="ax-stack">
        <section className="ax-card">
          <SectionTitle>Compte</SectionTitle>
          <Switch checked={s.form.adsEnabled} onChange={(v) => s.set("adsEnabled", v)} label="AdSense actif sur le site" />
          <Field label="Identifiant éditeur" error={pubOk ? "" : "Format attendu : ca-pub-XXXXXXXXXXXXXXXX"}>
            <input className="ax-input ax-mono" style={{ marginTop: 10 }} value={s.form.adsPublisherId || ""} onChange={(e) => s.set("adsPublisherId", e.target.value.trim())} />
          </Field>
          <button
            type="button"
            className="ax-btn primary block"
            disabled={!s.dirty || s.saving || !pubOk}
            onClick={async () => {
              try {
                await s.save("AdSense");
                toast.success("AdSense enregistré", "Actif sur le site après le prochain déploiement.");
              } catch (err) {
                toast.error("Échec", err.message);
              }
            }}
          >
            <Icon name="save" /> Enregistrer
          </button>
        </section>
        <Alert tone="info">Le fichier ads.txt du site doit contenir le même identifiant éditeur, sinon Google limite la diffusion.</Alert>
      </aside>
    </div>
  );
}

function newAd() {
  return { id: `pa_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`, name: "", contact: "", image: "", link: "", alt: "", title: "", description: "", cta: "", placements: ["header"], active: true, startDate: "", endDate: "", note: "", w: "", h: "" };
}

function statusOf(ad) {
  const today = todayIso();
  if (ad.active === false) return ["Désactivée", ""];
  if (!(ad.placements || []).length) return ["Sans emplacement", "amber"];
  if (ad.startDate && ad.startDate > today) return [`Programmée (${ad.startDate})`, "violet"];
  if (ad.endDate && ad.endDate < today) return ["Terminée", "red"];
  return isAdLive(ad, today) ? ["En diffusion", "green"] : ["Incomplète", "amber"];
}

function AdEditor({ ad, onClose, onSaved }) {
  const [form, setForm] = useState(ad);
  const [image, setImage] = useState(null);
  const [saving, setSaving] = useState(false);
  const toast = useToast();
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  async function pick(file) {
    const prepared = await prepareImage(file);
    const dims = await new Promise((r) => {
      const img = new Image();
      img.onload = () => r({ w: img.naturalWidth, h: img.naturalHeight });
      img.onerror = () => r({});
      img.src = prepared.previewUrl;
    });
    setImage({ ...prepared, ...dims });
  }

  async function save() {
    setSaving(true);
    try {
      let next = { ...form };
      const files = [];
      if (image) {
        const path = `images/partenaires/${slugify(form.name || "banniere")}-${Date.now().toString(36)}.${image.ext}`;
        files.push({ path, base64: image.base64 });
        next = { ...next, image: path, w: image.w || "", h: image.h || "" };
      }
      await mutateJson(SETTINGS_PATH, (cur) => {
        const list = Array.isArray(cur.partnerAds) ? cur.partnerAds : [];
        const idx = list.findIndex((a) => a.id === next.id);
        return {
          data: { ...cur, partnerAds: idx === -1 ? [...list, next] : list.map((a, i) => (i === idx ? next : a)) },
          files,
          message: `Bannière partenaire : ${next.name || next.id}`,
          audit: { action: idx === -1 ? "create" : "update", resource: "settings", label: `Bannière « ${next.name || next.id} »` },
        };
      });
      toast.success("Bannière enregistrée", "En ligne au prochain déploiement.");
      onSaved();
    } catch (err) {
      toast.error("Enregistrement impossible", err.message);
    } finally {
      setSaving(false);
    }
  }

  const preview = image?.previewUrl || (form.image ? assetUrl(form.image) : "");
  return (
    <Drawer
      title={ad.name ? `Bannière « ${ad.name} »` : "Nouvelle bannière"}
      onClose={onClose}
      width={620}
      footer={
        <>
          <button type="button" className="ax-btn" onClick={onClose}>
            Annuler
          </button>
          <button type="button" className="ax-btn primary" disabled={saving || (!preview && !form.title)} onClick={save}>
            <Icon name={saving ? "loader" : "save"} /> Enregistrer
          </button>
        </>
      }
    >
      <Field label="Annonceur" required>
        <input className="ax-input" value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Nom de l'école, du centre…" />
      </Field>
      <Field label="Visuel" hint="970×120 pour le haut/bas de page, 160×600 pour les colonnes.">
        <div className="ax-ad-preview">
          {preview ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={preview} alt="" />
          ) : (
            <span className="ax-muted">Aucune image : un encart texte sera affiché.</span>
          )}
        </div>
        <label className="ax-btn sm" style={{ marginTop: 8, alignSelf: "flex-start" }}>
          <Icon name="upload" size="sm" /> {preview ? "Remplacer" : "Choisir une image"}
          <input type="file" accept="image/*" hidden onChange={(e) => e.target.files[0] && pick(e.target.files[0])} />
        </label>
      </Field>
      <Field label="Lien de destination">
        <input className="ax-input" value={form.link} onChange={(e) => set("link", e.target.value)} placeholder="https://…" />
      </Field>
      <div className="ax-row">
        <Field label="Titre (encart texte)">
          <input className="ax-input" value={form.title} onChange={(e) => set("title", e.target.value)} />
        </Field>
        <Field label="Bouton">
          <input className="ax-input" value={form.cta} onChange={(e) => set("cta", e.target.value)} placeholder="En savoir plus" />
        </Field>
      </div>
      <Field label="Description">
        <textarea className="ax-textarea" rows={2} value={form.description} onChange={(e) => set("description", e.target.value)} />
      </Field>
      <Field label="Texte alternatif">
        <input className="ax-input" value={form.alt} onChange={(e) => set("alt", e.target.value)} />
      </Field>
      <Field label="Emplacements">
        <div className="ax-stack" style={{ gap: 8 }}>
          {PARTNER_PLACEMENTS.map((p) => (
            <label key={p.key} className="ax-check" title={p.desc}>
              <input
                type="checkbox"
                checked={(form.placements || []).includes(p.key)}
                onChange={(e) => set("placements", e.target.checked ? [...(form.placements || []), p.key] : form.placements.filter((x) => x !== p.key))}
              />
              {p.label}
            </label>
          ))}
        </div>
      </Field>
      <div className="ax-row">
        <Field label="Début">
          <input type="date" className="ax-input" value={form.startDate} onChange={(e) => set("startDate", e.target.value)} />
        </Field>
        <Field label="Fin">
          <input type="date" className="ax-input" value={form.endDate} onChange={(e) => set("endDate", e.target.value)} />
        </Field>
      </div>
      <Switch checked={form.active !== false} onChange={(v) => set("active", v)} label="Active" />
      <hr className="ax-sep" />
      <Alert tone="info">Contact et notes restent privés : le site public ne les reçoit jamais.</Alert>
      <Field label="Contact de l'annonceur">
        <input className="ax-input" value={form.contact} onChange={(e) => set("contact", e.target.value)} />
      </Field>
      <Field label="Notes (tarif, échéances…)">
        <textarea className="ax-textarea" rows={3} value={form.note} onChange={(e) => set("note", e.target.value)} />
      </Field>
    </Drawer>
  );
}

function Partners() {
  const { data, loading, error, reload } = useJson(SETTINGS_PATH);
  const [editing, setEditing] = useState(null);
  const [stats, setStats] = useState({ views: {}, clicks: {} });
  const toast = useToast();
  const confirm = useConfirm();
  useEffect(() => {
    api("/api/admin/metrics?scope=full&preset=7d").then((d) => setStats(d.ads || { views: {}, clicks: {} })).catch(() => {});
  }, []);

  if (error) return <ErrorState error={error} onRetry={reload} />;
  if (loading || !data) return <Skeleton rows={4} height={90} />;
  const ads = Array.isArray(data.partnerAds) ? data.partnerAds : [];

  async function patch(fn, label) {
    try {
      await mutateJson(SETTINGS_PATH, (cur) => ({ data: fn(cur), message: `Bannières : ${label}`, audit: { action: "settings", resource: "settings", label } }));
      toast.success("Enregistré");
    } catch (err) {
      toast.error("Échec", err.message);
    }
  }

  return (
    <>
      <div className="ax-card-head">
        <Switch checked={data.partnerAdsEnabled !== false} onChange={(v) => patch((c) => ({ ...c, partnerAdsEnabled: v }), v ? "activées" : "désactivées")} label="Diffusion des bannières partenaires" />
        <button type="button" className="ax-btn primary" onClick={() => setEditing(newAd())}>
          <Icon name="plus" /> Nouvelle bannière
        </button>
      </div>
      {!ads.length ? (
        <Empty icon="🪧" title="Aucune bannière">Vends de l&apos;espace à une école ou un centre de formation : la bannière s&apos;affiche en haut, en bas ou dans les colonnes du site.</Empty>
      ) : (
        <div className="ax-grid auto">
          {ads.map((ad) => {
            const [label, tone] = statusOf(ad);
            const v = stats.views?.[ad.id] || 0;
            const c = stats.clicks?.[ad.id] || 0;
            return (
              <section className="ax-card" key={ad.id}>
                <div className="ax-card-head">
                  <strong>{ad.name || "Sans nom"}</strong>
                  <span className={`ax-pill ${tone}`}>{label}</span>
                </div>
                <div className="ax-ad-preview" style={{ marginBottom: 10 }}>
                  {ad.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={assetUrl(ad.image)} alt={ad.alt || ""} />
                  ) : (
                    <span>{ad.title || "—"}</span>
                  )}
                </div>
                <dl className="ax-kv">
                  <dt>Emplacements</dt>
                  <dd>{(ad.placements || []).map((p) => PARTNER_PLACEMENTS.find((x) => x.key === p)?.label || p).join(", ") || "—"}</dd>
                  <dt>Affichages</dt>
                  <dd>{num(v)}</dd>
                  <dt>Clics</dt>
                  <dd>
                    {num(c)} {v ? `(${((c / v) * 100).toFixed(1).replace(".", ",")} %)` : ""}
                  </dd>
                </dl>
                <div className="ax-btn-row ax-mt">
                  <button type="button" className="ax-btn sm" onClick={() => setEditing(ad)}>
                    <Icon name="edit" size="sm" /> Modifier
                  </button>
                  <button type="button" className="ax-btn sm" onClick={() => patch((cur) => ({ ...cur, partnerAds: cur.partnerAds.map((a) => (a.id === ad.id ? { ...a, active: a.active === false } : a)) }), `${ad.name} ${ad.active === false ? "activée" : "désactivée"}`)}>
                    {ad.active === false ? "Activer" : "Désactiver"}
                  </button>
                  <button
                    type="button"
                    className="ax-btn sm danger ax-right"
                    onClick={async () => {
                      if (await confirm({ title: `Supprimer « ${ad.name} » ?`, confirmLabel: "Supprimer", tone: "danger" }))
                        patch((cur) => ({ ...cur, partnerAds: cur.partnerAds.filter((a) => a.id !== ad.id) }), `bannière ${ad.name} supprimée`);
                    }}
                  >
                    <Icon name="trash" size="sm" />
                  </button>
                </div>
              </section>
            );
          })}
        </div>
      )}
      <p className="ax-hint ax-mt">Affichages et clics comptés depuis le lancement de la bannière. Plusieurs bannières sur le même emplacement tournent toutes les 12 secondes.</p>
      {editing && <AdEditor ad={editing} onClose={() => setEditing(null)} onSaved={() => setEditing(null)} />}
    </>
  );
}

export default function Monetisation() {
  const [tab, setTab] = useTab(TABS);
  return (
    <>
      <Hero icon="💰" eyebrow="Pilotage · Revenus" title="Monétisation">
        Les bannières de tes partenaires (vendues en direct) et les blocs Google AdSense. La boutique de cahiers se gère dans Contenu › Boutique.
      </Hero>
      <Tabs tabs={TABS} value={tab} onChange={setTab} />
      {tab === "partenaires" ? <Partners /> : <AdSense />}
    </>
  );
}
