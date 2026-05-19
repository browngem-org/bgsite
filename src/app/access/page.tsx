import { PageMasthead } from "@/components/PageMasthead";

export const metadata = { title: "Access" };

const sections = [
  {
    title: "By Train & Bus",
    items: [
      "JR羽越本線「鶴岡駅」下車",
      "鶴岡駅より庄内交通バス「湯野浜温泉行き」約15分、「慶應先端研前」下車",
      "または、鶴岡駅よりタクシーで約10分"
    ]
  },
  {
    title: "By Air",
    items: ["庄内空港より連絡バスで鶴岡駅まで約25分", "庄内空港よりタクシーで約20分"]
  },
  {
    title: "By Car",
    items: ["日本海東北自動車道「鶴岡IC」より約10分", "駐車場あり（来訪者用）"]
  }
];

export default function AccessPage() {
  return (
    <div>
      <PageMasthead
        eyebrow="§ 07 — Access"
        title="Find"
        italic="us."
        lede="鶴岡市覚岸寺、慶應義塾大学先端生命科学研究所のキャンパス内に研究室があります。"
      />

      <section className="container-edge mt-14 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="eyebrow">Address</p>
          <p className="mt-4 font-serif text-3xl leading-tight">
            Fukuda <span className="italic font-light">Laboratory</span>
          </p>
          <div className="mt-5 space-y-1 text-[14.5px] leading-relaxed text-graphite">
            <p>〒997-0052</p>
            <p>山形県鶴岡市覚岸寺字水上 246-2</p>
            <p>慶應義塾大学 先端生命科学研究所</p>
          </div>
          <div className="mt-8 border-t border-hairline pt-5 text-[13px] leading-relaxed text-mute">
            <p className="font-serif italic text-graphite">In English</p>
            <p className="mt-1">
              Institute for Advanced Biosciences, Keio University
              <br />
              246-2 Mizukami, Kakuganji, Tsuruoka, Yamagata 997-0052, Japan
            </p>
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="relative aspect-[4/3] w-full overflow-hidden border border-hairline bg-cream md:aspect-[16/10]">
            <iframe
              src="https://www.google.com/maps?q=Institute+for+Advanced+Biosciences,+Keio+University,+Tsuruoka&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
              title="Map"
            />
          </div>
        </div>
      </section>

      <section className="container-edge mt-20">
        <div className="flex items-baseline gap-4">
          <p className="eyebrow">How to come</p>
          <span className="h-px flex-1 bg-hairline" />
        </div>
        <div className="mt-10 grid gap-12 md:grid-cols-3">
          {sections.map((s) => (
            <div key={s.title}>
              <h3 className="font-serif text-2xl">{s.title}</h3>
              <ul className="mt-4 space-y-2 text-[14px] leading-relaxed text-graphite">
                {s.items.map((it) => (
                  <li key={it} className="flex gap-2">
                    <span className="select-none text-terracotta">›</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
