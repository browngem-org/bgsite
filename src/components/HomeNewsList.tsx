"use client";

import Link from "next/link";
import { newsItems, categoryLabel } from "@/data/news";
import { useLang } from "@/i18n/LanguageProvider";

export function HomeNewsList() {
  const { lang } = useLang();
  const recent = newsItems.slice(0, 6);

  return (
    <div className="mt-10 overflow-hidden rounded-chunk border border-line bg-ivory shadow-ring">
      {/* tiny eyebrow row */}
      <div className="flex items-center justify-between border-b border-line bg-sand/40 px-6 py-3 text-[11px] uppercase tracking-wider text-barkMute">
        <span>
          {lang === "en"
            ? `Latest ${recent.length} of ${newsItems.length}`
            : `直近 ${recent.length} 件（全 ${newsItems.length} 件中）`}
        </span>
        <Link href="/news" className="text-orange hover:underline">
          {lang === "en" ? "Full archive →" : "全件を見る →"}
        </Link>
      </div>

      <ul className="divide-y divide-line">
        {recent.map((item, i) => (
          <li
            key={i}
            className="group grid grid-cols-12 items-baseline gap-4 px-6 py-5 transition-colors hover:bg-sand/30 md:gap-6"
          >
            <span className="col-span-5 font-mono text-[12px] tracking-wider text-barkMute md:col-span-2">
              {item.date}
            </span>
            <span className="col-span-7 md:col-span-2">
              <span className="chip-orange">{categoryLabel[item.category]}</span>
            </span>
            <p className="col-span-12 text-[14.5px] leading-relaxed text-bark md:col-span-8">
              {lang === "en" ? item.bodyEn : item.body}{" "}
              {item.href && (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="link-grow font-medium text-orange"
                >
                  {lang === "en"
                    ? item.hrefLabelEn ?? "Read more"
                    : item.hrefLabel ?? "詳細"}{" "}
                  ↗
                </a>
              )}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
