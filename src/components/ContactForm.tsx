export function ContactForm() {
  const field = "mt-2 w-full rounded-2xl border border-black/15 bg-white px-4 py-3 outline-none transition focus:border-sky-600 focus:ring-4 focus:ring-sky-100";
  return (
    <form className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:p-8" aria-describedby="contact-form-status">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="text-sm font-semibold">
          名前
          <input required name="name" className={field} />
        </label>
        <label className="text-sm font-semibold">
          メールアドレス
          <input required type="email" name="email" className={field} />
        </label>
      </div>
      <label className="mt-6 block text-sm font-semibold">
        相談内容の種類
        <select name="subject" className={field}>
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
        <textarea required name="message" rows={7} className={field} />
      </label>
      <button type="button" disabled aria-disabled="true" className="mt-6 min-h-12 cursor-not-allowed rounded-full border border-slate-300 bg-slate-100 px-7 font-bold text-slate-500">
        送信機能は準備中
      </button>
      <p id="contact-form-status" role="note" className="mt-4 text-sm leading-7 text-slate-500">
        入力内容は送信されません。正式なご連絡には、ページ下部の外部窓口またはメールをご利用ください。
      </p>
    </form>
  );
}
