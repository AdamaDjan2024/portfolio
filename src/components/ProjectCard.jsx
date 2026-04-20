import Link from "next/link";
import Image from "next/image";

function TechBadge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-900/60 px-3 py-1 text-xs font-medium text-cyan-200/80 ring-1 ring-inset ring-cyan-300/10">
      {children}
    </span>
  );
}

export default function ProjectCard({ project }) {
  const href = project?.link?.trim?.() || "";
  const canVisit = Boolean(href);
  const Wrapper = canVisit ? Link : "div";
  const wrapperProps = canVisit
    ? {
        href,
        target: "_blank",
        rel: "noreferrer",
        "aria-label": `${project.title} — ouvrir le projet`,
      }
    : {};

  return (
    <article className="group relative">
      <Wrapper
        {...wrapperProps}
        className={[
          "relative block rounded-xl p-5 transition",
          canVisit
            ? "focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/50"
            : "",
        ].join(" ")}
      >
        {/* Hover/focus backdrop (Brittany-style) */}
        <div
          aria-hidden="true"
          className={[
            "pointer-events-none absolute -inset-x-4 -inset-y-4 hidden rounded-xl opacity-0 transition",
            "lg:block",
            "lg:group-hover:opacity-100 lg:group-focus-visible:opacity-100",
            "bg-slate-800/40",
            "ring-1 ring-inset ring-white/10",
            "shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)]",
          ].join(" ")}
        />

        <div className="grid gap-4 sm:grid-cols-[160px,1fr] sm:items-start">
          {project.img ? (
            <div className="relative overflow-hidden rounded-lg border border-white/5 bg-white/[0.02]">
              <div className="relative aspect-[16/10]">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover opacity-90 transition group-hover:opacity-100"
                  sizes="(min-width: 640px) 160px, 100vw"
                />
              </div>
            </div>
          ) : null}

          <div className="min-w-0">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h3 className="text-base font-semibold text-slate-100 group-hover:text-cyan-100 transition-colors">
                  {project.title}{" "}
                  {canVisit ? <span aria-hidden="true">↗</span> : null}
                </h3>
                {project.category ? (
                  <p className="mt-1 text-xs text-slate-400">{project.category}</p>
                ) : null}
              </div>

              {!canVisit ? (
                <span className="shrink-0 text-xs font-semibold text-slate-500">
                  {project.buttonText || "Bientôt"}
                </span>
              ) : null}
            </div>

            {project.summary ? (
              <p className="mt-4 text-sm text-slate-200/70">{project.summary}</p>
            ) : null}

            {Array.isArray(project.technologies) && project.technologies.length ? (
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.technologies.slice(0, 10).map((tech) => (
                  <li key={tech}>
                    <TechBadge>{tech}</TechBadge>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </Wrapper>
    </article>
  );
}

