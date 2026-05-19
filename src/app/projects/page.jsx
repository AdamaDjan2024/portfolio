import Link from "next/link";
import SpotlightBackground from "@/components/SpotlightBackground";
import ProjectArchiveTable from "@/components/archive/ProjectArchiveTable";
import { portfolioProjects } from "@/data/projects";

export default function ProjectsPage() {
  const allProjects = [...portfolioProjects].sort((a, b) => Number(b.year) - Number(a.year));

  return (
    <main className="relative min-h-screen">
      <SpotlightBackground />

      <div className="page-shell py-12 lg:py-24">
        <Link href="/" className="archive-back-link group">
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
          Adama Dian
        </Link>

        <header className="mb-10 mt-2 lg:mb-14">
          <h1 className="archive-title">Tous les projets</h1>
          <p className="archive-subtitle">Une vue complète de mes réalisations.</p>
        </header>

        <ProjectArchiveTable projects={allProjects} />
      </div>
    </main>
  );
}
