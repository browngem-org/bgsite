import Link from "next/link";
import Image from "next/image";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { HomeNewsList } from "@/components/HomeNewsList";
import { T } from "@/components/T";
import { publicationsByYear } from "@/data/publications";
import { memberGroups, pi } from "@/data/members";

const slides = [
  {
    src: "https://raw.githubusercontent.com/browngem-org/photo/bc3c221d8ec510b62532d662dfd41a511a0a8eb4/laboratory/Labo.jpg",
    alt: "Laboratory",
    caption: "鶴岡のラボにて",
    captionEn: "In the lab — Tsuruoka"
  },
  {
    src: "https://raw.githubusercontent.com/browngem-org/photo/bc3c221d8ec510b62532d662dfd41a511a0a8eb4/laboratory/LaboKorea.jpg",
    alt: "Group photo in Korea",
    caption: "韓国研修 — 2025",
    captionEn: "Joint training — Korea 2025"
  },
  {
    src: "https://www.iab.keio.ac.jp/research-project/files/gut.png",
    alt: "Gut microbiome",
    caption: "腸内細菌叢",
    captionEn: "The gut microbiome"
  }
];

const sidebarLinks = [
  {
    href: "https://www.iab.keio.ac.jp/research-project/gut-design-research-project.html",
    label: "慶應義塾大学 先端生命科学研究所 腸内細菌グループ",
    labelEn: "Gut Microbiome Group, IAB, Keio University"
  },
  {
    href: "https://research-center.juntendo.ac.jp/gut-link-lab/",
    label: "順天堂大学 大学院医学研究科 腸内細菌療法リサーチセンター",
    labelEn: "Gut Microbiota Therapy Research Center, Juntendo University"
  },
  {
    href: "https://www.md.tsukuba.ac.jp/top/",
    label: "筑波大学 医学医療系",
    labelEn: "Faculty of Medicine, University of Tsukuba"
  },
  {
    href: "https://www.kistec.jp/r_and_d/fukudatyounai/",
    label: "神奈川県立産業技術総合研究所 腸内環境デザイングループ",
    labelEn: "Gut Environmental Design Group, KISTEC"
  },
  { href: "https://metagen.co.jp/", label: "株式会社メタジェン", labelEn: "Metagen Inc." },
  {
    href: "https://www.jst.go.jp/erato/fukatsu/",
    label: "科学技術振興機構 (JST)",
    labelEn: "Japan Science and Technology Agency (JST)"
  }
];

const pillars = [
  {
    tag: "Microbiome",
    title: "腸内細菌叢の構造解析",
    titleEn: "Microbiome structure analysis",
    body: "次世代シーケンサーで腸内に棲む細菌たちのコミュニティ構造を高解像度に読み解きます。",
    bodyEn:
      "Decode microbial communities in the gut at high resolution using next-generation sequencing.",
    color: "teal"
  },
  {
    tag: "Metabolomics",
    title: "代謝物質ネットワーク",
    titleEn: "Metabolite networks",
    body:
      "細菌叢が産生する代謝物群をマルチプラットフォームMSで網羅的に計測し、宿主との対話を可視化。",
    bodyEn:
      "Profile the metabolites produced by the microbiota with multi-platform MS to visualize host-microbe dialogue.",
    color: "orange"
  },
  {
    tag: "Immunology",
    title: "宿主免疫との共生",
    titleEn: "Symbiosis with host immunity",
    body: "粘膜免疫を中心に、細菌叢と宿主のクロストークが疾患にどう寄与するかを解明します。",
    bodyEn:
      "Unravel how microbe-host crosstalk — especially in mucosal immunity — drives disease.",
    color: "gold"
  },
  {
    tag: "Informatics",
    title: "統合オミクス解析",
    titleEn: "Integrated omics analysis",
    body:
      "シーケンス × 代謝 × 臨床情報を機械学習と統計でつなぎ、腸内デザインの設計図を描きます。",
    bodyEn:
      "Bridge sequence, metabolome, and clinical data with ML and statistics to design the gut.",
    color: "bark"
  }
] as const;

const pillarStyles: Record<string, string> = {
  teal: "bg-teal text-sand",
  orange: "bg-orange text-white",
  gold: "bg-gold text-bark",
  bark: "bg-bark text-sand"
};

export default function HomePage() {
  const totalPapers = publicationsByYear.reduce((s, y) => s + y.items.length, 0);
  const totalMembers = 1 + memberGroups.reduce((s, g) => s + g.members.length, 0);
  void pi;

  return (
    <div>
      {/* hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full bg-orange/10 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -left-40 top-40 h-[460px] w-[460px] rounded-full bg-teal/10 blur-3xl"
        />

        <div className="container-edge relative pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="grid items-center gap-14 md:grid-cols-12">
            <div className="md:col-span-7">
              <div className="flex items-baseline gap-3 font-serif italic">
                <span className="text-[14px] text-orange">est.</span>
                <span className="font-mono not-italic text-[12px] tracking-[0.18em] text-bark/70">
                  2 0 1 2
                </span>
                <span className="h-px flex-1 max-w-[120px] bg-orange/40" />
                <span className="text-[13.5px] text-bark/75">Tsuruoka, Yamagata</span>
              </div>
              <h1 className="display-h mt-6 text-[44px] leading-[1.02] md:text-[68px]">
                <T
                  ja={
                    <>
                      腸内をデザインする、<br />
                      <span className="text-orange">あたらしい科学。</span>
                    </>
                  }
                  en={
                    <>
                      A new science for<br />
                      <span className="text-orange">designing the gut.</span>
                    </>
                  }
                />
              </h1>
              <p className="mt-7 max-w-prose text-[15.5px] leading-[1.95] text-bark/85">
                <T
                  ja="福田真嗣研究室は、ヒトと腸内細菌叢の共生メカニズムを解き明かし、腸内環境を能動的にデザインすることで、新しい健康のかたちを構想する研究室です。多角的なマルチオミクスアプローチで、未踏の地である腸内細菌叢の機能に迫ります。"
                  en="The Fukuda Laboratory studies the symbiosis between humans and the gut microbiota, and reshapes the gut environment to invent new forms of health. We use a multi-omics approach to chart the still-unmapped functions of the microbiome."
                />
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link href="/laboratory" className="btn-primary">
                  <T ja="研究室について" en="About the lab" />
                  <span aria-hidden>→</span>
                </Link>
                <Link href="/publications" className="btn-ghost">
                  Publications
                </Link>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="relative">
                <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-gold/70" aria-hidden />
                <div className="absolute -right-3 bottom-6 h-16 w-16 rounded-full bg-teal/80" aria-hidden />
                <div className="relative overflow-hidden rounded-chunk shadow-soft">
                  <Image
                    src="https://raw.githubusercontent.com/browngem-org/photo/bc3c221d8ec510b62532d662dfd41a511a0a8eb4/laboratory/Labo.jpg"
                    alt="Laboratory"
                    width={720}
                    height={900}
                    className="h-[460px] w-full object-cover"
                    priority
                  />
                </div>
              </div>

              <dl className="mt-7 grid grid-cols-3 gap-2 rounded-soft border border-line bg-ivory/60 p-4">
                <div className="text-center">
                  <dt className="text-[10px] uppercase tracking-wider text-barkMute">Papers</dt>
                  <dd className="mt-1 font-display text-2xl font-semibold tabular-nums text-orange">
                    {totalPapers}
                  </dd>
                </div>
                <div className="border-x border-line text-center">
                  <dt className="text-[10px] uppercase tracking-wider text-barkMute">Members</dt>
                  <dd className="mt-1 font-display text-2xl font-semibold tabular-nums text-teal">
                    {totalMembers}
                  </dd>
                </div>
                <div className="text-center">
                  <dt className="text-[10px] uppercase tracking-wider text-barkMute">Since</dt>
                  <dd className="mt-1 font-display text-2xl font-semibold text-bark">2012</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* slideshow */}
      <section className="container-edge">
        <HeroSlideshow slides={slides} />
      </section>

      {/* research pillars */}
      <section className="container-edge mt-28">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Research Pillars</p>
            <h2 className="display-h mt-3 text-3xl md:text-4xl">
              <T ja="4つの視点で、腸内を読み解く。" en="Four lenses on the gut." />
            </h2>
          </div>
          <Link href="/laboratory" className="hidden text-[13px] font-medium text-orange hover:underline md:inline-flex">
            <T ja="研究内容をすべて見る →" en="See all research →" />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <article
              key={p.tag}
              className={`group flex flex-col justify-between rounded-chunk p-7 ${pillarStyles[p.color]} transition-transform hover:-translate-y-1`}
            >
              <div>
                <p className="text-[10.5px] font-medium uppercase tracking-widest opacity-80">
                  {p.tag}
                </p>
                <h3 className="mt-3 font-display text-[20px] leading-snug">
                  <T ja={p.title} en={p.titleEn} />
                </h3>
              </div>
              <p className="mt-6 text-[13.5px] leading-relaxed opacity-95">
                <T ja={p.body} en={p.bodyEn} />
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* about */}
      <section className="mt-32 bg-sandLight py-24">
        <div className="container-edge grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">About our research</p>
            <h2 className="display-h mt-4 text-4xl md:text-[44px]">
              <T
                ja={
                  <>
                    The unseen ecosystem
                    <br />
                    <span className="text-teal">inside us.</span>
                  </>
                }
                en={
                  <>
                    The unseen ecosystem
                    <br />
                    <span className="text-teal">inside us.</span>
                  </>
                }
              />
            </h2>
            <p className="mt-6 text-[14.5px] leading-[1.95] text-bark/85">
              <T
                ja={
                  <>
                    腸内細菌叢の構造解析に加え、代謝物質解析、情報学的解析、免疫学的解析、細菌培養技術など、
                    さまざまな最先端の技術を活用した
                    <span className="font-semibold text-bark"> マルチオミクスアプローチ </span>
                    を用いています。
                  </>
                }
                en={
                  <>
                    Beyond microbiome profiling, we combine metabolomics, informatics, immunology,
                    and culturomics in an{" "}
                    <span className="font-semibold text-bark">integrated multi-omics approach</span>.
                  </>
                }
              />
            </p>
            <Link href="/laboratory" className="btn-dark mt-8">
              <T ja="詳細を見る" en="Learn more" />
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="md:col-span-7">
            <div className="overflow-hidden rounded-chunk shadow-soft">
              <div className="aspect-video w-full bg-bark">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/ZxTViAElCPA"
                  title="About our research"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
            <p className="mt-4 text-[13px] text-barkMute">
              <T
                ja="腸内細菌叢と私たちの健康との関係を、映像で。"
                en="The microbiome and our health, on screen."
              />
            </p>
          </div>
        </div>
      </section>

      {/* news */}
      <section className="container-edge mt-28">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Recent News</p>
            <h2 className="display-h mt-3 text-3xl md:text-4xl">
              <T ja="最新のお知らせ" en="Latest updates" />
            </h2>
          </div>
          <Link href="/news" className="btn-ghost text-[12px]">
            <T ja="すべて見る →" en="See all →" />
          </Link>
        </div>

        <HomeNewsList />
      </section>

      {/* affiliated links */}
      <section className="container-edge mt-28">
        <div className="rounded-chunk bg-ivory p-10 shadow-ring md:p-14">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="eyebrow">Affiliated</p>
              <h2 className="display-h mt-3 text-3xl">
                <T ja="関連機関" en="Affiliated institutions" />
              </h2>
              <p className="mt-4 text-[14px] leading-relaxed text-bark/80">
                <T
                  ja="共同研究・関連プロジェクトを担う組織の一覧です。"
                  en="Organizations we partner with for joint research and related projects."
                />
              </p>
            </div>
            <ul className="grid grid-cols-1 gap-3 md:col-span-8 md:grid-cols-2">
              {sidebarLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between gap-4 rounded-pill border border-line bg-sand/30 px-5 py-3.5 text-[13.5px] text-bark transition-colors hover:border-orange hover:bg-orange/5"
                  >
                    <span className="truncate">
                      <T ja={l.label} en={l.labelEn} />
                    </span>
                    <span className="text-orange transition-transform group-hover:translate-x-0.5">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
