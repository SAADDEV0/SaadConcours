"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const ToastContext = createContext(null);
let idSeq = 0;

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const timers = useRef(new Map());
  // The portal target only exists client-side; rendering it unconditionally
  // (even behind a `typeof document` check) still diverges from the SSR
  // pass, since that check is always true once mounted. Delay it to an
  // effect so the client's first render matches the server's exactly.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const dismiss = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
    const timer = timers.current.get(id);
    if (timer) {
      clearTimeout(timer);
      timers.current.delete(id);
    }
  }, []);

  const push = useCallback(
    (type, message, opts) => {
      const id = ++idSeq;
      const duration = opts?.duration ?? (opts?.action ? 6000 : 4000);
      setToasts((prev) => [...prev, { id, type, message, action: opts?.action }]);
      const timer = setTimeout(() => dismiss(id), duration);
      timers.current.set(id, timer);
      return id;
    },
    [dismiss]
  );

  const api = useRef({
    success: (msg, opts) => push("success", msg, opts),
    error: (msg, opts) => push("error", msg, opts),
    info: (msg, opts) => push("info", msg, opts),
  }).current;

  return (
    <ToastContext.Provider value={api}>
      {children}
      {mounted &&
        createPortal(
          <div className="toast-viewport" role="region" aria-label="Notifications">
            {toasts.map((t) => (
              <div className={"toast-item " + t.type} key={t.id} role="status" aria-live="polite">
                <span className="toast-message">{t.message}</span>
                {t.action && (
                  <button
                    type="button"
                    className="toast-action"
                    onClick={() => {
                      t.action.onClick();
                      dismiss(t.id);
                    }}
                  >
                    {t.action.label}
                  </button>
                )}
                <button type="button" className="toast-close" aria-label="Fermer" onClick={() => dismiss(t.id)}>
                  ✕
                </button>
              </div>
            ))}
          </div>,
          document.body
        )}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}
