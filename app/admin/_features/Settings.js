"use client";

import { useEffect, useMemo, useState } from "react";
import Icon from "../_ui/Icon";
import { Alert, ErrorState, Field, Hero, SectionTitle, Skeleton, Switch, Tabs, useTab } from "../_ui/kit";
import { useConfirm, useToast } from "../_ui/feedback";
import { useSettingsForm, patchSettings } from "../_lib/settings";
import { useJson } from "../_lib/content";
import { COLLECTION_LIST } from "../_lib/collections";
import { loadJson } from "../_lib/repo";
import { api, downloadText } from "../_lib/api";
import { dateTimeFr, num, todayIso } from "../_lib/format";

const TABS = [
  { key: "general", label: "Général", icon: "settings" },
  { key: "annonces", label: "Concours ouverts", icon: "megaphone" },
  { key: "systeme", label: "Système & sécurité", icon: "shield" },
];

const SOCIAL = [
  { key: "facebook", label: "Facebook", ph: "https://facebook.com/tapage" },
  { key: "instagram", label: "Instagram", ph: "https://instagram.com/toncompte" },
  { key: "whatsapp", label: "WhatsApp", ph: "https://wa.me/2126…" },
  { key: "tiktok", label: "TikTok", ph: "https://tiktok.com/@toncompte" },
  { key: "youtube", label: "YouTube", ph: "https://youtube.com/@tachaine" },
  { key: "telegram", label: "Telegram", ph: "https://t.me/toncanal" },
  { key: "email", label: "Email de contact", ph: "contact@saadconcours.space" },
];

const ETABS = ["FSJES", "ENCG", "FEG", "FSEG", "ENSA", "FST", "ISCAE", "ENSAM", "ESITH", "ENSET", "FSR", "FLSH", "FSA", "FP", "EST", "ENS"];

// Clés des anciennes alertes email (supprimées avec l'envoi d'emails).
const OBSOLETE = ["newsAlertsEnabled", "newsAlertsMessage", "newsAlertsSubject", "newsAlertsFromName", "newsAlertsFromEmail", "pdfMargins"];

function SaveBar({ s, label }) {
  const toast = useToast();
  return (
    <div className="ax-btn-row ax-mt">
      <button
        type="button"
        className="ax-btn primary"
        disabled={!s.dirty || s.saving}
        onClick={async () => {
          try {
            await s.save(label);
            toast.success("Réglages enregistrés", "Appliqués au site au prochain déploiement (~4 min).");
          } catch (err) {
            toast.error("Enregistrement impossible", err.message);
          }
        }}
      >
        <Icon name={s.saving ? "loader" : "save"} /> Enregistrer
      </button>
      {s.dirty && (
        <button type="button" className="ax-btn ghost" onClick={s.reset}>
          Annuler
        </button>
      )}
    </div>
  );
}

function General() {
  const keys = useMemo(() => [...SOCIAL.map((f) => f.key), "gaEnabled", "gaMeasurementId"], []);
  const s = useSettingsForm(keys);
  if (s.error) return <ErrorState error={s.error} onRetry={s.reload} />;
  if (!s.form) return <Skeleton rows={6} />;
  const gaInvalid = s.form.gaMeasurementId && !/^G-[A-Z0-9]{6,}$/.test(s.form.gaMeasurementId);
  return (
    <div className="ax-grid c2">
      <section className="ax-card">
        <SectionTitle>Réseaux sociaux et contact</SectionTitle>
        <p className="ax-sub">Affichés dans le pied de page du site, dans les PDF et utilisés par le studio social.</p>
        {SOCIAL.map((f) => (
          <Field key={f.key} label={f.label}>
            <input className="ax-input" value={s.form[f.key] || ""} placeholder={f.ph} onChange={(e) => s.set(f.key, e.target.value.trim())} />
          </Field>
        ))}
        <SaveBar s={s} label="réseaux sociaux" />
      </section>
      <section className="ax-card">
        <SectionTitle>Google Analytics</SectionTitle>
        <Switch checked={s.form.gaEnabled} onChange={(v) => s.set("gaEnabled", v)} label="Mesure Google Analytics active" />
        <Field label="Identifiant de mesure" hint="Format G-XXXXXXXXXX. Les visites de la console ne sont plus comptées." error={gaInvalid ? "Format attendu : G-XXXXXXXXXX" : ""}>
          <input className="ax-input ax-mono" value={s.form.gaMeasurementId || ""} onChange={(e) => s.set("gaMeasurementId", e.target.value.trim().toUpperCase())} style={{ marginTop: 10 }} />
        </Field>
        <SaveBar s={s} label="Google Analytics" />
      </section>
    </div>
  );
}

function Annonces() {
  const keys = useMemo(() => ["newsEtablissementsVisibles", "newsScraperEnabled", "homeNewsBoxesEnabled"], []);
  const s = useSettingsForm(keys);
  const news = useJson("data/news.json");
  const counts = useMemo(() => {
    const m = {};
    for (const n of news.data || []) if (n.etablissement) m[n.etablissement] = (m[n.etablissement] || 0) + 1;
    return m;
  }, [news.data]);
  if (!s.form) return <Skeleton rows={6} />;
  const visibles = s.form.newsEtablissementsVisibles || [];
  const all = [...new Set([...ETABS, ...Object.keys(counts)])];
  return (
    <section className="ax-card">
      <SectionTitle>Établissements affichés sur /news</SectionTitle>
      <p className="ax-sub">Le robot récupère toutes les annonces d&apos;almaster-maroc.com ; seules celles des établissements cochés apparaissent sur le site. Aucun coché = tout s&apos;affiche.</p>
      <div className="ax-chips" style={{ marginBottom: 18 }}>
        {all.map((e) => {
          const on = visibles.includes(e);
          return (
            <button key={e} type="button" className={`ax-toggle-chip${on ? " on" : ""}`} onClick={() => s.set("newsEtablissementsVisibles", on ? visibles.filter((x) => x !== e) : [...visibles, e])}>
              {e} <em>{counts[e] || 0}</em>
            </button>
          );
        })}
      </div>
      <div className="ax-stack" style={{ gap: 10 }}>
        <Switch checked={s.form.newsScraperEnabled} onChange={(v) => s.set("newsScraperEnabled", v)} label="Récupération automatique (robot almaster, toutes les ~6 h)" />
        <Switch checked={s.form.homeNewsBoxesEnabled} onChange={(v) => s.set("homeNewsBoxesEnabled", v)} label="Encadrés « concours ouverts » sur la page d'accueil" />
      </div>
      <SaveBar s={s} label="concours ouverts" />
    </section>
  );
}

function Systeme() {
  const [health, setHealth] = useState(null);
  const [backup, setBackup] = useState(false);
  const settings = useJson("data/settings.json");
  const toast = useToast();
  const confirm = useConfirm();
  useEffect(() => {
    api("/api/admin/health").then(setHealth).catch(() => setHealth({ checks: [] }));
  }, []);
  const obsolete = OBSOLETE.filter((k) => settings.data && k in settings.data);

  async function downloadBackup() {
    setBackup(true);
    try {
      const entries = await Promise.all([...COLLECTION_LIST.map((c) => c.path), "data/settings.json", "data/bac.json"].map(async (p) => [p, (await loadJson(p, { fallback: [] })).data]));
      downloadText(`saadconcours-sauvegarde-${todayIso()}.json`, JSON.stringify({ generatedAt: new Date().toISOString(), files: Object.fromEntries(entries) }, null, 2));
    } catch (err) {
      toast.error("Sauvegarde impossible", err.message);
    } finally {
      setBackup(false);
    }
  }

  async function logoutAll() {
    const ok = await confirm({ title: "Déconnecter tous les appareils ?", body: "Toutes les sessions ouvertes (téléphone, autre ordinateur…) seront fermées sous une minute, y compris celle-ci.", confirmLabel: "Tout déconnecter", tone: "danger" });
    if (!ok) return;
    await fetch("/api/admin/logout", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ all: true }) });
    window.location.href = "/admin/login";
  }

  return (
    <div className="ax-grid c2">
      <section className="ax-card">
        <SectionTitle>Configuration du serveur</SectionTitle>
        {!health ? (
          <Skeleton rows={3} />
        ) : (
          <ul className="ax-list">
            {health.checks.map((c) => (
              <li key={c.key}>
                <Icon name={c.ok ? "checkCircle" : "alert"} className={c.ok ? "" : ""} />
                <span className="ax-list-main">
                  <span className="ax-list-title" style={{ whiteSpace: "normal" }}>{c.label}</span>
                  <span className="ax-list-meta" style={{ whiteSpace: "normal" }}>{c.detail}</span>
                </span>
                <span className={`ax-pill ${c.ok ? "green" : "amber"}`}>{c.ok ? "OK" : "À vérifier"}</span>
              </li>
            ))}
          </ul>
        )}
        {health?.runtime && <p className="ax-hint ax-mt">Exécution : {health.runtime}</p>}
      </section>
      <section className="ax-card">
        <SectionTitle>Session</SectionTitle>
        {health?.session && (
          <dl className="ax-kv">
            <dt>Ouverte le</dt>
            <dd>{dateTimeFr(health.session.issuedAt)}</dd>
            <dt>Expire le</dt>
            <dd>{dateTimeFr(health.session.expiresAt)}</dd>
          </dl>
        )}
        <p className="ax-hint">Une session dure 7 jours. Téléphone perdu, ordinateur partagé : déconnecte tout.</p>
        <button type="button" className="ax-btn danger" onClick={logoutAll}>
          <Icon name="shield" size="sm" /> Déconnecter tous les appareils
        </button>
      </section>
      <section className="ax-card">
        <SectionTitle>Sauvegarde</SectionTitle>
        <p className="ax-sub">Tout le contenu (concours, cours, QCM, blog, annonces, boutique, Bac, réglages) dans un seul fichier JSON. GitHub garde déjà tout l&apos;historique ; ceci est la copie « à emporter ».</p>
        <button type="button" className="ax-btn" onClick={downloadBackup} disabled={backup}>
          <Icon name={backup ? "loader" : "download"} size="sm" /> Télécharger la sauvegarde
        </button>
      </section>
      <section className="ax-card">
        <SectionTitle>Maintenance</SectionTitle>
        {obsolete.length ? (
          <>
            <Alert tone="info">
              {num(obsolete.length)} réglage{obsolete.length > 1 ? "s" : ""} des anciennes alertes email ne sert plus : {obsolete.join(", ")}.
            </Alert>
            <button
              type="button"
              className="ax-btn"
              onClick={async () => {
                try {
                  await patchSettings((cur) => {
                    for (const k of OBSOLETE) delete cur[k];
                    return cur;
                  }, "nettoyage des réglages obsolètes");
                  toast.success("Réglages nettoyés");
                } catch (err) {
                  toast.error("Échec", err.message);
                }
              }}
            >
              <Icon name="wand" size="sm" /> Nettoyer
            </button>
          </>
        ) : (
          <Alert tone="ok">Rien à nettoyer.</Alert>
        )}
      </section>
    </div>
  );
}

export default function Settings() {
  const [tab, setTab] = useTab(TABS);
  return (
    <>
      <Hero icon="⚙️" eyebrow="Pilotage" title="Réglages">
        Les réglages vivent dans public/data/settings.json : chaque enregistrement est un commit, appliqué au site au déploiement suivant.
      </Hero>
      <Tabs tabs={TABS} value={tab} onChange={setTab} />
      {tab === "general" && <General />}
      {tab === "annonces" && <Annonces />}
      {tab === "systeme" && <Systeme />}
    </>
  );
}
