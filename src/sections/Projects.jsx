// "use client";

// import { useRef, useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import {
//   Pagination,
//   Navigation,
//   Zoom,
//   EffectCoverflow,
//   Keyboard,
//   A11y,
// } from "swiper/modules";
// import Image from "next/image";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "swiper/css/zoom";
// import "swiper/css/effect-coverflow";

// const projects = [
//   {
//     img: "/biais-facile.png",
//     title: "Billet Facile",
//     description:
//       "Une plateforme pour comprendre et résoudre les biais cognitifs, avec des outils interactifs.",
//     technologies: ["Next.js", "Tailwind", "Booker", "Git"],
//     link: "https://biaisfacile.com",
//     buttonText: "Visiter le site",
//   },
//   {
//     img: "/mansa-digital.png",
//     title: "Mansa Digital",
//     description: "Présentation de l'agence Mansa Digital et de ses services.",
//     technologies: ["Next.js", "Tailwind", "Booker", "Git"],
//     link: "https://mansadigital.com",
//     buttonText: "Plus d'infos",
//   },
//   {
//     img: "/codesandbox.png",
//     title: "Projets CodeSandbox",
//     description:
//       "J'ai réalisé plusieurs projets front-end sur CodeSandbox pour expérimenter et apprendre.",
//     technologies: ["HTML", "CSS", "JS", "React", "Tailwind", "Git"],
//     link: "https://codesandbox.io/u/tonpseudo",
//     buttonText: "Voir tous mes projets",
//   },
//   {
//     img: "/afribook.png",
//     title: "AfriBook",
//     description:
//       "Projet pour valoriser la littérature africaine et les auteurs du continent.",
//     technologies: ["Next.js", "Tailwind", "Booker", "Git"],
//     link: "#",
//     buttonText: "En cours",
//   },
// ];

// export default function ProjectCarousel() {
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);
//   const [swiperInstance, setSwiperInstance] = useState(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     if (swiperInstance && prevRef.current && nextRef.current) {
//       swiperInstance.params.navigation.prevEl = prevRef.current;
//       swiperInstance.params.navigation.nextEl = nextRef.current;
//       swiperInstance.navigation.init();
//       swiperInstance.navigation.update();
//     }
//   }, [swiperInstance]);

//   return (
//     <section className="w-full py-20 bg-gradient-to-b from-[#050417] via-[#0b0630]/70 to-[#060214] overflow-hidden">
//       <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-white">
//         Projets
//       </h2>

//       <div className="relative max-w-6xl mx-auto px-4">
//         <Swiper
//           modules={[
//             Pagination,
//             Navigation,
//             Zoom,
//             EffectCoverflow,
//             Keyboard,
//             A11y,
//           ]}
//           onSwiper={setSwiperInstance}
//           effect="coverflow"
//           grabCursor
//           centeredSlides
//           slidesPerView={1.05}
//           breakpoints={{
//             640: { slidesPerView: 1.15 },
//             768: { slidesPerView: 1.35 },
//             1024: { slidesPerView: 1.8 },
//             1280: { slidesPerView: 2.2 },
//           }}
//           spaceBetween={24}
//           loop
//           onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//           coverflowEffect={{
//             rotate: 10,
//             stretch: -18,
//             depth: 140,
//             modifier: 1.1,
//             slideShadows: false,
//           }}
//           pagination={{ clickable: true }}
//           keyboard={{ enabled: true }}
//           a11y={{
//             prevSlideMessage: "Diapositive précédente",
//             nextSlideMessage: "Diapositive suivante",
//           }}
//         >
//           {projects.map((p, i) => {
//             const isActive = activeIndex === i;
//             const isPrev = activeIndex - 1 === i;
//             const isNext = activeIndex + 1 === i;
//             const isLastActive = activeIndex === projects.length - 1;

//             // logique d'affichage du contenu au survol ou auto-preview
//             const showHoverPreview =
//               !isLastActive && isPrev && !isActive
//                 ? false
//                 : isNext || (!isActive && !isPrev && !isNext);

//             return (
//               <SwiperSlide
//                 key={i}
//                 className={`group rounded-2xl overflow-hidden transition-all duration-500 ease-out relative ${
//                   isActive
//                     ? "scale-105 opacity-100 z-20"
//                     : "scale-90 opacity-75 z-10"
//                 }`}
//                 onClick={() => {
//                   if (!isActive && swiperInstance)
//                     swiperInstance.slideToLoop(i);
//                 }}
//               >
//                 <div className="relative w-full h-80 sm:h-96 md:h-[28rem] lg:h-[32rem] cursor-pointer overflow-hidden">
//                   {/* Image principale */}
//                   <Image
//                     src={p.img}
//                     alt={p.title}
//                     fill
//                     className={`object-cover transition-all duration-700 ${
//                       isActive ? "brightness-100" : "brightness-60"
//                     }`}
//                     sizes="(max-width: 768px) 100vw, (max-width: 1280px) 70vw, 50vw"
//                   />

//                   {/* Overlay sombre */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

//                   {/* Contenu */}
//                   <div
//                     className={`absolute inset-0 flex flex-col justify-end p-5 text-white text-left transition-all duration-500 ${
//                       isActive
//                         ? "bg-black/40 backdrop-blur-sm"
//                         : "bg-black/60 opacity-0 group-hover:opacity-100"
//                     }`}
//                   >
//                     <div className="transition-all">
//                       <h3
//                         className={`font-semibold transition-all ${
//                           isActive
//                             ? "text-2xl mb-3"
//                             : "text-lg mb-2 text-gray-200"
//                         }`}
//                       >
//                         {p.title}
//                       </h3>

//                       {/* Carte active */}
//                       {isActive ? (
//                         <>
//                           <p className="text-sm md:text-base text-gray-200 leading-relaxed mb-3">
//                             {p.description}
//                           </p>
//                           <p className="text-xs md:text-sm text-gray-300">
//                             Tech : {p.technologies.join(", ")}
//                           </p>

//                           {p.link === "#" ? (
//                             <button
//                               type="button"
//                               disabled
//                               className="mt-4 inline-block px-4 py-2 rounded-lg text-white text-sm font-medium bg-gray-600 cursor-not-allowed opacity-90"
//                             >
//                               {p.buttonText}
//                             </button>
//                           ) : (
//                             <a
//                               href={p.link}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               onClick={(e) => e.stopPropagation()}
//                               className="mt-4 inline-block px-4 py-2 rounded-lg text-white text-sm font-medium bg-blue-600 hover:bg-blue-700 transition-colors"
//                             >
//                               {p.buttonText}
//                             </a>
//                           )}
//                         </>
//                       ) : showHoverPreview ? (
//                         // Carte droite ou autre (preview visible sans hover)
//                         <div
//                           className={`block transition-transform duration-500 ${
//                             isNext ? "translate-x-2" : ""
//                           }`}
//                         >
//                           <p className="text-xs text-gray-300 line-clamp-2 mb-2">
//                             {p.description}
//                           </p>
//                           <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-700/50 rounded-md">
//                             Voir plus →
//                           </span>
//                         </div>
//                       ) : null}
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             );
//           })}
//         </Swiper>

//         {/* Pagination dynamique */}
//         <div className="absolute left-1/2 -translate-x-1/2 bottom-6 z-20">
//           <div className="px-3 py-1 rounded-full bg-black/50 text-white text-sm font-medium">
//             {activeIndex + 1} / {projects.length}
//           </div>
//         </div>

//         {/* Navigation */}
//         <button
//           ref={prevRef}
//           aria-label="Précédent"
//           className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/30 bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/10 active:scale-95 transition-all z-30"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="18"
//             height="18"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <path d="M15 18l-6-6 6-6" />
//           </svg>
//         </button>

//         <button
//           ref={nextRef}
//           aria-label="Suivant"
//           className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/30 bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/10 active:scale-95 transition-all z-30"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="18"
//             height="18"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <path d="M9 6l6 6-6 6" />
//           </svg>
//         </button>
//       </div>
//     </section>
//   );
// }
