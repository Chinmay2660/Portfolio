import ProjectSection from "@/components/ProjectSection";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="projects">
        <ProjectSection />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}