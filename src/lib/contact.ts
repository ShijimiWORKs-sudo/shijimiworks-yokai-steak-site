"use server";

import { Resend } from "resend";
import type { ContactInput } from "@/types/site";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "shijimiworks.takaki@gmail.com";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "ShijimiWORKs Contact <onboarding@resend.dev>";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContactMessage(input: ContactInput) {
  const name = input.name?.trim() ?? "";
  const email = input.email?.trim() ?? "";
  const subject = input.subject?.trim() ?? "";
  const message = input.message?.trim() ?? "";

  if (!name || !email || !message) {
    return { ok: false, message: "お名前・メールアドレス・本文は必須です。" };
  }
  if (!EMAIL_PATTERN.test(email)) {
    return { ok: false, message: "メールアドレスの形式が正しくありません。" };
  }
  if (message.length > 5000) {
    return { ok: false, message: "本文が長すぎます。5000文字以内でお願いします。" };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set. Contact form cannot send email yet.");
    return {
      ok: false,
      message: "現在フォームからの送信を一時的に受け付けできません。恐れ入りますが、ページ下部のメールまたは各SNSからご連絡ください。",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `[Contact] ${subject || "お問い合わせ"} — ${name}様より`,
      text: `お名前: ${name}\nメールアドレス: ${email}\n相談内容の種類: ${subject || "(未選択)"}\n\n本文:\n${message}`,
    });

    if (error) {
      console.error("[contact] Resend send error:", error);
      return { ok: false, message: "送信に失敗しました。時間をおいて再度お試しいただくか、メールで直接ご連絡ください。" };
    }

    return { ok: true, message: "送信しました。内容を確認のうえ、追ってご連絡いたします。" };
  } catch (err) {
    console.error("[contact] Contact form send failed:", err);
    return { ok: false, message: "送信中にエラーが発生しました。時間をおいて再度お試しください。" };
  }
}
