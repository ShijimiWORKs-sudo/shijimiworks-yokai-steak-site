import Link from "next/link";
import type { Work } from "@/types/site";
import { brandLabel, formatDate } from "@/lib/utils";
import { StatusBadge } from "./StatusBadge";

export function WorkCard({ work }: { work: Work }) {
  const creative = work.brand === "youkai-steak";
  return (
    <Link href={`/works/${work.slug}`} className={`work-card group relative flex min-h-80 flex-col overflow-hidden rounded-3xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${creative ? "border-amber-900/20 bg-[#fffaf2]" : "border-sky-950/10 bg-white"}`}>
      <div className={`absolute inset-x-0 top-0 h-1 ${creative ? "bg-gradient-to-r from-[#51231a] to-amber-500" : "bg-gradient-to-r from-sky-700 to-sky-300"}`} />
      <div className="flex items-start justify-between gap-3"><p className={`text-xs font-bold uppercase tracking-widest ${creative ? "text-amber-800" : "text-sky-700"}`}>{work.category}</p><StatusBadge status={work.status} /></div>
      <p className="mt-6 text-[.65rem] font-bold uppercase tracking-[.16em] text-neutral-400">{brandLabel(work.brand)} · {formatDate(work.date)}</p>
      <h3 className="work-card-title mt-3 text-xl font-bold leading-snug text-slate-900 group-hover:text-sky-800">{work.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-neutral-600">{work.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">{work.tags.slice(0, 3).map((tag) => <span key={tag} className="rounded-full bg-black/5 px-2.5 py-1 text-[.65rem] font-semibold text-neutral-500">#{tag}</span>)}</div>
      <p className={`card-detail-link mt-6 text-xs font-bold ${creative ? "text-amber-800" : "text-sky-700"}`}>詳細を見る <span aria-hidden="true">→</span></p>
    </Link>
  );
}
