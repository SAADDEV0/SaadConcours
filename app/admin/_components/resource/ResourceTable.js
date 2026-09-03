"use client";

import EmptyState from "../ui/EmptyState";

export default function ResourceTable({
  columns,
  items,
  selected,
  onToggleSelected,
  onToggleSelectAll,
  allowEdit,
  onEdit,
  onDelete,
  loadMore,
  remaining,
}) {
  if (!items.length) {
    return <EmptyState icon="🗂️" title="Aucun résultat" message="Essaie une autre recherche, ou ajoute-en un depuis le formulaire ci-dessus." />;
  }

  return (
    <>
      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>
                <input type="checkbox" checked={items.length > 0 && items.every((i) => selected.has(i.id))} onChange={onToggleSelectAll} />
              </th>
              {columns.map((c) => (
                <th key={c.key}>{c.label}</th>
              ))}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td data-label="">
                  <input type="checkbox" checked={selected.has(item.id)} onChange={() => onToggleSelected(item.id)} />
                </td>
                {columns.map((c) => {
                  const val = c.render ? c.render(item) : String(item[c.key] ?? "");
                  return (
                    <td key={c.key} data-label={c.label}>
                      {c.mono ? <span className="admin-id-chip">{val}</span> : val}
                    </td>
                  );
                })}
                <td data-label="Actions">
                  <div className="admin-row-actions">
                    {allowEdit && (
                      <button className="admin-icon-btn" title="Modifier" type="button" onClick={() => onEdit(item)}>
                        ✏️
                      </button>
                    )}
                    <button className="admin-icon-btn danger" title="Supprimer" type="button" onClick={() => onDelete(item.id)}>
                      🗑️
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {remaining > 0 && (
        <div className="admin-load-more">
          <button type="button" className="admin-btn secondary" onClick={loadMore}>
            Afficher plus ({remaining} restant{remaining > 1 ? "s" : ""})
          </button>
        </div>
      )}
    </>
  );
}
