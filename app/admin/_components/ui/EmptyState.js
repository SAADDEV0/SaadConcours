import Icon from "./Icon";

// `icon` is an Icon name (see ui/Icon.js), not an emoji. Kept optional so a
// caller that has nothing meaningful to draw doesn't have to invent a glyph.
export default function EmptyState({ icon = "inbox", title, message, action }) {
  return (
    <div className="empty-state">
      {icon && (
        <div className="empty-state-icon" aria-hidden="true">
          <Icon name={icon} size={22} />
        </div>
      )}
      {title && <strong>{title}</strong>}
      {message && <span>{message}</span>}
      {action}
    </div>
  );
}
