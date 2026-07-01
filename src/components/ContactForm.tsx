"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [message, setMessage] = useState("");
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(event.currentTarget));
    void values;
    setMessage("現在フォーム送信は準備中です。正式なご連絡は、ココナラ・X・note等の外部リンクからお願いいたします。");
  }
  const field = "mt-2 w-full rounded-2xl border border-black/15 bg-white px-4 py-3 outline-none transition focus:border-sky-600 focus:ring-4 focus:ring-sky-100";
  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:p-8">
      <div className="grid gap-6 sm:grid-cols-2"><label className="text-sm font-semibold">名前<input required name="name" className={field} /></label><label className="text-sm font-semibold">メールアドレス<input required type="email" name="email" className={field} /></label></div>
      <label className="mt-6 block text-sm font-semibold">相談内容の種類<select name="subject" className={field}><option>AI活用相談</option><option>ホームページ制作相談</option><option>note / Substack運用相談</option><option>自動化フロー相談</option><option>文章制作・プロンプト設計</option><option>創作・Podcast・動画に関する連絡</option><option>その他</option></select></label>
      <label className="mt-6 block text-sm font-semibold">本文<textarea required name="message" rows={7} className={field} /></label>
      <button type="submit" className="mt-6 min-h-12 rounded-full bg-sky-700 px-7 font-bold text-white transition hover:bg-sky-800">送信する</button>
      {message && <p role="status" aria-live="polite" className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-7 text-amber-950">{message}</p>}
    </form>
  );
}
