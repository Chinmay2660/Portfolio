import Skills from "./Skills";
import JourneySection from "./Journey";

const leetcodeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18px"
    height="18px"
    viewBox="0 0 16 16"
    fill="white"
  >
    <path d="M 10.447266 0.265625 A 0.50005 0.50005 0 0 0 10.103516 0.41796875 L 5.65625 4.8671875 L 3.0957031 7.4257812 A 0.50005 0.50005 0 0 0 2.9785156 7.6035156 C 1.769869 8.9739016 1.7865696 11.063913 3.0957031 12.373047 L 5.65625 14.933594 C 7.0176322 16.294976 9.242133 16.294976 10.603516 14.933594 L 12.853516 12.683594 A 0.50063809 0.50063809 0 1 0 12.144531 11.976562 L 9.8945312 14.226562 C 8.9159134 15.20518 7.3418991 15.20518 6.3632812 14.226562 L 3.8027344 11.666016 C 2.8241166 10.687398 2.8241166 9.1114303 3.8027344 8.1328125 L 6.3632812 5.5742188 C 7.3418991 4.5956009 8.9159135 4.5956009 9.8945312 5.5742188 L 12.144531 7.8242188 A 0.50063784 0.50063784 0 1 0 12.853516 7.1171875 L 10.603516 4.8671875 C 9.9106907 4.174363 8.9943718 3.8431189 8.0820312 3.8554688 L 10.8125 1.125 A 0.50005 0.50005 0 0 0 10.447266 0.265625 z M 7.328125 9.4003906 A 0.50005 0.50005 0 1 0 7.328125 10.400391 L 14.228516 10.400391 A 0.50005 0.50005 0 1 0 14.228516 9.4003906 L 7.328125 9.4003906 z"></path>
  </svg>
);

const gfgIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="24px"
    height="24px"
    fill="currentColor"
  >
    <path
      d="M29.035,24C29.014,23.671,29,23.339,29,23c0-6.08,2.86-10,7-10c3.411,0,6.33,2.662,7,7l2,0l0.001-9L43,11
      c0,0-0.533,1.506-1,1.16c-1.899-1.066-3.723-1.132-6.024-1.132C30.176,11.028,25,16.26,25,22.92c0,0.364,0.021,0.723,0.049,1.08
      h-2.099C22.979,23.643,23,23.284,23,22.92c0-6.66-5.176-11.892-10.976-11.892c-2.301,0-4.125,0.065-6.024,1.132
      C5.533,12.506,5,11,5,11l-2.001,0L3,20l2,0c0.67-4.338,3.589-7,7-7c4.14,0,7,3.92,7,10c0,0.339-0.014,0.671-0.035,1H0v2h1.009
      c1.083,0,1.977,0.861,1.999,1.943C3.046,29.789,3.224,32.006,4,33c1.269,1.625,3,3,8,3c5.022,0,9.92-4.527,11-10h2
      c1.08,5.473,5.978,10,11,10c5,0,6.731-1.375,8-3c0.776-0.994,0.954-3.211,0.992-5.057C45.014,26.861,45.909,26,46.991,26H48v-2
      H29.035z M11.477,33.73C9.872,33.73,7.322,33.724,7,32c-0.109-0.583-0.091-2.527-0.057-4.046C6.968,26.867,7.855,26,8.943,26H19
      C18.206,30.781,15.015,33.73,11.477,33.73z M41,32c-0.322,1.724-2.872,1.73-4.477,1.73c-3.537,0-6.729-2.949-7.523-7.73h10.057
      c1.088,0,1.975,0.867,2,1.954C41.091,29.473,41.109,31.417,41,32z"
    ></path>
  </svg>
);

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
    href: "https://www.instagram.com/chinmay__bhoir",
    bgColor: "bg-pink-500",
    hoverColor: "hover:bg-pink-600",
    iconClass: "fab fa-instagram",
    text: "Instagram",
  },
  {
    href: "https://leetcode.com/u/Chinmay2660/",
    bgColor: "bg-orange-400",
    hoverColor: "hover:bg-orange-500",
    customIcon: leetcodeIcon,
    text: "LeetCode",
  },
  {
    href: "https://www.geeksforgeeks.org/user/chinmay2660/",
    bgColor: "bg-teal-500",
    hoverColor: "hover:bg-teal-600",
    customIcon: gfgIcon,
    text: "GeeksforGeeks",
  },
  {
    href: "https://www.hackerrank.com/profile/Chinmay2660",
    bgColor: "bg-green-500",
    hoverColor: "hover:bg-green-600",
    iconClass: "fab fa-hackerrank",
    text: "HackerRank",
  },
];

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto flex flex-col items-center mt-28 pt-16 pb-0 px-4 md:px-8 border border-gray-700 rounded-lg bg-primary text-gray-200 shadow-lg">
      <div className="flex flex-col md:flex-row items-center w-full">
        <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-8 ml-10">
          <img
            src="https://github.com/Chinmay2660.png"
            alt="Chinmay Bhoir"
            className="w-72 h-72 rounded-full border-4 border-gray-700 shadow-lg"
          />
        </div>

        <div className="flex flex-col justify-center md:max-w-xl ml-10">
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
                {button.customIcon ? (
                  button.customIcon
                ) : (
                  <i className={`${button.iconClass}`}></i>
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
