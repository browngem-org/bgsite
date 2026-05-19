import Link from "next/link";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { newsItems, categoryLabel } from "@/data/news";

const slides = [
  {
    src: "https://raw.githubusercontent.com/browngem-org/photo/bc3c221d8ec510b62532d662dfd41a511a0a8eb4/laboratory/Labo.jpg",
    alt: "Laboratory",
    caption: "Plate 01 — In the lab, Tsuruoka"
  },
  {
    src: "https://raw.githubusercontent.com/browngem-org/photo/bc3c221d8ec510b62532d662dfd41a511a0a8eb4/laboratory/LaboKorea.jpg",
    alt: "Group photo in Korea",
    caption: "Plate 02 — Joint training, Korea 2025"
  },
  {
    src: "https://www.iab.keio.ac.jp/research-project/files/gut.png",
    alt: "Gut microbiome illustration",
    caption: "Plate 03 — The gut, illustrated"
  }
];

const sidebarLinks = [
  {
    href: "https://www.iab.keio.ac.jp/research-project/gut-design-research-project.html",
    label: "慶應義塾大学 先端生命科学研究所 腸内細菌グループ"
  },
  {
    href: "https://research-center.juntendo.ac.jp/gut-link-lab/",
    label: "順天堂大学 大学院医学研究科 腸内細菌療法リサーチセンター"
  },
  { href: "https://www.md.tsukuba.ac.jp/top/", label: "筑波大学医学医療系" },
  {
    href: "https://www.kistec.jp/r_and_d/fukudatyounai/",
    label: "神奈川県立産業技術総合研究所 腸内環境デザイングループ"
  },
  { href: "https://metagen.co.jp/", label: "株式会社メタジェン" },
  { href: "https://www.jst.go.jp/erato/fukatsu/", label: "科学技術振興機構 (JST)" }
];

export default function HomePage() {
  return (
    <div>
      {/* hero / masthead */}
      <section className="container-edge pt-12 md:pt-20">
        <div className="grid items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="eyebrow">Vol. I — Designing the Gut</p>
            <h1 className="display mt-6 text-[14vw] leading-[0.92] md:text-[112px]">
              Gut
              <span className="italic font-light"> Design</span>
              <span className="block text-graphite">Science.</span>
            </h1>
            <p className="mt-8 max-w-prose text-[15px] leading-[1.85] text-graphite/90">
              腸内デザイン学。
              ヒトと微生物の共生メカニズムを解き明かし、
              腸内環境を能動的にデザインすることで、新しい健康のかたちを構想する研究室です。
            </p>
          </div>
          <div className="md:col-span-5">
            <dl className="grid grid-cols-2 gap-y-4 border-y border-hairline py-5 font-sans text-[11px] uppercase tracking-[0.18em]">
              <dt className="text-mute">Principal Investigator</dt>
              <dd className="text-right">Shinji Fukuda</dd>
              <dt className="text-mute">Established</dt>
              <dd className="text-right">2025</dd>
              <dt className="text-mute">Location</dt>
              <dd className="text-right">Tsuruoka · Yamagata</dd>
              <dt className="text-mute">Discipline</dt>
              <dd className="text-right">Multi-omics × Microbiome</dd>
            </dl>
          </div>
        </div>
      </section>

      {/* slideshow */}
      <section className="container-edge mt-16 md:mt-24">
        <HeroSlideshow slides={slides} />
      </section>

      {/* about + sidebar grid */}
      <section className="container-edge mt-24 md:mt-32">
        <div className="grid gap-16 md:grid-cols-12">
          <article className="md:col-span-8">
            <div className="flex items-baseline justify-between gap-4">
              <p className="eyebrow">§ 01</p>
              <span className="h-px flex-1 bg-hairline" />
              <p className="font-serif text-sm italic text-mute">About our research</p>
            </div>
            <h2 className="display mt-6 text-4xl md:text-5xl">
              The unseen ecosystem
              <span className="italic font-light"> inside us.</span>
            </h2>
            <div className="mt-8 space-y-5 text-[15.5px] leading-[1.95] text-graphite/95">
              <p>
                腸内デザイン学研究プロジェクトでは、腸内細菌叢と私たちの健康との関係を明らかにし、
                腸内細菌叢を適切に制御（腸内デザイン）するための研究を行っています。
                私たちの腸内には多種多様な腸内細菌が生息し、免疫系の構築や栄養素の供給など、
                重要な役割を担っています。
              </p>
              <p>
                しかし、そのバランスが崩れると様々な疾患の発症や増悪につながることもわかってきています。
                われわれは、腸内細菌叢と宿主の共生メカニズムを明らかにすることで、
                腸内細菌叢を活用した新たな健康管理や疾患予防・治療方法の確立を目指しています。
              </p>
              <p>
                構造解析に加え、代謝物質解析、情報学的解析、免疫学的解析、細菌培養技術など、
                さまざまな最先端の技術を活用した
                <em className="font-serif italic"> マルチオミクスアプローチ </em>
                を用いています。多角的なアプローチによって腸内細菌叢の機能を正しく理解することが、
                腸内デザインの実現に向けた第一歩だと考えています。
              </p>
            </div>

            <div className="mt-10 aspect-video w-full overflow-hidden bg-cream">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/ZxTViAElCPA"
                title="About our research"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </article>

          <aside className="md:col-span-4">
            <div className="sticky top-8 space-y-12">
              <div>
                <p className="eyebrow">Affiliated</p>
                <ul className="mt-6 divide-y divide-hairline">
                  {sidebarLinks.map((l) => (
                    <li key={l.href} className="py-3 text-[13.5px] leading-snug">
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="link-underline text-graphite hover:text-terracotta"
                      >
                        {l.label}
                        <span className="ml-1 text-mute">↗</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* news */}
      <section className="container-edge mt-28 md:mt-36">
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <p className="eyebrow">§ 02</p>
            <h2 className="display mt-4 text-4xl md:text-5xl">
              Recent <span className="italic font-light">dispatches.</span>
            </h2>
          </div>
          <Link href="/news" className="link-underline text-[12px] uppercase tracking-[0.2em]">
            View all →
          </Link>
        </div>

        <ul className="mt-12 divide-y divide-hairline border-y border-hairline">
          {newsItems.slice(0, 6).map((item, i) => (
            <li key={i} className="grid grid-cols-12 gap-4 py-6 md:gap-8">
              <div className="col-span-12 md:col-span-2">
                <p className="font-mono text-[12px] tracking-wider text-mute">{item.date}</p>
              </div>
              <div className="col-span-12 md:col-span-2">
                <p className="font-serif text-xs italic text-terracotta">
                  {categoryLabel[item.category]}
                </p>
              </div>
              <p className="col-span-12 text-[15px] leading-relaxed text-graphite md:col-span-8">
                {item.body}{" "}
                {item.href && (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline text-ink"
                  >
                    {item.hrefLabel ?? "詳細"} ↗
                  </a>
                )}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
