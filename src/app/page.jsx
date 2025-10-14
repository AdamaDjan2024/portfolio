import Hero from "@/sections/Hero";
import AboutPage from "./about/page";
import Skills from "@/sections/Skills";
import Timeline from "@/sections/Experience";
import Projects from "@/sections/Projects";
import ContactPage from "./contact/page";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPage />
      <Skills />
      <Timeline /> {/* ✅ La frise chronologique */}
      <Projects />
      <ContactPage />
    </>
  );
}
