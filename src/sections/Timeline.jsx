"use client";

import { useState, useRef, useEffect } from "react";
import {
  Rocket,
  Send,
  Hourglass,
  UserCheck,
  Briefcase,
  ArrowLeft,
} from "lucide-react";
import Reveal from "@/components/Reveal";

export default function Timeline() {
  const [selectedYear, setSelectedYear] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const detailRef = useRef(null);

  const timeline = [
    {
      year: "2020",
      title: "Fin de licence",
      description:
        "Licence en génie informatique obtenue à l'Université Mahatma Gandhi",
      details: (
        <>
          <p>Diplômes : Développement, Analyse et Gestion de projets informatiques.</p>
          <p>Compétences acquises : MySQL, C, C++, SQL, HTML/CSS, JavaScript.</p>
        </>
      ),
      icon: <Send className="h-8 w-8 text-cyan-100" />,
    },
    {
      year: "2021-2022",
      title: "Calcaire Technologies",
      description: "Début professionnel en tant que promoteur et commerciale",
      details: (
        <>
          <p>
            Missions : Promotion des produits, support client, gestion des ventes, identification
            de clients, suivi des contrats.
          </p>
          <p>Compétences acquises : Relation client, négociation, organisation, communication commerciale.</p>
        </>
      ),
      icon: <Rocket className="h-8 w-8 text-cyan-100" />,
    },
    {
      year: "2023",
      title: "Formation & Expériences",
      description: "Formation web & commerciale + assistante commerciale",
      details: (
        <>
          <p>Formation : Orange Digital, Canva, Figma, Leadership, Design Thinking.</p>
          <p>Expériences : Développeuse commerciale, stagiaire assistante commerciale.</p>
          <p>Compétences acquises : Communication, planification, relation client, gestion de projet.</p>
        </>
      ),
      icon: <Briefcase className="h-8 w-8 text-cyan-100" />,
    },
    {
      year: "2024",
      title: "Front-End Developer",
      description: "Formation à Nimba Hub",
      details: (
        <>
          <p>
            Missions : Devenir développeur front-end de A à Z, en créant des interfaces web, en intégrant
            des designs et en optimisant l’expérience utilisateur.
          </p>
          <p>Technologies : HTML, CSS, JavaScript, React, Tailwind CSS, Git, Bootstrap.</p>
        </>
      ),
      icon: <UserCheck className="h-8 w-8 text-cyan-100" />,
    },
    {
      year: "2025",
      title: "Stage Mansa Digitale",
      description: "Stage de développeur Front-End",
      details: (
        <>
          <p>Technologies utilisées : Next.js, React, Tailwind CSS, Docker, Git.</p>
          <p>
            Compétences acquises : Conception et intégration d’interfaces web, gestion de la logique
            fonctionnelle du code, accessibilité, optimisation du rendu et performance.
          </p>
        </>
      ),
      icon: <Hourglass className="h-8 w-8 text-cyan-100" />,
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
      className="surface-card relative z-20 mx-auto mt-10 max-w-xl p-6"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-cyan-200/35 bg-slate-900/50 shadow-inner">
          {item.icon}
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-50">{item.title}</h2>
          <p className="mt-1 text-sm text-slate-400">{item.year}</p>
        </div>
      </div>
      <p className="mt-4 text-slate-200/80">{item.description}</p>
      <div className="mt-2 text-slate-300/75">{item.details}</div>
      <button
        className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.08]"
        onClick={handleCloseDetail}
      >
        <ArrowLeft className="w-4 h-4" /> Retour
      </button>
    </div>
  );

  return (
    <section className="relative py-16 sm:py-20">
      <div className="page-shell flex flex-col items-center">
        <Reveal
          as="h1"
          className="title-lg mb-14 bg-gradient-to-r from-cyan-200 to-teal-200 bg-clip-text text-center font-extrabold text-transparent"
        >
          EXPÉRIENCE
        </Reveal>

        <div className="relative w-full max-w-4xl mx-auto">
          <div className="absolute left-1/2 z-0 h-full w-[2px] -translate-x-1/2 transform bg-gradient-to-b from-cyan-200/70 via-cyan-200/35 to-white/5" />

          <div className="flex flex-col space-y-16 relative z-10">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center w-full ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <div className="absolute left-1/2 z-10 h-6 w-6 -translate-x-1/2 transform rounded-full border-4 border-cyan-200/80 bg-slate-950 shadow-md" />
                <div
                  className={`group surface-card relative z-10 w-full cursor-pointer rounded-2xl p-6 text-slate-200 transition duration-300 hover:-translate-y-0.5 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0
                      ? "md:ml-auto md:origin-left"
                      : "md:mr-auto md:origin-right"
                  }`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-200/35 bg-slate-900/55 shadow-inner">
                      {item.icon}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-slate-50">{item.title}</h2>
                      <p className="mt-1 text-sm text-slate-400">{item.year}</p>
                    </div>
                  </div>

                  <button
                    className="mt-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-slate-100 transition duration-300 hover:bg-white/[0.08]"
                    onClick={() => handleOpenDetail(item.year)}
                  >
                    Voir détails
                  </button>
                </div>
              </div>
            ))}
          </div>

          {selectedYear &&
            renderDetails(timeline.find((item) => item.year === selectedYear))}
        </div>
      </div>
    </section>
  );
}
