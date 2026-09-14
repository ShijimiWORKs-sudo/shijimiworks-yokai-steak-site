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
        <span>個人活動、創作名義、サービス紹介、ココナラ出品向けのWebサイト制作デモをまとめています。業種・世界観・用途に合わせたデザインの幅を確認できます。</span>
      </section>
      <section className="shijimi-portfolio-grid" aria-label="HP portfolio list">
        {shijimiPortfolios.map((item) => (
          <article key={item.id} className="shijimi-portfolio-card">
            <div className="shijimi-portfolio-thumb" aria-hidden="true">
              <Monitor />
              <span>HP{item.number}</span>
            </div>
            <div className="shijimi-portfolio-copy">
              <small>{item.useCase}</small>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <dl>
                <div><dt>方向性</dt><dd>{item.designType}</dd></div>
                <div><dt>公開URL</dt><dd>{item.demoUrl ? "公開中" : "準備中"}</dd></div>
                <div><dt>ステータス</dt><dd>{item.status}</dd></div>
              </dl>
              <div className="shijimi-product-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <div className="shijimi-product-actions">
                <Link href={item.githubUrl} target="_blank" rel="noopener noreferrer">GitHubを見る<ArrowUpRight aria-hidden="true" /></Link>
                {item.demoUrl ? <Link href={item.demoUrl} target="_blank" rel="noopener noreferrer">公開URLを見る<ArrowUpRight aria-hidden="true" /></Link> : <span className="shijimi-disabled-pill">公開URL準備中</span>}
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
