"use client";

import ProjectCard from "./ProjectCard";
import { arrayCheck, projects } from "../utils/utils";
import { motion } from "framer-motion";
import { spring, itemFadeInUp, staggerContainer, buttonHover, buttonTap } from "@/lib/motion";

const ProjectSection = () => {
  return (
    <section className="w-full max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto py-14 md:py-18 px-4 sm:px-6 md:px-8 box-border">
      <motion.div
        className="rounded-3xl border border-border/60 bg-card/80 dark:bg-card/90 backdrop-blur-sm shadow-soft dark:shadow-soft-dark overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={itemFadeInUp}
      >
        <div className="p-6 md:p-10">
          <motion.h2
            className="text-2xl font-bold text-foreground mb-8 tracking-tight"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={spring.gentle}
          >
            Projects
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-5"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {arrayCheck(projects) &&
              projects.map((project, index) => (
                <motion.div key={index} variants={itemFadeInUp}>
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
            className="mt-8 flex justify-center"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring.gentle, delay: 0.08 }}
          >
            <motion.a
              href="https://github.com/Chinmay2660?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-foreground border border-border bg-transparent hover:bg-accent-soft-hover hover:border-accent/50 dark:hover:border-accent/70 hover:text-accent transition-all duration-200 ease-out"
              whileHover={buttonHover}
              whileTap={buttonTap}
            >
              See more on GitHub
              <i className="fas fa-arrow-right text-xs" aria-hidden />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectSection;
