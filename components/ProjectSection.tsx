import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Portfolio",
    description: "A cool project using React and TypeScript.",
    link: "https://github.com/Chinmay2660/Portfolio",
    languages: ["TypeScript", "Nextjs", 'Tailwind', "FramerMotion"],
    stars: 120,
    forks: 30,
  },
  {
    title: "MovieSphere",
    description: "An awesome project with Next.js and JavaScript.",
    link: "https://github.com/Chinmay2660/MovieSphere",
    languages: ["Reactjs", "Tailwind", "FramerMotion"],
    stars: 200,
    forks: 50,
  },
  {
    title: "MintMind",
    description: "A beautiful project with Tailwind CSS.",
    link: "https://github.com/Chinmay2660/Mintmind",
    languages: ["Nextjs", "Tailwind", "ReduxToolkit"],
    stars: 90,
    forks: 20,
  },
  {
    title: "GPT-3",
    description: "A beautiful project with Tailwind CSS.",
    link: "https://github.com/Chinmay2660/gpt",
    languages: ["Reactjs", "Tailwind"],
    stars: 90,
    forks: 20,
  },
];

const ProjectSection = () => {
  return (
    <section className="max-w-7xl mx-auto py-12 bg-primary">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            languages={project.languages}
            stars={project.stars}
            forks={project.forks}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
