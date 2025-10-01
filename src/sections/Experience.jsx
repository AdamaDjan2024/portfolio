"use client";

import { useState } from "react";
import {
  GraduationCap,
  Briefcase,
  Handshake,
  Award,
  Code,
  Laptop,
} from "lucide-react";

export default function HomeCareerTimeline() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const truncateText = (text, maxLength) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  const timeline = [
    {
      year: "2020",
      desc: "Obtention du diplôme en Génie Informatique.",
      details: "Spécialisation Analyse et Développement.",
      icon: <GraduationCap className="w-6 h-6 text-white" />,
      type: "education",
    },
    {
      year: "2021",
      desc: "Première expérience commerciale chez Calcaire Technologie.",
      details:
        "Le rôle consistait à représenter et promouvoir les produits/services de l’entreprise, attirer de nouveaux clients et accroître la visibilité de la marque.",
      icon: <Briefcase className="w-6 h-6 text-white" />,
      type: "experience",
    },
    {
      year: "2022",
      desc: "Apporteuse d’affaires chez Mouna Technologie.",
      details:
        "Identifier des opportunités, mettre en relation l’entreprise avec de nouveaux partenaires/clients et contribuer au développement du portefeuille commercial.",
      icon: <Handshake className="w-6 h-6 text-white" />,
      type: "experience",
    },
    {
      year: "2023",
      desc: "Formations certifiantes à l’Orange Digital Center.",
      details:
        "Canva, Figma, Leadership, Design Thinking. Stage commercial en tant qu’assistante chez DKMAK Corporate, avec pour mission d’appuyer l’équipe dans la prospection et la gestion des relations clients.",
      icon: <Award className="w-6 h-6 text-white" />,
      type: "certification",
    },
    {
      year: "2023 - 2025",
      desc: "Formation approfondie en Développement Web Front-End au Nimba Hub.",
      details:
        "Formation approfondie en Développement Web Front-End (Octobre 2023 - Septembre 2025). Complétée par des cours en ligne sur Udemy en UX/UI Design, visant à améliorer l’expérience utilisateur et l’interface des applications web.",
      icon: <Code className="w-6 h-6 text-white" />,
      type: "education",
    },
    {
      year: "2025",
      desc: "Stage en cours chez Mansa Digitale en tant que Développeuse Front-End.",
      details:
        "Missions : concevoir et développer des interfaces web modernes, transformer des maquettes Figma en pages fonctionnelles, fluides et accessibles, tout en garantissant une excellente expérience utilisateur sur tous types d’écrans.",
      icon: <Laptop className="w-6 h-6 text-white" />,
      type: "experience",
    },
  ];

  const totalPages = Math.ceil(timeline.length / itemsPerPage);
  const currentItems = timeline.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <section className="py-20 bg-gray-900 text-gray-100">
      <div className="container px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Mon Parcours
        </h2>

        {/* Timeline horizontale */}
        <div className="flex justify-center items-stretch gap-4">
          {currentItems.map((item, i) => (
            <div
              key={i}
              className="w-[220px] h-[260px] flex flex-col justify-between bg-gray-800/70 rounded-2xl p-6 text-center cursor-pointer transform transition-all duration-300 shadow-md hover:scale-105 hover:shadow-xl"
            >
              <div>
                <h3 className="text-xl font-bold mb-3">{item.year}</h3>
                <p className="text-sm text-gray-300">
                  {truncateText(item.desc, 80)}
                </p>
              </div>
              <div className="w-12 h-12 mx-auto flex items-center justify-center bg-blue-500 rounded-lg">
                {item.icon}
              </div>
              <a
                href="/parcours"
                className="mt-2 text-primary-500 hover:underline text-sm"
              >
                Voir plus
              </a>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-8 gap-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 rounded-full transition-all duration-300 ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
