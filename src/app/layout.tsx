import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { site } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    title: site.name,
    description: site.description,
    siteName: site.name,
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body><SiteShell>{children}</SiteShell></body></html>;
}
