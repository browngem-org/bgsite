"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Lang = "ja" | "en";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
};

const LangContext = createContext<Ctx>({
  lang: "ja",
  setLang: () => {}
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ja");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const saved = (typeof window !== "undefined"
      ? window.localStorage.getItem("bg-lang")
      : null) as Lang | null;
    if (saved === "en" || saved === "ja") setLangState(saved);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang, hydrated]);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("bg-lang", l);
    }
  };

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
