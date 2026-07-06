# 素材利用計画

## このフォルダの目的

`public/images/sozai/` は、ShijimiWORKs / 妖怪ステーキ HPで利用候補となるフリー素材・イラスト素材を、安全に整理するための保管場所です。

このフォルダは「素材集」ではなく、HP制作で使う候補素材の出典・ライセンス・用途を管理するための作業フォルダです。

## 素材を保存するときのルール

1. 公式サイトまたは正規配布ページから取得する。
2. 利用規約URLを必ず確認する。
3. 商用利用・加工可否・クレジット要否を確認する。
4. 出典URLが分からない素材は保存しない。
5. 大量ダウンロードや自動クロールはしない。
6. 保存した素材は `_licenses/materials-index.json` と `_licenses/materials-index.csv` に記録する。
7. 使用候補に絞った素材だけ `_selected/` にコピーする。

## ファイル名ルール

ファイル名は半角英数字・ハイフン・連番で統一します。

例:

- `linustock-ai-chat-001.svg`
- `soco-web-design-001.png`
- `loose-writing-001.svg`
- `undraw-dashboard-001.svg`
- `openpeeps-person-001.png`

日本語、空白、記号の多いファイル名は避けます。

## 出典記録ルール

素材を保存したら、以下を必ず記録します。

- id
- fileName
- localPath
- sourceSite
- sourceUrl
- licenseUrl
- downloadedAt
- category
- intendedUse
- creditRequired
- commercialUse
- modificationAllowed
- notes

## ShijimiWORKsで使う素材の方向性

ShijimiWORKsでは、AI制作スタジオらしい清潔感・信頼感・相談しやすさを優先します。

向いている素材:

- AI
- Web制作
- アプリ
- 自動化
- 相談
- 仕事
- 資料作成
- チーム
- パソコン
- スマホ
- メール
- チャット
- データ
- ダッシュボード
- プレゼン
- 文章制作

使用候補フォルダ:

- `_selected/shijimi-services/`
- `_selected/shijimi-contact/`
- `_selected/shijimi-about/`

## 妖怪ステーキで使う素材の方向性

妖怪ステーキでは、夜、物語、読書、音声、映画、創作室の余韻を壊さない素材を選びます。

向いている素材:

- 本
- 映画
- マイク
- 音声
- Podcast
- YouTube
- 文章
- ノート
- カフェ
- 夜
- 人物シルエット
- 読書
- 物語
- 創作

使用候補フォルダ:

- `_selected/youkai-links/`
- 必要に応じて今後 `_selected/youkai-about/` などを追加

## ココナラ出品画像で使う場合の注意

ココナラ出品画像は商用利用・広告利用に近い扱いになる可能性があります。

使用前に必ず確認すること:

- 商用利用可能か
- 加工可能か
- クレジット表記が必要か
- 出品画像・販売導線での利用が許可されているか
- 素材そのものを商品価値の中心にしていないか

不明な場合は使わず、候補URLだけ記録します。

## 素材サイト別の使い分け予定

- Linustock: シンプルな線画。ShijimiWORKsのサービス説明候補。
- ソコスト: ビジネス・相談・Web制作系の説明素材候補。
- Loose Drawing: 柔らかい相談導線・Contact向け候補。
- ちょうどいいイラスト: 親しみやすい補足イラスト候補。
- Shigureni: 人物・日常感のある素材候補。点数制限に注意。
- IconScout: 無料素材のみ候補。ライセンスと帰属表示を個別確認。
- unDraw: SVG素材候補。ShijimiWORKsの青系へ合わせやすい。
- Magnific Isometric: アイソメトリック素材候補。規約確認までは保存しない。
- Open Peeps: 人物・プロフィール・相談イメージ候補。

## 禁止事項

- サイト全体のクロール
- 自動大量ダウンロード
- 有料素材・会員限定素材の無断取得
- 素材そのものの再配布
- 素材集として販売する行為
- 出典不明素材の保存
- ライセンス未確認素材の `_selected/` 追加
- 既存ページへの無断組み込み

## 今後の作業手順

1. 各サイトの利用規約を公式ページで確認する。
2. 使いたい素材を少数だけ選ぶ。
3. sourceUrl と licenseUrl を記録する。
4. 規約上問題ない素材だけ各サイト別フォルダへ保存する。
5. `materials-index.json` と `materials-index.csv` に追記する。
6. 実際にHPで使う候補だけ `_selected/` へコピーする。
7. ページ実装前に、再度ライセンス条件を確認する。
