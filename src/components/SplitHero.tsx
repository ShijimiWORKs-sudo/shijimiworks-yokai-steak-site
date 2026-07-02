import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { links } from "@/data/links";
import { MotionSection } from "./MotionSection";

const studioCards = [
  "AI活用記事",
  "Web制作",
  "アプリ開発",
  "自動投稿システム",
  "note / Substack運用",
  "プロンプト設計",
  "業務効率化",
  "制作相談・お仕事依頼",
  "ポートフォリオ",
];

const storyCards = [
  { label: "小説", href: links.youkaiSteakNarou },
  { label: "映画感想", href: "/articles/cinema-into-life-words" },
  { label: "YouTube朗読", href: links.youkaiSteakYoutube },
  { label: "Podcast", href: links.youkaiSteakPodcast },
  { label: "ショートアニメ", href: links.youkaiSteakYoutube },
  { label: "落語感想・解説", href: links.articles },
  { label: "note", href: links.youkaiSteakNote },
  { label: "小説家になろう", href: links.youkaiSteakNarou },
  { label: "カクヨム", href: links.youkaiSteakKakuyomu },
] as const;

function LobbyCopy() {
  return (
    <MotionSection className="lobby-copy common-hero-copy">
      <p className="common-hero-kicker">Two Names, One Studio.</p>
      <h1>AIで作り、<br className="sm:hidden" />物語で届ける。</h1>
      <p className="lobby-description">
        仕事としての制作と、作品としての創作。<br className="hidden sm:block" />
        二つの名前で、AIと物語のあいだを作っています。
      </p>
      <div className="common-hero-actions">
        <Link href="/shijimiworks" className="common-hero-cta common-hero-cta-light">
          ShijimiWORKsへ <ArrowUpRight aria-hidden="true" />
        </Link>
        <Link href="/youkai-steak" className="common-hero-cta common-hero-cta-dark">
          妖怪ステーキへ <ArrowUpRight aria-hidden="true" />
        </Link>
        <Link href="/works" className="common-hero-cta common-hero-cta-ghost">
          制作実績を見る <ArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </MotionSection>
  );
}

export function SplitHero() {
  return (
    <section className="split-hero common-ogp-hero relative overflow-hidden">
      <Image
        src="/images/ogp/common-ogp.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="common-ogp-image"
        aria-hidden="true"
      />
      <div className="common-ogp-overlay" aria-hidden="true" />
      <div className="split-aurora" aria-hidden="true" />
      <LobbyCopy />
      <div className="studio-seam hidden lg:block" aria-hidden="true" />

      <div className="common-hero-doors">
        <MotionSection className="common-door common-door-studio" delay={0.08}>
          <div className="studio-orb studio-orb-blue" aria-hidden="true" />
          <div className="studio-network" aria-hidden="true"><i /><i /><i /><i /><i /></div>
          <div className="relative">
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-sky-700" />
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.26em] text-sky-800">AI / Web / App / Automation / Writing</p>
            </div>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] text-slate-950 sm:text-5xl xl:text-[3.35rem]">ShijimiWORKs</h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 xl:leading-7">
              生成AIを活用したWeb制作、アプリ開発、文章制作、自動化、メディア運用を横断する制作スタジオです。小さなアイデアを、記事・サイト・アプリ・運用導線まで形にします。
            </p>
            <div className="mt-6 grid grid-cols-2 gap-2">
              {studioCards.slice(0, 4).map((label, index) => (
                <Link key={label} href={index === 8 ? "/works" : "/shijimiworks"} className="studio-card studio-card-light">
                  <span className="studio-card-number">{String(index + 1).padStart(2, "0")}</span>
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </div>
        </MotionSection>

        <MotionSection className="common-door common-door-story" delay={0.16}>
          <div className="studio-orb studio-orb-gold" aria-hidden="true" />
          <div className="cinema-grain" aria-hidden="true" />
          <div className="story-wave" aria-hidden="true">{Array.from({ length: 24 }).map((_, index) => <i key={index} />)}</div>
          <div className="relative">
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-amber-300/80" />
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.26em] text-amber-200/80">Novel / Cinema / Podcast / YouTube / Rakugo</p>
            </div>
            <h2 className="mt-4 font-serif text-4xl font-bold tracking-[-0.035em] text-amber-50 sm:text-5xl xl:text-[3.35rem]">妖怪ステーキ</h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-stone-200/85 xl:leading-7">
              小説、映画感想、Podcast、YouTube、落語など、物語をさまざまな形で届ける創作活動です。夜の創作室から、物語の余韻をさまざまなメディアへ運びます。
            </p>
            <div className="mt-6 grid grid-cols-2 gap-2">
              {storyCards.slice(0, 4).map((item, index) => <Link key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} className="studio-card studio-card-dark"><span className="studio-card-number">{String(index + 1).padStart(2, "0")}</span><span>{item.label}</span></Link>)}
            </div>
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
