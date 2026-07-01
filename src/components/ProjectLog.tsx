const logs = [
  { status: "進行中", title: "ネタ造AI", text: "生成AIを使ったネタ出し・記事化支援アプリの要件定義中。" },
  { status: "制作中", title: "ShijimiWORKs / 妖怪ステーキ 共通ホーム", text: "仕事と創作を横断する共通ポートフォリオサイトを制作中。" },
  { status: "運用中", title: "妖怪ステーキSNS導線", text: "小説・note・Podcast・YouTubeへの投稿導線を整備中。" },
  { status: "改善中", title: "Buffer自動投稿フロー", text: "X投稿、daily_digest、Notion管理との整合性を改善中。" },
] as const;

export function ProjectLog() {
  return (
    <div className="project-log-grid">
      {logs.map((log, index) => (
        <article key={log.title} className="project-log-card">
          <div className="flex items-center justify-between"><span className="rounded-full bg-sky-50 px-3 py-1 text-[.65rem] font-bold text-sky-800">{log.status}</span><span className="text-xs font-bold text-slate-300">0{index + 1}</span></div>
          <h3 className="mt-6 text-lg font-bold text-slate-900">{log.title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">{log.text}</p>
        </article>
      ))}
    </div>
  );
}
