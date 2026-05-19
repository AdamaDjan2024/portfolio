import { portfolioProjects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <div>
      <ul className="group/list">
        {portfolioProjects.map((project) => (
          <li key={project.id} className="mb-12">
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
      <div className="mt-12">
        <a
          className="inline-flex items-center font-medium leading-tight text-lightest group"
          aria-label="Voir tous les projets"
          href="/projects"
        >
          <span>
            <span className="border-b border-transparent pb-px transition group-hover:border-accent motion-reduce:transition-none">
              Voir tous les projets
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="ml-1.5 inline-block h-5 w-5 shrink-0 -translate-y-px transition-transform duration-300 ease-out group-hover:translate-x-2.5 group-focus-visible:translate-x-2.5 motion-reduce:transition-none"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 11-1.04-1.08l4.158-3.92H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
}
