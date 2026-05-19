import { PageMasthead } from "@/components/PageMasthead";
import { NewsFilter } from "@/components/NewsFilter";

export const metadata = { title: "News" };

export default function NewsPage() {
  return (
    <div>
      <PageMasthead
        eyebrow="§ 05 — News"
        title="News &"
        italic="Notes."
        lede="論文発表、受賞、メディア掲載など、研究室の最新トピックスを年別にまとめています。"
      />
      <section className="container-edge mt-14">
        <NewsFilter />
      </section>
    </div>
  );
}
