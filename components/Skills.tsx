"use client";
import { useState } from "react";
import { arrayCheck, techStack, toolStack } from "../utils/utils";
import { motion, AnimatePresence } from "framer-motion";

const Skills = () => {
  const [activeTab, setActiveTab] = useState<"tech" | "tools">("tech");

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const tabVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="max-w-7xl mx-auto bg-primary text-gray-200 shadow-lg">
      <motion.div
        className="flex justify-start space-x-4 mb-6 border-b border-gray-700"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1 }}
      >
        <motion.button
          onClick={() => setActiveTab("tech")}
          className={`px-4 py-2 -mb-px border-b-2 transition-colors duration-300 ${
            activeTab === "tech"
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-400"
          }`}
          variants={tabVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Tech Stack
        </motion.button>
        <motion.button
          onClick={() => setActiveTab("tools")}
          className={`px-4 py-2 -mb-px border-b-2 transition-colors duration-300 ${
            activeTab === "tools"
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-400"
          }`}
          variants={tabVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Tool Stack
        </motion.button>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          className="flex flex-wrap gap-4 justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === "tech" &&
            arrayCheck(techStack) &&
            techStack.map((tech, index) => (
              <motion.span
                key={index}
                className="px-4 py-2 bg-gray-800 rounded-md shadow-md transition-transform duration-300 hover:bg-blue-600 hover:-translate-y-1"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {tech}
              </motion.span>
            ))}
          {activeTab === "tools" &&
            arrayCheck(toolStack) &&
            toolStack.map((tool, index) => (
              <motion.span
                key={index}
                className="px-4 py-2 bg-gray-800 rounded-md shadow-md transition-transform duration-300 hover:bg-blue-600 hover:-translate-y-1"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {tool}
              </motion.span>
            ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Skills;
