"use client";

import Image from "next/image";
import { PageMasthead } from "@/components/PageMasthead";
import { blogPosts } from "@/data/blog";
import { useLang } from "@/i18n/LanguageProvider";
import { T } from "@/components/T";

export default function BlogPage() {
  const { lang } = useLang();
  const byLabel = lang === "en" ? "by" : "by";

  return (
    <div>
      <PageMasthead
        eyebrow="Diary"
        title={<T ja="ラボ日記" en="Lab diary" />}
        accent={<T ja="Lab diary." en="" />}
        lede={
          <T
            ja="研究室の日常や雑多な記録を綴っています。"
            en="Everyday notes from the lab."
          />
        }
      />

      <section className="container-edge mt-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.slug} className="card-soft overflow-hidden">
              <div className="relative aspect-[4/3] w-full bg-sandDeep">
                <Image
                  src={post.thumb}
                  alt={lang === "en" ? post.titleEn : post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-barkMute">
                  <span>{post.date}</span>
                  <span className="h-1 w-1 rounded-full bg-line" />
                  <span>
                    {byLabel} {lang === "en" ? post.authorEn : post.author}
                  </span>
                </div>
                <h2 className="mt-3 font-display text-[19px] font-medium leading-snug text-bark">
                  <a href="#" className="link-grow">
                    {lang === "en" ? post.titleEn : post.title}
                  </a>
                </h2>
                <p className="mt-3 text-[13.5px] leading-relaxed text-bark/85">
                  {lang === "en" ? post.excerptEn : post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-24 text-center text-[13px] text-barkMute">
          <T ja="— to be continued —" en="— to be continued —" />
        </p>
      </section>
    </div>
  );
}
