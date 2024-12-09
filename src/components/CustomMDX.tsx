import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { highlight } from "sugar-high";
import TechIcons from "@/components/TechIcon";
import SplitImage, { Split } from "@/components/SplitImage";

function Blockquote(props: any) {
  return <blockquote className="" {...props} />;
}

function Code({ children, ...props }: any) {
  const codeHTML = highlight(children);

  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

function CustomLink(props: any) {
  const href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startWith("#")) {
    return <a {...props} />;
  }

  return <a href="" target="_blank" rel="noopener noreferrer" {...props} />;
}

function RoundedImage(props: any) {
  return <Image alt={props.alt} className="rounded-lg shadow-md" {...props} />;
}

function slugify(str: string) {
  return str
    .toString()
    .toLocaleLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with "-"
    .replace(/&/g, "-and-") // Replace & with "and"
    .replace(/\-\-+/g, "-"); // Replace multiple "-" with single "-"
}

function createHeading(level: number) {
  const Heading = ({ children }: any) => {
    const slug = slugify(children);

    return React.createElement(
      `h${level}`,
      { id: slug },
      React.createElement(
        "a",
        {
          href: `#${slug}`,
          className:
            "anchor group relative no-underline hover:underline underline-offset-4 ",
        },
        <>
          {children}
          <span
            className="hash-symbol invisible ml-2 text-neutral-300 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 dark:text-neutral-700"
            style={{ textDecoration: "none", position: "absolute" }}
          >
            #
          </span>
        </>,
      ),
    );
  };

  Heading.displayName = `Heading${level}`;
  return Heading;
}

function Table({ data }: any) {
  const headers = data.headers.map((header: any, index: any) => (
    <th key={index}>{header}</th>
  ));

  const rows = data.rows.map((cell: any, cellIndex: any) => (
    <td key={cellIndex}>{cell}</td>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  blockquote: Blockquote,
  Table,
  TechIcons,
  SplitImage,
  Split,
};

export default function CustomMDX(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
