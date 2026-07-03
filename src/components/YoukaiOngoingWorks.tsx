import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { links } from "@/data/links";

type OngoingWork = {
  category: string;
  title: string;
  description: string;
  image: string;
  status: string;
  href: string;
};

const ongoingWorks: OngoingWork[] = [
  {
    category: "NOVEL",
    title: "連載小説",
    description: "構成・執筆・更新を進めている物語。",
    image: "/images/youkai/youkai-novel.png",
    status: "進行中",
    href: links.youkaiSteakNarou,
  },
  {
    category: "PODCAST",
    title: "Podcast番組",
    description: "映画と創作について、声で語る番組。",
    image: "/images/youkai/youkai-podcast.png",
    status: "毎週更新",
    href: links.youkaiSteakPodcast,
  },
  {
    category: "YOUTUBE",
    title: "YouTube朗読シリーズ",
    description: "短編小説や言葉を、声と映像で届ける試み。",
    image: "/images/youkai/youkai-youtube-reading.pn.png",
    status: "制作中",
    href: links.youkaiSteakYoutube,
  },
  {
    category: "RAKUGO",
    title: "落語研究ノート",
    description: "古典落語を現代の物語として読み直す記録。",
    image: "/images/youkai/youkai-rakugo.png",
    status: "記録中",
    href: links.youkaiSteakNote,
  },
  {
    category: "MOVIE",
    title: "映画レビュー",
    description: "観た映画の余韻を、生活と言葉へつなげる記録。",
    image: "/images/youkai/youkai-cinema.png",
    status: "更新中",
    href: links.articles,
  },
  {
    category: "NOTE",
    title: "note記事群",
    description: "映画、人生、創作、感情整理をつなぐ記事群。",
    image: "/images/youkai/youkai-note.png",
    status: "執筆中",
    href: links.youkaiSteakNote,
  },
];

function isExternal(href: string) {
  return href.startsWith("http");
}

export function YoukaiOngoingWorks() {
  return (
    <section className="youkai-ongoing-works-section" aria-labelledby="youkai-ongoing-title">
      <div className="youkai-ongoing-works-inner">
        <header className="youkai-ongoing-works-header">
          <p>Ongoing Works</p>
          <h2 id="youkai-ongoing-title">進行中の創作</h2>
          <span>完成するまでの時間も、物語の一部として記録しています。</span>
        </header>

        <div className="youkai-ongoing-works-grid">
          {ongoingWorks.map((work, index) => (
            <article key={work.title} className="youkai-ongoing-work-card">
              <Link
                href={work.href}
                target={isExternal(work.href) ? "_blank" : undefined}
                rel={isExternal(work.href) ? "noopener noreferrer" : undefined}
                className="youkai-ongoing-work-link"
              >
                <span className="youkai-ongoing-work-number">0{index + 1}</span>
                <span className="youkai-ongoing-work-image">
                  <Image src={work.image} alt="" fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
                </span>
                <span className="youkai-ongoing-work-content">
                  <span className="youkai-ongoing-work-meta">
                    <b>{work.category}</b>
                    <small>{work.status}</small>
                  </span>
                  <strong>{work.title}</strong>
                  <em>{work.description}</em>
                  <span className="youkai-ongoing-work-cta">
                    覗いてみる
                    <ArrowUpRight aria-hidden="true" />
                  </span>
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
