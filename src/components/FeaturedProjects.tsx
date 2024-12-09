import { getProjectPosts } from "@/app/project/utils";
import ProjectCard from "./ProjectCard";
import { ProjectFrontmatter } from "@/types/frontmatters";
import Link from "next/link";

export default function FeaturedProjects() {
  const featuredProjects = getProjectPosts();

  return (
    <>
      {featuredProjects
        .sort((a, b) => {
          if (
            new Date(a.metadata.publihedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((project) => (
          <article key={project.slug}>
            <Link href={`/project/${project.slug}`}>
              <ProjectCard project={project.metadata as ProjectFrontmatter} />
            </Link>
          </article>
        ))}
    </>
  );
}
