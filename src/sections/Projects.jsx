"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Keyboard, A11y } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-coverflow";

const projects = [
  {
    img: "/billetfacile.png",
    title: "Billet Facile",
    description:
      "Billet Facile est une plateforme moderne qui facilite la création, la gestion et le partage de billets d’événements, de cagnottes et d’invitations.",
    technologies: ["Next.js", "Tailwind", "Docker", "Git"],
    link: "https://billetfacile.com/",
    buttonText: "Visiter le site",
  },
  {
    img: "/mansadigital.png",
    title: "Mansa Digital",
    description:
      "Agence de communication digitale spécialisée dans la création de sites web, le marketing et la transformation numérique.",
    technologies: ["Next.js", "Tailwind", "Docker", "Git"],
    link: "https://mansa.digital/",
    buttonText: "Découvrir",
  },
  {
    img: "/guineedata.png",
    title: "Guinée Data",
    description:
      "Plateforme qui centralise et valorise les données publiques et économiques de Guinée pour plus de transparence et d’accès à l’information.",
    technologies: ["Next.js", "Tailwind", "Django"],
    link: "https://www.guineedata.org/",
    buttonText: "Explorer",
  },
];

export default function ProjectCarousel() {
  const [swiper, setSwiper] = useState(null);
  const [announce, setAnnounce] = useState("");

  return (
    <section className="relative w-full py-24 bg-gray-50">
      {/* Titre principal */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-5xl md:text-5xl font-bold mb-16 text-center text-[#001B4B] tracking-wide"
      >
        Mes Projets
      </motion.h2>

      <div className="relative max-w-7xl mx-auto px-6">
        <Swiper
          className="!bg-gray-50"
          onSwiper={(sw) => {
            setSwiper(sw);
            // Initialisation avec un délai pour s'assurer que tout est bien chargé
            setTimeout(() => {
              sw.slideTo(1, 0);
            }, 100);
          }}
          modules={[Autoplay, EffectCoverflow, Keyboard, A11y]}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          loop={true}
          loopedSlides={3} // Assure un nombre suffisant de slides dupliqués
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          allowTouchMove={true} // Permet la navigation tactile
          watchSlidesProgress={true} // Améliore le suivi des slides
          effect="coverflow"
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 120,
            modifier: 1,
            slideShadows: true,
          }}
          keyboard={{ enabled: true }}
          onSlideChange={(swiper) => {
            const realIndex =
              (swiper.realIndex ?? swiper.activeIndex) % projects.length;
            // Annonce pour les lecteurs d'écran
            setAnnounce(
              `Projet ${projects[realIndex]?.title || ""} - ${
                realIndex + 1
              } sur ${projects.length} projets`
            );
          }}
          breakpoints={{
            // keep 3 on medium+ screens; on small screens show 1 for usability
            320: { slidesPerView: 1, spaceBetween: 12 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center"
              role="group"
              aria-label={`Projet ${index + 1} sur ${projects.length}: ${
                project.title
              }`}$
              
            >
              <div
                className="relative w-full max-w-sm h-96 rounded-2xl overflow-hidden shadow-lg focus:outline-none focus:ring-4 focus:ring-[#2AE8A8]/40"
                tabIndex={0}
              >
                <Image
                  src={project.img || "/image-par-defaut.jpg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-100/80 backdrop-blur-md">
                  <h3 className="text-lg font-semibold text-[#001B4B] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-800 mb-4">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 text-sm font-medium text-white bg-[#2AE8A8] hover:bg-[#24C896] rounded-md transition-colors duration-300"
                  >
                    {project.buttonText}
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Boutons de navigation */}
        <div className="flex justify-between items-center mt-8">
          <button
            aria-label="Projet précédent"
            onClick={() => {
              if (swiper) {
                swiper.allowSlidePrev = true; // S'assure que la navigation vers la gauche est activée
                swiper.slidePrev(300, true); // Ajoute une durée de transition et force la navigation
                swiper.autoplay.start();
              }
            }}
            className="w-12 h-12 rounded-full bg-[#2AE8A8] text-[#001B4B] flex items-center justify-center shadow-lg hover:bg-[#24C896] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2AE8A8]"
            tabIndex={0}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="sr-only" aria-live="polite">
            {announce}
          </div>

          <button
            aria-label="Projet suivant"
            onClick={() => {
              if (swiper) {
                swiper.slideNext();
                // Assure que l'autoplay continue après le clic
                swiper.autoplay.start();
              }
            }}
            className="w-12 h-12 rounded-full bg-[#2AE8A8] text-[#001B4B] flex items-center justify-center shadow-lg hover:bg-[#24C896] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2AE8A8]"
            tabIndex={0}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
