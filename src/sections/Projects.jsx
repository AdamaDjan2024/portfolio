"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css/navigation";

export default function ProjectCarousel() {
  const projects = [
    {
      img: "/picture.jpeg", // Example project image
      title: "E-commerce Website",
      description: "A modern e-commerce platform with a responsive design and secure payment integration.",
    },
    {
      img: "/picture.jpeg",
      title: "Portfolio Website",
      description: "A personal portfolio showcasing skills, projects, and contact information.",
    },
    {
      img: "/picture.jpeg",
      title: "Blog Platform",
      description: "A blogging platform with user authentication and content management features.",
    },
    {
      img: "/picture.jpeg",
      title: "Social Media App",
      description: "A social media application with real-time chat and post sharing capabilities.",
    },
  ];

  return (
    <section className="w-full bg-black text-gray-100 py-16"> {/* Updated background to black */}
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
          Projets
        </h2>

        <Swiper
          modules={[EffectCoverflow, Pagination, Navigation]} // Swiper modules
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          className="py-6"
        >
          {projects.map((p, i) => (
            <SwiperSlide
              key={i}
              style={{ width: 280, height: 420 }}
              className="rounded-2xl overflow-hidden relative bg-white shadow-lg"
            >
              <Image src={p.img} alt={p.title} fill className="object-cover" />
              <div className="absolute bottom-4 left-4 right-4 text-gray-900 text-sm font-medium drop-shadow-lg bg-white bg-opacity-75 p-2 rounded">
                <h3 className="text-lg font-semibold mb-1">{p.title}</h3>
                <p className="text-sm">{p.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
