'use client'
import ProjectSection from "@/components/ProjectSection";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { spring } from "@/lib/motion";

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
        initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
        animate={
          isHomeInView
            ? { opacity: 1, y: 0, filter: "blur(0px)" }
            : { opacity: 0, y: 32, filter: "blur(8px)" }
        }
        transition={spring.smooth}
      >
        <Hero />
      </motion.section>
      <motion.section
        ref={projectsRef}
        id="projects"
        initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
        animate={
          isProjectsInView
            ? { opacity: 1, y: 0, filter: "blur(0px)" }
            : { opacity: 0, y: 32, filter: "blur(8px)" }
        }
        transition={spring.smooth}
      >
        <ProjectSection />
      </motion.section>
      <motion.section
        ref={contactRef}
        id="contact"
        initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
        animate={
          isContactInView
            ? { opacity: 1, y: 0, filter: "blur(0px)" }
            : { opacity: 0, y: 32, filter: "blur(8px)" }
        }
        transition={spring.smooth}
      >
        <Contact />
      </motion.section>
    </>
  );
}
