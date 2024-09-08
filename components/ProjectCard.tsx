"use client";
import { motion } from 'framer-motion';

interface ProjectProps {
  title: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, link }) => {
  return (
    <motion.div
      className="p-4 bg-white rounded-lg shadow-lg"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
      <a
        href={link}
        target="_blank"
        className="mt-4 inline-block text-blue-500"
        rel="noopener noreferrer"
      >
        View Project
      </a>
    </motion.div>
  );
};

export default ProjectCard;
