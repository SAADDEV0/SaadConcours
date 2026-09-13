"use client";

import { Suspense } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SECTIONS, isItemActive, isChildActive, findActiveTrail } from "../../_lib/nav";

// Academic year runs Sept→Aug. Derived, never stored, so the badge is right
// without a settings field to keep in sync (same rule as the dashboard).
function academicYear() {
  const now = new Date();
  const y = now.getFullYear();
  return now.getMonth() >= 8 ? `${y}/${y + 1}` : `${y - 1}/${y}`;
}

function ContextPanelInner({ onNavigate }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const { section: activeSection, item: activeItem } = findActiveTrail(pathname, searchParams);

  // Show the active group only — that is the whole point of the panel. Fall
  // back to the first group so the panel is never blank on an unknown route.
  const section = activeSection || SECTIONS[0];
  const heading = activeItem?.label || "Administration";

  return (
    <>
      <div className="ad-context-head">
        <div className="ad-kicker">{section.label || "Pilotage"}</div>
        <h2 className="ad-context-title">{heading}</h2>
        <div className="ad-context-sub">
          {activeItem?.children ? `${activeItem.children.length} vues` : "Vue unique"}
        </div>
      </div>

      {/* Active group first and fully expanded (children inline), then every
          other group as a compact one-line list. The panel therefore always
          answers "what else is in here with me" before "what else exists". */}
      {[section, ...SECTIONS.filter((s) => s !== section)].map((s, si) => (
        <div key={s.label || `s${si}`} className={"ad-context-group" + (s === section ? "" : " muted")}>
          {s.label && <div className="ad-kicker ad-context-group-label">{s.label}</div>}
          {s.items.map((item) => {
            const active = isItemActive(item, pathname);
            return (
              <div key={item.key}>
                <Link
                  href={item.href}
                  className={"ad-context-link" + (active ? " active" : "")}
                  onClick={onNavigate}
                  aria-current={active ? "page" : undefined}
                >
                  <span className="ad-context-link-icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span className="u-truncate">{item.label}</span>
                </Link>

                {active && item.children && (
                  <div className="ad-context-children">
                    {item.children.map((child) => {
                      const childActive = isChildActive(child, pathname, searchParams);
                      const cls = "ad-context-child" + (childActive ? " active" : "");
                      // Query-only children (?vue=pipeline) can't be plain
                      // <Link>s without a full remount, so they push instead.
                      return child.query ? (
                        <button
                          key={child.key}
                          type="button"
                          className={cls}
                          onClick={() => {
                            router.push(child.href);
                            onNavigate?.();
                          }}
                        >
                          {child.label}
                        </button>
                      ) : (
                        <Link key={child.key} href={child.href} className={cls} onClick={onNavigate}>
                          {child.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ))}

      <div className="ad-context-foot">
        <div className="ad-session">
          <span className="ad-session-dot" aria-hidden="true" />
          <span className="ad-session-text">
            <b>Session {academicYear()}</b>
            <span>Année en cours</span>
          </span>
        </div>
        <a className="ad-context-profile" href="/">
          <span className="admin-avatar">A</span>
          <span className="admin-profile-text">
            <strong>Admin</strong>
            <span>Voir le site ↗</span>
          </span>
        </a>
      </div>
    </>
  );
}

export default function ContextPanel({ onNavigate }) {
  return (
    <Suspense fallback={<div className="ad-context-head" />}>
      <ContextPanelInner onNavigate={onNavigate} />
    </Suspense>
  );
}
