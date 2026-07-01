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

## 公開前に設定する外部リンク

`src/data/links.ts`の次の15項目を本番URLへ差し替え、設定済みの項目を`pendingExternalLinks`から削除してください。

- `note`
- `substack`
- `x`
- `youtube`
- `narou`
- `kakuyomu`
- `coconala`
- `podcast`
- `mail`
- `shijimiworksNote`
- `shijimiworksSubstack`
- `youkaiSteakNote`
- `youkaiSteakNarou`
- `youkaiSteakKakuyomu`
- `youkaiSteakYoutube`

未設定リンクは画面上で「準備中」と表示され、`/admin`でも現在値を確認できます。

## 画像配置

画像の配置予定とファイル名は`public/images/README.md`を参照してください。実ファイルが存在するまでは、metadataやコンポーネントから画像を参照しません。OGP画像の推奨サイズは1200 × 630pxです。

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

## 本公開前に差し替えるもの

- note URL
- Substack URL
- X URL
- YouTube URL
- 小説家になろう URL
- カクヨム URL
- ココナラ URL
- OGP画像
- ロゴ画像
- Contact実送信処理

## 今後の実装予定

- 正式な外部URL、ロゴ、OGP画像の設定
- Contactフォームの実送信とスパム対策
- Notion CMS連携
- SNS投稿・自動化API連携
- Admin認証、編集、保存機能

旧静的サイトのHTML・画像・`build:legacy`スクリプトは移行参照用として残しています。
