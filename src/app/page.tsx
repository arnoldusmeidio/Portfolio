import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex w-full max-w-7xl flex-col gap-10 px-4 lg:gap-20">
      <Hero />
      <Projects />
    </main>
  );
}
