"use client";

import { Suspense } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { isChildActive } from "../../_lib/nav";

function SubNavInner({ items }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  return (
    <div className="admin-subnav">
      {items.map((child) =>
        child.query ? (
          <button
            key={child.key}
            type="button"
            className={"admin-subnav-item" + (isChildActive(child, pathname, searchParams) ? " active" : "")}
            onClick={() => router.push(child.href)}
          >
            {child.label}
          </button>
        ) : (
          <Link
            key={child.key}
            href={child.href}
            className={"admin-subnav-item" + (isChildActive(child, pathname, searchParams) ? " active" : "")}
          >
            {child.label}
          </Link>
        )
      )}
    </div>
  );
}

export default function SubNav({ items }) {
  return (
    <Suspense fallback={<div className="admin-subnav" />}>
      <SubNavInner items={items} />
    </Suspense>
  );
}
