import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TooltipProvider } from "@/components/ui/tooltip";
import MyTooltip from "./MyTooltip";
import {
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiMysql,
  SiPrisma,
  SiTypescript,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiGit,
  SiDocker,
  SiJest,
} from "react-icons/si";

export default function TechStack() {
  const techStack = [
    { logo: <SiTypescript />, text: "Typescript" },
    { logo: <SiHtml5 />, text: "HTML" },
    { logo: <SiCss3 />, text: "CSS" },
    { logo: <SiReact />, text: "React" },
    { logo: <SiNextdotjs />, text: "Next.js" },
    { logo: <SiNodedotjs />, text: "Node.js" },
    { logo: <SiExpress />, text: "Express.js" },
    { logo: <SiMysql />, text: "MySQL" },
    { logo: <SiPrisma />, text: "Prisma" },
    { logo: <SiGit />, text: "Git" },
    { logo: <SiDocker />, text: "Docker" },
    { logo: <SiJest />, text: "Jest" },
  ];

  return (
    <Card className="py-2 shadow-lg">
      <CardHeader>
        <CardTitle>Tech Stack</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="grid grid-cols-6 place-items-center gap-9 max-md:grid-cols-4 max-sm:grid-cols-3 lg:grid-cols-3 [&_svg]:size-8">
          <TooltipProvider delayDuration={100}>
            {techStack.map((stack, idx) => (
              <li key={idx} className="flex flex-col items-center gap-2">
                <MyTooltip
                  tooltipHidden={true}
                  text={stack.text}
                  className="duration-200 ease-out lg:transition-transform lg:hover:scale-125"
                >
                  {stack.logo}
                </MyTooltip>
                <span className="block lg:hidden">{stack.text}</span>
              </li>
            ))}
          </TooltipProvider>
        </ul>
      </CardContent>
    </Card>
  );
}
