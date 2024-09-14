import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Portfolio",
    description: "A cool project using React.",
    link: "https://github.com/Chinmay2660/Portfolio",
    language: "TypeScript",
    stars: 120,
    forks: 30,
  },
  {
    title: "MovieSphere",
    description: "An awesome project with Next.js.",
    link: "https://github.com/Chinmay2660/MovieSphere",
    language: "JavaScript",
    stars: 200,
    forks: 50,
  },
  {
    title: "MintMind",
    description: "A beautiful project with Tailwind CSS.",
    link: "https://github.com/Chinmay2660/Mintmind",
    language: "CSS",
    stars: 90,
    forks: 20,
  },
  {
    title: "GPT-3",
    description: "A beautiful project with Tailwind CSS.",
    link: "https://github.com/Chinmay2660/gpt",
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
