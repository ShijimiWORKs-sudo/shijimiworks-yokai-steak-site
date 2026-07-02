import Image from "next/image";
import { Bot, Workflow } from "lucide-react";
import { Button } from "./Button";
import { MotionSection } from "./MotionSection";
import { VisualHeroFrame } from "./VisualHeroFrame";

export function ShijimiHero() {
  return (
    <section className="shijimi-hero relative overflow-hidden px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="shijimi-grid-bg" aria-hidden="true" />
      <div className="shijimi-light-flow" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
        <MotionSection className="shijimi-hero-copy">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[.25em] text-sky-700"><span className="h-px w-10 bg-sky-700" />ShijimiWORKs</div>
          <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[1.06] tracking-[-.055em] text-slate-950 sm:text-6xl xl:text-7xl">AIを使って、<br />作る・届ける・<br className="hidden sm:block" />仕組みにする。</h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">ShijimiWORKsは、生成AIを活用したWeb制作、アプリ開発、文章制作、自動化、メディア運用を横断する制作ポートフォリオです。</p>
          <p className="mt-3 text-sm font-medium text-slate-500">小さなアイデアを、記事・サイト・アプリ・運用導線まで形にします。</p>
          <div className="mt-8 flex flex-wrap gap-3"><Button href="/works">制作実績を見る</Button><Button href="/contact" variant="outline">相談する</Button></div>
          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-slate-900/10 pt-6 text-xs font-bold uppercase tracking-widest text-slate-400"><span>AI assisted</span><span>Human directed</span><span>Built to improve</span></div>
        </MotionSection>

        <MotionSection className="shijimi-ogp-motion" delay={0.12}>
          <VisualHeroFrame
            brand="shijimiworks"
            className="shijimi-ogp-frame studio-glass-card"
            media={
              <Image
                src="/images/ogp/shijimiworks-ogp.png"
                alt=""
                fill
                priority
                sizes="(min-width: 1024px) 48vw, 100vw"
              />
            }
          >
            <div className="shijimi-visual-status">
              <span><Bot aria-hidden="true" /> AI Studio</span>
              <span><Workflow aria-hidden="true" /> Build → Deliver → Improve</span>
            </div>
          </VisualHeroFrame>
        </MotionSection>
      </div>
    </section>
  );
}
