"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  Boxes,
  BriefcaseBusiness,
  FileText,
  Globe2,
  Mail,
  MessageCircle,
  Network,
  NotebookPen,
  PenTool,
  Rocket,
  Settings,
  Smartphone,
  Sparkles,
  Workflow,
} from "lucide-react";
import { useState } from "react";
import { links } from "@/data/links";

type VisualType = "mobile" | "desktop" | "book" | "system" | "document" | "dashboard";

type Product = {
  id: string;
  title: string;
  type: string;
  description: string;
  visualType: VisualType;
  href: string;
  tags: string[];
};

type Service = {
  title: string;
  description: string;
  scope: string;
  href: string;
  icon: typeof Bot;
};

const shijimiIcon = "/images/youkai/ShijimiWORKs_icon.png";

const products: Product[] = [
  {
    id: "netazou-ai",
    title: "ネタ造AI",
    type: "スマホアプリ / AI企画支援",
    description: "SNS、note、YouTube向けのネタ出しを支援する生成AIアプリ構想。",
    visualType: "mobile",
    href: "/works/netazou-ai",
    tags: ["AI", "MVP", "Idea"],
  },
  {
    id: "one-studio-portfolio",
    title: "ShijimiWORKs / 妖怪ステーキ 共通ホーム",
    type: "Web / Portfolio",
    description: "仕事と創作を横断する、二つの名義の共通入口サイト。",
    visualType: "desktop",
    href: "/works/one-studio-portfolio",
    tags: ["Web", "Portfolio", "Brand"],
  },
  {
    id: "youkai-steak",
    title: "妖怪ステーキ",
    type: "Creative / Media",
    description: "小説、映画感想、Podcast、YouTube朗読、落語感想を届ける創作ポートフォリオ。",
    visualType: "book",
    href: links.youkaiSteak,
    tags: ["Story", "Media", "Voice"],
  },
  {
    id: "buffer-workflow",
    title: "Buffer投稿管理",
    type: "Automation / Workflow",
    description: "X投稿、daily_digest、Notion管理をつなぐ自動投稿運用フロー。",
    visualType: "system",
    href: "/works/buffer-workflow",
    tags: ["Automation", "SNS", "Workflow"],
  },
  {
    id: "ai-paid-magazine",
    title: "AI有料マガジン制作",
    type: "Writing / Media",
    description: "AI活用、働き方、発信、収益化導線をまとめる有料記事群。",
    visualType: "document",
    href: "/works/ai-paid-magazine",
    tags: ["Writing", "note", "Substack"],
  },
  {
    id: "shijimiworks-top",
    title: "ShijimiWORKsトップページ",
    type: "Corporate / Web",
    description: "AI制作スタジオとしての事業サイト型ホームページ。",
    visualType: "dashboard",
    href: "/works/shijimiworks-top",
    tags: ["Corporate", "Next.js", "Design"],
  },
];

const services: Service[] = [
  {
    title: "AI活用・プロンプト設計",
    description: "ChatGPT、Claude、Grokなどを、企画・調査・制作・改善の相棒として使うための型を設計します。",
    scope: "用途整理 / プロンプト設計 / 出力確認 / 運用ルール",
    href: links.contact,
    icon: Bot,
  },
  {
    title: "Web制作",
    description: "個人サイト、ポートフォリオ、サービス紹介、LPを、文章と導線から設計して実装します。",
    scope: "情報設計 / UI設計 / Next.js実装 / 公開前整理",
    href: "/works/one-studio-portfolio",
    icon: Globe2,
  },
  {
    title: "アプリ開発・MVP設計",
    description: "小さなアプリ案を、要件、画面、機能、検証順序に分け、作れる単位へ落とし込みます。",
    scope: "MVP整理 / 画面設計 / 機能分解 / 試作",
    href: "/works/netazou-ai",
    icon: Smartphone,
  },
  {
    title: "自動化・運用設計",
    description: "SNS投稿、Buffer、Notion、記事生成、管理フローを、続けやすい仕組みとして整理します。",
    scope: "投稿導線 / 管理設計 / チェック手順 / 自動化案",
    href: "/works/buffer-workflow",
    icon: Workflow,
  },
  {
    title: "AI文書・マガジン制作",
    description: "note、Substack、有料マガジン、プロンプト集、事例レポートを読める形へ編集します。",
    scope: "記事構成 / 連載設計 / 文書化 / 販売導線",
    href: "/works/ai-paid-magazine",
    icon: FileText,
  },
  {
    title: "制作相談・お仕事依頼",
    description: "依頼内容が固まっていない段階から、目的、優先順位、最初の一歩を一緒に整理します。",
    scope: "課題整理 / 進め方相談 / 見積もり前相談",
    href: links.contact,
    icon: MessageCircle,
  },
];

const footerGroups = [
  {
    title: "ShijimiWORKsについて",
    links: [
      { label: "会社の概要", href: "#about" },
      { label: "これまでの歩み", href: "#mission" },
      { label: "About", href: "#about" },
    ],
  },
  {
    title: "プロダクト",
    links: [
      { label: "ネタ造AI", href: "/works/netazou-ai" },
      { label: "共通ホーム", href: "/works/one-studio-portfolio" },
      { label: "妖怪ステーキ", href: links.youkaiSteak },
      { label: "Buffer投稿管理", href: "/works/buffer-workflow" },
      { label: "AI有料マガジン", href: "/works/ai-paid-magazine" },
    ],
  },
  {
    title: "サービス",
    links: services.slice(0, 5).map((service) => ({ label: service.title, href: "#services" })),
  },
  {
    title: "SNS / Links",
    links: [
      { label: "X", href: links.shijimiworksX },
      { label: "Substack", href: links.shijimiworksSubstack },
      { label: "note", href: links.shijimiworksNote },
      { label: "YouTube", href: links.youtube },
      { label: "Podcast", href: links.podcast },
      { label: "Mail", href: links.mail },
    ],
  },
];

function isExternal(href: string) {
  return href.startsWith("http") || href.startsWith("mailto:");
}

function SmartLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link href={href} className={className} target={isExternal(href) && !href.startsWith("mailto:") ? "_blank" : undefined} rel={isExternal(href) && !href.startsWith("mailto:") ? "noopener noreferrer" : undefined}>
      {children}
    </Link>
  );
}

function VisualMock({ type, large = false }: { type: VisualType; large?: boolean }) {
  return (
    <div className={`shijimi-corp-visual-mock is-${type} ${large ? "is-large" : ""}`} aria-hidden="true">
      {type === "mobile" && <><span className="phone-speaker" /><span className="phone-card" /><span className="phone-dot one" /><span className="phone-dot two" /><span className="phone-bar" /></>}
      {type === "desktop" && <><span className="desktop-top" /><span className="desktop-panel main" /><span className="desktop-panel side" /><span className="desktop-line a" /><span className="desktop-line b" /></>}
      {type === "book" && <><span className="book-cover" /><span className="book-page" /><span className="book-mic" /><span className="book-wave" /></>}
      {type === "system" && <><span className="node n1" /><span className="node n2" /><span className="node n3" /><span className="node n4" /><span className="rail" /><span className="train" /></>}
      {type === "document" && <><span className="doc d1" /><span className="doc d2" /><span className="doc d3" /><span className="doc-line l1" /><span className="doc-line l2" /></>}
      {type === "dashboard" && <><span className="dash-window" /><span className="dash-widget w1" /><span className="dash-widget w2" /><span className="dash-widget w3" /><span className="dash-graph" /></>}
    </div>
  );
}

function Header() {
  const nav = [
    { label: "ShijimiWORKsについて", href: "#about" },
    { label: "プロダクト", href: "#products" },
    { label: "サービス", href: "#services" },
    { label: "note", href: links.shijimiworksNote },
    { label: "Substack", href: links.shijimiworksSubstack },
    { label: "X", href: links.shijimiworksX },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="shijimi-corp-header">
      <SmartLink href={links.shijimiworks} className="shijimi-corp-brand" aria-label="ShijimiWORKs home">
        <Image src={shijimiIcon} alt="ShijimiWORKs" width={52} height={52} priority />
        <span><strong>ShijimiWORKs</strong><small>AI / Web / App / Automation / Writing</small></span>
      </SmartLink>
      <nav className="shijimi-corp-nav" aria-label="ShijimiWORKs navigation">
        {nav.map((item) => <SmartLink key={`${item.label}-${item.href}`} href={item.href}>{item.label}</SmartLink>)}
      </nav>
    </header>
  );
}

function TopVisual() {
  return (
    <section className="shijimi-corp-top" id="top">
      <motion.div className="shijimi-corp-icon-orbit" initial={{ opacity: 0, y: 20, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: .75, ease: "easeOut" }}>
        <Image src={shijimiIcon} alt="ShijimiWORKs icon" width={260} height={260} priority />
      </motion.div>
      <motion.div className="shijimi-corp-top-copy" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75, delay: .12, ease: "easeOut" }}>
        <p>AI CREATIVE STUDIO</p>
        <h1>ShijimiWORKs</h1>
        <span>AIを制作の補助輪にして、アイデアを形へ。形にしたものを届け、続けられる仕組みにします。</span>
      </motion.div>
    </section>
  );
}

function ValueMission() {
  return (
    <>
      <section className="shijimi-corp-value" id="about">
        <p className="shijimi-corp-label">VALUE</p>
        <div className="shijimi-corp-value-lines">
          <span>AIを、制作の補助輪に。</span>
          <span>小さなアイデアを、使える形に。</span>
          <span>続かない作業を、続けられる仕組みに。</span>
        </div>
      </section>
      <section className="shijimi-corp-mission" id="mission">
        <div>
          <p className="shijimi-corp-label">BRAND MISSION</p>
          <h2>AIで作り、<br />届け、<br />仕組みにする。</h2>
        </div>
        <div className="shijimi-corp-mission-text">
          <p>ShijimiWORKsは、生成AIを活用して、Web制作、記事制作、アプリ開発、自動化、メディア運用を横断的に形にする個人制作スタジオです。</p>
          <p>ただ作るだけではなく、運用し、改善し、届け続けるための導線まで設計します。</p>
        </div>
      </section>
    </>
  );
}

function ProductShowcase() {
  const [activeId, setActiveId] = useState(products[0].id);
  const activeProduct = products.find((product) => product.id === activeId) ?? products[0];

  return (
    <section className="shijimi-corp-products" id="products" onMouseLeave={() => setActiveId(products[0].id)}>
      <div className="shijimi-corp-section-head is-centered">
        <p className="shijimi-corp-label">PRODUCTS</p>
        <h2>作ったもの、設計したもの、運用しているもの。</h2>
      </div>
      <div className="shijimi-corp-products-stage">
        <motion.div key={activeProduct.id} className={`shijimi-corp-product-backdrop is-${activeProduct.visualType}`} initial={{ opacity: 0, x: 80, scale: 1.06 }} animate={{ opacity: 1, x: -22, scale: 1.12 }} transition={{ duration: 1.1, ease: "easeInOut" }}>
          <VisualMock type={activeProduct.visualType} large />
        </motion.div>
        <div className="shijimi-corp-product-grid">
          {products.map((product, index) => {
            const isActive = activeId === product.id;
            return (
              <article key={product.id} className={`shijimi-corp-product-card ${isActive ? "is-active" : ""}`} onMouseEnter={() => setActiveId(product.id)} onFocus={() => setActiveId(product.id)} tabIndex={0}>
                <div className="shijimi-corp-product-number">0{index + 1}</div>
                <VisualMock type={product.visualType} />
                <div className="shijimi-corp-product-copy">
                  <small>{product.type}</small>
                  <h3>{product.title}</h3>
                  <div className="shijimi-corp-product-detail">
                    <p>{product.description}</p>
                    <div>{product.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                    <SmartLink href={product.href}>詳細を見る <ArrowUpRight aria-hidden="true" /></SmartLink>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
      <div className="shijimi-corp-product-cta">
        <SmartLink href={links.works}>プロダクトを見る <ArrowUpRight aria-hidden="true" /></SmartLink>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="shijimi-corp-services" id="services">
      <div className="shijimi-corp-section-head">
        <p className="shijimi-corp-label">SERVICES</p>
        <h2>AIを活用して、制作と運用をつなぎます。</h2>
      </div>
      <div className="shijimi-corp-service-grid">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <article key={service.title} className="shijimi-corp-service-card">
              <div><span>0{index + 1}</span><Icon aria-hidden="true" /></div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <small>相談できること: {service.scope}</small>
              <SmartLink href={service.href}>関連を見る <ArrowUpRight aria-hidden="true" /></SmartLink>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="shijimi-corp-contact" id="contact">
      <div className="shijimi-corp-contact-copy">
        <p className="shijimi-corp-label">CONTACT</p>
        <h2>プロジェクトの相談、制作依頼、AI活用の整理はこちらから。</h2>
        <p>内容がまだ固まっていなくても大丈夫です。Web、記事、アプリ、自動化、発信導線の整理から相談できます。</p>
        <div>
          <SmartLink href={links.contact}>お問い合わせ <Mail aria-hidden="true" /></SmartLink>
          <SmartLink href={links.coconala}>ココナラで相談 <ArrowUpRight aria-hidden="true" /></SmartLink>
        </div>
      </div>
      <div className="shijimi-corp-contact-visual" aria-hidden="true">
        <div className="contact-card main"><Mail /><span>Project brief</span><strong>相談内容を整理</strong></div>
        <div className="contact-card sub"><MessageCircle /><span>First talk</span></div>
        <div className="contact-flow"><span /><span /><span /></div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="shijimi-corp-footer">
      <div className="shijimi-corp-footer-brand">
        <Image src={shijimiIcon} alt="ShijimiWORKs" width={58} height={58} />
        <strong>ShijimiWORKs</strong>
        <span>AI / Web / App / Automation / Writing</span>
      </div>
      <div className="shijimi-corp-footer-groups">
        {footerGroups.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <h3>{group.title}</h3>
            {group.links.map((item) => <SmartLink key={`${group.title}-${item.label}`} href={item.href}>{item.label}</SmartLink>)}
            {group.title === "SNS / Links" && <><span className="is-disabled">Instagram 準備中</span><span className="is-disabled">Threads 準備中</span></>}
          </nav>
        ))}
      </div>
      <p className="shijimi-corp-copyright">© 2026 ShijimiWORKs. AIで作り、届け、仕組みにする。</p>
    </footer>
  );
}

export function ShijimiStudioPage() {
  return (
    <div className="shijimi-corp-page">
      <Header />
      <main>
        <TopVisual />
        <ValueMission />
        <ProductShowcase />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
