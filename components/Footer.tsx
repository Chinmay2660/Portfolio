'use client'
import { arrayCheck, socialLinks } from "../utils/utils";
import { motion } from "framer-motion";

const Footer = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const socialVariants = {
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
    <footer className="max-w-7xl mx-auto bg-primary text-white py-10">
      <div className="container mx-auto text-center space-y-6">
        <motion.div
          className="flex justify-center space-x-6"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1 }}
        >
          {arrayCheck(socialLinks) &&
            socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 transition duration-300"
                aria-label={social.name}
                variants={socialVariants}
                whileHover={{
                  scale: 1.2,
                  y: -3,
                  color: "#3b82f6"
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <i className={`${social.icon} text-2xl`}></i>
              </motion.a>
            ))}
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
        >
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
