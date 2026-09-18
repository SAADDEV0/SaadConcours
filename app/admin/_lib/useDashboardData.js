"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { rangeToQuery } from "@/lib/dateRange";

const POLL_MS = 60000;

/* --------------------------------------------------------------------------
 * The dashboard's data layer. What it replaces: a bare `fetch` in an effect
 * that re-ran every 60 s, replaced the whole `stats` object wholesale (so
 * every widget re-rendered and every chart re-mounted on each tick), kept
 * polling forever in a background tab, and put a single `error` string in
 * front of the entire page if any part of it failed.
 *
 * What it does instead:
 *   - fetches only the groups the visible tab needs, and remembers groups
 *     already loaded so switching back to a tab is instant;
 *   - keeps the previous payload on screen while a refetch is in flight
 *     (no skeleton flash on every poll, no layout jump);
 *   - suspends polling while the tab is hidden and refetches once on return,
 *     instead of hammering KV from tabs nobody is looking at;
 *   - isolates failure per group, with a retry that re-requests just that
 *     group.
 * ------------------------------------------------------------------------ */
export function useDashboardData(range, groups) {
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});
  const [pending, setPending] = useState(() => new Set());
  const [lastUpdated, setLastUpdated] = useState(null);

  // Groups are passed as a fresh array each render; key on the content so the
  // effect doesn't restart because the identity changed.
  const groupKey = useMemo(() => [...groups].sort().join(","), [groups]);
  const rangeQuery = rangeToQuery(range);

  // Switching period invalidates every cached group; switching tab does not.
  const loadedRef = useRef({ rangeQuery: null, groups: new Set() });
  const abortRef = useRef(null);

  const fetchGroups = useCallback(
    async (wanted, { force = false } = {}) => {
      if (!wanted.length) return;

      const list = wanted.join(",");
      setPending((prev) => {
        const next = new Set(prev);
        wanted.forEach((g) => next.add(g));
        return next;
      });

      // Only one in-flight request at a time: a period change while a poll is
      // running would otherwise race, and the slower response could overwrite
      // the newer one.
      abortRef.current?.abort();
      const controller = new AbortController();
      abortRef.current = controller;

      try {
        const res = await fetch(`/api/admin/stats?${rangeQuery}&groups=${list}`, {
          signal: controller.signal,
          cache: force ? "no-store" : "default",
        });
        if (!res.ok) {
          throw new Error(
            res.status === 401
              ? "Session expirée — reconnecte-toi."
              : `Le serveur a répondu ${res.status}.`
          );
        }
        const json = await res.json();

        // Merge rather than replace: groups outside this request keep the
        // data they already had, so a partial refetch can't blank them.
        setData((prev) => ({ ...prev, ...(json.groups || {}) }));
        setErrors((prev) => {
          const next = { ...prev };
          for (const g of wanted) delete next[g];
          // Groups the server itself reported as failed (Promise.allSettled
          // on its side) come back in `errors` with the rest of the payload.
          for (const [g, msg] of Object.entries(json.errors || {})) next[g] = msg;
          return next;
        });
        for (const g of wanted) {
          if (!json.errors?.[g]) loadedRef.current.groups.add(g);
        }
        setLastUpdated(Date.now());
      } catch (err) {
        if (err.name === "AbortError") return;
        setErrors((prev) => {
          const next = { ...prev };
          for (const g of wanted) next[g] = err.message || "Chargement impossible.";
          return next;
        });
      } finally {
        setPending((prev) => {
          const next = new Set(prev);
          wanted.forEach((g) => next.delete(g));
          return next;
        });
      }
    },
    [rangeQuery]
  );

  // Load whatever the current tab needs and hasn't got yet for this period.
  useEffect(() => {
    const wanted = groupKey ? groupKey.split(",") : [];
    if (loadedRef.current.rangeQuery !== rangeQuery) {
      loadedRef.current = { rangeQuery, groups: new Set() };
      // Period changed: drop stale per-group errors, but keep the old numbers
      // on screen until the new ones land.
      setErrors({});
    }
    const missing = wanted.filter((g) => !loadedRef.current.groups.has(g));
    if (missing.length) fetchGroups(missing);
  }, [groupKey, rangeQuery, fetchGroups]);

  // Poll — but only while the tab is actually being looked at. A dashboard
  // left open in a background tab used to keep reading KV every minute for
  // as long as the browser stayed open.
  useEffect(() => {
    let timer = null;

    const refresh = () => {
      const wanted = groupKey ? groupKey.split(",") : [];
      if (wanted.length) fetchGroups(wanted, { force: true });
    };

    const start = () => {
      stop();
      timer = setInterval(() => {
        if (!document.hidden) refresh();
      }, POLL_MS);
    };
    const stop = () => {
      if (timer) clearInterval(timer);
      timer = null;
    };

    const onVisibility = () => {
      if (document.hidden) {
        stop();
      } else {
        // Coming back to a tab that's been hidden for an hour should show
        // current numbers immediately, not whatever was true when it was
        // last in front.
        refresh();
        start();
      }
    };

    if (!document.hidden) start();
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [groupKey, fetchGroups]);

  useEffect(() => () => abortRef.current?.abort(), []);

  const retry = useCallback((group) => fetchGroups([group], { force: true }), [fetchGroups]);
  const refreshAll = useCallback(
    () => fetchGroups(groupKey ? groupKey.split(",") : [], { force: true }),
    [groupKey, fetchGroups]
  );

  return {
    data,
    errors,
    retry,
    refreshAll,
    lastUpdated,
    isPending: (g) => pending.has(g),
    // "Nothing on screen yet" — distinct from "refreshing what's already
    // there", which must not show a skeleton.
    isInitialLoading: (g) => pending.has(g) && !data[g],
    isRefreshing: pending.size > 0,
  };
}
