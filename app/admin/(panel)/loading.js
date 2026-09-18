import Skeleton from "@/app/admin/_components/ui/Skeleton";

// Shown while a panel route's server component streams in. Every admin page
// used to render nothing at all until its data landed, which reads as a
// frozen click; the shell paints immediately now and only the content column
// is pending.
export default function AdminPanelLoading() {
  return (
    <div className="admin-card" aria-busy="true">
      <Skeleton lines={6} />
    </div>
  );
}
