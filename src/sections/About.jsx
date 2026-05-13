export default function About() {
  const skills = [
    "JavaScript (ES6+)",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Figma",
    "Design System",
  ];

  return (
    <div className="space-y-4 text-slate">
      <p>
        Développeuse web passionnée par la création de{" "}
        <span className="font-medium text-lightest">
          sites modernes, intuitifs et centrés sur l’utilisateur
        </span>
        . Diplômée en génie informatique, j&apos;intègre des maquettes Figma en
        interfaces Next.js et Tailwind CSS avec une attention particulière au
        responsive, à l&apos;accessibilité et à la lisibilité.
      </p>
      <p>
        Mon parcours m&apos;a permis de travailler sur divers projets, allant de
        la conception d&apos;interfaces à l&apos;optimisation de la performance.
        J&apos;aime transformer des idées en expériences digitales mémorables
        tout en respectant les meilleures pratiques du développement web.
      </p>
      <p>
        Voici quelques technologies avec lesquelles j&apos;ai travaillé
        récemment :
      </p>
      <ul className="grid grid-cols-2 gap-2 text-sm font-medium text-slate-300">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="text-accent">▹</span> {skill}
          </li>
        ))}
      </ul>
      <p>
        Quand je ne suis pas devant mon écran, j&apos;aime explorer de nouvelles
        technologies, lire sur le design system ou contribuer à des projets qui
        ont un impact positif.
      </p>
    </div>
  );
}
