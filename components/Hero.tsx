"use client";

import Skills from "./Skills";
import JourneySection from "./Journey";

const buttons = [
  {
    href: "https://www.linkedin.com/in/chinmay2660/",
    bgColor: "bg-blue-600",
    hoverColor: "hover:bg-blue-700",
    iconClass: "fab fa-linkedin",
    text: "LinkedIn",
  },
  {
    href: "https://github.com/Chinmay2660",
    bgColor: "bg-gray-800",
    hoverColor: "hover:bg-gray-700",
    iconClass: "fab fa-github",
    text: "GitHub",
  },
  {
    href: "https://x.com/ChinmayBhoir14",
    bgColor: "bg-blue-400",
    hoverColor: "hover:bg-blue-500",
    iconClass: "fab fa-twitter",
    text: "Twitter",
  },
  {
    href: "https://www.instagram.com/your-profile/",
    bgColor: "bg-pink-500",
    hoverColor: "hover:bg-pink-600",
    iconClass: "fab fa-instagram",
    text: "Instagram",
  },
  {
    href: "https://leetcode.com/your-profile/",
    bgColor: "bg-orange-400",
    hoverColor: "hover:bg-orange-500",
    iconClass: "fab fa-leetcode",
    text: "LeetCode",
  },
  {
    href: "https://www.geeksforgeeks.org/user/your-profile/",
    bgColor: "bg-teal-500",
    hoverColor: "hover:bg-teal-600",
    iconClass: "fab fa-geeksforgeeks",
    text: "GeeksforGeeks",
  },
  {
    href: "https://www.hackerrank.com/your-profile",
    bgColor: "bg-green-500",
    hoverColor: "hover:bg-green-600",
    iconClass: "fab fa-hackerrank",
    text: "HackerRank",
  },
];

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto flex flex-col items-center mt-28 pt-16 pb-16 px-4 md:px-8 border border-gray-700 rounded-lg bg-primary text-gray-200 shadow-lg">
      <div className="flex flex-col md:flex-row items-center w-full">
        <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-8">
          <img
            src="https://github.com/Chinmay2660.png"
            alt="Chinmay Bhoir"
            className="w-72 h-72 rounded-full border-4 border-gray-700 shadow-lg"
          />
        </div>

        <div className="flex flex-col justify-center md:max-w-xl">
          <h1 className="text-4xl font-bold mb-4">Chinmay Bhoir</h1>
          <p className="text-xl mb-4">Software Development Engineer</p>
          <p className="text-lg mb-6">
            👋 Hello! I’m a passionate Software Development Engineer
            specializing in high-quality, scalable software solutions.
            <br />
            🚀 Currently, I’m focused on developing complex React.js
            applications and ensuring code quality in Agile environments.
          </p>
          <div className="flex flex-wrap gap-4">
            {buttons.map((button, index) => (
              <a
                key={index}
                href={button.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center px-4 py-2 text-white ${button.bgColor} ${button.hoverColor} rounded-md transition-colors duration-300`}
              >
                <i className={`${button.iconClass} mr-2`}></i>
                {button.text}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 w-full">
        <Skills />
        <JourneySection />
      </div>
    </section>
  );
};

export default Hero;
