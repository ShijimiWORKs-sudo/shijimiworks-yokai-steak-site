import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = { title: "AI文書・マガジン制作 | ShijimiWORKs", description: "note、Substack、有料マガジン、AI文書制作の支援領域。" };

export default function WritingAiMediaPage() {
  return <main className="shijimi-products-page"><section className="shijimi-products-hero"><p>WRITING / AI MEDIA</p><h1>AI文書・マガジン制作</h1><span>note、Substack、有料マガジン、プロンプト集、事例レポートを、読める形・届けられる形へ編集します。</span></section><section className="shijimi-single-product"><h2>言葉を整え、発信を続ける。</h2><p>会話やメモから中心テーマを抽出し、単発記事ではなく連続して読める構成へ編集します。</p><div className="shijimi-product-tags"><span>note</span><span>Substack</span><span>Writing</span><span>AI</span></div><Link href="/works/ai-paid-magazine">関連Worksを見る<ArrowUpRight aria-hidden="true" /></Link></section></main>;
}
