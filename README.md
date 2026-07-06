# ShijimiWORKs / 妖怪ステーキ official site

ShijimiWORKsの制作活動と、妖怪ステーキの創作活動をひとつの入口につなぐ公式ポートフォリオサイトです。Next.js App Routerで構築し、共通ホーム、制作実績、記事、問い合わせ、公開前確認画面を備えています。

## 技術スタック

- Node.js 24.18.0（動作確認環境）
- Next.js 16.2.9 / React 19.2.7
- TypeScript 5.9.3
- Tailwind CSS 4.3.1
- npm

## ローカル起動

```powershell
cd C:\制作データ\08_HP
npm.cmd install
npm.cmd run dev
```

起動後、`http://localhost:3000`を開きます。

## 検証・本番起動

```powershell
npm.cmd run typecheck
npm.cmd run build
npm.cmd run start
```

## 主要ルート

- `/`
- `/shijimiworks`
- `/youkai-steak`
- `/works`
- `/works/[slug]`
- `/articles`
- `/articles/[slug]`
- `/contact`
- `/admin`

## 外部リンク

本番用のブランド別note、Substack、X、YouTube、Podcast、小説投稿先、ココナラ、メールを`src/data/links.ts`へ設定済みです。共通note・共通Substack・共通Xは使用せず、各ブランドの公式リンクを文脈別に表示します。

各リンクの用途、現在値、反映先は`docs/links.md`にまとめています。今後URLが未設定の項目を追加する場合だけ`pendingExternalLinks`へ登録してください。

## 画像配置

画像の配置状況とファイル名は`public/images/README.md`を参照してください。共通・ShijimiWORKs・妖怪ステーキのOGP画像は配置・metadata反映済みです。未配置のロゴ等は、実ファイルが存在するまでコンポーネントから参照しません。

## デプロイ

試験デプロイにはVercelを推奨します。詳しい手順と公開前確認は`docs/deploy.md`にまとめています。

## GitHubへ初回pushする手順

GitHubで空のリポジトリを作成してから、PowerShellで次を実行します。

```powershell
cd C:\制作データ\08_HP
git init
git add .
git commit -m "Initial commit: ShijimiWORKs and Youkai Steak website"
git branch -M main
git remote add origin <GitHubリポジトリURL>
git push -u origin main
```

- `<GitHubリポジトリURL>`は、GitHubで作成したリポジトリURLへ差し替えてください。
- すでにremoteがある場合は、追加前に`git remote -v`で確認してください。
- `.env.local`やAPIキーなどの秘密情報は絶対にコミットしないでください。
- `node_modules`、`.next`、`.vercel`はコミットしません。
- `package-lock.json`はnpmプロジェクトの再現性に必要なためコミットします。

初回コミット前には、`git status --short --ignored`で除外対象とステージ対象を確認してください。

## v1.0公開記録

- ブランド別実リンクの設定と動作確認：完了
- 共通・ShijimiWORKs・妖怪ステーキのOGP画像設定：完了
- GitHub / Vercel本番公開：完了
- PC / スマホ表示と横スクロール確認：完了

## v1.1以降の残作業

- ShijimiWORKs・妖怪ステーキの正式ロゴ画像を追加する
- Contact実送信処理とスパム対策を実装する
- Vercelへ独自ドメインを設定し、HTTPS・リダイレクトを確認する
- 必要な場合のみ、同意・プライバシー方針を確認してAnalyticsを設定する

画像とフォーム送信先が未確定の間は、存在しない画像や送信APIをコードから参照しません。Contactフォームは準備中表示のまま維持します。

## 今後の実装予定

- 正式ロゴ画像の設定
- Contactフォームの実送信とスパム対策
- Notion CMS連携
- SNS投稿・自動化API連携
- Admin認証、編集、保存機能

旧静的サイトのHTML・画像・`build:legacy`スクリプトは移行参照用として残しています。

## 妖怪ステーキ最新更新の手動更新

妖怪ステーキページ `/youkai-steak` の「最新の更新」は、`content/youkai/updates/updates.json` から読み込まれます。

- 更新を追加する場合は `content/youkai/updates/updates.json` に1件追加します。
- `date` は `YYYY-MM-DD` 形式で記入します。
- 新しい日付順にカルーセルへ表示されます。
- 反映にはビルドおよびVercel再デプロイが必要です。
- 詳細は `docs/content-update-workflow.md` を参照してください。
