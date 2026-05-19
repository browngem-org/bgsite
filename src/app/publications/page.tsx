import { PageMasthead } from "@/components/PageMasthead";
import { publicationsByYear } from "@/data/publications";

export const metadata = { title: "Publications" };

function renderAuthors(authors: string) {
  const parts = authors.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <span key={i} className="font-medium text-ink">
          {part.slice(2, -2)}
        </span>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export default function PublicationsPage() {
  const total = publicationsByYear.reduce((s, y) => s + y.items.length, 0);

  return (
    <div>
      <PageMasthead
        eyebrow="§ 02 — Publications"
        title="Selected"
        italic="Works."
        lede={`査読付き原著論文を中心に、研究室の出版実績をまとめています。総計 ${total} 編。`}
      />

      <section className="container-edge mt-12 space-y-20">
        {publicationsByYear.map((y) => (
          <section key={y.year}>
            <div className="flex items-baseline gap-6">
              <h2 className="font-serif text-6xl font-light leading-none md:text-7xl">{y.year}</h2>
              <span className="h-px flex-1 bg-hairline" />
              <span className="font-mono text-[11px] tracking-widest text-mute">
                {y.items.length} {y.items.length === 1 ? "paper" : "papers"}
              </span>
            </div>

            <ol className="mt-10 divide-y divide-hairline border-t border-hairline">
              {y.items.map((p, i) => (
                <li key={i} className="grid grid-cols-12 gap-4 py-7 md:gap-8">
                  <div className="col-span-12 md:col-span-1">
                    <p className="font-mono text-[11px] tracking-widest text-mute">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                  </div>
                  <div className="col-span-12 md:col-span-11">
                    <p className="font-serif text-[19px] leading-snug text-ink md:text-[20px]">
                      {p.title}
                    </p>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-graphite/90">
                      {renderAuthors(p.authors)}
                    </p>
                    <p className="mt-1 font-serif text-[13.5px] italic text-terracotta">
                      {p.journal}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </section>
    </div>
  );
}
