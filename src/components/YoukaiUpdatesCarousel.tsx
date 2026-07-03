"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";
import { links } from "@/data/links";

type YoukaiUpdate = {
  category: string;
  date: string;
  title: string;
  description: string;
  image: string;
  href: string;
  action: string;
};

const updates: YoukaiUpdate[] = [
  {
    category: "NOVEL",
    date: "2026.07.03",
    title: "月と影の記憶 第8話 更新",
    description: "失われた記憶と、夜に残る影を追う物語。",
    image: "/images/youkai/youkai-novel.png",
    href: links.youkaiSteakNarou,
    action: "読む",
  },
  {
    category: "PODCAST",
    date: "2026.06.29",
    title: "声で語る物語 #12 公開",
    description: "映画と日常のあいだに残る、静かな夜のトーク。",
    image: "/images/youkai/youkai-podcast.png",
    href: links.youkaiSteakPodcast,
    action: "聴く",
  },
  {
    category: "MOVIE",
    date: "2026.06.24",
    title: "PERFECT DAYS 考察",
    description: "静かな日常の中にある、選択と再生の物語。",
    image: "/images/youkai/youkai-cinema.png",
    href: links.youkaiSteakNote,
    action: "読む",
  },
  {
    category: "YOUTUBE",
    date: "2026.06.18",
    title: "短編「雨の記憶」公開",
    description: "小さな雨音とともに読む、夜の短編朗読。",
    image: "/images/youkai/youkai-youtube-reading.pn.png",
    href: links.youkaiSteakYoutube,
    action: "観る",
  },
  {
    category: "RAKUGO",
    date: "2026.06.12",
    title: "「芝浜」を観て",
    description: "人情噺の奥にある、弱さと優しさについて。",
    image: "/images/youkai/youkai-rakugo.png",
    href: links.youkaiSteakNote,
    action: "読む",
  },
  {
    category: "NOTE",
    date: "2026.06.08",
    title: "映画から人生を読み直す",
    description: "映画の感想を、自分の生活に持ち帰るための記録。",
    image: "/images/youkai/youkai-note.png",
    href: links.youkaiSteakNote,
    action: "読む",
  },
];

function isExternal(href: string) {
  return href.startsWith("http");
}

export function YoukaiUpdatesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const moveTo = (nextIndex: number) => {
    const normalizedIndex = (nextIndex + updates.length) % updates.length;
    setActiveIndex(normalizedIndex);

    const track = trackRef.current;
    const target = track?.children.item(normalizedIndex) as HTMLElement | null;
    if (!track || !target) return;

    track.scrollTo({
      left: target.offsetLeft,
      behavior: "smooth",
    });
  };

  return (
    <section className="youkai-updates-carousel-section" aria-labelledby="youkai-updates-title">
      <div className="youkai-updates-carousel-inner">
        <header className="youkai-updates-carousel-header">
          <div>
            <p>Latest Updates</p>
            <h2 id="youkai-updates-title">最新の更新</h2>
            <span>
              小説、映画感想、Podcast、YouTube朗読、落語感想。
              <br />
              最近届けた物語の記録です。
            </span>
          </div>
          <div className="youkai-updates-controls" aria-label="最新の更新カルーセル操作">
            <button type="button" onClick={() => moveTo(activeIndex - 1)} aria-label="前の更新を見る">
              <ArrowLeft aria-hidden="true" />
            </button>
            <small aria-live="polite">
              {String(activeIndex + 1).padStart(2, "0")} / {String(updates.length).padStart(2, "0")}
            </small>
            <button type="button" onClick={() => moveTo(activeIndex + 1)} aria-label="次の更新を見る">
              <ArrowRight aria-hidden="true" />
            </button>
          </div>
        </header>

        <div className="youkai-updates-frame">
          <div ref={trackRef} className="youkai-updates-track" tabIndex={0}>
            {updates.map((update, index) => (
              <motion.article
                key={`${update.category}-${update.title}`}
                className="youkai-update-slide"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.18), ease: "easeOut" }}
              >
                <Link
                  href={update.href}
                  target={isExternal(update.href) ? "_blank" : undefined}
                  rel={isExternal(update.href) ? "noopener noreferrer" : undefined}
                  className="youkai-update-slide-link"
                >
                  <span className="youkai-update-slide-image">
                    <Image src={update.image} alt="" fill sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 92vw" />
                  </span>
                  <span className="youkai-update-slide-meta">
                    <small>{update.date}</small>
                    <b>{update.category}</b>
                  </span>
                  <strong>{update.title}</strong>
                  <em>{update.description}</em>
                  <span className="youkai-update-slide-action">
                    {update.action}
                    <ArrowUpRight aria-hidden="true" />
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="youkai-updates-dots" aria-label="現在位置">
          {updates.map((update, index) => (
            <button
              key={`${update.category}-dot`}
              type="button"
              className={index === activeIndex ? "is-active" : ""}
              onClick={() => moveTo(index)}
              aria-label={`${index + 1}件目へ移動`}
              aria-current={index === activeIndex ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
