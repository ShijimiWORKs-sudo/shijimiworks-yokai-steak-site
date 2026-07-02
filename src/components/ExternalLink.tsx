import Link from "next/link";
import type { ReactNode } from "react";
import { ExternalLinkIcon } from "./ExternalLinkIcon";

type Props = {
  href: string;
  children: ReactNode;
  label: string;
  tone?: "light" | "dark";
  className?: string;
};

export function ExternalLink({ href, children, label, tone = "light", className = "" }: Props) {
  const isPlaceholder = href === "#";
  const styles =
    tone === "dark"
      ? "border-white/25 text-white hover:border-white/60 hover:bg-white/5"
      : "border-slate-900/15 bg-white text-slate-800 hover:border-sky-600 hover:text-sky-800";

  const classes = `external-link inline-flex min-h-11 items-center justify-center rounded-full border px-4 py-2.5 text-xs font-bold transition duration-200 ${styles} ${className}`;

  if (isPlaceholder) {
    return (
      <span
        aria-label={`${label}（リンク未設定）`}
        aria-disabled="true"
        title={`${label}：公開前にURL設定が必要です`}
        className={`${classes} cursor-not-allowed select-none border-dashed opacity-45 saturate-0`}
      >
        {children}
        <span className="ml-1.5 text-[.72em] font-medium" aria-hidden="true">
          準備中
        </span>
      </span>
    );
  }

  if (href.startsWith("mailto:")) {
    return (
      <a href={href} aria-label={`${label}（メールを作成）`} title={`${label}：メールを作成`} className={`${classes} hover:-translate-y-0.5`}>
        {children}
        <ExternalLinkIcon mail />
      </a>
    );
  }

  return (
    <Link
      href={href}
      aria-label={`${label}（外部サイト）`}
      title={`${label}：外部サイトを開く`}
      target="_blank"
      rel="noopener noreferrer"
      className={`${classes} hover:-translate-y-0.5`}
    >
      {children}
      <ExternalLinkIcon />
    </Link>
  );
}
