import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";
import { works } from "@/data/works";
import { articles } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/shijimiworks`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/youkai-steak`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/works`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/articles`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/contact`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/products`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/products/web-portfolio`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/products/app-mvp`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/products/automation-workflow`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/products/corporate-ai-consulting`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/products/writing-ai-media`, changeFrequency: "monthly", priority: 0.7 },
  ];

  const workRoutes: MetadataRoute.Sitemap = works.map((item) => ({
    url: `${siteUrl}/works/${item.slug}`,
    lastModified: item.date,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const articleRoutes: MetadataRoute.Sitemap = articles.map((item) => ({
    url: `${siteUrl}/articles/${item.slug}`,
    lastModified: item.date,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...workRoutes, ...articleRoutes];
}
