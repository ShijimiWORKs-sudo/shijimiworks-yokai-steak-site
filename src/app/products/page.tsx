import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { shijimiProducts } from "@/data/shijimiProducts";

export const metadata: Metadata = {
  title: "Products | ShijimiWORKs",
  description: "ShijimiWORKsのアプリ、Web制作、ポートフォリオ、自動化、AI活用支援のプロダクト一覧。",
};

function isExternal(href: string) {
  return href.startsWith("http");
}

export default function ProductsPage() {
  return (
    <main className="shijimi-products-page">
      <section className="shijimi-products-hero">
        <p>PRODUCTS</p>
        <h1>作っているものを、事業の入口へ。</h1>
        <span>AI、Web、アプリ、自動化、文章制作。ShijimiWORKsが制作・設計しているプロダクトと導線をまとめています。</span>
      </section>
      <section className="shijimi-products-grid" aria-label="ShijimiWORKs Products">
        {shijimiProducts.map((product) => (
          <article key={product.id} className="shijimi-product-link-card">
            <small>{product.category}</small>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <div className="shijimi-product-tags">{product.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <div className="shijimi-product-actions">
              <Link href={product.href}>{product.ctaLabel}<ArrowUpRight aria-hidden="true" /></Link>
              {product.githubUrl && <Link href={product.githubUrl} target={isExternal(product.githubUrl) ? "_blank" : undefined} rel="noopener noreferrer">GitHub<ArrowUpRight aria-hidden="true" /></Link>}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
