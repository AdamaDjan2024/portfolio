"use client";

import { useState, useEffect } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
} from "react-icons/si";

export default function Skills() {
  const items = [
    {
      name: "HTML",
      percent: 98,
      gradient: ["#FF6B6B", "#D84E41"],
      icon: <SiHtml5 size={64} color="#D84E41" />,
    },
    {
      name: "CSS",
      percent: 95,
      gradient: ["#56CCF2", "#018ABE"],
      icon: <SiCss3 size={64} color="#018ABE" />,
    },
    {
      name: "JavaScript",
      percent: 77,
      gradient: ["#FDE68A", "#F7DF1E"],
      icon: <SiJavascript size={64} color="#F7DF1E" />,
    },
    {
      name: "React",
      percent: 70,
      gradient: ["#61DAFB", "#0A85C6"],
      icon: <SiReact size={64} color="#61DAFB" />,
    },
    {
      name: "Next.js",
      percent: 70,
      gradient: ["#000000", "#434343"],
      icon: <SiNextdotjs size={64} color="#000000" />,
    },
  ];

  const Circle = ({ percent, gradient, icon }) => {
    const [hovered, setHovered] = useState(false);
    const [angle, setAngle] = useState(0);

    useEffect(() => {
      let animation;

      if (hovered) {
        // remplissage rapide mais progressif
        animation = setInterval(() => {
          setAngle((prev) => {
            const next = prev + 6; // vitesse augmentée
            return next >= percent * 3.6 ? percent * 3.6 : next;
          });
        }, 15);
      } else {
        // vidage rapide
        animation = setInterval(() => {
          setAngle((prev) => {
            const next = prev - 12; // vitesse rapide pour vider
            return next <= 0 ? 0 : next;
          });
        }, 10);
      }

      return () => clearInterval(animation);
    }, [hovered, percent]);

    const style = {
      backgroundImage: `conic-gradient(from 0deg, ${gradient[0]} 0deg, ${gradient[1]} ${angle}deg, rgba(255,255,255,0.1) ${angle}deg)`,
      transition: "background-image 0.05s linear",
    };

    return (
      <div
        className="relative w-36 h-36 rounded-full p-1 shadow-xl shadow-black/50 flex items-center justify-center cursor-pointer"
        style={style}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="absolute inset-2 rounded-full bg-gray-900 flex items-center justify-center">
          {icon}
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-24 bg-gray-900 text-gray-100">
      <div className="container px-4 md:px-6">
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-16 tracking-wide">
          Mes Compétences
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-12">
          {items.map((it) => (
            <div
              key={it.name}
              className="flex flex-col items-center text-center group transition-transform hover:scale-105 focus:outline-none rounded"
            >
              <Circle
                percent={it.percent}
                gradient={it.gradient}
                icon={it.icon}
              />
              <h3
                className="mt-5 font-bold text-2xl md:text-3xl tracking-tight transition-colors duration-300"
                style={{
                  background: `linear-gradient(to right, ${it.gradient[0]}, ${it.gradient[1]})`,
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                {it.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
