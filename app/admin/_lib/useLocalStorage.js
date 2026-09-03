"use client";

import { useCallback, useEffect, useState } from "react";

// SSR-safe localStorage-backed state: renders `initial` on the server and on
// the first client render (so hydration always matches), then swaps in the
// stored value from an effect. `ready` tells the caller once that swap has
// happened, for callers that want to avoid a visible layout jump.
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

  const update = useCallback(
    (next) => {
      setValue((prev) => {
        const resolved = typeof next === "function" ? next(prev) : next;
        try {
          window.localStorage.setItem(key, JSON.stringify(resolved));
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
