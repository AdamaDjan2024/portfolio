export default function About() {
  const skills = [
    "HTML5 / CSS3",
    "JavaScript (ES6+)",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Responsive (mobile-first)",
    "Figma vers React/Next.js",
    "Accessibilité web (WCAG - bases)",
    "Git / GitHub",
    "API REST (bases)",
    "Organisation des composants",
  ];

  return (
    <div className="space-y-6 text-slate">
      <p className="text-base leading-relaxed sm:text-lg">
        Je suis développeuse front-end, spécialisée en intégration web moderne.
        Ce que j&apos;aime le plus: transformer une intention design en interface
        React/Next.js claire, fidèle et agréable à utiliser.
      </p>

      <p className="text-base leading-relaxed sm:text-lg">
        Sur les projets, je travaille la cohérence UI de bout en bout: structure
        des composants, responsive design, clarté des parcours et qualité des
        états interactifs. J&apos;aime autant soigner l&apos;ensemble que les petits
        détails qui améliorent concrètement l&apos;expérience.
      </p>

      <p className="text-base leading-relaxed sm:text-lg">
        Aujourd&apos;hui, je développe avec React/Next.js et j&apos;utilise l&apos;IA comme
        levier de productivité pour accélérer la recherche, la documentation et
        certaines implémentations.
      </p>

      <div className="pt-2">
        <p className="mb-4 text-base font-semibold text-slate-200 sm:text-lg">
          Compétences techniques actuellement mobilisées
        </p>
        <ul className="flex max-w-3xl flex-wrap gap-1.5" aria-label="Compétences techniques">
          {skills.map((item) => (
            <li
              key={item}
              className="inline-flex items-center rounded-full border border-accent/25 bg-accent/10 px-2.5 py-0.5 text-[0.72rem] font-medium leading-4 text-accent sm:text-xs"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
