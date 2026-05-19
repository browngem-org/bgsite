"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/nav";
import { StableLabel } from "./StableLabel";

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="border-y border-line/70 bg-sand/40">
      <div className="container-edge">
        <ul className="grid grid-cols-4 divide-x divide-line/70 sm:grid-cols-8">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href);
            return (
              <li key={item.href} className="flex justify-center py-1.5">
                <Link
                  href={item.href}
                  className={`inline-flex items-center justify-center whitespace-nowrap rounded-pill px-4 py-2 text-[12.5px] font-medium tracking-wider transition-colors md:text-[13px] ${
                    isActive
                      ? "bg-bark text-sand"
                      : "text-bark hover:bg-sandDeep/60"
                  }`}
                >
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
