import type { Metadata } from "next";
import { ContentHero } from "@/components/ContentHero";
import { links, pendingExternalLinks } from "@/data/links";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "公開前チェック、未設定の外部リンク、デプロイ準備を確認するための管理用プレビューページ。",
};

const items = [
  { title: "Works管理予定", text: "制作実績・作品データの追加、更新、公開状態を管理します。" },
  { title: "Articles管理予定", text: "記事本文、タグ、公開日、外部掲載先を管理します。" },
  { title: "Notion連携予定", text: "WorksとArticlesのNotion DBを読み込み、サイトへ同期します。" },
  { title: "自動投稿連携予定", text: "BufferやSNS向けの下書き作成と公開予定を管理します。" },
  { title: "Contact管理予定", text: "問い合わせ内容と対応状況を安全に確認できるようにします。" },
  { title: "外部リンク管理予定", text: "note、YouTube、Xなどの公式URLを一か所で更新します。" },
  { title: "OGP画像管理予定", text: "共通・ブランド・作品・記事ごとのSNS共有画像を管理します。" },
  { title: "公開前チェックリスト予定", text: "公開前に必要な表示・リンク・ビルド確認を一覧化します。" },
] as const;

const checklist = [
  "全ページ表示確認",
  "スマホ表示確認",
  "Header / Footer確認",
  "外部リンク差し替え",
  "noteリンク設定",
  "Substackリンク設定",
  "Xリンク設定",
  "YouTubeリンク設定",
  "小説家になろうリンク設定",
  "カクヨムリンク設定",
  "ココナラリンク設定",
  "Contact導線確認",
  "OGP画像設定",
  "ロゴ画像設定",
  "Worksデータ確認",
  "Articlesデータ確認",
  "typecheck",
  "build",
  "デプロイ先確認",
] as const;

const deploymentNotes = [
  ["Node.js version", "24.18.0で確認"],
  ["Next.js", "16.2.9"],
  ["Pages generated", "31"],
  ["Typecheck", "成功"],
  ["Build", "成功"],
  ["Deploy target", "Vercel推奨"],
  ["Build command", "npm run build"],
  ["Install command", "npm install"],
  ["Environment variables", "現時点では不要"],
  ["Before publish", "外部URL・OGP画像・Contact導線を差し替え"],
] as const;

const releaseStatuses = [
  ["Pages", "Ready", "ready"],
  ["Build", "Ready", "ready"],
  ["Links", "Pending", "pending"],
  ["OGP Images", "Pending", "pending"],
  ["Contact Send", "Pending", "pending"],
  ["Admin Auth", "Pending", "pending"],
  ["Notion CMS", "Future", "future"],
  ["Automation", "Future", "future"],
] as const;

const primaryRoutes = ["/", "/shijimiworks", "/youkai-steak", "/works", "/works/[slug]", "/articles", "/articles/[slug]", "/contact", "/admin"] as const;

export default function AdminPage() {
  return (
    <div className="content-page bg-[#f4f4f1]">
      <ContentHero eyebrow="Internal / Preview" title="Admin Dashboard" copy="公開までに残っていることを、一か所で確認。" description="将来のCMS・外部連携・問い合わせ管理の入口です。現在は公開前確認と機能構成の表示に使用します。" />

      <section className="px-5 pb-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item, index) => (
              <article key={item.title} className="rounded-3xl border border-dashed border-slate-900/20 bg-white p-6">
                <div className="flex items-center justify-between"><span className="text-xs font-bold text-slate-300">0{index + 1}</span><span className="rounded-full bg-amber-100 px-3 py-1 text-[.65rem] font-bold text-amber-900">Coming soon</span></div>
                <h2 className="mt-8 text-lg font-bold text-slate-900">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>

          <section className="mt-10 rounded-3xl border border-slate-900/10 bg-white p-6 sm:p-8" aria-labelledby="release-status">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-sky-700">Release status</p>
            <h2 id="release-status" className="mt-3 text-2xl font-black text-slate-950">公開前ステータス</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {releaseStatuses.map(([label, status, tone]) => <article key={label} className="rounded-2xl border border-slate-900/10 bg-slate-50 p-5"><p className="text-sm font-bold text-slate-900">{label}</p><p className={`mt-3 text-xs font-black uppercase tracking-[.15em] ${tone === "ready" ? "text-emerald-700" : tone === "pending" ? "text-amber-700" : "text-slate-500"}`}>{status}</p></article>)}
            </div>
          </section>

          <section className="mt-12 rounded-3xl bg-slate-950 p-6 text-white sm:p-8" aria-labelledby="prelaunch-checklist">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-sky-300">Before launch</p>
            <h2 id="prelaunch-checklist" className="mt-3 text-2xl font-black">公開前チェックリスト</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {checklist.map((item) => <div key={item} className="flex min-h-12 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"><span aria-hidden="true" className="h-4 w-4 shrink-0 rounded border border-slate-500" />{item}</div>)}
            </div>
          </section>

          <section className="mt-10 rounded-3xl border border-amber-300/50 bg-amber-50 p-6 sm:p-8" aria-labelledby="pending-links">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-amber-800">Action required</p>
            <h2 id="pending-links" className="mt-3 text-2xl font-black text-slate-950">未設定リンク</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">下記はすべて現在値が「#」です。公開前に <code className="rounded bg-white px-1.5 py-0.5">src/data/links.ts</code> で正式URLへ差し替え、設定済み項目を <code className="rounded bg-white px-1.5 py-0.5">pendingExternalLinks</code> から削除してください。</p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-amber-900/10 bg-white">
              <div className="hidden grid-cols-[1fr_1fr_1.5fr_.7fr] gap-4 border-b border-slate-900/10 bg-slate-50 px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-500 sm:grid"><span>Label</span><span>Key</span><span>Purpose</span><span>Current value</span></div>
              {pendingExternalLinks.map((item) => <div key={item.key} className="grid gap-2 border-b border-slate-900/10 px-5 py-4 text-sm last:border-0 sm:grid-cols-[1fr_1fr_1.5fr_.7fr] sm:gap-4"><strong className="text-slate-900">{item.label}</strong><code className="break-all text-sky-800">{item.key}</code><span className="text-slate-600">{item.purpose}</span><code className="font-bold text-amber-800">{links[item.key]}</code></div>)}
            </div>
          </section>

          <section className="mt-10 rounded-3xl border border-slate-900/10 bg-white p-6 sm:p-8" aria-labelledby="deployment-notes">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-sky-700">Deployment</p>
            <h2 id="deployment-notes" className="mt-3 text-2xl font-black text-slate-950">デプロイ準備</h2>
            <dl className="mt-6 divide-y divide-slate-900/10 rounded-2xl border border-slate-900/10">
              {deploymentNotes.map(([term, value]) => <div key={term} className="grid gap-2 px-5 py-4 text-sm sm:grid-cols-[13rem_1fr]"><dt className="font-bold text-slate-900">{term}</dt><dd className="break-words text-slate-600">{value}</dd></div>)}
            </dl>
          </section>

          <section className="mt-10 rounded-3xl border border-slate-900/10 bg-white p-6 sm:p-8" aria-labelledby="primary-routes">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-sky-700">Route check</p>
            <h2 id="primary-routes" className="mt-3 text-2xl font-black text-slate-950">主要ルート確認リスト</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {primaryRoutes.map((route) => <div key={route} className="flex min-h-12 items-center gap-3 rounded-2xl border border-slate-900/10 bg-slate-50 px-4 py-3"><span aria-hidden="true" className="h-4 w-4 shrink-0 rounded border border-slate-400" /><code className="break-all text-sm font-bold text-slate-700">{route}</code></div>)}
            </div>
          </section>

          <div className="mt-10 rounded-3xl border border-amber-300/40 bg-amber-50 p-6 text-sm leading-7 text-amber-950"><strong>ご注意：</strong> 現在この管理画面は表示確認用です。認証・編集・保存・外部API連携は今後実装予定です。</div>
        </div>
      </section>
    </div>
  );
}
