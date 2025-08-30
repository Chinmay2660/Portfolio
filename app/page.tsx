'use client'
import ProjectSection from "@/components/ProjectSection";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const isHomeInView = useInView(homeRef, { once: true, margin: "-50px" });
  const isProjectsInView = useInView(projectsRef, { once: true, margin: "-50px" });
  const isContactInView = useInView(contactRef, { once: true, margin: "-50px" });

  return (
    <>
      <motion.section
        ref={homeRef}
        id="home"
        initial={{ opacity: 0, y: 30 }}
        animate={isHomeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Hero />
      </motion.section>
      <motion.section
        ref={projectsRef}
        id="projects"
        initial={{ opacity: 0, y: 30 }}
        animate={isProjectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <ProjectSection />
      </motion.section>
      <motion.section
        ref={contactRef}
        id="contact"
        initial={{ opacity: 0, y: 30 }}
        animate={isContactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Contact />
      </motion.section>
    </>
  );
}
