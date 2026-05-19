import Image from "next/image";
import { PageMasthead } from "@/components/PageMasthead";
import { LabHistoryTabs } from "@/components/LabHistoryTabs";
import { labScenes, equipment } from "@/data/lab";

export const metadata = { title: "Our Laboratory" };

export default function LaboratoryPage() {
  return (
    <div>
      <PageMasthead
        eyebrow="§ 04 — Our Laboratory"
        title="Inside"
        italic="the lab."
        lede="鶴岡の地で、アットホームな空気のなか、研究に集中できる環境作りを大切にしています。"
      />

      <section className="container-edge mt-12">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-cream photo-mono">
          <Image
            src="https://raw.githubusercontent.com/browngem-org/photo/14cba80a53595be1f1e1b5dc7afb2e92706666bc/laboratory/LaboKorea.jpg"
            alt="Group photo"
            fill
            sizes="(max-width: 768px) 100vw, 1180px"
            className="object-cover"
            priority
          />
        </div>
      </section>

      <section className="container-edge mt-24">
        <div className="flex items-baseline justify-between gap-6">
          <h2 className="display text-4xl md:text-5xl">
            Lab <span className="italic font-light">scenes.</span>
          </h2>
          <p className="font-serif text-sm italic text-mute">— a glimpse of daily life</p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
          {labScenes.map((p, i) => (
            <figure key={i} className="group">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream photo-mono">
                <Image
                  src={p.src}
                  alt={p.caption}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-2 font-serif text-[12px] italic text-mute">
                Plate {String(i + 1).padStart(2, "0")} — {p.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="container-edge mt-28">
        <div className="flex items-baseline justify-between gap-6">
          <h2 className="display text-4xl md:text-5xl">
            Our <span className="italic font-light">history.</span>
          </h2>
          <p className="font-serif text-sm italic text-mute">
            — いい研究をするためには、ときに遊ぶことも大事です
          </p>
        </div>

        <div className="mt-10">
          <LabHistoryTabs />
        </div>
      </section>

      <section className="container-edge mt-28">
        <div className="flex items-baseline justify-between gap-6">
          <h2 className="display text-4xl md:text-5xl">
            Principal <span className="italic font-light">equipment.</span>
          </h2>
        </div>
        <ul className="mt-10 grid gap-x-10 gap-y-6 border-t border-hairline pt-8 md:grid-cols-2 lg:grid-cols-3">
          {equipment.map((e) => (
            <li key={e.name} className="border-b border-hairline pb-5">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-terracotta">
                Apparatus
              </p>
              <p className="mt-1 font-serif text-xl">{e.name}</p>
              <p className="mt-1 text-[13.5px] text-graphite/85">{e.detail}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
