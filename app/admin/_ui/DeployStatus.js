"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Icon from "./Icon";
import { api } from "../_lib/api";
import { getLastCommit, onCommit } from "../_lib/repo";
import { timeAgo } from "../_lib/format";

// « Ma modification est-elle en ligne ? » — chaque enregistrement crée un
// commit sur main, qui déclenche un déploiement Cloudflare de 3 à 5 minutes.
// L'ancien panneau ne disait rien de ce délai : on enregistrait, on ouvrait
// le site, on ne voyait rien, on recommençait.
export function useDeployState() {
  const [runs, setRuns] = useState(null);
  const [error, setError] = useState(false);
  const [pending, setPending] = useState(() => getLastCommit());

  const refresh = useCallback(async () => {
    try {
      const d = await api("/api/admin/activity?only=deploys");
      if (Array.isArray(d.deploys)) {
        setRuns(d.deploys);
        setError(false);
      } else setError(true);
    } catch {
      setError(true);
    }
  }, []);

  useEffect(() => onCommit((c) => setPending(c)), []);

  const latest = runs?.[0] || null;
  const running = Boolean(runs?.some((r) => r.status !== "completed"));
  // Un commit fait depuis cet onglet et plus récent que le dernier
  // déploiement listé : GitHub Actions ne l'a pas encore pris en compte.
  const waiting = Boolean(pending && (!latest || new Date(latest.createdAt).getTime() < pending.at - 5000) && Date.now() - pending.at < 4 * 60000);

  useEffect(() => {
    refresh();
    const ms = running || waiting ? 12000 : 90000;
    const t = setInterval(refresh, ms);
    return () => clearInterval(t);
  }, [refresh, running, waiting]);

  let state = "unknown";
  if (runs) {
    if (running || waiting) state = "running";
    else if (latest?.conclusion === "success") state = "ok";
    else if (latest?.conclusion === "failure") state = "fail";
    else state = "ok";
  }
  return { state, runs, latest, error, refresh };
}

export default function DeployStatus() {
  const { state, latest, error } = useDeployState();
  if (error && state === "unknown") return null;
  const label =
    state === "running" ? "Mise en ligne…" : state === "fail" ? "Échec du déploiement" : state === "ok" ? "Site à jour" : "Statut…";
  const title =
    state === "running"
      ? "Un déploiement est en cours : les dernières modifications seront visibles sur le site dans quelques minutes."
      : latest
        ? `Dernier déploiement ${timeAgo(latest.updatedAt)} — ${latest.title}`
        : "";
  return (
    <Link href="/admin/activite?onglet=deploiements" className={`ax-deploy ${state}`} title={title}>
      {state === "running" ? <span className="ax-dot pulse" /> : state === "fail" ? <Icon name="alert" size="sm" /> : <span className="ax-dot" />}
      <span className="ax-hide-sm">{label}</span>
    </Link>
  );
}
