"use client";

import Image from "next/image";
import { useMemo } from "react";
import Skills from "./Skills";
import JourneySection from "./Journey";
import { arrayCheck, heroSocialLinks, leetcodeIcon, gfgIcon } from "@/utils";
import { motion } from "framer-motion";
import { spring, fadeInUp, fadeInUpStagger, staggerContainer, fadeInScale, iconButtonHover, iconButtonTap } from "@/lib/motion";
import { SECTION_MAX_WIDTH } from "@/lib/constants";

const Hero = () => {
  const socialButtons = useMemo(
    () =>
      heroSocialLinks.map((s) => ({
        href: s.link,
        iconClass: s.icon,
        label: s.label ?? s.name,
        customIcon: s.link.includes("leetcode") ? leetcodeIcon : s.link.includes("geeksforgeeks") ? gfgIcon : undefined,
      })),
    []
  );
  return (
    <section className={`w-full ${SECTION_MAX_WIDTH} mx-auto mt-20 lg:mt-24 pt-8 pb-6 px-4 sm:px-6 md:px-8 box-border`} id="home">
      <motion.div
        className="flex flex-col md:flex-row items-center gap-12 md:gap-16 min-w-0 w-full"
        initial="hidden"
        animate="visible"
        variants={fadeInUpStagger}
      >
        <motion.div
          className="flex flex-col justify-center text-center md:text-left flex-1 min-w-0 w-full order-2 md:order-1 items-center md:items-start"
          variants={staggerContainer}
        >
          <motion.span
            className="inline-block w-fit text-xs font-semibold tracking-wider text-accent uppercase mb-3 px-3 py-1 rounded-full bg-accent-soft border border-accent/20 mx-auto md:mx-0"
            variants={fadeInUp}
          >
            Frontend Software Engineer
          </motion.span>
          <motion.h1
            className="text-display font-bold tracking-tight text-foreground mb-4 break-words"
            variants={fadeInUp}
          >
            Chinmay Bhoir
          </motion.h1>
          <motion.p
            className="text-muted text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto md:mx-0"
            variants={fadeInUp}
          >
            3.5+ years building high-performance, responsive web applications with React, Next.js, and TypeScript. Focused on clean code and Agile delivery.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-3 justify-center md:justify-start"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {arrayCheck(socialButtons) &&
              socialButtons.map((btn) => (
                <motion.a
                  key={btn.href}
                  href={btn.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center w-11 h-11 rounded-xl bg-card border border-border/80 text-foreground/80 shadow-soft dark:shadow-soft-dark hover:text-accent hover:border-accent/50 dark:hover:border-accent/70 hover:bg-accent-soft-hover hover:shadow-glow-sm transition-all duration-200 ease-out"
                  variants={fadeInScale}
                  whileHover={iconButtonHover}
                  whileTap={iconButtonTap}
                  aria-label={btn.label}
                  title={btn.label}
                >
                  <span className="flex items-center justify-center [&>svg]:w-5 [&>svg]:h-5">
                    {btn.customIcon ?? <i className={`${btn.iconClass} text-xl`} aria-hidden />}
                  </span>
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1.5 text-xs font-medium text-foreground bg-card dark:bg-card border border-border rounded-lg shadow-soft dark:shadow-soft-dark whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 z-10">
                    {btn.label}
                  </span>
                </motion.a>
              ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="flex-shrink-0 order-1 md:order-2"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="relative rounded-3xl overflow-hidden w-48 h-48 md:w-56 md:h-56 shrink-0"
            whileHover={{ scale: 1.02, y: -1, transition: spring.snappy }}
            whileTap={{ scale: 0.99 }}
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-accent opacity-20 blur-xl scale-95" aria-hidden />
            <div className="relative rounded-3xl p-1 bg-gradient-to-br from-accent/30 to-transparent">
              <Image
                src="https://github.com/Chinmay2660.png"
                alt="Chinmay Bhoir - Frontend Software Engineer"
                width={224}
                height={224}
                sizes="(max-width: 768px) 192px, 224px"
                priority
                className="w-full h-full object-cover rounded-[1.25rem] border-2 border-border/60 shadow-soft dark:shadow-soft-dark"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-8 rounded-3xl bg-card/80 dark:bg-card/90 backdrop-blur-sm shadow-soft dark:shadow-soft-dark overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...spring.smooth, delay: 0.1 }}
      >
        <div className="p-5 md:p-6">
          <Skills />
          <JourneySection />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
