import Link from "next/link";
import { links } from "@/data/links";

const navLinks = [
  { label: "Home", href: links.home },
  { label: "Works", href: links.works },
  { label: "Stories", href: links.youkaiSteak },
  { label: "Articles", href: links.articles },
  { label: "About", href: `${links.youkaiSteak}#youkai-about` },
  { label: "Contact", href: links.contact },
];

const mediaLinks = [
  { label: "note", href: links.youkaiSteakNote },
  { label: "Substack", href: links.youkaiSteakSubstack },
  { label: "X", href: links.youkaiSteakX },
  { label: "YouTube", href: links.youkaiSteakYoutube },
  { label: "Podcast", href: links.youkaiSteakPodcast },
  { label: "Mail", href: links.mail },
];

function isExternal(href: string) {
  return href.startsWith("http");
}

export function YoukaiFooter() {
  return (
    <footer className="youkai-footer">
      <div className="youkai-footer-inner">
        <div className="youkai-footer-brand">
          <strong>妖怪ステーキ</strong>
          <span>Novel / Cinema / Podcast / YouTube / Rakugo</span>
        </div>

        <nav className="youkai-footer-nav" aria-label="妖怪ステーキ フッターナビゲーション">
          {navLinks.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <nav className="youkai-footer-nav youkai-footer-media" aria-label="妖怪ステーキ メディアリンク">
          {mediaLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target={isExternal(item.href) ? "_blank" : undefined}
              rel={isExternal(item.href) ? "noopener noreferrer" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <p className="youkai-footer-copy">© 2026 妖怪ステーキ / ShijimiWORKs</p>
    </footer>
  );
}
