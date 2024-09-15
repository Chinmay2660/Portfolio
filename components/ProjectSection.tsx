import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Portfolio",
    description: "A cool project using React and TypeScript.",
    repoLink: "https://github.com/Chinmay2660/Portfolio",
    liveLink: "https://chinmay2660.github.io/Portfolio/",
    languages: ["TypeScript", "Nextjs", "Tailwind", "FramerMotion"],
  },
  {
    title: "MovieSphere",
    description: "An awesome project with Next.js and JavaScript.",
    repoLink: "https://github.com/Chinmay2660/MovieSphere",
    liveLink: "https://moviesphere2660.vercel.app/",
    languages: ["Reactjs", "Tailwind", "FramerMotion"],
  },
  {
    title: "MintMind",
    description: "A beautiful project with Tailwind CSS.",
    repoLink: "https://github.com/Chinmay2660/Mintmind",
    liveLink: "https://mintmind.vercel.app/",
    languages: ["Nextjs", "Tailwind", "ReduxToolkit"],
  },
  {
    title: "GPT-3",
    description: "A beautiful project with Tailwind CSS.",
    repoLink: "https://github.com/Chinmay2660/gpt",
    liveLink: "https://chinmay2660-gpt3.netlify.app/",
    languages: ["Reactjs", "Tailwind"],
  },
];

const ProjectSection = () => {
  return (
    <section className="max-w-7xl mx-auto py-12 bg-primary">
      <h2 className="text-3xl font-bold text-gray-200 text-left mb-10">
        Pinned Projects
      </h2>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            repoLink={project.repoLink}
            liveLink={project.liveLink}
            languages={project.languages}
          />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
      <a
        href="https://github.com/Chinmay2660"
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg text-gray-200 bg-transparent  shadow-lg border border-gray-700 hover:border-gray-600 px-6 py-3 rounded-lg flex items-center hover:bg-gray-700 hover:text-white transition-all duration-300"
      >
        See more projects
        <i className="fas fa-arrow-right ml-2"></i>
      </a>
    </div>
    
    </section>
  );
};

export default ProjectSection;
