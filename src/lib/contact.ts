import type { ContactInput } from "@/types/site";

export async function sendContactMessage(input: ContactInput) {
  // TODO: Contactフォームをメール送信する。
  // TODO: GoogleフォームまたはFormspree等へ接続する。
  // TODO: 入力バリデーションとスパム対策を追加する。
  // TODO: 送信ログと対応状態を安全に保存する。
  console.info("Contact transport is not connected yet", input);
  return { ok: true, message: "送信準備中です。内容を一時的に受け付けました。" };
}
