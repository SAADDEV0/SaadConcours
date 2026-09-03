"use client";

import { createContext, useCallback, useContext, useRef, useState } from "react";
import Modal from "./Modal";

const ConfirmContext = createContext(null);

// Promise-based confirm() replacement for the native confirm() calls in
// ResourcePanel and QuestionsEditor — `await confirm({...})` resolves true
// on confirm, false on cancel/dismiss, so existing call sites only change
// by adding `await`.
export function ConfirmProvider({ children }) {
  const [request, setRequest] = useState(null);
  const resolver = useRef(null);

  const confirm = useCallback((opts) => {
    return new Promise((resolve) => {
      resolver.current = resolve;
      setRequest({
        title: opts?.title || "Confirmer",
        body: opts?.body || "",
        confirmLabel: opts?.confirmLabel || "Confirmer",
        cancelLabel: opts?.cancelLabel || "Annuler",
        tone: opts?.tone || "default",
      });
    });
  }, []);

  function settle(value) {
    resolver.current?.(value);
    resolver.current = null;
    setRequest(null);
  }

  return (
    <ConfirmContext.Provider value={confirm}>
      {children}
      <Modal open={Boolean(request)} onClose={() => settle(false)} labelledBy="admin-confirm-title">
        {request && (
          <>
            <h2 className="admin-modal-title" id="admin-confirm-title">
              {request.title}
            </h2>
            {request.body && <div className="admin-modal-body">{request.body}</div>}
            <div className="admin-modal-actions">
              <button type="button" className="admin-btn secondary" onClick={() => settle(false)}>
                {request.cancelLabel}
              </button>
              <button
                type="button"
                className={"admin-btn" + (request.tone === "danger" ? " danger" : "")}
                onClick={() => settle(true)}
                autoFocus
              >
                {request.confirmLabel}
              </button>
            </div>
          </>
        )}
      </Modal>
    </ConfirmContext.Provider>
  );
}

export function useConfirm() {
  const ctx = useContext(ConfirmContext);
  if (!ctx) throw new Error("useConfirm must be used within ConfirmProvider");
  return ctx;
}
