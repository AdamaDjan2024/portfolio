const experiences = [
  {
    year: "2025 — PRÉSENT",
    title: "Développeuse Front-End",
    company: "Mansa Digital",
    companyUrl: "https://mansa.digital",
    description:
      "Développement et intégration d'interfaces web pour des produits et sites clients, avec intégration API et gestion des données côté front. Travail en React/Next.js avec Tailwind CSS, en veillant à la fidélité des maquettes, à la qualité responsive et à la cohérence visuelle entre les pages.",
    tags: ["Next.js", "React", "Tailwind CSS", "API REST", "UI Integration", "Git"],
  },
  {
    year: "2024 — 2025",
    title: "Contributions Front-End Produits",
    company: "Mansa Talents & BilletFacile",
    companyUrl: "https://mansatalents.com/",
    description:
      "Participation à l'amélioration d'écrans orientés parcours utilisateur (emploi et billetterie): lisibilité des contenus, hiérarchie visuelle, composants réutilisables et comportement mobile. Collaboration avec l'équipe pour aligner besoins métier et expérience utilisateur.",
    tags: ["React", "Next.js", "Tailwind CSS", "Responsive Design", "UX"],
  },
  {
    year: "2024",
    title: "Formation Développeuse Front-End",
    company: "Nimba Hub",
    companyUrl: "/certifications?issuer=Nimba%20Hub",
    description:
      "Consolidation des bases HTML/CSS/JavaScript puis mise en pratique avec React. Réalisation de projets d'intégration orientés composants, responsive design et bonnes pratiques de structuration du code.",
    tags: ["HTML", "CSS", "JavaScript", "React", "Intégration UI"],
    hint: "Voir les certifications Nimba Hub",
  },
  {
    year: "2023",
    title: "Formation Design Produit",
    company: "Orange Digital Center",
    companyUrl: "/certifications?issuer=Orange%20Digital%20Center",
    description:
      "Formations en Figma, Design Thinking et communication professionnelle. Ces acquis renforcent ma capacité à comprendre les intentions design et à les traduire en interfaces front-end cohérentes.",
    tags: ["Figma", "Design Thinking", "UI/UX", "Collaboration"],
    hint: "Voir les certifications Orange Digital Center",
  },
  {
    year: "2020",
    title: "Licence en Génie Informatique",
    company: "Université Mahatma Gandhi",
    companyUrl: "/formation",
    description:
      "Base académique en informatique: algorithmique, structures de données, bases de données et méthodologie de projet. Ce socle me permet d'aborder le front-end avec rigueur technique.",
    tags: ["Algorithmique", "Bases de données", "Méthodologie", "JavaScript"],
  },
];

export default function Experience() {
  return (
    <div>
      <ol className="group/list">
        {experiences.map((exp, index) => (
          <li key={index} className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-6 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
              <header
                className="z-10 mb-2 mt-1 text-sm font-semibold uppercase tracking-wide text-slate sm:col-span-2"
                aria-label={exp.year}
              >
                {exp.year}
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-lightest">
                  <div>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-lightest hover:text-accent focus-visible:text-accent group/link text-lg"
                      href={exp.companyUrl}
                      target={exp.companyUrl.startsWith("http") ? "_blank" : undefined}
                      rel={exp.companyUrl.startsWith("http") ? "noreferrer" : undefined}
                      aria-label={`${exp.title} chez ${exp.company}`}
                    >
                      <span className="absolute -inset-x-4 -inset-y-4 hidden rounded md:-inset-x-6 lg:block" />
                      <span>
                        {exp.title} · <span className="inline-block">{exp.company}</span>
                      </span>
                    </a>
                  </div>
                </h3>
                <p className="mt-2 text-base leading-relaxed">{exp.description}</p>
                {exp.hint && (
                  <a
                    href={exp.companyUrl}
                    className="mt-3 inline-flex items-center text-sm font-semibold text-accent/90 transition hover:text-accent focus-visible:text-accent"
                    aria-label={exp.hint}
                  >
                    <span>{exp.hint}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="ml-1 inline-block h-3.5 w-3.5 shrink-0 transition-transform hover:translate-x-1 motion-reduce:transition-none"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 11-1.04-1.08l4.158-3.92H3.75A.75.75 0 013 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                )}
                <ul className="mt-4 flex flex-wrap" aria-label="Technologies utilisées">
                  {exp.tags.map((tag, i) => (
                    <li key={i} className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-accent/10 px-3.5 py-1.5 text-sm font-medium leading-5 text-accent">
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
