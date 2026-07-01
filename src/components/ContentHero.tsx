import type { ReactNode } from "react";

export function ContentHero({ eyebrow, title, copy, description, children }: { eyebrow: string; title: string; copy: string; description: string; children?: ReactNode }) {
  return (
    <section className="content-hero overflow-hidden px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_.8fr] lg:items-end">
        <div><p className="text-xs font-bold uppercase tracking-[.25em] text-sky-700">{eyebrow}</p><h1 className="mt-5 text-5xl font-black tracking-[-.05em] text-slate-950 sm:text-6xl lg:text-7xl">{title}</h1><p className="mt-6 text-xl font-bold leading-9 text-slate-700 sm:text-2xl">{copy}</p></div>
        <div><p className="max-w-2xl leading-8 text-slate-600">{description}</p>{children && <div className="mt-6">{children}</div>}</div>
      </div>
    </section>
  );
}
