import { generateMetadata } from '@/utils/seo'
import Card from '@/components/Card'
import educationData from '@/data/education.json'

export const metadata = generateMetadata('Éducation', 'Mon parcours académique détaillé')

export default function EducationPage() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Éducation</h1>
        
        <div className="space-y-8">
          {educationData.map((edu) => (
            <Card key={edu.id}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{edu.degree}</h2>
                  <h3 className="text-lg text-primary-600">{edu.school}</h3>
                </div>
                <div className="text-gray-500 mt-2 md:mt-0">
                  <p>{edu.period}</p>
                  <p>{edu.location}</p>
                  <p className="font-medium">{edu.grade}</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">{edu.description}</p>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Cours pertinents :</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {edu.relevant_courses.map((course, index) => (
                    <li key={index}>{course}</li>
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
