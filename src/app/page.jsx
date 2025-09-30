
import Hero from "@/sections/Hero";
import AboutPage from "./about/page";
import Skills from "@/sections/Skills";
import Experience from "@/sections/Experience";

import Projects from "@/sections/Projects";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPage />
      <Skills /> 
      {/* <Experience /> */}
    
      <Projects />
    </>
  );
}
