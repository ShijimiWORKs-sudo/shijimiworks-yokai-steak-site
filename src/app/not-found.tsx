import { Button } from "@/components/Button";

export default function NotFound() {
  return <section className="mx-auto max-w-3xl px-5 py-32 text-center"><p className="text-sm font-bold text-sky-700">404</p><h1 className="mt-4 text-4xl font-black">ページが見つかりません</h1><p className="mt-5 text-neutral-600">URLが変わったか、まだ公開されていない可能性があります。</p><div className="mt-8"><Button href="/">ホームへ戻る</Button></div></section>;
}
