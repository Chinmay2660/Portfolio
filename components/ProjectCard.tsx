"use client";
import { motion } from "framer-motion";

interface ProjectProps {
  title: string;
  description: string;
  link: string;
  languages: string[];
  stars: number;
  forks: number;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  link,
  languages,
  stars,
  forks,
}) => {
  const languageColors: { [key: string]: string } = {
    JavaScript: "bg-yellow-400",
    TypeScript: "bg-blue-500",
    HTML: "bg-orange-500",
    CSS: "bg-blue-300",
    Reactjs: "bg-cyan-400",
    Nextjs: "bg-purple-400",
    ChakraUI: "bg-pink-400",
    Tailwind: "bg-teal-400",
    Redux: "bg-red-400",
    ReduxToolkit: "bg-red-400",
    MaterialUI: "bg-purple-400",
    Context: "bg-blue-400",
    default: "bg-gray-500",
  };

  return (
    <motion.div
      className="p-4 bg-primary rounded-lg shadow-lg border border-gray-700 hover:border-gray-600 transition-colors duration-300 flex flex-col justify-between"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex flex-col flex-grow">
        <div className="flex justify-between items-center">
          <a
            href={link}
            target="_blank"
            className="text-xl font-bold text-blue-500 hover:underline"
            rel="noopener noreferrer"
          >
            {title}
          </a>
          <div className="flex space-x-2">
            <span className="flex items-center text-sm text-white">
              <i className="fas fa-star mr-1"></i> {stars}
            </span>
            <span className="flex items-center text-sm text-white">
              <i className="fas fa-code-branch mr-1"></i> {forks}
            </span>
          </div>
        </div>
        <p className="mt-2 text-white text-sm line-clamp-3">{description}</p>
      </div>
      <div className="flex flex-wrap mt-4 space-x-2">
        {languages.map((language, index) => (
          <div key={index} className="flex items-center">
            <span
              className={`inline-block w-3 h-3 rounded-full mr-2 ${
                languageColors[language] || languageColors.default
              }`}
            ></span>
            <span className="text-sm text-white">{language}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
