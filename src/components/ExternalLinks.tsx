import { ExternalLink } from "@/components/ExternalLink";

export type ExternalLinkItem = { label: string; href: string };

export function ExternalLinks({ items, tone = "light", className = "" }: { items: readonly ExternalLinkItem[]; tone?: "light" | "dark"; className?: string }) {
  return (
    <div className={`flex flex-wrap gap-2.5 ${className}`} aria-label="外部リンク">
      {items.map((item) => <ExternalLink key={item.label} href={item.href} label={item.label} tone={tone}>{item.label}</ExternalLink>)}
    </div>
  );
}
