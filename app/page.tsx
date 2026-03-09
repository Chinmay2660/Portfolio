"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { spring } from "@/lib/motion";

const ProjectSection = dynamic(() => import("@/components/ProjectSection"), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: true });

export default function Home() {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const isHomeInView = useInView(homeRef, { once: true, margin: "-80px" });
  const isProjectsInView = useInView(projectsRef, { once: true, margin: "-80px" });
  const isContactInView = useInView(contactRef, { once: true, margin: "-80px" });

  return (
    <>
      <motion.section
        ref={homeRef}
        id="home"
        initial={{ opacity: 0, y: 24 }}
        animate={isHomeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={spring.smooth}
      >
        <Hero />
      </motion.section>
      <motion.section
        ref={projectsRef}
        id="projects"
        initial={{ opacity: 0, y: 24 }}
        animate={isProjectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={spring.smooth}
      >
        <ProjectSection />
      </motion.section>
      <motion.section
        ref={contactRef}
        id="contact"
        initial={{ opacity: 0, y: 24 }}
        animate={isContactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={spring.smooth}
      >
        <Contact />
      </motion.section>
    </>
  );
}
