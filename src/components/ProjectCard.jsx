import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ project }) {
  const href = project?.link?.trim?.() || "";
  const canVisit = Boolean(href);
  const hasImage = Boolean(project?.img);
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
    <Wrapper
      {...wrapperProps}
      className="group relative block grid gap-4 pb-1 transition-all sm:grid-cols-12 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
    >
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

      <div className="z-10 mt-1 sm:col-span-4">
        {hasImage ? (
          <div className="relative overflow-hidden rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:translate-y-1">
            <Image
              src={project.img}
              alt={project.title}
              width={400}
              height={225}
              className="aspect-video w-full object-contain bg-slate-800/10 opacity-80 transition duration-500 group-hover:opacity-100 group-hover:scale-105"
              sizes="(min-width: 640px) 200px, 100vw"
            />
          </div>
        ) : (
          <div className="aspect-video w-full rounded border-2 border-slate-200/10 bg-slate-800/50 text-[0.6rem] uppercase tracking-widest text-slate flex items-center justify-center">
            No Preview
          </div>
        )}
      </div>

      <div className="z-10 sm:col-span-8">
        <h3 className="font-medium leading-snug text-lightest">
          <span className="inline-flex items-center font-semibold leading-tight text-lightest text-base transition-all duration-300 group-hover:text-accent group-focus-visible:text-accent">
            <span>{project.title}</span>
            {canVisit && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none translate-y-px"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </span>
        </h3>

        {project.category && (
          <p className="mt-1 text-xs font-medium uppercase tracking-widest text-slate-500">
            {project.category}
          </p>
        )}

        <p className="mt-3 text-sm leading-normal text-slate/90">{project.summary}</p>

        {Array.isArray(project.technologies) && (
          <ul className="mt-4 flex flex-wrap" aria-label="Technologies used">
            {project.technologies.map((tech, i) => (
              <li key={i} className="mr-1.5 mt-2">
                <div className="tag px-3 py-1 text-[0.7rem]">{tech}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Wrapper>
  );
}
