"use client";

import { useLang } from "@/i18n/LanguageProvider";

export function PublicationsCount({ count }: { count: number }) {
  const { lang } = useLang();
  if (lang === "en") {
    return (
      <span className="font-mono text-[11px] tracking-wider text-barkMute">
        {count} {count === 1 ? "paper" : "papers"}
      </span>
    );
  }
  return (
    <span className="font-mono text-[11px] tracking-wider text-barkMute">{count} 編</span>
  );
}
