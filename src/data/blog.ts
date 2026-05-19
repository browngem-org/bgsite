export type BlogPost = {
  slug: string;
  title: string;
  titleEn: string;
  date: string;
  thumb: string;
  excerpt: string;
  excerptEn: string;
  author: string;
  authorEn: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "kanji-2025",
    title: "今年のラボの漢字は「新」に決定",
    titleEn: "The lab's kanji of 2025: '新' (new)",
    date: "2025.12.12",
    thumb: "https://raw.githubusercontent.com/browngem-org/photo/main/blog/kanji2025.png",
    excerpt:
      "福田さんが選んだ今年のラボの漢字は、中藤さん提案の「新」になりました。新しいメンバー、新しい研究、新しい挑戦が詰まった一年でした。",
    excerptEn:
      "Prof. Fukuda picked '新' (new), suggested by Dr. Nakato, as this year's lab kanji. A year packed with new members, new research, and new challenges.",
    author: "佐藤 翼",
    authorEn: "Tsubasa Sato"
  }
];
