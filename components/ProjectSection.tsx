import ProjectCard from "./ProjectCard";
import { arrayCheck, projects } from "../utils/utils";

const ProjectSection = () => {
  return (
    <section className="max-w-7xl mx-4 md:mx-4 lg:mx-auto py-12 bg-primary">
      <h2 className="text-3xl font-bold text-gray-200 text-left mb-10">
        Pinned Projects
      </h2>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
        {arrayCheck(projects) &&
          projects.map((project, index) => (
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
          href="https://github.com/Chinmay2660?tab=repositories"
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
