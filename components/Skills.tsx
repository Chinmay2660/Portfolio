"use client";
import { useState } from "react";
import { arrayCheck, techStack, toolStack } from "../utils/utils";

const StackSection = () => {
  const [activeTab, setActiveTab] = useState<"tech" | "tools">("tech");

  return (
    <section className="max-w-7xl mx-auto bg-primary text-gray-200 shadow-lg">
      <div className="flex justify-start space-x-4 mb-6 border-b border-gray-700">
        <button
          onClick={() => setActiveTab("tech")}
          className={`px-4 py-2 -mb-px border-b-2 transition-colors duration-300 ${
            activeTab === "tech"
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-400"
          }`}
        >
          Tech Stack
        </button>
        <button
          onClick={() => setActiveTab("tools")}
          className={`px-4 py-2 -mb-px border-b-2 transition-colors duration-300 ${
            activeTab === "tools"
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-400"
          }`}
        >
          Tool Stack
        </button>
      </div>

      <div className="flex flex-wrap gap-4 justify-start">
        {activeTab === "tech" &&
          arrayCheck(techStack) &&
          techStack.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-800 rounded-md shadow-md transition-transform duration-300 hover:bg-blue-600 hover:-translate-y-1"
            >
              {tech}
            </span>
          ))}
        {activeTab === "tools" &&
          arrayCheck(toolStack) &&
          toolStack.map((tool, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-800 rounded-md shadow-md transition-transform duration-300 hover:bg-blue-600 hover:-translate-y-1"
            >
              {tool}
            </span>
          ))}
      </div>
    </section>
  );
};

export default StackSection;
