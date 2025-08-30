import Link from "next/link";
import { FC } from "react";
import { motion } from "framer-motion";

const Contact: FC = () => {
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
    <section className="max-w-7xl mx-4 md:mx-4 lg:mx-auto flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 justify-between bg-primary border border-gray-700 rounded-lg p-6 md:p-8 shadow-lg text-gray-200">
      <motion.div
        className="flex-1 text-center md:text-left lg:text-left"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.h2
          className="text-2xl md:text-3xl font-bold"
          variants={itemVariants}
        >
          Hit me with an email
        </motion.h2>
        <motion.p className="mt-4 text-md md:text-lg" variants={itemVariants}>
          Got a project idea or want to collaborate? Feel free to reach out!
        </motion.p>
      </motion.div>

      <motion.div
        className="flex flex-col gap-4 w-full md:w-auto"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1, delay: 0.1 }}
      >
        <motion.a
          href="mailto:bhoirchinmay2014@gmail.com"
          className="text-center md:text-left text-lg text-gray-200 bg-transparent shadow-lg border border-gray-700 hover:border-gray-600 px-6 py-3 rounded-lg flex items-center justify-center md:justify-start hover:bg-gray-700 hover:text-white transition-all duration-300"
          variants={buttonVariants}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Email
        </motion.a>

        <motion.div
          className="flex flex-row items-center justify-between gap-4"
          variants={buttonVariants}
        >
          <motion.div variants={buttonVariants}>
            <Link
              href="/Chinmay_Bhoir_3_YOE_Frontend_Developer_Reactjs_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              locale={false}
              className="text-lg text-gray-200 bg-transparent shadow-lg border border-gray-700 hover:border-gray-600 px-6 py-3 rounded-lg flex items-center justify-center hover:bg-gray-700 hover:text-white transition-all duration-300"
            >
              View Resume
            </Link>
          </motion.div>

          <motion.a
            href="/Chinmay_Bhoir_3_YOE_Frontend_Developer_Reactjs_Resume.pdf"
            download
            className="text-lg text-gray-200 bg-transparent shadow-lg border border-gray-700 hover:border-gray-600 px-6 py-3 rounded-lg flex items-center justify-center hover:bg-gray-700 hover:text-white transition-all duration-300"
            variants={buttonVariants}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-download text-lg"></i>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
