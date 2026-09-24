"use client";

// Appels aux routes /api/admin/* : JSON en entrée/sortie, erreurs lisibles,
// et retour à la page de connexion quand la session a expiré au lieu d'un
// « Erreur 401 » incompréhensible au milieu d'une saisie.

export class ApiError extends Error {
  constructor(message, status, data) {
    super(message);
    this.status = status;
    this.data = data;
  }
}

function goToLogin() {
  if (typeof window === "undefined") return;
  const next = window.location.pathname + window.location.search;
  window.location.href = `/admin/login?next=${encodeURIComponent(next)}&expired=1`;
}

export async function api(url, { method = "GET", body, signal, headers } = {}) {
  let res;
  try {
    res = await fetch(url, {
      method,
      signal,
      cache: "no-store",
      headers: body !== undefined && typeof body !== "string" ? { "Content-Type": "application/json", ...headers } : headers,
      body: body === undefined ? undefined : typeof body === "string" ? body : JSON.stringify(body),
    });
  } catch (err) {
    if (err.name === "AbortError") throw err;
    throw new ApiError("Connexion impossible. Vérifie ta connexion internet.", 0);
  }
  if (res.status === 401) {
    goToLogin();
    throw new ApiError("Session expirée.", 401);
  }
  const type = res.headers.get("content-type") || "";
  const data = type.includes("application/json") ? await res.json().catch(() => null) : await res.text();
  if (!res.ok) {
    const msg = (data && typeof data === "object" && data.error) || `Erreur ${res.status}`;
    throw new ApiError(msg, res.status, data);
  }
  return data;
}

export function downloadFile(url) {
  const a = document.createElement("a");
  a.href = url;
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export function downloadText(filename, text, type = "application/json") {
  const blob = new Blob([text], { type: `${type};charset=utf-8` });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}
