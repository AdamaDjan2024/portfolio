import Hero from "@/sections/Hero";
import AboutPage from "./about/page";
import Skills from "@/sections/Skills";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import ContactPage from "./contact/page"; // ← import de ta page Contact

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPage />
      <Skills />
      <Experience />
      {/* <Projects /> */}
      <ContactPage /> {/* ← affichage de la section Contact */}
    </>
  );
}
