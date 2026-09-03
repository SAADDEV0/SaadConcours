"use client";

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { PAGE_SIZE, emptyFormFor, toFormValues, toPayload } from "../../_lib/resourceForm";
import { RESOURCE_CONFIGS } from "../../_lib/resourceConfigs";
import { usePrefersReducedMotion } from "../../_lib/usePrefersReducedMotion";
import { useToast } from "../ui/ToastProvider";
import { useConfirm } from "../ui/ConfirmProvider";
import ResourceForm from "./ResourceForm";
import ResourceToolbar from "./ResourceToolbar";
import ResourceTable from "./ResourceTable";
import ConcoursPipeline from "./ConcoursPipeline";
import Skeleton from "../ui/Skeleton";

function setParam(searchParams, key, value) {
  const next = new URLSearchParams(searchParams.toString());
  if (value == null) next.delete(key);
  else next.set(key, value);
  return next.toString();
}

function ResourcePanelInner({ config }) {
  const { apiBase, resourceLabel, fields, columns, allowEdit = true, showIdField = false, idPlaceholder } = config;
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const toast = useToast();
  const confirm = useConfirm();
  const reducedMotion = usePrefersReducedMotion();
  const formRef = useRef(null);

  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(() => emptyFormFor(fields));
  const [customId, setCustomId] = useState("");
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");
  const [saving, setSaving] = useState(false);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(() => new Set());
  const [bulkBusy, setBulkBusy] = useState(false);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [editAppliedFromUrl, setEditAppliedFromUrl] = useState(false);

  const view = config.pipeline && searchParams.get("vue") === "pipeline" ? "pipeline" : "list";

  async function load() {
    setLoading(true);
    const res = await fetch(apiBase);
    const data = await res.json();
    setList(data);
    setLoading(false);
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiBase]);

  // Searches visible columns AND the full text fields (enonce_md,
  // corrige_md, cours content...) even though those aren't shown in the
  // table — otherwise finding "which concours mentions le seuil de
  // signification" means opening every single one by hand.
  const filteredList = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return list;
    return list.filter(
      (item) =>
        columns.some((c) => {
          const raw = c.render ? c.render(item) : item[c.key];
          return String(raw ?? "").toLowerCase().includes(q);
        }) ||
        fields.some((f) => {
          if (f.type === "checkbox" || f.type === "quiz-questions" || f.type === "image-list") return false;
          const raw = item[f.key];
          return typeof raw === "string" && raw.toLowerCase().includes(q);
        })
    );
  }, [list, search, columns, fields]);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [search, list]);

  const pagedList = useMemo(() => filteredList.slice(0, visibleCount), [filteredList, visibleCount]);
  const checkboxFields = fields.filter((f) => f.type === "checkbox");

  function toggleSelected(id) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function toggleSelectAllVisible() {
    setSelected((prev) => {
      const visibleIds = pagedList.map((i) => i.id);
      const allSelected = visibleIds.length > 0 && visibleIds.every((id) => prev.has(id));
      if (allSelected) return new Set([...prev].filter((id) => !visibleIds.includes(id)));
      return new Set([...prev, ...visibleIds]);
    });
  }

  async function handleChangeStatut(id, statut) {
    await fetch(`${apiBase}/${encodeURIComponent(id)}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ statut }),
    });
    await load();
  }

  function findDuplicate() {
    if (!config.duplicateKeys || editingId) return null;
    return list.find((item) => config.duplicateKeys.every((k) => String(item[k] || "").trim().toLowerCase() === String(form[k] || "").trim().toLowerCase()));
  }

  async function onBulkDelete() {
    if (!selected.size) return;
    const ok = await confirm({
      title: `Supprimer ${selected.size} élément(s) ?`,
      body: "Cette action est définitive.",
      confirmLabel: "Supprimer",
      tone: "danger",
    });
    if (!ok) return;
    setBulkBusy(true);
    try {
      for (const id of selected) {
        await fetch(`${apiBase}/${encodeURIComponent(id)}`, { method: "DELETE" });
      }
      setSelected(new Set());
      await load();
      toast.success(`${selected.size} élément(s) supprimé(s).`);
    } finally {
      setBulkBusy(false);
    }
  }

  async function onBulkSetCheckbox(key, value) {
    if (!selected.size) return;
    setBulkBusy(true);
    try {
      for (const id of selected) {
        await fetch(`${apiBase}/${encodeURIComponent(id)}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ [key]: value }),
        });
      }
      setSelected(new Set());
      await load();
    } finally {
      setBulkBusy(false);
    }
  }

  async function startEdit(item, { fromUrl = false } = {}) {
    setEditingId(item.id);
    setForm(toFormValues(item, fields));
    setError("");
    setInfo("");
    if (!fromUrl) {
      router.replace(`${pathname}?${setParam(searchParams, "edit", item.id)}`, { scroll: false });
    }
    formRef.current?.scrollIntoView({ block: "start", behavior: reducedMotion ? "auto" : "smooth" });

    // corrige_from_github (set by GET /api/concours) means a corrigé already
    // exists in the repo's data/corriges/ folder but was never copied into
    // corrige_md — pull it in here instead of leaving the admin looking at
    // an empty field for a corrigé that already exists.
    if (item.corrige_from_github) {
      try {
        const res = await fetch(`${apiBase}/${encodeURIComponent(item.id)}/corrige`);
        if (res.ok) {
          const data = await res.json();
          setForm((prev) => ({ ...prev, corrige_md: data.corrige_md }));
          setInfo("Corrigé chargé depuis GitHub — vérifie le contenu avant d'enregistrer.");
        }
      } catch {
        // best-effort: leave the field empty if the fetch fails
      }
    }
  }

  function startNew() {
    setEditingId(null);
    setForm(emptyFormFor(fields));
    setCustomId("");
    setError("");
    setInfo("");
    if (searchParams.get("edit")) {
      router.replace(`${pathname}?${setParam(searchParams, "edit", null)}`, { scroll: false });
    }
  }

  // Deep-link support: /admin/concours?edit=<id> opens straight into the
  // edit form once the list has loaded, from the global search / dashboard.
  useEffect(() => {
    const editParam = searchParams.get("edit");
    if (!editParam || editAppliedFromUrl || !list.length) return;
    const item = list.find((i) => i.id === editParam);
    if (item) startEdit(item, { fromUrl: true });
    setEditAppliedFromUrl(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list, editAppliedFromUrl]);

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    setInfo("");
    const dup = findDuplicate();
    if (dup) {
      const ok = await confirm({
        title: "Doublon probable",
        body: `Un ${resourceLabel.toLowerCase()} similaire existe déjà (${dup.id}). Ajouter quand même ?`,
        confirmLabel: "Ajouter quand même",
      });
      if (!ok) return;
    }
    setSaving(true);
    try {
      const payload = toPayload(form, fields);
      let res;
      if (editingId) {
        res = await fetch(`${apiBase}/${encodeURIComponent(editingId)}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        if (showIdField && customId) payload.id = customId;
        res = await fetch(apiBase, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Erreur lors de l'enregistrement.");
        return;
      }
      toast.success(editingId ? `${resourceLabel} mis à jour.` : `${resourceLabel} ajouté.`);
      startNew();
      await load();
    } finally {
      setSaving(false);
    }
  }

  async function onDelete(id) {
    const ok = await confirm({ title: `Supprimer "${id}" ?`, body: "Cette action est définitive.", confirmLabel: "Supprimer", tone: "danger" });
    if (!ok) return;
    const res = await fetch(`${apiBase}/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (res.ok) {
      toast.success(`${resourceLabel} supprimé.`);
      await load();
      if (editingId === id) startNew();
    } else {
      toast.error("Échec de la suppression.");
    }
  }

  function onViewChange(next) {
    router.replace(`${pathname}?${setParam(searchParams, "vue", next === "pipeline" ? "pipeline" : null)}`, { scroll: false });
  }

  return (
    <>
      <ResourceForm
        formRef={formRef}
        config={config}
        editingId={editingId}
        form={form}
        setForm={setForm}
        customId={customId}
        setCustomId={setCustomId}
        saving={saving}
        error={error}
        info={info}
        onSubmit={onSubmit}
        onCancel={startNew}
      />

      <h2 className="admin-section-title" style={{ marginTop: 22 }}>
        {loading ? "Chargement..." : `${filteredList.length} / ${list.length} ${resourceLabel.toLowerCase()}(s)`}
      </h2>

      <ResourceToolbar
        search={search}
        onSearchChange={setSearch}
        resourceLabel={resourceLabel}
        showViewToggle={Boolean(config.pipeline)}
        view={view}
        onViewChange={onViewChange}
        selectedCount={selected.size}
        checkboxFields={checkboxFields}
        bulkBusy={bulkBusy}
        onBulkSetCheckbox={onBulkSetCheckbox}
        onBulkDelete={onBulkDelete}
        onClearSelection={() => setSelected(new Set())}
      />

      {config.pipeline && view === "pipeline" ? (
        <ConcoursPipeline list={filteredList} onEdit={startEdit} onDelete={onDelete} onChangeStatut={handleChangeStatut} />
      ) : (
        <ResourceTable
          columns={columns}
          items={pagedList}
          selected={selected}
          onToggleSelected={toggleSelected}
          onToggleSelectAll={toggleSelectAllVisible}
          allowEdit={allowEdit}
          onEdit={startEdit}
          onDelete={onDelete}
          loadMore={() => setVisibleCount((n) => n + PAGE_SIZE)}
          remaining={filteredList.length - pagedList.length}
        />
      )}
    </>
  );
}

export default function ResourcePanel({ resourceKey }) {
  const config = RESOURCE_CONFIGS[resourceKey];
  return (
    <Suspense fallback={<Skeleton lines={4} />}>
      <ResourcePanelInner config={config} />
    </Suspense>
  );
}
