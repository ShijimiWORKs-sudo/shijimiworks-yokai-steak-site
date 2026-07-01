import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { ExternalLinks } from "@/components/ExternalLinks";
import { ProjectLog } from "@/components/ProjectLog";
import { Section } from "@/components/Section";
import { ShijimiHero } from "@/components/ShijimiHero";
import { WorkCard } from "@/components/WorkCard";
import { links } from "@/data/links";
import { works } from "@/data/works";

export const metadata: Metadata = {
  title: "ShijimiWORKs",
  description: "生成AIを活用して、Web制作、記事制作、アプリ開発、自動化、メディア運用を形にする個人制作スタジオ。",
  openGraph: {
    title: "ShijimiWORKs",
    description: "生成AIを活用して、Web制作、記事制作、アプリ開発、自動化、メディア運用を形にする個人制作スタジオ。",
    images: [{ url: "/images/ogp/shijimiworks-ogp.png", alt: "ShijimiWORKs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ShijimiWORKs",
    description: "生成AIを活用して、Web制作、記事制作、アプリ開発、自動化、メディア運用を形にする個人制作スタジオ。",
    images: ["/images/ogp/shijimiworks-ogp.png"],
  },
};

const shijimiLinks = [
  { label: "noteを見る", href: links.shijimiworksNote },
  { label: "Substackを見る", href: links.shijimiworksSubstack },
  { label: "ココナラで相談する", href: links.coconala },
  { label: "Xを見る", href: links.shijimiworksX },
] as const;

const capabilities = [
  { number: "01", title: "AI活用・プロンプト設計", text: "ChatGPT、Claude、Grokなどを使い、記事作成・企画出し・業務整理・発信設計を支援します。" },
  { number: "02", title: "Web制作", text: "個人サイト、ポートフォリオ、サービス紹介ページ、LPなどを制作します。" },
  { number: "03", title: "アプリ開発・MVP設計", text: "アプリ案の要件定義、画面設計、MVP構成、実装補助まで整理します。" },
  { number: "04", title: "自動化・運用設計", text: "SNS投稿、Buffer運用、Notion管理、記事生成フローなど、継続運用の仕組みを作ります。" },
  { number: "05", title: "AI文書・マガジン制作", text: "AI活用術、note記事、有料マガジン、Substack向け文章などを企画・制作します。" },
] as const;

const serviceMenus = ["AI活用相談", "ホームページ制作相談", "note / Substack運用設計", "自動化フロー設計", "AI文章制作・プロンプト設計"];
const documents = [
  { type: "ARTICLE", title: "note", text: "実践と試行錯誤を、読みやすい記事に。" },
  { type: "NEWSLETTER", title: "Substack", text: "継続して届く、テーマのあるニュースレター。" },
  { type: "MAGAZINE", title: "有料マガジン", text: "知識と経験を、まとまりのある読み物へ。" },
  { type: "PROMPTS", title: "プロンプト集", text: "繰り返し使える問いと型を整理。" },
  { type: "REPORT", title: "事例レポート", text: "制作と運用から得た判断を記録。" },
  { type: "DOCUMENT", title: "AI活用文書", text: "業務や発信で使える文書を設計。" },
] as const;

export default function ShijimiWorksPage() {
  return (
    <div className="shijimi-page bg-[#f7f5ef]">
      <ShijimiHero />

      <Section eyebrow="What I Do" title="できること" description="文章、Web、アプリ、運用。点ではなく、届け続ける流れとして設計します。" className="bg-white">
        <div className="capability-grid">
          {capabilities.map((item) => <article key={item.title} className="capability-card"><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}
        </div>
      </Section>

      <Section eyebrow="Portfolio" title="Works / Portfolio" description="制作したもの、設計したもの、運用しているもの。">
        <div className="mb-8 flex flex-wrap gap-2" aria-label="制作カテゴリ">{["Web", "App", "Automation", "Writing", "Media"].map((category) => <span key={category} className="rounded-full border border-slate-900/10 bg-white px-4 py-2 text-xs font-bold text-slate-600">{category}</span>)}</div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{works.filter((work) => work.brand !== "youkai-steak").slice(0, 6).map((work) => <WorkCard key={work.slug} work={work} />)}</div>
        <div className="mt-8"><Button href="/works" variant="outline">すべての制作実績</Button></div>
      </Section>

      <Section eyebrow="Process" title="Project Log" description="ShijimiWORKsでは、完成した成果物だけでなく、要件定義・設計・試作・運用改善の過程も記録しています。" className="bg-[#eaf1f3]">
        <p className="-mt-5 mb-8 text-sm font-bold text-sky-800">いま作っているもの</p><ProjectLog />
      </Section>

      <Section eyebrow="Services" title="相談できること" description="まだ要件が固まっていなくても大丈夫です。話しながら、必要な形と進め方を整理します。" className="bg-white">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{serviceMenus.map((service, index) => <article key={service} className="service-menu-card"><span>0{index + 1}</span><h3>{service}</h3><p>課題の整理から、作るものと続け方まで一緒に設計します。</p></article>)}</div>
        <div className="mt-9 flex flex-wrap gap-3"><Button href="/contact">まずは相談する</Button><Button href="/works" variant="outline">制作実績を見る</Button></div>
      </Section>

      <Section eyebrow="Publishing" title="Magazine / Documents" description="AI活用を、読める形にする。">
        <div className="document-grid">{documents.map((document, index) => <article key={document.title} className="document-card"><div className="document-page"><span>{document.type}</span><i /><i /><i /></div><div><span className="text-[.62rem] font-bold tracking-widest text-slate-400">FILE 0{index + 1}</span><h3 className="mt-2 text-lg font-bold text-slate-900">{document.title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{document.text}</p></div></article>)}</div>
      </Section>

      <Section eyebrow="About" title="About ShijimiWORKs" className="bg-white">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start"><div><p className="text-2xl font-bold leading-10 text-slate-900 sm:text-3xl">AIと制作のあいだに立つ、<br />小さな制作室。</p><div className="mt-8 rounded-3xl bg-slate-950 p-7 text-white"><p className="text-xs font-bold uppercase tracking-[.2em] text-sky-300">Working principle</p><p className="mt-4 leading-7 text-slate-300">AI assisted.<br />Human directed.<br />Continuously improved.</p></div></div><div className="space-y-5 text-base leading-8 text-slate-600"><p>ShijimiWORKsは、生成AIを使って文章、Web、アプリ、メディア運用、自動化を横断的に作る個人制作スタジオです。</p><p>AIを魔法のように扱うのではなく、考える、書く、作る、届けるための補助輪として使います。</p><p>創作名義「妖怪ステーキ」では、小説、映画感想、Podcast、動画などを制作しています。その裏側で使っている投稿導線、コンテンツ管理、自動化、AI活用の仕組みも、ShijimiWORKsの実験と実績です。</p></div></div>
      </Section>

      <section className="shijimi-contact px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-20"><div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="text-xs font-bold uppercase tracking-[.25em] text-sky-300">Contact</p><h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">制作や相談の入口</h2><p className="mt-5 max-w-2xl leading-8 text-slate-300">AI活用、Web制作、記事制作、発信設計、自動化、ポートフォリオ制作などの相談を受け付けています。まだ内容が固まっていない段階でも、整理から相談できます。</p></div><div className="max-w-xl"><Button href={links.contact} variant="dark">お問い合わせする</Button><ExternalLinks items={shijimiLinks} tone="dark" className="mt-3" /></div></div></section>
    </div>
  );
}
