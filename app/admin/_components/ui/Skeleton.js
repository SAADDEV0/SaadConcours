export default function Skeleton({ lines = 3, className = "" }) {
  return (
    <div className={"admin-stack " + className} aria-hidden="true">
      {Array.from({ length: lines }).map((_, i) => (
        <div className="skeleton-line" key={i} style={{ width: i === lines - 1 ? "60%" : "100%" }} />
      ))}
    </div>
  );
}
