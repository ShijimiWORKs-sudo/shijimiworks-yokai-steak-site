import type { Metadata } from "next";
import { SplitHero } from "@/components/SplitHero";

export const metadata: Metadata = {
  title: { absolute: "ShijimiWORKs / 妖怪ステーキ" },
  description: "AIで作り、物語で届ける。ShijimiWORKsと妖怪ステーキの共通ポートフォリオサイト。",
  openGraph: {
    title: "ShijimiWORKs / 妖怪ステーキ",
    description: "AIで作り、物語で届ける。ShijimiWORKsと妖怪ステーキの共通ポートフォリオサイト。",
    images: [{ url: "/images/ogp/common-ogp.png", alt: "ShijimiWORKs / 妖怪ステーキ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ShijimiWORKs / 妖怪ステーキ",
    description: "AIで作り、物語で届ける。ShijimiWORKsと妖怪ステーキの共通ポートフォリオサイト。",
    images: ["/images/ogp/common-ogp.png"],
  },
};

export default function Home() {
  return (
    <div className="home-page">
      <SplitHero />
    </div>
  );
}
