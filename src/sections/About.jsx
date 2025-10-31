"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AboutSection() {
  const router = useRouter();

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/contact");
    }
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#001B4B] text-[#FFFFFF]">
      <div className="container px-4 sm:px-6 md:px-6 flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-20 items-center text-center lg:text-left animate-fadeInUp">
        {/* Colonne gauche : photo */}
        <div className="relative flex-shrink-0 w-60 sm:w-72 md:w-80 aspect-[7/9] mx-auto lg:mx-0">
          <div className="border-l-4 border-b-4 border-[#2AE8A8] absolute left-0 sm:-left-2 md:-left-4 -bottom-2 sm:-bottom-3 md:-bottom-4 w-full h-full overflow-hidden"></div>
          <Image
            src="/adama.jpeg"
            alt="Photo de profil"
            fill
            className="relative z-10 object-cover rounded-md"
          />
        </div>

        {/* Colonne droite : contenu */}
        <div className="flex-1 flex flex-col gap-4 sm:gap-6">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-[#FFFFFF]">
            À propos de moi
          </h2>

          <p className="text-base sm:text-lg md:text-lg text-[#D6E8EE]">
            Développeuse web passionnée par la création de{" "}
            <span className="font-semibold text-[#97CADB]">
              sites modernes, intuitifs et centrés sur l'utilisateur
            </span>
            . Diplômée en génie informatique, je mets ma curiosité et ma rigueur
            au service de chaque projet pour concevoir des interfaces
            performantes, accessibles et esthétiques. J'aime transformer des
            idées en expériences digitales mémorables.
          </p>

          <p className="italic text-sm sm:text-base md:text-base text-[#97CADB]">
            "Créer des expériences web qui allient esthétisme et performance est
            ma passion."
          </p>

          <div className="pt-4 flex justify-center lg:justify-start">
            <button
              onClick={handleContactClick}
              className="flex items-center gap-2 sm:gap-3 bg-[#2AE8A8] hover:bg-[#27D3A0] text-[#002B45] font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-full shadow-md hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1"
            >
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#2AE8A8] rounded-full flex items-center justify-center text-[#002B45]">
                ✉️
              </div>
              <span className="text-sm sm:text-base">Contactez-moi</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
