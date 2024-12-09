import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProjectFrontmatter } from "@/types/frontmatters";
import TechIcons, { TechListType } from "./TechIcon";
import Image from "next/image";

export default function ProjectCard({
  project,
}: {
  project: ProjectFrontmatter;
}) {
  return (
    <Card className="project-card shadow-lg transition-transform duration-200 ease-out hover:scale-[1.02] active:scale-[0.97]">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
        <TechIcons
          tooltipHidden={false}
          techs={project.techs as Array<TechListType>}
        />
      </CardHeader>
      <CardContent>
        <figure className="h-fit overflow-hidden rounded-lg shadow-sm">
          <Image src={project.banner} alt="Banner" height={400} width={800} />
        </figure>
      </CardContent>
      <CardFooter>
        <p className="animated-underline font-bold">Read More →</p>
      </CardFooter>
    </Card>
  );
}
