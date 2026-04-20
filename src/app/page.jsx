import DownloadCvButton from "@/components/DownloadCvButton";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import SideNav from "@/components/SideNav";
import SpotlightBackground from "@/components/SpotlightBackground";
import { portfolioProjects } from "@/data/projects";
import siteData from "@/data/site.json";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function HomePage() {
  const deliveredProjects = portfolioProjects.filter((project) => !project.isInProgress);
  const inProgressProjects = portfolioProjects.filter((project) => project.isInProgress);

  const navItems = [
    { id: "about", label: "À propos" },
    { id: "experience", label: "Expérience" },
    { id: "projects", label: "Projets" },
  ];

  const experiences = [
    {
      year: "2020",
      title: "Fin de licence",
      description:
        "Licence en génie informatique obtenue à l'Université Mahatma Gandhi",
      details: [
        "Diplômes : Développement, Analyse et Gestion de projets informatiques.",
        "Compétences acquises : MySQL, C, C++, SQL, HTML/CSS, JavaScript.",
      ],
      tags: ["MySQL", "C", "C++", "SQL", "HTML/CSS", "JavaScript"],
    },
    {
      year: "2021-2022",
      title: "Calcaire Technologies",
      description: "Début professionnel en tant que promoteur et commerciale",
      details: [
        "Missions : Promotion des produits, support client, gestion des ventes, identification de clients, suivi des contrats.",
        "Compétences acquises : Relation client, négociation, organisation, communication commerciale.",
      ],
      tags: ["Relation client", "Négociation", "Organisation"],
    },
    {
      year: "2023",
      title: "Formation & Expériences",
      description: "Formation web & commerciale + assistante commerciale",
      details: [
        "Formation : Orange Digital, Canva, Figma, Leadership, Design Thinking.",
        "Expériences : Développeuse commerciale, stagiaire assistante commerciale.",
        "Compétences acquises : Communication, planification, relation client, gestion de projet.",
      ],
      tags: ["Figma", "Design Thinking", "Gestion de projet"],
    },
    {
      year: "2024",
      title: "Front-End Developer",
      description: "Formation à Nimba Hub",
      details: [
        "Missions : Devenir développeur front-end de A à Z, en créant des interfaces web, en intégrant des designs et en optimisant l’expérience utilisateur.",
        "Technologies : HTML, CSS, JavaScript, React, Tailwind CSS, Git, Bootstrap.",
      ],
      tags: ["React", "Tailwind CSS", "Git"],
    },
    {
      year: "2025",
      title: "Stage Mansa Digitale",
      description: "Stage de développeur Front-End",
      details: [
        "Technologies utilisées : Next.js, React, Tailwind CSS, Docker, Git.",
        "Compétences acquises : Conception et intégration d’interfaces web, gestion de la logique fonctionnelle du code, accessibilité, optimisation du rendu et performance.",
      ],
      tags: ["Next.js", "React", "Tailwind CSS", "Docker", "Git"],
    },
  ];

  return (
    <main className="relative lg:h-screen lg:overflow-hidden">
      <SpotlightBackground />

      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-slate-900 focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-100"
      >
        Aller au contenu
      </a>

      <div className="page-shell py-10 sm:py-14 lg:h-screen lg:py-0">
        <div className="lg:grid lg:h-full lg:grid-cols-[minmax(320px,460px),1fr] lg:gap-20 xl:gap-24">
          <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-start lg:py-14">
            <Reveal className="max-w-xl">
              <h1 className="text-[40px] sm:text-[42px] lg:text-[44px] leading-[1.08] font-extrabold tracking-[-0.02em] text-slate-50 max-w-full [overflow-wrap:anywhere]">
                {siteData.fullName}
              </h1>
              <p className="mt-4 text-[clamp(1.05rem,0.88rem+0.55vw,1.35rem)] font-semibold text-slate-200">
                {siteData.title}
              </p>
              <p className="body-md mt-6 max-w-md text-slate-200/70">
                Créative et engagée dans la création de projets utiles et innovants.
                J’intègre des maquettes en interfaces Next.js/Tailwind avec une attention
                à l’accessibilité, au responsive et aux détails.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <DownloadCvButton />
              </div>

              <SideNav items={navItems} scrollContainerId="content-scroll" />

              <div className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-300/80">
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-200/80" />
                  {siteData.location}
                </span>
                <span className="text-white/15">/</span>
                <a href={`mailto:${siteData.email}`} className="interactive-link">
                  {siteData.email}
                </a>
              </div>

              <div className="mt-8 flex items-center gap-4 text-sm font-semibold text-slate-200/80">
                <a
                  href={siteData.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-cyan-200/45 hover:text-cyan-100"
                  aria-label="Profil GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href={siteData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-cyan-200/45 hover:text-cyan-100"
                  aria-label="Profil LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href={siteData.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-cyan-200/45 hover:text-cyan-100"
                  aria-label="Profil X"
                >
                  <FaXTwitter />
                </a>
              </div>
            </Reveal>
          </header>

          <div id="content-scroll" className="mt-12 scroll-smooth lg:mt-0 lg:h-screen lg:overflow-y-auto lg:py-14 lg:pr-2 lg:pl-6 scrollbar-none lg:[&>section:first-of-type]:pt-0">
            <Section id="about" title="À propos">
              <p>
                Développeuse web passionnée par la création de{" "}
                <span className="font-semibold text-slate-100">
                  sites modernes, intuitifs et centrés sur l’utilisateur
                </span>
                . Diplômée en génie informatique, j&apos;intègre des maquettes
                Figma en interfaces Next.js et Tailwind CSS avec une attention
                particulière au responsive, à l&apos;accessibilité et à la
                lisibilité. J’aime transformer des idées en expériences digitales
                mémorables.
              </p>
              <p className="mt-5 italic text-slate-300/80">
                &ldquo;Créer des expériences web qui allient esthétisme et
                performance est ma passion.&rdquo;
              </p>
            </Section>

            <Section id="experience" title="Expérience">
              <ol className="space-y-4">
                {experiences.map((item, index) => (
                  <li
                    key={`${item.year}-${item.title}`}
                    className="group relative rounded-xl p-5 transition-transform duration-300 hover:-translate-y-0.5"
                    style={{ transitionDelay: `${index * 35}ms` }}
                  >
                    <div
                      aria-hidden="true"
                      className={[
                        "pointer-events-none absolute -inset-x-4 -inset-y-4 hidden rounded-xl opacity-0 transition",
                        "lg:block",
                        "lg:group-hover:opacity-100",
                        "bg-slate-800/40",
                        "ring-1 ring-inset ring-white/10",
                        "shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)]",
                      ].join(" ")}
                    />
                    <header className="flex flex-wrap items-baseline justify-between gap-3">
                      <span className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-500">
                        {item.year}
                      </span>
                      <h3 className="group/title inline-flex items-center gap-2 text-base font-semibold text-slate-100">
                        <span className="transition-colors duration-300 group-hover:text-cyan-100">
                          {item.title}
                        </span>
                        <span
                          aria-hidden="true"
                          className="text-slate-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan-100"
                        >
                          ↗
                        </span>
                      </h3>
                    </header>
                    <p className="mt-3 text-sm text-slate-200/70">
                      {item.description}
                    </p>
                    {Array.isArray(item.details) && item.details.length ? (
                      <ul className="mt-4 space-y-2 text-sm text-slate-200/70">
                        {item.details.map((d) => (
                          <li key={d} className="flex gap-3">
                            <span
                              className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-200/70"
                              aria-hidden="true"
                            />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    {Array.isArray(item.tags) && item.tags.length ? (
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {item.tags.slice(0, 10).map((t) => (
                          <li
                            key={t}
                            className="inline-flex items-center rounded-full bg-slate-900/60 px-3 py-1 text-xs font-medium text-cyan-200/80 ring-1 ring-inset ring-cyan-300/10"
                          >
                            {t}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ))}
              </ol>
            </Section>

            <Section id="projects" title="Projets">
              <div className="grid gap-4">
                {deliveredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
              {inProgressProjects.length ? (
                <div className="mt-10 border-t border-white/10 pt-8">
                  <p className="section-title">Projet en cours</p>
                  <div className="mt-4 grid gap-4">
                    {inProgressProjects.map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </div>
                </div>
              ) : null}
              <div className="mt-8">
                <a
                  href="/projects"
                  className="group interactive-link text-sm font-semibold"
                >
                  Voir tous les projets{" "}
                  <span
                    aria-hidden="true"
                    className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </div>
            </Section>

            <footer className="py-10 text-xs text-slate-400">
              © {new Date().getFullYear()} {siteData.fullName}. Tous droits
              réservés.
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
}
