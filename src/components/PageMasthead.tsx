export function PageMasthead({
  eyebrow,
  title,
  accent,
  lede
}: {
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  accent?: React.ReactNode;
  lede?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-sandLight">
      <div
        aria-hidden
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange/10 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-teal/10 blur-3xl"
      />
      <div className="container-edge relative grid gap-10 py-20 md:grid-cols-12 md:py-24">
        <div className="md:col-span-8">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="display-h mt-4 text-[44px] leading-[1.05] md:text-[72px]">
            {title}
            {accent ? <span className="text-orange"> {accent}</span> : null}
          </h1>
        </div>
        {lede ? (
          <div className="md:col-span-4 md:self-end">
            <p className="text-[14.5px] leading-[1.95] text-bark/85">{lede}</p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
