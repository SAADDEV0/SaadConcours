"use client";

import { useEffect, useState } from "react";
import Modal from "../ui/Modal";

const PRESETS = [
  { key: "3h", label: "Dans 3 h", ms: 3 * 3600e3 },
  { key: "demain", label: "Demain 9 h", at: () => atHour(1, 9) },
  { key: "semaine", label: "Lundi 9 h", at: nextMonday },
];

function atHour(addDays, hour) {
  const d = new Date();
  d.setDate(d.getDate() + addDays);
  d.setHours(hour, 0, 0, 0);
  return d;
}

function nextMonday() {
  const d = new Date();
  const delta = (8 - d.getDay()) % 7 || 7;
  d.setDate(d.getDate() + delta);
  d.setHours(9, 0, 0, 0);
  return d;
}

// <input type="datetime-local"> attend une heure *locale* sans fuseau, alors
// que toISOString() convertit en UTC — d'où le décalage manuel avant la coupe.
function toLocalInput(date) {
  const d = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return d.toISOString().slice(0, 16);
}

/* Rappel purement local : rien ne publie tout seul (le studio n'appelle
 * aucune API de publication). « Programmer » veut dire « remets-moi ce post
 * sous les yeux à cette heure-là », et l'entrée remonte en haut de
 * l'historique une fois l'échéance passée. */
export default function ReminderModal({ open, onClose, onConfirm, itemLabel }) {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (open) setValue(toLocalInput(atHour(1, 9)));
  }, [open]);

  if (!open) return null;

  return (
    <Modal open={open} onClose={onClose} labelledBy="sgx-reminder-title">
      <h2 className="admin-modal-title" id="sgx-reminder-title">
        Se rappeler de publier
      </h2>
      <div className="admin-modal-body">
        <p style={{ marginTop: 0 }}>
          « {itemLabel} » remontera en haut de l'historique à l'heure choisie. C'est un pense-bête : la publication
          reste manuelle.
        </p>
        <div className="sgx-preset-row">
          {PRESETS.map((p) => (
            <button
              type="button"
              key={p.key}
              className="sgx-chip"
              onClick={() => setValue(toLocalInput(p.at ? p.at() : new Date(Date.now() + p.ms)))}
            >
              {p.label}
            </button>
          ))}
        </div>
        <div className="admin-field" style={{ marginTop: 14, marginBottom: 0 }}>
          <label htmlFor="sgx-reminder-at">Date et heure</label>
          <input
            id="sgx-reminder-at"
            type="datetime-local"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </div>
      <div className="admin-modal-actions">
        <button type="button" className="admin-btn secondary" onClick={onClose}>
          Annuler
        </button>
        <button type="button" className="admin-btn" disabled={!value} onClick={() => onConfirm(new Date(value).toISOString())}>
          Créer le rappel
        </button>
      </div>
    </Modal>
  );
}
