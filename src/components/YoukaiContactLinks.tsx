import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { links } from "@/data/links";

type ContactLink = {
  label: string;
  href: string;
  note: string;
  primary?: boolean;
};

const contactLinks: ContactLink[] = [
  { label: "お問い合わせ", href: links.contact, note: "サイト内の連絡窓口", primary: true },
  { label: "ココナラで相談", href: links.coconala, note: "制作・相談の依頼" },
  { label: "note", href: links.youkaiSteakNote, note: "記事と創作ノート" },
  { label: "Substack", href: links.youkaiSteakSubstack, note: "メールマガジン" },
  { label: "X", href: links.youkaiSteakX, note: "更新と短い記録" },
  { label: "YouTube", href: links.youkaiSteakYoutube, note: "朗読と映像" },
  { label: "Podcast", href: links.youkaiSteakPodcast, note: "夜の声の記録" },
  { label: "小説家になろう", href: links.youkaiSteakNarou, note: "連載小説" },
  { label: "カクヨム", href: links.youkaiSteakKakuyomu, note: "小説置き場" },
];

function isExternal(href: string) {
  return href.startsWith("http");
}

export function YoukaiContactLinks() {
  return (
    <section className="youkai-contact-links-section" aria-labelledby="youkai-contact-title">
      <div className="youkai-contact-links-inner">
        <div className="youkai-contact-links-copy">
          <p className="youkai-section-eyebrow">Contact / Links</p>
          <h2 id="youkai-contact-title">Contact / Links</h2>
          <span>感想、制作、相談、各媒体への入口はこちらから。</span>
          <a className="youkai-contact-mail" href={links.mail}>
            <Mail aria-hidden="true" />
            shijimiworks.takaki@gmail.com
          </a>
        </div>

        <div className="youkai-contact-link-grid">
          {contactLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target={isExternal(item.href) ? "_blank" : undefined}
              rel={isExternal(item.href) ? "noopener noreferrer" : undefined}
              className={`youkai-contact-link-card ${item.primary ? "is-primary" : ""}`}
            >
              <span>
                <strong>{item.label}</strong>
                <small>{item.note}</small>
              </span>
              <ArrowUpRight aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
