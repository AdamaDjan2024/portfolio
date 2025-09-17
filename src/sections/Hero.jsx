import DownloadCvButton from '@/components/DownloadCvButton'
import siteData from '@/data/site.json'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative py-14 sm:py-16 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-primary-700/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-pink-600/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-gray-900/60 to-gray-800/60 ring-1 ring-white/10 p-5 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-gray-300 mb-2">Bonjour, je suis <span className="font-semibold text-white">Adama Djan</span>,</p>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
                Développeuse front-end passionnée et curieuse,
              </h1>
              <p className="text-base md:text-lg text-gray-300 mb-8">
                créative et engagée dans la création de projets utiles et innovants.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <DownloadCvButton />
                <a href="#contact" className="btn-secondary">
                  Contact
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="mx-auto max-w-md">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-gradient-to-br from-gray-700 to-gray-600">
                  <Image
                    src="/picture.jpeg"
                    alt={`${siteData.name} profile picture`}
                    width={640}
                    height={800}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="absolute -left-6 -top-6 h-16 w-16 rounded-xl bg-blue-500/20 ring-1 ring-white/10" />
                <div className="absolute -right-4 bottom-10 h-14 w-14 rounded-xl bg-emerald-500/20 ring-1 ring-white/10" />
                <div className="absolute right-20 -bottom-6 h-10 w-10 rounded-xl bg-violet-500/20 ring-1 ring-white/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
