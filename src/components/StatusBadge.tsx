import type { WorkStatus } from "@/types/site";

export function StatusBadge({ status }: { status: WorkStatus }) {
  return <span className="rounded-full border border-black/10 bg-white/70 px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-neutral-600">{status}</span>;
}
