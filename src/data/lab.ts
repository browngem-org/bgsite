export type LabPhoto = {
  src: string;
  caption: string;
};

export const labScenes: LabPhoto[] = [
  {
    src: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=900",
    caption: "Lab Overview"
  },
  {
    src: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=900",
    caption: "Wet Bench"
  },
  {
    src: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=900",
    caption: "Data Analysis"
  },
  {
    src: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=900",
    caption: "Instruments"
  },
  {
    src: "https://raw.githubusercontent.com/browngem-org/photo/refs/heads/main/laboratory/discuss.jpg",
    caption: "Discussion"
  },
  {
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=900",
    caption: "Seminar"
  }
];

export type HistoryEntry = {
  id: string;
  title: string;
  date: string;
  description: string;
  photos: string[];
};

export const historyEntries: HistoryEntry[] = [
  {
    id: "iab2026",
    title: "IAB合宿 2026 冬",
    date: "2026.01",
    description:
      "慶應義塾大学先端生命科学研究会の冬合宿にて、修士課程の市村さん、岡本さん、池田さんと学部の石川さんが発表しました。ご卒業おめでとうございます。",
    photos: [
      "https://raw.githubusercontent.com/browngem-org/photo/refs/heads/main/laboratory/IAB2026a/IABa2026.jpg",
      "https://raw.githubusercontent.com/browngem-org/photo/refs/heads/main/laboratory/IAB2026a/IABa2026d.jpg"
    ]
  },
  {
    id: "keystone",
    title: "Keystone 国際学会 2025",
    date: "2025.12",
    description:
      "カナダ・キングストンで行われた国際学会に石川さん、山本さん、四宮さん、楊さん、アイゼアさんが発表しました。",
    photos: [
      "https://raw.githubusercontent.com/browngem-org/photo/refs/heads/main/laboratory/キーストン/IMG_4829.jpg",
      "https://raw.githubusercontent.com/browngem-org/photo/refs/heads/main/laboratory/キーストン/IMG_5255.jpg"
    ]
  },
  {
    id: "korea",
    title: "韓国研修 2025",
    date: "2025.12",
    description: "韓国のバイオテック企業との合同研修を行いました。",
    photos: [
      "https://raw.githubusercontent.com/browngem-org/photo/14cba80a53595be1f1e1b5dc7afb2e92706666bc/laboratory/LaboKorea.jpg",
      "https://raw.githubusercontent.com/browngem-org/photo/refs/heads/main/laboratory/game.jpg"
    ]
  },
  {
    id: "iab2025",
    title: "IAB合宿 2025 春",
    date: "2025.04",
    description: "IABの合宿に参加しました。",
    photos: [
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=900",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=900"
    ]
  },
  {
    id: "bounen2024",
    title: "忘年会 2024",
    date: "2024.12",
    description:
      "2024年締めの忘年会を、TTCKと東京をオンラインで繋いでハイブリッド開催しました。",
    photos: [
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=900",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=900",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=900"
    ]
  },
  {
    id: "party",
    title: "忘年会",
    date: "2023.12",
    description: "研究室メンバー全員で忘年会を行いました。",
    photos: [
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=900",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=900",
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=900"
    ]
  }
];

export const equipment = [
  { name: "質量分析計", detail: "LC-MS/MS、GC-MS" },
  { name: "DNAシーケンサー", detail: "次世代シーケンサー（Illumina）" },
  { name: "嫌気チャンバー", detail: "嫌気性細菌の培養用" },
  { name: "フローサイトメーター", detail: "細胞解析用" },
  { name: "リアルタイムPCR", detail: "遺伝子発現解析用" },
  { name: "クリーンベンチ", detail: "無菌操作用" }
];
