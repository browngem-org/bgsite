import Link from "next/link";
import { SiteNav } from "./SiteNav";
import { LanguageToggle } from "./LanguageToggle";
import { T } from "./T";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-sand/85 backdrop-blur supports-[backdrop-filter]:bg-sand/70">
      <div className="container-edge flex items-center justify-between py-4 md:py-5">
        <Link href="/" className="group flex items-center gap-3">
          <span
            aria-hidden
            className="grid h-10 w-10 place-items-center rounded-full bg-orange text-ivory shadow-soft transition-transform group-hover:rotate-12"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
              <path d="M12 2.5c-3 2.5-5.5 5.5-5.5 9.5 0 4 2.5 7 5.5 9.5 3-2.5 5.5-5.5 5.5-9.5 0-4-2.5-7-5.5-9.5zm0 4c1.6 1.6 3 3.5 3 5.5 0 2.2-1.4 4.1-3 5.5-1.6-1.4-3-3.3-3-5.5 0-2 1.4-3.9 3-5.5z" />
            </svg>
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[16.5px] font-semibold tracking-[-0.01em] text-bark">
              Fukuda Laboratory
            </span>
            <span className="mt-0.5 text-[11px] tracking-wider text-barkMute">
              <T
                ja="福田真嗣研究室 — Designing the Gut"
                en="Designing the gut microbiome"
              />
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <LanguageToggle className="hidden sm:inline-flex" />
          <Link href="/contact" className="btn-ghost hidden lg:inline-flex">
            <T ja="お問い合わせ" en="Contact" />
          </Link>
          <Link href="/members" className="btn-primary hidden lg:inline-flex">
            <T ja="ラボに参加" en="Join the lab" />
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>

      <div className="container-edge sm:hidden pb-3">
        <LanguageToggle />
      </div>

      <SiteNav />
    </header>
  );
}
