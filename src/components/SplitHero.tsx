"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

type ActiveSide = "shijimi" | "youkai" | null;

export function SplitHero() {
  const [activeSide, setActiveSide] = useState<ActiveSide>(null);
  const activeImage =
    activeSide === "shijimi"
      ? { src: "/images/ogp/shijimiworks-ogp.png", alt: "ShijimiWORKs キービジュアル", direction: -30 }
      : activeSide === "youkai"
        ? { src: "/images/ogp/youkai-steak-ogp.png", alt: "妖怪ステーキ キービジュアル", direction: 30 }
        : null;

  return (
    <section className="picture-gateway" aria-label="ShijimiWORKs と 妖怪ステーキの入口">
      <div
        className="picture-gateway-frame"
        data-active={activeSide ?? "neutral"}
        onPointerLeave={() => setActiveSide(null)}
      >
        <motion.div
          className="picture-gateway-base"
          animate={{
            opacity: activeSide ? 0.46 : 1,
            filter: activeSide ? "blur(3px) brightness(0.72)" : "blur(0px) brightness(1)",
          }}
          transition={{ duration: 0.48, ease: "easeInOut" }}
        >
          <Image
            src="/images/ogp/common-ogp.png"
            alt="ShijimiWORKs と 妖怪ステーキの共通キービジュアル"
            fill
            priority
            sizes="(min-width: 768px) 96vw, 100vw"
            className="picture-gateway-image"
          />
        </motion.div>

        <AnimatePresence mode="wait">
          {activeImage && (
            <div
              key={activeSide}
              className={`picture-featured-ogp-shell picture-featured-ogp-shell-${activeSide}`}
              aria-hidden="true"
            >
              <motion.div
                className={`picture-featured-ogp picture-featured-ogp-${activeSide}`}
                initial={{ opacity: 0, scale: 0.92, x: activeImage.direction }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.94, x: activeImage.direction * 0.45 }}
                transition={{ duration: 0.58, ease: "easeInOut" }}
              >
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  fill
                  sizes="(min-width: 768px) 84vw, 100vw"
                  className="picture-featured-ogp-image"
                />
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <Link
          href="/shijimiworks"
          className="picture-gateway-hit picture-gateway-hit-left"
          aria-label="ShijimiWORKsへ入る"
          onPointerEnter={() => setActiveSide("shijimi")}
          onFocus={() => setActiveSide("shijimi")}
          onBlur={() => setActiveSide(null)}
        >
          <span>ShijimiWORKsへ入る</span>
        </Link>

        <Link
          href="/youkai-steak"
          className="picture-gateway-hit picture-gateway-hit-right"
          aria-label="妖怪ステーキへ入る"
          onPointerEnter={() => setActiveSide("youkai")}
          onFocus={() => setActiveSide("youkai")}
          onBlur={() => setActiveSide(null)}
        >
          <span>妖怪ステーキへ入る</span>
        </Link>
      </div>

      <div className="picture-gateway-mobile-cards" aria-label="スマートフォン用入口">
        <Link href="/shijimiworks" className="picture-mobile-card picture-mobile-card-shijimi">
          <span>AI Production Studio</span>
          <strong>ShijimiWORKs</strong>
          <small>AI・Web・記事制作・自動化の制作スタジオへ</small>
        </Link>
        <Link href="/youkai-steak" className="picture-mobile-card picture-mobile-card-youkai">
          <span>Story / Voice / Cinema</span>
          <strong>妖怪ステーキ</strong>
          <small>小説・映画感想・Podcastの物語世界へ</small>
        </Link>
      </div>
    </section>
  );
}
