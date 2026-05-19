export type NewsCategory = "paper" | "award" | "event" | "media" | "info";

export type NewsItem = {
  date: string;
  category: NewsCategory;
  body: string;
  href?: string;
  hrefLabel?: string;
};

export const newsItems: NewsItem[] = [
  {
    date: "2025.12.26",
    category: "media",
    body: "福田さんがPIVOTのYouTubeチャンネルに出演しました。",
    href: "https://www.youtube.com/watch?v=8nhk7XUV-PM",
    hrefLabel: "詳細はこちら"
  },
  {
    date: "2025.12.12",
    category: "event",
    body: "韓国のHEM Farmaと共同で韓国研修を行いました。"
  },
  {
    date: "2025.12.11",
    category: "info",
    body: "Webサイトを開設しました。"
  },
  {
    date: "2025.11.23",
    category: "award",
    body: "第26回慶應SFC学会学術交流大会にて、四宮彩名さん(M1)のポスター発表が奨励賞に選ばれました。"
  },
  {
    date: "2025.11.17",
    category: "paper",
    body: "石井千晴さんの食事と腸内環境に関する研究成果が国際科学誌『Gut Microbes Reports』に掲載されました。",
    href: "https://www.tandfonline.com/doi/full/10.1080/29933935.2025.2574930#abstract",
    hrefLabel: "詳細はこちら"
  },
  {
    date: "2025.10.15",
    category: "paper",
    body: "池田陽人さん(M2)と四宮彩名さん(M1)による総説が『日本医師会雑誌』に掲載されました。",
    href: "https://www.med.or.jp/cme/jjma/newmag/15402s/15402scon.html",
    hrefLabel: "詳細はこちら"
  },
  {
    date: "2025.06.24",
    category: "award",
    body: "第29回腸内細菌学会学術集会にて、四宮彩名さん(学部3年)の発表が最優秀発表賞に選ばれました。"
  },
  {
    date: "2025.01.06",
    category: "award",
    body: "福田さんが「世界で影響力のある研究者(Highly Cited Researchers 2024)」に選ばれました。",
    href: "https://www.keio.ac.jp/ja/news/2024/12/10/27-163895/",
    hrefLabel: "詳細はこちら"
  },
  {
    date: "2024.11.20",
    category: "award",
    body: "第4回腸内デザイン学会年会にて、四宮彩名さん(学部3年)の発表が最優秀発表賞に選ばれました。"
  },
  {
    date: "2024.08.09",
    category: "award",
    body: "第97回日本細菌学会総会にて、四宮彩名さん(学部2年)の発表が優秀発表賞に選ばれました。"
  }
];

export const categoryLabel: Record<NewsCategory, string> = {
  paper: "Paper",
  award: "Award",
  event: "Event",
  media: "Media",
  info: "Info"
};
