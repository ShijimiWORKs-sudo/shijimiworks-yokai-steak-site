import { readFile } from "node:fs/promises";
import path from "node:path";

export type YoukaiUpdate = {
  id: string;
  type: string;
  category: string;
  title: string;
  description: string;
  date: string;
  image: string;
  href: string;
  audioPath?: string;
  source?: string;
};

const fallbackUpdates: YoukaiUpdate[] = [
  {
    id: "fallback-youkai-update-novel-001",
    type: "novel",
    category: "NOVEL",
    title: "月と影の記憶 第8話 更新",
    description: "失われた記憶と、夜に残る影を追う物語。",
    date: "2026-07-04",
    image: "/images/youkai/youkai-novel.png",
    href: "/youkai-steak",
    source: "fallback",
  },
  {
    id: "fallback-youkai-update-podcast-001",
    type: "podcast",
    category: "PODCAST",
    title: "声で語る物語 #12 公開",
    description: "映画と日常のあいだに残る、静かな夜のトーク。",
    date: "2026-07-03",
    image: "/images/youkai/youkai-podcast.png",
    href: "https://open.spotify.com/show/0MJ8LBPvXLAHIxRLwWDiIm",
    audioPath: "",
    source: "fallback",
  },
  {
    id: "fallback-youkai-update-movie-001",
    type: "movie",
    category: "MOVIE",
    title: "PERFECT DAYS 考察",
    description: "静かな日常の中にある、選択と再生の物語。",
    date: "2026-07-02",
    image: "/images/youkai/youkai-cinema.png",
    href: "https://note.com/youkai_steak",
    source: "fallback",
  },
  {
    id: "fallback-youkai-update-youtube-001",
    type: "youtube",
    category: "YOUTUBE",
    title: "短編「雨の記憶」公開",
    description: "小さな雨音とともに読む、夜の短編朗読。",
    date: "2026-07-01",
    image: "/images/youkai/youkai-youtube-reading.pn.png",
    href: "https://www.youtube.com/channel/UCY96M9pdESQsNqGGcUlK4qA",
    source: "fallback",
  },
  {
    id: "fallback-youkai-update-rakugo-001",
    type: "rakugo",
    category: "RAKUGO",
    title: "「芝浜」を観て",
    description: "人情噺の奥にある、弱さと優しさについて。",
    date: "2026-06-30",
    image: "/images/youkai/youkai-rakugo.png",
    href: "https://note.com/youkai_steak",
    source: "fallback",
  },
  {
    id: "fallback-youkai-update-note-001",
    type: "note",
    category: "NOTE",
    title: "映画から人生を読み直す",
    description: "映画の感想を、自分の生活に持ち帰るための記録。",
    date: "2026-06-29",
    image: "/images/youkai/youkai-note.png",
    href: "https://note.com/youkai_steak",
    source: "fallback",
  },
];

function isYoukaiUpdate(value: unknown): value is YoukaiUpdate {
  if (!value || typeof value !== "object") return false;
  const item = value as Record<string, unknown>;
  return (
    typeof item.id === "string" &&
    typeof item.type === "string" &&
    typeof item.category === "string" &&
    typeof item.title === "string" &&
    typeof item.description === "string" &&
    typeof item.date === "string" &&
    typeof item.image === "string" &&
    typeof item.href === "string"
  );
}

function sortByDateDesc(updates: YoukaiUpdate[]) {
  return [...updates].sort((a, b) => b.date.localeCompare(a.date));
}

export async function getYoukaiUpdates(): Promise<YoukaiUpdate[]> {
  const filePath = path.join(process.cwd(), "content", "youkai", "updates", "updates.json");

  try {
    const raw = await readFile(filePath, "utf8");
    const parsed: unknown = JSON.parse(raw);

    if (!Array.isArray(parsed)) return sortByDateDesc(fallbackUpdates);

    const updates = parsed.filter(isYoukaiUpdate);
    if (updates.length === 0) return sortByDateDesc(fallbackUpdates);

    return sortByDateDesc(updates);
  } catch {
    return sortByDateDesc(fallbackUpdates);
  }
}
