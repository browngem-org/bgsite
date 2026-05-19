import Image from "next/image";
import { PageMasthead } from "@/components/PageMasthead";
import { LabHistoryTabs } from "@/components/LabHistoryTabs";
import { labScenes, equipment } from "@/data/lab";

export const metadata = { title: "Our Laboratory" };

export default function LaboratoryPage() {
  return (
    <div>
      <PageMasthead
        eyebrow="Our Laboratory"
        title="ラボの中身"
        accent="Inside the lab."
        lede="鶴岡の地で、アットホームな雰囲気のなか、研究に集中できる環境作りを大切にしています。"
      />

      <section className="container-edge mt-12">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-chunk shadow-soft">
          <Image
            src="https://raw.githubusercontent.com/browngem-org/photo/14cba80a53595be1f1e1b5dc7afb2e92706666bc/laboratory/LaboKorea.jpg"
            alt="Group photo"
            fill
            sizes="(max-width: 768px) 100vw, 1240px"
            className="object-cover"
            priority
          />
        </div>
      </section>

      <section className="container-edge mt-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Lab scenes</p>
            <h2 className="display-h mt-3 text-3xl md:text-4xl">研究室の日常</h2>
          </div>
          <p className="hidden text-[13px] text-barkMute md:block">A glimpse of daily life</p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
          {labScenes.map((p, i) => (
            <figure key={i} className="group overflow-hidden rounded-chunk shadow-ring">
              <div className="relative aspect-[4/3] w-full bg-sandDeep">
                <Image
                  src={p.src}
                  alt={p.caption}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="bg-ivory px-4 py-3 text-[12.5px] text-bark/85">
                {p.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="container-edge mt-28">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Our history</p>
            <h2 className="display-h mt-3 text-3xl md:text-4xl">研究室の歴史</h2>
          </div>
          <p className="hidden text-[13px] italic text-barkMute md:block">
            いい研究をするためには、ときに遊ぶことも大事です
          </p>
        </div>

        <div className="mt-10">
          <LabHistoryTabs />
        </div>
      </section>

      <section className="container-edge mt-28">
        <div className="rounded-chunk bg-bark p-10 text-sand md:p-14">
          <p className="eyebrow !text-gold">Principal equipment</p>
          <h2 className="display-h mt-3 text-3xl text-sand md:text-4xl">主な設備</h2>

          <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {equipment.map((e) => (
              <li key={e.name} className="rounded-soft border border-sand/15 bg-sand/5 p-5">
                <p className="text-[11px] uppercase tracking-wider text-gold">Apparatus</p>
                <p className="mt-2 font-display text-lg font-medium">{e.name}</p>
                <p className="mt-1 text-[13px] text-sand/85">{e.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
