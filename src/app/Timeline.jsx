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

export default function Timeline() {
  const [selectedYear, setSelectedYear] = useState(null);
  const detailRef = useRef(null);

  const timeline = [
    {
      year: "2020",
      title: "Fin de licence",
      description:
        "Licence en génie informatique obtenue à l'Université Malet Magali",
      details: (
        <>
          <p>
            Diplômes : Développement, Analyse et Gestion de projets
            informatiques.
          </p>
          <p>
            Compétences acquises : MySQL, C, C++, SQL, HTML/CSS, JavaScript.
          </p>
        </>
      ),
      icon: (
        <div className="w-8 h-8 flex items-center justify-center">
          <Send className="w-8 h-8 text-[#0f2a3f]" />
        </div>
      ),
      color: "bg-[#c2f0f7]",
    },
    {
      year: "2021-2022",
      title: "Calcaire Technologies",
      description: "Début professionnel en tant que promoteur et commerciale",
      details: (
        <>
          <p>
            Missions : Promotion des produits, support client, gestion des
            ventes, identification de clients, suivi des contrats.
          </p>
          <p>
            Compétences acquises : Relation client, négociation, organisation,
            communication commerciale.
          </p>
        </>
      ),
      icon: (
        <div className="w-8 h-8 flex items-center justify-center">
          <Rocket className="w-8 h-8 text-[#0f2a3f]" />
        </div>
      ),
      color: "bg-[#ffecc2]",
    },
    {
      year: "2023",
      title: "Formation & Expériences ",
      description: "Formation web & commerciale + assistante commerciale",
      details: (
        <>
          <p>
            Formation : Orange Digital, Canva, Figma, Leadership, Design
            Thinking.
          </p>
          <p>
            Expériences : Développeuse commerciale, stagiaire assistante
            commerciale.
          </p>
          <p>
            Compétences acquises : Communication, planification, relation
            client, gestion de projet.
          </p>
        </>
      ),
      icon: (
        <div className="w-8 h-8 flex items-center justify-center">
          <Briefcase className="w-8 h-8 text-[#0f2a3f]" />
        </div>
      ),
      color: "bg-[#d6eaff]",
    },
    {
      year: "2024",
      title: "Front-End Developer",
      description: "Formation à Nimba Hub",
      details: (
        <>
          <p>
            Missions : Devenir développeur front-end de A à Z, en créant des
            interfaces web, en intégrant des designs et en optimisant
            l’expérience utilisateur. La formation mettait l’accent sur la
            logique JavaScript et React, comprendre comment structurer un code
            efficace, gérer l’interactivité et la dynamique des composants pour
            créer des applications web fonctionnelles et réactives.
          </p>
          <p>
            Technologies : HTML, CSS, JavaScript, React, Tailwind CSS, Git,
            Bootstrap.
          </p>
        </>
      ),
      icon: (
        <div className="w-8 h-8 flex items-center justify-center">
          <UserCheck className="w-8 h-8 text-[#0f2a3f]" />
        </div>
      ),
      color: "bg-[#ffe4b5]",
    },

    {
      year: "2025",
      title: "Stage Mansa Digitale",
      description: "Stage de développeur Front-End",
      details: (
        <>
          <p>
            Technologies utilisées : Next.js, React, Tailwind CSS, Docker, Git.
          </p>
          <p>
            Compétences acquises : Conception et intégration d'interfaces web,
            gestion de la logique fonctionnelle du code, accessibilité,
            optimisation du rendu et performance.
          </p>
        </>
      ),
      icon: (
        <div className="w-8 h-8 flex items-center justify-center">
          <Hourglass className="w-8 h-8 text-[#0f2a3f]" />
        </div>
      ),
      color: "bg-[#c2f0f7]",
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

  const renderDetails = (item) => (
    <div
      ref={detailRef}
      className="mt-10 p-6 rounded-2xl shadow-2xl max-w-xl mx-auto relative z-20 bg-white"
    >
      <div className="flex items-center gap-4">
        <div
          className={`w-16 h-16 rounded-full border-2 border-[#0f2a3f] flex items-center justify-center ${item.color}`}
        >
          {item.icon}
        </div>
        <h2 className="text-2xl font-bold text-[#0f2a3f]">
          {item.title} ({item.year})
        </h2>
      </div>
      <p className="mt-4 text-[#0f2a3f]">{item.description}</p>
      <div className="mt-2 text-[#0f2a3f]">{item.details}</div>
      <button
        className="mt-4 px-4 py-2 bg-[#0f2a3f] text-white rounded-full hover:bg-[#133d5c] transition flex items-center gap-2"
        onClick={() => setSelectedYear(null)}
      >
        <ArrowLeft className="w-4 h-4" /> Retour
      </button>
    </div>
  );

  return (
    <section className="relative bg-[#0f2a3f] text-white py-20 px-6 flex flex-col items-center">
      <h1 className="text-5xl md:text-4xl font-bold mb-16 bg-gradient-to-r from-[#4ade80] via-[#3b82f6] to-[#facc15] bg-clip-text text-transparent text-center">
        EXPÉRIENCE
      </h1>

      <div className="relative w-full max-w-4xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-[#4ade80]/70 via-[#3b82f6]/60 to-[#facc15]/70 z-0" />

        <div className="flex flex-col space-y-16 relative z-10">
          {timeline.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-center justify-${
                index % 2 === 0 ? "start" : "end"
              } w-full`}
            >
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 ${item.color} rounded-full border-4 border-[#0f2a3f] shadow-md z-10`}
              />
              <div
                className={`group relative w-[calc(50%-2rem)] p-6 rounded-2xl ${
                  item.color
                } text-[#0f2a3f] shadow-xl hover:shadow-2xl transition cursor-pointer z-10 ${
                  index % 2 === 0
                    ? "ml-auto origin-left"
                    : "mr-auto origin-right"
                } hover:scale-105`}
                onClick={() => setSelectedYear(item.year)}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex items-center justify-center w-14 h-14 rounded-full border-2 border-[#0f2a3f] ${item.color} shadow-inner`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{item.title}</h2>
                    <p className="text-sm mt-1">{item.year}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedYear &&
          renderDetails(timeline.find((item) => item.year === selectedYear))}
      </div>
    </section>
  );
}
