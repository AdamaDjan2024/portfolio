// src/sections/About.jsx
import Card from '@/components/Card'
import DownloadCvButton from '@/components/DownloadCvButton'

export default function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">À propos de moi</h2>

        <div className="space-y-8">
          <Card>
            <h3 className="text-2xl font-semibold mb-4">Mon histoire</h3>
            <p className="text-gray-600 mb-4">
              Passionné par la technologie depuis mon plus jeune âge, j'ai découvert le développement web lors de mes études en informatique. Ce qui a commencé comme un simple intérêt s'est rapidement transformé en une véritable passion.
            </p>
            <p className="text-gray-600">
              Au fil des années, j'ai développé une expertise solide dans l'écosystème JavaScript, en me spécialisant particulièrement dans React et Next.js. J'aime créer des applications qui ne sont pas seulement fonctionnelles, mais aussi élégantes et performantes.
            </p>
          </Card>

          <Card>
            <h3 className="text-2xl font-semibold mb-4">Mes compétences clés</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-medium mb-3">Frontend</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• React & Next.js</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-3">Backend</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Node.js & Express</li>
                  <li>• PostgreSQL & MongoDB</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="text-2xl font-semibold mb-4">Télécharger mon CV</h3>
            <DownloadCvButton />
          </Card>
        </div>
      </div>
    </section>
  )
}
