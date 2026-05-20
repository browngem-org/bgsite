"use client";

import { useLang } from "@/i18n/LanguageProvider";

/**
 * 🐱 Render both JA and EN labels stacked in a single grid cell.
 * The cell width is max(JA, EN), so the button never resizes when
 * the user toggles language — neighbours stay put.
 */
export function StableLabel({ ja, en }: { ja: string; en: string }) {
  const { lang } = useLang();
  return (
    <span className="grid leading-none">
      <span
        aria-hidden={lang !== "ja"}
        className={`col-start-1 row-start-1 text-center transition-opacity duration-200 ${
          lang === "ja" ? "opacity-100" : "invisible opacity-0"
        }`}
      >
        {ja}
      </span>
      <span
        aria-hidden={lang !== "en"}
        className={`col-start-1 row-start-1 text-center transition-opacity duration-200 ${
          lang === "en" ? "opacity-100" : "invisible opacity-0"
        }`}
      >
        {en}
      </span>
    </span>
  );
}
