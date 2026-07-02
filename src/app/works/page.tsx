import { Button } from "@/components/Button";
import { ContentHero } from "@/components/ContentHero";
import { WorkCard } from "@/components/WorkCard";
import { getWorksFromNotion } from "@/lib/notion";

export const metadata: Metadata = {
  title: "Works",
  description: "ShijimiWORKsの制作実績と、妖怪ステーキの創作活動を横断してまとめた作品・制作一覧。",
};
const categories = ["All", "Web", "App", "Automation", "Writing", "Media", "Novel", "Cinema", "Podcast", "YouTube", "Rakugo"];

export default async function WorksPage() {
  const works = await getWorksFromNotion();
  return <div className="content-page archive-page works-archive bg-[#f7f5ef]"><ContentHero eyebrow="Portfolio / Creative Archive" title="Works" copy="制作したもの、設計したもの、書いたもの、届けているもの。" description="ShijimiWORKsの制作実績と、妖怪ステーキの創作活動を横断してまとめています。" />
    <section className="px-5 pb-20 sm:px-8 lg:px-12"><div className="mx-auto max-w-7xl"><div className="flex flex-wrap gap-2" aria-label="カテゴリフィルター">{categories.map((category, index) => <span key={category} className={`rounded-full border px-4 py-2 text-xs font-bold ${index === 0 ? "border-slate-900 bg-slate-900 text-white" : "border-slate-900/10 bg-white text-slate-600"}`}>{category}</span>)}</div><p className="mt-8 text-sm text-slate-500">{works.length} projects / works</p><div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{works.map((work) => <WorkCard key={work.slug} work={work} />)}</div></div></section>
    <section className="bg-sky-950 px-5 py-16 text-white sm:px-8 lg:px-12"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 lg:flex-row lg:items-end"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-sky-300">Contact</p><h2 className="mt-4 text-3xl font-black sm:text-4xl">一緒に作るものを、ここから。</h2><p className="mt-4 max-w-2xl leading-7 text-sky-100/70">Web、文章、自動化、創作。まだ輪郭だけの相談でも、整理からお手伝いします。</p></div><Button href="/contact" variant="dark">相談する</Button></div></section></div>;
}
import type { Metadata } from "next";
