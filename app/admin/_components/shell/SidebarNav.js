"use client";

import { Suspense } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SECTIONS, isItemActive, isChildActive } from "../../_lib/nav";

function SidebarNavInner({ onNavigate }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  return (
    <div className="admin-nav-groups">
      {SECTIONS.map((section, si) => (
        <div key={section.label || `s${si}`} className="admin-nav-group">
          {section.label && <div className="admin-nav-section-label">{section.label}</div>}
          <nav className="admin-nav">
            {section.items.map((item) => {
              const active = isItemActive(item, pathname);
              return (
                <div key={item.key}>
                  <Link
                    href={item.href}
                    className={"admin-nav-btn" + (active ? " active" : "")}
                    onClick={onNavigate}
                  >
                    <span className="admin-nav-icon">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                  {active && item.children && (
                    <div className="admin-nav-children">
                      {item.children.map((child) =>
                        child.query ? (
                          <button
                            key={child.key}
                            type="button"
                            className={"admin-nav-child" + (isChildActive(child, pathname, searchParams) ? " active" : "")}
                            onClick={() => {
                              router.push(child.href);
                              onNavigate?.();
                            }}
                          >
                            {child.label}
                          </button>
                        ) : (
                          <Link
                            key={child.key}
                            href={child.href}
                            className={"admin-nav-child" + (isChildActive(child, pathname, searchParams) ? " active" : "")}
                            onClick={onNavigate}
                          >
                            {child.label}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      ))}
    </div>
  );
}

export default function SidebarNav({ onNavigate }) {
  return (
    <Suspense fallback={<div className="admin-nav-groups" />}>
      <SidebarNavInner onNavigate={onNavigate} />
    </Suspense>
  );
}
