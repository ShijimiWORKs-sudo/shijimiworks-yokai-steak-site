import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, Smartphone } from "lucide-react";
import { shijimiApps } from "@/data/shijimiApps";

export const metadata: Metadata = {
  title: "App / MVP | ShijimiWORKs",
  description: "NETAKURA、DartsSupportApp、DartsApp、AP Trainer、FE Trainer、ProgrammingTrainerなど、ShijimiWORKsのアプリ・MVP開発プロダクト。",
};

export default function AppMvpPage() {
  return (
    <main className="shijimi-products-page is-app-mvp">
      <section className="shijimi-products-hero">
        <p>APP / MVP</p>
        <h1>小さく作って、使える形へ。</h1>
        <span>NETAKURA、DartsSupportApp、DartsAppに加え、資格学習支援アプリのAP Trainer・FE Trainer・ProgrammingTrainerまで。アイデアをMVPに分解し、検証しながら育てているアプリ群です。</span>
      </section>
      <section className="shijimi-app-list" aria-label="App MVP products">
        {shijimiApps.map((app) => (
          <article key={app.id} id={app.id} className="shijimi-app-card">
            <div className="shijimi-app-visual">
              <Image src={app.image} alt={`${app.title} visual`} width={720} height={420} sizes="(max-width: 768px) 100vw, 38vw" />
              <span><Smartphone aria-hidden="true" /> {app.status}</span>
            </div>
            <div className="shijimi-app-copy">
              <small>{app.category}</small>
              <h2>{app.title}</h2>
              <p>{app.description}</p>
              <dl>
                <div><dt>誰向けか</dt><dd>{app.audience}</dd></div>
                <div><dt>役立つこと</dt><dd>{app.benefits.join(" / ")}</dd></div>
                {app.features && app.features.length > 0 && (
                  <div>
                    <dt>主な機能</dt>
                    <dd>
                      <ul className="shijimi-app-feature-list">
                        {app.features.map((feature) => <li key={feature}>{feature}</li>)}
                      </ul>
                    </dd>
                  </div>
                )}
                {app.techStack && app.techStack.length > 0 && (
                  <div><dt>使用技術</dt><dd>{app.techStack.join(" / ")}</dd></div>
                )}
                {app.intent && <div><dt>制作意図</dt><dd>{app.intent}</dd></div>}
                <div><dt>現在の開発状況</dt><dd>{app.currentState}</dd></div>
                {app.roadmap && app.roadmap.length > 0 && (
                  <div><dt>今後の発展予定</dt><dd>{app.roadmap.join(" / ")}</dd></div>
                )}
              </dl>
              {app.screenshots && app.screenshots.length > 0 && (
                <div className="shijimi-app-shots" aria-label={`${app.title} スクリーンショット`}>
                  {app.screenshots.map((shot) => (
                    <div key={shot.src} className="shijimi-app-shot">
                      <Image src={shot.src} alt={shot.alt} width={360} height={780} sizes="(max-width: 768px) 45vw, 12vw" loading="lazy" />
                    </div>
                  ))}
                </div>
              )}
              <div className="shijimi-product-tags">{app.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <div className="shijimi-product-actions">
                {app.githubUrl ? <Link href={app.githubUrl} target="_blank" rel="noopener noreferrer">開発リポジトリを見る<ArrowUpRight aria-hidden="true" /></Link> : <span className="shijimi-disabled-pill">開発中</span>}
                {app.demoUrl ? <Link href={app.demoUrl} target="_blank" rel="noopener noreferrer">試用版を見る<ArrowUpRight aria-hidden="true" /></Link> : <span className="shijimi-disabled-pill">公開URL準備中</span>}
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
