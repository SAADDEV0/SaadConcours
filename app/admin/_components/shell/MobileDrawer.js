"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Behavior for the sidebar-as-drawer on small screens: closes on route
// change, on Escape, locks body scroll while open (restoring whatever was
// there before, not assuming ""), and moves focus into the drawer.
export function useMobileDrawer(open, setOpen) {
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    const prevTouchAction = document.body.style.touchAction;
    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";

    function onKeyDown(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
      document.body.style.touchAction = prevTouchAction;
    };
  }, [open, setOpen]);
}

export function Scrim({ open, onClose }) {
  return <div className={"admin-scrim" + (open ? " open" : "")} onClick={onClose} aria-hidden="true" />;
}
