"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
} from "react-icons/si";

const skills = [
  {
    label: "HTML",
    icon: SiHtml5,
    percent: 98,
    iconColor: "#E44D26",
    ringColor: "#F15C59",
    labelColor: "#FF6B6B",
  },
  {
    label: "CSS",
    icon: SiCss3,
    percent: 95,
    iconColor: "#1693CC",
    ringColor: "#2DA8DA",
    labelColor: "#42B6E8",
  },
  {
    label: "JavaScript",
    icon: SiJavascript,
    percent: 77,
    iconColor: "#F7DF1E",
    ringColor: "#F6D54A",
    labelColor: "#F6D54A",
  },
  {
    label: "React",
    icon: SiReact,
    percent: 70,
    iconColor: "#61DAFB",
    ringColor: "#51C6F2",
    labelColor: "#51C6F2",
  },
  {
    label: "Next.js",
    icon: SiNextdotjs,
    percent: 70,
    iconColor: "#111111",
    ringColor: "#171717",
    labelColor: "#171717",
  },
];

function SkillItem({ skill }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = skill.icon;
  const radius = 86;
  const circumference = 2 * Math.PI * radius;
  const progress = circumference - (skill.percent / 100) * circumference;

  return (
    <div
      className="group flex flex-col items-center text-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative flex h-40 w-40 items-center justify-center sm:h-44 sm:w-44">
        <svg
          viewBox="0 0 200 200"
          className="absolute inset-0 h-full w-full -rotate-90 drop-shadow-[0_20px_34px_rgba(2,12,27,0.28)]"
          aria-hidden="true"
        >
          <circle
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke="rgba(148,163,184,0.18)"
            strokeWidth="10"
          />
          <circle
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke={skill.ringColor}
            strokeWidth="10"
            strokeLinecap="butt"
            strokeDasharray={circumference}
            strokeDashoffset={isHovered ? progress : circumference}
            style={{
              transition: "stroke-dashoffset 1400ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          />
        </svg>

        <div className="relative flex h-[7.7rem] w-[7.7rem] items-center justify-center rounded-full border border-white/10 bg-slate-900/45 shadow-[inset_0_12px_20px_rgba(15,23,42,0.52)] transition-transform duration-300 group-hover:-translate-y-0.5 sm:h-[8.2rem] sm:w-[8.2rem]">
          <Icon
            className="text-[4.1rem] transition-transform duration-300 group-hover:scale-105 sm:text-[4.3rem]"
            style={{ color: skill.iconColor }}
          />
        </div>
      </div>
      <h3
        className="mt-6 text-[clamp(1.25rem,1.02rem+0.9vw,1.72rem)] font-bold tracking-tight text-slate-100"
      >
        {skill.label}
      </h3>
      <p className="mt-1 text-sm text-slate-400">{skill.percent}%</p>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20">
      <div className="page-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="section-title">Compétences</p>
          <h2 className="title-lg mt-5 font-extrabold text-slate-50">
            Mes Competences
          </h2>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-7xl gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {skills.map((skill) => (
            <SkillItem key={skill.label} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
