import ProjectCard from "@/components/ProjectCard";
import SpotlightBackground from "@/components/SpotlightBackground";
import { portfolioProjects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen">
      <SpotlightBackground />

      <a
        href="#projects"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-slate-900 focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-100"
      >
        Aller au contenu
      </a>

      <div className="page-shell py-10 sm:py-14">
        <header className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500">
            Sélection
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-50">
            Projets
          </h1>
          <p className="mt-4 max-w-2xl text-base text-slate-200/70">
            Une sélection de projets où je privilégie l’UI soignée, le responsive,
            la clarté produit et l’accessibilité.
          </p>
        </header>

        <section id="projects" className="mt-10 sm:mt-14">
          <div className="grid gap-4">
            {portfolioProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
