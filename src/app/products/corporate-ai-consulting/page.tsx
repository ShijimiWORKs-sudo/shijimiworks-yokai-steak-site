import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = { title: "Corporate AI / LLM活用支援 | ShijimiWORKs", description: "企業向けAI・LLM活用、業務整理、DX支援領域。" };

export default function CorporateAiConsultingPage() {
  return <main className="shijimi-products-page"><section className="shijimi-products-hero"><p>CORPORATE AI / LLM</p><h1>Corporate AI / LLM活用支援</h1><span>AIを業務へ取り込み、RPA、DX、経理自動化、資料作成、社内ナレッジ活用、運用保守へつなげるための支援領域です。</span></section><section className="shijimi-single-product"><h2>AIを、現場で使える形へ。</h2><p>ツール紹介で終わらせず、業務フロー、運用ルール、プロンプト設計、社内展開の単位へ分解します。</p><div className="shijimi-product-tags"><span>LLM</span><span>DX</span><span>RPA</span><span>Consulting</span></div><Link href="/contact">AI導入を相談する<ArrowUpRight aria-hidden="true" /></Link></section></main>;
}
