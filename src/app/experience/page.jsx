import { generateMetadata } from '@/utils/seo'
import Card from '@/components/Card'
import experienceData from '@/data/experience.json'

export const metadata = generateMetadata('Expérience', 'Mon parcours professionnel et mes expériences de développement')

export default function ExperiencePage() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Mon expérience</h1>
        
        <div className="space-y-8">
          {experienceData.map((exp) => (
            <Card key={exp.id}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{exp.position}</h2>
                  <h3 className="text-lg text-primary-600">{exp.company}</h3>
                </div>
                <div className="text-gray-500 mt-2 md:mt-0">
                  <p>{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">{exp.description}</p>
              
              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-2">Technologies utilisées :</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary-100 text-primary-800 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Réalisations :</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {exp.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
