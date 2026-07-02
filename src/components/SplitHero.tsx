"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type ActiveSide = "shijimi" | "youkai" | null;

export function SplitHero() {
  const [activeSide, setActiveSide] = useState<ActiveSide>(null);
  const leftWidth = activeSide === "shijimi" ? "68%" : activeSide === "youkai" ? "32%" : "50%";
  const rightWidth = activeSide === "youkai" ? "68%" : activeSide === "shijimi" ? "32%" : "50%";

  return (
    <section className="picture-gateway" aria-label="ShijimiWORKs と 妖怪ステーキの入口">
      <div className="picture-gateway-frame" data-active={activeSide ?? "neutral"}>
        <Image
          src="/images/ogp/common-ogp.png"
          alt="ShijimiWORKs と 妖怪ステーキの共通キービジュアル"
          fill
          priority
          sizes="(min-width: 768px) 96vw, 100vw"
          className="picture-gateway-image"
        />

        <div className="picture-layer-stage" aria-hidden="true">
          <motion.div
            className="picture-layer picture-layer-left"
            initial={false}
            animate={{ width: leftWidth }}
            transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="picture-layer-image picture-layer-image-left" />
          </motion.div>
          <motion.div
            className="picture-layer picture-layer-right"
            initial={false}
            animate={{ width: rightWidth }}
            transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="picture-layer-image picture-layer-image-right" />
          </motion.div>
        </div>

        <motion.div
          className="picture-gateway-hit-shell picture-gateway-hit-shell-left"
          initial={false}
          animate={{ width: leftWidth }}
          transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href="/shijimiworks"
            className="picture-gateway-hit picture-gateway-hit-left"
            aria-label="ShijimiWORKsへ入る"
            onMouseEnter={() => setActiveSide("shijimi")}
            onMouseLeave={() => setActiveSide(null)}
            onFocus={() => setActiveSide("shijimi")}
            onBlur={() => setActiveSide(null)}
          >
            <span>ShijimiWORKsへ入る</span>
          </Link>
        </motion.div>

        <motion.div
          className="picture-gateway-hit-shell picture-gateway-hit-shell-right"
          initial={false}
          animate={{ width: rightWidth }}
          transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href="/youkai-steak"
            className="picture-gateway-hit picture-gateway-hit-right"
            aria-label="妖怪ステーキへ入る"
            onMouseEnter={() => setActiveSide("youkai")}
            onMouseLeave={() => setActiveSide(null)}
            onFocus={() => setActiveSide("youkai")}
            onBlur={() => setActiveSide(null)}
          >
            <span>妖怪ステーキへ入る</span>
          </Link>
        </motion.div>
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
