export default function PageHeader({ icon, title, subtitle, actions }) {
  return (
    <div className="admin-page-head">
      <div>
        <h1 className="admin-page-title">
          {icon} {title}
        </h1>
        {subtitle && <div className="admin-page-subtitle">{subtitle}</div>}
      </div>
      {actions && <div className="dash-quick-actions">{actions}</div>}
    </div>
  );
}
