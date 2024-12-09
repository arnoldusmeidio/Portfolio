import { PROJECTS } from "@/lib/constants";
import { getProjectPosts } from "./project/utils";

export const baseUrl = "https://arnoldusmeidio.com";

export default async function sitemap() {
  const projects = getProjectPosts().map((project) => ({
    url: `${baseUrl}/project/${project.slug}`,
    lastModified: project.metadata.publishedAt,
  }));

  const routes = PROJECTS.map((route) => ({
    url: `${baseUrl}${route.href}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...projects, ...routes];
}
