const experiences = [
  {
    year: "2025 — PRÉSENT",
    title: "Stage Développeuse Front-End",
    company: "Mansa Digitale",
    companyUrl: "https://mansadigital.com",
    description: "Conception et intégration d’interfaces web performantes. Collaboration étroite avec l'équipe de design pour transformer des maquettes complexes en composants React réutilisables. Optimisation de l'accessibilité et de la performance globale du site.",
    tags: ["Next.js", "React", "Tailwind CSS", "Docker", "Git"],
  },
  {
    year: "2024",
    title: "Formation Front-End Developer",
    company: "Nimba Hub",
    companyUrl: "#",
    description: "Apprentissage intensif des fondamentaux du web et des frameworks modernes. Développement de plusieurs projets personnels et collaboratifs en mettant l'accent sur le responsive design et l'expérience utilisateur.",
    tags: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    year: "2023",
    title: "Formation & Expériences Commerciales",
    company: "Orange Digital & Autres",
    companyUrl: "#",
    description: "Formations en Leadership, Design Thinking et outils de design (Figma, Canva). Expériences en tant que développeuse commerciale, alliant compréhension technique et besoins utilisateurs.",
    tags: ["Figma", "Design Thinking", "Gestion de projet"],
  },
  {
    year: "2021 — 2022",
    title: "Promotrice Commerciale",
    company: "Calcaire Technologies",
    companyUrl: "#",
    description: "Promotion de produits technologiques, support client et gestion des ventes. Développement de compétences en communication et en organisation.",
    tags: ["Relation client", "Négociation", "Organisation"],
  },
  {
    year: "2020",
    title: "Licence en Génie Informatique",
    company: "Université Mahatma Gandhi",
    companyUrl: "#",
    description: "Diplôme obtenu avec une spécialisation en développement informatique. Apprentissage des bases de l'algorithmique, des bases de données et de plusieurs langages de programmation.",
    tags: ["MySQL", "C", "C++", "SQL", "JavaScript"],
  },
];

export default function Experience() {
  return (
    <div>
      <ol className="group/list">
        {experiences.map((exp, index) => (
          <li key={index} className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
              <header
                className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate sm:col-span-2"
                aria-label={exp.year}
              >
                {exp.year}
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-lightest">
                  <div>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-lightest hover:text-accent focus-visible:text-accent group/link text-base"
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${exp.title} chez ${exp.company}`}
                    >
                      <span className="absolute -inset-x-4 -inset-y-4 hidden rounded md:-inset-x-6 lg:block" />
                      <span>
                        {exp.title} ·{" "}
                        <span className="inline-block">
                          {exp.company}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </span>
                    </a>
                  </div>
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  {exp.description}
                </p>
                <ul className="mt-4 flex flex-wrap" aria-label="Technologies used">
                  {exp.tags.map((tag, i) => (
                    <li key={i} className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
                        {tag}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-12">
        <a
          className="inline-flex items-center font-medium leading-tight text-lightest group"
          aria-label="Voir le CV complet"
          href="/documents/cv.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <span>
            <span className="border-b border-transparent pb-px transition group-hover:border-accent motion-reduce:transition-none">
              Voir le CV complet
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
          </span>
        </a>
      </div>
    </div>
  );
}
