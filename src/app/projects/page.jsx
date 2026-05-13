import SpotlightBackground from "@/components/SpotlightBackground";
import { portfolioProjects } from "@/data/projects";
import Link from "next/link";

export default function ProjectsPage() {
  const allProjects = [...portfolioProjects].sort((a, b) => {
    if (a.isInProgress && !b.isInProgress) return -1;
    if (!a.isInProgress && b.isInProgress) return 1;
    return 0;
  });

  return (
    <main className="relative min-h-screen">
      <SpotlightBackground />

      <div className="page-shell py-12 lg:py-24">
        <Link
          href="/"
          className="group mb-2 inline-flex items-center font-semibold leading-tight text-accent"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-2"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.92a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
              clipRule="evenodd"
            />
          </svg>
          Adama Dian
        </Link>
        <h1 className="text-4xl font-bold tracking-tight text-lightest sm:text-5xl">
          Tous les projets
        </h1>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-slate-800/50">
                <th className="py-4 pr-8 text-sm font-semibold text-lightest">Année</th>
                <th className="py-4 pr-8 text-sm font-semibold text-lightest">Projet</th>
                <th className="hidden py-4 pr-8 text-sm font-semibold text-lightest lg:table-cell">Fait chez</th>
                <th className="hidden py-4 pr-8 text-sm font-semibold text-lightest lg:table-cell">Technologies</th>
                <th className="py-4 text-right text-sm font-semibold text-lightest">Lien</th>
              </tr>
            </thead>
            <tbody className="group/list">
              {allProjects.map((project) => {
                const year = project.isInProgress ? "2025" : "2024";
                const madeAt = project.category || "Personnel";
                const href = project.link?.trim() || "";
                const canVisit = Boolean(href);

                return (
                  <tr
                    key={project.id}
                    className="group/row border-b border-slate-800/50 transition-colors last:border-none hover:bg-slate-800/30"
                  >
                    <td className="py-4 pr-4 align-top text-sm font-medium text-slate">
                      {year}
                    </td>
                    <td className="py-4 pr-4 align-top">
                      <div className="flex flex-col">
                        <span className="text-base font-semibold leading-snug text-lightest group-hover/row:text-accent">
                          {project.title}
                        </span>
                        {project.isInProgress && (
                          <span className="mt-1 text-[10px] font-bold uppercase tracking-widest text-accent/80">
                            En cours
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="hidden py-4 pr-4 align-top text-sm text-slate lg:table-cell">
                      <span className="font-medium text-slate/80">{madeAt}</span>
                    </td>
                    <td className="hidden py-4 pr-4 align-top lg:table-cell">
                      <ul className="flex flex-wrap gap-1.5">
                        {project.technologies?.map((tech, i) => (
                          <li key={i}>
                            <div className="tag">{tech}</div>
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="py-4 text-right align-top">
                      {canVisit ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center text-sm font-medium text-slate transition-all duration-300 group-hover/row:translate-x-1 group-hover/row:text-accent"
                          aria-label={`Visiter ${project.title}`}
                        >
                          <span className="hidden sm:inline">Visiter</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="ml-1 h-4 w-4 shrink-0"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      ) : (
                        <span className="text-sm font-medium text-slate/20">—</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
