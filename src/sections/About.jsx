import Card from '@/components/Card'

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">À propos de moi</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <Card>
              <h3 className="text-2xl font-semibold mb-4">Mon parcours</h3>
              <p className="text-gray-600 mb-4">
                Développeur Full Stack avec plus de 4 ans d'expérience dans le développement 
                d'applications web modernes. Passionné par les nouvelles technologies et 
                toujours en quête d'apprentissage.
              </p>
              <p className="text-gray-600 mb-4">
                Je me spécialise dans l'écosystème JavaScript avec React, Next.js, Node.js 
                et les bases de données modernes. J'aime créer des solutions élégantes et 
                performantes qui répondent aux besoins des utilisateurs.
              </p>
              <p className="text-gray-600">
                En dehors du code, j'aime explorer de nouvelles technologies, contribuer 
                à des projets open source et partager mes connaissances avec la communauté.
              </p>
            </Card>
          </div>
          <div>
            <Card>
              <h3 className="text-2xl font-semibold mb-4">Mes valeurs</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">Code propre et maintenable</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">Performance et optimisation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">Expérience utilisateur exceptionnelle</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">Collaboration et communication</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
