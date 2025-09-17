import { generateMetadata } from '@/utils/seo'
import SkillBar from '@/components/SkillBar'
import Card from '@/components/Card'
import skillsData from '@/data/skills.json'

export const metadata = generateMetadata('Compétences', 'Mes compétences techniques en développement web et technologies')

export default function SkillsPage() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Mes compétences</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
            <h2 className="text-2xl font-semibold mb-6">Outils & Technologies</h2>
            {skillsData.tools.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </Card>
        </div>
      </div>
    </div>
  )
}
