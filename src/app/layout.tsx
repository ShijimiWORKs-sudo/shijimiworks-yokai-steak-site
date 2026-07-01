import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { site } from "@/data/site";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "ShijimiWORKs / 妖怪ステーキ", template: `%s | ${site.name}` },
  description: "AIで作り、物語で届ける。ShijimiWORKsと妖怪ステーキの共通ポートフォリオサイト。",
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    title: "ShijimiWORKs / 妖怪ステーキ",
    description: "AIで作り、物語で届ける。ShijimiWORKsと妖怪ステーキの共通ポートフォリオサイト。",
    siteName: site.name,
    locale: "ja_JP",
    type: "website",
    images: [{ url: "/images/ogp/common-ogp.png", alt: "ShijimiWORKs / 妖怪ステーキ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ShijimiWORKs / 妖怪ステーキ",
    description: "AIで作り、物語で届ける。ShijimiWORKsと妖怪ステーキの共通ポートフォリオサイト。",
    images: ["/images/ogp/common-ogp.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body><SiteShell>{children}</SiteShell></body></html>;
}
