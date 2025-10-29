"use client";

import DownloadCvButton from "@/components/DownloadCvButton";

export default function Hero() {
  return (
    <section className="relative py-28 md:py-32 bg-white overflow-hidden">
      <div className="relative container px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[#002B45] text-lg mb-2">
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

          <h1 className="text-4xl md:text-5xl font-extrabold text-[#001B4B] leading-tight mb-4">
            Développeuse <span className="text-[#2AE8A8]">front-end</span>{" "}
            passionnée et curieuse
          </h1>

          <p className="text-gray-600 text-base md:text-lg mb-8">
            Créative et engagée dans la création de projets utiles et innovants.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <DownloadCvButton />
            <a
              href="#projects"
              className="bg-[#2AE8A8] hover:bg-[#24C896] text-[#002B45] px-6 py-3 rounded-lg font-semibold transition"
            >
              Mes projets
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
