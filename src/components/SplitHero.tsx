"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { BoundaryLight } from "./BoundaryLight";
import { MotionSection } from "./MotionSection";

type ActiveSide = "shijimi" | "youkai" | null;

export function SplitHero() {
  const [activeSide, setActiveSide] = useState<ActiveSide>(null);

  const leftWidth = activeSide === "shijimi" ? "68%" : activeSide === "youkai" ? "32%" : "50%";
  const rightWidth = activeSide === "youkai" ? "68%" : activeSide === "shijimi" ? "32%" : "50%";

  return (
    <section className="split-visual-landing relative overflow-hidden" aria-label="ShijimiWORKs と 妖怪ステーキの入口">
      <div className="split-visual-stage" data-active={activeSide ?? "neutral"}>
        <Image
          src="/images/ogp/common-ogp.png"
          alt="ShijimiWORKs と 妖怪ステーキの共通キービジュアル"
          fill
          priority
          sizes="100vw"
          className="split-visual-image"
        />

        <div className="split-visual-vignette" aria-hidden="true" />
        <div className="split-invasion split-invasion-shijimi" aria-hidden="true" />
        <div className="split-invasion split-invasion-youkai" aria-hidden="true" />
        <BoundaryLight activeSide={activeSide} />

        <MotionSection className="split-concept-card" delay={0.02}>
          <span>ShijimiWORKs / 妖怪ステーキ</span>
          <h1>AIで作り、<br />物語で届ける。</h1>
          <p>仕事としての制作と、作品としての創作。二つの世界を選んでください。</p>
        </MotionSection>

        <div className="split-world-hints split-world-hints-shijimi" aria-hidden="true">
          <i /><i /><i /><b />
        </div>
        <div className="split-world-hints split-world-hints-youkai" aria-hidden="true">
          <i /><i /><i /><b />
        </div>

        <MotionSection className="split-landing-caption" delay={0.04}>
          <p>Two Names, One Studio.</p>
          <Link href="/works" className="split-works-link">
            Worksを見る <ArrowUpRight aria-hidden="true" />
          </Link>
        </MotionSection>

        <motion.div
          className="split-side-motion split-side-motion-shijimi"
          animate={{ width: leftWidth }}
          transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href="/shijimiworks"
            className="split-side-hitarea split-side-shijimi"
            aria-label="ShijimiWORKsへ入る"
            onMouseEnter={() => setActiveSide("shijimi")}
            onMouseLeave={() => setActiveSide(null)}
            onFocus={() => setActiveSide("shijimi")}
            onBlur={() => setActiveSide(null)}
          >
            <span className="split-side-cta">
              ShijimiWORKsへ <ArrowUpRight aria-hidden="true" />
            </span>
          </Link>
        </motion.div>

        <motion.div
          className="split-side-motion split-side-motion-youkai"
          animate={{ width: rightWidth }}
          transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href="/youkai-steak"
            className="split-side-hitarea split-side-youkai"
            aria-label="妖怪ステーキへ入る"
            onMouseEnter={() => setActiveSide("youkai")}
            onMouseLeave={() => setActiveSide(null)}
            onFocus={() => setActiveSide("youkai")}
            onBlur={() => setActiveSide(null)}
          >
            <span className="split-side-cta">
              妖怪ステーキへ <ArrowUpRight aria-hidden="true" />
            </span>
          </Link>
        </motion.div>
      </div>

      <MotionSection className="split-mobile-gate" delay={0.08}>
        <p className="split-mobile-kicker">ShijimiWORKs / 妖怪ステーキ</p>
        <h1>AIで作り、<br />物語で届ける。</h1>
        <div className="split-mobile-card-grid">
          <Link href="/shijimiworks" className="split-mobile-card split-mobile-card-shijimi">
            <span>AI Production Studio</span>
            <strong>ShijimiWORKs</strong>
            <small>AI・Web・記事制作・自動化の制作スタジオへ</small>
          </Link>
          <Link href="/youkai-steak" className="split-mobile-card split-mobile-card-youkai">
            <span>Story / Voice / Cinema</span>
            <strong>妖怪ステーキ</strong>
            <small>小説・映画感想・Podcastの物語世界へ</small>
          </Link>
        </div>
      </MotionSection>
    </section>
  );
}
