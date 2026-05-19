export default function About() {
  const skills = [
    "HTML5 / CSS3",
    "JavaScript (ES6+)",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Intégration responsive (mobile-first)",
    "Intégration Figma vers React/Next.js",
    "Consommation d'API REST (bases)",
    "Git / GitHub",
    "Accessibilité web (WCAG - bases)",
  ];

  return (
    <div className="space-y-4 text-slate">
      <p>
        Je suis développeuse front-end junior, spécialisée en intégration web
        moderne. Mon point fort est de transformer des maquettes en interfaces
        React/Next.js propres, lisibles et fidèles, avec une exigence élevée sur
        le détail visuel.
      </p>

      <p>
        Sur les projets, je travaille la cohérence UI de bout en bout: structure
        des composants, responsive design, clarté des parcours et qualité des
        états interactifs. Mon objectif est simple: livrer des écrans utiles,
        compréhensibles et agréables à utiliser sur desktop comme sur mobile.
      </p>

      <p>
        J&apos;utilise l&apos;IA comme outil de productivité pour accélérer la recherche,
        la documentation et certaines implémentations.
      </p>

      <p>Compétences techniques actuellement mobilisées :</p>
      <ul className="grid grid-cols-1 gap-2 text-sm font-medium text-slate-300 sm:grid-cols-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="text-accent">▹</span> {skill}
          </li>
        ))}
      </ul>

    </div>
  );
}
