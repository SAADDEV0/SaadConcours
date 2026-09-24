"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// État mémorisé dans le navigateur (préférences d'affichage uniquement).
// Lecture après le montage pour que le rendu serveur et le premier rendu
// client soient identiques.
export function useLocalStorage(key, initial) {
  const [value, setValue] = useState(initial);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    try {
      const raw = localStorage.getItem(key);
      if (raw !== null) setValue(JSON.parse(raw));
    } catch {
      // stockage indisponible (navigation privée) : on garde la valeur initiale
    }
    setReady(true);
  }, [key]);
  const set = useCallback(
    (next) => {
      setValue((prev) => {
        const v = typeof next === "function" ? next(prev) : next;
        try {
          localStorage.setItem(key, JSON.stringify(v));
        } catch {
          // idem
        }
        return v;
      });
    },
    [key]
  );
  return [value, set, ready];
}

export function useDebounced(value, delay = 250) {
  const [v, setV] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setV(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return v;
}

function isTyping() {
  const el = document.activeElement;
  return el && (el.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName));
}

// Raccourci clavier. combo : "mod+s", "mod+k", "/", "?"… (« mod » = Ctrl ou ⌘).
export function useHotkey(combo, handler, { allowInInputs = false, enabled = true } = {}) {
  const ref = useRef(handler);
  ref.current = handler;
  useEffect(() => {
    if (!enabled) return undefined;
    const parts = combo.toLowerCase().split("+");
    const key = parts.pop();
    const mod = parts.includes("mod");
    const shift = parts.includes("shift");
    function onKey(e) {
      if (e.key.toLowerCase() !== key) return;
      if (mod !== (e.ctrlKey || e.metaKey)) return;
      if (shift !== e.shiftKey) return;
      if (!allowInInputs && !mod && isTyping()) return;
      e.preventDefault();
      ref.current(e);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [combo, allowInInputs, enabled]);
}

/* ------------------------------ Modifications non enregistrées ------------------------------
 * Un éditeur signale qu'il a des changements en attente ; la navigation de
 * la console (menu, palette, liens internes) demande alors confirmation au
 * lieu de jeter la saisie. La fermeture de l'onglet est couverte par
 * beforeunload.
 */
const dirtyEditors = new Set();

export function hasUnsavedChanges() {
  return dirtyEditors.size > 0;
}

export function confirmLeave() {
  if (!dirtyEditors.size) return true;
  // eslint-disable-next-line no-alert
  const ok = window.confirm("Tu as des modifications non enregistrées. Quitter quand même ?");
  if (ok) dirtyEditors.clear();
  return ok;
}

export function useUnsavedGuard(dirty) {
  const token = useRef({});
  useEffect(() => {
    const t = token.current;
    if (dirty) dirtyEditors.add(t);
    else dirtyEditors.delete(t);
    return () => dirtyEditors.delete(t);
  }, [dirty]);
  useEffect(() => {
    if (!dirty) return undefined;
    const onLeave = (e) => {
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", onLeave);
    return () => window.removeEventListener("beforeunload", onLeave);
  }, [dirty]);
}

export function useInterval(fn, ms, enabled = true) {
  const ref = useRef(fn);
  ref.current = fn;
  useEffect(() => {
    if (!enabled || !ms) return undefined;
    const t = setInterval(() => ref.current(), ms);
    return () => clearInterval(t);
  }, [ms, enabled]);
}

export function useOnClickOutside(ref, fn, enabled = true) {
  useEffect(() => {
    if (!enabled) return undefined;
    function onDown(e) {
      if (ref.current && !ref.current.contains(e.target)) fn();
    }
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [ref, fn, enabled]);
}
