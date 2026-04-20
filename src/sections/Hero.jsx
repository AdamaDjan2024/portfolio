import DownloadCvButton from "@/components/DownloadCvButton";

export default function Hero() {
  return (
    <section className="relative py-24 sm:py-28 md:py-32 bg-white overflow-hidden">
      {/* Conteneur principal */}
      <div className="relative page-shell">
        <div className="mx-auto max-w-2xl text-center">
          {/* Intro animé */}
          <p className="text-[#002B45] text-base sm:text-lg mb-2">
            {"Bonjour, je suis Adama Dian Amadou".split("").map((char, i) => (
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#001B4B] leading-tight mb-4">
            Développeuse <span className="text-[#2AE8A8]">front-end</span>{" "}
            passionnée et curieuse
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-base sm:text-lg md:text-lg mb-6 sm:mb-8">
            Créative et engagée dans la création de projets utiles et innovants.
          </p>

          {/* Boutons */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <DownloadCvButton />
            <a
              href="#projects"
              className="inline-flex min-h-[3.75rem] items-center justify-center rounded-[1rem] bg-[#2AE8A8] px-7 py-4 text-sm font-semibold leading-none text-[#002B45] transition hover:bg-[#24C896] sm:px-8 sm:text-base"
            >
              Mes projets
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
