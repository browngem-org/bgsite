import type { Metadata } from "next";
import { Cormorant_Garamond, Rubik, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { LanguageProvider } from "@/i18n/LanguageProvider";

const zenKaku = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-zen-kaku",
  display: "swap"
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rubik",
  display: "swap"
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
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
    <html lang="ja" className={`${zenKaku.variable} ${rubik.variable} ${cormorant.variable}`}>
      <body className="font-sans bg-sand text-bark antialiased">
        <LanguageProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}
