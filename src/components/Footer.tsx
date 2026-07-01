import Link from "next/link";
import { ExternalLinks } from "@/components/ExternalLinks";
import { links } from "@/data/links";
import { site } from "@/data/site";

const shijimiLinks = [
  { href: links.shijimiworksNote, label: "note" },
  { href: links.shijimiworksSubstack, label: "Substack" },
  { href: links.shijimiworksX, label: "X" },
  { href: links.coconala, label: "ココナラ" },
] as const;

const youkaiLinks = [
  { href: links.youkaiSteakNote, label: "note" },
  { href: links.youkaiSteakX, label: "X" },
  { href: links.youkaiSteakYoutube, label: "YouTube" },
  { href: links.youkaiSteakPodcast, label: "Podcast" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0e0d0c] px-5 py-14 text-stone-300 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_auto_1.2fr]">
        <div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-lg font-bold text-white">
            <Link href={links.shijimiworks} className="transition hover:text-sky-300">
              ShijimiWORKs
            </Link>
            <span className="text-stone-700">/</span>
            <Link href={links.youkaiSteak} className="font-serif transition hover:text-amber-200">
              妖怪ステーキ
            </Link>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-7 text-stone-500">AIと物語のあいだに、新しい価値をつくりつづける。</p>
        </div>
        <nav aria-label="フッターナビゲーション" className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
          {site.navigation.map((item) => (
            <Link key={item.href} href={item.href} className="rounded px-1 py-1.5 transition hover:bg-white/5 hover:text-white">
              {item.label}
            </Link>
          ))}
          <Link href={links.admin} className="rounded px-1 py-1.5 text-stone-500 transition hover:bg-white/5 hover:text-white">
            Admin
          </Link>
        </nav>
        <div className="grid content-start gap-5 sm:grid-cols-2 lg:max-w-xl">
          <div>
            <p className="mb-3 text-xs font-bold text-sky-300">ShijimiWORKs</p>
            <ExternalLinks items={shijimiLinks} tone="dark" />
          </div>
          <div>
            <p className="mb-3 text-xs font-bold text-amber-200">妖怪ステーキ</p>
            <ExternalLinks items={youkaiLinks} tone="dark" />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-wrap justify-between gap-3 border-t border-white/10 pt-6 text-[.65rem] uppercase tracking-[.16em] text-stone-700">
        <span>Two Names, One Studio.</span>
        <Link href={links.contact} className="transition hover:text-stone-300">
          Contact / お問い合わせ
        </Link>
        <span>© 2026</span>
      </div>
    </footer>
  );
}
