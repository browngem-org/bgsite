"use client";

import { useLang } from "@/i18n/LanguageProvider";

export function TotalPapers({ count }: { count: number }) {
  const { lang } = useLang();
  return (
    <div className="rounded-chunk bg-orange text-white p-6">
      <p className="text-[11px] uppercase tracking-wider text-white/85">
        {lang === "en" ? "Total papers" : "総論文数"}
      </p>
      <p className="mt-2 font-display text-4xl font-semibold tabular-nums">
        {count.toLocaleString()}
      </p>
      <p className="mt-1 text-[11.5px] text-white/80">
        {lang === "en" ? "Live count from this page" : "このページに掲載されている件数"}
      </p>
    </div>
  );
}
