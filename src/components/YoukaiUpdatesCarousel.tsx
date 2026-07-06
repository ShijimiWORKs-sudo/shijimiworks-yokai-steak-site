"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";
import type { YoukaiUpdate } from "@/lib/youkaiUpdates";

function isExternal(href: string) {
  return href.startsWith("http");
}

function getActionLabel(type: string) {
  switch (type) {
    case "podcast":
      return "聴く";
    case "youtube":
      return "観る";
    default:
      return "読む";
  }
}

type YoukaiUpdatesCarouselProps = {
  updates: YoukaiUpdate[];
};

export function YoukaiUpdatesCarousel({ updates }: YoukaiUpdatesCarouselProps) {
  const safeUpdates = updates.length > 0 ? updates : [];
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const moveTo = (nextIndex: number) => {
    if (safeUpdates.length === 0) return;

    const normalizedIndex = (nextIndex + safeUpdates.length) % safeUpdates.length;
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
            <button type="button" onClick={() => moveTo(activeIndex - 1)} aria-label="前の更新を見る" disabled={safeUpdates.length === 0}>
              <ArrowLeft aria-hidden="true" />
            </button>
            <small aria-live="polite">
              {String(safeUpdates.length === 0 ? 0 : activeIndex + 1).padStart(2, "0")} / {String(safeUpdates.length).padStart(2, "0")}
            </small>
            <button type="button" onClick={() => moveTo(activeIndex + 1)} aria-label="次の更新を見る" disabled={safeUpdates.length === 0}>
              <ArrowRight aria-hidden="true" />
            </button>
          </div>
        </header>

        <div className="youkai-updates-frame">
          <div ref={trackRef} className="youkai-updates-track" tabIndex={0}>
            {safeUpdates.map((update, index) => (
              <motion.article
                key={update.id}
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
                    {getActionLabel(update.type)}
                    <ArrowUpRight aria-hidden="true" />
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="youkai-updates-dots" aria-label="現在位置">
          {safeUpdates.map((update, index) => (
            <button
              key={`${update.id}-dot`}
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
