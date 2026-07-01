import type { Service } from "@/types/site";

export function ServiceCard({ service }: { service: Service }) {
  return <article className="rounded-3xl border border-black/10 bg-white p-7"><h3 className="text-xl font-bold">{service.title}</h3><p className="mt-3 leading-7 text-neutral-600">{service.description}</p><div className="mt-6 flex flex-wrap gap-2">{service.tags.map((tag) => <span key={tag} className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-600">{tag}</span>)}</div></article>;
}
