# ShijimiWORKs / 妖怪ステーキ HP デプロイ手順

## 1. 前提

- Node.js 24.18.0で確認
- Next.js 16.2.9
- npmを使用
- 現在は環境変数なしでビルド可能

## 2. ローカル起動

```powershell
cd C:\制作データ\08_HP
npm.cmd install
npm.cmd run dev
```

`http://localhost:3000`で主要ルートを確認します。

## 3. 検証

```powershell
npm.cmd run typecheck
npm.cmd run build
```

ビルドが成功し、静的生成が31ページのままであることを確認します。続けて`/admin`の公開前チェックリスト、未設定リンク、デプロイ準備情報を確認してください。

## 4. GitHubへpush

GitHubで空のリポジトリを作成し、次を実行します。

```powershell
cd C:\制作データ\08_HP
git init
git add .
git commit -m "Initial commit: ShijimiWORKs and Youkai Steak website"
git branch -M main
git remote add origin <GitHubリポジトリURL>
git push -u origin main
```

- `<GitHubリポジトリURL>`は作成したGitHubリポジトリURLへ差し替えます。
- 既存remoteは`git remote -v`で確認し、重複して追加しません。
- `.env.local`、APIキー、トークンは絶対にコミットしません。
- `node_modules`、`.next`、`.vercel`はコミットしません。
- `package-lock.json`はコミットします。

## 5. Vercel Import手順

1. GitHubへ最新状態をpushする
2. Vercelへログインする
3. ダッシュボードで「Add New Project」を選択する
4. GitHubの対象リポジトリをImportする
5. Framework Presetが`Next.js`であることを確認する
6. Install Commandを`npm install`にする
7. Build Commandを`npm run build`にする
8. Output Directoryは空欄のまま、Next.js標準設定を使用する
9. Environment Variablesは現時点では追加しない
10. 「Deploy」を実行する
11. 発行されたURLで主要ルートと表示を確認する

Node.js Versionは24系を選択し、ローカル確認環境との差異を確認します。

## 6. Vercel試験デプロイ前チェック

- `npm.cmd run typecheck`が成功する
- `npm.cmd run build`が成功し、31ページ生成される
- `git status --short --ignored`で秘密情報・生成物が除外されている
- `.env.local`やAPIキーがGit管理対象にない
- `package-lock.json`がGit管理対象に含まれる
- `/admin`の公開前チェックリストと未設定リンクを確認する
- GitHubのdefault branchが`main`になっている
- VercelのOutput Directoryを独自指定していない

## 7. 公開前に確認するもの

### 外部リンク

本番URLは`src/data/links.ts`へ設定済みです。用途、現在値、反映先は`docs/links.md`を参照し、各公式アカウントへ正しく遷移することを確認します。共通note・共通Substack・共通Xは使用しません。

### 画像・機能

- OGP画像（共通・ブランド別とも配置・metadata反映済み）
- ロゴ画像
- Contact実送信先

画像ファイル名と配置先は`public/images/README.md`を参照してください。未配置のロゴ画像は、実ファイルを確認するまで参照しません。

### v1.0公開記録

- 設定済み実リンクのリンク先確認：完了
- 共通・ブランド別OGP画像とmetadata設定：完了
- GitHub連携・Vercel本番公開：完了
- PC・スマホ表示確認：完了

### v1.1以降の残作業

- ShijimiWORKs・妖怪ステーキの正式ロゴ画像追加
- Contact実送信処理とスパム対策の実装
- Vercelでの独自ドメイン設定とHTTPS確認
- 必要な場合のみAnalytics設定

Notion CMS本実装、自動投稿連携、Admin認証はv1.0公開前仕上げとは分離し、今回の公開条件には含めません。

## 8. 環境変数

現時点では不要です。将来的には次を想定しています。

- `NOTION_API_KEY`
- `NOTION_WORKS_DATABASE_ID`
- `NOTION_ARTICLES_DATABASE_ID`
- `CONTACT_API_ENDPOINT`
- `SNS_AUTOMATION_API_KEY`

Vercelへ設定する場合はProject SettingsのEnvironment Variablesを使用し、秘密情報を`.env`やGitへコミットしないでください。

## 9. 試験デプロイ後の確認

- `/`から主要ルートへ移動できる
- PCと360px幅で横スクロールがない
- Header / Footerが表示される
- 動的なWorks・Articles詳細ページが表示される
- 未設定外部リンクが「準備中」表示になる
- Contactフォームが実送信しない旨を表示する
- ページtitle・descriptionが出力される
- Vercelのビルドログにエラーがない
