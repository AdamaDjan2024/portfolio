import DownloadCvButton from '@/components/DownloadCvButton'

export default function Hero() {
  return (
    <section className="relative py-32 bg-primary-700 overflow-hidden">
      {/* Background shapes principaux */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-primary-500/20 rounded-3xl blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-primary-300/30 rounded-lg blur-2xl animate-pulse" />

      {/* Petits cubes brillants flottants */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-white rounded-sm opacity-70 animate-float"></div>
      <div className="absolute top-20 right-20 w-3 h-3 bg-primary-300 rounded-sm opacity-50 animate-float delay-1000"></div>
      <div className="absolute bottom-16 left-1/3 w-5 h-5 bg-primary-100 rounded-sm opacity-60 animate-float delay-2000"></div>
      <div className="absolute bottom-10 right-1/4 w-2 h-2 bg-white rounded-sm opacity-80 animate-float delay-1500"></div>

      {/* Contenu centré */}
      <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        
        {/* Intro animé lettre par lettre */}
        <p className="text-gray-300 text-lg mb-2">
  {"Bonjour, je suis Adama Djan".split("").map((char, i) => (
    <span
      key={i}
      className="inline-block opacity-0 animate-typing"
      style={{ animationDelay: `${i * 0.03}s` }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ))}
</p>



        {/* Titre principal */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
          Développeuse front-end passionnée et curieuse
        </h1>

        {/* Description */}
        <p className="text-gray-300 text-base md:text-lg mb-8">
          Créative et engagée dans la création de projets utiles et innovants.
        </p>

        {/* Boutons */}
        <div className="flex flex-wrap justify-center gap-4">
          <DownloadCvButton />
          <a
            href="#projects"
            className="bg-primary-500 hover:bg-primary-700 text-white px-6 py-3 rounded-lg transition"
          >
            Mes projets
          </a>
        </div>
      </div>
    </section>
  )
}
