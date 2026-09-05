"use client";

import { useState } from "react";
import Modal from "../ui/Modal";

function defaultDateTime() {
  // Demain, 9h — le créneau le plus courant pour poster une actu concours.
  const d = new Date();
  d.setDate(d.getDate() + 1);
  d.setHours(9, 0, 0, 0);
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 16);
}

// Rappel local, pas une file d'attente auto-publiée (voir lib/history.js) —
// juste "remets-moi ce post sous les yeux à telle heure" pour étaler les
// annonces sans les oublier.
export default function ScheduleModal({ open, onClose, onConfirm, itemLabel }) {
  const [value, setValue] = useState(defaultDateTime());

  if (!open) return null;

  function confirm() {
    if (!value) return;
    onConfirm(new Date(value).toISOString());
  }

  return (
    <Modal open={open} onClose={onClose} labelledBy="schedule-modal-title">
      <h2 className="admin-modal-title" id="schedule-modal-title">
        Programmer ce post
      </h2>
      <div className="admin-modal-body">
        <p style={{ marginTop: 0 }}>
          « {itemLabel} » réapparaîtra en haut de l'historique à la date choisie — un rappel, pas une publication
          automatique (le texte reste à valider et à publier toi-même le moment venu).
        </p>
        <div className="admin-field">
          <label htmlFor="schedule-datetime">Date et heure</label>
          <input
            id="schedule-datetime"
            type="datetime-local"
            className="admin-search-input"
            style={{ width: "100%" }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </div>
      <div className="admin-modal-actions">
        <button type="button" className="admin-btn secondary" onClick={onClose}>
          Annuler
        </button>
        <button type="button" className="admin-btn" onClick={confirm} disabled={!value}>
          Programmer
        </button>
      </div>
    </Modal>
  );
}
