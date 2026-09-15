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
  {
    id: "ap-trainer",
    title: "AP Trainer",
    category: "App / EdTech / 資格学習支援",
    status: "企画・設計フェーズ（Phase 0）",
    description: "応用情報技術者試験（AP）対策のための、PC Web向けハンズオン学習アプリです。",
    audience: "応用情報技術者試験の受験を目指す学習者。",
    benefits: ["試験範囲の体系的な学習", "教材データと学習履歴の分離管理", "姉妹アプリと共通のUI/UX方針"],
    currentState:
      "Phase 0（基盤構築）の段階です。製品企画、全機能一覧、画面一覧・画面遷移、DB設計（教材マスタ／ユーザー学習データ）、技術構成、Phase 0〜6の開発ロードマップまでを設計文書として整理済みで、実装コードはこれからのフェーズです。",
    techStack: ["React", "TypeScript", "Vite"],
    features: [
      "対応試験範囲・レベル体系の企画（製品企画書）",
      "全機能一覧・画面一覧・画面遷移の設計",
      "教材マスタ／ユーザー学習データのDB設計",
      "Phase 0〜6の開発ロードマップ策定",
    ],
    intent:
      "基本情報技術者試験のプログラミング分野対策アプリ「ProgrammingTrainer」と同じスタック・開発フロー（Phase制開発、AGENTS.md駆動のコーディングエージェント運用）を踏襲し、資格対策アプリ群として一貫性を持たせるために企画しています。",
    roadmap: ["Phase 0基盤の実装", "教材データ投入", "演習・模試機能の実装", "学習履歴・分析機能の実装"],
    githubUrl: "https://github.com/ShijimiWORKs-sudo/shijimiworks-APTrainer",
    image: "/images/shijimi/products/01_shijimi-product-mobile-app.png",
    tags: ["EdTech", "資格対策", "Planning"],
  },
  {
    id: "fe-trainer",
    title: "FE Trainer（基本情報技術者 Trainer）",
    category: "App / EdTech / 資格学習支援",
    status: "開発中 / 主要機能実装済み（PWA対応）",
    description: "iPhone中心のレスポンシブWeb（PWA）で動作する、基本情報技術者試験（FE）対策アプリです。",
    audience: "基本情報技術者試験の受験を目指す学習者、特にiPhoneで学習したい人。",
    benefits: ["科目A/B演習と模擬試験の一体的な管理", "苦手問題の自動集計と復習", "アルゴリズムの動きを1行ずつ可視化"],
    currentState:
      "主要機能を実装済みです。ホーム（学習状況ダッシュボード）、今日の10問（苦手優先の重み付け出題）、科目A演習（テクノロジ／マネジメント／ストラテジ）、科目B演習（擬似言語／アルゴリズム／データ構造／セキュリティ）、模擬試験（科目A: 90分60問／科目B: 100分20問、タイマー・採点つき）、苦手問題、復習（簡易間隔反復）、成績（カテゴリ別正答率・履歴・模試スコア推移）まで確認できます。データはすべて端末のlocalStorageに保存し、サーバは不要です。",
    techStack: ["React 19", "TypeScript", "Vite", "react-router-dom", "vite-plugin-pwa", "Vitest", "Playwright", "oxlint"],
    features: [
      "科目Bの擬似言語・アルゴリズムを1行ずつステップ実行して変数の状態変化を可視化するトレースビジュアライザ",
      "苦手優先の重み付け出題（今日の10問）",
      "模擬試験（タイマー・採点つき）と成績のカテゴリ別正答率・履歴管理",
      "PWA対応（iPhoneのホーム画面に追加してオフライン起動可能）",
      "Vitest（擬似言語インタプリタ・問題データの整合性検証）とPlaywright（iPhoneビューポートのE2Eテスト）によるテスト整備",
    ],
    intent:
      "科目Bのアルゴリズム問題を「読んで理解する」だけでなく「動かして確認する」体験に変えることを目的に開発しています。ShijimiWORKsが運用する姉妹プロジェクト「ProgrammingTrainer」とは別プロダクトとして、FE試験に特化した設計にしています。",
    roadmap: ["Netlify / Vercelへの本番デプロイ", "問題データの拡充", "学習履歴のクラウド同期"],
    githubUrl: "https://github.com/ShijimiWORKs-sudo/shijimiworks-FETrainaer",
    image: "/images/shijimi/products/01_shijimi-product-mobile-app.png",
    tags: ["EdTech", "PWA", "資格対策", "React"],
  },
  {
    id: "programming-trainer",
    title: "ProgrammingTrainer",
    category: "App / EdTech / プログラミング学習",
    status: "開発中（Phase 0: 基盤のみ）",
    description: "Monaco EditorとPyodideを組み込んだ、PC Web向けのハンズオン・プログラミング学習アプリです。",
    audience: "手を動かしながらプログラミングや基本情報のプログラミング分野を学びたい学習者。",
    benefits: ["ブラウザ内でのコード実行", "コードエディタでの実践的な学習", "基本情報プログラミング分野への対応（予定）"],
    currentState:
      "Phase 0（基盤構築のみ）の段階です。React、TypeScript、Vite、ルーティング、ドメイン層、リポジトリ層、runner層、テスト、CI基盤までを実装済みですが、コードの実行・採点、IndexedDBへの永続化、カリキュラム本編は意図的に後続フェーズへ据え置いています。",
    techStack: ["React 19", "TypeScript", "Vite", "@monaco-editor/react", "Pyodide", "idb（IndexedDB）", "Vitest", "Playwright", "ESLint"],
    features: [
      "Monaco Editorによるコード編集基盤",
      "Pyodideによるブラウザ内Python実行基盤",
      "ドメイン層・リポジトリ層・runner層のアーキテクチャ設計",
      "GitHub ActionsによるCI（テスト・ビルド自動化）基盤",
    ],
    intent:
      "基本情報技術者試験のプログラミング分野対策を、サーバ不要でブラウザだけで完結させることを目指しています。AP Trainerと同じPhase制開発・AGENTS.md駆動のワークフローで、基盤から着実に積み上げる方針です。",
    roadmap: ["コード実行・採点機能の実装", "IndexedDBによる進捗永続化", "カリキュラム本編の実装"],
    githubUrl: "https://github.com/ShijimiWORKs-sudo/shijimiworks-programmingtrainer",
    image: "/images/shijimi/products/01_shijimi-product-mobile-app.png",
    tags: ["EdTech", "Programming", "Monaco Editor", "Pyodide"],
  },
  {
    id: "ai-data-analyst",
    title: "AI Data Analyst",
    category: "App / Data Analytics / AI",
    status: "Streamlit Cloudで公開中",
    description:
      "任意のCSVをアップロードするだけで列の型を自動推定し、基本統計・欠損状況・相関分析・トレンド予測・異常値検知までを自動で行う、汎用データ分析Webアプリです。",
    audience: "データ分析力を確認したい採用担当者・企業、自分の手元データをすぐに分析したい個人・チーム。",
    benefits: ["列の型を自動推定してすぐ分析開始", "相関・トレンド・異常値の自動検出", "Markdownレポートのダウンロード"],
    currentState:
      "Streamlit Community Cloudで公開中の完成版です。サンプルデータまたは任意のCSVをアップロードして、データ概要・相関分析・トレンド予測（80%予測区間・R²付き）・自動分析（欠損データ・偏ったカテゴリ・強い相関・複数列異常値の検出）まで、ブラウザ上でそのまま動作を確認できます。",
    techStack: ["Python", "pandas", "NumPy", "scikit-learn", "Streamlit", "Plotly"],
    features: [
      "列型（数値/カテゴリ/日時/ID・テキスト）の自動推定と手動修正",
      "欠損率・基本統計・カテゴリ構成比のプロファイリング",
      "数値列同士の相関分析（ヒートマップ・散布図）",
      "季節性を考慮した線形回帰による翌30日間のトレンド予測",
      "欠損データ・偏ったカテゴリ・強い相関・異常値の自動検出とMarkdownレポート出力",
    ],
    intent:
      "売上分析・顧客RFM分析・ホテル運営分析・ダーツ統計分析という4本の業種特化アプリで培った「Shijimi AI Data Engine」（統計・機械学習の判断は自作し、LLMは説明文生成のみに使う設計）を、どんな表形式データにも適用できる形に一般化した、5本構成のデータ分析ポートフォリオの集大成アプリです。",
    roadmap: ["UI改善", "対応ファイル形式の拡張", "より高度な自動分析ロジックの追加"],
    githubUrl: "https://github.com/ShijimiWORKs-sudo/shijimiworks-DataAnalyticsProgrammig005",
    demoUrl: "https://shijimiworks-ai-data-analytics.streamlit.app/",
    image: "/images/shijimi/products/01_shijimi-product-mobile-app.png",
    tags: ["Data Analytics", "Python", "Streamlit", "AI"],
  },
  {
    id: "darts-training-support",
    title: "Darts Training Support",
    category: "App / Sports Tech / Darts Rating",
    status: "Streamlit Cloudで公開中",
    description:
      "DARTSLIVEでのレーティング向上を目的とした、個人用ダーツ練習管理Webアプリです。今日の練習ミッションから、練習メニューの自動生成、10種の練習ゲーム・NUMBER PRACTICE・LIVE MATCHの記録、DARTSLIVE公式値の前回比較、履歴・グラフ、弱点分析までを一元管理します。",
    audience: "DARTSLIVEのRating向上を目指す個人ダーツプレイヤー。",
    benefits: ["今日の練習ミッションの自動選定", "Flight・疲労度に応じた練習メニューの自動生成", "アプリ独自の弱点分析に基づく次の練習提案"],
    currentState:
      "PC Web・iPhone対応の完成版としてStreamlit Community Cloudで公開中です。ダッシュボード、ミッション管理、練習メニュー自動生成、10種の練習ゲーム＋1501 NUMBER PRACTICE＋LIVE MATCHの記録、DARTSLIVE値の前回比較、履歴・グラフ（7/30/90日・全期間）、弱点分析、JSONバックアップまで確認できます。",
    techStack: ["Vite", "React 19", "TypeScript", "Zustand", "Recharts", "Tailwind CSS", "Vitest", "Streamlit（デプロイ用ラッパー）"],
    features: [
      "初期ミッション＋カスタムミッションの選定（ランダム/未達成優先/最近出ていない優先）と達成記録",
      "30/60/90/120分・体調に応じたFlight別練習メニューの自動生成",
      "COUNT-UP・CRICKET COUNT-UP・EAGLE'S EYE・SHOOT OUT・HALF-IT・FINISH TRAINER・BIG BULL・01・STANDARD CRICKET・HIDDEN CRICKETの10種記録",
      "1501 NUMBER PRACTICEと、01=701/STANDARD CRICKET固定ルールのLIVE MATCH記録",
      "DARTSLIVE公式値の前回比較（↑/↓/→自動計算）と、NUMBER PRACTICE等から抽出する命中率ベースの弱点分析",
      "全データのJSONエクスポート・インポート（外部API・サーバー不要、localStorage保存）",
    ],
    intent:
      "DARTSLIVE公式のRATING/01/CRICKET/COUNT-UPは常にユーザーがDARTSLIVE本体で確認した値をそのまま入力し、アプリが独自に計算・上書きしないという原則を最優先にしています。アプリが出す「弱点」「おすすめ練習」「傾向」は明確にアプリ独自の分析として扱い、公式のランク判定と混同しないようにUI上でも区別しています。ダーツを投げながら操作する前提で、大型ボタン・+/-ステッパーを多用し入力負荷を最小化しています。",
    roadmap: ["DARTSLIVEデータ入力の簡略化 / CSV import", "AIによる練習分析・翌日メニュー生成", "投球動画・フォーム分析・ダーツ着地点記録", "月間目標設定・Rating傾向の可視化強化"],
    githubUrl: "https://github.com/ShijimiWORKs-sudo/shijimiworks-DartsTrainingSupport",
    demoUrl: "https://shijimiworks-darts-training-support.streamlit.app/",
    image: "/images/shijimi/products/01_shijimi-product-mobile-app.png",
    tags: ["Darts", "Rating", "Streamlit"],
  },
];
