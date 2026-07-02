import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { ContentHero } from "@/components/ContentHero";
import { ExternalLinks } from "@/components/ExternalLinks";
import { links } from "@/data/links";

export const metadata: Metadata = {
  title: "Contact",
  description: "AI活用、Web制作、記事制作、発信設計、自動化、創作活動への相談・連絡窓口。",
};
const categories = ["AI活用相談", "ホームページ制作相談", "note / Substack運用相談", "自動化フロー相談", "文章制作・プロンプト設計", "創作・Podcast・動画に関する連絡"];
const shijimiContacts = [
  { label: "ココナラで相談する", href: links.coconala },
  { label: "ShijimiWORKs X", href: links.shijimiworksX },
  { label: "ShijimiWORKs note", href: links.shijimiworksNote },
  { label: "ShijimiWORKs Substack", href: links.shijimiworksSubstack },
  { label: "メール", href: links.mail },
] as const;

const youkaiContacts = [
  { label: "妖怪ステーキ X", href: links.youkaiSteakX },
  { label: "妖怪ステーキ note", href: links.youkaiSteakNote },
  { label: "妖怪ステーキ Substack", href: links.youkaiSteakSubstack },
  { label: "YouTube", href: links.youkaiSteakYoutube },
  { label: "Podcast", href: links.youkaiSteakPodcast },
  { label: "小説家になろう", href: links.youkaiSteakNarou },
  { label: "カクヨム", href: links.youkaiSteakKakuyomu },
] as const;

export default function ContactPage() {
  return (
    <div className="content-page contact-page bg-[#f7f5ef]">
      <ContentHero eyebrow="Contact" title="Contact" copy="制作や相談の入口" description="AI活用、Web制作、記事制作、発信設計、自動化、ポートフォリオ制作、創作活動への感想やコラボ相談などを受け付けています。内容が固まっていない段階でも、整理から相談できます。" />
      <section className="px-5 pb-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-sky-700">相談できること</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <article key={category} className={`contact-purpose-card ${index === 5 ? "contact-purpose-story" : "contact-purpose-studio"}`}>
                <span className="text-[.62rem] font-bold tracking-widest text-slate-300">0{index + 1}</span>
                <h2 className="mt-4 font-bold text-slate-900">{category}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-500">内容が固まっていなくても、整理からご相談いただけます。</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div role="note" className="mb-8 rounded-2xl border border-amber-300/60 bg-amber-50 px-5 py-4 text-sm font-semibold leading-7 text-amber-950">
            現在フォーム送信機能は準備中です。入力内容は送信されません。正式なご連絡には、ページ下部のブランド別公式窓口またはメールをご利用ください。
          </div>
          <div className="grid gap-10 lg:grid-cols-[.65fr_1fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-sky-700">Message</p>
              <h2 className="mt-4 text-3xl font-black text-slate-950">相談内容をお聞かせください。</h2>
              <p className="mt-5 leading-8 text-slate-600">このフォームは現在UI確認用です。正式なご相談は、下のココナラ・X・メールなど、各ブランドの公式窓口からお送りください。</p>
              <div className="mt-8 rounded-3xl bg-[#eaf1f3] p-6">
                <p className="font-bold text-slate-900">返信時に分かると助かること</p>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
                  <li>・作りたいもの、相談したいこと</li>
                  <li>・希望時期や現在の状況</li>
                  <li>・参考URLや資料（あれば）</li>
                </ul>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
      <section className="contact-gateway px-5 py-16 text-white sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold">外部リンクから連絡・フォローする</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">目的に合わせて、ShijimiWORKsまたは妖怪ステーキの公式窓口をお選びください。</p>
          <div className="mt-7 grid gap-8 lg:grid-cols-2">
            <div className="contact-door contact-door-studio">
              <h3 className="text-sm font-bold text-sky-300">ShijimiWORKsへの相談</h3>
              <ExternalLinks items={shijimiContacts} tone="dark" className="mt-4" />
            </div>
            <div className="contact-door contact-door-story">
              <h3 className="text-sm font-bold text-amber-300">妖怪ステーキへの連絡</h3>
              <ExternalLinks items={youkaiContacts} tone="dark" className="mt-4" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
