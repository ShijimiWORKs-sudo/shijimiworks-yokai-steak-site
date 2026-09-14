export type ShijimiApp = {
  id: string;
  title: string;
  category: string;
  status: string;
  description: string;
  audience: string;
  benefits: string[];
  currentState: string;
  techStack?: string[];
  features?: string[];
  intent?: string;
  roadmap?: string[];
  githubUrl?: string;
  demoUrl?: string;
  image: string;
  screenshots?: { src: string; alt: string }[];
  tags: string[];
};

export const shijimiApps: ShijimiApp[] = [
  {
    id: "netakura",
    title: "NETAKURA",
    category: "App / MVP / AI Idea Support",
    status: "開発中 / Webデモ版あり",
    description:
      "メモ・愚痴・日記・映画の感想・仕事の気づきなど、思いつきをnote構成・X投稿・Threads投稿の形に変換する発信支援ツールです。",
    audience: "発信を続けたい個人事業主、クリエイター、note・YouTube・SNS運用者。",
    benefits: ["投稿テーマの整理", "媒体別の切り口作成", "企画メモから記事・動画ネタへの展開"],
    currentState:
      "開発中のWebデモ版。外部有料APIキーは不要で、入力・生成結果はブラウザのlocalStorageに保存します。疑似AI生成によるnote構成・X投稿案・Threads投稿案の作成まで確認できる状態です。",
    techStack: ["Next.js", "React", "TypeScript", "localStorage（ブラウザ保存）"],
    features: [
      "メモ入力 / ジャンル選択 / 出力形式選択",
      "疑似AI生成による発信テーマ・タイトル案の作成",
      "note構成案 / X投稿案 / Threads投稿案の生成",
      "生成結果の保存・一覧・検索・ジャンルフィルター・コピー（Markdown対応）",
      "利用規約・プライバシーポリシー・特商法表記などの法務ページ",
    ],
    intent:
      "発信を続けたい人が、思いつきを腐らせずに投稿の種へ変えられるようにするためのツールです。UI上は商品名テキストを出さずロゴのみでブランドを表示する方針で作っています。",
    roadmap: ["UI改善", "生成品質の改善", "OpenAI API連携", "ユーザー認証", "ポイント制 / 課金導入"],
    githubUrl: "https://github.com/ShijimiWORKs-sudo/shijimiworks-NETAKURA",
    image: "/images/shijimi/products/01_shijimi-product-mobile-app.png",
    tags: ["AI", "Content", "MVP"],
  },
  {
    id: "darts-support-app",
    title: "DartsSupportApp",
    category: "App / Sports Tech / Darts",
    status: "開発中 / 実機QA済みMVP",
    description:
      "iPhoneとExpo Goを主対象にした、ダーツ練習支援アプリです。毎日の練習メニュー管理、記録、分析、フォーム相談をひとつの流れで確認できます。",
    audience: "ダーツ練習を記録したいプレイヤー、成績を見える化したい個人・チーム。",
    benefits: ["練習ログの蓄積", "成績の見える化", "上達のための振り返り"],
    currentState:
      "MVP v0.1。2026-08-06にiPhone実機・Expo Go・Expo SDK 54での主要フロー確認が完了しています。OpenAI API連携、動画の自動解析、骨格推定、正式な01/CRICKET/MATCHゲーム進行はこの段階では未実装です。",
    techStack: ["Expo", "React Native", "TypeScript", "Expo Router", "AsyncStorage", "expo-secure-store"],
    features: [
      "練習メニューの手入力・テンプレート化、開始/一時停止/再開/完了/スキップ/中断",
      "COUNT-UP・CRICKET COUNT-UP・SHOOT OUT・EAGLE'S EYE・FINISH TRAINER・DARTS LEVEL CHECKの記録",
      "写真から盤面をキャリブレーションし、3投分の得点候補をユーザー確認後に保存",
      "C〜SAの独自レベル、昇格候補、レベル履歴の管理",
      "ChatGPT用の評価依頼文コピー＆回答解析の保存",
      "PC Web版でiPhoneのバックアップJSONを取り込み、履歴・BULL率・クリケット平均マークなどを分析",
      "ローカルAccount（PINロック）とSQLite/AsyncStorageのExport・Import",
    ],
    intent:
      "練習の記録と可視化に、ChatGPTとの対話による振り返りを組み合わせ、上達のPDCAを回しやすくするために作っています。動画本体はSQLiteのBLOBに保存せず、メタデータのみを保持する設計です。",
    roadmap: ["動画の自動解析", "骨格推定によるフォーム診断", "正式な01/CRICKET/MATCHゲームエンジン化", "クラウド同期"],
    githubUrl: "https://github.com/ShijimiWORKs-sudo/shijimiworks-dartssuportapp",
    image: "/images/shijimi/products/01_shijimi-product-mobile-app.png",
    screenshots: [
      { src: "/images/shijimi/apps/darts-support-app/today-viewport.png", alt: "DartsSupportApp 今日の練習画面" },
      { src: "/images/shijimi/apps/darts-support-app/practice-progress-viewport.png", alt: "DartsSupportApp 練習記録・分析画面" },
      { src: "/images/shijimi/apps/darts-support-app/form-viewport.png", alt: "DartsSupportApp フォーム相談画面" },
    ],
    tags: ["Darts", "Sports Tech", "Record"],
  },
  {
    id: "darts-app",
    title: "DartsApp",
    category: "App / Darts / Rating System",
    status: "開発中",
    description:
      "PC WebとiPhone（Expo Go）を対象に、COUNT-UP・01・STANDARD CRICKET・2人対戦MATCHのゲーム進行とRating管理を確認するためのExpo + React Nativeアプリです。",
    audience: "複数ゲームの記録やRating管理をまとめたいダーツプレイヤー。",
    benefits: ["ゲーム別記録", "Rating仕様整理", "プレイヤー管理"],
    currentState:
      "開発中。ゲーム基盤（Phase 1）からCOUNT-UP・01・STANDARD CRICKET・MATCHの縦断実装（Phase 2〜6）、Rating Engine v2（Phase 9）、PC Web横長UI（Phase 8）、カメラによる自動スコアリング基盤（Phase 10A〜10C）まで段階的に実装中です。DARTSLIVE / PHOENIXの公式API連携、AI API連携、クラウド同期は未実装です。",
    techStack: ["Expo", "React Native", "TypeScript", "Expo Router", "expo-sqlite", "React Context"],
    features: [
      "COUNT-UP・単独01（301/501/701/901）・単独STANDARD CRICKET・2人対戦MATCHの開始/再開/undo・redo/一時停止/中断/結果表示",
      "ローカルAccountとRating Engine v2（Eligible MATCH 3件で初回Rating確定、以降01/CRICKET Indexを個別更新）",
      "SQLiteゲーム基盤（WAL・migration管理）とAsyncStorage側の既存データとの共通Account契約",
      "1024px以上のPC Webでは横長レイアウト、1280x720でのゲーム画面配置",
    ],
    intent:
      "COUNT-UP・01・CRICKET・MATCHという複数のゲーム形式とRating管理を、まず端末内ローカル動作だけで正しく成立させることを優先し、公式API連携やAI連携は後段に位置づけています。",
    roadmap: ["カメラによる自動スコアリング（Phase 10継続）", "効果音・アワード動画", "公式API連携の検討"],
    githubUrl: "https://github.com/ShijimiWORKs-sudo/shijimiworks-DartsApp_Web",
    image: "/images/shijimi/products/01_shijimi-product-mobile-app.png",
    tags: ["Darts", "Rating", "Database"],
  },
];
