"use client";

import { useMemo, useState } from "react";
import { newsItems, categoryLabel, type NewsCategory, type NewsItem } from "@/data/news";

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

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => {
          const isActive = active === f.value;
          return (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-4 py-2 text-[11px] uppercase tracking-[0.18em] transition-colors ${
                isActive
                  ? "bg-ink text-paper"
                  : "border border-hairline text-graphite hover:border-ink"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <div className="mt-14 space-y-20">
        {grouped.length === 0 ? (
          <p className="font-serif italic text-mute">該当する項目はありません。</p>
        ) : (
          grouped.map(([year, items]) => (
            <section key={year}>
              <div className="flex items-baseline gap-6">
                <h2 className="font-serif text-6xl font-light leading-none md:text-7xl">{year}</h2>
                <span className="h-px flex-1 bg-hairline" />
                <span className="font-mono text-[11px] tracking-widest text-mute">
                  {items.length} entries
                </span>
              </div>
              <ul className="mt-10 divide-y divide-hairline border-t border-hairline">
                {items.map((item, i) => (
                  <li key={i} className="grid grid-cols-12 gap-4 py-6 md:gap-8">
                    <div className="col-span-6 md:col-span-2">
                      <p className="font-mono text-[12px] tracking-wider text-mute">{item.date}</p>
                    </div>
                    <div className="col-span-6 md:col-span-2">
                      <p className="font-serif text-xs italic text-terracotta">
                        {categoryLabel[item.category]}
                      </p>
                    </div>
                    <p className="col-span-12 text-[15px] leading-relaxed text-graphite md:col-span-8">
                      {item.body}{" "}
                      {item.href && (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="link-underline text-ink"
                        >
                          {item.hrefLabel ?? "詳細"} ↗
                        </a>
                      )}
                    </p>
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
