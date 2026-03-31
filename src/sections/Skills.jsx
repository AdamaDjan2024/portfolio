"use client";

import { useState } from "react";
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
      className="flex flex-col items-center text-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative flex h-44 w-44 items-center justify-center sm:h-48 sm:w-48">
        <svg
          viewBox="0 0 200 200"
          className="absolute inset-0 h-full w-full -rotate-90 drop-shadow-[0_22px_40px_rgba(15,23,42,0.08)]"
          aria-hidden="true"
        >
          <circle
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke="#edf1f4"
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

        <div className="relative flex h-[8.3rem] w-[8.3rem] items-center justify-center rounded-full bg-white shadow-[inset_0_10px_18px_rgba(255,255,255,0.9)] sm:h-[8.8rem] sm:w-[8.8rem]">
          <Icon
            className="text-[4.5rem] sm:text-[4.8rem]"
            style={{ color: skill.iconColor }}
          />
        </div>
      </div>
      <h3
        className="mt-8 text-3xl font-extrabold tracking-tight sm:text-[3.1rem]"
        style={{ color: skill.labelColor }}
      >
        {skill.label}
      </h3>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="bg-[#fbfcfd] py-24 lg:py-28">
      <div className="page-shell">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-5xl font-black tracking-tight text-[#032B4A] sm:text-6xl lg:text-7xl">
            Mes Competences
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {skills.map((skill) => (
            <SkillItem key={skill.label} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
