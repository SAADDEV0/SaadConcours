"use client";

import { useCallback, useEffect, useState } from "react";

// SSR-safe localStorage-backed state: renders `initial` on the server and on
// the first client render (so hydration always matches), then swaps in the
// stored value from an effect. `ready` tells the caller once that swap has
// happened, for callers that want to avoid a visible layout jump.
//
// Two components reading the same key stay in sync: a write broadcasts on a
// custom event, because the native `storage` event only fires in *other*
// tabs, never the one that did the writing. Without it, changing the
// dashboard density in the Personnaliser modal wouldn't reach the shell that
// applies it until a reload.
const EVENT = "sc-local-storage";

export function useLocalStorage(key, initial) {
  const [value, setValue] = useState(initial);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(key);
      if (raw != null) setValue(JSON.parse(raw));
    } catch {
      // ignore malformed/blocked storage — fall back to `initial`
    } finally {
      setReady(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  useEffect(() => {
    function onLocal(e) {
      if (e.detail?.key !== key) return;
      setValue(e.detail.value);
    }
    function onStorage(e) {
      if (e.key !== key || e.newValue == null) return;
      try {
        setValue(JSON.parse(e.newValue));
      } catch {
        /* ignore */
      }
    }
    window.addEventListener(EVENT, onLocal);
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener(EVENT, onLocal);
      window.removeEventListener("storage", onStorage);
    };
  }, [key]);

  const update = useCallback(
    (next) => {
      setValue((prev) => {
        const resolved = typeof next === "function" ? next(prev) : next;
        try {
          window.localStorage.setItem(key, JSON.stringify(resolved));
          window.dispatchEvent(new CustomEvent(EVENT, { detail: { key, value: resolved } }));
        } catch {
          // quota exceeded or storage disabled — keep the in-memory value
        }
        return resolved;
      });
    },
    [key]
  );

  return [value, update, ready];
}
