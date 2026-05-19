import Image from "next/image";
import { PageMasthead } from "@/components/PageMasthead";
import { pi, memberGroups, type Member } from "@/data/members";

export const metadata = { title: "Members" };

function MemberCard({ member }: { member: Member }) {
  return (
    <article className="group grid grid-cols-[120px_1fr] gap-5">
      <div className="relative aspect-[4/5] w-[120px] overflow-hidden bg-cream photo-mono">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          sizes="120px"
          className="object-cover"
        />
      </div>
      <div className="min-w-0">
        <h4 className="font-serif text-lg leading-tight">{member.name}</h4>
        <p className="font-serif text-[12px] italic text-mute">{member.nameEn}</p>
        {member.grade && (
          <p className="mt-2 font-mono text-[10.5px] uppercase tracking-[0.2em] text-terracotta">
            {member.grade}
          </p>
        )}
        {member.field && <p className="mt-2 text-[12.5px] text-graphite">{member.field}</p>}
        {member.affiliations?.length ? (
          <ul className="mt-2 space-y-0.5 text-[11.5px] leading-snug text-mute">
            {member.affiliations.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        ) : null}
        <ul className="mt-3 space-y-0.5 text-[11.5px] text-graphite">
          {member.location && <li>↳ {member.location}</li>}
          {member.email && <li className="font-mono">✉ {member.email}</li>}
          {member.links?.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="link-underline text-ink"
              >
                ↗ {l.label}
              </a>
            </li>
          ))}
        </ul>
        {member.likes && (
          <p className="mt-3 border-t border-hairline pt-2 font-serif text-[12px] italic leading-snug text-graphite/85">
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
        eyebrow="§ 03 — Members"
        title="The"
        italic="people."
        lede="研究を支えるのは、共に問いと向き合うひとり一人のメンバーです。"
      />

      <section className="container-edge mt-14">
        <div className="mb-8 flex items-baseline gap-4">
          <p className="eyebrow">Principal Investigator</p>
          <span className="h-px flex-1 bg-hairline" />
        </div>

        <div className="grid gap-10 md:grid-cols-[280px_1fr]">
          <div className="relative aspect-[4/5] w-full max-w-[280px] overflow-hidden bg-cream photo-mono">
            <Image
              src={pi.photo}
              alt={pi.name}
              fill
              sizes="(max-width: 768px) 100vw, 280px"
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-serif text-5xl font-light leading-none">{pi.name}</h3>
            <p className="mt-2 font-serif text-lg italic text-mute">{pi.nameEn}</p>
            <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-terracotta">
              {pi.title}
            </p>
            <ul className="mt-3 space-y-0.5 text-[13.5px] text-graphite">
              {pi.affiliations?.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
            <p className="mt-5 font-serif text-[15px] italic">{pi.field}</p>
            <ul className="mt-5 space-y-1 text-[13px] text-graphite">
              <li>↳ {pi.location}</li>
              <li className="font-mono">✉ {pi.email}</li>
              {pi.links?.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline text-ink"
                  >
                    ↗ {l.label}
                  </a>
                </li>
              ))}
            </ul>
            {pi.likes && (
              <p className="mt-6 border-t border-hairline pt-4 font-serif italic text-graphite/85">
                好きなもの — {pi.likes}
              </p>
            )}
          </div>
        </div>
      </section>

      {memberGroups.map((group) => (
        <section key={group.heading} className="container-edge mt-24">
          <div className="mb-10 flex items-baseline gap-4">
            <p className="eyebrow">{group.heading}</p>
            {group.subheading && (
              <p className="font-serif text-sm italic text-mute">— {group.subheading}</p>
            )}
            <span className="h-px flex-1 bg-hairline" />
            <span className="font-mono text-[11px] tracking-widest text-mute">
              {String(group.members.length).padStart(2, "0")}
            </span>
          </div>

          <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {group.members.map((m, i) => (
              <MemberCard key={`${m.nameEn}-${i}`} member={m} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
