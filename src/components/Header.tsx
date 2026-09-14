"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/data/site";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-scrolled={scrolled}
      className="site-header sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-5 px-5 py-3.5 sm:px-8 lg:px-12 lg:py-5">
        <Link href="/" className="site-logo relative z-10 text-xs font-black tracking-[-0.01em] sm:text-sm">
          ShijimiWORKs <span className="mx-1 text-current opacity-35">/</span> 妖怪ステーキ
        </Link>
        <nav aria-label="メインナビゲーション" className="site-nav relative z-10 flex flex-wrap items-center justify-end gap-x-4 gap-y-1 text-[0.7rem] font-bold tracking-[0.035em] sm:gap-x-5 sm:text-xs">
          {site.navigation.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`whitespace-nowrap rounded px-1 py-1.5 transition hover:bg-black/[.035] hover:opacity-70 ${isActive ? "opacity-100 underline underline-offset-4" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
