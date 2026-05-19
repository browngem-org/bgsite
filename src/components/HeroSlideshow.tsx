"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useLang } from "@/i18n/LanguageProvider";

type Slide = {
  src: string;
  alt: string;
  caption: string;
  captionEn?: string;
};

export function HeroSlideshow({ slides }: { slides: Slide[] }) {
  const [active, setActive] = useState(0);
  const { lang } = useLang();

  useEffect(() => {
    const id = setInterval(() => {
      setActive((n) => (n + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [slides.length]);

  const current = slides[active];
  const caption = lang === "en" && current?.captionEn ? current.captionEn : current?.caption;

  return (
    <div className="relative">
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-chunk bg-sandDeep shadow-soft">
        {slides.map((slide, i) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="(max-width: 768px) 100vw, 1240px"
            className={`object-cover transition-opacity duration-[1.2s] ease-in-out ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-pill bg-ivory/90 px-3 py-1.5 text-[12px] font-medium tracking-wider text-bark backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-orange" />
          {caption}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-end gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Show slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === active ? "w-10 bg-orange" : "w-3 bg-line hover:bg-barkMute"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
