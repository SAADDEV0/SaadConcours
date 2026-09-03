import Link from "next/link";
import WidgetCard from "./WidgetCard";

export default function TodoCard({ items, onDismiss }) {
  if (!items.length) return null;
  return (
    <WidgetCard title="✅ À faire" onDismiss={onDismiss}>
      <ul className="dash-todo-list">
        {items.map((item) => (
          <li key={item.key} className="dash-todo-item">
            <span>{item.text}</span>
            <Link className="admin-link-btn" href={item.href}>
              {item.actionLabel}
            </Link>
          </li>
        ))}
      </ul>
    </WidgetCard>
  );
}
