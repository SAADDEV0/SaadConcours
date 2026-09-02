// Server-rendered AdSense unit. Renders nothing unless the admin has both
// the global switch and this specific slot enabled with a slot ID set —
// keeps unconfigured placements silent instead of showing empty ad boxes.
export default function AdSlot({ enabled, publisherId, slotId, format = "auto", label }) {
  if (!enabled || !publisherId || !slotId) return null;
  return (
    <div className="ad-slot" aria-label={label || "Publicité"}>
      <span className="ad-slot-label">Publicité</span>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={publisherId}
        data-ad-slot={slotId}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
      {/* eslint-disable-next-line react/no-danger */}
      <script dangerouslySetInnerHTML={{ __html: "(adsbygoogle = window.adsbygoogle || []).push({});" }} />
    </div>
  );
}
