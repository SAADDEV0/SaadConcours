"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Icon from "../_ui/Icon";
import { Alert, Empty, ErrorState, Hero, Seg, SectionTitle, Skeleton, Tabs } from "../_ui/kit";
import { useConfirm, useToast } from "../_ui/feedback";
import MarkdownField from "../_ui/MarkdownField";
import { api } from "../_lib/api";
import { markCommitted } from "../_lib/repo";
import { matchQuery, num, timeAgo } from "../_lib/format";
import { useHotkey, useUnsavedGuard } from "../_lib/hooks";

const SITE = "https://www.saadconcours.space";

/* ------------------------------ Vue d'ensemble ------------------------------ */

export function BacOverview() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [niveau, setNiveau] = useState("2bac");
  const [open, setOpen] = useState(null);
  const [q, setQ] = useState("");

  function load() {
    setError("");
    api("/api/admin/bac-stats").then(setData).catch((e) => setError(e.message));
  }
  useEffect(load, []);

  const niv = data?.niveaux.find((n) => n.code === niveau) || data?.niveaux[0];

  return (
    <>
      <Hero
        icon="🎒"
        eyebrow="Contenu · Bac Sciences Économiques & Gestion"
        title="Cours Bac"
        actions={
          <a className="ax-btn" href={`${SITE}/bac`} target="_blank" rel="noopener noreferrer">
            <Icon name="external" size="sm" /> Voir l&apos;espace Bac
          </a>
        }
        stats={
          data
            ? [
                { value: `${num(data.resume.chapitresRediges)} / ${num(data.resume.chapitresTotal)}`, label: "chapitres rédigés" },
                { value: num(data.resume.matieres), label: "matières" },
                { value: num(data.resume.vuesTotal), label: "vues sur l'espace Bac" },
              ]
            : []
        }
      >
        Le programme vient du code (lib/bacProgramme.js) ; ce que tu modifies ici est enregistré dans public/data/bac.json et remplace le contenu d&apos;origine du chapitre, qui reste récupérable.
      </Hero>
      {error && <ErrorState error={error} onRetry={load} />}
      {!data && !error && <Skeleton rows={6} height={70} />}
      {data && (
        <>
          <div className="ax-toolbar">
            <Seg ariaLabel="Niveau" value={niv.code} onChange={setNiveau} options={data.niveaux.map((n) => ({ value: n.code, label: `${n.label} · ${n.chapitresRediges}/${n.chapitresTotal}` }))} />
            <div className="ax-search">
              <Icon name="search" size="sm" />
              <input className="ax-input" placeholder="Chercher un chapitre…" value={q} onChange={(e) => setQ(e.target.value)} />
            </div>
          </div>
          <div className="ax-stack">
            {niv.matieres.map((m) => {
              const chapitres = m.chapitres.filter((c) => matchQuery(`${c.titre} ${m.nom}`, q));
              if (q && !chapitres.length) return null;
              const pct = Math.round((m.chapitresRediges / Math.max(1, m.chapitresTotal)) * 100);
              const isOpen = open === m.slug || Boolean(q);
              return (
                <section className="ax-card" key={m.slug}>
                  <div className="ax-card-head" style={{ cursor: "pointer", marginBottom: isOpen ? 12 : 0 }} onClick={() => setOpen(isOpen && !q ? null : m.slug)}>
                    <div style={{ display: "flex", gap: 12, alignItems: "center", minWidth: 0 }}>
                      <span className="ax-todo-icon">{m.icon}</span>
                      <div style={{ minWidth: 0 }}>
                        <strong>{m.nom}</strong>
                        <div className="ax-hint">
                          {m.groupe}
                          {m.examen ? ` · ${m.examen}` : ""} · {num(m.vues)} vues · {m.qcmTotal} questions de QCM
                        </div>
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
                      <span className={`ax-pill ${pct === 100 ? "green" : pct ? "amber" : ""}`}>
                        {m.chapitresRediges}/{m.chapitresTotal}
                      </span>
                      <Icon name="chevronDown" size="sm" />
                    </div>
                  </div>
                  <div className="ax-progress">
                    <span style={{ width: `${pct}%` }} />
                  </div>
                  {isOpen && (
                    <ul className="ax-list ax-mt">
                      {chapitres.map((c) => (
                        <li key={c.slug}>
                          <span className="ax-q-num">{c.numero}</span>
                          <span className="ax-list-main">
                            <Link className="ax-list-title" href={`/admin/bac/editer?id=${encodeURIComponent(c.id)}`} dir={m.lang === "ar" ? "rtl" : undefined}>
                              {c.titre}
                            </Link>
                            <span className="ax-list-meta">
                              {c.semestre} · {c.redige ? `${c.qcm} QCM` : "à rédiger"} · {num(c.vues)} vues
                              {c.modifieLe ? ` · modifié ${timeAgo(c.modifieLe)}` : ""}
                            </span>
                          </span>
                          {c.modifieLe && <span className="ax-pill violet">modifié</span>}
                          <span className={`ax-pill ${c.redige ? "green" : ""}`}>{c.redige ? "rédigé" : "vide"}</span>
                          <Link className="ax-btn ghost icon sm" href={`/admin/bac/editer?id=${encodeURIComponent(c.id)}`} aria-label="Modifier">
                            <Icon name="edit" size="sm" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              );
            })}
          </div>
          {data.topChapitres?.length > 0 && (
            <section className="ax-card ax-mt">
              <SectionTitle>Chapitres les plus lus</SectionTitle>
              <ul className="ax-list">
                {data.topChapitres.slice(0, 8).map((c) => (
                  <li key={c.href}>
                    <span className="ax-list-main">
                      <a className="ax-list-title" href={SITE + c.href} target="_blank" rel="noopener noreferrer">
                        {c.label}
                      </a>
                    </span>
                    <span className="ax-num">{num(c.vues)}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </>
      )}
    </>
  );
}

/* ------------------------------ Éditeur de chapitre ------------------------------ */

const ONGLETS = [
  { key: "cours", label: "Cours", icon: "book" },
  { key: "exercices", label: "Exercices", icon: "edit" },
  { key: "resume", label: "Résumé", icon: "file" },
  { key: "qcm", label: "QCM", icon: "quiz" },
];

function copie(c) {
  return { cours: c?.cours || "", exercices: c?.exercices || "", resume: c?.resume || "", qcm: (c?.qcm || []).map((q) => ({ ...q, choix: [...(q.choix || [])] })) };
}

function BacQcm({ value, onChange, dir }) {
  return (
    <div>
      {value.map((q, i) => (
        <div className="ax-q" key={i}>
          <div className="ax-q-body" style={{ borderTop: "none" }}>
            <div className="ax-field">
              <label className="ax-label">
                <span className="ax-q-num">{i + 1}</span> Question
                <button type="button" className="ax-btn ghost xs ax-right" onClick={() => onChange(value.filter((_, j) => j !== i))}>
                  <Icon name="trash" size="sm" /> Retirer
                </button>
              </label>
              <textarea className="ax-textarea" rows={2} dir={dir} value={q.q} onChange={(e) => onChange(value.map((x, j) => (j === i ? { ...x, q: e.target.value } : x)))} />
            </div>
            {q.choix.map((c, k) => (
              <div className="ax-q-opt" key={k}>
                <button type="button" className={`letter${q.bonne === k ? " correct" : ""}`} onClick={() => onChange(value.map((x, j) => (j === i ? { ...x, bonne: k } : x)))} aria-pressed={q.bonne === k}>
                  {"ABCDEF"[k]}
                </button>
                <input className="ax-input sm" dir={dir} value={c} onChange={(e) => onChange(value.map((x, j) => (j === i ? { ...x, choix: x.choix.map((y, l) => (l === k ? e.target.value : y)) } : x)))} />
                <button
                  type="button"
                  className="ax-btn ghost icon sm"
                  aria-label="Retirer la proposition"
                  disabled={q.choix.length <= 2}
                  onClick={() => onChange(value.map((x, j) => (j === i ? { ...x, choix: x.choix.filter((_, l) => l !== k), bonne: x.bonne === k ? 0 : x.bonne > k ? x.bonne - 1 : x.bonne } : x)))}
                >
                  <Icon name="x" size="sm" />
                </button>
              </div>
            ))}
            {q.choix.length < 6 && (
              <button type="button" className="ax-btn xs" onClick={() => onChange(value.map((x, j) => (j === i ? { ...x, choix: [...x.choix, ""] } : x)))}>
                <Icon name="plus" size="sm" /> Proposition
              </button>
            )}
            <div className="ax-field ax-mt ax-mb0">
              <label className="ax-label">Explication</label>
              <textarea className="ax-textarea" rows={2} dir={dir} value={q.explication || ""} onChange={(e) => onChange(value.map((x, j) => (j === i ? { ...x, explication: e.target.value } : x)))} />
            </div>
          </div>
        </div>
      ))}
      <button type="button" className="ax-btn" onClick={() => onChange([...value, { q: "", choix: ["", "", "", ""], bonne: 0, explication: "" }])}>
        <Icon name="plus" /> Ajouter une question
      </button>
    </div>
  );
}

export function BacEditor() {
  const id = useSearchParams().get("id") || "";
  const router = useRouter();
  const toast = useToast();
  const confirm = useConfirm();
  const [info, setInfo] = useState(null);
  const [error, setError] = useState("");
  const [form, setForm] = useState(null);
  const [initial, setInitial] = useState(null);
  const [tab, setTab] = useState("cours");
  const [saving, setSaving] = useState(false);

  async function load() {
    setError("");
    try {
      const d = await api(`/api/admin/bac-content?id=${encodeURIComponent(id)}`);
      const start = copie(d.edit || d.defaut);
      setInfo(d);
      setForm(start);
      setInitial(start);
    } catch (e) {
      setError(e.message);
    }
  }
  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const dirty = useMemo(() => form && JSON.stringify(form) !== JSON.stringify(initial), [form, initial]);
  useUnsavedGuard(Boolean(dirty) && !saving);

  async function save() {
    if (!dirty || saving) return;
    setSaving(true);
    try {
      const saved = await api("/api/admin/bac-content", { method: "PUT", body: { id, ...form } });
      markCommitted();
      setInitial(form);
      setInfo((i) => ({ ...i, edit: saved }));
      toast.success("Chapitre enregistré", "En ligne après le prochain déploiement (~4 min).");
    } catch (e) {
      toast.error("Enregistrement impossible", e.message);
    } finally {
      setSaving(false);
    }
  }
  useHotkey("mod+s", save, { allowInInputs: true, enabled: Boolean(form) });

  async function reset() {
    const ok = await confirm({ title: "Revenir au contenu d'origine ?", body: "Ta version modifiée de ce chapitre sera supprimée.", confirmLabel: "Rétablir l'original", tone: "danger" });
    if (!ok) return;
    try {
      await api(`/api/admin/bac-content?id=${encodeURIComponent(id)}`, { method: "DELETE" });
      markCommitted();
      toast.success("Contenu d'origine rétabli");
      load();
    } catch (e) {
      toast.error("Opération impossible", e.message);
    }
  }

  if (error) return <ErrorState error={error} onRetry={load} />;
  if (!form) return <Skeleton rows={6} height={80} />;
  const dir = info.lang === "ar" ? "rtl" : undefined;
  const counts = { cours: form.cours.length, exercices: form.exercices.length, resume: form.resume.length, qcm: form.qcm.length };

  return (
    <>
      <div className="ax-editor-head">
        <button type="button" className="ax-btn ghost icon sm" aria-label="Retour" onClick={() => router.push("/admin/bac")}>
          <Icon name="arrowLeft" />
        </button>
        <div className="ax-editor-title">
          <h1 dir={dir}>{info.chapitre.titre}</h1>
          <p>
            {info.niveau} · {info.matiere} · chapitre {info.chapitre.numero}
            {info.edit ? <span className="ax-pill violet">version modifiée · {timeAgo(info.edit.updatedAt)}</span> : <span className="ax-pill">contenu d&apos;origine</span>}
            {dirty && <span className="ax-pill amber">non enregistré</span>}
          </p>
        </div>
        <a className="ax-btn sm ax-hide-sm" href={SITE + info.href} target="_blank" rel="noopener noreferrer">
          <Icon name="external" size="sm" /> Voir
        </a>
        {info.edit && (
          <button type="button" className="ax-btn sm" onClick={reset}>
            <Icon name="restore" size="sm" /> Original
          </button>
        )}
        <button type="button" className="ax-btn primary" onClick={save} disabled={!dirty || saving}>
          <Icon name={saving ? "loader" : "save"} /> {saving ? "Envoi…" : "Enregistrer"}
        </button>
      </div>
      {!info.edit && !info.defaut?.cours && <Alert tone="info">Ce chapitre n&apos;a pas encore de contenu : ce que tu écris ici sera sa première version.</Alert>}
      <Tabs tabs={ONGLETS.map((o) => ({ ...o, count: o.key === "qcm" ? counts.qcm : counts[o.key] ? "✓" : undefined }))} value={tab} onChange={setTab} />
      {tab === "qcm" ? (
        <BacQcm value={form.qcm} onChange={(qcm) => setForm((f) => ({ ...f, qcm }))} dir={dir} />
      ) : (
        <MarkdownField value={form[tab]} onChange={(v) => setForm((f) => ({ ...f, [tab]: v }))} dir={dir} rows={26} />
      )}
      {!form.cours && tab !== "cours" && <Empty icon="📘" title="Commence par le cours">Les onglets Exercices, Résumé et QCM complètent le cours du chapitre.</Empty>}
    </>
  );
}
