import SkillBar from "@/components/SkillBar";
import Card from "@/components/Card";
import skillsData from "@/data/skills.json";

const experiences = [
  {
    role: "Développeuse Front-End",
    org: "Mansa Digitale",
    period: "2025 – en cours",
    desc: "Développement du site vitrine de l'agence avec Next.js et Tailwind CSS.",
    bullets: [
      "Développement d’applications web modernes",
      "Intégration d’interfaces en React et Tailwind CSS",
      "Collaboration avec l’équipe design",
    ],
  },
  // … autres expériences
];

const languages = [
  { name: "Français", percent: 95 },
  { name: "Anglais (débutant)", percent: 30 },
];

export default function SkillsPage() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Mes compétences
        </h1>

        {/* Cartes Front / Back / Outils */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card>
            <h2 className="text-2xl font-semibold mb-6">Frontend</h2>
            {skillsData.frontend.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </Card>

          <Card>
            <h2 className="text-2xl font-semibold mb-6">Backend</h2>
            {skillsData.backend.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </Card>

          <Card>
            <h2 className="text-2xl font-semibold mb-6">
              Outils & Technologies
            </h2>
            {skillsData.tools.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </Card>
        </div>

        {/* Langues */}
        <div className="mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Langues</h2>
          {languages.map((l) => (
            <SkillBar key={l.name} skill={l} />
          ))}
        </div>

        {/* Expériences */}
        <div className="mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Expériences</h2>
          {experiences.map((e, idx) => (
            <details
              key={idx}
              className="group bg-gray-100 rounded-xl p-4 border border-gray-300 mb-4"
            >
              <summary className="flex justify-between cursor-pointer font-semibold text-gray-800">
                <span>
                  {e.role}
                  {e.org && ` – ${e.org}`}
                </span>
                <span className="text-sm text-gray-500">{e.period}</span>
              </summary>
              <div className="mt-2 text-gray-700">
                {e.desc && <p className="mb-2">{e.desc}</p>}
                <ul className="list-disc pl-5 space-y-1">
                  {e.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
