"use client";

import { useLang } from "@/i18n/LanguageProvider";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();

  return (
    <div
      className={`inline-flex items-center rounded-pill border border-line bg-ivory/70 p-1 text-[11.5px] font-medium tracking-wider ${className}`}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLang("ja")}
        aria-pressed={lang === "ja"}
        className={`rounded-pill px-3 py-1 transition-colors ${
          lang === "ja" ? "bg-bark text-sand" : "text-bark/70 hover:text-bark"
        }`}
      >
        JA
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`rounded-pill px-3 py-1 transition-colors ${
          lang === "en" ? "bg-bark text-sand" : "text-bark/70 hover:text-bark"
        }`}
      >
        EN
      </button>
    </div>
  );
}
