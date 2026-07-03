import type { Metadata } from "next";
import { ShijimiStudioPage } from "@/components/ShijimiStudioPage";

export const metadata: Metadata = {
  title: "ShijimiWORKs",
  description: "生成AIを活用して、Web制作、記事制作、アプリ開発、自動化、メディア運用を形にする個人制作スタジオ。",
  openGraph: {
    title: "ShijimiWORKs",
    description: "生成AIを活用して、Web制作、記事制作、アプリ開発、自動化、メディア運用を形にする個人制作スタジオ。",
    images: [{ url: "/images/ogp/shijimiworks-ogp.png", alt: "ShijimiWORKs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ShijimiWORKs",
    description: "生成AIを活用して、Web制作、記事制作、アプリ開発、自動化、メディア運用を形にする個人制作スタジオ。",
    images: ["/images/ogp/shijimiworks-ogp.png"],
  },
};

export default function ShijimiWorksPage() {
  return <ShijimiStudioPage />;
}
