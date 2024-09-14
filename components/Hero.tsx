"use client";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center pt-40 bg-primary text-gray-200">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Chinmay Bhoir</h1>
        <p className="text-xl mb-4">Software Development Engineer</p>
        <p className="text-lg mb-6">
          👋 Hello! I’m a passionate Software Development Engineer specializing
          in high-quality, scalable software solutions.
          <br />
          🚀 Currently, I’m focused on developing complex React.js applications
          and ensuring code quality in Agile environments.
        </p>
        <div className="flex justify-start space-x-4">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
