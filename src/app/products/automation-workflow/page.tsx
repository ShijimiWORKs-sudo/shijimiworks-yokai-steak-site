import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = { title: "自動投稿運用フロー | ShijimiWORKs", description: "Buffer、Notion、X、note、記事生成をつなぐ自動投稿運用フロー。" };

export default function AutomationWorkflowPage() {
  return <main className="shijimi-products-page"><section className="shijimi-products-hero"><p>AUTOMATION / WORKFLOW</p><h1>自動投稿運用フロー</h1><span>Buffer、Notion、X、note、記事生成、daily_digestをつなぎ、投稿や更新を継続しやすくするための運用設計です。</span></section><section className="shijimi-single-product"><h2>続けるための仕組みを作る。</h2><p>投稿予定、下書き、公開結果、振り返りを一つの流れとして扱い、創作や仕事の発信を止めないためのワークフローを設計します。</p><div className="shijimi-product-tags"><span>Buffer</span><span>Notion</span><span>SNS</span><span>Workflow</span></div><Link href="/works/buffer-workflow">関連Worksを見る<ArrowUpRight aria-hidden="true" /></Link></section></main>;
}
