import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Button } from "@/components/Button";
import { ExternalLinks } from "@/components/ExternalLinks";
import { YoukaiInteractiveHero } from "@/components/YoukaiInteractiveHero";
import { YoukaiUpdatesCarousel } from "@/components/YoukaiUpdatesCarousel";
import { links } from "@/data/links";

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

const ongoing = ["連載小説", "Podcast番組", "YouTube朗読シリーズ", "落語研究ノート", "映画レビュー"];
const themes = ["人間ドラマ", "記憶と喪失", "孤独とつながり", "日常の美しさ", "言葉の力"];
const youkaiLinks = [
  { label: "noteを見る", href: links.youkaiSteakNote },
  { label: "Substackを見る", href: links.youkaiSteakSubstack },
  { label: "Xを見る", href: links.youkaiSteakX },
  { label: "小説家になろう", href: links.youkaiSteakNarou },
  { label: "カクヨム", href: links.youkaiSteakKakuyomu },
  { label: "YouTubeを見る", href: links.youkaiSteakYoutube },
  { label: "Podcastを聴く", href: links.youkaiSteakPodcast },
] as const;

function YoukaiSection({ eyebrow, title, description, children, alternate = false, id }: { eyebrow: string; title: string; description?: string; children: ReactNode; alternate?: boolean; id?: string }) {
  return <section id={id} className={`youkai-section px-5 py-20 sm:px-8 lg:px-12 lg:py-24 ${alternate ? "youkai-section-alt" : ""}`}><div className="mx-auto max-w-7xl"><header className="mb-10 max-w-3xl"><p className="text-[.65rem] font-bold uppercase tracking-[.28em] text-amber-300/80">{eyebrow}</p><h2 className="mt-4 font-serif text-4xl font-bold tracking-tight text-[#fff3dc] sm:text-5xl">{title}</h2>{description && <p className="mt-5 max-w-2xl leading-8 text-stone-400">{description}</p>}</header>{children}</div></section>;
}

export default function YoukaiSteakPage() {
  return (
    <div className="youkai-page bg-[#080604] text-stone-100">
      <YoukaiInteractiveHero />

      <YoukaiUpdatesCarousel />

      <YoukaiSection eyebrow="Ongoing Works" title="進行中の創作" description="完成するまでの時間も、物語の一部として記録します。">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{ongoing.map((work, index) => <article key={work} className="youkai-ongoing-card"><span>0{index + 1}</span><div className="youkai-progress"><i style={{ width: `${42 + index * 9}%` }} /></div><h3>{work}</h3><p>{index % 2 === 0 ? "執筆・構成を進めています。" : "公開と改善を続けています。"}</p></article>)}</div>
      </YoukaiSection>

      <YoukaiSection eyebrow="Themes" title="物語の中心にあるもの" alternate>
        <div className="youkai-theme-grid">{themes.map((theme, index) => <article key={theme}><span aria-hidden="true">{["人", "憶", "結", "日", "言"][index]}</span><h3>{theme}</h3></article>)}</div>
      </YoukaiSection>

      <YoukaiSection id="youkai-about" eyebrow="About" title="About 妖怪ステーキ">
        <div className="grid gap-10 lg:grid-cols-[.78fr_1.22fr] lg:items-start"><div className="youkai-about-quote"><span>STORY / VOICE / CINEMA</span><p>物語を読み、観て、聴き、そこから生まれた言葉を届ける。</p></div><div className="space-y-5 text-base leading-8 text-stone-300"><p>妖怪ステーキは、小説・映画感想・Podcast・動画・落語など、物語をさまざまな形で届ける創作名義です。</p><p>ジャンルや形式にとらわれず、心に残る物語を読み、観て、聴き、そこから生まれた言葉を世界に届けることを目指しています。</p><p>その活動の裏側では、ShijimiWORKsとしてAI活用、コンテンツ管理、自動化、投稿導線の設計も行っています。</p><Link href="/shijimiworks" className="inline-flex text-sm font-bold text-amber-300 hover:text-amber-200">制作の裏側、ShijimiWORKsへ →</Link></div></div>
      </YoukaiSection>

      <section className="youkai-contact px-5 py-16 sm:px-8 lg:px-12 lg:py-20"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="text-[.65rem] font-bold uppercase tracking-[.28em] text-amber-300">Contact / Links</p><h2 className="mt-4 font-serif text-4xl font-bold text-[#fff3dc] sm:text-5xl">物語の続きを、外の世界へ。</h2><p className="mt-5 max-w-2xl leading-8 text-stone-400">作品の感想、創作についての連絡、各媒体での更新はこちらから。</p></div><div className="max-w-xl"><Button href={links.contact} variant="dark">お問い合わせ</Button><ExternalLinks items={youkaiLinks} tone="dark" className="mt-3" /></div></div></section>
    </div>
  );
}
