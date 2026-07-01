export const links = {
  home: "/",
  shijimiworks: "/shijimiworks",
  youkaiSteak: "/youkai-steak",
  works: "/works",
  articles: "/articles",
  contact: "/contact",
  admin: "/admin",

  note: "#",
  substack: "#",
  x: "#",
  youtube: "https://www.youtube.com/channel/UCY96M9pdESQsNqGGcUlK4qA",
  narou: "https://mypage.syosetu.com/3062767/",
  kakuyomu: "https://kakuyomu.jp/users/youkai_steak",
  coconala: "https://coconala.com/users/3328262",
  podcast: "https://open.spotify.com/show/0MJ8LBPvXLAHIxRLwWDiIm?si=RMXrkgbgToiprOUWKwWskw",
  mail: "mailto:shijimiworks.takaki@gmail.com",

  shijimiworksNote: "https://note.com/shijimi_works",
  shijimiworksSubstack: "https://substack.com/@shijimiworks",
  shijimiworksX: "https://x.com/ShijimiWORKS",

  youkaiSteakNote: "https://note.com/youkai_steak",
  youkaiSteakSubstack: "https://substack.com/@youkaisteak",
  youkaiSteakX: "https://x.com/YOUKAI_STEAK",
  youkaiSteakNarou: "https://mypage.syosetu.com/3062767/",
  youkaiSteakKakuyomu: "https://kakuyomu.jp/users/youkai_steak",
  youkaiSteakYoutube: "https://www.youtube.com/channel/UCY96M9pdESQsNqGGcUlK4qA",
  youkaiSteakPodcast: "https://open.spotify.com/show/0MJ8LBPvXLAHIxRLwWDiIm?si=RMXrkgbgToiprOUWKwWskw",
} as const;

export type LinkKey = keyof typeof links;
export type LinkHref = (typeof links)[LinkKey];

export type PendingExternalLink = {
  key: LinkKey;
  label: string;
  purpose: string;
};

// 現在、画面で使用する外部リンクはすべて設定済みです。
export const pendingExternalLinks: readonly PendingExternalLink[] = [];

// ブランドごとの公式リンクを使うため、共通キーは意図的に使用しません。
export const unusedExternalLinks = [
  { key: "note", label: "共通note", reason: "ShijimiWORKs用と妖怪ステーキ用に分けて運用" },
  { key: "substack", label: "共通Substack", reason: "ShijimiWORKs用と妖怪ステーキ用に分けて運用" },
  { key: "x", label: "共通X", reason: "ShijimiWORKs用と妖怪ステーキ用に分けて運用" },
] as const;
