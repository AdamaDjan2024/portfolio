import Hero from "@/sections/Hero";
import AboutSection from "@/sections/About";
import Skills from "@/sections/Skills";
import ExperienceSection from "@/sections/Experience";
import Projects from "@/sections/Projects";
import ContactSection from "@/sections/Contact";

export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <AboutSection />
      <Skills />
      <ExperienceSection />
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </main>
  );
}
