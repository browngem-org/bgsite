import Script from "next/script";
import { PageMasthead } from "@/components/PageMasthead";
import { PublicationsCount } from "@/components/PublicationsCount";
import { TotalPapers } from "@/components/TotalPapers";
import { publicationsByYear } from "@/data/publications";
import { fetchCitation, throttledMap, type WorkInfo } from "@/lib/openalex";
import { T } from "@/components/T";

// 🐱 strip the "https://doi.org/" prefix Altmetric prefers the bare form
function bareDoi(doi?: string): string | null {
  if (!doi) return null;
  return doi.replace(/^https?:\/\/(dx\.)?doi\.org\//i, "");
}

export const metadata = { title: "Publications" };
// 🐱 re-fetch citation counts daily
export const revalidate = 86400;

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

type Item = { title: string; authors: string; journal: string };
type Enriched = Item & { cite?: WorkInfo | null };

async function enrich(): Promise<Array<{ year: string; items: Enriched[] }>> {
  const flat = publicationsByYear.flatMap((y) =>
    y.items.map((p) => ({ year: y.year, ...p }))
  );

  const cites = await throttledMap(flat, 6, (p) => fetchCitation(p.title, p.year));

  const byYear = new Map<string, Enriched[]>();
  flat.forEach((p, i) => {
    if (!byYear.has(p.year)) byYear.set(p.year, []);
    byYear.get(p.year)!.push({
      title: p.title,
      authors: p.authors,
      journal: p.journal,
      cite: cites[i]
    });
  });
  return [...byYear.entries()].map(([year, items]) => ({ year, items }));
}

export default async function PublicationsPage() {
  const enriched = await enrich();
  const totalPapers = publicationsByYear.reduce((s, y) => s + y.items.length, 0);
  const totalCitations = enriched.reduce(
    (s, y) => s + y.items.reduce((ss, it) => ss + (it.cite?.citations ?? 0), 0),
    0
  );

  return (
    <div>
      {/* 🐱 Altmetric embed badge script — auto-renders any .altmetric-embed div on the page */}
      <Script
        src="https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js"
        strategy="lazyOnload"
      />

      <PageMasthead
        eyebrow="Publications"
        title={<T ja="論文一覧" en="Publications" />}
        accent={<T ja="Selected Works." en="Selected Works." />}
        lede={
          <T
            ja="査読付き原著論文を中心に、研究室の出版実績をまとめています。"
            en="Peer-reviewed original papers and reviews from the lab."
          />
        }
      />

      {/* live stats strip */}
      <section className="container-edge mt-10">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <TotalPapers count={totalPapers} />
          <div className="rounded-chunk bg-bark text-sand p-6">
            <p className="text-[11px] uppercase tracking-wider text-gold">
              Total citations
            </p>
            <p className="mt-2 font-display text-4xl font-semibold tabular-nums">
              {totalCitations.toLocaleString()}
            </p>
            <p className="mt-1 text-[11.5px] text-sand/70">
              via OpenAlex · <T ja="毎日更新" en="updated daily" />
            </p>
          </div>
          <div className="rounded-chunk bg-teal text-sand p-6">
            <p className="text-[11px] uppercase tracking-wider text-gold">
              <T ja="活動期間" en="Active since" />
            </p>
            <p className="mt-2 font-display text-4xl font-semibold tabular-nums">2012</p>
            <p className="mt-1 text-[11.5px] text-sand/70">
              {publicationsByYear[publicationsByYear.length - 1]?.year} —{" "}
              {publicationsByYear[0]?.year}
            </p>
          </div>
        </div>
      </section>

      <section className="container-edge mt-16 space-y-20">
        {enriched.map((y) => (
          <section key={y.year}>
            <div className="flex items-baseline gap-5">
              <h2 className="display-h text-5xl text-bark md:text-6xl">{y.year}</h2>
              <span className="h-px flex-1 bg-line" />
              <PublicationsCount count={y.items.length} />
            </div>

            <ol className="mt-8 space-y-4">
              {y.items.map((p, i) => (
                <li
                  key={i}
                  className="card-soft grid grid-cols-12 gap-4 p-6 md:gap-6 md:p-8"
                >
                  <div className="col-span-12 md:col-span-1">
                    <span className="chip">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="col-span-12 md:col-span-8 lg:col-span-9">
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

                  {/* 🐱 right stats column — always at the right edge */}
                  <div className="col-span-12 md:col-span-3 lg:col-span-2 flex items-start justify-end gap-3 md:flex-col md:items-end md:gap-3">
                    {bareDoi(p.cite?.doi) && (
                      <div
                        className="altmetric-embed flex-shrink-0"
                        data-badge-type="donut"
                        data-badge-popover="left"
                        data-link-target="_blank"
                        data-hide-no-mentions="true"
                        data-doi={bareDoi(p.cite?.doi) ?? ""}
                      />
                    )}
                    {p.cite ? (
                      <a
                        href={p.cite.doi ?? p.cite.openalexId ?? "#"}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-pill border border-orange/30 bg-orange/10 px-3 py-1.5 text-[11.5px] font-medium text-orange transition-colors hover:bg-orange hover:text-white"
                        aria-label={`${p.cite.citations} citations`}
                      >
                        <svg viewBox="0 0 24 24" className="h-3 w-3 fill-current" aria-hidden>
                          <path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z" />
                        </svg>
                        <span className="tabular-nums">{p.cite.citations}</span>
                        <span className="text-[10px] opacity-70">cites</span>
                      </a>
                    ) : null}
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
