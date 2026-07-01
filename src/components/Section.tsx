import type { ReactNode } from "react";

type Props = { eyebrow?: string; title: string; description?: string; children: ReactNode; className?: string };

export function Section({ eyebrow, title, description, children, className = "" }: Props) {
  return (
    <section className={`px-5 py-20 sm:px-8 lg:px-12 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 max-w-3xl">
          {eyebrow && <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-sky-700">{eyebrow}</p>}
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          {description && <p className="mt-4 text-base leading-8 text-neutral-600">{description}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
