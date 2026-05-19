"use client";

import { equipment } from "@/data/lab";
import { useLang } from "@/i18n/LanguageProvider";

export function EquipmentList() {
  const { lang } = useLang();
  const apparatusLabel = lang === "en" ? "Apparatus" : "設備";

  return (
    <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {equipment.map((e) => (
        <li key={e.name} className="rounded-soft border border-sand/15 bg-sand/5 p-5">
          <p className="text-[11px] uppercase tracking-wider text-gold">{apparatusLabel}</p>
          <p className="mt-2 font-display text-lg font-medium">
            {lang === "en" ? e.nameEn : e.name}
          </p>
          <p className="mt-1 text-[13px] text-sand/85">
            {lang === "en" ? e.detailEn : e.detail}
          </p>
        </li>
      ))}
    </ul>
  );
}
