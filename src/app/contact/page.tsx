import { PageMasthead } from "@/components/PageMasthead";
import { T } from "@/components/T";

export const metadata = { title: "Contact" };

type Row = {
  labelJa: string;
  labelEn: string;
  valueJa: React.ReactNode;
  valueEn: React.ReactNode;
};

const rows: Row[] = [
  {
    labelJa: "所在地",
    labelEn: "Address (JA)",
    valueJa: (
      <>
        〒997-0052
        <br />
        山形県鶴岡市覚岸寺字水上 246-2
        <br />
        慶應義塾大学 先端生命科学研究所
      </>
    ),
    valueEn: (
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
    labelJa: "Address",
    labelEn: "Address",
    valueJa: (
      <>
        246-2 Mizukami, Kakuganji,
        <br />
        Tsuruoka, Yamagata 997-0052, Japan
      </>
    ),
    valueEn: (
      <>
        246-2 Mizukami, Kakuganji,
        <br />
        Tsuruoka, Yamagata 997-0052, Japan
      </>
    )
  },
  {
    labelJa: "E-mail",
    labelEn: "E-mail",
    valueJa: (
      <>
        <span className="font-mono text-[14px]">fukuda-lab [at] iab.keio.ac.jp</span>
        <br />
        <span className="text-[12px] text-barkMute">※ [at] を @ に変換してください</span>
      </>
    ),
    valueEn: (
      <>
        <span className="font-mono text-[14px]">fukuda-lab [at] iab.keio.ac.jp</span>
        <br />
        <span className="text-[12px] text-barkMute">Replace [at] with @.</span>
      </>
    )
  },
  {
    labelJa: "TEL",
    labelEn: "TEL",
    valueJa: <span className="font-mono">0235-29-XXXX</span>,
    valueEn: <span className="font-mono">+81-235-29-XXXX</span>
  },
  {
    labelJa: "FAX",
    labelEn: "FAX",
    valueJa: <span className="font-mono">0235-29-XXXX</span>,
    valueEn: <span className="font-mono">+81-235-29-XXXX</span>
  }
];

export default function ContactPage() {
  return (
    <div>
      <PageMasthead
        eyebrow="Contact"
        title={<T ja="お問い合わせ" en="Contact" />}
        accent={<T ja="Say hello." en="Say hello." />}
        lede={
          <T
            ja="共同研究のご相談、見学のご依頼、進学のお問い合わせなど、お気軽にご連絡ください。"
            en="For collaborations, lab visits, or admissions inquiries — please reach out."
          />
        }
      />

      <section className="container-edge mt-14 grid gap-8 md:grid-cols-12">
        <div className="md:col-span-7">
          <div className="card-soft p-8">
            <p className="eyebrow">Inquiry</p>
            <dl className="mt-6 divide-y divide-line">
              {rows.map((r, i) => (
                <div key={i} className="grid grid-cols-12 gap-4 py-5">
                  <dt className="col-span-12 text-[11px] uppercase tracking-wider text-orange md:col-span-3">
                    <T ja={r.labelJa} en={r.labelEn} />
                  </dt>
                  <dd className="col-span-12 text-[14.5px] leading-relaxed text-bark md:col-span-9">
                    <T ja={r.valueJa} en={r.valueEn} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-6 rounded-chunk border-l-4 border-gold bg-gold/10 px-6 py-5">
            <p className="font-display text-[15px] font-medium text-bark">
              <T ja="お問い合わせの際のお願い" en="When contacting us" />
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-[13.5px] leading-relaxed text-bark/90">
              <T
                ja={
                  <>
                    <li>メールの件名に用件を明記してください。</li>
                    <li>研究内容・共同研究のご相談はメールにてお願いいたします。</li>
                    <li>返信には数日かかる場合がございます。予めご了承ください。</li>
                  </>
                }
                en={
                  <>
                    <li>Please state the purpose clearly in the subject line.</li>
                    <li>For research or collaboration inquiries, please use email.</li>
                    <li>Replies may take a few days. Thank you for your patience.</li>
                  </>
                }
              />
            </ul>
          </div>
        </div>

        <aside className="md:col-span-5">
          <div className="rounded-chunk bg-orange p-8 text-white shadow-soft">
            <p className="text-[11px] uppercase tracking-widest opacity-90">Recruitment</p>
            <h3 className="mt-4 font-display text-3xl font-medium leading-tight">
              <T ja="ラボに参加しませんか？" en="Join the lab?" />
            </h3>
            <p className="mt-4 text-[14px] leading-relaxed opacity-95">
              <T
                ja="当研究室では、腸内細菌叢研究に興味を持つ大学院生（修士・博士）、ポスドク研究員を随時募集しています。"
                en="We welcome master's and PhD students, as well as postdocs, interested in microbiome research."
              />
            </p>
            <p className="mt-3 text-[14px] leading-relaxed opacity-95">
              <T
                ja="研究内容に興味のある方は、お気軽にお問い合わせください。研究室見学も歓迎いたします。"
                en="If our work interests you, please get in touch. Lab visits are always welcome."
              />
            </p>
            <p className="mt-7 text-[11px] uppercase tracking-wider opacity-90">Fields</p>
            <p className="mt-2 text-[15px] leading-relaxed">
              <T
                ja="腸内細菌学 · メタボロミクス · 免疫学 · バイオインフォマティクス"
                en="Microbiology · Metabolomics · Immunology · Bioinformatics"
              />
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}
