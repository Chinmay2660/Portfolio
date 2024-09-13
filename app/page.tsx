import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Project 1"
            description="A cool project using React."
            link="https://github.com/project-1"
          />
          <ProjectCard
            title="Project 2"
            description="An awesome project with Next.js."
            link="https://github.com/project-2"
          />
          <ProjectCard
            title="Project 3"
            description="A beautiful project with Tailwind CSS."
            link="https://github.com/project-3"
          />
        </div>
      </section>
    </>
  );
}
