export type ShijimiProduct = {
  id: string;
  title: string;
  category: string;
  type: string;
  description: string;
  status: string;
  image: string;
  href: string;
  githubUrl?: string;
  demoUrl?: string;
  demoLabel?: string;
  ctaLabel: string;
  tags: string[];
  featured: boolean;
  order: number;
};

export const shijimiProducts: ShijimiProduct[] = [
  {
    id: "netakura",
    title: "NETAKURA",
    category: "App / MVP / AI Idea Support",
    type: "スマホアプリ / AI企画支援",
    description:
      "SNS、note、YouTube、ブログなどのネタ出しを支援するAI活用アプリ。眠っているアイデアを掘り起こし、投稿・企画・記事の種に変えるためのプロダクトです。",
    status: "開発中 / 試作版あり",
    image: "/images/shijimi/products/01_shijimi-product-mobile-app.png",
    href: "/products/app-mvp#netakura",
    githubUrl: "https://github.com/ShijimiWORKs-sudo/shijimiworks-NETAKURA",
    demoUrl: "",
    demoLabel: "公開URL準備中",
    ctaLabel: "開発リポジトリを見る",
    tags: ["AI", "MVP", "Idea Support", "Content"],
    featured: true,
    order: 1,
  },
  {
    id: "darts-support-app",
    title: "DartsSupportApp",
    category: "App / Sports Tech / Darts",
    type: "スポーツテック / 成績管理",
    description:
      "ダーツ練習や成績管理を支援するためのアプリ。プレイヤーの練習記録、成績把握、上達補助を目的とした、スポーツ×アプリ開発の実験プロダクトです。",
    status: "開発中 / 試作版あり",
    image: "/images/shijimi/products/01_shijimi-product-mobile-app.png",
    href: "/products/app-mvp#darts-support-app",
    githubUrl: "https://github.com/ShijimiWORKs-sudo/shijimiworks-dartssuportapp",
    demoUrl: "",
    demoLabel: "公開URL準備中",
    ctaLabel: "開発リポジトリを見る",
    tags: ["Darts", "Sports Tech", "MVP", "Record"],
    featured: true,
    order: 2,
  },
  {
    id: "darts-app",
    title: "DartsApp",
    category: "App / Darts / Rating System",
    type: "アプリ構想 / Rating管理",
    description:
      "01、CRICKET、COUNT-UPなどのゲーム記録、Rating管理、プレイヤー管理を想定した本格ダーツアプリ構想。詳細設計・DB設計・画面遷移・Rating仕様を整理しながら開発中です。",
    status: "開発中",
    image: "/images/shijimi/products/01_shijimi-product-mobile-app.png",
    href: "/products/app-mvp#darts-app",
    githubUrl: "https://github.com/ShijimiWORKs-sudo/shijimiworks-DartsApp_Web",
    demoUrl: "",
    demoLabel: "開発中",
    ctaLabel: "構想を見る",
    tags: ["Darts", "Rating", "DB Design", "App"],
    featured: true,
    order: 3,
  },
  {
    id: "web-portfolio",
    title: "Web / Portfolio制作",
    category: "Web / Portfolio",
    type: "Web制作 / Portfolio",
    description:
      "個人活動、創作名義、サービス紹介、ポートフォリオ、ココナラ出品用のWebサイト制作実績。共通ホームやHP001〜008のデモサイト群をまとめて見られる導線です。",
    status: "制作実績 / デモ展開中",
    image: "/images/shijimi/products/02_shijimi-product-web-portfolio.png",
    href: "/products/web-portfolio",
    demoLabel: "ポートフォリオ一覧",
    ctaLabel: "ポートフォリオを見る",
    tags: ["Web", "Portfolio", "Landing Page", "Codex Build"],
    featured: true,
    order: 4,
  },
  {
    id: "automation-workflow",
    title: "自動投稿運用フロー",
    category: "Automation / Workflow",
    type: "自動化 / 投稿運用",
    description:
      "Buffer、Notion、X、note、記事生成、daily_digestなどをつなぎ、投稿や更新を継続しやすくするための自動運用フローです。",
    status: "運用改善中",
    image: "/images/shijimi/products/04_shijimi-product-automation-workflow.png",
    href: "/products/automation-workflow",
    ctaLabel: "自動化の仕組みを見る",
    tags: ["Automation", "Workflow", "SNS", "Notion"],
    featured: true,
    order: 5,
  },
  {
    id: "corporate-ai-consulting",
    title: "Corporate AI / LLM活用支援",
    category: "Corporate AI / LLM / Consulting",
    type: "法人向けAI活用 / 業務整理",
    description:
      "企業がAIをどのように業務へ取り込み、RPA、DX、経理自動化、資料作成、社内ナレッジ活用、運用保守へつなげられるかを整理する支援領域です。",
    status: "相談受付中",
    image: "/images/shijimi/products/06_shijimi-product-corporate-ai-consulting.png",
    href: "/products/corporate-ai-consulting",
    ctaLabel: "AI導入支援を見る",
    tags: ["Corporate AI", "LLM", "DX", "Consulting"],
    featured: true,
    order: 6,
  },
];

export const getShijimiProductById = (id: string) => shijimiProducts.find((product) => product.id === id);
