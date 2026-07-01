import type { Brand } from "@/types/site";

export const brandLabel = (brand: Brand) => ({
  shijimiworks: "ShijimiWORKs",
  "youkai-steak": "妖怪ステーキ",
  both: "Both",
})[brand];

export const formatDate = (date: string) => new Intl.DateTimeFormat("ja-JP", {
  year: "numeric", month: "long", day: "numeric",
}).format(new Date(`${date}T00:00:00+09:00`));
