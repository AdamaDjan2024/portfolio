"use client";

import { ArrowUpRight } from "lucide-react";

function ProjectLink({ href, label }) {
  if (!href) {
    return <span className="archive-empty">—</span>;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="archive-link"
      aria-label={`Visit ${label}`}
    >
      <span>Visit</span>
      <ArrowUpRight aria-hidden="true" className="archive-link-icon" />
    </a>
  );
}

function ProjectRow({ project }) {
  return (
    <tr className="archive-row group/row">
      <td className="archive-cell archive-year">{project.year}</td>

      <td className="archive-cell archive-project-cell">
        <a
          href={project.link || "#"}
          target={project.link ? "_blank" : undefined}
          rel={project.link ? "noreferrer" : undefined}
          className={`archive-project-link ${project.link ? "" : "pointer-events-none"}`}
          aria-label={project.link ? `Open ${project.title}` : `${project.title} (coming soon)`}
        >
          <span>{project.title}</span>
        </a>
      </td>

      <td className="archive-cell archive-built hidden lg:table-cell">{project.category || "Personal"}</td>

      <td className="archive-cell hidden xl:table-cell">
        <ul className="archive-tech-list">
          {(project.technologies || []).slice(0, 4).map((tech) => (
            <li key={`${project.id}-${tech}`}>{tech}</li>
          ))}
        </ul>
      </td>

      <td className="archive-cell archive-link-cell">
        <ProjectLink href={project.link?.trim()} label={project.title} />
      </td>
    </tr>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="archive-card">
      <div className="archive-card-top">
        <p className="archive-year">{project.year}</p>
        <ProjectLink href={project.link?.trim()} label={project.title} />
      </div>

      <a
        href={project.link || "#"}
        target={project.link ? "_blank" : undefined}
        rel={project.link ? "noreferrer" : undefined}
        className={`archive-card-title ${project.link ? "" : "pointer-events-none"}`}
      >
        <span>{project.title}</span>
      </a>

      <p className="archive-built">{project.category || "Personal"}</p>

      <ul className="archive-tech-list mt-4">
        {(project.technologies || []).slice(0, 4).map((tech) => (
          <li key={`${project.id}-mobile-${tech}`}>{tech}</li>
        ))}
      </ul>
    </article>
  );
}

export default function ProjectArchiveTable({ projects }) {
  return (
    <>
      <div className="hidden md:block">
        <table className="archive-table" aria-label="All projects archive">
          <thead>
            <tr>
              <th>Year</th>
              <th>Project</th>
              <th className="hidden lg:table-cell">Made at</th>
              <th className="hidden xl:table-cell">Built with</th>
              <th className="text-right">Link</th>
            </tr>
          </thead>

          <tbody>
            {projects.map((project) => (
              <ProjectRow key={project.id} project={project} />
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-3 md:hidden" role="list" aria-label="All projects archive mobile">
        {projects.map((project) => (
          <ProjectCard key={`card-${project.id}`} project={project} />
        ))}
      </div>
    </>
  );
}
