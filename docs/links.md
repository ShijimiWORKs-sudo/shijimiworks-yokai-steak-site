# v1.0 外部リンク設定台帳

外部URLは `src/data/links.ts` で一元管理します。画面で使用するリンクはすべて設定済みです。外部サイトは新しいタブで開き、メールのみ `mailto:` でメール作成画面を開きます。

## 運用方針

- 共通noteは使用せず、ShijimiWORKs用と妖怪ステーキ用を文脈別に使う
- 共通Xは使用せず、ShijimiWORKs用と妖怪ステーキ用を文脈別に使う
- Substackもブランド別に使い、共通Substackは使用しない
- 共通YouTubeが必要な箇所では、妖怪ステーキ用YouTubeと同じ公式チャンネルを使う
- `note`、`substack`、`x` の共通キーは互換性のため残すが、値は `#` のまま画面から参照しない

## 設定済みリンク

| key | 用途 | 現在値 | 主な反映先 | 状態 |
| --- | --- | --- | --- | --- |
| `youtube` | 共通YouTube | `https://www.youtube.com/channel/UCY96M9pdESQsNqGGcUlK4qA` | 妖怪ステーキ系導線 | 設定済み |
| `narou` | 小説家になろう互換キー | `https://mypage.syosetu.com/3062767/` | 妖怪ステーキ | 設定済み |
| `kakuyomu` | カクヨム互換キー | `https://kakuyomu.jp/users/youkai_steak` | 妖怪ステーキ | 設定済み |
| `coconala` | 制作相談窓口 | `https://coconala.com/users/3328262` | 共通ホーム、ShijimiWORKs、Contact、Footer | 設定済み |
| `podcast` | Podcast互換キー | `https://open.spotify.com/show/0MJ8LBPvXLAHIxRLwWDiIm?si=RMXrkgbgToiprOUWKwWskw` | 妖怪ステーキ系導線 | 設定済み |
| `mail` | 問い合わせメール | `mailto:shijimiworks.takaki@gmail.com` | Contact | 設定済み |
| `shijimiworksNote` | ShijimiWORKs note | `https://note.com/shijimi_works` | 共通ホーム、ShijimiWORKs、Articles、Contact、Footer | 設定済み |
| `shijimiworksSubstack` | ShijimiWORKs Substack | `https://substack.com/@shijimiworks` | 共通ホーム、ShijimiWORKs、Articles、Contact、Footer | 設定済み |
| `shijimiworksX` | ShijimiWORKs X | `https://x.com/ShijimiWORKS` | 共通ホーム、ShijimiWORKs、Contact、Footer | 設定済み |
| `youkaiSteakNote` | 妖怪ステーキ note | `https://note.com/youkai_steak` | 共通ホーム、妖怪ステーキ、Articles、Contact、Footer | 設定済み |
| `youkaiSteakSubstack` | 妖怪ステーキ Substack | `https://substack.com/@youkaisteak` | 共通ホーム、妖怪ステーキ、Articles、Contact | 設定済み |
| `youkaiSteakX` | 妖怪ステーキ X | `https://x.com/YOUKAI_STEAK` | 共通ホーム、妖怪ステーキ、Contact、Footer | 設定済み |
| `youkaiSteakNarou` | 妖怪ステーキ 小説家になろう | `https://mypage.syosetu.com/3062767/` | 共通ホーム、妖怪ステーキ、Contact | 設定済み |
| `youkaiSteakKakuyomu` | 妖怪ステーキ カクヨム | `https://kakuyomu.jp/users/youkai_steak` | 共通ホーム、妖怪ステーキ、Contact | 設定済み |
| `youkaiSteakYoutube` | 妖怪ステーキ YouTube | `https://www.youtube.com/channel/UCY96M9pdESQsNqGGcUlK4qA` | 共通ホーム、妖怪ステーキ、Contact、Footer | 設定済み |
| `youkaiSteakPodcast` | 妖怪ステーキ Podcast | `https://open.spotify.com/show/0MJ8LBPvXLAHIxRLwWDiIm?si=RMXrkgbgToiprOUWKwWskw` | 共通ホーム、妖怪ステーキ、Contact、Footer | 設定済み |

## 使用しない共通キー

| key | 現在値 | 状態 | 理由 |
| --- | --- | --- | --- |
| `note` | `#` | 使用しない | ブランド別noteへ分離 |
| `substack` | `#` | 使用しない | ブランド別Substackへ分離 |
| `x` | `#` | 使用しない | ブランド別Xへ分離 |

## 更新時の確認

1. 公式URLの綴りとアカウントを確認する
2. `pendingExternalLinks` には本当に未設定の項目だけを残す
3. ブランド文脈が混ざっていないことを確認する
4. 外部リンクが新しいタブで開き、`rel="noopener noreferrer"` が付くことを確認する
5. メールリンクが `mailto:` で開くことを確認する
6. `npm.cmd run typecheck` と `npm.cmd run build` を実行する
