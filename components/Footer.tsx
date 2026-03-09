"use client";

import { arrayCheck, socialLinks } from "@/utils";
import { motion } from "framer-motion";
import { SECTION_MAX_WIDTH } from "@/lib/constants";
import { spring, staggerContainer, fadeInScale, iconButtonHover, iconButtonTap } from "@/lib/motion";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-primary/50 mt-8 py-5">
      <div className={`w-full ${SECTION_MAX_WIDTH} mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 box-border`}>
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
                className="group relative text-muted hover:text-accent transition-all duration-200 ease-out"
                aria-label={social.name}
                title={social.name}
                variants={fadeInScale}
                whileHover={iconButtonHover}
                whileTap={iconButtonTap}
              >
                <i className={`${social.icon} text-xl`} aria-hidden />
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1.5 text-xs font-medium text-foreground bg-card dark:bg-card border border-border rounded-lg shadow-soft dark:shadow-soft-dark whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 z-10">
                  {social.name}
                </span>
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
