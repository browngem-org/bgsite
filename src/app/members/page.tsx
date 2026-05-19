import Image from "next/image";
import { PageMasthead } from "@/components/PageMasthead";
import { pi, memberGroups, type Member } from "@/data/members";

export const metadata = { title: "Members" };

function MemberCard({ member }: { member: Member }) {
  return (
    <article className="card-soft overflow-hidden">
      <div className="relative aspect-[4/5] w-full bg-sandDeep">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          sizes="(max-width: 768px) 100vw, 320px"
          className="object-cover"
        />
        {member.grade && (
          <span className="absolute left-3 top-3 chip-orange">{member.grade}</span>
        )}
      </div>
      <div className="p-5">
        <h4 className="font-display text-[18px] font-medium leading-tight text-bark">
          {member.name}
        </h4>
        <p className="mt-0.5 text-[12px] tracking-wider text-barkMute">{member.nameEn}</p>
        {member.field && <p className="mt-3 text-[13px] text-teal">{member.field}</p>}
        {member.affiliations?.length ? (
          <ul className="mt-2 space-y-0.5 text-[11.5px] leading-snug text-barkSoft">
            {member.affiliations.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        ) : null}
        <ul className="mt-3 space-y-1 text-[12px] text-bark/85">
          {member.location && <li>📍 {member.location}</li>}
          {member.email && <li className="font-mono">✉ {member.email}</li>}
          {member.links?.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="link-grow font-medium text-orange"
              >
                ↗ {l.label}
              </a>
            </li>
          ))}
        </ul>
        {member.likes && (
          <p className="mt-4 rounded-soft bg-sand/60 px-3 py-2.5 text-[12px] leading-snug text-bark/80">
            “{member.likes}”
          </p>
        )}
      </div>
    </article>
  );
}

export default function MembersPage() {
  return (
    <div>
      <PageMasthead
        eyebrow="Members"
        title="メンバー"
        accent="The people."
        lede="研究を支えるのは、共に問いと向き合うひとり一人のメンバーです。"
      />

      {/* PI feature card */}
      <section className="container-edge mt-16">
        <article className="overflow-hidden rounded-chunk bg-ivory shadow-soft">
          <div className="grid gap-0 md:grid-cols-12">
            <div className="relative md:col-span-5">
              <div className="relative h-full min-h-[420px] w-full">
                <Image
                  src={pi.photo}
                  alt={pi.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 520px"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-7 p-8 md:p-12">
              <span className="chip-teal">Principal Investigator</span>
              <h3 className="display-h mt-5 text-4xl md:text-5xl">{pi.name}</h3>
              <p className="mt-2 text-[14px] tracking-wider text-barkMute">{pi.nameEn}</p>
              <p className="mt-5 inline-flex rounded-pill bg-orange/10 px-3.5 py-1.5 text-[12px] font-medium text-orange">
                {pi.title}
              </p>
              <ul className="mt-5 space-y-1 text-[13.5px] text-bark/85">
                {pi.affiliations?.map((a) => (
                  <li key={a}>· {a}</li>
                ))}
              </ul>
              <p className="mt-5 text-[15px] font-medium text-teal">{pi.field}</p>
              <ul className="mt-5 space-y-1 text-[13px] text-bark">
                <li>📍 {pi.location}</li>
                <li className="font-mono">✉ {pi.email}</li>
                {pi.links?.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="link-grow font-medium text-orange"
                    >
                      ↗ {l.label}
                    </a>
                  </li>
                ))}
              </ul>
              {pi.likes && (
                <p className="mt-6 rounded-soft bg-sand/70 px-4 py-3 text-[13.5px] text-bark/85">
                  好きなもの — {pi.likes}
                </p>
              )}
            </div>
          </div>
        </article>
      </section>

      {memberGroups.map((group) => (
        <section key={group.heading} className="container-edge mt-20">
          <div className="mb-8 flex flex-wrap items-baseline gap-3">
            <h2 className="display-h text-3xl text-bark md:text-[32px]">{group.heading}</h2>
            {group.subheading && (
              <p className="text-[14px] text-barkMute">— {group.subheading}</p>
            )}
            <span className="ml-auto chip">
              {String(group.members.length).padStart(2, "0")} members
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {group.members.map((m, i) => (
              <MemberCard key={`${m.nameEn}-${i}`} member={m} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
