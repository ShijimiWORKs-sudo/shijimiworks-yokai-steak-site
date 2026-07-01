import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { StatusBadge } from "@/components/StatusBadge";
import { WorkCard } from "@/components/WorkCard";
import { getWorkBySlug, works } from "@/data/works";
import { brandLabel, formatDate } from "@/lib/utils";

export function generateStaticParams() { return works.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  return work ? { title: work.title, description: work.description } : { title: "Work" };
}

export default async function WorkDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const work = getWorkBySlug(slug); if (!work) notFound();
  const related = works.filter((item) => item.slug !== work.slug && (item.brand === work.brand || item.brand === "both")).slice(0, 3);
  const creative = work.brand === "youkai-steak";
  return <div className="detail-page bg-[#f7f5ef]"><article><header className={`px-5 py-16 sm:px-8 lg:px-12 lg:py-24 ${creative ? "bg-[#1a0f0b] text-stone-100" : "bg-[#eaf1f3] text-slate-950"}`}><div className="mx-auto max-w-5xl"><Link href="/works" className={`text-sm font-bold ${creative ? "text-amber-300" : "text-sky-700"}`}>← Worksへ戻る</Link><div className="mt-10 flex flex-wrap items-center gap-3"><span className="text-xs font-bold uppercase tracking-widest">{brandLabel(work.brand)} / {work.category}</span><StatusBadge status={work.status} /></div><h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight tracking-[-.04em] sm:text-6xl">{work.title}</h1><p className={`mt-7 max-w-3xl text-xl leading-9 ${creative ? "text-stone-300" : "text-slate-600"}`}>{work.description}</p><time dateTime={work.date} className="mt-6 block text-sm opacity-55">{formatDate(work.date)}</time></div></header>
    <div className="mx-auto grid max-w-5xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_15rem] lg:px-0 lg:py-20"><div><p className="border-l-2 border-sky-700 pl-6 text-lg font-bold leading-8 text-slate-700">{work.details}</p><div className="mt-10 space-y-6 text-base leading-9 text-slate-700">{work.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><div className="mt-12"><h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">Related links</h2><div className="mt-4 flex flex-wrap gap-3">{work.links.map((link) => <Link key={link.label} href={link.href} className="rounded-full border border-slate-900/15 bg-white px-4 py-2 text-sm font-bold text-slate-700 hover:border-sky-600">{link.label} ↗</Link>)}</div></div></div><aside><p className="text-xs font-bold uppercase tracking-widest text-slate-400">Tags</p><div className="mt-4 flex flex-wrap gap-2">{work.tags.map((tag) => <span key={tag} className="rounded-full bg-white px-3 py-2 text-xs font-semibold text-slate-600">#{tag}</span>)}</div></aside></div></article>
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-12"><div className="mx-auto max-w-7xl"><h2 className="text-3xl font-black text-slate-950">Other Works</h2><div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{related.map((item) => <WorkCard key={item.slug} work={item} />)}</div></div></section>
    <section className="bg-sky-950 px-5 py-14 text-white sm:px-8"><div className="mx-auto flex max-w-5xl flex-col justify-between gap-6 sm:flex-row sm:items-center"><div><h2 className="text-2xl font-bold">この制作について相談する</h2><p className="mt-2 text-sm text-sky-100/70">似た課題やアイデアがあれば、整理からご相談ください。</p></div><Button href="/contact" variant="dark">Contact</Button></div></section></div>;
}
