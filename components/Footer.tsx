"use client";

import { arrayCheck, socialLinks } from "../utils/utils";
import { motion } from "framer-motion";
import { spring, staggerContainer, fadeInScale, iconButtonHover, iconButtonTap } from "@/lib/motion";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-primary/50 mt-12 py-6">
      <div className="w-full max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 box-border">
        <motion.div
          className="flex gap-5"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {arrayCheck(socialLinks) &&
            socialLinks.map((social, index) => (
              <motion.a
                key={social.link}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-all duration-200 ease-out"
                aria-label={social.name}
                variants={fadeInScale}
                whileHover={iconButtonHover}
                whileTap={iconButtonTap}
              >
                <i className={`${social.icon} text-lg`} aria-hidden />
              </motion.a>
            ))}
        </motion.div>
        <motion.p
          className="text-muted text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...spring.gentle, delay: 0.05 }}
        >
          © {new Date().getFullYear()} Chinmay Bhoir
        </motion.p>
      </div>
    </footer>
  );
}
