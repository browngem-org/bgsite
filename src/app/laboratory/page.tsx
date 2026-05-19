import Image from "next/image";
import { PageMasthead } from "@/components/PageMasthead";
import { LabHistoryTabs } from "@/components/LabHistoryTabs";
import { EquipmentList } from "@/components/EquipmentList";
import { labScenes } from "@/data/lab";
import { T } from "@/components/T";

export const metadata = { title: "Our Laboratory" };

export default function LaboratoryPage() {
  return (
    <div>
      <PageMasthead
        eyebrow="Our Laboratory"
        title={<T ja="ラボの中身" en="Our Laboratory" />}
        accent={<T ja="Inside the lab." en="Inside the lab." />}
        lede={
          <T
            ja="鶴岡の地で、アットホームな雰囲気のなか、研究に集中できる環境作りを大切にしています。"
            en="A welcoming environment in Tsuruoka where researchers can focus on the work."
          />
        }
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
            <h2 className="display-h mt-3 text-3xl md:text-4xl">
              <T ja="研究室の日常" en="A day in the lab" />
            </h2>
          </div>
          <p className="hidden text-[13px] text-barkMute md:block">
            <T ja="A glimpse of daily life" en="A glimpse of daily life" />
          </p>
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
            <h2 className="display-h mt-3 text-3xl md:text-4xl">
              <T ja="研究室の歴史" en="Our history" />
            </h2>
          </div>
          <p className="hidden text-[13px] italic text-barkMute md:block">
            <T
              ja="いい研究をするためには、ときに遊ぶことも大事です"
              en="Good research, with a side of play"
            />
          </p>
        </div>

        <div className="mt-10">
          <LabHistoryTabs />
        </div>
      </section>

      <section className="container-edge mt-28">
        <div className="rounded-chunk bg-bark p-10 text-sand md:p-14">
          <p className="eyebrow !text-gold">Principal equipment</p>
          <h2 className="display-h mt-3 text-3xl text-sand md:text-4xl">
            <T ja="主な設備" en="Principal equipment" />
          </h2>

          <EquipmentList />
        </div>
      </section>
    </div>
  );
}
