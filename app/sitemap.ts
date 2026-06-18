import type { MetadataRoute } from "next";

import { siteConfig } from "@/data/site";
import { mainNav, footerNav, legalNav } from "@/data/navigation";

export default function sitemap(): MetadataRoute.Sitemap {
  // Ensemble dédupliqué de toutes les routes du site.
  const hrefs = Array.from(
    new Set([
      "/",
      ...mainNav.map((r) => r.href),
      ...footerNav.map((r) => r.href),
      ...legalNav.map((r) => r.href),
    ])
  );

  return hrefs.map((href) => ({
    url: `${siteConfig.url}${href === "/" ? "" : href}`,
    lastModified: new Date("2026-06-18"),
    changeFrequency: "monthly",
    priority: href === "/" ? 1 : 0.7,
  }));
}
