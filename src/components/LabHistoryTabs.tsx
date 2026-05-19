"use client";

import Image from "next/image";
import { useState } from "react";
import { historyEntries } from "@/data/lab";

export function LabHistoryTabs() {
  const [active, setActive] = useState(historyEntries[0].id);
  const current = historyEntries.find((h) => h.id === active) ?? historyEntries[0];

  return (
    <div>
      <div className="-mx-2 flex gap-2 overflow-x-auto pb-2">
        {historyEntries.map((h) => {
          const isActive = h.id === active;
          return (
            <button
              key={h.id}
              onClick={() => setActive(h.id)}
              className={`whitespace-nowrap rounded-pill px-4 py-2 text-[13px] font-medium transition-colors ${
                isActive
                  ? "bg-bark text-sand"
                  : "border border-line bg-ivory text-bark hover:border-orange hover:text-orange"
              }`}
            >
              {h.title}
            </button>
          );
        })}
      </div>

      <div key={current.id} className="mt-10 animate-fadeIn rounded-chunk bg-ivory p-7 shadow-ring md:p-10">
        <div className="flex items-baseline gap-3">
          <span className="chip-teal">{current.date}</span>
          <h3 className="font-display text-xl font-medium text-bark">{current.title}</h3>
        </div>
        <p className="mt-4 max-w-3xl text-[14.5px] leading-relaxed text-bark/90">
          {current.description}
        </p>

        <div className="mt-7 -mx-2 flex gap-4 overflow-x-auto px-2 pb-2">
          {current.photos.map((src, i) => (
            <div
              key={src + i}
              className="relative h-[260px] w-[380px] flex-shrink-0 overflow-hidden rounded-soft bg-sandDeep shadow-ring"
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
