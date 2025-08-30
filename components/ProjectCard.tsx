import { arrayCheck } from "../utils/utils";
import { motion } from "framer-motion";

interface ProjectProps {
  title: string;
  description: string;
  repoLink: string;
  liveLink?: string;
  languages: string[];
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  repoLink,
  liveLink,
  languages,
}) => {
  const languageColors: { [key: string]: string } = {
    JavaScript: "bg-yellow-400",
    TypeScript: "bg-blue-500",
    HTML: "bg-orange-500",
    CSS: "bg-blue-300",
    Reactjs: "bg-cyan-400",
    Nextjs: "bg-purple-400",
    ChakraUI: "bg-pink-400",
    "Tailwind CSS": "bg-teal-400",
    Redux: "bg-red-400",
    "Redux Toolkit": "bg-red-400",
    MaterialUI: "bg-purple-400",
    Context: "bg-blue-400",
    "Framer Motion": "bg-yellow-400",
    default: "bg-gray-500",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="p-4 bg-primary rounded-lg shadow-lg border border-gray-700 hover:border-gray-600 transition-colors duration-300 flex flex-col justify-between"
      whileHover={{
        y: -8,
        boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
        borderColor: "#3b82f6",
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-between items-center">
        <motion.a
          href={repoLink}
          target="_blank"
          className="text-xl font-bold text-blue-500 hover:underline"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          {title}
        </motion.a>
        {liveLink && (
          <motion.a
            href={liveLink}
            target="_blank"
            className="text-lg font-bold text-blue-500 hover:underline"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Live
          </motion.a>
        )}
      </div>
      <motion.p
        className="mt-2 text-white text-sm line-clamp-3"
        variants={itemVariants}
      >
        {description}
      </motion.p>

      <motion.div
        className="flex flex-wrap mt-4 space-x-2"
        variants={containerVariants}
      >
        {arrayCheck(languages) &&
          languages.map((language, index) => (
            <motion.div
              key={index}
              className="flex items-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.span
                className={`inline-block w-3 h-3 rounded-full mr-2 ${
                  languageColors[language] || languageColors.default
                }`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.3 }}
              ></motion.span>
              <span className="text-sm text-white">{language}</span>
            </motion.div>
          ))}
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
