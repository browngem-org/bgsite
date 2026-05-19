"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/nav";

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="container-edge">
      <ul className="flex flex-wrap items-center gap-x-7 gap-y-3 py-4 text-[12px] uppercase tracking-[0.18em] text-graphite/90">
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname?.startsWith(item.href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`group inline-flex items-baseline gap-1.5 transition-colors ${
                  isActive ? "text-terracotta" : "hover:text-terracotta"
                }`}
              >
                <span className="text-[9px] tracking-widest text-mute group-hover:text-terracotta">
                  {item.index}
                </span>
                <span className="link-underline">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
