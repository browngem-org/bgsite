export type NavItem = {
  href: string;
  label: string;
  index: string;
};

export const navItems: NavItem[] = [
  { href: "/", label: "Home", index: "01" },
  { href: "/publications", label: "Publications", index: "02" },
  { href: "/members", label: "Members", index: "03" },
  { href: "/laboratory", label: "Our Laboratory", index: "04" },
  { href: "/news", label: "News", index: "05" },
  { href: "/blog", label: "Blog", index: "06" },
  { href: "/access", label: "Access", index: "07" },
  { href: "/contact", label: "Contact", index: "08" }
];
