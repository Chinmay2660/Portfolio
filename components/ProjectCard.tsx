import { arrayCheck } from "@/utils/utils";

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

  return (
    <div className="p-4 bg-primary rounded-lg shadow-lg border border-gray-700 hover:border-gray-600 transition-colors duration-300 flex flex-col justify-between">
      <div className="flex justify-between items-center">
        <a
          href={repoLink}
          target="_blank"
          className="text-xl font-bold text-blue-500 hover:underline"
          rel="noopener noreferrer"
        >
          {title}
        </a>
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            className="text-lg font-bold text-blue-500 hover:underline"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        )}
      </div>
      <p className="mt-2 text-white text-sm line-clamp-3">{description}</p>

      <div className="flex flex-wrap mt-4 space-x-2">
        {arrayCheck(languages) &&
          languages.map((language, index) => (
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
    </div>
  );
};

export default ProjectCard;
