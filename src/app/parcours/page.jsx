import { generateMetadata } from "@/utils/seo";
import { GraduationCap, Briefcase, Award } from "lucide-react";
import Link from "next/link";
import SpotlightBackground from "@/components/SpotlightBackground";

export const metadata = generateMetadata(
  "Parcours",
  "Découvrez mon parcours académique, mes expériences professionnelles et mes formations.",
  "/parcours"
);

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

  const Section = ({ title, items, icon }) => (
    <section className="py-10 sm:py-14 border-b border-white/5">
      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-sm font-semibold tracking-[0.18em] text-slate-200/70 uppercase">
          {title}
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-cyan-400/30 to-transparent" />
      </div>

      <ol className="space-y-3">
        {items.map((item) => (
          <li key={`${item.period}-${item.title}`} className="group relative rounded-xl p-5">
            <div
              aria-hidden="true"
              className={[
                "pointer-events-none absolute -inset-x-4 -inset-y-4 hidden rounded-xl opacity-0 transition",
                "lg:block",
                "lg:group-hover:opacity-100",
                "bg-slate-800/40",
                "ring-1 ring-inset ring-white/10",
                "shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)]",
              ].join(" ")}
            />

            <header className="flex flex-wrap items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-slate-500">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-200">
                  {icon}
                </span>
                {item.period}
              </span>
              <h3 className="text-base font-semibold text-slate-100">{item.title}</h3>
            </header>

            <p className="mt-3 text-sm text-slate-200/70">{item.organization}</p>
            <p className="mt-3 text-sm text-slate-200/70">{item.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );

  return (
    <main className="relative min-h-screen">
      <SpotlightBackground />

      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-slate-900 focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-100"
      >
        Aller au contenu
      </a>

      <div id="content" className="page-shell py-10 sm:py-14">
        <header className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500">
            Éducation · Expérience · Formations
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-50">
            Parcours
          </h1>
          <p className="mt-4 max-w-2xl text-base text-slate-200/70">
            Un résumé clair de mes étapes académiques et professionnelles.
          </p>
        </header>

        <Section
          title="Éducation"
          items={education}
          icon={<GraduationCap className="h-4 w-4" aria-hidden="true" />}
        />
        <Section
          title="Expérience Professionnelle"
          items={experience}
          icon={<Briefcase className="h-4 w-4" aria-hidden="true" />}
        />
        <Section
          title="Formations & Certifications"
          items={certifications}
          icon={<Award className="h-4 w-4" aria-hidden="true" />}
        />
        <div className="mt-12 text-center">
          <Link href="/" className="text-sm font-semibold text-slate-200/80 hover:text-slate-100">
            Retour à l’accueil
          </Link>
        </div>
      </div>
    </main>
  );
}
