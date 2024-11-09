import { FC } from "react";

const Contact: FC = () => {
  return (
    <section className="max-w-7xl mx-auto flex flex-col space-x-4 md:flex-row justify-between bg-primary border border-gray-700 rounded-lg p-8 shadow-lg text-gray-200">
      <div className="flex-1 mb-8 md:mb-0">
        <h2 className="text-3xl font-bold">Hit me with an email</h2>
        <p className="mt-4 text-lg">
          Got a project idea or want to collaborate? Feel free to reach out!
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <a
          href="mailto:bhoirchinmay2014@gmail.com"
          className="text-lg text-gray-200 bg-transparent  shadow-lg border border-gray-700 hover:border-gray-600 px-6 py-3 rounded-lg flex items-center hover:bg-gray-700 hover:text-white transition-all duration-300"
        >
          Send Email
        </a>

        <div className="flex items-center justify-between gap-2">
          <a
            href="/path-to-your-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-gray-200 bg-transparent  shadow-lg border border-gray-700 hover:border-gray-600 px-6 py-3 rounded-lg flex items-center hover:bg-gray-700 hover:text-white transition-all duration-300"
          >
            View Resume
          </a>

          <a
            href="/path-to-your-resume.pdf"
            download="Chinmay_Bhoir_SDE.pdf"
            className="text-lg text-gray-200 bg-transparent  shadow-lg border border-gray-700 hover:border-gray-600 px-6 py-3 rounded-lg flex items-center hover:bg-gray-700 hover:text-white transition-all duration-300"
          >
            <i className="fas fa-download text-lg"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
