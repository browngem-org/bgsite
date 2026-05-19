import Link from "next/link";
import { SiteNav } from "./SiteNav";

export function SiteHeader() {
  return (
    <header className="relative">
      <div className="container-edge flex flex-col gap-6 pt-10 pb-6 md:flex-row md:items-end md:justify-between md:pt-12">
        <Link href="/" className="group inline-flex flex-col">
          <span className="eyebrow">Issue No. 01 — Est. 2025</span>
          <span className="mt-2 font-serif text-[34px] leading-none tracking-[-0.01em] md:text-[42px]">
            Fukuda <span className="italic font-light">Laboratory</span>
          </span>
          <span className="mt-1 font-serif text-[15px] text-graphite/80">
            福田真嗣研究室 — Designing the Gut
          </span>
        </Link>

        <div className="flex flex-col items-start gap-1 text-[12px] text-mute md:items-end md:text-right">
          <a
            href="https://www.keio.ac.jp/"
            target="_blank"
            rel="noreferrer"
            className="link-underline"
          >
            慶應義塾大学 / Keio University
          </a>
          <a
            href="https://www.iab.keio.ac.jp/"
            target="_blank"
            rel="noreferrer"
            className="link-underline"
          >
            先端生命科学研究所 / Institute for Advanced Biosciences
          </a>
        </div>
      </div>

      <div className="container-edge">
        <div className="rule" />
      </div>

      <SiteNav />

      <div className="container-edge">
        <div className="rule" />
      </div>
    </header>
  );
}
