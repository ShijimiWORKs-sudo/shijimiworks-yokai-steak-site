export type ShijimiPortfolio = {
  id: string;
  title: string;
  number: string;
  siteName: string;
  siteType: string;
  concept: string;
  designFeatures: string[];
  techStack: string[];
  purpose: string;
  sections: string[];
  useCase: string;
  status: string;
  githubUrl: string;
  demoUrl?: string;
  embeddable?: boolean;
  thumbnail?: string;
  tags: string[];
};

const githubBase = "https://github.com/ShijimiWORKs-sudo";

export const shijimiPortfolios: ShijimiPortfolio[] = [
  {
    id: "portfolio-hp001",
    title: "Portfolio HP001",
    number: "001",
    siteName: "PLANECT（プラネクト）",
    siteType: "コーポレートサイト（架空の総合コンサルティング会社）",
    concept: "架空の総合コンサルティング会社「株式会社プラネクト」のコーポレートサイト。スクロールで物語のように会社紹介が展開する構成。",
    designFeatures: ["スクロール連動アニメーション（GSAP）", "慣性のあるスムーススクロール（Lenis）", "アニメ調イラストレーション"],
    techStack: ["HTML5", "CSS3", "Vanilla JavaScript", "GSAP", "Lenis"],
    purpose: "ビルド不要の静的サイトで、企業サイトのスクロール表現力とアニメーション設計力を見せるための制作サンプル。",
    sections: ["About", "Services", "Approach", "Works", "Team", "News", "FAQ", "Contact"],
    useCase: "企業・法人サイトの制作依頼を検討している相手向けのデモ",
    status: "公開中（GitHub Pages）",
    githubUrl: `${githubBase}/shijimiworks-yokai-steak-site_ProtforioHP001`,
    demoUrl: "https://shijimiworks-sudo.github.io/shijimiworks-yokai-steak-site_ProtforioHP001/",
    thumbnail: "/images/shijimi/portfolios/hp001-preview.jpg",
    tags: ["Corporate", "GSAP", "Static Site", "Codex Build"],
  },
  {
    id: "portfolio-hp002",
    title: "Portfolio HP002",
    number: "002",
    siteName: "HIRAMEKI（ヒラメキ）",
    siteType: "サービス紹介サイト（架空のコンサルティングアトリエ）",
    concept: "「その手があったか、を量産する。」というコピーを軸にした、架空のアイデア発想支援アトリエのサイト。",
    designFeatures: ["レトロY2Kコラージュ", "ネオンカラー＋ハードシャドウ", "ステッカー風の装飾要素"],
    techStack: ["HTML", "CSS", "Vanilla JavaScript", "GSAP ScrollTrigger", "Lenis"],
    purpose: "個性の強いビジュアル方向性でも、レスポンシブとアクセシビリティ（prefers-reduced-motion対応含む）を両立できることを示す制作サンプル。",
    sections: ["About", "Services", "Process", "Portfolio", "Team", "FAQ", "Contact"],
    useCase: "個性的なブランディングを求めるサービス業向けのデモ",
    status: "公開中（GitHub Pages）",
    githubUrl: `${githubBase}/shijimiworks-yokai-steak-site_ProtforioHP002`,
    demoUrl: "https://shijimiworks-sudo.github.io/shijimiworks-yokai-steak-site_ProtforioHP002/",
    thumbnail: "/images/shijimi/portfolios/hp002-preview.jpg",
    tags: ["Landing Page", "Retro / Y2K", "Static Site", "Demo"],
  },
  {
    id: "portfolio-hp003",
    title: "Portfolio HP003",
    number: "003",
    siteName: "Freelance Frontend Engineer Portfolio",
    siteType: "個人ポートフォリオ・リード獲得LP（架空のフリーランスエンジニア）",
    concept: "フリーランスのフロントエンドエンジニアが、案件相談を獲得するための単一ページLP。",
    designFeatures: ["CSS変数によるデザイントークン管理", "すべて自作のインラインSVGグラフィック", "375px以上のレスポンシブ対応"],
    techStack: ["Next.js 15 (App Router)", "React 19", "TypeScript"],
    purpose: "実績・強み・料金・進め方を一枚で伝え、問い合わせにつなげるためのフリーランス向けLPサンプル。",
    sections: ["Hero", "About", "Services", "Works", "Strengths", "Process Flow", "Pricing", "FAQ", "Contact"],
    useCase: "フリーランス・個人事業主の案件相談LP",
    status: "公開中（GitHub Pages / GitHub Actionsビルド）",
    githubUrl: `${githubBase}/shijimiworks-yokai-steak-site_ProtforioHP003`,
    demoUrl: "https://shijimiworks-sudo.github.io/shijimiworks-yokai-steak-site_ProtforioHP003/",
    thumbnail: "/images/shijimi/portfolios/hp003-preview.jpg",
    tags: ["Landing Page", "Freelance", "Next.js", "Demo"],
  },
  {
    id: "portfolio-hp004",
    title: "Portfolio HP004",
    number: "004",
    siteName: "ShijimiWORKs Art Collection | Online Gallery",
    siteType: "ECギャラリーサイト（架空のデジタルアート販売）",
    concept: "抽象デジタルアートを販売する、架空のオンラインギャラリー。外部UIライブラリ・CSSフレームワークを使わない自前実装。",
    designFeatures: ["IntersectionObserverによるスクロールアニメーション", "自作の抽象アートワーク（SVG）", "外部UIライブラリ不使用"],
    techStack: ["Next.js 15 (App Router)", "React 19", "TypeScript", "CSS Modules"],
    purpose: "作品販売を軸にしたアート系集客サイトの制作サンプル。",
    sections: ["Hero", "Gallery", "About the artist", "Pricing", "Contact"],
    useCase: "アート・クリエイター系の作品販売サイト",
    status: "公開中（GitHub Pages / GitHub Actionsビルド）",
    githubUrl: `${githubBase}/shijimiworks-yokai-steak-site_ProtforioHP004`,
    demoUrl: "https://shijimiworks-sudo.github.io/shijimiworks-yokai-steak-site_ProtforioHP004/",
    thumbnail: "/images/shijimi/portfolios/hp004-preview.jpg",
    tags: ["Art", "Gallery", "Next.js", "Demo"],
  },
  {
    id: "portfolio-hp005",
    title: "Portfolio HP005",
    number: "005",
    siteName: "Design Team Recruitment Portfolio",
    siteType: "採用ポートフォリオサイト（架空のデザイン3人チーム）",
    concept: "デザイン中心の3人チームが、実績と人柄を伝えながら採用・案件相談につなげるための単一ページサイト。",
    designFeatures: ["CSSデザインシステム変数", "IntersectionObserverによるスクロール効果", "Unsplash画像＋自作SVG/CSS"],
    techStack: ["Next.js 14 (App Router)", "React 18", "TypeScript (strict)"],
    purpose: "チームの実績・強み・料金・進め方を一望させ、採用と案件相談の両方につなげるためのサンプル。",
    sections: ["Hero", "Concept", "Service", "Works", "Team", "Strength", "Process", "Price", "FAQ", "Contact"],
    useCase: "デザインチーム・スタジオの採用/案件相談LP",
    status: "公開中（GitHub Pages / GitHub Actionsビルド）",
    githubUrl: `${githubBase}/shijimiworks-yokai-steak-site_ProtforioHP005`,
    demoUrl: "https://shijimiworks-sudo.github.io/shijimiworks-yokai-steak-site_ProtforioHP005/",
    thumbnail: "/images/shijimi/portfolios/hp005-preview.jpg",
    tags: ["Team", "Recruiting", "Next.js", "Demo"],
  },
  {
    id: "portfolio-hp006",
    title: "Portfolio HP006",
    number: "006",
    siteName: "Interior Design Consulting Portfolio",
    siteType: "サービス紹介サイト（架空のインテリアデザインコンサル）",
    concept: "インテリアデザインの相談・提案サービスを紹介する、落ち着いたトーンの単一ページサイト。",
    designFeatures: ["CSSデザインシステム変数", "prefers-reduced-motion対応", "正しい見出し階層によるアクセシビリティ配慮"],
    techStack: ["Next.js 14 (App Router)", "React 18", "TypeScript (strict)"],
    purpose: "サービス内容・過去実績・料金・FAQ・問い合わせを、信頼感を重視して伝えるための制作サンプル。",
    sections: ["Hero", "Services", "Past Projects", "Pricing", "FAQ", "Contact"],
    useCase: "インテリア・空間デザイン系の相談導線サイト",
    status: "公開中（GitHub Pages / GitHub Actionsビルド）",
    githubUrl: `${githubBase}/shijimiworks-yokai-steak-site_ProtforioHP006`,
    demoUrl: "https://shijimiworks-sudo.github.io/shijimiworks-yokai-steak-site_ProtforioHP006/",
    thumbnail: "/images/shijimi/portfolios/hp006-preview.jpg",
    tags: ["Interior", "Consulting", "Next.js", "Demo"],
  },
  {
    id: "portfolio-hp007",
    title: "Portfolio HP007",
    number: "007",
    siteName: "Freelance Journalist Official Site",
    siteType: "個人公式サイト（架空のフリージャーナリスト）",
    concept: "フリージャーナリストが、著書・取材実績・執筆テーマ・出演歴を伝え、メディア・出版関係者との接点をつくるための個人サイト。",
    designFeatures: ["エディトリアルデザイン", "自作CSSによる書影表現", "next/imageによる画像最適化", "IntersectionObserverのスクロール効果"],
    techStack: ["Next.js 14 (App Router)", "React 18", "TypeScript (strict)"],
    purpose: "執筆実績と人物像を編集的に見せ、取材・執筆・出演依頼につなげるための個人サイトサンプル。",
    sections: ["Hero", "Profile", "Books", "Works", "Articles", "Writing Themes", "Services", "Process", "Pricing", "FAQ", "Contact"],
    useCase: "物書き・ジャーナリスト・ライターの個人公式サイト",
    status: "公開中（GitHub Pages / GitHub Actionsビルド）",
    githubUrl: `${githubBase}/shijimiworks-yokai-steak-site_ProtforioHP007`,
    demoUrl: "https://shijimiworks-sudo.github.io/shijimiworks-yokai-steak-site_ProtforioHP007/",
    thumbnail: "/images/shijimi/portfolios/hp007-preview.jpg",
    tags: ["Editorial", "Writer", "Next.js", "Demo"],
  },
  {
    id: "portfolio-hp008",
    title: "Portfolio HP008",
    number: "008",
    siteName: "ShijimiWORKs Woodcraft",
    siteType: "ECブランドサイト（架空の地方木工工房）",
    concept: "地方の木工工房が、既製品の販売とオーダー家具の相談を受け付ける、架空のEC型ブランドサイト。",
    designFeatures: ["CSS木目グラデーション＋自作SVGイラスト", "製品フィルタリング（10品）", "next/imageによる画像最適化"],
    techStack: ["Next.js 14 (App Router)", "React 18", "TypeScript (strict)"],
    purpose: "製品紹介、オーダー相談、工房・製作工程の紹介までを一枚のEC型サイトでまとめるための制作サンプル。",
    sections: ["Hero", "Concept", "Products (10 items)", "Featured Collections", "Custom Order", "Workshop", "Process", "Order Flow", "Pricing / Shipping", "FAQ", "Contact"],
    useCase: "工芸・ものづくり系のEC型ブランドサイト",
    status: "公開中（GitHub Pages / GitHub Actionsビルド）",
    githubUrl: `${githubBase}/shijimiworks-yokai-steak-site_ProtforioHP008`,
    demoUrl: "https://shijimiworks-sudo.github.io/shijimiworks-yokai-steak-site_ProtforioHP008/",
    thumbnail: "/images/shijimi/portfolios/hp008-preview.jpg",
    tags: ["EC", "Craft", "Next.js", "Demo"],
  },
];

export const getShijimiPortfolioById = (id: string) => shijimiPortfolios.find((item) => item.id === id);
