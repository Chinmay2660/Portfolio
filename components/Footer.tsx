"use client";

const Footer = () => {
  const socialLinks = [
    {
      name: "Github",
      link: "https://github.com/chinmay2660",
      icon: "fa-brands fa-github",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/chinmay2660/",
      icon: "fa-brands fa-linkedin",
    },
    {
      name: "Twitter",
      link: "https://twitter.com/ChinmayBhoir14",
      icon: "fa-brands fa-twitter",
    },
  ];

  return (
    <footer className=" max-w-7xl mx-auto bg-primary text-white py-10">
      <div className="container mx-auto text-center space-y-6">
        <div className="flex justify-center space-x-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition duration-300"
              aria-label={social.name}
            >
              <i className={`${social.icon} text-2xl`}></i>
            </a>
          ))}
        </div>
        <p>
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;