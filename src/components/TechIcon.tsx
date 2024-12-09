import { cn } from "@/lib/utils";
import * as React from "react";
import {
  SiFirebase,
  SiGit,
  SiGoogleanalytics,
  SiJavascript,
  SiMarkdown,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiNotion,
  SiPrettier,
  SiReact,
  SiRedux,
  SiSass,
  SiSwift,
  SiTailwindcss,
  SiTypescript,
  SiPrisma,
  SiExpress,
} from "react-icons/si";
import { TooltipProvider } from "@/components/ui/tooltip";
import MyTooltip from "./MyTooltip";

export type TechListType = keyof typeof techList;

export type TechIconsProps = {
  techs: Array<TechListType>;
  tooltipHidden: boolean;
} & React.ComponentPropsWithoutRef<"ul">;

export default function TechIcons({
  className,
  techs,
  tooltipHidden,
}: TechIconsProps) {
  return (
    <ul className={cn("flex gap-2", className)}>
      <TooltipProvider delayDuration={100}>
        {techs.map((tech) => {
          if (!techList[tech]) return;

          const current = techList[tech];

          return (
            <li key={current.name}>
              <MyTooltip tooltipHidden={tooltipHidden} text={current.name}>
                {<current.icon />}
              </MyTooltip>
            </li>
          );
        })}
      </TooltipProvider>
    </ul>
  );
}

const techList = {
  react: {
    icon: SiReact,
    name: "React",
  },
  nextjs: {
    icon: SiNextdotjs,
    name: "Next.js",
  },
  expressjs: {
    icon: SiExpress,
    name: "Express.js",
  },
  prisma: {
    icon: SiPrisma,
    name: "Prisma",
  },
  tailwindcss: {
    icon: SiTailwindcss,
    name: "Tailwind CSS",
  },
  scss: {
    icon: SiSass,
    name: "SCSS",
  },
  javascript: {
    icon: SiJavascript,
    name: "JavaScript",
  },
  typescript: {
    icon: SiTypescript,
    name: "TypeScript",
  },
  nodejs: {
    icon: SiNodedotjs,
    name: "Node.js",
  },
  firebase: {
    icon: SiFirebase,
    name: "Firebase",
  },
  mongodb: {
    icon: SiMongodb,
    name: "MongoDB",
  },
  redux: {
    icon: SiRedux,
    name: "Redux",
  },
  mdx: {
    icon: SiMarkdown,
    name: "MDX",
  },
  prettier: {
    icon: SiPrettier,
    name: "Prettier",
  },
  analytics: {
    icon: SiGoogleanalytics,
    name: "Google Analytics",
  },
  git: {
    icon: SiGit,
    name: "Git",
  },
  notion: {
    icon: SiNotion,
    name: "Notion API",
  },
  swift: {
    icon: SiSwift,
    name: "Swift",
  },
};
