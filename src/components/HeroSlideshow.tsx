"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = {
  src: string;
  alt: string;
  caption: string;
};

export function HeroSlideshow({ slides }: { slides: Slide[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((n) => (n + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <div className="relative">
      <div className="relative aspect-[3/2] w-full overflow-hidden bg-cream photo-mono">
        {slides.map((slide, i) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="(max-width: 768px) 100vw, 1180px"
            className={`object-cover transition-opacity duration-[1.2s] ease-in-out ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <p className="font-serif text-sm italic text-graphite/80">
          {slides[active]?.caption}
        </p>
        <div className="flex items-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Show slide ${i + 1}`}
              className={`h-px transition-all ${
                i === active ? "w-10 bg-ink" : "w-6 bg-hairline hover:bg-graphite"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
