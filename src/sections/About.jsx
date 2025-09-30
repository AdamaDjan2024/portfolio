// src/sections/About.jsx
"use client";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-20 bg-primary-900 text-primary-100">
      <div className="container flex flex-col lg:flex-row gap-12 items-center text-center lg:text-left animate-fadeInUp">
        {/* Colonne gauche : photo */}
        <div className="relative flex-shrink-0 w-80 aspect-[7/9] mx-auto lg:mx-0">
          <div className="border-l-4 border-b-4 border-primary-500 absolute -left-4 -bottom-4 w-full h-full"></div>
          <Image
            src="/images/profile.jpg"
            alt="Photo de profil"
            fill
            className="relative z-10 object-cover rounded-md"
          />
        </div>

        {/* Colonne droite : contenu */}
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-white">À propos de moi</h2>
          <p className="text-lg text-primary-100">
            Développeuse web passionnée par la création de{" "}
            <span className="font-semibold">
              sites modernes, intuitifs et centrés sur l'utilisateur
            </span>
            . Diplômée en génie informatique, je mets ma curiosité et ma rigueur
            au service de chaque projet pour concevoir des interfaces
            performantes, accessibles et esthétiques. J'aime transformer des
            idées en expériences digitales mémorables.
          </p>

          {/* Boutons contact */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start flex-wrap gap-4">
            <a
              href="mailto:adamadjandiallo9999@email.com"
              className="inline-block sm:w-40 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium py-2 px-6 rounded-lg text-center hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              📧 Email
            </a>

            <a
              href="https://github.com/AdamaDjan2024"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block sm:w-40 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium py-2 px-6 rounded-lg text-center hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              💻 GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/adama-djan-diallo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block sm:w-40 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium py-2 px-6 rounded-lg text-center hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              🔗 LinkedIn
            </a>
          </div>

          {/* Bouton principal de contact */}
          <div className="pt-4 flex justify-center lg:justify-start">
            <button className="flex items-center gap-3 bg-primary-500 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-primary-500">
                ✉️
              </div>
              Contactez-moi
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
