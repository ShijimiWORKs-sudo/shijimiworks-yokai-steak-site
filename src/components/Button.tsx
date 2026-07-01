import Link from "next/link";
import type { ReactNode } from "react";

type Props = { href: string; children: ReactNode; variant?: "primary" | "outline" | "dark" };

export function Button({ href, children, variant = "primary" }: Props) {
  const styles = {
    primary: "bg-sky-700 text-white shadow-sm hover:bg-sky-800 hover:shadow-md",
    outline: "border border-current bg-white/70 hover:bg-white",
    dark: "bg-stone-100 text-stone-950 shadow-sm hover:bg-white hover:shadow-md",
  }[variant];
  return <Link href={href} className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition duration-200 hover:-translate-y-0.5 active:translate-y-0 ${styles}`}>{children}</Link>;
}
