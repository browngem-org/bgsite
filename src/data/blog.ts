export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  thumb: string;
  excerpt: string;
  author: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "kanji-2025",
    title: "今年のラボの漢字は「新」に決定",
    date: "2025.12.12",
    thumb: "https://raw.githubusercontent.com/browngem-org/photo/main/blog/kanji2025.png",
    excerpt:
      "福田さんが選んだ今年のラボの漢字は、中藤さん提案の「新」になりました。新しいメンバー、新しい研究、新しい挑戦が詰まった一年でした。",
    author: "佐藤 翼"
  }
];
