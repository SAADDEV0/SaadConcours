export default function PageHeader({ icon, title, subtitle, actions }) {
  return (
    <div className="admin-page-head">
      <div>
        <div className="admin-breadcrumb">
          <span>SaadConcours</span> / <span>Administration</span>
        </div>
        <h1 className="admin-page-title">
          {icon} {title}
        </h1>
        {subtitle && <div className="admin-page-subtitle">{subtitle}</div>}
      </div>
      {actions && <div className="dash-quick-actions">{actions}</div>}
    </div>
  );
}
