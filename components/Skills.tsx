"use client";

import { arrayCheck, skillCategories } from "@/utils";
import { motion } from "framer-motion";
import { spring, staggerContainer, itemFadeInUp, pillHover, pillTap } from "@/lib/motion";

const SkillPill = ({
  name,
  index,
}: {
  name: string;
  index: number;
}) => (
  <motion.span
    className="px-3.5 py-2 rounded-xl text-sm font-medium text-foreground/90 bg-accent-soft/50 dark:bg-accent-soft/30 border border-border/60 hover:border-accent/40 dark:hover:border-accent/60 hover:bg-accent-soft-hover transition-all duration-200 ease-out cursor-default"
    variants={itemFadeInUp}
    initial="hidden"
    animate="visible"
    transition={{ ...spring.gentle, delay: index * 0.015 }}
    whileHover={pillHover}
    whileTap={pillTap}
  >
    {name}
  </motion.span>
);

const SkillBlock = ({
  title,
  items,
  delay = 0,
}: {
  title: string;
  items: string[];
  delay?: number;
}) => (
  <motion.div
    className="flex flex-col gap-3"
    variants={staggerContainer}
    initial="hidden"
    animate="visible"
    transition={{ delayChildren: delay }}
  >
    <motion.h3
      className="text-xs font-semibold text-accent uppercase tracking-wider"
      variants={itemFadeInUp}
    >
      {title}
    </motion.h3>
    <motion.div
      className="flex flex-wrap gap-2"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {arrayCheck(items) &&
        items.map((name, index) => (
          <SkillPill key={`${title}-${index}`} name={name} index={index} />
        ))}
    </motion.div>
  </motion.div>
);

const Skills = () => {
  return (
    <motion.section
      className="mb-6"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={spring.gentle}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {arrayCheck(skillCategories) &&
          skillCategories.map((category, i) => (
            <SkillBlock
              key={category.title}
              title={category?.title ?? ""}
              items={category?.items ?? []}
              delay={i * 0.03}
            />
          ))}
      </div>
    </motion.section>
  );
};

export default Skills;
