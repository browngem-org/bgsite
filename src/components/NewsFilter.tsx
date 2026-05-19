"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { newsItems, categoryLabel, type NewsCategory, type NewsItem } from "@/data/news";
import { useLang } from "@/i18n/LanguageProvider";

type Filter = "all" | NewsCategory;

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "paper", label: "Paper" },
  { value: "award", label: "Award" },
  { value: "event", label: "Event" },
  { value: "media", label: "Media" },
  { value: "info", label: "Info" }
];

export function NewsFilter() {
  const [active, setActive] = useState<Filter>("all");
  const { lang } = useLang();

  const grouped = useMemo(() => {
    const filtered =
      active === "all" ? newsItems : newsItems.filter((n) => n.category === active);
    const byYear = new Map<string, NewsItem[]>();
    for (const item of filtered) {
      const year = item.date.slice(0, 4);
      if (!byYear.has(year)) byYear.set(year, []);
      byYear.get(year)!.push(item);
    }
    return [...byYear.entries()].sort((a, b) => Number(b[0]) - Number(a[0]));
  }, [active]);

  const empty = lang === "en" ? "No items match." : "該当する項目はありません。";
  const entriesWord = lang === "en" ? "entries" : "件";

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => {
          const isActive = active === f.value;
          return (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`rounded-pill px-4 py-2 text-[12px] font-medium tracking-wider transition-colors ${
                isActive
                  ? "bg-orange text-white"
                  : "border border-line bg-ivory text-bark hover:border-orange hover:text-orange"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <div className="mt-14 space-y-16">
        {grouped.length === 0 ? (
          <p className="text-bark/70">{empty}</p>
        ) : (
          grouped.map(([year, items]) => (
            <section key={year}>
              <div className="flex items-baseline gap-5">
                <h2 className="display-h text-5xl text-bark md:text-6xl">{year}</h2>
                <span className="h-px flex-1 bg-line" />
                <span className="font-mono text-[11px] tracking-wider text-barkMute">
                  {items.length} {entriesWord}
                </span>
              </div>

              <ul className="mt-8 grid gap-4 md:grid-cols-2">
                {items.map((item, i) => (
                  <li key={i} className="card-soft overflow-hidden">
                    {item.image ? (
                      <div className="relative aspect-[16/9] w-full bg-sandDeep">
                        <Image
                          src={item.image.src}
                          alt={item.image.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                    ) : null}
                    <div className="p-6">
                      <div className="flex items-center gap-3">
                        <span className="chip-orange">{categoryLabel[item.category]}</span>
                        <span className="font-mono text-[12px] text-barkMute">
                          {item.date}
                        </span>
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
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))
        )}
      </div>
    </div>
  );
}
