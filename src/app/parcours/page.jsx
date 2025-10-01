"use client";

import { GraduationCap, Briefcase, Award } from "lucide-react";
import Link from "next/link";

export default function CareerPage() {
  const education = [
    {
      period: "2020",
      title: "Diplôme en Génie Informatique",
      organization: "Université Mahatma Gandhi",
      description:
        "Spécialisation : Analyse & Développement. Bases solides en programmation, algorithmique et conception de systèmes d’information.",
    },
  ];

  const experience = [
    {
      period: "2021 – 2022",
      title: "Promotrice Commerciale",
      organization: "Calcaire Technologie",
      description:
        "Mise en avant des produits et services auprès de clients potentiels. Démonstrations, communication persuasive et développement de la notoriété de la marque.",
    },
    {
      period: "2021 – 2022",
      title: "Apporteuse d’Affaires",
      organization: "Mouna Technologie",
      description:
        "Identification de prospects, mise en relation avec l’entreprise et contribution à l’élargissement du portefeuille clients.",
    },
    {
      period: "2023",
      title: "Assistante Commerciale (Stage)",
      organization: "DKMAK Corporate",
      description:
        "Appui à l’équipe commerciale : suivi des clients, gestion des dossiers, coordination avec les équipes internes pour fluidifier la relation client.",
    },
    {
      period: "2025 – en cours",
      title: "Développeuse Front-End (Stage)",
      organization: "Mansa Digitale",
      description:
        "Développement d’interfaces modernes et responsives avec **Next.js** et **Tailwind CSS**. Transformation de maquettes **Figma** en pages fonctionnelles et accessibles. Optimisation des performances et amélioration de l’expérience utilisateur sur tous types d’écrans.",
    },
  ];

  const certifications = [
    {
      period: "2023",
      title: "Formations Orange Digital Center",
      organization: "ODC",
      description:
        "Certifications en **Leadership**, **Design Thinking**, **Figma** et **Canva**. Renforcement des compétences en créativité, gestion d’équipe et design d’expériences.",
    },
    {
      period: "Octobre 2023 – Septembre 2025",
      title: "Formation Développement Web Front-End",
      organization: "Nimba Hub",
      description:
        "Apprentissage structuré du **HTML, CSS, JavaScript moderne et React**. Développement de projets concrets et collaboration en équipe.",
    },
    {
      period: "2025",
      title: "Certification UX/UI Design",
      organization: "Udemy",
      description:
        "Spécialisation en expérience utilisateur (UX) et interface utilisateur (UI). Meilleure compréhension du parcours utilisateur et des bonnes pratiques de design.",
    },
  ];

  const Section = ({ title, items, icon, color }) => (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <span className={`p-2 rounded-full ${color}`}>{icon}</span>
        {title}
      </h2>
      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="border-l border-gray-700 pl-6">
            <p className="text-sm font-semibold text-primary-400">
              {item.period}
            </p>
            <h3 className="mt-1 font-semibold text-white text-lg">
              {item.title}
            </h3>
            <p className="text-gray-300 text-sm">{item.organization}</p>
            <p className="mt-2 text-gray-300 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gray-900 text-gray-100">
      <div className="container px-4 md:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Mon Parcours</h1>
        <Section
          title="Éducation"
          items={education}
          icon={<GraduationCap className="w-5 h-5 text-white" />}
          color="bg-blue-500"
        />
        <Section
          title="Expérience Professionnelle"
          items={experience}
          icon={<Briefcase className="w-5 h-5 text-white" />}
          color="bg-green-500"
        />
        <Section
          title="Formations & Certifications"
          items={certifications}
          icon={<Award className="w-5 h-5 text-white" />}
          color="bg-purple-500"
        />
        <div className="mt-12 text-center">
          <Link href="/" className="text-primary-500 hover:underline">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </section>
  );
}
