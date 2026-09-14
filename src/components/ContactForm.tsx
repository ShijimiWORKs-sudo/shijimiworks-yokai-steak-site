"use client";

import { useState, useTransition, type FormEvent } from "react";
import { sendContactMessage } from "@/lib/contact";

type Status = { type: "idle" | "success" | "error"; message?: string };

export function ContactForm() {
  const field = "mt-2 w-full rounded-2xl border border-black/15 bg-white px-4 py-3 outline-none transition focus:border-sky-600 focus:ring-4 focus:ring-sky-100";
  const [status, setStatus] = useState<Status>({ type: "idle" });
  const [isPending, startTransition] = useTransition();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    // ハニーポット: 人には見えないフィールド。ボットが埋めていたら黙って無視する。
    if (formData.get("company")) {
      return;
    }

    const input = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      subject: String(formData.get("subject") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    startTransition(async () => {
      const result = await sendContactMessage(input);
      setStatus({ type: result.ok ? "success" : "error", message: result.message });
      if (result.ok) {
        form.reset();
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:p-8" aria-describedby="contact-form-status">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="text-sm font-semibold">
          名前
          <input required name="name" className={field} disabled={isPending} />
        </label>
        <label className="text-sm font-semibold">
          メールアドレス
          <input required type="email" name="email" className={field} disabled={isPending} />
        </label>
      </div>
      <label className="mt-6 block text-sm font-semibold">
        相談内容の種類
        <select name="subject" className={field} disabled={isPending}>
          <option>AI活用相談</option>
          <option>ホームページ制作相談</option>
          <option>note / Substack運用相談</option>
          <option>自動化フロー相談</option>
          <option>文章制作・プロンプト設計</option>
          <option>創作・Podcast・動画に関する連絡</option>
          <option>その他</option>
        </select>
      </label>
      <label className="mt-6 block text-sm font-semibold">
        本文
        <textarea required name="message" rows={7} className={field} disabled={isPending} />
      </label>
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute h-0 w-0 opacity-0"
      />
      <button
        type="submit"
        disabled={isPending}
        className="mt-6 min-h-12 rounded-full bg-sky-600 px-7 font-bold text-white transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:bg-slate-300"
      >
        {isPending ? "送信中..." : "送信する"}
      </button>
      <p
        id="contact-form-status"
        role="status"
        aria-live="polite"
        className={`mt-4 text-sm leading-7 ${status.type === "error" ? "text-red-600" : status.type === "success" ? "text-emerald-600" : "text-slate-500"}`}
      >
        {status.message ?? "送信いただいた内容を確認のうえ、ご連絡いたします。"}
      </p>
    </form>
  );
}
