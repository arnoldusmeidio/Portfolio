import * as React from "react";

import Link from "next/link";
import { cn } from "@/lib/utils";

type TOCLinkProps = {
  id: string;
  level: number;
  minLevel: number;
  text: string;
  activeSection: string | null;
};

export default function TOCLink({
  id,
  level,
  minLevel,
  text,
  activeSection,
}: TOCLinkProps) {
  return (
    <Link
      href={`#${id}`}
      id={`link-${id}`}
      className={cn(
        "font-medium hover:text-gray-700 focus:outline-none dark:hover:text-gray-200",
        "focus-visible:text-gray-700 dark:focus-visible:text-gray-200",
        activeSection === id
          ? "text-gray-900 dark:text-gray-100"
          : "text-gray-400 dark:text-gray-500",
      )}
      style={{ marginLeft: (level - minLevel) * 16 }}
    >
      {text}
    </Link>
  );
}
