# 妖怪ステーキ content 更新ワークフロー

このドキュメントは、妖怪ステーキページの「最新の更新」を `content/youkai/updates/updates.json` から反映するための初期運用メモです。

## 仕組み

- 更新データは `content/youkai/updates/updates.json` にJSON配列として記録します。
- `/youkai-steak` ページはビルド時に `src/lib/youkaiUpdates.ts` 経由でこのJSONを読み込みます。
- 読み込んだデータは `src/components/YoukaiUpdatesCarousel.tsx` に渡され、「最新の更新」カルーセルとして表示されます。
- `date` の新しい順に並びます。
- JSONが存在しない、壊れている、または有効なデータがない場合は、コード内のfallbackデータを表示します。

## updates.json の書き方

1件の更新は以下の形式です。

```json
{
  "id": "youkai-update-note-001",
  "type": "note",
  "category": "NOTE",
  "title": "映画から人生を読み直す",
  "description": "映画の感想を、自分の生活に持ち帰るための記録。",
  "date": "2026-06-29",
  "image": "/images/youkai/youkai-note.png",
  "href": "https://note.com/youkai_steak",
  "source": "manual"
}
```

### 主な項目

| key | 内容 |
| --- | --- |
| `id` | 一意のID。重複しない英数字・ハイフン推奨。 |
| `type` | `novel` / `movie` / `podcast` / `youtube` / `rakugo` / `note` など。 |
| `category` | 画面に表示するカテゴリ名。例: `NOVEL`, `PODCAST`。 |
| `title` | 更新タイトル。 |
| `description` | 短い説明文。 |
| `date` | `YYYY-MM-DD` 形式の日付。新しい順に表示されます。 |
| `image` | 表示画像のパス。`public` 配下を `/images/...` のように指定。 |
| `href` | クリック先。内部パスまたは外部URL。 |
| `audioPath` | Podcast音源をローカル保存する場合の任意項目。未使用時は空文字または省略。 |
| `source` | `manual` / `note` / `spotify` など、将来の連携元メモ。 |

## note記事を追加する手順

1. `content/youkai/updates/updates.json` を開く。
2. JSON配列の先頭または任意の位置に1件追加する。
3. `type` は `note`、`category` は `NOTE` または記事内容に応じて `MOVIE` / `RAKUGO` などにする。
4. `href` には妖怪ステーキnoteの記事URL、または一覧URLを設定する。
5. `date` を公開日にする。
6. 保存後、`npm.cmd run typecheck` と `npm.cmd run build` で確認する。

## Podcastを追加する手順

1. `type` を `podcast`、`category` を `PODCAST` にする。
2. `href` にSpotifyなどのエピソードURLまたは番組URLを設定する。
3. ローカル音源を使う場合は、音源を `public/media/youkai/podcast/` に置く。
4. `audioPath` に `/media/youkai/podcast/example.mp3` のように指定する。
5. まだローカル再生UIは実装していないため、現時点では `href` で外部Podcastへ誘導します。

## public/media/youkai/podcast/ の使い方

- Podcast音源や短い試聴ファイルを置く予定の場所です。
- ファイル名は半角英数字・ハイフン推奨です。
- 例: `youkai-podcast-episode-001.mp3`
- 大きすぎる音源ファイルはリポジトリ肥大化の原因になるため、必要に応じて外部配信サービスを優先してください。

## audioPath の指定方法

```json
{
  "audioPath": "/media/youkai/podcast/youkai-podcast-episode-001.mp3"
}
```

- `public` フォルダから見たURLパスで指定します。
- 現時点では表示用の任意情報です。
- 将来的にページ内プレイヤーを実装する場合、この値を利用できます。

## 反映タイミング

- `updates.json` の変更は、Next.jsのビルド時に読み込まれます。
- Vercel本番へ反映するには、GitHubへpushし、Vercelの再デプロイが必要です。
- ローカル確認時は `npm.cmd run build` または開発サーバーで確認してください。

## 将来の拡張予定

この構造は、将来的に以下へ拡張できます。

- note API またはRSSから記事情報を取得
- Spotify APIからPodcastエピソードを取得
- YouTube APIから動画情報を取得
- Markdown / MDX ベースの記事管理
- 管理画面から `updates.json` を生成

## 注意事項

- JSONの末尾カンマは使わないでください。
- `id` は重複させないでください。
- 画像パスが存在しないと表示崩れの原因になります。
- 外部URLを変更する場合は、`src/data/links.ts` の運用方針も確認してください。
- 今回はAPI連携や自動取得は行っていません。手動更新用の初期構造です。
