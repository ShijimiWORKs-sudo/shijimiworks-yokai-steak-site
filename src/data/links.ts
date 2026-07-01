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
  youtube: "#",
  narou: "#",
  kakuyomu: "#",
  coconala: "#",
  podcast: "#",
  mail: "#",

  shijimiworksNote: "#",
  shijimiworksSubstack: "#",
  youkaiSteakNote: "#",
  youkaiSteakNarou: "#",
  youkaiSteakKakuyomu: "#",
  youkaiSteakYoutube: "#",
} as const;

export type LinkKey = keyof typeof links;
export type LinkHref = (typeof links)[LinkKey];

export type PendingExternalLink = {
  key: LinkKey;
  label: string;
  purpose: string;
};

// TODO: 公開前に差し替える外部リンク
// この一覧は /admin にも表示されます。URLを設定した項目は一覧から削除してください。
export const pendingExternalLinks = [
  { key: "note", label: "note", purpose: "共通noteリンク" },
  { key: "substack", label: "Substack", purpose: "共通ニュースレター導線" },
  { key: "x", label: "X", purpose: "共通SNS・連絡導線" },
  { key: "youtube", label: "YouTube", purpose: "共通動画導線" },
  { key: "narou", label: "小説家になろう", purpose: "共通小説導線" },
  { key: "kakuyomu", label: "カクヨム", purpose: "共通小説導線" },
  { key: "coconala", label: "ココナラ", purpose: "ShijimiWORKs相談導線" },
  { key: "podcast", label: "Podcast", purpose: "妖怪ステーキ音声配信導線" },
  { key: "mail", label: "メール", purpose: "共通メール連絡導線" },
  { key: "shijimiworksNote", label: "ShijimiWORKs note", purpose: "ShijimiWORKs記事導線" },
  { key: "shijimiworksSubstack", label: "ShijimiWORKs Substack", purpose: "ShijimiWORKsニュースレター" },
  { key: "youkaiSteakNote", label: "妖怪ステーキ note", purpose: "妖怪ステーキ記事・エッセイ導線" },
  { key: "youkaiSteakNarou", label: "妖怪ステーキ 小説家になろう", purpose: "妖怪ステーキ小説導線" },
  { key: "youkaiSteakKakuyomu", label: "妖怪ステーキ カクヨム", purpose: "妖怪ステーキ小説導線" },
  { key: "youkaiSteakYoutube", label: "妖怪ステーキ YouTube", purpose: "妖怪ステーキ動画・朗読導線" },
] as const satisfies readonly PendingExternalLink[];
