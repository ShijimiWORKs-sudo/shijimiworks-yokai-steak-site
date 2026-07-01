# Image asset plan

実画像が存在するまでは、次のパスをコードから参照しません。ファイルを配置した後に、対応するカード・Hero・`metadata.openGraph.images`へパスを追加します。

```text
public/images/
  common/
    logo-shijimiworks.png
    logo-youkai-steak.png

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

## 用途と反映先

- `common/`: Header、Footer、ブランド紹介のロゴ
- `shijimiworks/`、`youkai-steak/`: 各ブランドHeroと代表コンテンツ
- `works/`: Works一覧・詳細のサムネイル
- `articles/`: Articles一覧・詳細のサムネイル
- `og/`: SNSシェア用画像（推奨 1200 × 630px）

OGP画像を配置したら、共通画像は`src/app/layout.tsx`、ページ別画像は各`page.tsx`の`metadata.openGraph.images`に設定します。ファイル名・大文字小文字を一致させ、`npm.cmd run build`で参照切れがないことを確認してください。
