import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, Monitor } from "lucide-react";
import { shijimiPortfolios } from "@/data/shijimiPortfolios";

export const metadata: Metadata = {
  title: "Web / Portfolio制作 | ShijimiWORKs",
  description: "HPポートフォリオ001〜008をまとめた、ShijimiWORKsのWeb制作デモ一覧。",
};

export default function WebPortfolioPage() {
  return (
    <main className="shijimi-products-page is-web-portfolio">
      <section className="shijimi-products-hero">
        <p>WEB / PORTFOLIO</p>
        <h1>Web / Portfolio制作</h1>
        <span>企業・サービス・個人・EC・アートなど、業種と世界観の異なる8つの制作サンプルをまとめています。すべてGitHubで実装を公開しており、順次実際に触れるデモへの導線を追加しています。</span>
      </section>
      <section className="shijimi-portfolio-grid" aria-label="HP portfolio list">
        {shijimiPortfolios.map((item) => (
          <article key={item.id} className="shijimi-portfolio-card">
            <div className="shijimi-portfolio-thumb" aria-hidden="true">
              {item.demoUrl && item.embeddable ? (
                <iframe src={item.demoUrl} title={`${item.siteName} preview`} loading="lazy" className="shijimi-portfolio-iframe" />
              ) : item.thumbnail ? (
                <>
                  <Image src={item.thumbnail} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className="shijimi-portfolio-thumb-img" />
                  <span className="shijimi-portfolio-thumb-badge">HP{item.number}</span>
                </>
              ) : (
                <>
                  <Monitor />
                  <span className="shijimi-portfolio-thumb-number">HP{item.number}</span>
                </>
              )}
            </div>
            <div className="shijimi-portfolio-copy">
              <small>Portfolio No.{item.number} — {item.siteType}</small>
              <h2>{item.siteName}</h2>
              <p>{item.concept}</p>
              <dl>
                <div><dt>デザインの特徴</dt><dd>{item.designFeatures.join(" / ")}</dd></div>
                <div><dt>使用技術</dt><dd>{item.techStack.join(" / ")}</dd></div>
                <div><dt>制作目的</dt><dd>{item.purpose}</dd></div>
                <div><dt>ステータス</dt><dd>{item.status}</dd></div>
              </dl>
              <div className="shijimi-product-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <div className="shijimi-product-actions">
                <Link href={`/works/${item.id}`}>詳細を見る<ArrowUpRight aria-hidden="true" /></Link>
                <Link href={item.githubUrl} target="_blank" rel="noopener noreferrer">GitHub<ArrowUpRight aria-hidden="true" /></Link>
                {item.demoUrl ? <Link href={item.demoUrl} target="_blank" rel="noopener noreferrer">View Site<ArrowUpRight aria-hidden="true" /></Link> : <span className="shijimi-disabled-pill">Preview準備中</span>}
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
