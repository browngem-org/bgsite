"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/nav";
import { StableLabel } from "./StableLabel";

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="border-y border-line/70 bg-sand/40">
      <div className="container-edge overflow-x-auto">
        <ul className="flex min-w-max items-center gap-1 py-1">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative inline-flex items-center gap-1.5 rounded-pill px-4 py-2 text-[13px] font-medium tracking-wider transition-colors ${
                    isActive
                      ? "bg-bark text-sand"
                      : "text-bark hover:bg-sandDeep/60"
                  }`}
                >
                  <span className="text-[10px] tracking-wider opacity-60">
                    {item.index}
                  </span>
                  <StableLabel ja={item.label} en={item.labelEn} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
