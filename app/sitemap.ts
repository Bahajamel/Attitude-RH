import type { MetadataRoute } from "next";

import { siteConfig } from "@/data/site";
import { mainNav, legalNav } from "@/data/navigation";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [...mainNav, ...legalNav];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route.href === "/" ? "" : route.href}`,
    lastModified: new Date("2026-06-18"),
    changeFrequency: "monthly",
    priority: route.href === "/" ? 1 : 0.7,
  }));
}
