import { generateMetadata } from '@/utils/seo'
import Card from '@/components/Card'
import certificationsData from '@/data/certifications.json'

export const metadata = generateMetadata('Certifications', 'Mes certifications professionnelles et formations')

export default function CertificationsPage() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Certifications</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificationsData.map((cert) => (
            <Card key={cert.id}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{cert.name}</h2>
                  <h3 className="text-lg text-primary-600">{cert.issuer}</h3>
                </div>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {cert.date}
                </span>
              </div>
              
              <p className="text-gray-600 mb-4">{cert.description}</p>
              
              <div className="space-y-2">
                <p className="text-sm text-gray-500">
                  <span className="font-medium">ID de certification :</span> {cert.credential_id}
                </p>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                >
                  Voir la certification →
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
