import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { COURSES } from "@/lib/courses";
import { BLOG_POSTS } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/cursos",
    "/servicos",
    "/sobre",
    "/blog",
    "/contato",
    "/politica-de-privacidade",
    "/termos-de-uso",
    "/politica-de-reembolso",
  ];

  const courseRoutes = COURSES.map((c) => `/cursos/${c.slug}`);
  const blogRoutes = BLOG_POSTS.map((p) => `/blog/${p.slug}`);

  const allRoutes = [...staticRoutes, ...courseRoutes, ...blogRoutes];

  return allRoutes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/cursos/") ? 0.9 : 0.6,
  }));
}
