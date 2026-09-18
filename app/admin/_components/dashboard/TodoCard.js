import Link from "next/link";
import WidgetCard from "./WidgetCard";
import Icon from "../ui/Icon";

// Auto-generated from the site's real current state (see _lib/todo.js) —
// items disappear on their own once fixed, so this is never a stale checklist
// someone forgot to tick.
export default function TodoCard({ items, onDismiss }) {
  if (!items.length) return null;
  return (
    <WidgetCard title="À faire" icon="checkCircle" sub="Détecté automatiquement depuis l'état réel du site" onDismiss={onDismiss}>
      <ul className="dash-todo-list">
        {items.map((item) => (
          <li key={item.key} className="dash-todo-item">
            <span className="dash-todo-bullet" aria-hidden="true">
              <Icon name="alertTriangle" size={14} />
            </span>
            <span className="dash-todo-text">{item.text}</span>
            <Link className="admin-link-btn" href={item.href}>
              {item.actionLabel.replace(" →", "")}
              <Icon name="arrowRight" size={13} />
            </Link>
          </li>
        ))}
      </ul>
    </WidgetCard>
  );
}
