import SpotlightBackground from "@/components/SpotlightBackground";
import SideNav from "@/components/SideNav";
import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import siteData from "@/data/site.json";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function HomePage() {
  const navItems = [
    { id: "about", label: "À propos" },
    { id: "experience", label: "Expérience" },
    { id: "projects", label: "Projets" },
  ];

  return (
    <div className="relative">
      <SpotlightBackground />

      <div className="page-shell lg:flex lg:justify-between lg:gap-4">
        <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-lightest sm:text-5xl">
              <a href="/">{siteData.fullName}</a>
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-lightest sm:text-xl">
              {siteData.title}
            </h2>
            <p className="mt-4 max-w-xs leading-normal text-slate">
              Je conçois des interfaces web accessibles, modernes et centrées sur l&apos;utilisateur.
            </p>

            <SideNav items={navItems} />
          </div>

          <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social media">
            <li>
              <a
                href={siteData.github}
                target="_blank"
                rel="noreferrer"
                className="block text-slate hover:text-lightest"
                aria-label="GitHub"
              >
                <FaGithub className="h-6 w-6" />
              </a>
            </li>
            <li>
              <a
                href={siteData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="block text-slate hover:text-lightest"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="h-6 w-6" />
              </a>
            </li>
            <li>
              <a
                href={siteData.twitter}
                target="_blank"
                rel="noreferrer"
                className="block text-slate hover:text-lightest"
                aria-label="Twitter"
              >
                <FaXTwitter className="h-6 w-6" />
              </a>
            </li>
          </ul>
        </header>

        <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
          <section
            id="about"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="À propos de moi"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-lightest lg:sr-only">
                À propos
              </h2>
            </div>
            <About />
          </section>

          <section
            id="experience"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Expérience professionnelle"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-lightest lg:sr-only">
                Expérience
              </h2>
            </div>
            <Experience />
          </section>

          <section
            id="projects"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Projets réalisés"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-lightest lg:sr-only">
                Projets
              </h2>
            </div>
            <Projects />
          </section>

          <footer className="max-w-md pb-16 text-sm text-darkslate sm:pb-0">
            <p>
              Codé sur <span className="text-slate">Visual Studio Code</span>. 
              Construit avec <span className="text-slate">Next.js</span> et 
              <span className="text-slate"> Tailwind CSS</span>, déployé sur 
              <span className="text-slate"> Vercel</span>.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
