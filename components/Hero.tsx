"use client";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto flex items-center pt-32 pb-16 px-4 md:px-8 border border-gray-700 rounded-lg bg-primary text-gray-200 shadow-lg">
      <div className="flex flex-col md:flex-row items-center w-full">
        <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-8">
          <img
            src="https://github.com/Chinmay2660.png"
            alt="Chinmay Bhoir"
            className="w-72 h-72 rounded-full border-4 border-gray-700 shadow-lg"
          />
        </div>

        <div className="flex flex-col justify-center md:max-w-xl md:ml-16">
          <h1 className="text-4xl font-bold mb-4">Chinmay Bhoir</h1>
          <p className="text-xl mb-4">Software Development Engineer</p>
          <p className="text-lg mb-6">
            👋 Hello! I’m a passionate Software Development Engineer
            specializing in high-quality, scalable software solutions.
            <br />
            🚀 Currently, I’m focused on developing complex React.js
            applications and ensuring code quality in Agile environments.
          </p>
          <div className="flex flex-wrap gap-4 mt-0">
            <a
              href="https://www.linkedin.com/in/chinmay2660/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-300"
            >
              <i className="fab fa-linkedin mr-2"></i>
              LinkedIn
            </a>

            <a
              href="https://github.com/Chinmay2660"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 text-white bg-gray-800 hover:bg-gray-700 rounded-md transition-colors duration-300"
            >
              <i className="fab fa-github mr-2"></i>
              GitHub
            </a>

            <a
              href="https://x.com/ChinmayBhoir14"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 text-white bg-blue-400 hover:bg-blue-500 rounded-md transition-colors duration-300"
            >
              <i className="fab fa-twitter mr-2"></i>
              Twitter
            </a>

            <a
              href="https://www.instagram.com/your-profile/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 text-white bg-pink-500 hover:bg-pink-600 rounded-md transition-colors duration-300"
            >
              <i className="fab fa-instagram mr-2"></i>
              Instagram
            </a>

            <a
              href="https://leetcode.com/your-profile/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 text-white bg-orange-400 hover:bg-orange-500 rounded-md transition-colors duration-300"
            >
              <i className="fab fa-leetcode mr-2"></i>
              LeetCode
            </a>

            <a
              href="https://www.geeksforgeeks.org/user/your-profile/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 text-white bg-teal-500 hover:bg-teal-600 rounded-md transition-colors duration-300"
            >
              <i className="fab fa-geeksforgeeks mr-2"></i>
              GeeksforGeeks
            </a>

            <a
              href="https://www.hackerrank.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded-md transition-colors duration-300"
            >
              <i className="fab fa-hackerrank mr-2"></i>
              HackerRank
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
