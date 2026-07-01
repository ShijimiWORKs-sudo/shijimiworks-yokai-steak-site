import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/ArticleCard";
import { Button } from "@/components/Button";
import { ExternalLinks } from "@/components/ExternalLinks";
import { articles, getArticleBySlug } from "@/data/articles";
import { links } from "@/data/links";
import { brandLabel, formatDate } from "@/lib/utils";

export function generateStaticParams() { return articles.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  return article ? { title: article.title, description: article.excerpt } : { title: "Article" };
}

export default async function ArticleDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const article = getArticleBySlug(slug); if (!article) notFound();
  const related = articles.filter((item) => item.slug !== article.slug && (item.brand === article.brand || item.brand === "both")).slice(0, 3);
  const creative = article.brand === "youkai-steak";
  const continuationLinks = [
    { label: "noteを見る", href: creative ? links.youkaiSteakNote : links.shijimiworksNote },
    { label: "Substackを見る", href: creative ? links.youkaiSteakSubstack : links.shijimiworksSubstack },
  ] as const;
  return <div className="detail-page bg-[#f7f5ef]"><article><header className={`px-5 py-16 sm:px-8 lg:px-12 lg:py-24 ${creative ? "bg-[#1a0f0b] text-stone-100" : "bg-[#eaf1f3] text-slate-950"}`}><div className="mx-auto max-w-4xl"><Link href="/articles" className={`text-sm font-bold ${creative ? "text-amber-300" : "text-sky-700"}`}>← Articlesへ戻る</Link><p className="mt-10 text-xs font-bold uppercase tracking-[.18em] opacity-65">{brandLabel(article.brand)} / {article.category}</p><h1 className="mt-5 text-4xl font-black leading-tight tracking-[-.045em] sm:text-6xl">{article.title}</h1><time dateTime={article.date} className="mt-6 block text-sm opacity-55">{formatDate(article.date)}</time><div className="mt-6 flex flex-wrap gap-2">{article.tags.map((tag) => <span key={tag} className="rounded-full border border-current/15 px-3 py-1.5 text-xs font-semibold opacity-75">#{tag}</span>)}</div></div></header>
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:py-20"><p className="border-l-2 border-sky-700 pl-6 text-xl font-bold leading-9 text-slate-700">{article.excerpt}</p><div className="mt-12 space-y-8 text-[1.05rem] leading-9 text-slate-700">{article.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><div className="mt-14 border-t border-slate-900/10 pt-8"><p className="text-xs font-bold uppercase tracking-widest text-slate-400">Continue reading</p><ExternalLinks items={continuationLinks} className="mt-4" /></div></div></article>
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-12"><div className="mx-auto max-w-7xl"><h2 className="text-3xl font-black text-slate-950">Related Articles</h2><div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{related.map((item) => <ArticleCard key={item.slug} article={item} />)}</div></div></section>
    <section className="bg-[#eaf1f3] px-5 py-14 sm:px-8"><div className="mx-auto flex max-w-4xl flex-col justify-between gap-6 sm:flex-row sm:items-center"><div><h2 className="text-2xl font-bold text-slate-950">記事・発信について相談する</h2><p className="mt-2 text-sm text-slate-600">文章制作、媒体設計、創作についての連絡はこちらから。</p></div><Button href="/contact">Contact</Button></div></section></div>;
}
