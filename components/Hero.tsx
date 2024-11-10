import Skills from "./Skills";
import JourneySection from "./Journey";
import { arrayCheck, buttons } from "../utils/utils";

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
            👋 Hello! I’m SDE - 1 with 2+ years of
            experience in building high-quality, scalable
            front-end solutions.
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
                  className={`flex items-center px-4 py-2 text-white ${button.bgColor} ${button.hoverColor} rounded-md transition-colors duration-300`}
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
