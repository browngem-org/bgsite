export type NavItem = {
  href: string;
  label: string;
  labelEn: string;
  index: string;
};

export const navItems: NavItem[] = [
  { href: "/", label: "ホーム", labelEn: "Home", index: "01" },
  { href: "/publications", label: "論文", labelEn: "Publications", index: "02" },
  { href: "/members", label: "メンバー", labelEn: "Members", index: "03" },
  { href: "/laboratory", label: "ラボ", labelEn: "Our Laboratory", index: "04" },
  { href: "/news", label: "お知らせ", labelEn: "News", index: "05" },
  { href: "/blog", label: "ブログ", labelEn: "Blog", index: "06" },
  { href: "/access", label: "アクセス", labelEn: "Access", index: "07" },
  { href: "/contact", label: "お問い合わせ", labelEn: "Contact", index: "08" }
];
