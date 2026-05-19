export type NewsCategory = "paper" | "award" | "event" | "media" | "info";

export type NewsImage = {
  src: string;
  alt: string;
};

export type NewsItem = {
  date: string;
  category: NewsCategory;
  body: string;
  bodyEn: string;
  href?: string;
  hrefLabel?: string;
  hrefLabelEn?: string;
  /** 🐱 optional — when set, renders a thumbnail in feeds and a hero on /news cards */
  image?: NewsImage;
};

export const newsItems: NewsItem[] = [
  {
    date: "2026.12.31",
    category: "paper",
    body:
      "中藤学さんらのモノクローナル抗体を用いた Bifidobacterium longum の選択的濃縮に関する研究成果が国際科学誌『Gut Microbes Reports』に掲載されました。",
    bodyEn:
      "Gaku Nakato et al. published a study on monoclonal-antibody-based selective enrichment of Bifidobacterium longum in Gut Microbes Reports.",
    href: "https://doi.org/10.1080/29933935.2026.2663732",
    hrefLabel: "詳細はこちら",
    hrefLabelEn: "Read the paper"
  },
  {
    date: "2026.03.12",
    category: "paper",
    body:
      "尾花望さんらのヒト腸内細菌 Mediterraneibacter gnavus の遺伝学的ツールキット開発と莢膜多糖の定着因子に関する研究成果が国際科学誌『Nature Communications』に掲載されました。",
    bodyEn:
      "Nozomu Obana et al. published a study on a genetic toolkit for Mediterraneibacter gnavus and capsular polysaccharides as a colonization factor in Nature Communications.",
    href: "https://doi.org/10.1038/s41467-026-69022-x",
    hrefLabel: "詳細はこちら",
    hrefLabelEn: "Read the paper"
  },
  {
    date: "2026.03.12",
    category: "paper",
    body:
      "市村涼葉さんらの骨髄移植ドナー由来と糞便微生物移植後の腸内細菌叢組成の関連に関する研究成果が国際科学誌『Scientific Reports』に掲載されました。",
    bodyEn:
      "Ryoha Ichimura et al. published a study on the association between bone-marrow-donor origin and gut microbiota composition after FMT in mice in Scientific Reports.",
    href: "https://doi.org/10.1038/s41598-026-36933-0",
    hrefLabel: "詳細はこちら",
    hrefLabelEn: "Read the paper"
  },
  {
    date: "2026.02.12",
    category: "paper",
    body:
      "四宮彩名さんらのヒト大腸がん患者の便から分離した Solobacterium moorei 10714-02 のゲノム解読に関する研究成果が国際科学誌『Microbiology Resource Announcements』に掲載されました。",
    bodyEn:
      "Ayana Shinomiya et al. published the complete genome sequence of Solobacterium moorei 10714-02 isolated from a human colorectal cancer patient in Microbiology Resource Announcements.",
    href: "https://doi.org/10.1128/mra.00981-25",
    hrefLabel: "詳細はこちら",
    hrefLabelEn: "Read the paper"
  },
  {
    date: "2025.12.26",
    category: "media",
    body: "福田さんがPIVOTのYouTubeチャンネルに出演しました。",
    bodyEn: "Prof. Fukuda appeared on the PIVOT YouTube channel.",
    href: "https://www.youtube.com/watch?v=8nhk7XUV-PM",
    hrefLabel: "詳細はこちら",
    hrefLabelEn: "Watch the episode"
  },
  {
    date: "2025.12.12",
    category: "event",
    body: "韓国のHEM Farmaと共同で韓国研修を行いました。",
    bodyEn: "We held a joint training program with HEM Farma in Korea."
  },
  {
    date: "2025.12.11",
    category: "info",
    body: "Webサイトを開設しました。",
    bodyEn: "Launched the new website."
  },
  {
    date: "2025.11.23",
    category: "award",
    body: "第26回慶應SFC学会学術交流大会にて、四宮彩名さん(M1)のポスター発表が奨励賞に選ばれました。",
    bodyEn:
      "Ayana Shinomiya (M1) received the Encouragement Award for her poster at the 26th Keio SFC Academic Society."
  },
  {
    date: "2025.11.17",
    category: "paper",
    body:
      "石井千晴さんの食事と腸内環境に関する研究成果が国際科学誌『Gut Microbes Reports』に掲載されました。",
    bodyEn:
      "Chiharu Ishii's study on diet and the gut microbiome was published in Gut Microbes Reports.",
    href: "https://www.tandfonline.com/doi/full/10.1080/29933935.2025.2574930#abstract",
    hrefLabel: "詳細はこちら",
    hrefLabelEn: "Read the paper"
  },
  {
    date: "2025.10.15",
    category: "paper",
    body:
      "池田陽人さん(M2)と四宮彩名さん(M1)による総説が『日本医師会雑誌』に掲載されました。",
    bodyEn:
      "Reviews by Haruto Ikeda (M2) and Ayana Shinomiya (M1) were published in the Journal of the Japan Medical Association.",
    href: "https://www.med.or.jp/cme/jjma/newmag/15402s/15402scon.html",
    hrefLabel: "詳細はこちら",
    hrefLabelEn: "Read the reviews"
  },
  {
    date: "2025.06.24",
    category: "award",
    body:
      "第29回腸内細菌学会学術集会にて、四宮彩名さん(学部3年)の発表が最優秀発表賞に選ばれました。",
    bodyEn:
      "Ayana Shinomiya (B3) received the Best Presentation Award at the 29th Annual Meeting of the Japanese Society for Intestinal Microbiology."
  },
  {
    date: "2025.01.06",
    category: "award",
    body:
      "福田さんが「世界で影響力のある研究者(Highly Cited Researchers 2024)」に選ばれました。",
    bodyEn:
      "Prof. Fukuda was named one of the world's Highly Cited Researchers 2024.",
    href: "https://www.keio.ac.jp/ja/news/2024/12/10/27-163895/",
    hrefLabel: "詳細はこちら",
    hrefLabelEn: "Read more"
  },
  {
    date: "2024.11.20",
    category: "award",
    body:
      "第4回腸内デザイン学会年会にて、四宮彩名さん(学部3年)の発表が最優秀発表賞に選ばれました。",
    bodyEn:
      "Ayana Shinomiya (B3) received the Best Presentation Award at the 4th Annual Meeting of the Gut Design Society."
  },
  {
    date: "2024.08.09",
    category: "award",
    body:
      "第97回日本細菌学会総会にて、四宮彩名さん(学部2年)の発表が優秀発表賞に選ばれました。",
    bodyEn:
      "Ayana Shinomiya (B2) received the Excellent Presentation Award at the 97th Annual Meeting of the Japanese Society for Bacteriology."
  }
];

export const categoryLabel: Record<NewsCategory, string> = {
  paper: "Paper",
  award: "Award",
  event: "Event",
  media: "Media",
  info: "Info"
};
