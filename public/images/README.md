# v1.0 画像アセット配置計画

現在、`public/images` 配下に実画像はありません。このREADME以外の画像が配置されるまでは、存在しないパスをコンポーネントやmetadataから参照しません。

## v1.0で最低限必要な画像

| 種別 | 配置予定パス | 推奨仕様 | 主な反映先 | 現在の状態 |
| --- | --- | --- | --- | --- |
| 共通OGP | `public/images/og/common-og.png` | 1200 × 630px / PNG | `src/app/layout.tsx`、共通ホーム | 未配置・未参照 |
| ShijimiWORKs OGP | `public/images/og/shijimiworks-og.png` | 1200 × 630px / PNG | `/shijimiworks` metadata | 未配置・未参照 |
| 妖怪ステーキ OGP | `public/images/og/youkai-steak-og.png` | 1200 × 630px / PNG | `/youkai-steak` metadata | 未配置・未参照 |
| ShijimiWORKsロゴ | `public/images/common/logo-shijimiworks.png` | 透過PNGまたはWebP、横長推奨 | Header、Footer、ブランド紹介 | 未配置・未参照 |
| 妖怪ステーキロゴ | `public/images/common/logo-youkai-steak.png` | 透過PNGまたはWebP、横長推奨 | Header、Footer、ブランド紹介 | 未配置・未参照 |
| 共通ホームHero装飾 | `public/images/common/home-hero-decoration.png` | 透過PNG/WebP、十分な解像度 | 共通ホームHero | 未配置・未参照 |

ロゴは周囲に十分な余白を含め、暗背景・明背景の両方で判読できるか確認します。Hero装飾画像は必須ではなく、現在のCSS表現を維持したまま公開することもできます。

## 将来追加する画像

```text
public/images/
  common/
    logo-shijimiworks.png
    logo-youkai-steak.png
    home-hero-decoration.png

  shijimiworks/
    hero.png
    portfolio-placeholder.png

  youkai-steak/
    hero.png
    novel-placeholder.png
    cinema-placeholder.png
    podcast-placeholder.png

  works/
    netazou-ai.png
    common-home.png
    automation.png

  articles/
    ai-writing.png
    cinema-essay.png

  og/
    common-og.png
    shijimiworks-og.png
    youkai-steak-og.png
    works-og.png
    articles-og.png
```

## 配置後の実装手順

1. ファイル名と大文字・小文字を上表に合わせて配置する
2. 共通OGPを `src/app/layout.tsx` の `metadata.openGraph.images` と `metadata.twitter.images` に設定する
3. ブランド別OGPを各 `page.tsx` のmetadataで上書きする
4. ロゴ・Hero画像は実ファイルの表示確認後にコンポーネントへ追加する
5. SNS共有デバッガーで画像、タイトル、descriptionを確認する
6. `npm.cmd run typecheck` と `npm.cmd run build` を実行し、参照切れがないことを確認する
