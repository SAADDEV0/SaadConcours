"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import PageHeader from "@/app/admin/_components/shell/PageHeader";
import MarkdownEditor from "@/app/admin/_components/fields/MarkdownEditor";
import Skeleton from "@/app/admin/_components/ui/Skeleton";
import EmptyState from "@/app/admin/_components/ui/EmptyState";
import { useToast } from "@/app/admin/_components/ui/ToastProvider";
import { useConfirm } from "@/app/admin/_components/ui/ConfirmProvider";
import BacQcmEditor from "./BacQcmEditor";

const ONGLETS = [
  { code: "cours", label: "Cours" },
  { code: "exercices", label: "Exercices" },
  { code: "resume", label: "Résumé" },
  { code: "qcm", label: "QCM" },
];

const VIDE = { cours: "", exercices: "", resume: "", qcm: [] };

function copie(c) {
  return { cours: c?.cours || "", exercices: c?.exercices || "", resume: c?.resume || "", qcm: (c?.qcm || []).map((q) => ({ ...q, choix: [...q.choix] })) };
}

export default function BacEditor() {
  const id = useSearchParams().get("id") || "";
  const toast = useToast();
  const confirm = useConfirm();
  const [info, setInfo] = useState(null);
  const [erreur, setErreur] = useState(null);
  const [form, setForm] = useState(VIDE);
  const [initial, setInitial] = useState(VIDE);
  const [onglet, setOnglet] = useState("cours");
  const [envoi, setEnvoi] = useState(false);

  async function charger() {
    setErreur(null);
    const r = await fetch(`/api/admin/bac-content?id=${encodeURIComponent(id)}`, { cache: "no-store" });
    const d = await r.json().catch(() => ({}));
    if (!r.ok) throw new Error(d.error || `HTTP ${r.status}`);
    const depart = copie(d.edit || d.defaut);
    setInfo(d);
    setForm(depart);
    setInitial(depart);
  }

  useEffect(() => {
    charger().catch((e) => setErreur(e.message));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const modifie = useMemo(() => JSON.stringify(form) !== JSON.stringify(initial), [form, initial]);

  useEffect(() => {
    if (!modifie) return;
    const avertir = (e) => {
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", avertir);
    return () => window.removeEventListener("beforeunload", avertir);
  }, [modifie]);

  async function enregistrer() {
    setEnvoi(true);
    try {
      const r = await fetch("/api/admin/bac-content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, ...form }),
      });
      const d = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(d.error || `HTTP ${r.status}`);
      await charger();
      toast.success("Chapitre enregistré. Il sera en ligne après le redéploiement automatique (quelques minutes).");
    } catch (e) {
      toast.error(e.message || "Échec de l'enregistrement.");
    } finally {
      setEnvoi(false);
    }
  }

  async function retablir() {
    const ok = await confirm({
      title: "Rétablir le contenu d'origine ?",
      body: "Vos modifications de ce chapitre seront supprimées et le contenu d'origine sera de nouveau affiché.",
      confirmLabel: "Rétablir",
      tone: "danger",
    });
    if (!ok) return;
    setEnvoi(true);
    try {
      const r = await fetch(`/api/admin/bac-content?id=${encodeURIComponent(id)}`, { method: "DELETE" });
      const d = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(d.error || `HTTP ${r.status}`);
      await charger();
      toast.success("Contenu d'origine rétabli.");
    } catch (e) {
      toast.error(e.message || "Échec.");
    } finally {
      setEnvoi(false);
    }
  }

  if (erreur) {
    return (
      <EmptyState
        icon="alertTriangle"
        title="Chapitre introuvable"
        message={erreur}
        action={
          <Link className="admin-btn secondary small" href="/admin/bac">
            ← Retour aux cours Bac
          </Link>
        }
      />
    );
  }
  if (!info) return <Skeleton lines={10} />;

  const dir = info.lang === "ar" ? "rtl" : undefined;
  const nbQcm = form.qcm.length;

  return (
    <>
      <PageHeader
        icon="pen"
        kicker={`${info.niveau} · ${info.matiere}`}
        title={`Ch. ${info.chapitre.numero} — ${info.chapitre.titre}`}
        subtitle={
          info.edit
            ? `Version modifiée dans l'admin le ${new Date(info.edit.updatedAt).toLocaleString("fr-FR")}.`
            : "Contenu d'origine (jamais modifié dans l'admin)."
        }
        actions={
          <>
            <Link className="admin-btn secondary small" href="/admin/bac">
              ← Retour
            </Link>
            <a className="admin-btn secondary small" href={info.href} target="_blank" rel="noopener noreferrer">
              Voir la page ↗
            </a>
          </>
        }
      />

      <div className="bac-adm-tabs bac-ed-tabs" role="tablist">
        {ONGLETS.map((o) => (
          <button
            key={o.code}
            type="button"
            role="tab"
            aria-selected={onglet === o.code}
            className={`admin-btn small ${onglet === o.code ? "" : "secondary"}`}
            onClick={() => setOnglet(o.code)}
          >
            {o.label}
            {o.code === "qcm" ? ` (${nbQcm})` : form[o.code] ? "" : " · vide"}
          </button>
        ))}
      </div>

      <div className="admin-card bac-adm-card">
        {onglet === "qcm" ? (
          <BacQcmEditor value={form.qcm} onChange={(qcm) => setForm((f) => ({ ...f, qcm }))} dir={dir} />
        ) : (
          <div dir={dir}>
            <MarkdownEditor
              key={onglet}
              value={form[onglet]}
              onChange={(v) => setForm((f) => ({ ...f, [onglet]: v }))}
              minHeight={460}
              placeholder="Rédigez en Markdown : ## titres, **gras**, listes, tableaux, formules entre $...$"
            />
          </div>
        )}
        <p className="bac-adm-muted bac-ed-aide">
          Astuce : dans les exercices, un corrigé dépliable s'écrit <code>&lt;details&gt;&lt;summary&gt;Voir le corrigé&lt;/summary&gt;</code> …{" "}
          <code>&lt;/details&gt;</code> (avec une ligne vide après <code>&lt;/summary&gt;</code> et avant <code>&lt;/details&gt;</code>).
        </p>
      </div>

      <div className="bac-ed-bar">
        <span className="bac-adm-muted">{modifie ? "Modifications non enregistrées" : "Aucune modification en cours"}</span>
        <div className="bac-ed-bar-actions">
          {info.edit && (
            <button type="button" className="admin-btn danger small" onClick={retablir} disabled={envoi}>
              Rétablir l'original
            </button>
          )}
          <button type="button" className="admin-btn secondary small" onClick={() => setForm(copie(initial))} disabled={!modifie || envoi}>
            Annuler
          </button>
          <button type="button" className="admin-btn" onClick={enregistrer} disabled={!modifie || envoi}>
            {envoi ? "Enregistrement…" : "Enregistrer"}
          </button>
        </div>
      </div>
    </>
  );
}
