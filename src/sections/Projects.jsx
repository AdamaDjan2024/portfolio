import { portfolioProjects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  const deliveredProjects = portfolioProjects.filter((project) => !project.isInProgress);
  const inProgressProjects = portfolioProjects.filter((project) => project.isInProgress);

  return (
    <section id="projects" aria-label="Projets réalisés">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-lightest lg:sr-only">
          Projets
        </h2>
      </div>

      <ul className="group/list">
        {deliveredProjects.map((project) => (
          <li key={project.id} className="mb-12">
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>

      {inProgressProjects.length > 0 && (
        <div className="mt-16">
          <h3 className="mb-8 text-sm font-semibold uppercase tracking-widest text-lightest">
            En cours
          </h3>
          <ul className="group/list">
            {inProgressProjects.map((project) => (
              <li key={project.id} className="mb-12">
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-12">
        <a
          className="inline-flex items-center font-semibold leading-tight text-lightest group"
          aria-label="Voir l'archive des projets"
          href="/projects"
        >
          <span className="relative pb-px transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 group-hover:after:w-full">
            Voir l&apos;archive des projets
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 11-1.04-1.08l4.158-3.92H3.75A.75.75 0 013 10z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
