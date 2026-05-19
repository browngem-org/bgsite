export function PageMasthead({
  eyebrow,
  title,
  italic,
  lede
}: {
  eyebrow: string;
  title: string;
  italic?: string;
  lede?: string;
}) {
  return (
    <section className="container-edge pt-12 md:pt-20">
      <div className="grid items-end gap-8 border-b border-hairline pb-10 md:grid-cols-12">
        <div className="md:col-span-8">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="display mt-5 text-[12vw] leading-[0.95] md:text-[88px]">
            {title}
            {italic ? <span className="italic font-light"> {italic}</span> : null}
          </h1>
        </div>
        {lede ? (
          <p className="md:col-span-4 md:pl-8 md:border-l md:border-hairline text-[14px] leading-[1.95] text-graphite/90">
            {lede}
          </p>
        ) : null}
      </div>
    </section>
  );
}
