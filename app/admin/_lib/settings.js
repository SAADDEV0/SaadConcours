"use client";

import { useEffect, useMemo, useState } from "react";
import { useJson } from "./content";
import { mutateJson } from "./repo";
import { useUnsavedGuard } from "./hooks";

export const SETTINGS_PATH = "data/settings.json";

// Formulaire branché sur settings.json : ne touche qu'aux clés `keys`, et
// l'enregistrement relit le fichier frais avant de fusionner — deux écrans
// de réglages ouverts ne peuvent pas s'écraser l'un l'autre.
export function useSettingsForm(keys) {
  const { data, loading, error, reload } = useJson(SETTINGS_PATH);
  const [form, setForm] = useState(null);
  const [saving, setSaving] = useState(false);
  const pick = useMemo(() => (src) => Object.fromEntries(keys.map((k) => [k, src?.[k] ?? null])), [keys.join("|")]); // eslint-disable-line react-hooks/exhaustive-deps
  const initial = useMemo(() => (data ? pick(data) : null), [data, pick]);

  useEffect(() => {
    if (initial && !form) setForm(structuredClone(initial));
  }, [initial, form]);

  const dirty = Boolean(form && initial && JSON.stringify(form) !== JSON.stringify(initial));
  useUnsavedGuard(dirty && !saving);

  async function save(label) {
    setSaving(true);
    try {
      await mutateJson(SETTINGS_PATH, (current) => ({
        data: { ...current, ...form },
        message: `Réglages : ${label}`,
        audit: { action: "settings", resource: "settings", label, detail: keys.slice(0, 8).join(", ") },
      }));
      setForm(null); // se recale sur la version enregistrée
    } finally {
      setSaving(false);
    }
  }

  return {
    settings: data,
    form,
    set: (k, v) => setForm((f) => ({ ...f, [k]: v })),
    setForm,
    dirty,
    saving,
    save,
    reset: () => setForm(structuredClone(initial)),
    loading,
    error,
    reload,
  };
}

export async function patchSettings(fn, label) {
  return mutateJson(SETTINGS_PATH, (current) => ({
    data: fn(structuredClone(current)),
    message: `Réglages : ${label}`,
    audit: { action: "settings", resource: "settings", label },
  }));
}
