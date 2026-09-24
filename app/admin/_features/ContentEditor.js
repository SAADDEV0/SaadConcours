"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Icon from "../_ui/Icon";
import { Alert, Counter, Empty, ErrorState, Field, Menu, ScoreRing, Skeleton, Switch, TagsInput } from "../_ui/kit";
import { useConfirm, useToast } from "../_ui/feedback";
import MarkdownField from "../_ui/MarkdownField";
import ImagesField from "../_ui/ImagesField";
import QuestionsField from "../_ui/QuestionsField";
import { useCollection, useCorrigeFiles, saveItem, deleteItems, duplicateDraft } from "../_lib/content";
import { scoreOf, villeFolder } from "../_lib/collections";
import { fetchHead } from "../_lib/repo";
import { bytes, dateTimeFr, timeAgo } from "../_lib/format";
import { useHotkey, useUnsavedGuard } from "../_lib/hooks";

const DRAFT_PREFIX = "ax-draft:";

function readDraft(key) {
  try {
    const raw = localStorage.getItem(DRAFT_PREFIX + key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}
function writeDraft(key, form) {
  try {
    localStorage.setItem(DRAFT_PREFIX + key, JSON.stringify({ at: Date.now(), form }));
  } catch {
    // quota dépassé (très long cours) : pas de sauvegarde locale, sans gravité
  }
}
function clearDraft(key) {
  try {
    localStorage.removeItem(DRAFT_PREFIX + key);
  } catch {
    // idem
  }
}

function useSuggestions(list, key) {
  return useMemo(() => {
    if (!list) return [];
    const values = new Map();
    for (const item of list) {
      const v = item[key];
      for (const x of Array.isArray(v) ? v : [v]) if (x) values.set(x, (values.get(x) || 0) + 1);
    }
    return [...values.entries()].sort((a, b) => b[1] - a[1]).map(([v]) => v);
  }, [list, key]);
}

function FieldInput({ field, form, setForm, list, staged, setStaged }) {
  const value = form[field.key];
  const set = (v) => setForm((f) => {
    const next = { ...f, [field.key]: v };
    return field.onChange ? field.onChange(next) : next;
  });
  const suggestKey = field.suggest === "etablissementNews" ? "etablissement" : field.suggest;
  const suggestions = useSuggestions(field.suggest ? list : null, suggestKey);
  const id = `f-${field.key}`;
  const invalid = field.required && field.touched && !value;

  switch (field.type) {
    case "markdown":
      return <MarkdownField id={id} value={value || ""} onChange={set} rows={field.rows} />;
    case "images":
      return (
        <ImagesField
          value={value || []}
          onChange={set}
          staged={staged}
          onStage={(s) => setStaged((x) => [...x, s])}
          onUnstage={(k) => setStaged((x) => x.filter((s) => s.key !== k))}
        />
      );
    case "cover":
      return (
        <ImagesField
          value={value ? [value] : []}
          onChange={(arr) => set(arr[0] || "")}
          staged={staged}
          onStage={(s) => setStaged([s])}
          onUnstage={(k) => setStaged((x) => x.filter((s) => s.key !== k))}
          single
        />
      );
    case "number":
      return <input id={id} type="number" min="0" step="any" className="ax-input" value={value ?? ""} onChange={(e) => set(e.target.value)} placeholder={field.placeholder} />;
    case "lines":
      return (
        <textarea
          id={id}
          className="ax-textarea"
          rows={field.rows || 6}
          value={(value || []).join("\n")}
          onChange={(e) => set(e.target.value.split("\n"))}
          placeholder="Une ligne par élément"
        />
      );
    case "questions":
      return <QuestionsField value={value || []} onChange={set} />;
    case "tags":
      return <TagsInput value={value || []} onChange={set} placeholder={field.placeholder} suggestions={suggestions} />;
    case "textarea":
      return <textarea id={id} className="ax-textarea" rows={field.rows || 3} value={value || ""} onChange={(e) => set(e.target.value)} placeholder={field.placeholder} />;
    case "select": {
      const options = field.optionsFor ? field.optionsFor(form) : field.options;
      return (
        <select id={id} className="ax-select" value={value || ""} onChange={(e) => set(e.target.value)}>
          <option value="">—</option>
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
          {value && !options.some((o) => o.value === value) && <option value={value}>{value} (hors liste)</option>}
        </select>
      );
    }
    case "switch":
      return <Switch checked={value} onChange={set} label={value ? "Oui" : "Non"} />;
    case "date":
      return <input id={id} type="date" className="ax-input" value={value || ""} onChange={(e) => set(e.target.value)} />;
    case "url":
      return (
        <div className="ax-input-group">
          <input id={id} type="url" className="ax-input" value={value || ""} onChange={(e) => set(e.target.value)} placeholder="https://…" />
          {value && /^https?:\/\//.test(value) && (
            <a className="ax-btn icon" href={value} target="_blank" rel="noopener noreferrer" aria-label="Ouvrir le lien">
              <Icon name="external" size="sm" />
            </a>
          )}
        </div>
      );
    default:
      return (
        <>
          <input
            id={id}
            className={`ax-input${invalid ? " invalid" : ""}`}
            value={value || ""}
            onChange={(e) => set(e.target.value)}
            placeholder={field.placeholder}
            list={suggestions.length ? `${id}-list` : undefined}
          />
          {suggestions.length > 0 && (
            <datalist id={`${id}-list`}>
              {suggestions.slice(0, 80).map((s) => (
                <option key={s} value={s} />
              ))}
            </datalist>
          )}
        </>
      );
  }
}

export default function ContentEditor({ collectionKey }) {
  const sp = useSearchParams();
  const router = useRouter();
  const toast = useToast();
  const confirm = useConfirm();
  const { col, list, loading, error, reload } = useCollection(collectionKey);
  const corrigeFiles = useCorrigeFiles();

  const isNew = sp.get("nouveau") === "1";
  const id = sp.get("id");
  const fromId = sp.get("depuis");
  const draftKey = `${collectionKey}:${isNew ? "nouveau" : id}`;

  const original = useMemo(() => (list && id ? list.find((x) => x.id === id) || null : null), [list, id]);
  const [form, setForm] = useState(null);
  const [initial, setInitial] = useState(null);
  const [customId, setCustomId] = useState("");
  const [staged, setStaged] = useState([]);
  const [saving, setSaving] = useState(false);
  const [touched, setTouched] = useState(false);
  const [draft, setDraft] = useState(null);
  const [info, setInfo] = useState("");
  const loadedFor = useRef(null);

  // Initialise le formulaire une seule fois par élément ouvert.
  useEffect(() => {
    if (!list) return;
    const key = `${draftKey}:${fromId || ""}`;
    if (loadedFor.current === key) return;
    let start;
    if (isNew) {
      const src = fromId ? list.find((x) => x.id === fromId) : null;
      start = src ? { ...col.empty(), ...duplicateDraft(collectionKey, src) } : col.empty();
    } else if (original) {
      start = { ...col.empty(), ...structuredClone(original) };
    } else return;
    if (col.hydrate) start = col.hydrate(start);
    loadedFor.current = key;
    setForm(start);
    setInitial(start);
    setStaged([]);
    setCustomId("");
    setTouched(false);
    setInfo("");
    const d = readDraft(draftKey);
    if (d && JSON.stringify(d.form) !== JSON.stringify(start)) setDraft(d);
    else setDraft(null);
  }, [list, original, isNew, fromId, draftKey, col, collectionKey]);

  // Corrigé présent dans data/corriges mais absent de corrige_md : on le
  // charge dans le champ au lieu d'afficher un corrigé vide.
  useEffect(() => {
    if (collectionKey !== "concours" || !original || original.corrige_md || !corrigeFiles?.has(original.id)) return;
    let alive = true;
    fetchHead([`data/corriges/${original.id}.md`])
      .then(async (h) => {
        const meta = h.files[`data/corriges/${original.id}.md`];
        if (!meta) return;
        const res = await fetch(meta.url);
        const text = await res.text();
        if (!alive) return;
        setForm((f) => (f && !f.corrige_md ? { ...f, corrige_md: text } : f));
        setInfo("Corrigé chargé depuis data/corriges/ (il n'était pas encore dans la fiche) : vérifie-le puis enregistre.");
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, [collectionKey, original, corrigeFiles]);

  const dirty = Boolean(form && initial && (JSON.stringify(form) !== JSON.stringify(initial) || staged.length));
  useUnsavedGuard(dirty && !saving);

  // Sauvegarde locale continue : un onglet fermé ou un plantage ne coûte
  // plus une heure de rédaction.
  useEffect(() => {
    if (!dirty || !form) return undefined;
    const t = setTimeout(() => writeDraft(draftKey, form), 800);
    return () => clearTimeout(t);
  }, [form, dirty, draftKey]);

  const quality = useMemo(() => (form ? col.quality(form, { corrigeFiles: corrigeFiles || new Set() }) : []), [form, col, corrigeFiles]);
  const score = scoreOf(quality);
  const blocking = quality.filter((c) => !c.ok && c.level === "red");
  const published = form ? col.isPublished(form) : false;
  const idPreview = isNew ? customId || (col.suggestId && form ? col.suggestId(form) : "généré à l'enregistrement") : id;

  async function save({ publish } = {}) {
    if (!form || saving) return;
    setTouched(true);
    const missing = col.groups.flatMap((g) => g.fields).filter((f) => f.required && !(Array.isArray(form[f.key]) ? form[f.key].length : String(form[f.key] ?? "").trim()));
    if (missing.length) {
      toast.error("Champs obligatoires manquants", missing.map((f) => f.label).join(", "));
      return;
    }
    let item = publish === undefined ? form : col.setPublished(form, publish);
    if (publish && blocking.length) {
      const ok = await confirm({
        title: "Publier malgré tout ?",
        body: `Points bloquants : ${blocking.map((c) => c.label).join(", ")}.`,
        confirmLabel: "Publier quand même",
      });
      if (!ok) return;
    }
    if (isNew && customId) item = { ...item, id: customId.trim() };

    setSaving(true);
    try {
      // Images déposées : chemin définitif calculé ici, envoyées dans le même commit.
      let extraFiles = [];
      if (staged.length) {
        const imgKey = col.imageKey || "images";
        const baseId = isNew ? customId.trim() || (col.suggestId ? col.suggestId(item) : "fichier") : id;
        const folder = col.imageFolder ? col.imageFolder(item, baseId) : `images/${villeFolder(item.ville)}/${baseId}`;
        if (col.singleImage) {
          // Nom horodaté : les images sont servies en cache « immuable »,
          // remplacer un fichier sous le même nom resterait invisible.
          const p = `${folder}/${baseId}-${Date.now().toString(36)}.${staged[0].ext}`;
          extraFiles = [{ path: p, base64: staged[0].base64 }];
          item = { ...item, [imgKey]: p };
        } else {
          const existing = item[imgKey] || [];
          let n = existing.length;
          const paths = staged.map((s) => {
            n += 1;
            let p = `${folder}/${baseId}_p${n}.${s.ext}`;
            while (existing.includes(p)) p = `${folder}/${baseId}_p${++n}.${s.ext}`;
            return p;
          });
          extraFiles = staged.map((s, i) => ({ path: paths[i], base64: s.base64 }));
          item = { ...item, [imgKey]: [...existing, ...paths] };
        }
      }
      const saved = await saveItem(collectionKey, item, {
        isNew,
        originalId: id,
        extraFiles,
        note: staged.length ? `${staged.length} image${staged.length > 1 ? "s" : ""}` : "",
      });
      clearDraft(draftKey);
      staged.forEach((s) => URL.revokeObjectURL(s.previewUrl));
      setStaged([]);
      const shown = col.hydrate ? col.hydrate(saved) : saved;
      setForm(shown);
      setInitial(shown);
      setDraft(null);
      toast.success(
        isNew ? `${col.singular[0].toUpperCase() + col.singular.slice(1)} créé` : "Modifications enregistrées",
        col.isPublished(saved) ? "Commit envoyé · en ligne dans ~4 min." : "Enregistré en brouillon : invisible sur le site."
      );
      if (isNew) {
        loadedFor.current = `${collectionKey}:${saved.id}:`;
        router.replace(`${col.href}/editer?id=${encodeURIComponent(saved.id)}`);
      }
    } catch (err) {
      toast.error("Enregistrement impossible", err.message);
    } finally {
      setSaving(false);
    }
  }

  useHotkey("mod+s", () => save(), { allowInInputs: true, enabled: Boolean(form) });

  async function remove() {
    const ok = await confirm({
      title: `Supprimer ${col.article} ?`,
      body: "Il part dans la corbeille (Activité › Corbeille) et peut être restauré.",
      confirmLabel: "Supprimer",
      tone: "danger",
    });
    if (!ok) return;
    try {
      await deleteItems(collectionKey, [id]);
      clearDraft(draftKey);
      setInitial(form);
      toast.success("Supprimé", "Restaurable depuis la corbeille.");
      router.push(col.href);
    } catch (err) {
      toast.error("Suppression impossible", err.message);
    }
  }

  if (error) return <ErrorState error={error} onRetry={reload} />;
  if (loading || !list || (!form && (isNew || original))) return <Skeleton rows={6} height={80} />;
  if (!isNew && !original)
    return (
      <Empty icon="🔎" title="Élément introuvable" action={<Link className="ax-btn" href={col.href}>Retour à la liste</Link>}>
        « {id} » n&apos;existe pas (ou plus) dans {col.path}. Il a peut-être été supprimé : regarde dans la corbeille.
      </Empty>
    );

  return (
    <>
      <div className="ax-editor-head">
        <Link href={col.href} className="ax-btn ghost icon sm" aria-label="Retour à la liste">
          <Icon name="arrowLeft" />
        </Link>
        <div className="ax-editor-title">
          <h1>{isNew ? `Nouveau ${col.singular}` : col.title(form)}</h1>
          <p>
            {published ? <span className="ax-pill green"><span className="ax-dot" /> Publié</span> : <span className="ax-pill">Brouillon</span>}
            {dirty ? <span className="ax-pill amber">Modifications non enregistrées</span> : !isNew && <span>À jour</span>}
            <span className="ax-hide-sm">Ctrl S pour enregistrer</span>
          </p>
        </div>
        {!isNew && published && collectionKey !== "news" && (
          <a className="ax-btn sm ax-hide-sm" href={col.publicUrl(form)} target="_blank" rel="noopener noreferrer">
            <Icon name="external" size="sm" /> Voir
          </a>
        )}
        {!published && (
          <button type="button" className="ax-btn sm" onClick={() => save({ publish: false })} disabled={saving || (!dirty && !isNew)}>
            Enregistrer le brouillon
          </button>
        )}
        <button type="button" className="ax-btn primary" onClick={() => save({ publish: true })} disabled={saving || (!dirty && published && !isNew)}>
          <Icon name={saving ? "loader" : published ? "save" : "send"} />
          {saving ? "Envoi…" : published ? "Enregistrer" : "Publier"}
        </button>
      </div>

      {draft && (
        <Alert
          tone="warn"
          title="Une version non enregistrée existe"
          action={
            <div className="ax-btn-row">
              <button type="button" className="ax-btn sm" onClick={() => (setForm(draft.form), setDraft(null))}>
                Restaurer
              </button>
              <button type="button" className="ax-btn ghost sm" onClick={() => (clearDraft(draftKey), setDraft(null))}>
                Ignorer
              </button>
            </div>
          }
        >
          Sauvegardée automatiquement dans ce navigateur {timeAgo(draft.at)} ({dateTimeFr(draft.at)}).
        </Alert>
      )}
      {info && <Alert tone="info">{info}</Alert>}

      <div className="ax-grid main-side">
        <div className="ax-stack">
          {col.groups.map((g) => (
            <section className="ax-card" key={g.title}>
              <h2 className="ax-title">{g.title}</h2>
              {g.hint && <p className="ax-sub">{g.hint}</p>}
              <div className="ax-row">
                {g.fields.map((f) => (
                  <Field
                    key={f.key}
                    label={["markdown", "images", "questions", "cover"].includes(f.type) ? null : f.label}
                    required={f.required}
                    hint={f.hint}
                    full={f.full}
                    htmlFor={`f-${f.key}`}
                    error={touched && f.required && !(Array.isArray(form[f.key]) ? form[f.key].length : String(form[f.key] ?? "").trim()) ? "Obligatoire" : ""}
                    aside={f.counter ? <Counter value={form[f.key]} range={f.counter} /> : null}
                  >
                    <FieldInput field={{ ...f, touched }} form={form} setForm={setForm} list={list} staged={staged} setStaged={setStaged} />
                  </Field>
                ))}
              </div>
            </section>
          ))}
        </div>

        <aside className="ax-editor-side">
          <section className="ax-card">
            <h2 className="ax-title">Publication</h2>
            <Switch
              checked={published}
              onChange={(on) => setForm((f) => col.setPublished(f, on))}
              label={collectionKey === "news" ? (published ? "Ouvert" : "Clôturé") : published ? "Visible sur le site" : "Brouillon (invisible)"}
            />
            <p className="ax-hint" style={{ margin: "10px 0 0" }}>
              {published
                ? "Chaque enregistrement crée un commit ; le site se met à jour tout seul en quelques minutes."
                : "Un brouillon est enregistré dans le dépôt mais n'apparaît nulle part sur le site."}
            </p>
          </section>

          <section className="ax-card">
            <div className="ax-card-head">
              <h2 className="ax-title">Qualité</h2>
              <ScoreRing score={score} />
            </div>
            <ul className="ax-checklist">
              {quality.map((c) => (
                <li key={c.label}>
                  <Icon name={c.ok ? "checkCircle" : "alert"} size="sm" className={c.ok ? "ok" : `ko ${c.level === "red" ? "red" : ""}`} />
                  <span className={c.ok ? "ax-dim" : undefined}>{c.label}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="ax-card">
            <h2 className="ax-title">Informations</h2>
            {isNew ? (
              <Field label="Identifiant (URL)" hint={`Laisse vide pour « ${idPreview} ».`}>
                <input className="ax-input sm ax-mono" value={customId} onChange={(e) => setCustomId(e.target.value.replace(/[^\w\-]/g, "_"))} placeholder={idPreview} />
              </Field>
            ) : (
              <div className="ax-meta">
                <div>
                  <span>Identifiant</span>
                  <strong className="ax-mono">{id}</strong>
                </div>
                {form.date_ajout && (
                  <div>
                    <span>Ajouté le</span>
                    <strong>{form.date_ajout}</strong>
                  </div>
                )}
                <div>
                  <span>Taille</span>
                  <strong>{bytes(new Blob([JSON.stringify(form)]).size)}</strong>
                </div>
                <div>
                  <span>Fichier</span>
                  <strong className="ax-mono">{col.path}</strong>
                </div>
              </div>
            )}
          </section>

          {!isNew && (
            <section className="ax-card">
              <h2 className="ax-title">Actions</h2>
              <div className="ax-stack" style={{ gap: 8 }}>
                <Link className="ax-btn block" href={`/admin/social?type=${collectionKey}&id=${encodeURIComponent(id)}`}>
                  <Icon name="share" size="sm" /> Préparer un post
                </Link>
                {collectionKey !== "news" && (
                  <Link className="ax-btn block" href={`${col.href}/editer?nouveau=1&depuis=${encodeURIComponent(id)}`}>
                    <Icon name="copy" size="sm" /> Dupliquer
                  </Link>
                )}
                <a className="ax-btn block" href={`https://github.com/SAADDEV0/SaadConcours/commits/main/public/${col.path}`} target="_blank" rel="noopener noreferrer">
                  <Icon name="git" size="sm" /> Historique GitHub
                </a>
                <button type="button" className="ax-btn block danger" onClick={remove}>
                  <Icon name="trash" size="sm" /> Supprimer
                </button>
              </div>
            </section>
          )}
          {dirty && (
            <Menu
              label="Annuler les modifications"
              icon="undo"
              items={[{ icon: "undo", label: "Revenir à la version enregistrée", onClick: () => (setForm(initial), setStaged([]), clearDraft(draftKey)) }]}
            />
          )}
        </aside>
      </div>
    </>
  );
}
