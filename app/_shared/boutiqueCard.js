// Carte d'un cahier de la boutique — même rendu côté serveur (grille
// initiale, lisible par les moteurs) et côté client (filtres), comme
// blogCard.js.

import { escapeHtml } from "./concoursCard";
import { boutiqueNiveau, formatPrix, remisePct, produitImage, isProduitAchetable } from "../../lib/boutique";

export function boutiqueCardHtml(p) {
  const niv = boutiqueNiveau(p.niveau);
  const remise = remisePct(p);
  const cover = produitImage(p.couverture);
  const achetable = isProduitAchetable(p);
  return `
  <a class="shop-card" href="/boutique/${encodeURIComponent(p.id)}" data-id="${escapeHtml(p.id)}" data-niveau="${escapeHtml(p.niveau || "")}" style="--mat-h:${niv?.hue ?? 230}">
    <span class="shop-cover">
      ${cover ? `<img src="${escapeHtml(cover)}" alt="Couverture : ${escapeHtml(p.titre)}" loading="lazy" decoding="async">` : `<span class="shop-cover-ph" aria-hidden="true">${niv?.icon || "📘"}</span>`}
      ${p.badge ? `<span class="shop-badge">${escapeHtml(p.badge)}</span>` : ""}
      ${remise ? `<span class="shop-remise">−${remise} %</span>` : ""}
    </span>
    <span class="shop-body">
      <span class="sp-card-kicker">${niv ? `${niv.icon} ${escapeHtml(niv.label)}` : "Cahier"}${p.matiere ? ` · ${escapeHtml(p.matiere)}` : ""}</span>
      <span class="shop-title">${escapeHtml(p.titre)}</span>
      ${p.sousTitre ? `<span class="shop-sub">${escapeHtml(p.sousTitre)}</span>` : ""}
      <span class="shop-foot">
        <span class="shop-price">
          ${achetable ? `<strong>${escapeHtml(formatPrix(p.prix, p.devise))}</strong>` : `<strong class="shop-soon">Bientôt disponible</strong>`}
          ${achetable && remise ? `<s>${escapeHtml(formatPrix(p.prixBarre, p.devise))}</s>` : ""}
        </span>
        ${p.pages ? `<span class="shop-pages">${Number(p.pages)} pages · ${escapeHtml(p.format || "PDF")}</span>` : ""}
      </span>
    </span>
  </a>`;
}
