"use client";

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
        <input
          className="admin-search-input"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={`Rechercher parmi les ${resourceLabel.toLowerCase()}s...`}
        />
        {showViewToggle && (
          <div className="admin-view-toggle">
            <button type="button" className={"admin-view-toggle-btn" + (view === "list" ? " active" : "")} onClick={() => onViewChange("list")}>
              ☰ Liste
            </button>
            <button type="button" className={"admin-view-toggle-btn" + (view === "pipeline" ? " active" : "")} onClick={() => onViewChange("pipeline")}>
              🗂️ Pipeline
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
                Marquer "{f.label}" ✓
              </button>
              <button type="button" className="admin-btn secondary" disabled={bulkBusy} onClick={() => onBulkSetCheckbox(f.key, false)}>
                Marquer "{f.label}" ✗
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
