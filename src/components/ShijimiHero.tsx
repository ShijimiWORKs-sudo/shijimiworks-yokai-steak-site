import Link from "next/link";
import { Button } from "./Button";

const studioItems = [
  { label: "AI活用記事", kind: "DOC", tone: "blue" },
  { label: "Web制作", kind: "WEB", tone: "navy" },
  { label: "アプリ開発", kind: "APP", tone: "sky" },
  { label: "自動投稿システム", kind: "AUTO", tone: "slate" },
  { label: "note / Substack運用", kind: "MEDIA", tone: "cream" },
  { label: "プロンプト設計", kind: "PROMPT", tone: "blue" },
  { label: "業務効率化", kind: "FLOW", tone: "navy" },
  { label: "制作相談", kind: "TALK", tone: "sky" },
] as const;

export function ShijimiHero() {
  return (
    <section className="shijimi-hero relative overflow-hidden px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="shijimi-grid-bg" aria-hidden="true" />
      <div className="shijimi-light-flow" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
        <div>
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[.25em] text-sky-700"><span className="h-px w-10 bg-sky-700" />ShijimiWORKs</div>
          <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[1.06] tracking-[-.055em] text-slate-950 sm:text-6xl xl:text-7xl">AIを使って、<br />作る・届ける・<br className="hidden sm:block" />仕組みにする。</h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">ShijimiWORKsは、生成AIを活用したWeb制作、アプリ開発、文章制作、自動化、メディア運用を横断する制作ポートフォリオです。</p>
          <p className="mt-3 text-sm font-medium text-slate-500">小さなアイデアを、記事・サイト・アプリ・運用導線まで形にします。</p>
          <div className="mt-8 flex flex-wrap gap-3"><Button href="/works">制作実績を見る</Button><Button href="/contact" variant="outline">相談する</Button></div>
          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-slate-900/10 pt-6 text-xs font-bold uppercase tracking-widest text-slate-400"><span>AI assisted</span><span>Human directed</span><span>Built to improve</span></div>
        </div>

        <div className="shijimi-dashboard relative mx-auto w-full max-w-2xl rounded-[2rem] border border-white bg-white/65 p-4 shadow-[0_35px_90px_rgba(15,23,42,.16)] backdrop-blur sm:p-6">
          <div className="flex items-center justify-between border-b border-slate-900/8 pb-4"><div className="flex gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-sky-300" /><span className="h-2.5 w-2.5 rounded-full bg-slate-300" /><span className="h-2.5 w-2.5 rounded-full bg-amber-200" /></div><span className="text-[.6rem] font-bold uppercase tracking-[.22em] text-slate-400">Studio workspace / 08</span></div>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-2">
            {studioItems.map((item, index) => (
              <Link key={item.label} href={item.label === "制作相談" ? "/contact" : "/works"} className={`shijimi-float-card shijimi-float-${item.tone}`}>
                <span className="shijimi-mini-window" aria-hidden="true"><i /><i /><i /></span>
                <span className="mt-5 text-[.58rem] font-bold tracking-[.16em] text-slate-400">{item.kind} / {String(index + 1).padStart(2, "0")}</span>
                <strong className="mt-1.5 text-sm text-slate-800">{item.label}</strong>
              </Link>
            ))}
          </div>
          <div className="workflow-status"><span><i />Input</span><b>→</b><span><i />AI assist</span><b>→</b><span><i />Publish</span></div>
        </div>
      </div>
    </section>
  );
}
