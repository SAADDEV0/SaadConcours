"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import Icon from "./Icon";

/* ------------------------------ Notifications ------------------------------ */

const ToastCtx = createContext(null);

export function useToast() {
  return useContext(ToastCtx);
}

const TOAST_ICON = { success: "checkCircle", error: "alert", info: "info" };

function ToastViewport({ toasts, dismiss }) {
  return (
    <div className="ax-toasts" role="status" aria-live="polite">
      {toasts.map((t) => (
        <div key={t.id} className={`ax-toast ${t.tone}`}>
          <Icon name={TOAST_ICON[t.tone] || "info"} />
          <div className="ax-toast-body">
            <strong>{t.title}</strong>
            {t.detail && <span>{t.detail}</span>}
            {t.action && (
              <div style={{ marginTop: 6 }}>
                <button type="button" className="ax-btn xs" onClick={() => (t.action.onClick(), dismiss(t.id))}>
                  {t.action.label}
                </button>
              </div>
            )}
          </div>
          <button type="button" onClick={() => dismiss(t.id)} aria-label="Fermer">
            <Icon name="x" size="sm" />
          </button>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------ Dialogues ------------------------------ */

const DialogCtx = createContext(null);

export function useConfirm() {
  return useContext(DialogCtx).confirm;
}

export function usePrompt() {
  return useContext(DialogCtx).prompt;
}

export function Dialog({ title, children, onClose, footer, size }) {
  const ref = useRef(null);
  useEffect(() => {
    const prev = document.activeElement;
    const el = ref.current?.querySelector("[autofocus], input, textarea, select, button.primary, button");
    el?.focus();
    function onKey(e) {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose?.();
      }
    }
    window.addEventListener("keydown", onKey, true);
    return () => {
      window.removeEventListener("keydown", onKey, true);
      prev?.focus?.();
    };
  }, [onClose]);
  return (
    <div className="ax-overlay" onMouseDown={(e) => e.target === e.currentTarget && onClose?.()}>
      <div className={`ax-dialog ${size || ""}`} role="dialog" aria-modal="true" aria-label={title} ref={ref}>
        <div className="ax-dialog-head">
          <h2>{title}</h2>
          <button type="button" className="ax-btn ghost icon sm" onClick={onClose} aria-label="Fermer">
            <Icon name="x" />
          </button>
        </div>
        <div className="ax-dialog-body">{children}</div>
        {footer && <div className="ax-dialog-foot">{footer}</div>}
      </div>
    </div>
  );
}

export function Drawer({ title, children, onClose, footer, width }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose?.();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  return (
    <>
      <div className="ax-overlay" style={{ padding: 0 }} onMouseDown={onClose} />
      <aside className="ax-drawer" role="dialog" aria-modal="true" aria-label={title} style={width ? { width: `min(${width}px, 100vw)` } : undefined}>
        <div className="ax-drawer-head">
          <h2>{title}</h2>
          <button type="button" className="ax-btn ghost icon sm" onClick={onClose} aria-label="Fermer">
            <Icon name="x" />
          </button>
        </div>
        <div className="ax-drawer-body">{children}</div>
        {footer && <div className="ax-drawer-foot">{footer}</div>}
      </aside>
    </>
  );
}

function ConfirmDialog({ opts, resolve }) {
  const [typed, setTyped] = useState("");
  const needsTyping = Boolean(opts.typeToConfirm);
  const ok = !needsTyping || typed.trim() === opts.typeToConfirm;
  return (
    <Dialog
      title={opts.title}
      onClose={() => resolve(false)}
      footer={
        <>
          <button type="button" className="ax-btn" onClick={() => resolve(false)}>
            {opts.cancelLabel || "Annuler"}
          </button>
          <button
            type="button"
            className={`ax-btn ${opts.tone === "danger" ? "danger solid" : "primary"}`}
            onClick={() => ok && resolve(true)}
            disabled={!ok}
          >
            {opts.confirmLabel || "Confirmer"}
          </button>
        </>
      }
    >
      {opts.body && <div>{opts.body}</div>}
      {needsTyping && (
        <div className="ax-field ax-mt ax-mb0">
          <label className="ax-label">
            Tape <strong style={{ color: "var(--text)" }}>{opts.typeToConfirm}</strong> pour confirmer
          </label>
          <input className="ax-input" value={typed} onChange={(e) => setTyped(e.target.value)} autoFocus />
        </div>
      )}
    </Dialog>
  );
}

function PromptDialog({ opts, resolve }) {
  const [value, setValue] = useState(opts.defaultValue || "");
  return (
    <Dialog
      title={opts.title}
      onClose={() => resolve(null)}
      footer={
        <>
          <button type="button" className="ax-btn" onClick={() => resolve(null)}>
            Annuler
          </button>
          <button type="button" className="ax-btn primary" onClick={() => resolve(value)} disabled={opts.required && !value.trim()}>
            {opts.confirmLabel || "Valider"}
          </button>
        </>
      }
    >
      {opts.body && <p style={{ marginTop: 0 }}>{opts.body}</p>}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!opts.required || value.trim()) resolve(value);
        }}
      >
        {opts.multiline ? (
          <textarea className="ax-textarea" value={value} onChange={(e) => setValue(e.target.value)} placeholder={opts.placeholder} autoFocus rows={6} />
        ) : (
          <input className="ax-input" value={value} onChange={(e) => setValue(e.target.value)} placeholder={opts.placeholder} autoFocus />
        )}
      </form>
    </Dialog>
  );
}

export function FeedbackProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const [dialog, setDialog] = useState(null);
  const seq = useRef(0);

  const dismiss = useCallback((id) => setToasts((t) => t.filter((x) => x.id !== id)), []);
  const push = useCallback(
    (tone, title, detail, opts = {}) => {
      const id = ++seq.current;
      setToasts((t) => [...t.slice(-3), { id, tone, title, detail, action: opts.action }]);
      setTimeout(() => dismiss(id), opts.duration || (tone === "error" ? 9000 : 5000));
      return id;
    },
    [dismiss]
  );
  const toast = useMemo(
    () => ({
      success: (title, detail, opts) => push("success", title, detail, opts),
      error: (title, detail, opts) => push("error", title, detail, opts),
      info: (title, detail, opts) => push("info", title, detail, opts),
    }),
    [push]
  );

  const dialogs = useMemo(
    () => ({
      confirm: (opts) => new Promise((resolve) => setDialog({ kind: "confirm", opts, resolve })),
      prompt: (opts) => new Promise((resolve) => setDialog({ kind: "prompt", opts, resolve })),
    }),
    []
  );

  const close = (value) => {
    dialog?.resolve(value);
    setDialog(null);
  };

  return (
    <ToastCtx.Provider value={toast}>
      <DialogCtx.Provider value={dialogs}>
        {children}
        {dialog?.kind === "confirm" && <ConfirmDialog opts={dialog.opts} resolve={close} />}
        {dialog?.kind === "prompt" && <PromptDialog opts={dialog.opts} resolve={close} />}
        <ToastViewport toasts={toasts} dismiss={dismiss} />
      </DialogCtx.Provider>
    </ToastCtx.Provider>
  );
}
