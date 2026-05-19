"use client";

import Link from "next/link";
import { navItems } from "@/data/nav";
import { useLang } from "@/i18n/LanguageProvider";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const { lang } = useLang();

  return (
    <footer className="mt-32 bg-bark text-sand">
      <div className="container-edge grid gap-14 py-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <span
              aria-hidden
              className="grid h-12 w-12 place-items-center rounded-full bg-orange text-ivory shadow-soft"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path d="M12 2.5c-3 2.5-5.5 5.5-5.5 9.5 0 4 2.5 7 5.5 9.5 3-2.5 5.5-5.5 5.5-9.5 0-4-2.5-7-5.5-9.5zm0 4c1.6 1.6 3 3.5 3 5.5 0 2.2-1.4 4.1-3 5.5-1.6-1.4-3-3.3-3-5.5 0-2 1.4-3.9 3-5.5z" />
              </svg>
            </span>
            <p className="font-display text-2xl font-medium tracking-[-0.01em]">
              Fukuda Laboratory
            </p>
          </div>
          <p className="mt-5 max-w-md text-[14px] leading-relaxed text-sand/80">
            {lang === "en"
              ? "Fukuda Laboratory at the Institute for Advanced Biosciences, Keio University. We pursue the social implementation of gut-design science through integrated multi-omics research."
              : "慶應義塾大学先端生命科学研究所 福田真嗣研究室。腸内環境制御学・統合オミクス科学を軸に、腸内デザイン学の社会実装を目指しています。"}
          </p>
          <p className="mt-6 text-[12px] uppercase tracking-wider text-sand/60">
            {lang === "en"
              ? "246-2 Mizukami, Kakuganji, Tsuruoka, Yamagata 997-0052"
              : "〒997-0052 山形県鶴岡市覚岸寺字水上 246-2"}
          </p>

          <Link href="/contact" className="btn-primary mt-8">
            {lang === "en" ? "Get in touch" : "お問い合わせ"}
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow !text-gold">Sitemap</p>
          <ul className="mt-5 space-y-2.5 text-[14px]">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-grow text-sand/90">
                  {lang === "en" ? item.labelEn : item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="eyebrow !text-gold">Contact</p>
          <p className="mt-5 text-[14px] leading-relaxed text-sand/90">
            <span className="font-mono text-[14px]">fukuda-lab [at] iab.keio.ac.jp</span>
            <br />
            <span className="text-sand/60">
              {lang === "en" ? "Replace [at] with @." : "※ [at] を @ に変換してください"}
            </span>
          </p>
          <div className="mt-7 flex flex-col gap-2 text-[13px] text-sand/80">
            <a className="link-grow w-fit" href="https://www.keio.ac.jp/" target="_blank" rel="noreferrer">
              ↗ Keio University
            </a>
            <a className="link-grow w-fit" href="https://www.iab.keio.ac.jp/" target="_blank" rel="noreferrer">
              ↗ Institute for Advanced Biosciences
            </a>
            <a className="link-grow w-fit" href="https://metagen.co.jp/" target="_blank" rel="noreferrer">
              ↗ Metagen Inc.
            </a>
          </div>
        </div>
      </div>

      <div className="container-edge flex flex-col items-start justify-between gap-2 border-t border-sand/10 py-6 text-[11px] uppercase tracking-wider text-sand/55 md:flex-row">
        <span>© {year} Fukuda Laboratory, Keio University</span>
        <span>Designed in Tsuruoka · Built with Next.js</span>
      </div>
    </footer>
  );
}
