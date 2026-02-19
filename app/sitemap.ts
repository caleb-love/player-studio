import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { caseStudies } from "@/lib/work";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/work", "/services", "/contact", "/privacy", "/terms"];

  const routes: MetadataRoute.Sitemap = staticRoutes.map((p) => ({
    url: `${site.url}${p}`,
    lastModified: new Date(),
  }));

  const workRoutes: MetadataRoute.Sitemap = caseStudies.map((c) => ({
    url: `${site.url}/work/${c.slug}`,
    lastModified: new Date(),
  }));

  return [...routes, ...workRoutes];
}
