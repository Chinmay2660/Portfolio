"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { spring, itemFadeInUp, staggerContainer, fadeInScale, buttonHover, buttonTap, iconButtonHover, iconButtonTap } from "@/lib/motion";

const Contact = () => {
  return (
    <section className="w-full max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 box-border">
      <motion.div
        className="rounded-3xl border border-border/60 bg-card/80 dark:bg-card/90 backdrop-blur-sm shadow-soft dark:shadow-soft-dark overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={itemFadeInUp}
      >
        <div className="p-6 sm:p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8 min-w-0">
          <div className="flex-1 text-center md:text-left w-full">
            <motion.h2
              className="text-2xl font-bold text-foreground tracking-tight"
              variants={itemFadeInUp}
            >
              Get in touch
            </motion.h2>
            <motion.p
              className="mt-2 text-muted text-sm md:text-base max-w-md mx-auto md:mx-0"
              variants={itemFadeInUp}
            >
              Open to full-time opportunities. If you’re hiring or have a role that fits, I’d love to connect.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 w-full md:w-auto md:shrink-0 justify-center items-center md:justify-end"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.a
              href="mailto:bhoirchinmay2014@gmail.com"
              className="effect-btn-shine inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-accent hover:opacity-95 transition-all duration-200 ease-out shadow-glow-sm"
              variants={fadeInScale}
              whileHover={buttonHover}
              whileTap={buttonTap}
            >
              Send email
            </motion.a>
            <motion.div className="flex gap-2 justify-center" variants={fadeInScale}>
              <Link
                href="/Chinmay_Bhoir_3_YOE_Frontend_Developer_Reactjs_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-foreground border border-border hover:border-accent/50 dark:hover:border-accent/70 hover:bg-accent-soft-hover transition-all duration-200 ease-out"
              >
                View resume
              </Link>
              <motion.a
                href="/Chinmay_Bhoir_3_YOE_Frontend_Developer_Reactjs_Resume.pdf"
                download
className="inline-flex items-center justify-center w-11 h-11 rounded-xl text-foreground border border-border hover:border-accent/50 dark:hover:border-accent/70 hover:bg-accent-soft-hover transition-all duration-200 ease-out"
              whileHover={iconButtonHover}
              whileTap={iconButtonTap}
                aria-label="Download resume"
              >
                <i className="fas fa-download" aria-hidden />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
