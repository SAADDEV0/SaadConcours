"use client";

import { useState } from "react";
import Modal from "../ui/Modal";
import Icon from "../ui/Icon";
import { DASHBOARD_SECTIONS, widgetById } from "../../_lib/widgets";
import { DENSITIES } from "../../_lib/useDashboardLayout";

// Reordering used to be two arrow buttons per row and nothing else, which is
// accurate but slow — moving a widget six places meant six clicks. Rows are
// draggable now (native HTML5 DnD, no dependency added for it), with the
// arrows kept as the keyboard path: drag-only reordering would lock out
// anyone not using a mouse.
export default function CustomizePanel({ open, onClose, layout }) {
  const { order, isVisible, toggle, move, reorder, reset, density, setDensity } = layout;
  const [dragId, setDragId] = useState(null);
  const [overId, setOverId] = useState(null);

  const visibleCount = order.filter(isVisible).length;

  return (
    <Modal open={open} onClose={onClose} labelledBy="customize-title">
      <h2 className="admin-modal-title" id="customize-title">
        Personnaliser le tableau de bord
      </h2>
      <p className="customize-intro">
        {visibleCount} bloc{visibleCount > 1 ? "s" : ""} affiché{visibleCount > 1 ? "s" : ""} sur {order.length}. Glisse
        une ligne pour la déplacer, ou utilise les flèches.
      </p>

      <div className="customize-density">
        <span className="ad-kicker">Densité</span>
        <div className="customize-density-btns" role="group" aria-label="Densité d'affichage">
          {DENSITIES.map((d) => (
            <button
              key={d.id}
              type="button"
              className={"range-seg" + (density === d.id ? " active" : "")}
              aria-pressed={density === d.id}
              onClick={() => setDensity(d.id)}
            >
              {d.label}
            </button>
          ))}
        </div>
      </div>

      <div className="customize-panel">
        {DASHBOARD_SECTIONS.map((section) => {
          const ids = order.filter((id) => widgetById(id)?.section === section.id);
          if (!ids.length) return null;
          return (
            <div className="customize-group" key={section.id}>
              <div className="customize-group-label">
                <Icon name={section.icon} size={14} />
                {section.label}
              </div>
              {ids.map((id, idx) => (
                <CustomizeRow
                  key={id}
                  id={id}
                  visible={isVisible(id)}
                  dragging={dragId === id}
                  dropTarget={overId === id && dragId !== id}
                  onToggle={() => toggle(id)}
                  onMoveUp={() => move(id, -1)}
                  onMoveDown={() => move(id, 1)}
                  disabledUp={idx === 0}
                  disabledDown={idx === ids.length - 1}
                  onDragStart={() => setDragId(id)}
                  onDragEnd={() => {
                    setDragId(null);
                    setOverId(null);
                  }}
                  onDragOver={() => setOverId(id)}
                  onDrop={() => {
                    if (dragId) reorder(dragId, id);
                    setDragId(null);
                    setOverId(null);
                  }}
                />
              ))}
            </div>
          );
        })}
      </div>

      <div className="admin-modal-actions" style={{ marginTop: 18 }}>
        <button type="button" className="admin-btn secondary" onClick={reset}>
          <Icon name="refresh" size={14} /> Réinitialiser
        </button>
        <button type="button" className="admin-btn" onClick={onClose}>
          Fermer
        </button>
      </div>
    </Modal>
  );
}

function CustomizeRow({
  id,
  visible,
  dragging,
  dropTarget,
  onToggle,
  onMoveUp,
  onMoveDown,
  disabledUp,
  disabledDown,
  onDragStart,
  onDragEnd,
  onDragOver,
  onDrop,
}) {
  const label = widgetById(id)?.label || id;
  return (
    <div
      className={"customize-row" + (dragging ? " dragging" : "") + (dropTarget ? " drop-target" : "")}
      draggable
      onDragStart={(e) => {
        // Firefox refuses to start a drag without data on the transfer.
        e.dataTransfer.setData("text/plain", id);
        e.dataTransfer.effectAllowed = "move";
        onDragStart();
      }}
      onDragEnd={onDragEnd}
      onDragOver={(e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
        onDragOver();
      }}
      onDrop={(e) => {
        e.preventDefault();
        onDrop();
      }}
    >
      <span className="customize-row-grip" aria-hidden="true" title="Glisser pour déplacer">
        <Icon name="grip" size={15} />
      </span>
      <label className="admin-checkbox-label" style={{ margin: 0, flex: 1 }}>
        <input type="checkbox" checked={visible} onChange={onToggle} />
        <span className="toggle-thumb" aria-hidden="true" />
        <span className="customize-row-label">{label}</span>
      </label>
      <div className="customize-row-order">
        <button type="button" className="customize-order-btn" onClick={onMoveUp} disabled={disabledUp} aria-label={`Monter « ${label} »`}>
          <Icon name="chevronUp" size={14} />
        </button>
        <button
          type="button"
          className="customize-order-btn"
          onClick={onMoveDown}
          disabled={disabledDown}
          aria-label={`Descendre « ${label} »`}
        >
          <Icon name="chevronDown" size={14} />
        </button>
      </div>
    </div>
  );
}
