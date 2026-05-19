import { PageMasthead } from "@/components/PageMasthead";
import { T } from "@/components/T";

export const metadata = { title: "Access" };

const sections = [
  {
    title: { ja: "電車・バス", en: "By Train & Bus" },
    items: [
      { ja: "JR羽越本線「鶴岡駅」下車", en: "Get off at Tsuruoka Station (JR Uetsu Main Line)" },
      {
        ja: "鶴岡駅より庄内交通バス「湯野浜温泉行き」約15分、「慶應先端研前」下車",
        en: "From Tsuruoka Station, take the Shonai Kotsu bus bound for Yunohama Onsen (about 15 min), get off at Keio Sentanken-mae"
      },
      { ja: "鶴岡駅よりタクシーで約10分", en: "About 10 minutes by taxi from Tsuruoka Station" }
    ]
  },
  {
    title: { ja: "飛行機", en: "By Air" },
    items: [
      { ja: "庄内空港より連絡バスで鶴岡駅まで約25分", en: "From Shonai Airport, about 25 minutes by shuttle bus to Tsuruoka Station" },
      { ja: "庄内空港よりタクシーで約20分", en: "About 20 minutes by taxi from Shonai Airport" }
    ]
  },
  {
    title: { ja: "自動車", en: "By Car" },
    items: [
      { ja: "日本海東北自動車道「鶴岡IC」より約10分", en: "About 10 minutes from Tsuruoka IC (Nihonkai-Tohoku Expressway)" },
      { ja: "駐車場あり（来訪者用）", en: "Visitor parking available" }
    ]
  }
];

export default function AccessPage() {
  return (
    <div>
      <PageMasthead
        eyebrow={<T ja="Access" en="Access" />}
        title={<T ja="アクセス" en="Find us." />}
        accent={<T ja="Find us." en="" />}
        lede={
          <T
            ja="鶴岡市覚岸寺、慶應義塾大学先端生命科学研究所のキャンパス内に研究室があります。"
            en="Our lab is located inside the Institute for Advanced Biosciences, Keio University, in Kakuganji, Tsuruoka."
          />
        }
      />

      <section className="container-edge mt-14 grid gap-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="card-soft p-8">
            <p className="eyebrow">Address</p>
            <p className="mt-3 font-display text-2xl font-medium">Fukuda Laboratory</p>
            <div className="mt-4 space-y-1 text-[14.5px] leading-relaxed text-bark">
              <T
                ja={
                  <>
                    <p>〒997-0052</p>
                    <p>山形県鶴岡市覚岸寺字水上 246-2</p>
                    <p>慶應義塾大学 先端生命科学研究所</p>
                  </>
                }
                en={
                  <>
                    <p>246-2 Mizukami, Kakuganji,</p>
                    <p>Tsuruoka, Yamagata 997-0052</p>
                    <p>Institute for Advanced Biosciences, Keio University</p>
                  </>
                }
              />
            </div>
            <div className="mt-6 border-t border-line pt-5 text-[13px] leading-relaxed text-barkSoft">
              <T
                ja={
                  <>
                    <p className="font-medium text-bark">In English</p>
                    <p className="mt-1">
                      Institute for Advanced Biosciences, Keio University
                      <br />
                      246-2 Mizukami, Kakuganji, Tsuruoka, Yamagata 997-0052, Japan
                    </p>
                  </>
                }
                en={
                  <>
                    <p className="font-medium text-bark">日本語</p>
                    <p className="mt-1">
                      慶應義塾大学先端生命科学研究所
                      <br />
                      〒997-0052 山形県鶴岡市覚岸寺字水上 246-2
                    </p>
                  </>
                }
              />
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
            <h2 className="display-h mt-3 text-3xl md:text-4xl">
              <T ja="アクセス方法" en="Getting here" />
            </h2>
          </div>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {sections.map((s, i) => (
            <div key={i} className="card-soft p-7">
              <p className="font-serif italic text-[15px] text-orange">
                {String(i + 1).padStart(2, "0")} / 03
              </p>
              <h3 className="mt-3 font-display text-xl font-medium text-bark">
                <T ja={s.title.ja} en={s.title.en} />
              </h3>
              <ul className="mt-4 space-y-2.5 text-[13.5px] leading-relaxed text-bark/90">
                {s.items.map((it, j) => (
                  <li key={j} className="flex gap-2.5">
                    <span aria-hidden className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange" />
                    <span>
                      <T ja={it.ja} en={it.en} />
                    </span>
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
