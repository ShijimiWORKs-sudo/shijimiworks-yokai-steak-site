import Image from "next/image";

const paragraphs = [
  "妖怪ステーキは、小説、映画感想、Podcast、YouTube朗読、落語感想など、物語をさまざまな形で届ける創作名義です。",
  "読んだもの、観たもの、聴いたもの。そこから生まれた言葉を、夜の創作室から届けています。",
  "映画の感想は、作品紹介だけでは終わりません。小説は、物語の中にある問いを残します。Podcastでは、文章では伝えきれない余韻を声にします。落語感想では、古い物語の中にある今の人間らしさを読み直します。",
  "妖怪ステーキが届けたいのは、情報ではなく、余韻です。",
  "読んだあと、観たあと、聴いたあとに、自分の中で何かが少し動くような場所を目指しています。",
];

export function YoukaiAbout() {
  return (
    <section id="youkai-about" className="youkai-about-section" aria-labelledby="youkai-about-title">
      <div className="youkai-about-inner">
        <div className="youkai-about-copy">
          <p className="youkai-section-eyebrow">About</p>
          <h2 id="youkai-about-title">About 妖怪ステーキ</h2>
          <div className="youkai-about-text">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="youkai-about-visual">
          <Image
            src="/images/youkai/youkai-about.png"
            alt=""
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="youkai-about-image"
          />
        </div>
      </div>
    </section>
  );
}
