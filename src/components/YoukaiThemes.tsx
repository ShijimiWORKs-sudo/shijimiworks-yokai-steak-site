"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type ThemeItem = {
  marker: string;
  title: string;
  description: string;
  image: string;
};

const themes: ThemeItem[] = [
  {
    marker: "人",
    title: "人間ドラマ",
    description: "人の弱さ、ずるさ、優しさ。\n作品の中にある人間の揺れを、言葉にします。",
    image: "/images/youkai/youkai-theme-human-drama.png",
  },
  {
    marker: "憶",
    title: "記憶と喪失",
    description: "なくしたもの、忘れたもの、忘れられないもの。\n物語の中に残る記憶を読み直します。",
    image: "/images/youkai/youkai-theme-memory-loss.png",
  },
  {
    marker: "結",
    title: "孤独とつながり",
    description: "ひとりでいる時間と、誰かに届く瞬間。\nそのあいだにある静かな物語を拾います。",
    image: "/images/youkai/youkai-theme-loneliness-connection.png",
  },
  {
    marker: "日",
    title: "日常の美しさ",
    description: "何気ない日々の中にある光。\n映画や物語が教えてくれる、小さな美しさを見つめます。",
    image: "/images/youkai/youkai-theme-everyday-beauty.png",
  },
  {
    marker: "言",
    title: "言葉の力",
    description:
      "言葉は、感想であり、記録であり、祈りでもあります。\n観たもの、読んだものを、自分の人生へ持ち帰るために書いています。",
    image: "/images/youkai/youkai-theme-power-of-words.png",
  },
];

export function YoukaiThemes() {
  return (
    <section className="youkai-themes-section" aria-labelledby="youkai-themes-title">
      <div className="youkai-themes-inner">
        <header className="youkai-themes-header">
          <p>Themes</p>
          <h2 id="youkai-themes-title">扱うテーマ</h2>
          <span>
            物語の中心にあるもの。読んだもの、観たもの、聴いたものから、何を受け取っているのか。
          </span>
        </header>

        <div className="youkai-themes-list">
          {themes.map((theme, index) => (
            <motion.article
              key={theme.title}
              className={`youkai-theme-scene ${index % 2 === 1 ? "is-reverse" : ""}`}
              initial={{ opacity: 0.24, y: 42 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.45 }}
              transition={{ duration: 0.72, ease: "easeOut" }}
            >
              <div className="youkai-theme-image-block">
                <Image
                  src={theme.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  className="youkai-theme-image"
                />
              </div>
              <div className="youkai-theme-title-block">
                <span aria-hidden="true">{theme.marker}</span>
                <h3>{theme.title}</h3>
              </div>
              <div className="youkai-theme-description-block">
                <p>
                  {theme.description.split("\n").map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
