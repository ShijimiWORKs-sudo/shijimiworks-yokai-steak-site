import Image from "next/image";
import { Film, Mic, PenLine } from "lucide-react";
import { Button } from "./Button";
import { ExternalLink } from "./ExternalLink";
import { MotionSection } from "./MotionSection";
import { VisualHeroFrame } from "./VisualHeroFrame";
import { links } from "@/data/links";

export function YoukaiHero() {
  return (
    <section className="youkai-hero relative overflow-hidden px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="youkai-lamp" aria-hidden="true" />
      <div className="youkai-grain" aria-hidden="true" />
      <div className="youkai-projector-beam" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.82fr_1.18fr] lg:items-center">
        <MotionSection className="youkai-hero-copy">
          <p className="youkai-now-showing">NOW SHOWING · STORY / VOICE / CINEMA</p>
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[.3em] text-amber-300"><span className="h-px w-10 bg-amber-300" />妖怪ステーキ</div>
          <h1 className="mt-7 font-serif text-5xl font-bold leading-[1.13] tracking-[-.04em] text-[#fff3dc] sm:text-6xl xl:text-7xl">物語を紡ぎ、<br />世界を届ける。</h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-stone-300 sm:text-lg">小説、映画感想、Podcast、YouTube、落語など、物語をさまざまな形で届ける創作活動です。</p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-stone-400">少し怪しく、どこか温かい物語の机から、読んだもの・観たもの・聴いたものを届けています。</p>
          <div className="mt-8 flex flex-wrap gap-3"><Button href={links.works} variant="dark">作品を見る</Button><ExternalLink href={links.youkaiSteakNote} label="noteを見る" tone="dark">noteを見る</ExternalLink><ExternalLink href={links.youkaiSteakNarou} label="小説家になろう" tone="dark">小説を読む</ExternalLink></div>
        </MotionSection>

        <MotionSection className="youkai-ogp-motion" delay={0.12}>
          <VisualHeroFrame
            brand="youkai-steak"
            className="youkai-ogp-frame"
            media={
              <Image
                src="/images/ogp/youkai-steak-ogp.png"
                alt=""
                fill
                priority
                sizes="(min-width: 1024px) 58vw, 100vw"
              />
            }
          >
            <div className="youkai-visual-caption">
              <span><Mic aria-hidden="true" /> Voice</span>
              <span><Film aria-hidden="true" /> Cinema</span>
              <span><PenLine aria-hidden="true" /> Manuscript</span>
            </div>
          </VisualHeroFrame>
        </MotionSection>
      </div>
    </section>
  );
}
