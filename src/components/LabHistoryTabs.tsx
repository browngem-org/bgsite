"use client";

import Image from "next/image";
import { useState } from "react";
import { historyEntries } from "@/data/lab";

export function LabHistoryTabs() {
  const [active, setActive] = useState(historyEntries[0].id);
  const current = historyEntries.find((h) => h.id === active) ?? historyEntries[0];

  return (
    <div>
      <div className="-mx-2 flex gap-1 overflow-x-auto border-b border-hairline pb-3">
        {historyEntries.map((h) => {
          const isActive = h.id === active;
          return (
            <button
              key={h.id}
              onClick={() => setActive(h.id)}
              className={`whitespace-nowrap px-3 py-2 font-serif text-[14px] leading-none transition-colors ${
                isActive ? "text-ink" : "text-mute hover:text-graphite"
              }`}
            >
              <span className={isActive ? "italic" : ""}>{h.title}</span>
            </button>
          );
        })}
      </div>

      <div key={current.id} className="mt-8 animate-fadeIn">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-mute">{current.date}</p>
        <p className="mt-2 max-w-2xl font-serif text-[16px] italic leading-relaxed text-graphite">
          {current.description}
        </p>

        <div className="mt-6 -mx-6 flex gap-3 overflow-x-auto px-6 pb-3">
          {current.photos.map((src, i) => (
            <div
              key={src + i}
              className="relative h-[260px] w-[380px] flex-shrink-0 overflow-hidden bg-cream photo-mono"
            >
              <Image
                src={src}
                alt={`${current.title} ${i + 1}`}
                fill
                sizes="380px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
