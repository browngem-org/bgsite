import Image from "next/image";
import { PageMasthead } from "@/components/PageMasthead";
import { blogPosts } from "@/data/blog";

export const metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <div>
      <PageMasthead
        eyebrow="§ 06 — Diary"
        title="Lab"
        italic="diary."
        lede="研究室の日常や雑多な記録を綴っています。"
      />

      <section className="container-edge mt-14">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.slug} className="group">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream photo-mono">
                <Image
                  src={post.thumb}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-mute">
                  {post.date} · by {post.author}
                </p>
                <h2 className="mt-2 font-serif text-2xl leading-tight">
                  <a href="#" className="link-underline">
                    {post.title}
                  </a>
                </h2>
                <p className="mt-3 text-[14px] leading-relaxed text-graphite/90">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-24 text-center font-serif text-sm italic text-mute">
          — to be continued —
        </p>
      </section>
    </div>
  );
}
