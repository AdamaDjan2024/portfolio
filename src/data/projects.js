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
      "Développement front-end du site vitrine pour clarifier l'offre de l'agence, renforcer la crédibilité de la marque et faciliter la conversion.",
    technologies: ["Next.js", "Tailwind CSS", "Docker", "Symfony"],
    year: "2025",
    link: "https://mansa.digital/",
    category: "Développement web",
    filterKey: "web",
  },
  {
    id: 2,
    title: "Mansa Talent",
    img: "/images/projects/mansatalents.jpg",
    summary:
      "Plateforme produit RH sur laquelle j'ai construit des interfaces front-end pour simplifier les parcours candidat et recruteur.",
    technologies: ["Next.js", "Tailwind CSS", "Docker", "Symfony"],
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
      "Accompagnement UI/UX pour rendre la consultation des données plus claire, plus lisible et plus accessible.",
    technologies: ["UI/UX", "Design Thinking", "Architecture Info"],
    year: "2023",
    link: "https://guineedata.org/",
    category: "Plateforme data",
    filterKey: "data",
  },
  {
    id: 4,
    title: "Billet Facile",
    img: "/images/projects/billetfacile-official.png",
    summary:
      "Intégration front des écrans de billetterie et d'événement, avec une interface pensée pour des actions rapides.",
    technologies: ["Next.js", "Tailwind CSS", "Docker", "Symfony"],
    year: "2024",
    link: "https://billetfacile.com/",
    category: "Gestion d'événements",
    filterKey: "event",
  },
  {
    id: 5,
    title: "AfriBooks",
    img: "/images/projects/afribooks.png",
    summary:
      "Plateforme culturelle conçue pour améliorer la découverte de la littérature africaine francophone.",
    technologies: ["Figma", "UI/UX", "Design Thinking", "MVP"],
    year: "2024",
    link: "",
    category: "Bibliothèque numérique",
    filterKey: "library",
    isInProgress: true,
  },
];
