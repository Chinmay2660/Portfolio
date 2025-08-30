import Skills from "./Skills";
import JourneySection from "./Journey";
import { arrayCheck, leetcodeIcon, gfgIcon } from "../utils/utils";
import { motion } from "framer-motion";

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
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="max-w-7xl flex flex-col items-center mt-28 pt-16 pb-0 px-4 mx-4 md:mx-4 lg:mx-auto md:px-8 border border-gray-700 rounded-lg bg-primary text-gray-200 shadow-lg">
      <div className="flex flex-col md:flex-row items-center w-full">
        <motion.div
          className="flex-shrink-0 mb-8 md:mb-0 md:mr-8 lg:ml-10"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.img
            src="https://github.com/Chinmay2660.png"
            alt="Chinmay Bhoir"
            className="w-72 h-72 rounded-full border-4 border-gray-700 shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.div
          className="flex flex-col justify-center md:max-w-xl lg:ml-10"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
        >
          <motion.h1
            className="text-4xl font-bold mb-4"
            variants={itemVariants}
          >
            Chinmay Bhoir
          </motion.h1>
          <motion.p className="text-2xl mb-4 font-bold" variants={itemVariants}>
            Software Development Engineer
          </motion.p>
          <motion.p className="text-lg mb-6" variants={itemVariants}>
            👋 Hello! I&apos;m SDE - 1 with 3+ years of experience in building
            high-quality, scalable front-end solutions.
            <br />
            🚀 Currently, I&apos;m focused on developing complex React.js
            applications and ensuring code quality in Agile environments.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1, delay: 0.2 }}
          >
            {arrayCheck(buttons) &&
              buttons.map((button, index) => (
                <motion.a
                  key={index}
                  href={button.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center px-4 py-2 text-white  ${button.className}  rounded-md transition-colors duration-300`}
                  variants={buttonVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {button.customIcon ? (
                    button.customIcon
                  ) : (
                    <i className={`${button.iconClass} mr-2`}></i>
                  )}
                  {button.text}
                </motion.a>
              ))}
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="mt-8 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Skills />
        <JourneySection />
      </motion.div>
    </section>
  );
};

export default Hero;
