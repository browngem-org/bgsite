/**
 * 🐱 OpenAlex citation fetcher.
 * Free, no key required. Uses the "polite pool" via the mailto param.
 * Docs: https://docs.openalex.org/
 */

export type WorkInfo = {
  citations: number;
  doi?: string;
  openalexId?: string;
};

const POLITE_MAILTO = "fukuda-lab@iab.keio.ac.jp";

export async function fetchCitation(
  title: string,
  year: string
): Promise<WorkInfo | null> {
  const url = new URL("https://api.openalex.org/works");
  url.searchParams.set("search", title);
  url.searchParams.set("per_page", "1");
  url.searchParams.set("select", "display_name,cited_by_count,doi,id,publication_year");
  // 🐱 narrow by year ± 1 to handle preprint / online-publication year drift
  const y = Number(year);
  if (!Number.isNaN(y)) {
    url.searchParams.set("filter", `from_publication_date:${y - 1}-01-01,to_publication_date:${y + 1}-12-31`);
  }
  url.searchParams.set("mailto", POLITE_MAILTO);

  try {
    const res = await fetch(url.toString(), {
      // 🐱 revalidate every 24h — citation counts move slowly
      next: { revalidate: 86400 },
      headers: { "User-Agent": `bgsite (mailto:${POLITE_MAILTO})` }
    });
    if (!res.ok) return null;
    const data = (await res.json()) as {
      results?: Array<{
        display_name?: string;
        cited_by_count?: number;
        doi?: string;
        id?: string;
      }>;
    };
    const work = data.results?.[0];
    if (!work) return null;
    return {
      citations: work.cited_by_count ?? 0,
      doi: work.doi ?? undefined,
      openalexId: work.id ?? undefined
    };
  } catch {
    return null;
  }
}

/** Map with bounded concurrency. */
export async function throttledMap<T, R>(
  items: T[],
  concurrency: number,
  fn: (item: T, idx: number) => Promise<R>
): Promise<R[]> {
  const results: R[] = new Array(items.length);
  let i = 0;
  const worker = async () => {
    while (true) {
      const idx = i++;
      if (idx >= items.length) return;
      results[idx] = await fn(items[idx], idx);
    }
  };
  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, worker));
  return results;
}
