import Link from "next/link";
import type { Article } from "@/types/site";
import { brandLabel, formatDate } from "@/lib/utils";

export function ArticleCard({ article }: { article: Article }) {
  const creative = article.brand === "youkai-steak";
  return (
    <Link href={`/articles/${article.slug}`} className={`article-card ${creative ? "brand-card-story" : "brand-card-studio"} group flex min-h-72 flex-col rounded-3xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${creative ? "border-amber-900/20 bg-[#fffaf2]" : "border-black/10 bg-white"}`}>
      <div className="flex justify-between gap-4 text-xs font-bold uppercase tracking-widest text-neutral-400"><span className={creative ? "text-amber-800" : "text-sky-700"}>{article.category}</span><time dateTime={article.date}>{formatDate(article.date)}</time></div>
      <p className="mt-6 text-[.65rem] font-bold uppercase tracking-[.16em] text-neutral-400">{brandLabel(article.brand)}</p>
      <h3 className="article-card-title mt-3 text-xl font-bold leading-snug text-slate-900 group-hover:text-sky-800">{article.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-neutral-600">{article.excerpt}</p>
      <div className="mt-5 flex flex-wrap gap-2">{article.tags.slice(0, 3).map((tag) => <span key={tag} className="rounded-full bg-black/5 px-2.5 py-1 text-[.65rem] font-semibold text-neutral-500">#{tag}</span>)}</div>
      <p className={`card-detail-link mt-6 text-xs font-bold ${creative ? "text-amber-800" : "text-sky-700"}`}>読む <span aria-hidden="true">→</span></p>
    </Link>
  );
}
