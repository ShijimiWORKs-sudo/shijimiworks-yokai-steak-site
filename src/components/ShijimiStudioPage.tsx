"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  AppWindow,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Code2,
  FileText,
  Globe2,
  Mail,
  MessageCircle,
  Network,
  PenTool,
  Rocket,
  Settings,
  Sparkles,
  Workflow,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { links } from "@/data/links";
import { works } from "@/data/works";

const whatIDo = [
  { label: "AI ASSISTED", title: "AI活用・プロンプト設計", text: "目的に合わせてAIの使い方、問いの型、出力の確認手順まで設計します。", icon: Bot },
  { label: "WEB BUILD", title: "Web制作", text: "ポートフォリオ、LP、サービス紹介など、伝えたい内容を画面と導線に落とし込みます。", icon: Globe2 },
  { label: "MVP DESIGN", title: "アプリ開発・MVP設計", text: "アイデアを機能、画面、検証順序へ分解し、小さく試せる形にします。", icon: AppWindow },
  { label: "AUTOMATION", title: "自動化・運用設計", text: "投稿、整理、記録、チェックをつなげ、続けやすい制作フローを作ります。", icon: Workflow },
  { label: "DOCUMENTS", title: "AI文書・マガジン制作", text: "note、Substack、有料マガジン、プロンプト集を読める形へ編集します。", icon: FileText },
  { label: "CONSULTING", title: "制作相談・お仕事依頼", text: "まだ曖昧な相談も、目的・優先順位・最初の一歩から一緒に整理します。", icon: MessageCircle },
] as const;

const processItems = [
  { title: "ネタ造AI", label: "APP / AI", text: "SNS・note・YouTubeへ展開できる企画支援アプリ。入力項目、出力形式、保存導線を検証中です。", side: "left" },
  { title: "ShijimiWORKs / 妖怪ステーキ 共通ホーム", label: "WEB / PORTFOLIO", text: "仕事と創作の二面性を、ひとつの入口として見せる共通ホームを改善しています。", side: "right" },
  { title: "妖怪ステーキSNS導線", label: "MEDIA FLOW", text: "小説、映画感想、Podcast、YouTubeを横断し、更新が届く流れを設計しています。", side: "left" },
  { title: "Buffer自動投稿フロー", label: "AUTOMATION", text: "投稿予定、原稿、公開結果のずれを減らすための運用フローを調整しています。", side: "right" },
] as const;

const services = [
  { title: "AI活用相談", forWhom: "AIを使いたいが、何から始めるか整理したい人へ。" },
  { title: "ホームページ制作相談", forWhom: "個人活動やサービスを、信頼できる画面にしたい人へ。" },
  { title: "note / Substack運用設計", forWhom: "書くことを続け、読者へ届ける導線を作りたい人へ。" },
  { title: "自動化フロー設計", forWhom: "投稿、記録、確認の手作業を減らしたい人へ。" },
  { title: "AI文章制作・プロンプト設計", forWhom: "記事、資料、企画をAIと一緒に整えたい人へ。" },
  { title: "小さなアプリ/MVP相談", forWhom: "アイデアを試せる最小構成に落とし込みたい人へ。" },
] as const;

const documents = [
  { type: "NOTE", title: "note", text: "実践の記録と、AI活用の気づきを読みやすく。", icon: PenTool },
  { type: "NEWSLETTER", title: "Substack", text: "継続して届くテーマのあるニュースレター。", icon: Mail },
  { type: "MAGAZINE", title: "有料マガジン", text: "知識と経験を、まとまりのある読み物へ。", icon: NewspaperIcon },
  { type: "PROMPTS", title: "プロンプト集", text: "繰り返し使える問いと型を整理。", icon: Sparkles },
  { type: "REPORT", title: "事例レポート", text: "制作と運用から得た判断を記録。", icon: FileText },
  { type: "DOCS", title: "AI活用文書", text: "業務や発信で使える文書を設計。", icon: Settings },
] as const;

const contactLinks = [
  { label: "お問い合わせ", href: links.contact, note: "サイト内フォーム" },
  { label: "ココナラで相談", href: links.coconala, note: "制作・相談の依頼" },
  { label: "note", href: links.shijimiworksNote, note: "記事と制作メモ" },
  { label: "Substack", href: links.shijimiworksSubstack, note: "メールマガジン" },
  { label: "X", href: links.shijimiworksX, note: "更新と短い記録" },
  { label: "メール", href: links.mail, note: "直接連絡" },
] as const;

function NewspaperIcon(props: React.ComponentProps<typeof FileText>) {
  return <FileText {...props} />;
}

function isExternal(href: string) {
  return href.startsWith("http");
}

function SectionHeading({ label, title, description }: { label: string; title: string; description?: string }) {
  return (
    <header className="shijimi-studio-heading">
      <p>{label}</p>
      <h2>{title}</h2>
      {description ? <span>{description}</span> : null}
    </header>
  );
}

function VisualPlaceholder({ label }: { label: string }) {
  return (
    <span className="shijimi-visual-placeholder" aria-hidden="true">
      <i />
      <b>{label}</b>
    </span>
  );
}

function ShijimiHeroStudio() {
  return (
    <section className="shijimi-studio-hero">
      <div className="shijimi-studio-hero-grid">
        <motion.div className="shijimi-studio-hero-copy" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, ease: "easeOut" }}>
          <p className="shijimi-kicker">AI ASSISTED / HUMAN DIRECTED / BUILT TO IMPROVE</p>
          <h1>AIを使って、<br />作る・届ける・<br />仕組みにする。</h1>
          <span>
            生成AIを活用したWeb制作、記事制作、アプリ開発、自動化、メディア運用を横断する制作ポートフォリオです。
            小さなアイデアを、記事・サイト・アプリ・運用導線まで形にします。
          </span>
          <div className="shijimi-hero-actions">
            <Link href="/works">制作実績を見る <ArrowUpRight aria-hidden="true" /></Link>
            <Link href={links.contact}>相談する <MessageCircle aria-hidden="true" /></Link>
          </div>
        </motion.div>

        <motion.div className="shijimi-dashboard" initial={{ opacity: 0, scale: .96, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: .8, delay: .12, ease: "easeOut" }}>
          <div className="dashboard-topbar"><span /><span /><span /><b>Studio Control</b></div>
          <div className="dashboard-main">
            <div className="dashboard-card dashboard-card-chat"><p>AI Chat</p><strong>問いを設計し、出力を整える</strong><small>Prompt → Draft → Review</small></div>
            <div className="dashboard-card dashboard-card-article"><p>Article</p><strong>記事・マガジンへ編集</strong><small>note / Substack / Docs</small></div>
            <div className="dashboard-card dashboard-card-app"><p>MVP</p><strong>小さなアプリにする</strong><small>UI / Flow / Prototype</small></div>
            <div className="dashboard-flow"><span>Idea</span><i /><span>Design</span><i /><span>Launch</span></div>
          </div>
          <div className="dashboard-nodes" aria-hidden="true"><i /><i /><i /><i /><i /></div>
        </motion.div>
      </div>
    </section>
  );
}

function ShijimiWhatIDo() {
  return (
    <section className="shijimi-studio-section shijimi-what-section">
      <SectionHeading label="WHAT I DO" title="できること" description="AI、Web、文章、アプリ、運用。点ではなく、届け続ける流れとして設計します。" />
      <div className="shijimi-what-grid">
        {whatIDo.map((item) => {
          const Icon = item.icon;
          return (
            <article key={item.title} className="shijimi-what-card">
              <VisualPlaceholder label={item.label} />
              <div><Icon aria-hidden="true" /><small>{item.label}</small></div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function ShijimiWorksCarousel() {
  const studioWorks = works.filter((work) => work.brand !== "youkai-steak" || work.slug === "youkai-automation").slice(0, 6);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const moveTo = (nextIndex: number) => {
    const normalized = (nextIndex + studioWorks.length) % studioWorks.length;
    setActiveIndex(normalized);
    const track = trackRef.current;
    const target = track?.children.item(normalized) as HTMLElement | null;
    if (track && target) track.scrollTo({ left: target.offsetLeft, behavior: "smooth" });
  };

  useEffect(() => {
    if (paused || studioWorks.length < 2) return;
    const timer = window.setInterval(() => moveTo(activeIndex + 1), 5200);
    return () => window.clearInterval(timer);
  }, [activeIndex, paused, studioWorks.length]);

  return (
    <section className="shijimi-studio-section shijimi-works-section">
      <div className="shijimi-section-row">
        <SectionHeading label="PORTFOLIO" title="Works / Portfolio" description="制作したもの、設計したもの、運用しているもの。制作中のものも、改善の履歴として見せます。" />
        <div className="shijimi-carousel-controls">
          <button type="button" onClick={() => moveTo(activeIndex - 1)} aria-label="前の制作実績"><ArrowLeft aria-hidden="true" /></button>
          <small>{String(activeIndex + 1).padStart(2, "0")} / {String(studioWorks.length).padStart(2, "0")}</small>
          <button type="button" onClick={() => moveTo(activeIndex + 1)} aria-label="次の制作実績"><ArrowRight aria-hidden="true" /></button>
        </div>
      </div>
      <div className="shijimi-works-frame" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
        <div className="shijimi-works-track" ref={trackRef}>
          {studioWorks.map((work) => (
            <article key={work.slug} className="shijimi-work-slide">
              <Link href={`/works/${work.slug}`}>
                <VisualPlaceholder label={work.category} />
                <div className="shijimi-work-meta"><small>{work.category}</small><b>{work.status}</b></div>
                <h3>{work.title}</h3>
                <p>{work.description}</p>
                <div className="shijimi-work-tags">{work.tags.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}</div>
                <strong>詳細を見る <ArrowUpRight aria-hidden="true" /></strong>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ShijimiProjectLog() {
  return (
    <section className="shijimi-studio-section shijimi-process-section">
      <SectionHeading label="PROCESS" title="Project Log" description="完成品だけではなく、要件定義・設計・試作・運用改善の途中経過も見せます。" />
      <div className="shijimi-process-list">
        {processItems.map((item, index) => (
          <motion.article key={item.title} className={`shijimi-process-item ${item.side === "right" ? "is-reverse" : ""}`} initial={{ opacity: .2, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: .45 }} transition={{ duration: .62, ease: "easeOut" }}>
            <VisualPlaceholder label={item.label} />
            <div className="shijimi-process-copy"><small>PROCESS 0{index + 1} / {item.label}</small><h3>{item.title}</h3><p>{item.text}</p></div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function ShijimiServices() {
  return (
    <section className="shijimi-studio-section shijimi-services-section">
      <SectionHeading label="SERVICES" title="相談できること" description="AIを使った制作や発信を、単発の作業ではなく「続けられる仕組み」として設計します。" />
      <p className="shijimi-services-lead">Webサイト、記事、アプリ案、自動化、SNS運用、note/Substackの導線など、まだ形になっていないアイデアを、相談しながら整理していきます。</p>
      <div className="shijimi-services-grid">
        {services.map((service, index) => <article key={service.title}><span>0{index + 1}</span><h3>{service.title}</h3><p>{service.forWhom}</p></article>)}
      </div>
      <div className="shijimi-section-actions"><Link href={links.contact}>まずは相談する <ArrowUpRight aria-hidden="true" /></Link><Link href="/works">制作実績を見る</Link></div>
    </section>
  );
}

function ShijimiDocuments() {
  return (
    <section className="shijimi-studio-section shijimi-docs-section">
      <SectionHeading label="DOCUMENTS" title="Magazine / Documents" description="AI活用を、読める形にする。あとから記事やマガジンを増やしやすい文書棚です。" />
      <div className="shijimi-docs-grid">
        {documents.map((document, index) => {
          const Icon = document.icon;
          return <article key={document.title}><div><Icon aria-hidden="true" /><small>FILE 0{index + 1} / {document.type}</small></div><h3>{document.title}</h3><p>{document.text}</p></article>;
        })}
      </div>
    </section>
  );
}

function ShijimiAbout() {
  return (
    <section className="shijimi-studio-section shijimi-about-section-v2">
      <div className="shijimi-about-v2-grid">
        <div className="shijimi-about-v2-statement"><p>ABOUT</p><h2>About ShijimiWORKs</h2><strong>AIと制作のあいだに立つ、<br />小さな制作室。</strong><span>AI assisted.<br />Human directed.<br />Continuously improved.</span></div>
        <div className="shijimi-about-v2-text">
          <p>ShijimiWORKsは、生成AIを使って、文章、Web、アプリ、メディア運用、自動化を横断的に作る個人制作スタジオです。</p>
          <p>AIを魔法のように扱うのではなく、考える、書く、作る、届けるための補助輪として使います。</p>
          <p>小さなアイデアを、記事にする。言葉にならない相談を、構成にする。手作業で続かない運用を、仕組みにする。思いつきで終わっていた企画を、Webやアプリの形にする。</p>
          <p>ShijimiWORKsが作りたいのは、派手な一発ではなく、続けられる制作導線です。</p>
        </div>
      </div>
    </section>
  );
}

function ShijimiContactLinks() {
  return (
    <section className="shijimi-contact-v2">
      <div className="shijimi-contact-v2-copy"><p>CONTACT</p><h2>制作や相談の入口</h2><span>AI活用、Web制作、記事制作、発信設計、自動化、ポートフォリオ制作などの相談を受け付けています。</span></div>
      <div className="shijimi-contact-v2-grid">
        {contactLinks.map((item) => <Link key={item.label} href={item.href} target={isExternal(item.href) ? "_blank" : undefined} rel={isExternal(item.href) ? "noopener noreferrer" : undefined}><span><strong>{item.label}</strong><small>{item.note}</small></span><ArrowUpRight aria-hidden="true" /></Link>)}
      </div>
    </section>
  );
}

function ShijimiFooter() {
  return (
    <footer className="shijimi-footer-v2">
      <div><strong>ShijimiWORKs</strong><span>AI / Web / App / Automation / Writing</span></div>
      <nav aria-label="ShijimiWORKs footer navigation"><Link href="/">Home</Link><Link href="/works">Works</Link><Link href="/articles">Articles</Link><Link href={links.contact}>Contact</Link></nav>
      <nav aria-label="ShijimiWORKs media links"><Link href={links.shijimiworksNote} target="_blank" rel="noopener noreferrer">note</Link><Link href={links.shijimiworksSubstack} target="_blank" rel="noopener noreferrer">Substack</Link><Link href={links.shijimiworksX} target="_blank" rel="noopener noreferrer">X</Link></nav>
      <p>© 2026 ShijimiWORKs</p>
    </footer>
  );
}

export function ShijimiStudioPage() {
  return (
    <div className="shijimi-studio-page">
      <ShijimiHeroStudio />
      <ShijimiWhatIDo />
      <ShijimiWorksCarousel />
      <ShijimiProjectLog />
      <ShijimiServices />
      <ShijimiDocuments />
      <ShijimiAbout />
      <ShijimiContactLinks />
      <ShijimiFooter />
    </div>
  );
}

