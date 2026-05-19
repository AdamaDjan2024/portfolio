export const projectFilters = [
  { value: "all", label: "Tous" },
  { value: "web", label: "Web" },
  { value: "career", label: "Emploi" },
  { value: "data", label: "Data" },
  { value: "event", label: "Événement" },
  { value: "library", label: "Bibliothèque" },
];

export const portfolioProjects = [
  {
    id: 1,
    title: "Mansa Digital",
    img: "/images/projects/mansadigital-empereur.png",
    summary:
      "Intégration du site avec une interface claire et structurée pour mieux présenter les services de l'agence et fluidifier la lecture sur mobile comme sur desktop.",
    technologies: ["Next.js", "React", "Tailwind CSS", "UI Integration", "Responsive"],
    year: "2025",
    link: "https://mansa.digital/",
    category: "Site vitrine agence",
    filterKey: "web",
  },
  {
    id: 2,
    title: "Mansa Talents",
    img: "/images/projects/mansatalents.jpg",
    summary:
      "Contribution front-end sur des écrans orientés recrutement: recherche d'emploi, CV et parcours candidat, avec un travail de hiérarchie visuelle pour améliorer la compréhension.",
    technologies: ["Next.js", "React", "Tailwind CSS", "UX Writing", "Responsive"],
    year: "2025",
    link: "https://mansatalents.com/",
    category: "Plateforme emploi",
    filterKey: "career",
  },
  {
    id: 3,
    title: "Guinée Data",
    img: "/images/projects/guineedata.png",
    summary:
      "Travail UI/UX sur la présentation des données pour rendre les informations plus lisibles, mieux organisées et plus accessibles à des profils non techniques.",
    technologies: ["UI/UX", "Figma", "Design Thinking", "Architecture de l'information"],
    year: "2023",
    link: "https://guineedata.org/",
    category: "Plateforme data",
    filterKey: "data",
  },
  {
    id: 4,
    title: "BilletFacile",
    img: "/images/projects/billetfacile-official.png",
    summary:
      "Intégration d'interfaces liées à la billetterie et aux parcours utilisateur, avec une attention particulière à la rapidité d'action, à la clarté des étapes et à la cohérence des composants.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Design System", "Mobile UI"],
    year: "2024",
    link: "https://billetfacile.com/",
    category: "Billetterie en ligne",
    filterKey: "event",
  },
  {
    id: 5,
    title: "AfriBooks",
    img: "/images/projects/afribooks.png",
    summary:
      "Projet en cours autour d'une bibliothèque numérique. Focus sur l'expérience de découverte, l'identité visuelle et la construction d'un parcours de lecture simple et engageant.",
    technologies: ["Figma", "UI/UX", "Design Thinking", "MVP"],
    year: "2024",
    link: "",
    category: "Bibliothèque numérique",
    filterKey: "library",
    isInProgress: true,
  },
];
