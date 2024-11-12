import Link from "next/link";
import { FC } from "react";

const Contact: FC = () => {
  return (
    <section className="max-w-7xl mx-4 md:mx-4 lg:mx-auto flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 justify-between bg-primary border border-gray-700 rounded-lg p-6 md:p-8 shadow-lg text-gray-200">
      <div className="flex-1 text-center md:text-left lg:text-left">
        <h2 className="text-2xl md:text-3xl font-bold">Hit me with an email</h2>
        <p className="mt-4 text-md md:text-lg">
          Got a project idea or want to collaborate? Feel free to reach out!
        </p>
      </div>

      <div className="flex flex-col gap-4 w-full md:w-auto">
        <a
          href="mailto:bhoirchinmay2014@gmail.com"
          className="text-center md:text-left text-lg text-gray-200 bg-transparent shadow-lg border border-gray-700 hover:border-gray-600 px-6 py-3 rounded-lg flex items-center justify-center md:justify-start hover:bg-gray-700 hover:text-white transition-all duration-300"
        >
          Send Email
        </a>

        <div className="flex flex-row items-center justify-between gap-4">
          <Link
            href="/Chinmay_Bhoir_SDE_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            locale={false} 
            className="text-lg text-gray-200 bg-transparent shadow-lg border border-gray-700 hover:border-gray-600 px-6 py-3 rounded-lg flex items-center justify-center hover:bg-gray-700 hover:text-white transition-all duration-300"
          >
            View Resume
          </Link>

          <a
            href="/Chinmay_Bhoir_SDE_Resume.pdf"
            download
            className="text-lg text-gray-200 bg-transparent shadow-lg border border-gray-700 hover:border-gray-600 px-6 py-3 rounded-lg flex items-center justify-center hover:bg-gray-700 hover:text-white transition-all duration-300"
          >
            <i className="fas fa-download text-lg"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
