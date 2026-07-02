import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { ContentHero } from "@/components/ContentHero";
import { ExternalLinks } from "@/components/ExternalLinks";
import { links } from "@/data/links";
import { getArticlesFromNotion } from "@/lib/notion";

export const metadata: Metadata = {
  title: "Articles",
  description: "AI、創作、映画、落語、発信についての文章・記事・マガジン・感想の一覧。",
};
const publishingLinks = [
  { label: "ShijimiWORKs note", href: links.shijimiworksNote },
  { label: "妖怪ステーキ note", href: links.youkaiSteakNote },
] as const;
const categories = ["All", "AI", "Web", "Automation", "note", "Substack", "Cinema", "Novel", "Podcast", "Rakugo", "Essay"];

export default async function ArticlesPage() {
  const articles = await getArticlesFromNotion();
  return <div className="content-page archive-page articles-archive bg-[#f7f5ef]"><ContentHero eyebrow="Journal / Magazine" title="Articles" copy="AI、創作、映画、落語、発信の記録。" description="ShijimiWORKsと妖怪ステーキの文章・記事・マガジン・感想をまとめています。" />
    <section className="px-5 pb-20 sm:px-8 lg:px-12"><div className="mx-auto max-w-7xl"><div className="flex flex-wrap gap-2" aria-label="記事カテゴリ">{categories.map((category, index) => <span key={category} className={`rounded-full border px-4 py-2 text-xs font-bold ${index === 0 ? "border-slate-900 bg-slate-900 text-white" : "border-slate-900/10 bg-white text-slate-600"}`}>{category}</span>)}</div><p className="mt-8 text-sm text-slate-500">{articles.length} articles</p><div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{articles.map((article) => <ArticleCard key={article.slug} article={article} />)}</div><div className="mt-12 flex flex-col justify-between gap-6 rounded-3xl bg-slate-950 p-7 text-white sm:flex-row sm:items-center sm:p-9"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-sky-300">External publishing</p><h2 className="mt-3 text-2xl font-bold">続きはnoteとSubstackでも。</h2><p className="mt-2 text-sm leading-7 text-slate-400">記事、マガジン、ニュースレターの更新先へ移動できます。</p></div><ExternalLinks items={publishingLinks} tone="dark" /></div></div></section></div>;
}
