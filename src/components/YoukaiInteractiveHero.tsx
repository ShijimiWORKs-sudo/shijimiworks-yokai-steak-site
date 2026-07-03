"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { links } from "@/data/links";

type StoryCategoryKey = "novel" | "movie" | "podcast" | "youtube" | "rakugo" | "note";

type StoryLink = {
  label: string;
  href: string;
};

type StoryCategory = {
  key: StoryCategoryKey;
  code: string;
  title: string;
  panelTitle: string;
  image: string;
  description: string;
  links: StoryLink[];
};

const storyCategories: StoryCategory[] = [
  {
    key: "novel",
    code: "NOVEL",
    title: "小説",
    panelTitle: "小説を読む",
    image: "/images/youkai/youkai-novel.png",
    description:
      "妖怪ステーキの小説は、異世界、現代、記憶、孤独、選択をテーマにした物語群です。読んで終わるだけではなく、物語の中に残る問いを、あなた自身の人生と重ねられるように書いています。",
    links: [
      { label: "小説家になろう", href: links.youkaiSteakNarou },
      { label: "カクヨム", href: links.youkaiSteakKakuyomu },
      { label: "note", href: links.youkaiSteakNote },
    ],
  },
  {
    key: "movie",
    code: "MOVIE",
    title: "映画感想",
    panelTitle: "映画から人生を読み直す",
    image: "/images/youkai/youkai-cinema.png",
    description:
      "妖怪ステーキの映画感想は、作品のあらすじ紹介だけではありません。映画の中にある孤独、選択、家族、仕事、喪失、再生を、自分の人生に引き寄せて読み直します。観た映画を、ただの感想で終わらせず、明日を少し変えるための言葉に変えていく。それが妖怪ステーキの映画記事です。",
    links: [
      { label: "note", href: links.youkaiSteakNote },
      { label: "Articles", href: links.articles },
    ],
  },
  {
    key: "podcast",
    code: "PODCAST",
    title: "Podcast",
    panelTitle: "Podcastを聴く",
    image: "/images/youkai/youkai-podcast.png",
    description:
      "映画の余韻、創作の裏側、日々の違和感を、声で届ける場所です。文章では届きにくい温度や間を、そのまま耳に残すために話しています。夜の作業中、移動中、眠る前に、静かに聴ける物語のラジオです。",
    links: [{ label: "Spotify Podcast", href: links.youkaiSteakPodcast }],
  },
  {
    key: "youtube",
    code: "YOUTUBE",
    title: "YouTube朗読",
    panelTitle: "YouTube朗読",
    image: "/images/youkai/youkai-youtube-reading.pn.png",
    description:
      "短編小説や物語の断片を、声と映像で届ける場所です。読むだけではなく、耳で聴き、映像として感じることで、物語の余韻を別の形で残します。",
    links: [{ label: "YouTube", href: links.youkaiSteakYoutube }],
  },
  {
    key: "rakugo",
    code: "RAKUGO",
    title: "落語感想・解説",
    panelTitle: "落語感想・解説",
    image: "/images/youkai/youkai-rakugo.png",
    description:
      "古典落語を、古い芸能としてではなく、今を生きる人間の物語として読み直します。笑いの奥にある寂しさ、人情、弱さ、ずるさ、優しさ。その一つひとつを、現代の言葉でほどいていきます。",
    links: [
      { label: "note", href: links.youkaiSteakNote },
      { label: "Articles", href: links.articles },
    ],
  },
  {
    key: "note",
    code: "NOTE",
    title: "note",
    panelTitle: "noteで読む",
    image: "/images/youkai/youkai-note.png",
    description:
      "妖怪ステーキのnoteでは、映画、人生、創作、感情整理をつなげて書いています。映画から学ぶ人生設計、物語から考える人間関係、作品を通して見えてくる自分自身の課題。ただ感想を読むだけではなく、最後には自分の生活や考え方に持ち帰れるような記事を目指しています。",
    links: [{ label: "妖怪ステーキ note", href: links.youkaiSteakNote }],
  },
];

const navLinks = [
  { label: "Home", href: links.home },
  { label: "Works", href: links.works },
  { label: "Stories", href: links.youkaiSteak },
  { label: "Articles", href: links.articles },
  { label: "About", href: `${links.youkaiSteak}#youkai-about` },
  { label: "note", href: links.youkaiSteakNote },
  { label: "Substack", href: links.youkaiSteakSubstack },
  { label: "X", href: links.youkaiSteakX },
  { label: "YouTube", href: links.youkaiSteakYoutube },
  { label: "Podcast", href: links.youkaiSteakPodcast },
  { label: "ココナラ", href: links.coconala },
  { label: "Contact", href: links.contact },
];

function isExternal(href: string) {
  return href.startsWith("http");
}

export function YoukaiInteractiveHero() {
  const [activeKey, setActiveKey] = useState<StoryCategoryKey | null>(null);
  const activeCategory = storyCategories.find((category) => category.key === activeKey) ?? null;

  return (
    <section className="youkai-interactive-shell">
      <header className="youkai-local-header">
        <Link href={links.youkaiSteak} className="youkai-local-brand" aria-label="妖怪ステーキ トップ">
          <Image src="/images/youkai/icon.jpg" alt="" width={58} height={58} className="youkai-local-icon" />
          <span>
            <strong>妖怪ステーキ</strong>
            <small>Novel / Cinema / Podcast / YouTube / Rakugo</small>
          </span>
        </Link>
        <nav className="youkai-local-nav" aria-label="妖怪ステーキ ナビゲーション">
          {navLinks.map((item) => (
            <Link
              key={`${item.label}-${item.href}`}
              href={item.href}
              target={isExternal(item.href) ? "_blank" : undefined}
              rel={isExternal(item.href) ? "noopener noreferrer" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <div className="youkai-visual-hero">
        <Image
          src="/images/youkai/youkai-hero-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="youkai-visual-hero-bg"
        />
        <div className="youkai-visual-hero-shade" aria-hidden="true" />
        <div className="youkai-visual-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="youkai-visual-copy"
          >
            <p>Story Room / Midnight Radio / Cinema Notes</p>
            <h1>物語を紡ぎ、<br />世界を届ける。</h1>
            <span>
              小説、映画感想、Podcast、YouTube朗読、落語感想。<br />
              夜に読む、観る、聴く物語を、さまざまな形で届けています。
            </span>
          </motion.div>
        </div>
      </div>

      <div className="youkai-story-gate" id="youkai-story-gate">
        <AnimatePresence mode="wait">
          {activeCategory ? (
            <motion.article
              key={activeCategory.key}
              className="youkai-story-panel"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div className="youkai-story-panel-image">
                <Image src={activeCategory.image} alt="" fill sizes="(min-width: 1024px) 46vw, 100vw" />
              </div>
              <div className="youkai-story-panel-body">
                <button type="button" className="youkai-story-back" onClick={() => setActiveKey(null)}>
                  ← Back
                </button>
                <p>{activeCategory.code}</p>
                <h2>{activeCategory.panelTitle}</h2>
                <span>{activeCategory.description}</span>
                <div className="youkai-story-panel-links" aria-label={`${activeCategory.panelTitle} のリンク`}>
                  {activeCategory.links.map((link) => (
                    <Link
                      key={`${activeCategory.key}-${link.label}`}
                      href={link.href}
                      target={isExternal(link.href) ? "_blank" : undefined}
                      rel={isExternal(link.href) ? "noopener noreferrer" : undefined}
                    >
                      {link.label}
                      <ArrowUpRight aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </div>
            </motion.article>
          ) : (
            <motion.div
              key="gate"
              className="youkai-story-grid-wrap"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <header className="youkai-story-gate-header">
                <p>Creative Categories</p>
                <h2>物語の入口</h2>
                <span>読む、観る、聴く、語る。好きな扉を選んでください。</span>
              </header>
              <div className="youkai-story-grid">
                {storyCategories.map((category) => (
                  <button
                    key={category.key}
                    type="button"
                    className="youkai-story-card"
                    onClick={() => setActiveKey(category.key)}
                  >
                    <Image src={category.image} alt="" fill sizes="(min-width: 1024px) 16vw, 50vw" />
                    <span>{category.code}</span>
                    <strong>{category.title}</strong>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
