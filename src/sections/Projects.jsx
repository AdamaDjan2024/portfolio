"use client";

import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Navigation,
  Zoom,
  EffectCoverflow,
  Keyboard,
  A11y,
} from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/zoom";
import "swiper/css/effect-coverflow";

const projects = [
  {
    img: "/billetfacile.png",
    title: "Billet Facile",
    description:
      "Billet Facile est une plateforme moderne qui facilite la création, la gestion et le partage de billets d’événements, de cagnottes et d’invitations. Elle permet aux utilisateurs d’organiser plus facilement leurs activités et de suivre leurs participations en toute simplicité.",
    technologies: ["Next.js", "Tailwind", "Docker", "Git"],
    link: "https://billetfacile.com/",
    buttonText: "Visiter le site",
  },
  {
    img: "/mansadigital.png",
    title: "Mansa Digital",
    description:
      "Mansa Digital est une agence de communication spécialisée dans le digital : création de sites web, conception d’identités visuelles, marketing numérique et accompagnement des entreprises dans leur transformation digitale.",
    technologies: ["Next.js", "Tailwind", "Docker", "Git"],
    link: "https://mansa.digital/",
    buttonText: "Découvrir",
  },
  {
    img: "/guineedata.png",
    title: "Guinée Data",
    description:
      "Guinée Data vise à centraliser et valoriser les données publiques et économiques de Guinée. Elle permet aux journalistes, chercheurs et institutions d’accéder facilement à des informations fiables, favorisant ainsi la transparence et la recherche locale.",
    technologies: ["Next.js", "Tailwind", "Docker", "Git", "Django"],
    link: "https://www.guineedata.org/",
    buttonText: "Explorer",
  },
  {
    img: "/codesansbox.png",
    title: "Projets CodeSandbox",
    description:
      "Une collection de projets front-end développés sur CodeSandbox pour expérimenter, apprendre et explorer de nouvelles approches en React, Tailwind et JavaScript.",
    technologies: ["HTML", "CSS", "JS", "React", "Tailwind", "Git"],
    link: "https://codesandbox.io/dashboard/recent",
    buttonText: "Voir les projets",
  },
  {
    img: "/afribook.png",
    title: "AfriBook",
    description:
      "AfriBook est une plateforme qui met en valeur la littérature africaine. Elle permet aux lecteurs de commander des livres d’auteurs africains, de découvrir de nouvelles œuvres et de participer à la promotion de la culture et de la lecture sur le continent.",
    technologies: ["Next.js", "Tailwind", "Docker", "Git"],
    link: "#",
    buttonText: "En cours",
  },
];

export default function ProjectCarousel() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <section className="relative w-full py-20 overflow-hidden bg-gradient-to-b from-[#0d1117]/90 via-[#1b2735]/85 to-[#0d1117]/95 backdrop-blur-lg">
      {/* Fond général */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/your-background-image.jpg"
          alt="Background"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117]/80 to-[#1b2735]/90" />
      </div>

      {/* Titre principal */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-[#bcd0f7] tracking-wide"
      >
        Mes Projets
      </motion.h2>

      <div className="relative max-w-6xl mx-auto px-4">
        <Swiper
          modules={[
            Pagination,
            Navigation,
            Zoom,
            EffectCoverflow,
            Keyboard,
            A11y,
          ]}
          onSwiper={setSwiperInstance}
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView={1.05}
          breakpoints={{
            640: { slidesPerView: 1.15 },
            768: { slidesPerView: 1.35 },
            1024: { slidesPerView: 1.8 },
            1280: { slidesPerView: 2.2 },
          }}
          spaceBetween={24}
          loop
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          coverflowEffect={{
            rotate: 10,
            stretch: -18,
            depth: 140,
            modifier: 1.1,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          keyboard={{ enabled: true }}
          a11y={{
            prevSlideMessage: "Diapositive précédente",
            nextSlideMessage: "Diapositive suivante",
          }}
        >
          {projects.map((p, i) => {
            const isActive = activeIndex === i;

            return (
              <SwiperSlide
                key={i}
                className={`group rounded-2xl overflow-hidden relative transition-all duration-500 ease-out ${
                  isActive
                    ? "scale-105 opacity-100 z-20"
                    : "scale-90 opacity-60 z-10"
                }`}
                onClick={() => {
                  if (!isActive && swiperInstance)
                    swiperInstance.slideToLoop(i);
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="relative w-full h-80 sm:h-96 md:h-[28rem] lg:h-[32rem] cursor-pointer overflow-hidden rounded-2xl"
                >
                  {/* Image principale */}
                  <Image
                    src={p.img || "/default-placeholder.jpg"}
                    alt={p.title}
                    fill
                    className={`object-cover transition-all duration-700 ${
                      isActive
                        ? "brightness-100 blur-0"
                        : "brightness-75 blur-[1.5px]"
                    }`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 70vw, 50vw"
                  />

                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 transition-all duration-500 ${
                      isActive
                        ? "bg-gradient-to-t from-[#0d1117]/70 via-[#1b2735]/30 to-transparent"
                        : "bg-black/40"
                    }`}
                  />

                  {/* Contenu du projet */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 flex flex-col justify-end p-6 text-white text-left bg-gradient-to-t from-[#0d1117]/80 via-[#1b2735]/40 to-transparent backdrop-blur-[2px]"
                    >
                      <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-[#bcd0f7] drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                        {p.title}
                      </h3>

                      <p className="text-sm md:text-base text-gray-100 leading-relaxed mb-3 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
                        {p.description}
                      </p>

                      <p className="text-xs md:text-sm text-[#a6b9e0] mb-4">
                        Technologies : {p.technologies.join(", ")}
                      </p>

                      {/* Bouton chic */}
                      {p.link === "#" ? (
                        <button
                          type="button"
                          disabled
                          className="inline-block px-6 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-gray-600 to-gray-500 text-white shadow-md cursor-not-allowed opacity-80"
                        >
                          {p.buttonText}
                        </button>
                      ) : (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-block px-6 py-2.5 rounded-xl text-sm font-semibold text-[#0d1117] bg-gradient-to-r from-[#bcd0f7] to-[#89a9e8] hover:from-white hover:to-[#bcd0f7] shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          {p.buttonText}
                        </a>
                      )}
                    </motion.div>
                  )}
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Pagination dynamique */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-6 z-20">
          <div className="px-3 py-1 rounded-full bg-[#1b2735]/70 text-[#bcd0f7] text-sm font-medium">
            {activeIndex + 1} / {projects.length}
          </div>
        </div>

        {/* Navigation */}
        <button
          ref={prevRef}
          aria-label="Précédent"
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#bcd0f7]/30 bg-[#1b2735]/60 backdrop-blur-sm flex items-center justify-center text-[#bcd0f7] hover:bg-[#bcd0f7]/10 active:scale-95 transition-all z-30"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
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

        <button
          ref={nextRef}
          aria-label="Suivant"
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#bcd0f7]/30 bg-[#1b2735]/60 backdrop-blur-sm flex items-center justify-center text-[#bcd0f7] hover:bg-[#bcd0f7]/10 active:scale-95 transition-all z-30"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
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
    </section>
  );
}
