"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "../ui/Icon";
import { SECTIONS, isItemActive } from "../../_lib/nav";

// v4 rail — every destination in the panel as a single icon column, with a
// hairline separator between nav groups and a hover tooltip naming each
// target (the rail is icon-only, so nothing may rely on a visible label).
// The wide sidebar it replaces is now the context panel next to it.
export default function RailNav({ onNavigate }) {
  const pathname = usePathname();

  return (
    <div className="ad-rail-scroll">
      {SECTIONS.map((section, si) => (
        <div key={section.label || `s${si}`} className="u-col" style={{ alignItems: "center", width: "100%" }}>
          {si > 0 && <span className="ad-rail-sep" aria-hidden="true" />}
          {section.items.map((item) => {
            const active = isItemActive(item, pathname);
            return (
              <Link
                key={item.key}
                href={item.href}
                className={"ad-rail-item" + (active ? " active" : "")}
                onClick={onNavigate}
                aria-current={active ? "page" : undefined}
                aria-label={item.label}
              >
                <Icon name={item.icon} size={19} />
                <span className="ad-rail-tip">{item.label}</span>
              </Link>
            );
          })}
        </div>
      ))}
    </div>
  );
}
