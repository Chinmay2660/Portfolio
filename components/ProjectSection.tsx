import ProjectCard from "./ProjectCard";
import { arrayCheck, projects } from "../utils/utils";
import { motion } from "framer-motion";

const ProjectSection = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="max-w-7xl mx-4 md:mx-4 lg:mx-auto py-12 bg-primary">
      <motion.h2
        className="text-3xl font-bold text-gray-200 text-left mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Pinned Projects
      </motion.h2>

      <motion.div
        className="container mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1, delay: 0.1 }}
      >
        {arrayCheck(projects) &&
          projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                repoLink={project.repoLink}
                liveLink={project.liveLink}
                languages={project.languages}
              />
            </motion.div>
          ))}
      </motion.div>

      <motion.div
        className="mt-10 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <motion.a
          href="https://github.com/Chinmay2660?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-gray-200 bg-transparent  shadow-lg border border-gray-700 hover:border-gray-600 px-6 py-3 rounded-lg flex items-center hover:bg-gray-700 hover:text-white transition-all duration-300"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          See more projects
          <i className="fas fa-arrow-right ml-2"></i>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default ProjectSection;
