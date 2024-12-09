import FeaturedProjects from "./FeaturedProjects";

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col gap-4">
      <h3 className="text-4xl font-bold">Projects:</h3>
      <p>Some of my projects</p>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <FeaturedProjects />
      </div>
    </section>
  );
}
