"use client";

import Modal from "../ui/Modal";
import { DASHBOARD_SECTIONS, widgetById } from "../../_lib/widgets";

export default function CustomizePanel({ open, onClose, layout }) {
  const { order, isVisible, toggle, move, reset } = layout;

  return (
    <Modal open={open} onClose={onClose} labelledBy="customize-title">
      <h2 className="admin-modal-title" id="customize-title">
        ⚙️ Personnaliser le tableau de bord
      </h2>
      <div className="customize-panel">
        {DASHBOARD_SECTIONS.map((section) => {
          const ids = order.filter((id) => widgetById(id)?.section === section.id);
          if (!ids.length) return null;
          return (
            <div className="customize-group" key={section.id}>
              <div className="customize-group-label">
                {section.icon} {section.label}
              </div>
              {ids.map((id, idx) => (
                <CustomizeRow
                  key={id}
                  id={id}
                  visible={isVisible(id)}
                  onToggle={() => toggle(id)}
                  onMoveUp={() => move(id, -1)}
                  onMoveDown={() => move(id, 1)}
                  disabledUp={idx === 0}
                  disabledDown={idx === ids.length - 1}
                />
              ))}
            </div>
          );
        })}
      </div>
      <div className="admin-modal-actions" style={{ marginTop: 18 }}>
        <button type="button" className="admin-btn secondary" onClick={reset}>
          Réinitialiser
        </button>
        <button type="button" className="admin-btn" onClick={onClose}>
          Fermer
        </button>
      </div>
    </Modal>
  );
}

function CustomizeRow({ id, visible, onToggle, onMoveUp, onMoveDown, disabledUp, disabledDown }) {
  const label = widgetById(id)?.label || id;
  return (
    <div className="customize-row">
      <label className="admin-checkbox-label" style={{ margin: 0, flex: 1 }}>
        <input type="checkbox" checked={visible} onChange={onToggle} />
        <span className="toggle-thumb" aria-hidden="true" />
        <span className="customize-row-label">{label}</span>
      </label>
      <div className="customize-row-order">
        <button type="button" className="customize-order-btn" onClick={onMoveUp} disabled={disabledUp} aria-label="Monter" title="Monter">
          ▲
        </button>
        <button type="button" className="customize-order-btn" onClick={onMoveDown} disabled={disabledDown} aria-label="Descendre" title="Descendre">
          ▼
        </button>
      </div>
    </div>
  );
}
