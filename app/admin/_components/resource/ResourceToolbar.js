"use client";

import Icon from "../ui/Icon";

export default function ResourceToolbar({
  search,
  onSearchChange,
  resourceLabel,
  showViewToggle,
  view,
  onViewChange,
  selectedCount,
  checkboxFields,
  bulkBusy,
  onBulkSetCheckbox,
  onBulkDelete,
  onClearSelection,
}) {
  return (
    <>
      <div className="admin-toolbar">
        <span className="admin-toolbar-search">
          <Icon name="search" size={15} />
        <input
          className="admin-search-input"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={`Rechercher parmi les ${resourceLabel.toLowerCase()}s…`}
        />
        </span>
        {showViewToggle && (
          <div className="admin-view-toggle">
            <button type="button" className={"admin-view-toggle-btn" + (view === "list" ? " active" : "")} onClick={() => onViewChange("list")}>
              <Icon name="list" size={14} /> Liste
            </button>
            <button type="button" className={"admin-view-toggle-btn" + (view === "pipeline" ? " active" : "")} onClick={() => onViewChange("pipeline")}>
              <Icon name="folders" size={14} /> Pipeline
            </button>
          </div>
        )}
      </div>

      {selectedCount > 0 && (
        <div className="admin-bulkbar">
          <strong>{selectedCount} sélectionné(s)</strong>
          {checkboxFields.map((f) => (
            <span key={f.key} style={{ display: "flex", gap: 6 }}>
              <button type="button" className="admin-btn secondary" disabled={bulkBusy} onClick={() => onBulkSetCheckbox(f.key, true)}>
                <Icon name="check" size={13} /> Marquer « {f.label} »
              </button>
              <button type="button" className="admin-btn secondary" disabled={bulkBusy} onClick={() => onBulkSetCheckbox(f.key, false)}>
                <Icon name="x" size={13} /> Retirer « {f.label} »
              </button>
            </span>
          ))}
          <button type="button" className="admin-btn danger" disabled={bulkBusy} onClick={onBulkDelete}>
            Supprimer la sélection
          </button>
          <button type="button" className="admin-btn secondary" disabled={bulkBusy} onClick={onClearSelection}>
            Annuler la sélection
          </button>
        </div>
      )}
    </>
  );
}
