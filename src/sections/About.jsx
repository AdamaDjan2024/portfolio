// src/sections/About.jsx
"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AboutSection() {
  const router = useRouter();

  const handleContactClick = () => {
    // Si la page contact est séparée
    router.push("/contact");

    // Si tu veux un scroll vers un id #contact sur la même page
    // document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-primary-900 text-primary-100">
      <div className="container px-4 md:px-6 flex flex-col lg:flex-row gap-20 items-center text-center lg:text-left animate-fadeInUp">
        {/* Colonne gauche : photo */}
        <div className="relative flex-shrink-0 w-80 aspect-[7/9] mx-auto lg:mx-0">
          <div className="border-l-4 border-b-4 border-primary-500 absolute -left-4 -bottom-4 w-full h-full"></div>
          <Image
            src="/images/profile.j"
            alt="Photo de profil"
            fill
            className="relative z-10 object-cover rounded-md"
          />
        </div>

        {/* Colonne droite : contenu */}
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-white">À propos de moi</h2>

          {/* Texte principal */}
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

          {/* Mini citation / pitch */}
          <p className="italic text-primary-300">
            "Créer des expériences web qui allient esthétisme et performance est
            ma passion."
          </p>

          {/* Bouton principal de contact */}
          <div className="pt-4 flex justify-center lg:justify-start">
            <button
              onClick={handleContactClick}
              className="flex items-center gap-3 bg-primary-500 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1"
            >
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
