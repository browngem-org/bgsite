"use client";

import { newsItems, categoryLabel } from "@/data/news";
import { useLang } from "@/i18n/LanguageProvider";

export function HomeNewsList() {
  const { lang } = useLang();
  return (
    <ul className="mt-10 grid gap-4 md:grid-cols-2">
      {newsItems.slice(0, 6).map((item, i) => (
        <li key={i} className="card-soft p-6">
          <div className="flex items-center gap-3">
            <span className="chip-orange">{categoryLabel[item.category]}</span>
            <span className="font-mono text-[12px] text-barkMute">{item.date}</span>
          </div>
          <p className="mt-4 text-[14.5px] leading-relaxed text-bark">
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
  );
}
