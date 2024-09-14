import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Project 1",
    description: "A cool project using React.",
    link: "https://github.com/project-1",
    language: "JavaScript",
    stars: 120,
    forks: 30,
  },
  {
    title: "Project 2",
    description: "An awesome project with Next.js.",
    link: "https://github.com/project-2",
    language: "TypeScript",
    stars: 200,
    forks: 50,
  },
  {
    title: "Project 3",
    description: "A beautiful project with Tailwind CSS.",
    link: "https://github.com/project-3",
    language: "CSS",
    stars: 90,
    forks: 20,
  },
];

const ProjectSection = () => {
  return (
    <section className="py-12 bg-primary">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            language={project.language}
            stars={project.stars}
            forks={project.forks}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
