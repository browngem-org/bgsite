import { PageMasthead } from "@/components/PageMasthead";
import { NewsFilter } from "@/components/NewsFilter";

export const metadata = { title: "News" };

export default function NewsPage() {
  return (
    <div>
      <PageMasthead
        eyebrow="News"
        title="お知らせ"
        accent="& Notes."
        lede="論文発表、受賞、メディア掲載など、研究室の最新トピックスをまとめています。"
      />
      <section className="container-edge mt-16">
        <NewsFilter />
      </section>
    </div>
  );
}
