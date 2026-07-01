import { Button } from "./Button";
import { ExternalLink } from "./ExternalLink";
import { links } from "@/data/links";

export function YoukaiHero() {
  return (
    <section className="youkai-hero relative overflow-hidden px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="youkai-lamp" aria-hidden="true" />
      <div className="youkai-grain" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_.92fr] lg:items-center">
        <div>
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[.3em] text-amber-300"><span className="h-px w-10 bg-amber-300" />妖怪ステーキ</div>
          <h1 className="mt-7 font-serif text-5xl font-bold leading-[1.13] tracking-[-.04em] text-[#fff3dc] sm:text-6xl xl:text-7xl">物語を紡ぎ、<br />世界を届ける。</h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-stone-300 sm:text-lg">小説、映画感想、Podcast、YouTube、落語など、物語をさまざまな形で届ける創作活動です。</p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-stone-400">少し怪しく、どこか温かい物語の机から、読んだもの・観たもの・聴いたものを届けています。</p>
          <div className="mt-8 flex flex-wrap gap-3"><Button href={links.works} variant="dark">作品を見る</Button><ExternalLink href={links.youkaiSteakNote} label="noteを見る" tone="dark">noteを見る</ExternalLink><ExternalLink href={links.youkaiSteakNarou} label="小説家になろう" tone="dark">小説を読む</ExternalLink></div>
        </div>

        <div className="youkai-desk relative mx-auto w-full max-w-xl">
          <div className="youkai-paper youkai-paper-main"><span>MANUSCRIPT / 01</span><h2>まだ名前のない物語</h2><p>夜の街を歩く。忘れたはずの声が、遠くでこちらを呼んでいた。</p><i /><i /><i /><i /></div>
          <div className="youkai-ticket"><span>CINEMA</span><strong>STORY PASS</strong><small>ONE SEAT / ONE MEMORY</small></div>
          <div className="youkai-audio-card"><div className="youkai-wave" aria-hidden="true">{Array.from({ length: 18 }).map((_, index) => <i key={index} />)}</div><span>PODCAST / VOICE LOG</span><strong>声で語る物語 #12</strong></div>
          <div className="youkai-seal" aria-hidden="true">妖</div>
        </div>
      </div>
    </section>
  );
}
