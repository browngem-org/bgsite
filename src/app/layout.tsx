import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap"
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap"
});

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap"
});

const notoSerifJp = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-noto-serif-jp",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bgsite.vercel.app"),
  title: {
    default: "Fukuda Laboratory — 福田真嗣研究室",
    template: "%s — Fukuda Laboratory"
  },
  description:
    "腸内デザイン学。慶應義塾大学先端生命科学研究所 福田真嗣研究室。Fukuda Laboratory at Keio University, Institute for Advanced Biosciences.",
  openGraph: {
    title: "Fukuda Laboratory — 福田真嗣研究室",
    description: "Designing the gut microbiome.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ja"
      className={`${cormorant.variable} ${inter.variable} ${notoSansJp.variable} ${notoSerifJp.variable}`}
    >
      <body className="font-sans bg-paper text-ink">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
