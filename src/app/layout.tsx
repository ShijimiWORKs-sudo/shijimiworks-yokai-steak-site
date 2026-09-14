import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { site } from "@/data/site";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const siteUrl = getSiteUrl();

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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: site.name,
      description: "AIで作り、物語で届ける。ShijimiWORKsと妖怪ステーキの共通ポートフォリオサイト。",
      inLanguage: "ja",
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "ShijimiWORKs",
      url: `${siteUrl}/shijimiworks`,
      logo: `${siteUrl}/icon.png`,
      sameAs: [],
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
