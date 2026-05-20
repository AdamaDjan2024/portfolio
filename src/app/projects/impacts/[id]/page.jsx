import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import SpotlightBackground from "@/components/SpotlightBackground";
import { portfolioProjects } from "@/data/projects";

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ id: String(project.id) }));
}

export default async function ProjectImpactDetailPage({ params }) {
  const { id } = await params;
  const project = portfolioProjects.find((item) => String(item.id) === String(id));
  const impactImageSrc = project?.id === 5 ? "/images/projects/afribooks-screen.png" : project?.img;

  if (!project) {
    notFound();
  }

  return (
    <main className="relative min-h-screen">
      <SpotlightBackground />

      <div className="page-shell py-10 sm:py-14">
        <Link href="/#projects" className="archive-back-link group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="archive-back-icon"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.92a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
              clipRule="evenodd"
            />
          </svg>
          Retour à la page principale
        </Link>

        <header className="max-w-4xl mt-4">
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-500">Projet</p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-50">{project.title}</h1>
          <p className="mt-3 text-sm font-medium uppercase tracking-widest text-slate-400">
            {project.category || "Projet"} · {project.year}
          </p>
        </header>

        <section className="mt-10 max-w-4xl">
          {impactImageSrc ? (
            <figure className="mb-8 max-w-3xl overflow-hidden rounded-xl border border-white/10 bg-slate-900/30">
              <Image
                src={impactImageSrc}
                alt={`Aperçu du projet ${project.title}`}
                width={1600}
                height={900}
                className="h-auto w-full object-contain"
                sizes="(min-width: 1024px) 896px, 100vw"
              />
            </figure>
          ) : null}

          <div className="pl-5 sm:pl-7 border-l border-white/15">
            {project.isInProgress ? (
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Maquette en conception</p>
            ) : null}
            <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-300">Impact</h2>
            <p className="mt-5 text-lg sm:text-xl leading-relaxed text-slate-100/95">
              {project.impact?.text || "Impact en cours de rédaction pour ce projet."}
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-7">
            {project.link?.trim() ? (
              <Link
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-200/80 transition hover:text-accent"
              >
                <span>Ouvrir le projet</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            ) : null}
          </div>
        </section>
      </div>
    </main>
  );
}
