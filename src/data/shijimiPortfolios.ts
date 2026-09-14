export type ShijimiPortfolio = {
  id: string;
  title: string;
  number: string;
  description: string;
  useCase: string;
  designType: string;
  status: string;
  githubUrl: string;
  demoUrl?: string;
  thumbnail?: string;
  tags: string[];
};

const githubBase = "https://github.com/ShijimiWORKs-sudo";

export const shijimiPortfolios: ShijimiPortfolio[] = [
  { id: "portfolio-hp001", title: "Portfolio HP001", number: "001", useCase: "創作名義・個人活動サイト", designType: "Creative / Story / Dark", status: "GitHub公開中 / 公開URL準備中", githubUrl: `${githubBase}/shijimiworks-yokai-steak-site_ProtforioHP001`, description: "創作活動や個人名義を印象的に見せるためのデモサイト。", tags: ["Portfolio", "Creative", "Demo", "Codex Build"] },
  { id: "portfolio-hp002", title: "Portfolio HP002", number: "002", useCase: "サービス紹介・LP", designType: "Business / Clean / Landing Page", status: "GitHub公開中 / 公開URL準備中", githubUrl: `${githubBase}/shijimiworks-yokai-steak-site_ProtforioHP002`, description: "サービスの価値と問い合わせ導線を整理するためのLP型デモ。", tags: ["Landing Page", "Business", "Service", "Demo"] },
  { id: "portfolio-hp003", title: "Portfolio HP003", number: "003", useCase: "ポートフォリオ・作品一覧", designType: "Gallery / Portfolio / Grid", status: "GitHub公開中 / 公開URL準備中", githubUrl: `${githubBase}/shijimiworks-yokai-steak-site_ProtforioHP003`, description: "制作物を一覧で見せ、作品ごとの違いを探しやすくするデモ。", tags: ["Portfolio", "Gallery", "Grid", "Demo"] },
  { id: "portfolio-hp004", title: "Portfolio HP004", number: "004", useCase: "ココナラ出品・相談導線", designType: "Friendly / Trust / Contact", status: "GitHub公開中 / 公開URL準備中", githubUrl: `${githubBase}/shijimiworks-yokai-steak-site_ProtforioHP004`, description: "相談しやすさと信頼感を重視した出品ページ向けデモ。", tags: ["Coconala", "Contact", "Service", "Demo"] },
  { id: "portfolio-hp005", title: "Portfolio HP005", number: "005", useCase: "メディア・記事サイト", designType: "Media / Magazine / Editorial", status: "GitHub公開中 / 公開URL準備中", githubUrl: `${githubBase}/shijimiworks-yokai-steak-site_ProtforioHP005`, description: "記事や連載を読みやすく整理するメディア型デモ。", tags: ["Media", "Magazine", "Article", "Demo"] },
  { id: "portfolio-hp006", title: "Portfolio HP006", number: "006", useCase: "アプリ紹介・MVP", designType: "Product / App / Dashboard", status: "GitHub公開中 / 公開URL準備中", githubUrl: `${githubBase}/shijimiworks-yokai-steak-site_ProtforioHP006`, description: "アプリの機能、想定ユーザー、検証状況を伝えるプロダクト型デモ。", tags: ["App", "MVP", "Dashboard", "Demo"] },
  { id: "portfolio-hp007", title: "Portfolio HP007", number: "007", useCase: "アート・ブランドサイト", designType: "Art / Visual / Brand", status: "GitHub公開中 / 公開URL準備中", githubUrl: `${githubBase}/shijimiworks-yokai-steak-site_ProtforioHP007`, description: "世界観やビジュアルを強く打ち出すブランドサイト型デモ。", tags: ["Art", "Brand", "Creative", "Demo"] },
  { id: "portfolio-hp008", title: "Portfolio HP008", number: "008", useCase: "複合ポートフォリオ", designType: "Studio / Works / Multi Category", status: "GitHub公開中 / 公開URL準備中", githubUrl: `${githubBase}/shijimiworks-yokai-steak-site_ProtforioHP008`, description: "複数カテゴリの制作物をまとめるスタジオ型デモ。", tags: ["Studio", "Works", "Portfolio", "Codex Build"] },
];
