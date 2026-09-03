export default function EmptyState({ icon = "🗂️", title, message }) {
  return (
    <div className="empty-state">
      <div className="empty-state-icon">{icon}</div>
      {title && <strong>{title}</strong>}
      {message && <span>{message}</span>}
    </div>
  );
}
