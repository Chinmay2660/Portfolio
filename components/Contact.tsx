import { FC } from "react";

const Contact: FC = () => {
  return (
    <section className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between bg-primary border border-gray-700 rounded-lg p-8 shadow-lg text-gray-200">
      <div className="flex-1 mb-8 md:mb-0">
        <h2 className="text-3xl font-bold">Hit me with an email</h2>
        <p className="mt-4 text-lg">
          Got a project idea or want to collaborate? Feel free to reach out!
        </p>
      </div>

      <div className="flex flex-col space-x-4">
        <a
          href="mailto:your-email@example.com"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300"
        >
          Send Email
        </a>

        <div className="flex items-center">
          <a
            href="/path-to-your-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition duration-300"
          >
            View Resume
          </a>

          <a
            href="/path-to-your-resume.pdf"
            download="Chinmay_Bhoir_Resume.pdf"
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg flex items-center transition duration-300"
          >
            <i className="fas fa-download text-lg"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
