import { notFound } from "next/navigation";
import { getProjectPosts } from "../utils";
import CustomMDX from "@/components/CustomMDX";
import Image from "next/image";
import { FaGithub, FaLink } from "react-icons/fa";
import Link from "next/link";
import { baseUrl } from "@/app/sitemap";
// import TableOfContents from "@/components/TableOfContents";

export async function generateStaticParams() {
  const posts = getProjectPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectPosts().find(
    (project) => project.slug == params.slug,
  );
  if (!project) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    description,
    image,
  } = project.metadata;

  const ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/project/${project.slug}`,
      images: [{ url: ogImage }],
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = getProjectPosts().find((post) => post.slug == params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.description,
            image: post.metadata.banner
              ? post.metadata.banner
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/project/${post.slug}`,
            author: {
              "@type": "Person",
              name: "Arnoldus Meidio Portfolio",
            },
          }),
        }}
      />
      <main className="-mt-5 flex w-full max-w-7xl flex-col px-4">
        <div className="flex w-full flex-col gap-4 border-b-2 pb-6">
          <figure className="h-fit overflow-hidden rounded-lg shadow-lg">
            <Image
              src={post.metadata.banner}
              alt={post.metadata.title}
              height={900}
              width={1800}
            />
          </figure>
          <h1 className="text-4xl font-bold">{post.metadata.title}</h1>
          <p>{post.metadata.description}</p>
          <div className="flex items-center gap-3">
            {post.metadata.github && (
              <div className="flex flex-row items-center gap-2">
                <FaGithub />
                <Link href={post.metadata.github} target="_blank">
                  <span className="animated-underline border-b border-dotted border-black pb-0.5 font-bold hover:border-black/0">
                    Repository
                  </span>
                </Link>
              </div>
            )}
            {post.metadata.github && post.metadata.link && " - "}
            {post.metadata.link && (
              <div className="flex flex-row items-center gap-2">
                <FaLink />
                <Link href={post.metadata.link} target="_blank">
                  <span className="animated-underline border-b border-dotted border-black pb-0.5 font-bold hover:border-black/0">
                    Open Live Site
                  </span>
                </Link>
              </div>
            )}
          </div>
        </div>
        <article className="mdx prose">
          <CustomMDX source={post.content} />
        </article>

        <aside className="py-4">
          <div className="sticky top-36">
            {/* <TableOfContents
                    toc={toc}
                    minLevel={minLevel}
                    activeSection={activeSection}
                  /> */}
          </div>
        </aside>
      </main>
    </>
  );
}
