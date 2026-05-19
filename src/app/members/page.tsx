"use client";

import Image from "next/image";
import { PageMasthead } from "@/components/PageMasthead";
import { pi, memberGroups, type Member } from "@/data/members";
import { useLang } from "@/i18n/LanguageProvider";
import { T } from "@/components/T";

function MemberCard({ member }: { member: Member }) {
  const { lang } = useLang();
  const grade = lang === "en" && member.gradeEn ? member.gradeEn : member.grade;
  const field = lang === "en" && member.fieldEn ? member.fieldEn : member.field;
  const location = lang === "en" && member.locationEn ? member.locationEn : member.location;
  const affs =
    lang === "en" && member.affiliationsEn ? member.affiliationsEn : member.affiliations;
  const likes = lang === "en" && member.likesEn ? member.likesEn : member.likes;

  return (
    <article className="card-soft overflow-hidden">
      <div className="relative aspect-[4/5] w-full bg-sandDeep">
        <Image
          src={member.photo}
          alt={lang === "en" ? member.nameEn : member.name}
          fill
          sizes="(max-width: 768px) 100vw, 320px"
          className="object-cover"
        />
        {grade && (
          <span className="absolute left-3 top-3 chip-orange">{grade}</span>
        )}
      </div>
      <div className="p-5">
        <h4 className="font-display text-[18px] font-medium leading-tight text-bark">
          {lang === "en" ? member.nameEn : member.name}
        </h4>
        <p className="mt-0.5 text-[12px] tracking-wider text-barkMute">
          {lang === "en" ? member.name : member.nameEn}
        </p>
        {field && <p className="mt-3 text-[13px] text-teal">{field}</p>}
        {affs?.length ? (
          <ul className="mt-2 space-y-0.5 text-[11.5px] leading-snug text-barkSoft">
            {affs.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        ) : null}
        <ul className="mt-3 space-y-1 text-[12px] text-bark/85">
          {location && <li>↳ {location}</li>}
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
        {likes && (
          <p className="mt-4 rounded-soft bg-sand/60 px-3 py-2.5 text-[12px] leading-snug text-bark/80">
            “{likes}”
          </p>
        )}
      </div>
    </article>
  );
}

export default function MembersPage() {
  const { lang } = useLang();
  const piTitle = lang === "en" && pi.titleEn ? pi.titleEn : pi.title;
  const piField = lang === "en" && pi.fieldEn ? pi.fieldEn : pi.field;
  const piAffs = lang === "en" && pi.affiliationsEn ? pi.affiliationsEn : pi.affiliations;
  const piLocation = lang === "en" && pi.locationEn ? pi.locationEn : pi.location;
  const piLikes = lang === "en" && pi.likesEn ? pi.likesEn : pi.likes;

  return (
    <div>
      <PageMasthead
        eyebrow="Members"
        title={<T ja="メンバー" en="Members" />}
        accent={<T ja="The people." en="The people." />}
        lede={
          <T
            ja="研究を支えるのは、共に問いと向き合うひとり一人のメンバーです。"
            en="The lab is shaped by everyone who works through the same questions, together."
          />
        }
      />

      {/* PI feature card */}
      <section className="container-edge mt-16">
        <article className="overflow-hidden rounded-chunk bg-ivory shadow-soft">
          <div className="grid gap-0 md:grid-cols-12">
            <div className="relative md:col-span-5">
              <div className="relative h-full min-h-[420px] w-full">
                <Image
                  src={pi.photo}
                  alt={lang === "en" ? pi.nameEn : pi.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 520px"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-7 p-8 md:p-12">
              <span className="chip-teal">Principal Investigator</span>
              <h3 className="display-h mt-5 text-4xl md:text-5xl">
                {lang === "en" ? pi.nameEn : pi.name}
              </h3>
              <p className="mt-2 text-[14px] tracking-wider text-barkMute">
                {lang === "en" ? pi.name : pi.nameEn}
              </p>
              <p className="mt-5 inline-flex rounded-pill bg-orange/10 px-3.5 py-1.5 text-[12px] font-medium text-orange">
                {piTitle}
              </p>
              <ul className="mt-5 space-y-1 text-[13.5px] text-bark/85">
                {piAffs?.map((a) => (
                  <li key={a}>· {a}</li>
                ))}
              </ul>
              <p className="mt-5 text-[15px] font-medium text-teal">{piField}</p>
              <ul className="mt-5 space-y-1 text-[13px] text-bark">
                <li>↳ {piLocation}</li>
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
              {piLikes && (
                <p className="mt-6 rounded-soft bg-sand/70 px-4 py-3 text-[13.5px] text-bark/85">
                  <T ja="好きなもの — " en="Loves — " />
                  {piLikes}
                </p>
              )}
            </div>
          </div>
        </article>
      </section>

      {memberGroups.map((group) => (
        <section key={group.heading} className="container-edge mt-20">
          <div className="mb-8 flex flex-wrap items-baseline gap-3">
            <h2 className="display-h text-3xl text-bark md:text-[32px]">
              {lang === "en" ? group.headingEn : group.heading}
            </h2>
            {(group.subheading || group.subheadingEn) && (
              <p className="text-[14px] text-barkMute">
                — {lang === "en" ? group.subheadingEn : group.subheading}
              </p>
            )}
            <span className="ml-auto chip">
              {String(group.members.length).padStart(2, "0")}{" "}
              {lang === "en" ? "members" : "名"}
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
