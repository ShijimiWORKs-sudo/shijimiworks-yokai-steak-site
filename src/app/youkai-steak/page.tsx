import type { Metadata } from "next";
import { YoukaiAbout } from "@/components/YoukaiAbout";
import { YoukaiContactLinks } from "@/components/YoukaiContactLinks";
import { YoukaiFooter } from "@/components/YoukaiFooter";
import { YoukaiInteractiveHero } from "@/components/YoukaiInteractiveHero";
import { YoukaiOngoingWorks } from "@/components/YoukaiOngoingWorks";
import { YoukaiThemes } from "@/components/YoukaiThemes";
import { YoukaiUpdatesCarousel } from "@/components/YoukaiUpdatesCarousel";

export const metadata: Metadata = {
  title: "妖怪ステーキ",
  description: "小説、映画感想、Podcast、YouTube朗読、落語感想など、物語をさまざまな形で届ける創作名義。",
  openGraph: {
    title: "妖怪ステーキ",
    description: "小説、映画感想、Podcast、YouTube朗読、落語感想など、物語をさまざまな形で届ける創作名義。",
    images: [{ url: "/images/ogp/youkai-steak-ogp.png", alt: "妖怪ステーキ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "妖怪ステーキ",
    description: "小説、映画感想、Podcast、YouTube朗読、落語感想など、物語をさまざまな形で届ける創作名義。",
    images: ["/images/ogp/youkai-steak-ogp.png"],
  },
};

export default function YoukaiSteakPage() {
  return (
    <div className="youkai-page bg-[#080604] text-stone-100">
      <YoukaiInteractiveHero />
      <YoukaiUpdatesCarousel />
      <YoukaiOngoingWorks />
      <YoukaiThemes />
      <YoukaiAbout />
      <YoukaiContactLinks />
      <YoukaiFooter />
    </div>
  );
}
