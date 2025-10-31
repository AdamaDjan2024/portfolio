"use client";

import DownloadCvButton from "@/components/DownloadCvButton";

export default function Hero() {
  return (
    <section className="relative py-24 sm:py-28 md:py-32 bg-white overflow-hidden">
      {/* Conteneur principal */}
      <div className="relative container px-4 sm:px-6 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          {/* Intro animé */}
          <p className="text-[#002B45] text-base sm:text-lg mb-2">
            {"Bonjour, je suis Adama Djan Amadou".split("").map((char, i) => (
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
              className="bg-[#2AE8A8] hover:bg-[#24C896] text-[#002B45] px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition text-sm sm:text-base"
            >
              Mes projets
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
