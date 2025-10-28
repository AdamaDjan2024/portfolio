"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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

export default function ProjectGallery() {
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

      {/* Grille de projets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative w-full h-56">
              <Image
                src={project.img || "/default-placeholder.jpg"}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#001B4B] mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
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
          </motion.div>
        ))}
      </div>
    </section>
  );
}
