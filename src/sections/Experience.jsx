"use client";

import React from "react";
import {
  GraduationCap,
  Briefcase,
  Handshake,
  Award,
  Code,
  Laptop,
} from "lucide-react";

/**
 * HomeCareerTimeline.react
 * Version améliorée — espacement augmenté, cartes qui n'empiètent pas sur les icônes,
 * alternance précise haut/bas avec chevrons entre noeuds, layout responsive.
 * Utilise Tailwind CSS (assurez-vous que tailwind est configuré dans le projet).
 *
 * Si tu veux les SVG exacts du pin Pinterest, upload l'image et je vectorise les icônes.
 */

export default function HomeCareerTimeline() {
  const timeline = [
    {
      year: "2020",
      title: "Diplôme en Génie Informatique",
      desc: "Spécialisation Analyse et Développement.",
      icon: <GraduationCap className="w-6 h-6 text-blue-900" />,
    },
    {
      year: "2021",
      title: "Première expérience commerciale",
      desc: "Chez Calcaire Technologie.",
      icon: <Briefcase className="w-6 h-6 text-blue-900" />,
    },
    {
      year: "2022",
      title: "Apporteuse d’affaires",
      desc: "Chez Mouna Technologie.",
      icon: <Handshake className="w-6 h-6 text-blue-900" />,
    },
    {
      year: "2023",
      title: "Formations certifiantes",
      desc: "À l’Orange Digital Center.",
      icon: <Award className="w-6 h-6 text-blue-900" />,
    },
    {
      year: "2023 - 2025",
      title: "Formation en Développement Web",
      desc: "Au Nimba Hub.",
      icon: <Code className="w-6 h-6 text-blue-900" />,
    },
    {
      year: "2025",
      title: "Stage en Développement Front-End",
      desc: "Chez Mansa Digitale.",
      icon: <Laptop className="w-6 h-6 text-blue-900" />,
    },
  ];

  const pastelGradients = [
    "from-pink-300 to-pink-200",
    "from-cyan-300 to-cyan-200",
    "from-emerald-300 to-emerald-200",
    "from-amber-300 to-amber-200",
    "from-violet-300 to-violet-200",
    "from-rose-300 to-rose-200",
  ];

  return (
    <section className="py-28 bg-gradient-to-r from-blue-900 to-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16">
          Mon Parcours
        </h2>

        <div className="relative px-4 md:px-8">
          {/* Central horizontal line for md+ */}
          <div className="hidden md:block absolute left-8 right-8 top-1/2 -translate-y-1/2 h-1 bg-cyan-300/70 z-0 rounded-full" />

          {/* Nodes container */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-16 md:gap-0">
            {timeline.map((node, i) => {
              const isUp = i % 2 === 0; // up, down alternation
              const grad = pastelGradients[i % pastelGradients.length];

              return (
                <div
                  key={i}
                  className="w-full md:w-1/6 flex items-center justify-center relative"
                >
                  {/* Big translucent year behind (desktop) */}
                  <span className="hidden md:block absolute top-[-3.5rem] text-5xl font-extrabold opacity-10 select-none pointer-events-none">
                    {node.year}
                  </span>

                  {/* Card container — positioned above or below the center line on md, stacked on mobile */}
                  <div className="flex flex-col items-center md:items-center z-20">
                    {/* Card (absolute on md to avoid overlap) */}
                    <div
                      className={`w-56 md:absolute md:left-1/2 md:-translate-x-1/2 p-4 rounded-xl shadow-xl backdrop-blur-sm border border-white/10 z-30 transform transition-transform duration-300 hover:scale-105`}
                      style={{ top: isUp ? "-7.5rem" : "7.5rem" }}
                    >
                      <h3 className="text-sm font-semibold text-white truncate">
                        {node.title}
                      </h3>
                      <p className="mt-2 text-xs text-cyan-50/90">
                        {node.desc}
                      </p>
                      <a
                        href="/parcours"
                        className="mt-3 inline-block text-sm text-cyan-200 hover:text-cyan-100"
                      >
                        En savoir plus
                      </a>
                    </div>

                    {/* The node (outer pastel ring + inner white circle with icon) */}
                    <div className="relative flex flex-col items-center mt-6 md:mt-0">
                      <div
                        className={`w-24 h-24 rounded-full flex items-center justify-center shadow-2xl border-2 border-white/10 bg-gradient-to-br ${grad} z-20`}
                      >
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                          {node.icon}
                        </div>
                      </div>

                      {/* small central dot */}
                      <div className="w-3 h-3 rounded-full bg-white mt-4 shadow-sm z-10" />

                      {/* Year label for mobile */}
                      <div className="md:hidden mt-3 font-semibold text-sm">
                        {node.year}
                      </div>
                    </div>

                    {/* Arrow chevron between nodes for desktop - we render an arrow to the right for all except last; visual alternation handled by vertical offset */}
                  </div>

                  {/* Connector chevron between nodes — positioned to the right of the node, except last */}
                  {i < timeline.length - 1 && (
                    <div className="hidden md:flex absolute right-[-12%] top-1/2 transform -translate-y-1/2 w-40 items-center justify-center pointer-events-none z-10">
                      <svg
                        width="120"
                        height="40"
                        viewBox="0 0 120 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 20 H120"
                          stroke="rgba(255,255,255,0.12)"
                          strokeWidth="2"
                          strokeDasharray="6 8"
                        />
                        {/* small chevron placed vertically depending on index parity */}
                        <path
                          d="M48 12 L56 20 L48 28"
                          stroke="rgba(255,255,255,0.95)"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          transform={`translate(${0}, ${i % 2 === 0 ? -8 : 8})`}
                        />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom spacing so cards positioned below don't overflow */}
          <div className="h-24 md:h-40" />
        </div>
      </div>
    </section>
  );
}
