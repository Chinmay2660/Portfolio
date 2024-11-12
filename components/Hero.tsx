import Skills from "./Skills";
import JourneySection from "./Journey";
import { arrayCheck, leetcodeIcon, gfgIcon } from "../utils/utils";

const buttons = [
  {
    href: "https://www.linkedin.com/in/chinmay2660/",
    className: "bg-blue-600 hover:bg-blue-700",
    iconClass: "fab fa-linkedin",
    text: "LinkedIn",
  },
  {
    href: "https://github.com/Chinmay2660",
    className: "bg-gray-500 hover:bg-gray-700",
    iconClass: "fab fa-github",
    text: "GitHub",
  },
  {
    href: "https://x.com/ChinmayBhoir14",
    className: "bg-blue-500 hover:bg-blue-700",
    iconClass: "fab fa-twitter",
    text: "Twitter",
  },
  {
    href: "https://www.instagram.com/chinmay__bhoir",
    className: "bg-pink-500 hover:bg-pink-700",
    iconClass: "fab fa-instagram",
    text: "Instagram",
  },
  {
    href: "https://leetcode.com/u/Chinmay2660/",
    className: "bg-yellow-500 hover:bg-yellow-600",
    customIcon: leetcodeIcon,
    text: "LeetCode",
  },
  {
    href: "https://www.geeksforgeeks.org/user/chinmay2660/",
    className: "bg-green-500 hover:bg-green-700",
    customIcon: gfgIcon,
    text: "GeeksforGeeks",
  },
  {
    href: "https://www.hackerrank.com/profile/Chinmay2660",
    className: "bg-green-500 hover:bg-green-700",
    iconClass: "fab fa-hackerrank",
    text: "HackerRank",
  },
];

const Hero = () => {
  return (
    <section className="max-w-7xl flex flex-col items-center mt-28 pt-16 pb-0 px-4 mx-4 md:mx-4 lg:mx-auto md:px-8 border border-gray-700 rounded-lg bg-primary text-gray-200 shadow-lg">
      <div className="flex flex-col md:flex-row items-center w-full">
        <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-8 lg:ml-10">
          <img
            src="https://github.com/Chinmay2660.png"
            alt="Chinmay Bhoir"
            className="w-72 h-72 rounded-full border-4 border-gray-700 shadow-lg"
          />
        </div>

        <div className="flex flex-col justify-center md:max-w-xl lg:ml-10">
          <h1 className="text-4xl font-bold mb-4 ">Chinmay Bhoir</h1>
          <p className="text-2xl mb-4 font-bold ">
            Software Development Engineer
          </p>
          <p className="text-lg mb-6">
            👋 Hello! I’m SDE - 1 with 2+ years of experience in building
            high-quality, scalable front-end solutions.
            <br />
            🚀 Currently, I’m focused on developing complex React.js
            applications and ensuring code quality in Agile environments.
          </p>
          <div className="flex flex-wrap gap-4">
            {arrayCheck(buttons) &&
              buttons.map((button, index) => (
                <a
                  key={index}
                  href={button.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center px-4 py-2 text-white  ${button.className}  rounded-md transition-colors duration-300`}
                >
                  {button.customIcon ? (
                    button.customIcon
                  ) : (
                    <i className={`${button.iconClass} mr-2`}></i>
                  )}
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
