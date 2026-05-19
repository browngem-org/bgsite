import { PageMasthead } from "@/components/PageMasthead";
import { publicationsByYear } from "@/data/publications";

export const metadata = { title: "Publications" };

function renderAuthors(authors: string) {
  const parts = authors.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <span key={i} className="font-semibold text-orange">
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
        eyebrow="Publications"
        title="論文一覧"
        accent="Selected Works."
        lede={`査読付き原著論文を中心に、研究室の出版実績をまとめています。総計 ${total} 編。`}
      />

      <section className="container-edge mt-16 space-y-20">
        {publicationsByYear.map((y) => (
          <section key={y.year}>
            <div className="flex items-baseline gap-5">
              <h2 className="display-h text-5xl text-bark md:text-6xl">{y.year}</h2>
              <span className="h-px flex-1 bg-line" />
              <span className="font-mono text-[11px] tracking-wider text-barkMute">
                {y.items.length} {y.items.length === 1 ? "paper" : "papers"}
              </span>
            </div>

            <ol className="mt-8 space-y-4">
              {y.items.map((p, i) => (
                <li
                  key={i}
                  className="card-soft grid grid-cols-12 gap-4 p-6 md:gap-8 md:p-8"
                >
                  <div className="col-span-12 md:col-span-1">
                    <span className="chip">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="col-span-12 md:col-span-11">
                    <p className="font-display text-[18.5px] leading-snug text-bark md:text-[19.5px]">
                      {p.title}
                    </p>
                    <p className="mt-2.5 text-[13.5px] leading-relaxed text-bark/85">
                      {renderAuthors(p.authors)}
                    </p>
                    <p className="mt-1 text-[13px] text-teal">
                      <span className="font-medium">{p.journal}</span>
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
