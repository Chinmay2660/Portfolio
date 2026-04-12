"use client";

import { memo } from "react";
import { arrayCheck } from "@/utils";
import { motion } from "framer-motion";
import { spring, cardHover, cardTap } from "@/lib/motion";

interface ProjectProps {
  title: string;
  description: string;
  repoLink: string;
  liveLink?: string;
  languages: string[];
}

const languageColors: Record<string, string> = {
  JavaScript: "bg-amber-400/90",
  TypeScript: "bg-blue-500/90",
  HTML: "bg-orange-500/90",
  CSS: "bg-sky-400/90",
  React: "bg-cyan-400/90",
  Nextjs: "bg-violet-500/90",
  "Next.js": "bg-violet-500/90",
  ChakraUI: "bg-pink-400/90",
  "Tailwind CSS": "bg-teal-400/90",
  Redux: "bg-purple-500/90",
  "Redux Toolkit": "bg-purple-500/90",
  MaterialUI: "bg-indigo-500/90",
  Context: "bg-blue-400/90",
  "Framer Motion": "bg-amber-400/90",
  Vite: "bg-violet-400/90",
  "TanStack Query": "bg-orange-500/90",
  "Express.js": "bg-slate-500/90",
  MongoDB: "bg-emerald-600/90",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.025, delayChildren: 0.02 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: spring.gentle,
  },
};

const ProjectCard: React.FC<ProjectProps> = memo(function ProjectCard({
  title = "",
  description = "",
  repoLink,
  liveLink,
  languages = [],
}) {
  return (
    <motion.div
      className="group p-5 rounded-2xl border border-border/60 bg-primary/30 dark:bg-primary/20 flex flex-col h-full hover:border-accent/40 dark:hover:border-accent/60 hover:bg-accent-soft/30 dark:hover:bg-accent-soft-hover transition-all duration-200 ease-out"
      whileHover={cardHover}
      whileTap={cardTap}
    >
      <div className="flex justify-between items-start gap-3">
        <motion.a
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-base font-semibold text-foreground hover:text-accent transition-all duration-200 ease-out line-clamp-1 flex-1 min-w-0"
          whileTap={{ scale: 0.98, transition: spring.quick }}
        >
          {title}
        </motion.a>
        <span className="flex items-center gap-2 shrink-0">
          {liveLink && (
            <motion.a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-accent hover:text-accent-hover transition-all duration-200 ease-out"
              whileTap={{ scale: 0.97, transition: spring.quick }}
            >
              Live →
            </motion.a>
          )}
          <motion.a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-all duration-200 ease-out"
            whileTap={{ scale: 0.97 }}
            aria-label="View code"
          >
            <i className="fab fa-github text-base" aria-hidden />
          </motion.a>
        </span>
      </div>
      <motion.p
        className="mt-2 min-h-[4.3rem] text-muted text-sm line-clamp-3 leading-relaxed"
        variants={itemVariants}
      >
        {description ?? ""}
      </motion.p>

      <motion.div
        className="mt-auto flex flex-wrap gap-2 pt-4"
        variants={containerVariants}
      >
        {arrayCheck(languages) &&
          languages.map((language) => (
            <motion.div
              key={language}
              className="flex items-center gap-1.5"
              variants={itemVariants}
              transition={spring.quick}
            >
              <span
                className={`inline-block w-2 h-2 rounded-full shrink-0 ${
                  languageColors[language] ?? "bg-muted"
                }`}
              />
              <span className="text-xs text-muted">{language}</span>
            </motion.div>
          ))}
      </motion.div>
    </motion.div>
  );
});

export default ProjectCard;
