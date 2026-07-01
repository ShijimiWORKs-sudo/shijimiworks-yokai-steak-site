import Link from "next/link";
import { links } from "@/data/links";
import { Button } from "./Button";

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
    <div className="lobby-copy">
      <h1>AIで作り、<br className="sm:hidden" />物語で届ける。</h1>
      <p className="lobby-description">
        仕事としての制作と、作品としての創作。<br className="hidden sm:block" />
        二つの名前で、AIと物語のあいだを作っています。
      </p>
    </div>
  );
}

export function SplitHero() {
  return (
    <section className="split-hero relative overflow-hidden">
      <LobbyCopy />
      <div className="studio-seam hidden lg:block" aria-hidden="true" />

      <div className="grid lg:grid-cols-2">
        <article className="studio-panel studio-panel-light relative overflow-hidden px-5 py-12 sm:px-8 lg:min-h-[calc(100vh-69px)] lg:px-8 lg:pb-6 lg:pt-[10.5rem] xl:px-12">
          <div className="studio-orb studio-orb-blue" aria-hidden="true" />
          <div className="relative mx-auto max-w-2xl lg:ml-auto">
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-sky-700" />
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.26em] text-sky-800">AI / Web / App / Automation / Writing</p>
            </div>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] text-slate-950 sm:text-5xl xl:text-[3.35rem]">ShijimiWORKs</h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 xl:leading-7">
              生成AIを活用したWeb制作、アプリ開発、文章制作、自動化、メディア運用を横断する制作スタジオです。小さなアイデアを、記事・サイト・アプリ・運用導線まで形にします。
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button href="/shijimiworks">ShijimiWORKsへ入る</Button>
              <Button href="/works" variant="outline">制作実績を見る</Button>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-2">
              {studioCards.map((label, index) => (
                <Link key={label} href={index === 8 ? "/works" : "/shijimiworks"} className="studio-card studio-card-light">
                  <span className="studio-card-number">{String(index + 1).padStart(2, "0")}</span>
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </div>
        </article>

        <article className="studio-panel studio-panel-dark relative overflow-hidden px-5 py-12 text-stone-100 sm:px-8 lg:min-h-[calc(100vh-69px)] lg:px-8 lg:pb-6 lg:pt-[10.5rem] xl:px-12">
          <div className="studio-orb studio-orb-gold" aria-hidden="true" />
          <div className="cinema-grain" aria-hidden="true" />
          <div className="relative mx-auto max-w-2xl lg:mr-auto">
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-amber-300/80" />
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.26em] text-amber-200/80">Novel / Cinema / Podcast / YouTube / Rakugo</p>
            </div>
            <h2 className="mt-4 font-serif text-4xl font-bold tracking-[-0.035em] text-amber-50 sm:text-5xl xl:text-[3.35rem]">妖怪ステーキ</h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-stone-200/85 xl:leading-7">
              小説、映画感想、Podcast、YouTube、落語など、物語をさまざまな形で届ける創作活動です。夜の創作室から、物語の余韻をさまざまなメディアへ運びます。
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button href="/youkai-steak" variant="dark">妖怪ステーキへ入る</Button>
              <Link href="/works" className="inline-flex min-h-11 items-center justify-center rounded-full border border-amber-200/40 px-5 py-2.5 text-sm font-semibold text-amber-50 transition hover:border-amber-200 hover:bg-amber-200/10">作品を見る</Link>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-2">
              {storyCards.map((item, index) => <Link key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} className="studio-card studio-card-dark"><span className="studio-card-number">{String(index + 1).padStart(2, "0")}</span><span>{item.label}</span></Link>)}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
