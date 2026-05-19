"use client";

import { useLang } from "@/i18n/LanguageProvider";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  const isEn = lang === "en";

  return (
    <div
      role="group"
      aria-label="Language"
      className={`relative inline-flex items-center rounded-pill border border-line bg-ivory/80 p-1 text-[12px] font-medium tracking-wider shadow-ring select-none ${className}`}
    >
      {/* sliding thumb */}
      <span
        aria-hidden
        className="pointer-events-none absolute top-1 bottom-1 left-1 w-10 rounded-pill bg-bark shadow-soft will-change-transform"
        style={{
          transform: isEn ? "translateX(2.5rem)" : "translateX(0)",
          transition:
            "transform 520ms cubic-bezier(0.34, 1.56, 0.64, 1), background-color 240ms ease"
        }}
      />

      <button
        type="button"
        onClick={() => setLang("ja")}
        aria-pressed={!isEn}
        className={`relative z-10 inline-flex h-7 w-10 items-center justify-center rounded-pill outline-none transition-colors duration-300 ${
          !isEn ? "text-sand" : "text-bark/55 hover:text-bark"
        }`}
      >
        JA
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={isEn}
        className={`relative z-10 inline-flex h-7 w-10 items-center justify-center rounded-pill outline-none transition-colors duration-300 ${
          isEn ? "text-sand" : "text-bark/55 hover:text-bark"
        }`}
      >
        EN
      </button>
    </div>
  );
}
