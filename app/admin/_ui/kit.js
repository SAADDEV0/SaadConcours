"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Icon from "./Icon";
import { num, pctDelta } from "../_lib/format";
import { useOnClickOutside } from "../_lib/hooks";

/* ------------------------------ En-têtes ------------------------------ */

export function Hero({ icon = "🎓", eyebrow, title, children, actions, stats }) {
  return (
    <section className="ax-hero" style={{ "--hero-icon": `"${icon}"` }}>
      <div className="ax-hero-row">
        <div style={{ minWidth: 0 }}>
          {eyebrow && <div className="ax-eyebrow">{eyebrow}</div>}
          <h1>{title}</h1>
          {children && <p>{children}</p>}
        </div>
        {actions && <div className="ax-hero-actions">{actions}</div>}
      </div>
      {stats && stats.length > 0 && (
        <div className="ax-hero-stats">
          {stats.map((s) => (
            <span className="ax-hero-stat" key={s.label}>
              <strong>{s.value}</strong> {s.label}
            </span>
          ))}
        </div>
      )}
    </section>
  );
}

export function SectionTitle({ children, aside }) {
  return (
    <h2 className="ax-title">
      {children}
      {aside && <span className="ax-title-aside">{aside}</span>}
    </h2>
  );
}

/* ------------------------------ Onglets synchronisés avec l'URL ------------------------------ */

export function useTab(tabs, param = "onglet") {
  const sp = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const current = tabs.find((t) => t.key === sp.get(param))?.key || tabs[0].key;
  function set(key) {
    const next = new URLSearchParams(sp.toString());
    if (key === tabs[0].key) next.delete(param);
    else next.set(param, key);
    const qs = next.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }
  return [current, set];
}

export function Tabs({ tabs, value, onChange }) {
  return (
    <div className="ax-tabs" role="tablist">
      {tabs.map((t) => (
        <button
          key={t.key}
          type="button"
          role="tab"
          aria-selected={value === t.key}
          className={`ax-tab${value === t.key ? " active" : ""}`}
          onClick={() => onChange(t.key)}
        >
          {t.icon && <Icon name={t.icon} size="sm" />}
          {t.label}
          {t.count !== undefined && t.count !== null && <span className={`ax-pill ${t.tone || ""}`}>{t.count}</span>}
        </button>
      ))}
    </div>
  );
}

export function Seg({ options, value, onChange, ariaLabel }) {
  return (
    <div className="ax-seg" role="radiogroup" aria-label={ariaLabel}>
      {options.map((o) => (
        <button key={o.value} type="button" role="radio" aria-checked={value === o.value} className={value === o.value ? "on" : ""} onClick={() => onChange(o.value)} title={o.title}>
          {o.label}
        </button>
      ))}
    </div>
  );
}

/* ------------------------------ États ------------------------------ */

export function Empty({ icon = "🗂️", title, children, action }) {
  return (
    <div className="ax-empty">
      <div className="ax-empty-icon">{icon}</div>
      <h3>{title}</h3>
      {children && <p>{children}</p>}
      {action}
    </div>
  );
}

export function Skeleton({ rows = 5, height = 44 }) {
  return (
    <div className="ax-stack" style={{ gap: 8 }} aria-busy="true">
      {Array.from({ length: rows }, (_, i) => (
        <div key={i} className="ax-skel" style={{ height }} />
      ))}
    </div>
  );
}

export function Alert({ tone = "info", title, children, action }) {
  const icon = { info: "info", warn: "alert", error: "alert", ok: "checkCircle" }[tone];
  return (
    <div className={`ax-alert ${tone}`} role={tone === "error" ? "alert" : undefined}>
      <Icon name={icon} />
      <div className="ax-alert-body">
        {title && <strong>{title}</strong>}
        {children}
      </div>
      {action}
    </div>
  );
}

export function ErrorState({ error, onRetry }) {
  return (
    <Alert tone="error" title="Chargement impossible" action={onRetry && <button type="button" className="ax-btn sm" onClick={onRetry}><Icon name="refresh" size="sm" /> Réessayer</button>}>
      {String(error)}
    </Alert>
  );
}

/* ------------------------------ Indicateurs ------------------------------ */

export function Delta({ curr, prev, value }) {
  const d = value ?? pctDelta(curr, prev);
  if (!Number.isFinite(d) || d === 0) return <span className="ax-delta">= 0 %</span>;
  return (
    <span className={`ax-delta ${d > 0 ? "up" : "down"}`}>
      {d > 0 ? "▲" : "▼"} {Math.abs(d).toString().replace(".", ",")} %
    </span>
  );
}

export function Stat({ icon, label, value, foot, href, spark, color }) {
  const inner = (
    <>
      <div className="ax-stat-label">
        {icon && <Icon name={icon} size="sm" />}
        {label}
      </div>
      <div className="ax-stat-value">{value}</div>
      {foot && <div className="ax-stat-foot">{foot}</div>}
      {spark && spark.length > 1 && <Sparkline values={spark} className="ax-stat-spark" color={color} />}
    </>
  );
  return href ? (
    <Link href={href} className="ax-stat">
      {inner}
    </Link>
  ) : (
    <div className="ax-stat">{inner}</div>
  );
}

export function Sparkline({ values, className, color = "var(--ax-accent)" }) {
  const w = 96;
  const h = 34;
  const max = Math.max(1, ...values);
  const pts = values.map((v, i) => [(i / (values.length - 1)) * w, h - 3 - (v / max) * (h - 6)]);
  const d = pts.map((p, i) => `${i ? "L" : "M"}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join("");
  return (
    <svg className={className} viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" aria-hidden="true">
      <path d={`${d}L${w},${h}L0,${h}Z`} fill={color} opacity="0.12" />
      <path d={d} fill="none" stroke={color} strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

export function ScoreRing({ score }) {
  const r = 9;
  const c = 2 * Math.PI * r;
  const color = score >= 85 ? "var(--green)" : score >= 60 ? "var(--amber)" : "var(--red)";
  return (
    <span className="ax-score" title={`Complétude : ${score} %`}>
      <svg className="ax-score-ring" viewBox="0 0 22 22" aria-hidden="true">
        <circle cx="11" cy="11" r={r} fill="none" stroke="var(--border)" strokeWidth="3" />
        <circle cx="11" cy="11" r={r} fill="none" stroke={color} strokeWidth="3" strokeDasharray={`${(score / 100) * c} ${c}`} strokeLinecap="round" transform="rotate(-90 11 11)" />
      </svg>
      {score}%
    </span>
  );
}

export function BarList({ items, max, empty = "Aucune donnée pour l'instant.", limit = 10 }) {
  const shown = items.slice(0, limit);
  const top = max ?? Math.max(1, ...shown.map((i) => i.value));
  if (!shown.length) return <p className="ax-muted" style={{ fontSize: "0.86rem", margin: 0 }}>{empty}</p>;
  return (
    <div className="ax-bars">
      {shown.map((i) => (
        <div className="ax-bar-row" key={i.key || i.label}>
          {i.href ? (
            <Link className="ax-bar-label" href={i.href} title={i.label}>
              {i.label}
            </Link>
          ) : (
            <span className="ax-bar-label" title={i.label}>
              {i.label}
            </span>
          )}
          <span className="ax-num">{num(i.value)}</span>
          <div className="ax-bar-track">
            <div className="ax-bar-fill" style={{ width: `${Math.max(2, (i.value / top) * 100)}%`, background: i.color }} />
          </div>
        </div>
      ))}
    </div>
  );
}

// Courbes (une ou deux séries) avec info-bulle au survol.
export function LineChart({ series, height = 220 }) {
  const ref = useRef(null);
  const [hover, setHover] = useState(null);
  const W = 640;
  const H = height;
  const pad = { l: 36, r: 10, t: 12, b: 26 };
  const points = series[0]?.points || [];
  const n = points.length;
  const max = useMemo(() => {
    // Minimum 4 : une période à zéro affiche un axe lisible (0 · 1 · 2 · 3 · 4)
    // au lieu de graduations répétées.
    const m = Math.max(4, ...series.flatMap((s) => s.points.map((p) => p.value)));
    const pow = 10 ** Math.floor(Math.log10(m));
    return Math.ceil(m / pow) * pow;
  }, [series]);
  const x = (i) => pad.l + (n <= 1 ? 0 : (i / (n - 1)) * (W - pad.l - pad.r));
  const y = (v) => pad.t + (1 - v / max) * (H - pad.t - pad.b);
  const ticks = [...new Set([0, 0.25, 0.5, 0.75, 1].map((t) => Math.round(max * t)))];
  const labelEvery = Math.max(1, Math.ceil(n / 8));

  function onMove(e) {
    const rect = ref.current.getBoundingClientRect();
    const px = ((e.clientX - rect.left) / rect.width) * W;
    const i = Math.round(((px - pad.l) / (W - pad.l - pad.r)) * (n - 1));
    if (i >= 0 && i < n) setHover({ i, left: (x(i) / W) * rect.width });
    else setHover(null);
  }

  if (!n) return <p className="ax-muted">Aucune donnée sur la période.</p>;
  return (
    <div className="ax-chart-box">
      <div className="ax-chart-legend">
        {series.map((s) => (
          <span key={s.name}>
            <i style={{ background: s.color }} />
            {s.name}
          </span>
        ))}
      </div>
      <svg ref={ref} className="ax-chart" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" onMouseMove={onMove} onMouseLeave={() => setHover(null)} role="img" aria-label={series.map((s) => s.name).join(", ")}>
        {ticks.map((t) => (
          <g key={t}>
            <line className="grid" x1={pad.l} x2={W - pad.r} y1={y(t)} y2={y(t)} />
            <text className="axis" x={pad.l - 6} y={y(t) + 3} textAnchor="end">
              {t >= 1000 ? `${Math.round(t / 100) / 10}k` : t}
            </text>
          </g>
        ))}
        {points.map((p, i) =>
          i % labelEvery === 0 || i === n - 1 ? (
            <text key={p.key} className="axis" x={x(i)} y={H - 8} textAnchor="middle">
              {p.label}
            </text>
          ) : null
        )}
        {series.map((s) => {
          const d = s.points.map((p, i) => `${i ? "L" : "M"}${x(i).toFixed(1)},${y(p.value).toFixed(1)}`).join("");
          return (
            <g key={s.name}>
              {s.area && <path className="area" d={`${d}L${x(n - 1)},${y(0)}L${x(0)},${y(0)}Z`} fill={s.color} />}
              <path className="line" d={d} stroke={s.color} vectorEffect="non-scaling-stroke" />
            </g>
          );
        })}
        {hover && <line className="hover-line" x1={x(hover.i)} x2={x(hover.i)} y1={pad.t} y2={H - pad.b} vectorEffect="non-scaling-stroke" />}
      </svg>
      {hover && (
        <div className="ax-chart-tip" style={{ left: Math.min(hover.left + 10, (ref.current?.getBoundingClientRect().width || 600) - 160), top: 30 }}>
          <strong>{points[hover.i].full || points[hover.i].label}</strong>
          {series.map((s) => (
            <div key={s.name}>
              <span style={{ color: s.color }}>●</span> {s.name} : <strong>{num(s.points[hover.i]?.value)}</strong>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ------------------------------ Menu d'actions ------------------------------ */

export function Menu({ label = "Plus d'actions", icon = "more", items, align }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setOpen(false), open);
  return (
    <div className="ax-menu" ref={ref}>
      <button type="button" className="ax-btn icon sm" aria-label={label} title={label} onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        <Icon name={icon} />
      </button>
      {open && (
        <div className={`ax-menu-pop${align === "left" ? " left" : ""}`}>
          {items.filter(Boolean).map((it, i) =>
            it === "-" ? (
              <div className="ax-menu-sep" key={i} />
            ) : it.href ? (
              <a key={i} className={`ax-menu-item${it.danger ? " danger" : ""}`} href={it.href} target={it.external ? "_blank" : undefined} rel="noopener noreferrer" onClick={() => setOpen(false)}>
                {it.icon && <Icon name={it.icon} size="sm" />} {it.label}
              </a>
            ) : (
              <button key={i} type="button" className={`ax-menu-item${it.danger ? " danger" : ""}`} onClick={() => (setOpen(false), it.onClick())} disabled={it.disabled}>
                {it.icon && <Icon name={it.icon} size="sm" />} {it.label}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
}

/* ------------------------------ Champs ------------------------------ */

export function Field({ label, required, hint, error, aside, children, full, htmlFor }) {
  return (
    <div className="ax-field" style={full ? { gridColumn: "1 / -1" } : undefined}>
      {label && (
        <label className="ax-label" htmlFor={htmlFor}>
          {label}
          {required && <span className="req">*</span>}
          {aside && <span className="ax-label-aside">{aside}</span>}
        </label>
      )}
      {children}
      {error ? <span className="ax-hint error">{error}</span> : hint ? <span className="ax-hint">{hint}</span> : null}
    </div>
  );
}

export function Switch({ checked, onChange, label, disabled }) {
  return (
    <label className="ax-switch">
      <input type="checkbox" checked={Boolean(checked)} onChange={(e) => onChange(e.target.checked)} disabled={disabled} />
      <span className="ax-switch-track" />
      {label}
    </label>
  );
}

export function Counter({ value, range }) {
  const len = String(value || "").length;
  const [min, max] = range;
  const tone = len === 0 ? "" : len < min || len > max ? "amber" : "green";
  return <span className={`ax-pill ${tone}`}>{len} / {min}–{max}</span>;
}

export function TagsInput({ value = [], onChange, placeholder, suggestions = [] }) {
  const [draft, setDraft] = useState("");
  const listId = useMemo(() => `tags-${Math.random().toString(36).slice(2, 8)}`, []);
  function add(v) {
    const t = v.trim();
    if (!t || value.includes(t)) return;
    onChange([...value, t]);
    setDraft("");
  }
  return (
    <div className="ax-chipbox">
      {value.map((t) => (
        <span className="ax-chip" key={t}>
          {t}
          <button type="button" onClick={() => onChange(value.filter((x) => x !== t))} aria-label={`Retirer ${t}`}>
            ×
          </button>
        </span>
      ))}
      <input
        className="ax-chip-input"
        value={draft}
        list={suggestions.length ? listId : undefined}
        placeholder={value.length ? "" : placeholder}
        onChange={(e) => setDraft(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === ",") {
            e.preventDefault();
            add(draft);
          } else if (e.key === "Backspace" && !draft && value.length) onChange(value.slice(0, -1));
        }}
        onBlur={() => draft && add(draft)}
      />
      {suggestions.length > 0 && (
        <datalist id={listId}>
          {suggestions.map((s) => (
            <option key={s} value={s} />
          ))}
        </datalist>
      )}
    </div>
  );
}

export function CopyButton({ text, label = "Copier", size = "sm" }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      className={`ax-btn ${size}`}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setDone(true);
          setTimeout(() => setDone(false), 1600);
        } catch {
          // presse-papiers refusé : rien à faire de plus
        }
      }}
    >
      <Icon name={done ? "check" : "copy"} size="sm" /> {done ? "Copié" : label}
    </button>
  );
}
