
"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Rocket,
  Send,
  Hourglass,
  UserCheck,
  Briefcase,
  ArrowLeft,
} from "lucide-react";

export default function Timeline() {
  const [selectedYear, setSelectedYear] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const detailRef = useRef(null);

  const timeline = [
    {
      year: "2020",
      title: "Fin de licence",
      description:
        "Licence en genie informatique obtenue a l'Universite Mahatma Gandhi",
      details: (
        <>
          <p>
            Diplomes : Developpement, Analyse et Gestion de projets
            informatiques.
          </p>
          <p>Competences acquises : MySQL, C, C++, SQL, HTML/CSS, JavaScript.</p>
        </>
      ),
      icon: <Send className="w-8 h-8 text-[#002B45]" />,
    },
    {
      year: "2021-2022",
      title: "Calcaire Technologies",
      description: "Debut professionnel en tant que promoteur et commerciale",
      details: (
        <>
          <p>
            Missions : Promotion des produits, support client, gestion des
            ventes, identification de clients, suivi des contrats.
          </p>
          <p>
            Competences acquises : Relation client, negotiation, organisation,
            communication commerciale.
          </p>
        </>
      ),
      icon: <Rocket className="w-8 h-8 text-[#002B45]" />,
    },
    {
      year: "2023",
      title: "Formation & Experiences",
      description: "Formation web & commerciale + assistante commerciale",
      details: (
        <>
          <p>
            Formation : Orange Digital, Canva, Figma, Leadership, Design
            Thinking.
          </p>
          <p>
            Experiences : Developpeuse commerciale, stagiaire assistante
            commerciale.
          </p>
          <p>
            Competences acquises : Communication, planification, relation
            client, gestion de projet.
          </p>
        </>
      ),
      icon: <Briefcase className="w-8 h-8 text-[#002B45]" />,
    },
    {
      year: "2024",
      title: "Front-End Developer",
      description: "Formation a Nimba Hub",
      details: (
        <>
          <p>
            Missions : Devenir developpeur front-end de A a Z, en creant des
            interfaces web, en integrant des designs et en optimisant
            l'experience utilisateur.
          </p>
          <p>
            Technologies : HTML, CSS, JavaScript, React, Tailwind CSS, Git,
            Bootstrap.
          </p>
        </>
      ),
      icon: <UserCheck className="w-8 h-8 text-[#002B45]" />,
    },
    {
      year: "2025",
      title: "Stage Mansa Digitale",
      description: "Stage de developpeur Front-End",
      details: (
        <>
          <p>
            Technologies utilisees : Next.js, React, Tailwind CSS, Docker, Git.
          </p>
          <p>
            Competences acquises : Conception et integration d'interfaces web,
            gestion de la logique fonctionnelle du code, accessibilite,
            optimisation du rendu et performance.
          </p>
        </>
      ),
      icon: <Hourglass className="w-8 h-8 text-[#002B45]" />,
    },
  ];

  useEffect(() => {
    if (selectedYear && detailRef.current) {
      const navbarOffset = 80;
      const elementPosition =
        detailRef.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarOffset,
        behavior: "smooth",
      });
    }
  }, [selectedYear]);

  const handleOpenDetail = (year) => {
    setScrollPosition(window.scrollY);
    setSelectedYear(year);
  };

  const handleCloseDetail = () => {
    setSelectedYear(null);
    setTimeout(() => {
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }, 50);
  };

  const renderDetails = (item) => (
    <div
      ref={detailRef}
      className="mt-6 sm:mt-10 p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl max-w-[90%] sm:max-w-xl mx-auto relative z-20 bg-white"
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-[#2AE8A8] flex items-center justify-center shadow-inner shrink-0">
          {React.cloneElement(item.icon, {
            className: "w-6 h-6 sm:w-8 sm:h-8 text-[#002B45]",
          })}
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#002B45] leading-tight">
          {item.title} <span className="text-base sm:text-xl font-normal">({item.year})</span>
        </h2>
      </div>

      <div className="mt-4 space-y-3">
        <p className="text-sm sm:text-base text-[#002B45]">{item.description}</p>
        <div className="text-sm sm:text-base text-[#002B45] space-y-2">{item.details}</div>
      </div>

      <button
        className="mt-6 px-4 py-2 bg-[#2AE8A8] text-[#002B45] rounded-full hover:bg-[#27D3A0] transition-colors flex items-center gap-2 text-sm sm:text-base font-medium mx-auto sm:mx-0"
        onClick={handleCloseDetail}
      >
        <ArrowLeft className="w-4 h-4" /> Retour
      </button>
    </div>
  );

  return (
    <section className="relative bg-white text-[#002B45] py-14 sm:py-18 md:py-20 px-4 sm:px-6 flex flex-col items-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-14 bg-gradient-to-r from-[#018ABE] to-[#2AE8A8] bg-clip-text text-transparent text-center">
        EXPÉRIENCE
      </h1>

      <div className="relative w-full max-w-4xl mx-auto">
        <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-[#018ABE]/70 via-[#2AE8A8]/60 to-[#D6E8EE]/50 z-0" />

        <div className="flex flex-col space-y-10 sm:space-y-16 relative z-10">
          {timeline.map((item, index) => (
            <div
              key={index}
              className={`relative flex flex-col sm:flex-row ${
                index % 2 === 0
                  ? "sm:justify-end items-start"
                  : "sm:justify-start items-end"
              } w-full`}
            >
              <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-4 sm:w-6 h-4 sm:h-6 bg-white rounded-full border-4 border-[#2AE8A8] shadow-md z-10" />

              <div
                className={`group relative min-w-0 w-full sm:w-[calc(50%-2rem)] p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-white text-[#002B45] shadow-lg sm:shadow-xl transition cursor-pointer z-10 overflow-hidden ${
                  index % 2 === 0
                    ? "sm:ml-auto sm:origin-left"
                    : "sm:mr-auto sm:origin-right"
                }`}
              >
                <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 rounded-full border-2 border-[#2AE8A8] shadow-inner bg-white shrink-0">
                    {React.cloneElement(item.icon, {
                      className: "w-6 h-6 sm:w-8 sm:h-8 text-[#002B45]",
                    })}
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold leading-tight break-words whitespace-normal">
                      {item.title}
                    </h2>
                    <p className="text-xs sm:text-sm mt-1 text-gray-600 break-words whitespace-normal">
                      {item.year}
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base mb-4 text-gray-700 break-words whitespace-normal">
                  {item.description}
                </p>

                <button
                  className="w-full sm:w-auto px-4 py-2 bg-[#2AE8A8] text-[#002B45] rounded-full hover:bg-[#27D3A0] transition text-sm sm:text-base font-medium"
                  onClick={() => handleOpenDetail(item.year)}
                >
                  Voir details
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedYear && renderDetails(timeline.find((item) => item.year === selectedYear))}
      </div>
    </section>
  );
}
