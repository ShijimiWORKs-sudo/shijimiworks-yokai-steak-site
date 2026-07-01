import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { ExternalLinks } from "@/components/ExternalLinks";
import { SplitHero } from "@/components/SplitHero";
import { links } from "@/data/links";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: { absolute: site.name },
  description: "AIで作り、物語で届ける。ShijimiWORKsと妖怪ステーキ、二つの名前で広がる制作と創作の共通ポートフォリオ。",
};

const lobbyLinks = [
  { label: "noteを見る", href: links.note },
  { label: "Substackを見る", href: links.substack },
  { label: "Xを見る", href: links.x },
  { label: "YouTubeを見る", href: links.youtube },
] as const;

const pillars = [
  { number: "01", title: "Works", line1: "AI・Web・アプリ開発・制作実績", line2: "プロジェクト・ポートフォリオ", href: "/works", tone: "blue" },
  { number: "02", title: "Stories", line1: "小説・映画・Podcast・落語など", line2: "創作・レビュー・考察", href: "/youkai-steak", tone: "red" },
  { number: "03", title: "Systems", line1: "自動化・仕組み化・運用設計", line2: "システム・ワークフロー", href: "/shijimiworks", tone: "navy" },
  { number: "04", title: "Media", line1: "YouTube・Podcast・SNSなど", line2: "各種メディア・発信まとめ", href: "/articles", tone: "gold" },
] as const;

export default function Home() {
  return (
    <div className="home-page">
      <SplitHero />
      <section className="one-studio-section relative overflow-hidden px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="one-studio-glow" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-sky-700">One Creator / One Studio</p>
              <h2 className="mt-5 text-4xl font-black tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">Two Names,<br />One Studio.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-9 text-slate-600">異なるようでつながる二つの活動。<br />AIと物語のあいだで、作品と価値を生み出すスタジオです。</p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <Link key={pillar.title} href={pillar.href} className={`pillar-card pillar-card-${pillar.tone}`}>
                <span className="text-xs font-bold tracking-[0.2em] opacity-55">{pillar.number}</span>
                <h3 className="mt-12 text-2xl font-bold">{pillar.title}</h3>
                <p className="mt-5 text-sm leading-7 opacity-70">{pillar.line1}<br />{pillar.line2}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest">Explore <span aria-hidden="true">↗</span></span>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/works">すべての作品を見る</Button>
            <Button href="/contact" variant="outline">お問い合わせ</Button>
          </div>
          <div className="mt-8 border-t border-slate-900/10 pt-8">
            <p className="mb-4 text-xs font-bold uppercase tracking-[.2em] text-slate-400">Outside the studio</p>
            <ExternalLinks items={lobbyLinks} />
          </div>
        </div>
      </section>
    </div>
  );
}
