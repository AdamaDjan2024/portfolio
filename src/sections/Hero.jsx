import DownloadCvButton from '@/components/DownloadCvButton'
import siteData from '@/data/site.json'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-blue-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Bonjour, je suis{' '}
            <span className="text-primary-600">{siteData.name}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {siteData.title} passionné par la création d'expériences web modernes et performantes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <DownloadCvButton />
            <a
              href="#projects"
              className="btn-secondary"
            >
              Voir mes projets
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
