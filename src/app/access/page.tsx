import { PageMasthead } from "@/components/PageMasthead";

export const metadata = { title: "Access" };

const sections = [
  {
    title: "By Train & Bus",
    icon: "🚆",
    items: [
      "JR羽越本線「鶴岡駅」下車",
      "鶴岡駅より庄内交通バス「湯野浜温泉行き」約15分、「慶應先端研前」下車",
      "鶴岡駅よりタクシーで約10分"
    ]
  },
  {
    title: "By Air",
    icon: "✈️",
    items: ["庄内空港より連絡バスで鶴岡駅まで約25分", "庄内空港よりタクシーで約20分"]
  },
  {
    title: "By Car",
    icon: "🚗",
    items: ["日本海東北自動車道「鶴岡IC」より約10分", "駐車場あり（来訪者用）"]
  }
];

export default function AccessPage() {
  return (
    <div>
      <PageMasthead
        eyebrow="Access"
        title="アクセス"
        accent="Find us."
        lede="鶴岡市覚岸寺、慶應義塾大学先端生命科学研究所のキャンパス内に研究室があります。"
      />

      <section className="container-edge mt-14 grid gap-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="card-soft p-8">
            <p className="eyebrow">Address</p>
            <p className="mt-3 font-display text-2xl font-medium">Fukuda Laboratory</p>
            <div className="mt-4 space-y-1 text-[14.5px] leading-relaxed text-bark">
              <p>〒997-0052</p>
              <p>山形県鶴岡市覚岸寺字水上 246-2</p>
              <p>慶應義塾大学 先端生命科学研究所</p>
            </div>
            <div className="mt-6 border-t border-line pt-5 text-[13px] leading-relaxed text-barkSoft">
              <p className="font-medium text-bark">In English</p>
              <p className="mt-1">
                Institute for Advanced Biosciences, Keio University
                <br />
                246-2 Mizukami, Kakuganji, Tsuruoka, Yamagata 997-0052, Japan
              </p>
            </div>
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-chunk bg-sandDeep shadow-ring md:aspect-[16/10]">
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
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">How to come</p>
            <h2 className="display-h mt-3 text-3xl md:text-4xl">アクセス方法</h2>
          </div>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {sections.map((s) => (
            <div key={s.title} className="card-soft p-7">
              <div className="text-3xl">{s.icon}</div>
              <h3 className="mt-3 font-display text-xl font-medium text-bark">{s.title}</h3>
              <ul className="mt-4 space-y-2.5 text-[13.5px] leading-relaxed text-bark/90">
                {s.items.map((it) => (
                  <li key={it} className="flex gap-2.5">
                    <span aria-hidden className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange" />
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
