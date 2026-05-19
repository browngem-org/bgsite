"use client";

import { useLang } from "@/i18n/LanguageProvider";

export function T({ ja, en }: { ja: React.ReactNode; en: React.ReactNode }) {
  const { lang } = useLang();
  return <>{lang === "en" ? en : ja}</>;
}

/** Hook variant for when you need the resolved value */
export function useT() {
  const { lang } = useLang();
  return <T extends string | React.ReactNode>(ja: T, en: T): T => (lang === "en" ? en : ja);
}
