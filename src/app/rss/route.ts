import { getProjectPosts } from "../project/utils";
import { baseUrl } from "../sitemap";

export async function GET() {
  const allProjects = getProjectPosts();

  const itemsXml = allProjects
    .sort((a, b) => {
      if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
        return -1;
      }
      return 1;
    })
    .map(
      (project) => `<item>
  <title>${project.metadata.title}</title>
  <link>${baseUrl}/project/${project.slug}</link>
  <description>${project.metadata.description || ""}</description>
  <pubDate>${new Date(project.metadata.publishedAt).toUTCString()}</pubDate>
  </item>`,
    )
    .join("/n");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>Arnoldus Meidio</title>
        <link>${baseUrl}</link>
        <description>This is my Portfolio RSS feed</description>
        ${itemsXml}
      </channel>
    </rss>`;

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}
