import { PageMasthead } from "@/components/PageMasthead";
import { NewsFilter } from "@/components/NewsFilter";
import { T } from "@/components/T";

export const metadata = { title: "News" };

export default function NewsPage() {
  return (
    <div>
      <PageMasthead
        eyebrow="News"
        title={<T ja="お知らせ" en="News" />}
        accent={<T ja="& Notes." en="& Notes." />}
        lede={
          <T
            ja="論文発表、受賞、メディア掲載など、研究室の最新トピックスをまとめています。"
            en="Recent papers, awards, and media appearances from the lab."
          />
        }
      />
      <section className="container-edge mt-16">
        <NewsFilter />
      </section>
    </div>
  );
}
