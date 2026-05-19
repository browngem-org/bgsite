import { PageMasthead } from "@/components/PageMasthead";

export const metadata = { title: "Contact" };

const rows: { label: string; value: React.ReactNode }[] = [
  {
    label: "所在地",
    value: (
      <>
        〒997-0052
        <br />
        山形県鶴岡市覚岸寺字水上 246-2
        <br />
        慶應義塾大学 先端生命科学研究所
      </>
    )
  },
  {
    label: "Address",
    value: (
      <>
        246-2 Mizukami, Kakuganji,
        <br />
        Tsuruoka, Yamagata 997-0052, Japan
      </>
    )
  },
  {
    label: "E-mail",
    value: (
      <>
        <span className="font-mono text-[14px]">fukuda-lab [at] iab.keio.ac.jp</span>
        <br />
        <span className="text-[12px] text-barkMute">※ [at] を @ に変換してください</span>
      </>
    )
  },
  { label: "TEL", value: <span className="font-mono">0235-29-XXXX</span> },
  { label: "FAX", value: <span className="font-mono">0235-29-XXXX</span> }
];

export default function ContactPage() {
  return (
    <div>
      <PageMasthead
        eyebrow="Contact"
        title="お問い合わせ"
        accent="Say hello."
        lede="共同研究のご相談、見学のご依頼、進学のお問い合わせなど、お気軽にご連絡ください。"
      />

      <section className="container-edge mt-14 grid gap-8 md:grid-cols-12">
        <div className="md:col-span-7">
          <div className="card-soft p-8">
            <p className="eyebrow">Inquiry</p>
            <dl className="mt-6 divide-y divide-line">
              {rows.map((r) => (
                <div key={r.label} className="grid grid-cols-12 gap-4 py-5">
                  <dt className="col-span-12 text-[11px] uppercase tracking-wider text-orange md:col-span-3">
                    {r.label}
                  </dt>
                  <dd className="col-span-12 text-[14.5px] leading-relaxed text-bark md:col-span-9">
                    {r.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-6 rounded-chunk border-l-4 border-gold bg-gold/10 px-6 py-5">
            <p className="font-display text-[15px] font-medium text-bark">お問い合わせの際のお願い</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-[13.5px] leading-relaxed text-bark/90">
              <li>メールの件名に用件を明記してください。</li>
              <li>研究内容・共同研究のご相談はメールにてお願いいたします。</li>
              <li>返信には数日かかる場合がございます。予めご了承ください。</li>
            </ul>
          </div>
        </div>

        <aside className="md:col-span-5">
          <div className="rounded-chunk bg-orange p-8 text-white shadow-soft">
            <p className="text-[11px] uppercase tracking-widest opacity-90">Recruitment</p>
            <h3 className="mt-4 font-display text-3xl font-medium leading-tight">
              ラボに参加しませんか？
            </h3>
            <p className="mt-4 text-[14px] leading-relaxed opacity-95">
              当研究室では、腸内細菌叢研究に興味を持つ大学院生（修士・博士）、
              ポスドク研究員を随時募集しています。
            </p>
            <p className="mt-3 text-[14px] leading-relaxed opacity-95">
              研究内容に興味のある方は、お気軽にお問い合わせください。研究室見学も歓迎いたします。
            </p>
            <p className="mt-7 text-[11px] uppercase tracking-wider opacity-90">Fields</p>
            <p className="mt-2 text-[15px] leading-relaxed">
              腸内細菌学 · メタボロミクス · 免疫学 · バイオインフォマティクス
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}
