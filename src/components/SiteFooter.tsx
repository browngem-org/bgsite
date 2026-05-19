import Link from "next/link";
import { navItems } from "@/data/nav";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-32 border-t border-hairline bg-cream/40">
      <div className="container-edge grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="eyebrow">Colophon</p>
          <p className="mt-4 font-serif text-3xl leading-tight">
            Fukuda <span className="italic font-light">Laboratory</span>
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-graphite/80">
            慶應義塾大学先端生命科学研究所 福田真嗣研究室。腸内環境制御学・統合オミクス科学を軸に、
            腸内デザイン学の社会実装を目指しています。
          </p>
          <p className="mt-6 text-[12px] uppercase tracking-[0.2em] text-mute">
            〒997-0052 山形県鶴岡市覚岸寺字水上 246-2
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow">Sitemap</p>
          <ul className="mt-4 space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="eyebrow">Contact</p>
          <p className="mt-4 text-sm leading-relaxed">
            E-mail&nbsp;
            <span className="font-mono text-[13px]">fukuda-lab [at] iab.keio.ac.jp</span>
            <br />
            <span className="text-mute">※ [at] を @ に変換してください</span>
          </p>
          <div className="mt-6 flex flex-col gap-1 text-[12px] uppercase tracking-[0.2em] text-mute">
            <a className="link-underline" href="https://www.keio.ac.jp/" target="_blank" rel="noreferrer">
              Keio University ↗
            </a>
            <a className="link-underline" href="https://www.iab.keio.ac.jp/" target="_blank" rel="noreferrer">
              IAB ↗
            </a>
            <a className="link-underline" href="https://metagen.co.jp/" target="_blank" rel="noreferrer">
              Metagen Inc. ↗
            </a>
          </div>
        </div>
      </div>

      <div className="container-edge flex flex-col items-start justify-between gap-2 border-t border-hairline py-6 text-[11px] uppercase tracking-[0.2em] text-mute md:flex-row">
        <span>© {year} Fukuda Laboratory, Keio University</span>
        <span>Designed in Tsuruoka · Built with Next.js</span>
      </div>
    </footer>
  );
}
