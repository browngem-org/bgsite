export type MemberLink = {
  type: "page" | "researchmap" | "scholar" | "site" | "interview";
  href: string;
  label: string;
};

export type Member = {
  name: string;
  nameEn: string;
  title?: string;
  grade?: string;
  affiliations?: string[];
  field?: string;
  location?: string;
  email?: string;
  photo: string;
  likes?: string;
  links?: MemberLink[];
};

export type MemberGroup = {
  heading: string;
  subheading?: string;
  members: Member[];
};

const placeholder =
  "https://raw.githubusercontent.com/browngem-org/photo/56ad964616fc6daf31c483c14a93b385affe8dec/foundate/unichi-makimaki.png";

export const pi: Member = {
  name: "福田 真嗣",
  nameEn: "Shinji FUKUDA",
  title: "慶應義塾大学 先端生命科学研究所 特任教授",
  affiliations: [
    "筑波大学医学医療系 客員教授",
    "株式会社メタジェン 代表取締役社長CEO",
    "神奈川県立産業技術総合研究所 腸内環境デザイングループ グループリーダー",
    "順天堂大学大学院医学研究科 腸内細菌療法リサーチセンター 特任教授"
  ],
  field: "腸内環境制御学・統合オミクス科学",
  location: "TTCK",
  email: "fukuda at iab.keio.ac.jp",
  photo: "https://www.iab.keio.ac.jp/research-project/files/fukuda.jpg",
  likes: "温泉、日本酒、発酵食品",
  links: [
    { type: "researchmap", href: "https://researchmap.jp/shinji_fukuda", label: "researchmap" }
  ]
};

export const memberGroups: MemberGroup[] = [
  {
    heading: "Researchers",
    subheading: "TTCKのスタッフ",
    members: [
      {
        name: "楊 佳約",
        nameEn: "Jiayue YANG",
        grade: "Project Research Associate",
        location: "TTCK",
        email: "yamada at iab.keio.ac.jp",
        photo: "https://www.iab.keio.ac.jp/research-project/files/yang.jpg"
      },
      {
        name: "ソン アイゼア ユーハク",
        nameEn: "Isaiah Youhak SONG",
        grade: "Project Research Associate",
        location: "TTCK",
        email: "suzuki at iab.keio.ac.jp",
        photo: "https://www.iab.keio.ac.jp/research-project/files/song.jpg"
      },
      {
        name: "石井 千晴",
        nameEn: "Chiharu ISHII",
        grade: "Visiting Project Researcher",
        location: "TTCK",
        email: "suzuki at iab.keio.ac.jp",
        photo: "https://www.iab.keio.ac.jp/research-project/files/ishii.jpg"
      },
      {
        name: "小松さん",
        nameEn: "Hanako SUZUKI",
        grade: "Technical Staff",
        location: "TTCK",
        email: "suzuki at iab.keio.ac.jp",
        photo: placeholder
      },
      {
        name: "のりこさん",
        nameEn: "Hanako SUZUKI",
        grade: "Technical Staff",
        location: "TTCK",
        email: "suzuki at iab.keio.ac.jp",
        photo: placeholder
      },
      {
        name: "かがたさん",
        nameEn: "Hanako SUZUKI",
        grade: "Technical Staff",
        location: "TTCK",
        email: "suzuki at iab.keio.ac.jp",
        photo: placeholder
      }
    ]
  },
  {
    heading: "Students",
    subheading: "学生",
    members: [
      {
        name: "岡本さん",
        nameEn: "Haruto IKEDA",
        grade: "D2",
        location: "TTCK",
        email: "tanaka at iab.keio.ac.jp",
        photo: placeholder
      },
      {
        name: "池田 陽人",
        nameEn: "Haruto IKEDA",
        grade: "M2",
        location: "TTCK",
        email: "tanaka at iab.keio.ac.jp",
        photo: placeholder
      },
      {
        name: "岡本さん",
        nameEn: "Misaki SATO",
        grade: "D2",
        location: "TTCK",
        email: "sato at iab.keio.ac.jp",
        photo: placeholder
      },
      {
        name: "四宮 彩名",
        nameEn: "Ayana SHINOMIYA",
        grade: "M1",
        field: "免疫学",
        location: "SFC・RIKEN",
        email: "ayana-shinomiya12 at keio.jp",
        photo: "https://raw.githubusercontent.com/browngem-org/photo/main/members/Ayanashinomiya.jpg"
      },
      {
        name: "市村 涼葉",
        nameEn: "Ryoha ICHIMURA",
        grade: "M2",
        location: "鶴岡メタボロームキャンパス",
        photo: placeholder
      },
      {
        name: "石川 小花",
        nameEn: "Kohana ISHIKAWA",
        grade: "B4",
        location: "藤沢ラボ",
        email: "kohanalani at keio.jp",
        photo:
          "https://raw.githubusercontent.com/browngem-org/photo/b470e7f26eacd794595d4ccb8d52cb9fbe55db7d/members/Kohana.jpeg",
        likes:
          "美味しいお店を発掘すること、美味しいものを食べることが好き。将来の夢は世界中の美味しいものを食べ尽くすこと。"
      },
      {
        name: "山本 英美里",
        nameEn: "Emily YAMAMOTO",
        grade: "B3",
        location: "SFC",
        photo: "https://raw.githubusercontent.com/browngem-org/photo/main/members/Yamamotosan.jpg"
      },
      {
        name: "佐藤 翼",
        nameEn: "Tsubasa SATO",
        grade: "B1",
        field: "宇宙生物学",
        location: "SFC・東京科学大学",
        email: "sato.mb at keio.jp",
        photo:
          "https://raw.githubusercontent.com/browngem-org/photo/57575275fed448a6b467597da59c45f765c90121/members/tsubasasato.jpeg",
        likes: "写真を撮ることにハマっています。2026年もよろしくお願いします。",
        links: [
          {
            type: "scholar",
            href: "https://scholar.google.com/citations?user=13x6x4sAAAAJ&hl=ja",
            label: "Google Scholar"
          },
          { type: "site", href: "https://tsubatimescom.vercel.app", label: "個人サイト" }
        ]
      },
      {
        name: "ホークインチャン",
        nameEn: "Ho Kuing CHANG",
        grade: "B2",
        location: "SFC",
        photo: placeholder
      }
    ]
  },
  {
    heading: "Affiliated Researchers",
    subheading: "TTCK外のスタッフ",
    members: [
      {
        name: "尾花 望",
        nameEn: "Nozomu OBANA",
        affiliations: ["筑波大学医学医療系トランスボーダー医学研究センター"],
        location: "筑波大学",
        email: "yamada at iab.keio.ac.jp",
        photo: "https://trios.tsukuba.ac.jp/ja/researchers/pictures/0000003736"
      },
      {
        name: "中藤 学",
        nameEn: "Gaku NAKATO",
        field: "粘膜免疫学",
        affiliations: [
          "順天堂大学大学院医学研究科 腸内細菌療法リサーチセンター",
          "神奈川県立産業技術総合研究所 腸内環境デザイングループ"
        ],
        location: "順天堂大学・KISTEC",
        email: "suzuki at iab.keio.ac.jp",
        photo:
          "https://www.kistec.jp/rikaston/wp-content/uploads/2018/09/826193519d92fa6efe7751923a2a55f8.png"
      }
    ]
  }
];
