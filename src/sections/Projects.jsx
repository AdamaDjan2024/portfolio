"use client";

import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Zoom, EffectCoverflow } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/zoom";
import "swiper/css/effect-coverflow";

const projects = [
  {
    img: "/biais-facile.png",
    title: "Biais Facile",
    description:
      "Une plateforme pour comprendre et résoudre les biais cognitifs, avec des outils interactifs.",
    technologies: ["Next.js", "Tailwind", "Booker", "Git"],
    link: "https://biaisfacile.com",
    buttonText: "Visiter le site",
  },
  {
    img: "/mansa-digital.png",
    title: "Mansa Digital",
    description: "Présentation de l'agence Mansa Digital et de ses services.",
    technologies: ["Next.js", "Tailwind", "Booker", "Git"],
    link: "https://mansadigital.com",
    buttonText: "Plus d'infos",
  },
  {
    img: "/codesandbox.png",
    title: "Projets CodeSandbox",
    description:
      "J'ai réalisé plusieurs projets front-end sur CodeSandbox pour expérimenter et apprendre.",
    technologies: ["HTML", "CSS", "JS", "React", "Tailwind", "Git"],
    link: "https://codesandbox.io/u/tonpseudo",
    buttonText: "Voir tous mes projets",
  },
  {
    img: "/afribook.png",
    title: "AfriBook",
    description:
      "Mon projet personnel en cours pour valoriser la littérature africaine, les auteurs et la culture. Intégration possible de l'artisanat et d'autres éléments culturels.",
    technologies: ["Next.js", "Tailwind", "Booker", "Git"],
    link: "#",
    buttonText: "En cours de réalisation",
  },
];

export default function ProjectCarousel() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <section className="w-full py-20 bg-gradient-to-b from-[#050417] via-[#0b0630]/60 to-[#060214]">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
        Projets
      </h2>

      <div className="relative max-w-6xl mx-auto px-4">
        <Swiper
          modules={[Pagination, Navigation, Zoom, EffectCoverflow]}
          onSwiper={setSwiperInstance}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1.25} // adapte à toutes tailles d'écran
          breakpoints={{
            768: { slidesPerView: 1.5 },
            1024: { slidesPerView: 2.1 },
            1280: { slidesPerView: 2.5 },
          }}
          spaceBetween={24}
          zoom={true}
          loop={true}
          loopedSlides={projects.length}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
        >
          {projects.map((p, i) => (
            <SwiperSlide
              key={i}
              className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10 transition-transform duration-500 ease-out"
            >
              <div className="relative w-full h-80 sm:h-96 md:h-[28rem] lg:h-[32rem]">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover select-none"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg md:text-xl font-semibold">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-gray-200/90">
                    {p.description}
                  </p>
                  <p className="mt-2 text-xs md:text-sm text-gray-400">
                    Tech : {p.technologies.join(", ")}
                  </p>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-3 inline-block px-4 py-2 rounded-lg text-white text-sm font-medium transition-colors ${
                      p.link === "#"
                        ? "bg-gray-600 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700"
                    }`}
                  >
                    {p.buttonText}
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button
          ref={prevRef}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-transform duration-150 z-10"
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
          className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-transform duration-150 z-10"
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
